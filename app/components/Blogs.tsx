import GlowCard from "./GlowCard";

export const projects = [
  {
    id: "glow-up",
    type: "blogs",
    image: {
      src: "https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg",
      alt: "banner",
    },
    status: { name: "Medium", className: "platform-medium" },
    title: "Hover for the Glow-Up",
    description:
      "Glide your cursor here and watch magic unfold — an experience designed just for you.",
    blogCategories: [
      {
        id: "ui-design",
        category: "UI Design",
        categoryHref: "#",
        imageUrl: {
          light: "https://icon.icepanel.io/Technology/svg/Figma.svg",
          dark: "https://icon.icepanel.io/Technology/svg/Figma.svg",
        },
        imageAltText: "UI design icon",
      },
      {
        id: "animation",
        category: "Animation",
        categoryHref: "#",
        imageUrl: {
          light: "https://icon.icepanel.io/Technology/svg/After-Effects.svg",
          dark: "https://icon.icepanel.io/Technology/svg/After-Effects.svg",
        },
        imageAltText: "animation icon",
      },
    ],
    links: [
      {
        label: "Read",
        href: "https://medium.com/@yourblog/hover-for-the-glow-up",
        variant: "outline",
        icon: "BookOpen",
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
