import React from "react";
import Image from "next/image";

interface FrontCardProps {
  imageSrc: string;
}

const FrontCard = ({ imageSrc }: FrontCardProps) => {
  return (
    <div className="absolute w-full h-full bg-white rounded-lg shadow-lg backface-visibility-hidden">
      <Image
        src={imageSrc}
        alt="Front of Card"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default FrontCard;
