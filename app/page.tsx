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
        <div className="flex items-center gap-2">
          <div className="w-26 h-26 border border-red-500 rounded-full"></div>
          <div className="">
            <p className="mb-0.5 name-morse-code">{data.nameInMorseCode}</p>
            <p className="name">{data.name}</p>
            <p className="designation">Open Source Contributor</p>
          </div>
        </div>
      </div>

      {/* Tech Logo Component */}
      <div className="flex items-center gap-1">
        <Tech />
        <Tech />
        <Tech />
        <Tech />
        <Tech />
        <Tech />
      </div>
    </div>
  );
}
