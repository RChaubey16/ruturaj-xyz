import { DarkModeToggle } from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="py-2 text-right">
      <ul className="flex justify-end items-center gap-4">
        <li>Experience</li>
        <li>Projects</li>
        <li>
          <DarkModeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
