import MainLayout from '@/layout/MainLayout';

import Card from '@/components/home/Card';

interface CardData {
  imageUrl: string;
  text: string;
  link: string;
}

const Home = (): JSX.Element => {
  const cards: CardData[] = [
    {
      imageUrl: "/images/oh.png",
      text: "내 사주가 궁금하다면?",
      link: "/fortune"
    },
    {
      imageUrl: "/images/oh-today.png",
      text: "오늘의 운세가 궁금하다면?",
      link: "/today"
    }
  ];

  return (
    <MainLayout>
      <main className="flex items-center justify-center w-full h-screen bg-white">
        <div className="grid grid-cols-1 gap-4 p-4">
          {cards.map((card, index) => (
            <Card key={index} imageUrl={card.imageUrl} text={card.text} link={card.link} />
          ))}
        </div>
      </main>
    </MainLayout>
  );
};

export default Home;
