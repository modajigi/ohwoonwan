import { Metadata } from "next";
import dynamic from "next/dynamic";

// layout
import MainLayout from "@/layout/MainLayout";
import Footer from "@/layout/Chat/Footer";
import Header from "@/layout/Chat/Header";

export const metadata: Metadata = {
  title: "오늘의 운세",
  description: "오늘의 운세",
};

const MainContent = dynamic(() => import("@/components/chat/MainContent"), {
  ssr: false,
});

const Today = () => {
  return (
    <MainLayout noHeader={true}>
      <Header />
      <MainContent />
      <Footer />
    </MainLayout>
  );
};

export default Today;
