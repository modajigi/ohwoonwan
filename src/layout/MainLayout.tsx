"use client"

import React, { Suspense } from "react";
import { usePathname } from "next/navigation";

const HomeHeader = React.lazy(() => import("./RootLayout/Header"));
const ChatHeader = React.lazy(() => import("./Chat/Header"));

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  const pathname = usePathname();

  const Header = pathname === '/' ? HomeHeader : ChatHeader;

  return (
    <main className="flex justify-center min-h-screen bg-gray-200">
      <section className="flex flex-col w-full max-w-[500px] bg-gradient-to-b from-[#FFBE98] to-white">
        <Suspense fallback={<p>Loading</p>}>
          <Header />
        </Suspense>
        {children}
      </section>
    </main>
  );
}
