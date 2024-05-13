import { Metadata } from "next";

import MainLayout from "@/layout/MainLayout";
import Header from "@/layout/Chat/Header";
import MainContent from "@/components/chat/MainContent";
import Card from "@/components/tarot/Card";

export const metadata: Metadata = {
  title: "타로",
  description: "타로",
};

const Tarot = () => {
  return (
    <MainLayout>
      <Card />
    </MainLayout>
  );
};

export default Tarot;
