import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Tech from "./components/Tech";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Navbar Component */}
      <Navbar />

      {/* Profile Component */}
      <Profile />

      <Experience />

      {/* Tech Stack Component */}
      <div className="flex flex-wrap items-center gap-2">
        <Tech />
      </div>
    </div>
  );
}
