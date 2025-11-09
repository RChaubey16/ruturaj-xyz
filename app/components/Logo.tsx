'use client';

import Link from "next/link";
import Image from "next/image";
// import { useState, useEffect } from "react";

export const Logo = () => {
  // const [showLogo, setShowLogo] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 300) {
  //       setShowLogo(true);
  //     } else {
  //       setShowLogo(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const showLogo = true;

  return (
    <Link href={"/"}>
      <div 
        className={`relative w-12 h-12 rounded-full transition-opacity duration-300 ${
          showLogo ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          src="/images/profile.jpg"
          fill
          alt="A picture of me in ghibli style"
          className="object-cover rounded-full"
        />
      </div>
    </Link>
  );
};
