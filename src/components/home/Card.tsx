import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  imageUrl: string;
  text: string;
  link: string;
}

const Card = ({ imageUrl, text, link }: CardProps): JSX.Element => {
  return (
    <div className="block overflow-hidden text-center rounded-lg shadow-lg">
      <Link href={link} passHref>
        <div className="relative w-full" style={{ paddingTop: "5px" }}> 
          <Image
            src={imageUrl}
            alt={text}
            layout="responsive"
            width={1600} 
            height={900} 
            objectFit="cover"
          />
        </div>
      </Link>
      <div className="p-4 bg-white">
        <p className="text-lg font-bold">{text}</p>
      </div>
    </div>
  );
};

export default Card;
