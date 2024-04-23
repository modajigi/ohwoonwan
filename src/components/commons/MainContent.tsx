"use client";

import { useStore } from '@/store/store';

const MainContent = () => {
  const { selections } = useStore();

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-blue-500">
      {Object.entries(selections).map(([key, value]) => (
        value && <p key={key}>선택된 {key}: {value}</p>
      ))}
    </div>
  );
};

export default MainContent;
