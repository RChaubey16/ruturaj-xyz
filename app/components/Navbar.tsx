import Link from "next/link";
import { DarkModeToggle } from "./DarkModeToggle";
import { Github, Sun } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed w-full max-w-3xl py-3 text-right bg-background z-100 flex items-center justify-between">
      {/* Logo */}
      <Sun />

      {/* links */}
      <ul className="flex justify-end items-center gap-4">
        <li className="nav-link">
          <Link href={"#experience"}>Experience</Link>
        </li>
        <li className="nav-link">
          <Link href={"/builds"}>Builds</Link>
        </li>
        <li className="nav-link">
          <Link href={"https://github.com/RChaubey16"}>
            <Github />
          </Link>
        </li>
        <li>
          <DarkModeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
