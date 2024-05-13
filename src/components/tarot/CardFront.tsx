import React from "react";
import Image from "next/image";

interface CardFrontProps {
  imageSrc: string;
}

const CardFront = ({ imageSrc }: CardFrontProps) => {
  return (
    <div className="absolute w-full h-full bg-white rounded-lg shadow-lg backface-visibility-hidden">
      <Image
        src="/images/apple.png"
        alt="카드 앞면"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default CardFront;
