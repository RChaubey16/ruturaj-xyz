"use client"

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const TechCard = ({ name, logoSrc, darkLogoSrc = "", href = "#" }) => {
  const { theme, systemTheme } = useTheme();

  // Determine the current theme
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";
  return (
    <Link
      href={href}
      className="w-fit flex items-center gap-2 p-2 border border-gray-300 dark:border-gray-700 rounded-md hover:shadow-md transition-shadow duration-200"
    >
      <div className="relative w-5 h-5">
        <Image
          src={isDarkMode ? darkLogoSrc : logoSrc}
          alt={`${name} logo`}
          fill
          sizes="20px"
          className="object-contain"
        />
      </div>
      <span className="text-sm font-medium">{name}</span>
    </Link>
  );
};

export default TechCard;
