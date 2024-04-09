import Link from 'next/link';

import MainLayout from '@/layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <main className="bg-red-500 h-screen w-full flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <Link href="/fortune" passHref>
            <button className="text-white font-bold py-2 px-4 rounded">Fortune</button>
          </Link>
          <Link href="/today" passHref>
            <button className="text-white font-bold py-2 px-4 rounded">Today</button>
          </Link>
        </div>
      </main>
    </MainLayout>
  );
}
