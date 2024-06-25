import React from "react";
import Image from "next/image";

interface CardBackProps {
  imageSrc: string;
}

const CardBack = ({ imageSrc }: CardBackProps) => {
  return (
    <div className="absolute w-full h-full transform bg-white rounded-lg shadow-lg rotate-y-180">
      <Image
        src={imageSrc}
        alt="Back of Card"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default CardBack;
