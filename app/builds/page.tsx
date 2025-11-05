import Projects from "../components/Projects";

export default function BuildsPage() {
  return (
    <section className="bg-background">
      <Projects useSlice={false} />
    </section>
  );
}
