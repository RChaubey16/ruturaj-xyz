import Fade from "@/components/animation/Fade";
import Projects from "../components/Projects";

export default function BuildsPage() {
  return (
    <section className="bg-background">
      <Fade>
        <Projects useSlice={false} />
      </Fade>
    </section>
  );
}
