import { Metadata } from "next";
import MainLayout from "@/layout/MainLayout";
import CardsContainer from "@/components/tarot/CardContainer";

export const metadata: Metadata = {
  title: "타로",
  description: "타로",
};

const Tarot = () => {
  return (
    <MainLayout>
      <CardsContainer />
    </MainLayout>
  );
};

export default Tarot;
