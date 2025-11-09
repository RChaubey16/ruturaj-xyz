"use client"

import { useState } from "react";
import Link from "next/link";
import { Github, Menu, X } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";
import { Logo } from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full max-w-3xl py-3 pr-6 lg:pr-0 bg-background z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation - hidden on mobile */}
        <ul className="hidden md:flex justify-end items-center gap-4">
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

        {/* Mobile: Dark Mode Toggle + Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <DarkModeToggle />
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col gap-4 pt-4">
            <li className="nav-link">
              <Link href={"#experience"} onClick={closeMenu}>
                Experience
              </Link>
            </li>
            <li className="nav-link">
              <Link href={"/builds"} onClick={closeMenu}>
                Builds
              </Link>
            </li>
            <li className="nav-link">
              <Link href={"https://github.com/RChaubey16"} onClick={closeMenu}>
                <div className="flex items-center gap-2">
                  <Github />
                  <span>GitHub</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
