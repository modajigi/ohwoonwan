"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" passHref>
      <Image src="/images/apple.png" alt="logo" width={40} height={40} />
    </Link>
  );
}
