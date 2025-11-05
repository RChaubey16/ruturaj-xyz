"use client";

import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { useTheme } from "next-themes";

const technologies = [
  {
    id: "typescript",
    tech: "TypeScript",
    techHref: "https://www.typescriptlang.org",
    imageUrl: {
      light: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
      dark: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
    },
    imageAltText: "TypeScript logo",
  },
  {
    id: "javascript",
    tech: "JavaScript",
    techHref: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    imageUrl: {
      light: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
      dark: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
    },
    imageAltText: "JavaScript logo",
  },
  {
    id: "go",
    tech: "Go",
    techHref: "https://go.dev",
    imageUrl: {
      light: "https://icon.icepanel.io/Technology/svg/Go.svg",
      dark: "https://icon.icepanel.io/Technology/svg/Go.svg",
    },
    imageAltText: "Go lang logo",
  },
  {
    id: "python",
    tech: "Python",
    techHref: "https://www.python.org",
    imageUrl: {
      light: "https://icon.icepanel.io/Technology/svg/Python.svg",
      dark: "https://icon.icepanel.io/Technology/svg/Python.svg",
    },
    imageAltText: "Python logo",
  },
  {
    id: "php",
    tech: "PHP",
    techHref: "https://www.php.net",
    imageUrl: {
      light: "https://icon.icepanel.io/Technology/svg/PHP.svg",
      dark: "https://icon.icepanel.io/Technology/svg/PHP.svg",
    },
    imageAltText: "PHP logo",
  },
  {
    id: "nodejs",
    tech: "Node.js",
    techHref: "https://nodejs.org",
    imageUrl: {
      light: "https://icon.icepanel.io/Technology/svg/Node.js.svg",
      dark: "https://icon.icepanel.io/Technology/svg/Node.js.svg",
    },
    imageAltText: "Node.js logo",
  },
  {
    id: "nextjs",
    tech: "Next.js",
    techHref: "https://nextjs.org",
    imageUrl: {
      light: "https://icon.icepanel.io/Technology/svg/Next.js.svg",
      dark: "/images/tech/nextjs-dark-icon.png",
    },
    imageAltText: "Next.js logo",
  },
  {
    id: "react",
    tech: "React",
    techHref: "https://react.dev",
    imageUrl: {
      light: "https://icon.icepanel.io/Technology/svg/React.svg",
      dark: "https://icon.icepanel.io/Technology/svg/React.svg",
    },
    imageAltText: "React logo",
  },
  {
    id: "gatsby",
    tech: "Gatsby",
    techHref: "https://www.gatsbyjs.com",
    imageUrl: {
      light: "https://icon.icepanel.io/Technology/svg/Gatsby.svg",
      dark: "https://icon.icepanel.io/Technology/svg/Gatsby.svg",
    },
    imageAltText: "Gatsby logo",
  },
  {
    id: "tailwindcss",
    tech: "Tailwind CSS",
    techHref: "https://tailwindcss.com",
    imageUrl: {
      light: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
      dark: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    },
    imageAltText: "Tailwind CSS logo",
  },
  {
    id: "shadcnui",
    tech: "Shadcn UI",
    techHref: "https://ui.shadcn.com",
    imageUrl: {
      light: "/images/tech/shadcn-light-icon.png",
      dark: "/images/tech/shadcn-dark-icon.png",
    },
    imageAltText: "Shadcn UI logo",
  },
  {
    id: "redux",
    tech: "Redux",
    techHref: "https://redux.js.org",
    imageUrl: {
      light: "https://icon.icepanel.io/Technology/svg/Redux.svg",
      dark: "https://icon.icepanel.io/Technology/svg/Redux.svg",
    },
    imageAltText: "Redux logo",
  },
  {
    id: "graphql",
    tech: "GraphQL",
    techHref: "https://graphql.org",
    imageUrl: {
      light: "https://icon.icepanel.io/Technology/svg/GraphQL.svg",
      dark: "https://icon.icepanel.io/Technology/svg/GraphQL.svg",
    },
    imageAltText: "GraphQL logo",
  },
  {
    id: "mysql",
    tech: "MySQL",
    techHref: "https://www.mysql.com",
    imageUrl: {
      light: "https://icon.icepanel.io/Technology/svg/MySQL.svg",
      dark: "https://icon.icepanel.io/Technology/svg/MySQL.svg",
    },
    imageAltText: "MySQL logo",
  },
  {
    id: "postgresql",
    tech: "PostgreSQL",
    techHref: "https://www.postgresql.org",
    imageUrl: {
      light: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
      dark: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
    },
    imageAltText: "PostgreSQL logo",
  },
  {
    id: "mongodb",
    tech: "MongoDB",
    techHref: "https://www.mongodb.com",
    imageUrl: {
      light: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
      dark: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
    },
    imageAltText: "MongoDB logo",
  },
  {
    id: "drupal",
    tech: "Drupal",
    techHref: "https://www.drupal.org",
    imageUrl: {
      light: "https://icon.icepanel.io/Technology/svg/Drupal.svg",
      dark: "https://icon.icepanel.io/Technology/svg/Drupal.svg",
    },
    imageAltText: "Drupal logo",
  },
  {
    id: "tanstack",
    tech: "Tanstack Start",
    techHref: "https://tanstack.com/",
    imageUrl: {
      light: "https://tanstack.com/images/logos/logo-color-100.png",
      dark: "https://tanstack.com/images/logos/logo-color-100.png",
    },
    imageAltText: "Tanstack start logo",
  },
  {
    id: "sanity",
    tech: "Sanity",
    techHref: "https://www.sanity.io",
    imageUrl: {
      light: "/images/tech/sanity-icon.png",
      dark: "/images/tech/sanity-icon.png",
    },
    imageAltText: "Sanity logo",
  },
  {
    id: "docker",
    tech: "Docker",
    techHref: "https://www.docker.com",
    imageUrl: {
      light: "https://icon.icepanel.io/Technology/svg/Docker.svg",
      dark: "https://icon.icepanel.io/Technology/svg/Docker.svg",
    },
    imageAltText: "Docker logo",
  },
  {
    id: "git",
    tech: "Git",
    techHref: "https://git-scm.com",
    imageUrl: {
      light: "https://icon.icepanel.io/Technology/svg/Git.svg",
      dark: "https://icon.icepanel.io/Technology/svg/Git.svg",
    },
    imageAltText: "Git logo",
  },
  {
    id: "figma",
    tech: "Figma",
    techHref: "https://www.figma.com",
    imageUrl: {
      light: "https://icon.icepanel.io/Technology/svg/Figma.svg",
      dark: "https://icon.icepanel.io/Technology/svg/Figma.svg",
    },
    imageAltText: "Figma logo",
  },
  {
    id: "claude",
    tech: "Claude",
    techHref: "https://claude.ai",
    imageUrl: {
      light: "/images/tech/claude-icon.png",
      dark: "/images/tech/claude-icon.png",
    },
    imageAltText: "Claude logo",
  },
];

const Tech = ({ tech = technologies }) => {
  const { theme, systemTheme } = useTheme();

  // Determine the current theme
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";

  return (
    <>
      {tech.map((item, index) => (
        <div key={index}>
          <Link href={item.techHref} id={item.id}>
            <div className={`relative w-8 h-8`}>
              <Image
                src={isDarkMode ? item.imageUrl.dark : item.imageUrl.light}
                fill
                alt={item.imageAltText}
                className="object-contain"
              />
            </div>
          </Link>
          <Tooltip anchorSelect={`#${item.id}`} content={item.tech} />
        </div>
      ))}
    </>
  );
};

export default Tech;
