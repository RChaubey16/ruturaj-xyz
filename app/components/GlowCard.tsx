import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Tech from "./Tech";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "@sanity/icons";
// Types
import { GlowCardProps } from "@/types/project";

const GlowCard = ({ project }: GlowCardProps) => {
  const { image, status, title, description, techStack, links, type } = project;

  return (
    <div className="w-full h-full">
      <div className="spotlight-card relative overflow-hidden rounded-xl p-px h-full bg-card">
        <Card className="project-card group-hover:bg-card/90 border-none p-0 gap-2.5">
          <CardHeader className="relative p-0">
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={image.src}
                fill
                alt={image.alt}
                className="object-cover rounded-md"
              />
            </div>

            {/* Status */}
            <div className={`status-bg ${status.className}`}>
              <div className="dot w-2 h-2 rounded-full" />
              <p className="status">{status.text}</p>
            </div>

            {/* Title */}
            <CardTitle className="py-2 px-4 title rounded-t-xl">
              {title}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0 px-4 pb-4">
            <p className="para-text leading-6 line-clamp-3">{description}</p>

            {/* Tech Stack */}
            {type === "tech" && (
              <div className="mt-4">
                <p className="mb-1 tech-stack-label">Tech Stack:</p>
                <div className="flex gap-2">
                  <Tech size={8} tech={techStack} />
                </div>
              </div>
            )}

            {/* Links */}
            <div className="mt-5 flex gap-2.5 justify-end">
              {links.map((link) => (
                <Link key={link.label} href={link.href}>
                  <Button variant={link.variant} className="cursor-pointer">
                    {link.icon === "GithubIcon" ? (
                      <>
                        {link.label}
                        <GithubIcon />
                      </>
                    ) : (
                      <>
                        {link.label}
                        <Globe />
                      </>
                    )}
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GlowCard;
