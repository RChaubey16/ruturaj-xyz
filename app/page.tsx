import Profile from "./components/Profile";
import Experience from "./components/Experience";
import GlowCard from "./components/GlowCard";
import Tech from "./components/Tech";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <section className="bg-background">
      {/* Profile Component */}
      <Profile />
      <Experience />

      <section id="builds" className="mt-20">
        <h1 className="heading">Builds</h1>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <GlowCard />
          <GlowCard />
          <GlowCard />
          <GlowCard />
        </div>

        <div className="mt-4 flex justify-center">
          <Button variant="outline">
            <Link href={"#"} className="flex items-center gap-2">
              More Builds
              <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>

      {/* Tech Stack Component */}
      <div className="my-20 flex flex-wrap items-center gap-2">
        <Tech />
      </div>
    </section>
  );
}
