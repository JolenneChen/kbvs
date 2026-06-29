"use client";

import { useState } from "react";
import Link from "next/link";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { Button } from "./ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-black border-b border-[#FFB958] shadow-md shadow-[#FFB958]/30">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-[#FFB958]"
        >
          TradingViaMini
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-[#a0a0a0]">
          <Link
            href="/"
            className="relative inline-block justify-self-center after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-[#FFB958] after:transition-all hover:after:w-full hover:font-extrabold hover:text-[#FFB958]"
          >
            Home
          </Link>

          <Link
            href="/AboutUs"
            className="relative inline-block justify-self-center after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-[#FFB958] after:transition-all hover:after:w-full hover:font-extrabold hover:text-[#FFB958]"
          >
            About Us
          </Link>

          <Link
            href="/ContactUs"
            className="relative inline-block justify-self-center after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-[#FFB958] after:transition-all hover:after:w-full hover:font-extrabold hover:text-[#FFB958]"
          >
            Contact Us
          </Link>

          <Link
            href="/ArticleBlog"
            className="relative inline-block justify-self-center after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-[#FFB958] after:transition-all hover:after:w-full hover:font-extrabold hover:text-[#FFB958]"
          >
            Article Blog
          </Link>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <a href="https://regol.kbvalbury.com/#/register/MM03" className="bg-[#EB9A02] hover:bg-[#d69600] text-black font-bold p-2 rounded-md">Join Now !</a>
        </div>

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
        <div className="md:hidden bg-black border-t border-[#FFB958]">

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-4 text-center border-b border-[#FFB958]"
          >
            Home
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

          <Link
            href="/ArticleBlog"
            onClick={() => setIsOpen(false)}
            className="block py-4 text-center border-b border-[#FFB958]"
          >
            Article Blog
          </Link>

          <div className="p-6 text-center ">
            <a href="https://regol.kbvalbury.com/#/register/MM03" className="bg-[#EB9A02] hover:bg-[#d69600] text-black font-bold p-2 rounded-md">Join Now !</a>

          </div>
        </div>
      )}
    </header>
  );
}