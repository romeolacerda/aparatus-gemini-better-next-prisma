export const INITIAL_MESSAGES = [
  {
    id: "system-welcome",
    role: "system" as const,
    parts: [
      {
        type: "text" as const,
        text: "Seu assistente de agendamentos está online.",
      },
    ],
  },
  {
    id: "assistant-welcome",
    role: "assistant" as const,
    parts: [
      {
        type: "text" as const,
        text: "Olá! Sou o Aparatus, seu assistente pessoal.\n\nEstou aqui para te auxiliar a agendar seu corte ou barba, encontrar as barbearias disponíveis perto de você e responder às suas dúvidas.",
      },
    ],
  },
];

export const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
];