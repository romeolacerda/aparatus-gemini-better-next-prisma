"use server";

import { actionClient } from "@/lib/action-client";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { endOfDay, format, startOfDay } from "date-fns";
import { returnValidationErrors } from "next-safe-action";
import { headers } from "next/headers";
import z from "zod";
import { TIME_SLOTS } from "../config/constants";

const inputSchema = z.object({
  barbershopId: z.string(),
  date: z.date(),
});

export const getDateAvailableTimeSlots = actionClient
  .inputSchema(inputSchema)
  .action(async ({ parsedInput: { barbershopId, date } }) => {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session?.user) {
      returnValidationErrors(inputSchema, {
        _errors: ["Unauthorized"],
      });
    }
    const bookings = await prisma.booking.findMany({
      where: {
        barbershopId,
        date: {
          gte: startOfDay(date),
          lte: endOfDay(date),
        },
      },
    });
    const occupiedSlots = bookings.map((booking) =>
      format(booking.date, "HH:mm"),
    );
    const availableTimeSlots = TIME_SLOTS.filter(
      (slot) => !occupiedSlots.includes(slot),
    );
    return availableTimeSlots;
  });
