import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Tech from "./Tech";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "@sanity/icons";

const GlowCard = () => {
  return (
    <div className="h-max">
      <div className="spotlight-card bg-border relative overflow-hidden rounded-xl p-px">
        <Card className="project-card group-hover:bg-card/90 border-none  p-0 gap-2.5">
          <CardHeader className="relative p-0">
            <div className="relative w-full h-48">
              <Image
                src="https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg"
                fill
                alt="banner"
                className="object-cover rounded-md"
              />
            </div>
            <div className="absolute top-2 right-2 px-3 py-1 flex items-center gap-2 rounded-sm bg-green-300/20 text-green-900">
              <div className="w-2 h-2 bg-green-700 rounded-full" />
              <p className="text-green-600">Completed</p>
            </div>
            <CardTitle className="py-2 px-4 title rounded-t-xl">
              Hover for the Glow-Up
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 px-4 pb-4">
            Glide your cursor here and watch magic unfold — an experience
            designed just for you.
            <div className="mt-4">
              <p>Tech Stack:</p>
              <div className="flex gap-2">
                <Tech
                  tech={[
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
                        light:
                          "https://icon.icepanel.io/Technology/svg/Python.svg",
                        dark: "https://icon.icepanel.io/Technology/svg/Python.svg",
                      },
                      imageAltText: "Python logo",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="mt-5 flex justify-end">
              <Link href={"#"}>
                <Button variant="ghost" className="cursor-pointer">
                  GitHub
                  <GithubIcon />
                </Button>
              </Link>
              <Link href={"#"}>
                <Button variant="ghost" className="cursor-pointer">
                  <Globe />
                  Demo
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GlowCard;
