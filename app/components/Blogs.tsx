import { ProjectData } from "@/types/project";
import GlowCard from "./GlowCard";

export const projects: ProjectData[] = [
  {
    id: "drupalcon-singapore-2024",
    type: "blogs",
    image: {
      src: "https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg",
      alt: "banner",
    },
    status: { text: "Medium", className: "platform-medium" },
    title: "An internship, a community, and a ticket to DrupalCon",
    description:
      "A personal story of my journey from intern to active Drupal community member — culminating in earning a ticket to DrupalCon Singapore 2024.",
    blogCategories: [
      { id: "career-journey", category: "Career Journey" },
      { id: "community-open-source", category: "Community & Open Source" },
    ],
    links: [
      {
        label: "Read",
        href: "https://www.qed42.com/insights/an-internship-a-community-and-a-ticket-to-drupalcon",
        variant: "outline",
        icon: "Read",
      },
    ],
  },
  {
    id: "decoupled-drupal-101",
    type: "blogs",
    image: {
      src: "https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg",
      alt: "banner",
    },
    status: { text: "Medium", className: "platform-medium" },
    title: "CRUD Operations in Decoupled Drupal: A 101 Guide",
    description:
      "A hands-on walkthrough of how to use Drupal’s JSON API module for create, read, update, delete operations in a decoupled architecture.",
    blogCategories: [
      {
        id: "drupal-development",
        category: "Drupal Development",
      },
      {
        id: "headless-cms",
        category: "Headless/Decoupled CMS",
      },
    ],
    links: [
      {
        label: "Read",
        href: "https://www.qed42.com/insights/crud-operations-in-decoupled-drupal-a-101-guide",
        variant: "outline",
        icon: "Read",
      },
    ],
  },
  {
    id: "transform-api",
    type: "blogs",
    image: {
      src: "https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg",
      alt: "banner",
    },
    status: { text: "Medium", className: "platform-medium" },
    title: "Introduction to Transform API",
    description:
      "An overview of the Transform API module—how it turns Drupal entities and view-modes into JSON output for modern decoupled sites.",
    blogCategories: [
      {
        id: "decoupled-architecture",
        category: "Decoupled Architecture",
      },
      {
        id: "backend-engineering",
        category: "Backend Engineering",
      },
    ],
    links: [
      {
        label: "Read",
        href: "https://www.qed42.com/insights/introduction-to-transform-api",
        variant: "outline",
        icon: "Read",
      },
    ],
  },
];

const Blogs = ({ useSlice = true }) => {
  const visibleProjects = useSlice ? projects.slice(0, 4) : projects;
  return (
    <section id="builds" className="mt-20">
      <h1 className="heading">Blogs</h1>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleProjects.map((proj) => (
          <GlowCard key={proj.id} project={proj} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
