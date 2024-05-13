"use client";

import React, { useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

interface CardProps {
  frontImageSrc: string;
  backImageSrc: string;
}

const Card = ({ frontImageSrc, backImageSrc }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    console.log("Card clicked!");
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="relative w-64 mx-auto cursor-pointer perspective-1000 h-96"
      onClick={toggleFlip}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          transition: "transform 0.7s",
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <CardFront imageSrc={frontImageSrc} />
        <CardBack imageSrc={backImageSrc} />
      </div>
    </div>
  );
};

export default Card;
