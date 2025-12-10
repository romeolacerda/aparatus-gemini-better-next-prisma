import { prisma } from "@/lib/prisma";
import Image from "next/image";
import banner from '../public/banner.png';
import BarbershopItem from "./_components/barbershop-item";
import Footer from "./_components/footer";
import Header from "./_components/header";
import { PageContainer, PageSection, PageSectionScroller, PageSectionTitle } from "./_components/page";
import SearchInput from "./_components/search-input";

export default async function Home() {
  const recommendedBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "asc"
    }
  })

  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "desc"
    }
  })
  return (
    <main>
      <Header />
      <PageContainer>
        <SearchInput />

        <Image
          src={banner}
          alt="Agende aqui!"
          sizes="100w"
          className="h-auto w-full"
        />

        <PageSection>

          <PageSectionTitle>
            Recomendados
          </PageSectionTitle>
          <PageSectionScroller>
            {recommendedBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSection>

        <PageSection>
          <PageSectionTitle>
            Populares
          </PageSectionTitle>
          <PageSectionScroller>
            {popularBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSection>

      </PageContainer>
      <Footer />
    </main>
  )
}
