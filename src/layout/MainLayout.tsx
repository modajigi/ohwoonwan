import React from 'react';
import Header from './RootLayout/Header';

interface LayoutProps {
  children: React.ReactNode;
  noHeader?: boolean;
  noFooter?: boolean;
}

export default function Layout (props: LayoutProps) {
  const { children, noHeader, noFooter } = props;

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center">
      <div className="flex flex-col w-full max-w-[500px]">
        {!noHeader && <Header />}
        <main className="flex-1">
          {children}
        </main>
        {/* {!noFooter && <Footer />} */}
      </div>
    </div>
  );
};
