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
      imageUrl: "/images/thumbnail-maker_2024428.png",
      text: "Fortune",
      link: "/fortune"
    },
    {
      imageUrl: "/images/thumbnail-maker_2024428.png",
      text: "Today",
      link: "/today"
    }
  ];

  return (
    <MainLayout>
      <main className="flex items-center justify-center w-full h-screen bg-red-500">
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
