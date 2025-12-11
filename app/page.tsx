import { prisma } from "@/lib/prisma";
import Image from "next/image";
import bannerDesktop from "../public/banner-desktop.png";
import bannerMobile from "../public/banner-mobile.png";
import BarbershopItem from "./_components/barbershop-item";
import Footer from "./_components/footer";
import Header from "./_components/header";
import {
  PageContainer,
  PageSection,
  PageSectionScroller,
  PageSectionTitle,
} from "./_components/page";
import QuickSearchButtons from "./_components/quick-search-buttons";
import SearchInput from "./_components/search-input";


const Home = async () => {
  const recommendedBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "asc",
    },
  });
  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <main>
      <Header />
      <PageContainer>
        <SearchInput />

        <QuickSearchButtons />

        <picture>
          <source media="(max-width: 768px)" srcSet={bannerMobile.src} />
          <Image
            src={bannerDesktop}
            alt="Banner"
            sizes="100vw"
            className="w-full h-auto rounded-3xl"
          />
        </picture>

        <PageSection>
          <PageSectionTitle>Recomendados</PageSectionTitle>
          <PageSectionScroller>
            {recommendedBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSection>

        <PageSection>
          <PageSectionTitle>Populares</PageSectionTitle>
          <PageSectionScroller>
            {popularBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSection>
      </PageContainer>
      <Footer />
    </main>
  );
};

export default Home;