"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

type TechItem = {
  name: string;
  href: string;
  logoSrc: string;
  darkLogoSrc: string;
};

const TechCard = ({
  name,
  logoSrc,
  darkLogoSrc = "",
  href = "#",
}: TechItem) => {
  const { theme, systemTheme } = useTheme();

  // Determine the current theme
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";
  return (
    <Link
      href={href}
      target="_blank"
      className="w-fit flex items-center gap-2 p-2 border border-gray-300 dark:border-gray-700 bg-card rounded-md hover:shadow-md transition-shadow duration-200"
    >
      <div className="relative w-5 h-5">
        <Image
          src={isDarkMode ? darkLogoSrc : logoSrc}
          alt={`${name} logo`}
          fill
          sizes="20px"
          className="object-contain rounded-sm"
        />
      </div>
      <span className="text-sm font-medium">{name}</span>
    </Link>
  );
};

export default TechCard;
