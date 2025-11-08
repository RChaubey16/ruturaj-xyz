import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import TechUsed from "./TechUsed";

const experience = {
  full_stack_engineer: [
    "Architected and led the front-end development for a UNICEF-affiliated product using Next.js, focusing on performance, scalability, and clean UX.",
    "Explored and implemented AI technologies, building proof-of-concept applications to strengthen understanding of applied AI and emerging trends.",
    "Led a web development internship program, training and mentoring fresh graduates into industry-ready full stack engineers.",
    "Conducted internal technical sessions, demonstrating Headless Drupal starter kits like Octahedriod to enhance the team’s technical proficiency.",
    "Contributed to Drupal Open Source, delivering code solutions and improvements for community-reported issues.",
  ],
  associate_engineer: [
    "Developed and deployed a full-featured e-commerce platform for a U.S.-based client using Drupal Commerce and Gatsby.",
    "Optimized performance across the stack, cutting page load times by 25% through improved caching, build optimization, and API tuning.",
    "Engineered robust integrations between Gatsby and Drupal Commerce, enabling seamless data synchronization across product listings.",
    "Led internal training sessions on React and Headless Drupal architecture, upskilling the team on modern web development practices.",
  ],
  intern: [
    "Integrated React with Drupal CMS to enhance content workflows and elevate overall site interactivity.",
    "Contributed patches to the Drupal Open Source community and participated in strategic development initiatives.",
    "Developed hands-on expertise in Drupal CMS (module and theme development), Headless Drupal, and working with REST and JSON APIs.",
  ],
};

const tech = [
  {
    name: "Next.js",
    href: "https://nextjs.org",
    logoSrc: "https://icon.icepanel.io/Technology/svg/Next.js.svg",
    darkLogoSrc: "/images/tech/nextjs-dark-icon.png",
  },
  {
    name: "Tailwind CSS",
    href: "https://tailwindcss.com",
    logoSrc: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
  },
  {
    id: "sass-lang",
    name: "Sass",
    href: "https://sass-lang.com",
    logoSrc: "https://icon.icepanel.io/Technology/svg/Sass.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/Sass.svg",
  },
  {
    name: "Drupal",
    href: "https://www.drupal.org",
    logoSrc: "https://icon.icepanel.io/Technology/svg/Drupal.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/Drupal.svg",
  },
  {
    name: "PHP",
    href: "https://www.php.net",
    logoSrc: "https://icon.icepanel.io/Technology/svg/PHP.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/PHP.svg",
  },
  {
    name: "Fast API",
    href: "https://fastapi.tiangolo.com",
    logoSrc: "https://icon.icepanel.io/Technology/svg/FastAPI.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/FastAPI.svg",
  },
  {
    name: "Python",
    href: "https://www.python.org",

    logoSrc: "https://icon.icepanel.io/Technology/svg/Python.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/Python.svg",
  },
  {
    name: "Supabase",
    href: "https://supabase.com",
    logoSrc: "/images/tech/supabase.png",
    darkLogoSrc: "/images/tech/supabase.png",
  },
  {
    name: "Postman",
    href: "https://postman.com",
    logoSrc: "https://icon.icepanel.io/Technology/svg/Postman.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/Postman.svg",
  },
  {
    name: "Figma",
    href: "https://www.figma.com",
    logoSrc: "https://icon.icepanel.io/Technology/svg/Figma.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/Figma.svg",
  },
  {
    name: "Cloudflare",
    href: "https://www.cloudflare.com",
    logoSrc: "https://icon.icepanel.io/Technology/svg/Cloudflare.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/Cloudflare.svg",
  },
  {
    name: "Vercel",
    href: "https://www.vercel.com",
    logoSrc: "https://icon.icepanel.io/Technology/png-shadow-512/Vercel.png",
    darkLogoSrc: "/images/tech/vercel-light.png",
  },
];

const associateTech = [
  {
    name: "React",
    href: "https://react.dev",
    logoSrc: "https://icon.icepanel.io/Technology/svg/React.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/React.svg",
  },
  {
    name: "Redux",
    href: "https://redux.js.org",
    logoSrc: "https://icon.icepanel.io/Technology/svg/Redux.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/Redux.svg",
  },
  {
    name: "Gatsby",
    href: "https://www.gatsbyjs.com",
    logoSrc: "https://icon.icepanel.io/Technology/svg/Gatsby.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/Gatsby.svg",
  },
  {
    name: "Tailwind CSS",
    href: "https://tailwindcss.com",
    logoSrc: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
  },
  {
    name: "Drupal",
    href: "https://www.drupal.org",
    logoSrc: "https://icon.icepanel.io/Technology/svg/Drupal.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/Drupal.svg",
  },
  {
    name: "PHP",
    href: "https://www.php.net",
    logoSrc: "https://icon.icepanel.io/Technology/svg/PHP.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/PHP.svg",
  },
  {
    name: "MySQL",
    href: "https://www.mysql.com",
    logoSrc: "https://icon.icepanel.io/Technology/svg/MySQL.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/MySQL.svg",
  },
  {
    name: "GraphQL",
    href: "https://graphql.org",
    logoSrc: "https://icon.icepanel.io/Technology/svg/GraphQL.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/GraphQL.svg",
  },
  {
    name: "Figma",
    href: "https://www.figma.com",
    logoSrc: "https://icon.icepanel.io/Technology/svg/Figma.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/Figma.svg",
  },
];

const internTech = [
  {
    name: "Drupal",
    href: "https://www.drupal.org",
    logoSrc: "https://icon.icepanel.io/Technology/svg/Drupal.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/Drupal.svg",
  },
  {
    name: "PHP",
    href: "https://www.php.net",
    logoSrc: "https://icon.icepanel.io/Technology/svg/PHP.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/PHP.svg",
  },
  {
    name: "React",
    href: "https://react.dev",
    logoSrc: "https://icon.icepanel.io/Technology/svg/React.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/React.svg",
  },
  {
    name: "Figma",
    href: "https://www.figma.com",
    logoSrc: "https://icon.icepanel.io/Technology/svg/Figma.svg",
    darkLogoSrc: "https://icon.icepanel.io/Technology/svg/Figma.svg",
  },
];

export function AccordionComponent() {
  return (
    <Accordion type="multiple" className="w-full" defaultValue={["item-1"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger className="accordion-header cursor-pointer group flex flex-col md:flex-row">
          <div className="flex gap-4">
            <div>
              <Image
                src="/images/qed42.jpeg"
                width={48}
                height={48}
                alt="QED42 Logo"
                className="object-contain rounded-sm"
              />
            </div>
            <div>
              <h3 className="company">QED42</h3>
              <p className="role">Engineer - Full Stack</p>
            </div>
          </div>

          <div className="w-full md:w-48 flex gap-4 justify-between">
            <div>
              <p className="duration">May 2023 - Present</p>
              <p className="location">Pune, India</p>
            </div>
            <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </div>
        </AccordionTrigger>

        <AccordionContent className="flex flex-col gap-4 para-text">
          <TechUsed tech={tech} />
          <ul className="list-disc list-inside marker:text-gray-600 dark:marker:text-gray-400">
            {experience.full_stack_engineer.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="accordion-header cursor-pointer group flex flex-col md:flex-row">
          <div className="flex gap-4">
            <div>
              <Image
                src="/images/qed42.jpeg"
                width={48}
                height={48}
                alt="QED42 Logo"
                className="object-contain rounded-sm"
              />
            </div>
            <div>
              <h3 className="company">QED42</h3>
              <p className="role">Associate Engineer - Full Stack</p>
            </div>
          </div>

          <div className="w-full md:w-48 flex gap-4 justify-between">
            <div>
              <p className="duration">May 2022 - April 2023</p>
              <p className="location">Pune, India</p>
            </div>
            <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </div>
        </AccordionTrigger>

        <AccordionContent className="flex flex-col gap-4 para-text">
          <TechUsed tech={associateTech} />
          <ul className="list-disc list-inside marker:text-gray-600 dark:marker:text-gray-400">
            {experience.associate_engineer.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="accordion-header cursor-pointer group flex flex-col md:flex-row">
          <div className="flex gap-4">
            <div>
              <Image
                src="/images/qed42.jpeg"
                width={48}
                height={48}
                alt="QED42 Logo"
                className="object-contain rounded-sm"
              />
            </div>
            <div>
              <h3 className="company">QED42</h3>
              <p className="role">Intern</p>
            </div>
          </div>

          <div className="w-full md:w-48 flex gap-4 justify-between">
            <div>
              <p className="duration">August 2021 - April 2022</p>
              <p className="location">Pune, India</p>
            </div>
            <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </div>
        </AccordionTrigger>

        <AccordionContent className="flex flex-col gap-4 para-text">
          <TechUsed tech={internTech} />
          <ul className="list-disc list-inside marker:text-gray-600 dark:marker:text-gray-400">
            {experience.intern.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
