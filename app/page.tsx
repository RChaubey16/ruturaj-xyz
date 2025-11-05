import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Fade from "@/components/animation/Fade";

export default function Home() {
  return (
    <section className="bg-background">
      <Fade>
        {/* Profile Component */}
        <Profile />
        <Experience />
        <Projects />

        {/* Tech Stack Component */}
        <div className="my-20 flex flex-wrap items-center gap-2">
          <Tech />
        </div>
      </Fade>
    </section>
  );
}
