"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-300">
            MovieMania
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-white focus:outline-none"
        >
          <span className="text-2xl">&#9776;</span>
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-gray-800 md:static md:w-auto md:block`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            <li>
              <Link
                href="/movies"
                className="block py-2 px-4 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-300"
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                href="/theatres"
                className="block py-2 px-4 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-300"
              >
                Theatres
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-4 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="block py-2 px-4 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-300"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
