import { Button } from "@/components/ui/button";
import GlowCard from "./GlowCard";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectData } from "@/types/project";

export const projects: ProjectData[] = [
  {
    id: "glow-up",
    type: "tech",
    image: {
      src: "https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg",
      alt: "banner",
    },
    status: { text: "Completed", className: "status-completed" },
    title: "Hover for the Glow-Up",
    description:
      "Glide your cursor here and watch magic unfold — an experience designed just for you.",
    techStack: [
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
    ],
    links: [
      { label: "GitHub", href: "#", variant: "outline", icon: "GithubIcon" },
      { label: "Demo", href: "#", variant: "default", icon: "Globe" },
    ],
  },
  {
    id: "ai-chat",
    type: "tech",
    image: {
      src: "https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg",
      alt: "AI Chatbot Dashboard",
    },
    status: { text: "In Progress", className: "status-in-progress" },
    title: "ConversAI — Smart Chatbot",
    description:
      "ConversAI is an AI-powered chatbot that learns from user interactions and provides contextual, human-like responses using OpenAI’s GPT models.",
    techStack: [
      {
        id: "nextjs",
        tech: "Next.js",
        techHref: "https://nextjs.org",
        imageUrl: {
          light: "https://icon.icepanel.io/Technology/svg/Next.js.svg",
          dark: "https://icon.icepanel.io/Technology/svg/Next.js.svg",
        },
        imageAltText: "Next.js logo",
      },
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
        id: "openai",
        tech: "OpenAI API",
        techHref: "https://platform.openai.com",
        imageUrl: {
          light: "https://icon.icepanel.io/Technology/svg/OpenAI.svg",
          dark: "https://icon.icepanel.io/Technology/svg/OpenAI.svg",
        },
        imageAltText: "OpenAI logo",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "#",
        variant: "outline",
        icon: "GithubIcon",
      },
      {
        label: "Demo",
        href: "#",
        variant: "default",
        icon: "Globe",
      },
    ],
  },
  {
    id: "weatherflow",
    type: "tech",
    image: {
      src: "https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg",
      alt: "Weather Dashboard",
    },
    status: { text: "Completed", className: "status-completed" },
    title: "WeatherFlow — Real-time Weather App",
    description:
      "A visually stunning weather dashboard that provides real-time forecasts and climate insights powered by OpenWeather API.",
    techStack: [
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
        id: "tailwind",
        tech: "Tailwind CSS",
        techHref: "https://tailwindcss.com",
        imageUrl: {
          light: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
          dark: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
        },
        imageAltText: "Tailwind logo",
      },
      {
        id: "node",
        tech: "Node.js",
        techHref: "https://nodejs.org",
        imageUrl: {
          light: "https://icon.icepanel.io/Technology/svg/Node.js.svg",
          dark: "https://icon.icepanel.io/Technology/svg/Node.js.svg",
        },
        imageAltText: "Node.js logo",
      },
    ],
    links: [
      { label: "GitHub", href: "#", variant: "outline", icon: "GithubIcon" },
      { label: "Demo", href: "#", variant: "default", icon: "Globe" },
    ],
  },
  {
    id: "taskify",
    type: "tech",
    image: {
      src: "https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg",
      alt: "Task Management App",
    },
    status: { text: "Completed", className: "status-completed" },
    title: "Taskify — Team Productivity Tracker",
    description:
      "A minimal, intuitive task management platform to organize sprints, assign priorities, and track team productivity.",
    techStack: [
      {
        id: "vue",
        tech: "Vue.js",
        techHref: "https://vuejs.org",
        imageUrl: {
          light: "https://icon.icepanel.io/Technology/svg/Vue.js.svg",
          dark: "https://icon.icepanel.io/Technology/svg/Vue.js.svg",
        },
        imageAltText: "Vue logo",
      },
      {
        id: "firebase",
        tech: "Firebase",
        techHref: "https://firebase.google.com",
        imageUrl: {
          light: "https://icon.icepanel.io/Technology/svg/Firebase.svg",
          dark: "https://icon.icepanel.io/Technology/svg/Firebase.svg",
        },
        imageAltText: "Firebase logo",
      },
      {
        id: "sass",
        tech: "Sass",
        techHref: "https://sass-lang.com",
        imageUrl: {
          light: "https://icon.icepanel.io/Technology/svg/Sass.svg",
          dark: "https://icon.icepanel.io/Technology/svg/Sass.svg",
        },
        imageAltText: "Sass logo",
      },
    ],
    links: [
      { label: "GitHub", href: "#", variant: "outline", icon: "GithubIcon" },
      { label: "Demo", href: "#", variant: "default", icon: "Globe" },
    ],
  },
  {
    id: "insightdash",
    type: "tech",
    image: {
      src: "https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg",
      alt: "Analytics Dashboard",
    },
    status: { text: "Completed", className: "status-completed" },
    title: "InsightDash — Analytics Dashboard",
    description:
      "A full-featured analytics dashboard to visualize KPIs and metrics using Recharts and Next.js, optimized for performance and responsiveness.",
    techStack: [
      {
        id: "nextjs",
        tech: "Next.js",
        techHref: "https://nextjs.org",
        imageUrl: {
          light: "https://icon.icepanel.io/Technology/svg/Next.js.svg",
          dark: "https://icon.icepanel.io/Technology/svg/Next.js.svg",
        },
        imageAltText: "Next.js logo",
      },
      {
        id: "recharts",
        tech: "Recharts",
        techHref: "https://recharts.org",
        imageUrl: {
          light: "https://icon.icepanel.io/Technology/svg/Recharts.svg",
          dark: "https://icon.icepanel.io/Technology/svg/Recharts.svg",
        },
        imageAltText: "Recharts logo",
      },
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
      { label: "GitHub", href: "#", variant: "outline", icon: "GithubIcon" },
      { label: "Demo", href: "#", variant: "default", icon: "Globe" },
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
              size={'lg'}
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
