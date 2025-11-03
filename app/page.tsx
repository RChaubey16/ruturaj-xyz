import { DarkModeToggle } from "./components/DarkModeToggle";

const data = {
  name: "Ruturaj",
  nameInMorseCode: ".-. ..- - ..- .-. .- .---"
}

export default function Home() {
  return (
    <div className="bg-background">
      <DarkModeToggle />

      <div className="flex items-center gap-2">
        <div className="w-26 h-26 border border-red-500 rounded-full"></div>
        <div className="">
          <p className="mb-0.5 name-morse-code">{data.nameInMorseCode}</p>
          <p className="name">{data.name}</p> 
        </div>
      </div>
    </div>
  );
}
