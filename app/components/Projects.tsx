import { Button } from "@/components/ui/button";
import GlowCard from "./GlowCard";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectData } from "@/types/project";

export const projects: ProjectData[] = [
  {
    id: "react-kequence",
    type: "tech",
    image: {
      src: "/images/projects/react-keyquence.png",
      alt: "React keyquence npm home page",
    },
    status: { text: "Completed", className: "status-completed" },
    title: "React Keyquence",
    description:
      "A lightweight React component library that listens for keyboard sequences and triggers callbacks. Perfect for adding Easter eggs to your React applications!",
    techStack: [
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
        id: "react",
        tech: "React",
        techHref: "https://react.dev",
        imageUrl: {
          light: "https://icon.icepanel.io/Technology/svg/React.svg",
          dark: "https://icon.icepanel.io/Technology/svg/React.svg",
        },
        imageAltText: "React logo",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/RChaubey16/react-keyquence",
        variant: "outline",
        icon: "GithubIcon",
      },
      {
        label: "Package",
        href: "https://www.npmjs.com/package/react-keyquence",
        variant: "default",
        icon: "Globe",
      },
    ],
  },
  {
    id: "name-my-variable",
    type: "tech",
    image: {
      src: "/images/projects/name-my-variable.png",
      alt: "Name my variable home page",
    },
    status: { text: "Completed", className: "status-completed" },
    title: "Name My Variable",
    description:
      "A Visual Studio Code extension that helps developers write more readable code by suggesting meaningful variable and function names.",
    techStack: [
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
        id: "gemini",
        tech: "Gemini",
        techHref: "https://gemini.google.com/",
        imageUrl: {
          light: "/images/tech/gemini-icon.png",
          dark: "/images/tech/gemini-icon.png",
        },
        imageAltText: "Gemini logo",
      },
      {
        id: "vs-code",
        tech: "VS Code",
        techHref: "https://code.visualstudio.com/",
        imageUrl: {
          light:
            "https://icon.icepanel.io/Technology/svg/Visual-Studio-Code-%28VS-Code%29.svg",
          dark: "https://icon.icepanel.io/Technology/svg/Visual-Studio-Code-%28VS-Code%29.svg",
        },
        imageAltText: "VS code logo",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/RChaubey16/name-my-variable",
        variant: "outline",
        icon: "GithubIcon",
      },
      {
        label: "Extension",
        href: "https://marketplace.visualstudio.com/items?itemName=RuturajChaubey.name-my-variable",
        variant: "default",
        icon: "Globe",
      },
    ],
  },
  {
    id: "tts",
    type: "tech",
    image: {
      src: "/images/projects/text-to-translate.png",
      alt: "Text to translate app home page",
    },
    status: { text: "In Progress", className: "status-in-progress" },
    title: "Text to Speech",
    description:
      "A lightweight web app that lets users translate text between multiple languages and instantly hear the results through text-to-speech (TTS) playback.",
    techStack: [
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
        id: "google-cloud",
        tech: "Google Cloud",
        techHref: "https://console.cloud.google.com/",
        imageUrl: {
          light: "https://icon.icepanel.io/Technology/svg/Google-Cloud.svg",
          dark: "https://icon.icepanel.io/Technology/svg/Google-Cloud.svg",
        },
        imageAltText: "Google cloud logo",
      },
      {
        id: "vercel",
        tech: "Vercel",
        techHref: "https://www.vercel.com",
        imageUrl: {
          light:
            "https://icon.icepanel.io/Technology/png-shadow-512/Vercel.png",
          dark: "/images/tech/vercel-light.png",
        },
        imageAltText: "Vercel logo",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/RChaubey16/tts-translate-app",
        variant: "outline",
        icon: "GithubIcon",
      },
      {
        label: "Demo",
        href: "https://tts-translate-app-orcin.vercel.app/",
        variant: "default",
        icon: "Globe",
      },
    ],
  },
  {
    id: "dev-connector",
    type: "tech",
    image: {
      src: "/images/projects/devconnector.png",
      alt: "Dev connector home page",
    },
    status: { text: "Completed", className: "status-completed" },
    title: "DevConnector",
    description:
      "A social networking platform for developers that enables devs to create profiles, share posts, and connect with other developers.",
    techStack: [
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
        id: "postman",
        tech: "Postman",
        techHref: "https://postman.com",
        imageUrl: {
          light: "https://icon.icepanel.io/Technology/svg/Postman.svg",
          dark: "https://icon.icepanel.io/Technology/svg/Postman.svg",
        },
        imageAltText: "Postman logo",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/RChaubey16/DevConnector",
        variant: "outline",
        icon: "GithubIcon",
      },
    ],
  },
  {
    id: "dev-toolkit",
    type: "tech",
    image: {
      src: "/images/projects/dev-toolkit.png",
      alt: "Dev toolkit npm package home page",
    },
    status: { text: "Completed", className: "status-completed" },
    title: "Dev Toolkit",
    description:
      "A compact library offering a set of handy utility functions, designed to simplify common development tasks and improve code efficiency.",
    techStack: [
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
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/RChaubey16/dev-utils-toolkit",
        variant: "outline",
        icon: "GithubIcon",
      },
      {
        label: "Package",
        href: "https://www.npmjs.com/package/dev-utils-toolkit",
        variant: "default",
        icon: "Globe",
      },
    ],
  },
];

const Projects = ({ useSlice = true }) => {
  const visibleProjects = useSlice ? projects.slice(0, 4) : projects;
  return (
    <section id="builds" className="mt-20">
      <h1 className="heading">Builds</h1>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleProjects.map((proj) => (
          <GlowCard key={proj.id} project={proj} />
        ))}
      </div>

      {useSlice && (
        <div className="mt-8 flex justify-center">
          <Link href={"/builds"} className="">
            <Button
              variant="outline"
              size={"lg"}
              className="flex items-center gap-2 cursor-pointer transition-all ease-in-out duration-200 hover:gap-4"
            >
              More Builds
              <ArrowUpRight />
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Projects;
