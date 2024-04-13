import { Metadata } from 'next';

// layout
import MainLayout from '@/layout/MainLayout';
// component
import Counter from './CounterTest';

export const metadata: Metadata = {
  title: '오늘의 운세',
  description: '오늘의 운세',
};

const Today = () => {
  return (
    <MainLayout>
      <main className="bg-blue-500 h-screen w-full flex items-center justify-center">
        <Counter />
      </main>
    </MainLayout>
  );
};

export default Today;
