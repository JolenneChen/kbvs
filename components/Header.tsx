"use client";

import { useState } from "react";
import Link from "next/link";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-[#FFB958] shadow-md shadow-[#FFB958]/30">
      <div className=" max-w-7xl mx-auto flex items-center justify-between h-24 px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-[#FFB958] col-span-3"
        >
          <Image
            src="/images/kbval.png"
            alt="kbval"
            width={240}
            height={60}
            className="h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-[#ffffff] col-span-1">
          <Link
            href="/"
            className="relative inline-block justify-self-center font-bold after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-[#FFB958] after:transition-all hover:after:w-full hover:font-extrabold hover:text-[#FFB958]"
          >
            Home
          </Link>
          <Link
            href="/ArticleBlog"
            className="relative inline-block justify-self-center font-bold after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-[#FFB958] after:transition-all hover:after:w-full hover:font-extrabold hover:text-[#FFB958]"
          >
            Service
          </Link>
          <Link
            href="/AboutUs"
            className="relative inline-block justify-self-center  font-bold after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-[#FFB958] after:transition-all hover:after:w-full hover:font-extrabold hover:text-[#FFB958]"
          >
            About Us
          </Link>

          <Link
            href="/ContactUs"
            className="relative inline-block justify-self-center font-bold after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-[#FFB958] after:transition-all hover:after:w-full hover:font-extrabold hover:text-[#FFB958]"
          >
            Contact Us
          </Link>


        </nav>


        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-[#FFB958]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <XIcon size={32} /> : <ListIcon size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-white bg-black border-t border-[#FFB958]">

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-4 text-center border-b border-[#FFB958]"
          >
            Home
          </Link>
          <Link
            href="/ArticleBlog"
            onClick={() => setIsOpen(false)}
            className="block py-4 text-center border-b border-[#FFB958]"
          >
            Service
          </Link>
          <Link
            href="/AboutUs"
            onClick={() => setIsOpen(false)}
            className="block py-4 text-center border-b border-[#FFB958]"
          >
            About Us
          </Link>

          <Link
            href="/ContactUs"
            onClick={() => setIsOpen(false)}
            className="block py-4 text-center border-b border-[#FFB958]"
          >
            Contact Us
          </Link>


        </div>
      )}
    </header>
  );
}