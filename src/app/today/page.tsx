import { Metadata } from 'next';

import MainLayout from '@/layout/MainLayout';
import Footer from './Footer';
import dynamic from 'next/dynamic';
import { useState } from 'react';

export const metadata: Metadata = {
  title: '오늘의 운세',
  description: '오늘의 운세',
};

const MainContent = dynamic(() => import('@/components/commons/MainContent'), {
  ssr: false,
});

const Today = () => {
  return (
    <MainLayout noHeader={true}>
      <MainContent />
      <Footer />
    </MainLayout>
  );
};

export default Today;