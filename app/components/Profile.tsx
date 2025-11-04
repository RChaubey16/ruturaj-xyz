import Image from "next/image";
import Link from "next/link";
import TechUsed from "./TechUsed";

// Types

type Stack = {
  name: string;
  href: string;
};

const data = {
  name: "Ruturaj",
  nameInMorseCode: ".-. ..- - ..- .-. .- .---",
};

const techStacks = [
  { name: "TypeScript", href: "#" },
  { name: "Next.js", href: "#" },
  { name: "React", href: "#" },
  { name: "Go", href: "#" },
  { name: "Node.js", href: "#" },
  { name: "Drupal", href: "#" },
];

const tech = [
  {
    name: "GitHub",
    href: "https://github.com/RChaubey16",
    logoSrc: "/images/socials/github-logo.png",
    darkLogoSrc: "/images/socials/github-logo.png",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ruturaj-chaubey-b453b41b1",
    logoSrc: "/images/socials/linkedin-logo.png",
    darkLogoSrc: "/images/socials/linkedin-logo.png",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/RChaubey16",
    logoSrc: "/images/socials/x-logo.png",
    darkLogoSrc: "/images/socials/x-logo.png",
  },
  {
    name: "Drupal",
    href: "https://www.drupal.org/u/ruturaj-chaubey",
    logoSrc: "https://icon.icepanel.io/Technology/svg/Drupal.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/Drupal.svg",
  },
];

const Profile = () => {
  const frontendStacks = techStacks.slice(0, 3);
  const backendStacks = techStacks.slice(3);

  const renderStackLinks = (stacks: Stack[]) =>
    stacks.map((stack, index) => (
      <span key={stack.name}>
        <Link href={stack.href} className="link-text">
          {stack.name}
        </Link>
        {index < stacks.length - 1 ? ", " : ""}
      </span>
    ));
  return (
    <div className="mb-20">
      <div className="relative w-full h-56">
        <Image
          src="https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg"
          fill
          alt="banner"
          className="object-cover rounded-sm"
        />
      </div>
      <div className="mt-8 flex items-center gap-2">
        <div className="relative w-26 h-26 rounded-full">
          <Image
            src="/images/profile.jpg"
            fill
            alt="banner"
            className="object-cover rounded-full"
          />
        </div>
        <div className="">
          <p className="name">{data.name}</p>
          <p className="mb-0.5 w-fit name-morse-code">{data.nameInMorseCode}</p>
        </div>
      </div>
      <p className="mt-2 mb-6 para-text">
        I build fast, interactive front-ends with{" "}
        {renderStackLinks(frontendStacks)} and solid back-ends powered by{" "}
        {renderStackLinks(backendStacks)} — all with a focus on performance,
        clarity, and maintainability.
      </p>
      <TechUsed tech={tech} />
    </div>
  );
};

export default Profile;
