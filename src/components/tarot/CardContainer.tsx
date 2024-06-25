"use client";

import React, { useState } from "react";
// component
import Card from "./Card";

const CardsContainer = () => {
  const frontImages = [
    "/images/apple.png",
    "/images/oh-today.png",
    "/images/oh.png",
    "/images/apple.png",
    "/images/oh-today.png",
    "/images/oh.png",
    "/images/apple.png",
    "/images/oh-today.png",
    "/images/oh.png",
    "/images/apple.png",
    "/images/oh-today.png",
    "/images/oh.png",
    "/images/apple.png",
    "/images/oh-today.png",
    "/images/oh.png",
  ];
  const backImage = "/images/tarot.png";

  const cardAlphabets = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r"],
    ["s", "t", "u"],
    ["v", "w", "x"],
    ["y", "z", "a"],
    ["b", "c", "d"],
    ["e", "f", "g"],
    ["h", "i", "j"],
    ["k", "l", "m"],
    ["n", "o", "p"],
    ["q", "r", "s"],
  ];

  const [clickCounts, setClickCounts] = useState<number[]>(
    new Array(frontImages.length).fill(0)
  );

  const handleCardClick = (index: number, imgSrc: string) => {
    const newClickCounts = [...clickCounts];
    newClickCounts[index] += 1;
    setClickCounts(newClickCounts);

    if (newClickCounts[index] === 2) {
      const alphabets = cardAlphabets[index];
      fetch("https://mockapi.example.com/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imgSrc, letters: alphabets }), 
      })
        .then((response) => response.json())
        .then((data) => console.log("Success:", data))
        .catch((error) => console.error("Error:", error));
    }
  };

  return (
    <div
      className="fixed bottom-0 left-0"
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        height: "100vh",
      }}
    >
      {frontImages.map((imgSrc, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            bottom: "80px",
            left: `${index * 20}px`,
            zIndex: index,
            width: "100px",
            height: "150px",
          }}
          onClick={() => handleCardClick(index, imgSrc)}
        >
          <Card frontImageSrc={imgSrc} backImageSrc={backImage} />
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
