import React from 'react';
// component
import Card from './Card';

const CardsContainer = () => {
  const frontImages = [
    "/images/apple.png",
    "/images/oh-today.png",
    "/images/oh.png",
  ];
  const backImage = "/images/tarot.png";

  return (
    <div
      className="fixed bottom-0"
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {frontImages.map((imgSrc, index) => (
        <Card key={index} frontImageSrc={imgSrc} backImageSrc={backImage} />
      ))}
    </div>
  );
};

export default CardsContainer;
