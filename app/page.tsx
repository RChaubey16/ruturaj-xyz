import Profile from "./components/Profile";
import Experience from "./components/Experience";
import GlowCard from "./components/GlowCard";
import Tech from "./components/Tech";

export default function Home() {
  return (
    <section className="bg-background">
      {/* Profile Component */}
      <Profile />
      <Experience />

      <section id="builds" className="mt-20">
        <h1 className="heading">Builds</h1>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <GlowCard />
          <GlowCard />
          <GlowCard />
          <GlowCard />
        </div>
      </section>

      {/* Tech Stack Component */}
      <div className="my-20 flex flex-wrap items-center gap-2">
        <Tech />
      </div>
    </section>
  );
}
