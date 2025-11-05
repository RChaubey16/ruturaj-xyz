import Link from "next/link";
import { DarkModeToggle } from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="py-2 text-right">
      <ul className="flex justify-end items-center gap-4">
        <li>
          <Link href={'#experience'}>Experience</Link>
        </li>
        <li>
          <Link href={'/builds'}>Builds</Link>
        </li>
        <li>
          <DarkModeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
