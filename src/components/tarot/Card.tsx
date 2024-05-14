"use client";

import React, { useState, useEffect } from "react";
// component
import CardFront from "./CardFront";
import CardBack from "./CardBack";

interface CardProps {
  frontImageSrc: string;
  backImageSrc: string;
}

function Card({ frontImageSrc, backImageSrc }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [moveY, setMoveY] = useState(0);

  useEffect(() => {
    if (moveY === -300) {
      setTimeout(() => {
        setIsFlipped(true);
      }, 1000);
    }
  }, [moveY]);

  const handleClick = () => {
    if (moveY === 0) {
      setMoveY(-20);
    } else if (moveY === -20) {
      setMoveY(-300);
    }
  };

  return (
    <div
      className="relative mx-auto cursor-pointer"
      style={{
        perspective: "1000px",
        width: "100px",
        height: "165px",
        bottom: "0",
        transform: `translateY(${moveY}px)`,
        transition: "transform 0.7s cubic-bezier(0.22, 0.61, 0.36, 1)",
      }}
      onClick={handleClick}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          transition: "transform 0.7s ease-in-out",
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <CardFront imageSrc={frontImageSrc} />
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
          }}
        >
          <CardBack imageSrc={backImageSrc} />
        </div>
      </div>
    </div>
  );
}

export default Card;
