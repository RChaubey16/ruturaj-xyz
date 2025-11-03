import Image from "next/image";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";

const data = {
  name: "Ruturaj",
  nameInMorseCode: ".-. ..- - ..- .-. .- .---",
};

export default function Home() {
  return (
    <div className="bg-background">
      {/* Navbar Component */}
      <Navbar />

      {/* Profile Component */}
      <div className="">
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
        <p>I build fast, interactive front-ends with React, TypeScript, and Next.js, and solid back-ends powered by Node.js, Go, and Drupal — all with a focus on performance, clarity, and maintainability.</p>
      </div>

      {/* Tech Logo Component */}
      <div className="flex flex-wrap items-center gap-2">
        <Tech />
      </div>
    </div>
  );
}
