import MainLayout from '@/layout/MainLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '사주',
  description: '사주',
};

const Fortune = () => {
  return (
    <MainLayout>
      <main className="bg-blue-500 h-screen w-full flex items-center justify-center">123</main>
    </MainLayout>
  );
};

export default Fortune;
