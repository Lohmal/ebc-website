"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import { navItems } from "@/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 py-5">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px] relative">

        {/* Logo */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center absolute left-0"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            EBC
          </span>
        </a>

        {/* Mobile Menu Button */}
        <div className="custom:hidden flex items-center ml-auto">
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden custom:flex w-auto h-auto py-[10px] flex-row items-center bg-[#0300145e] border border-[#7042f861] rounded-full gap-5 space-x-6 absolute left-1/2 px-10 text-gray-200 transform -translate-x-1/2">
          {navItems.map((item) => (
            <a key={item.name} href={item.link} className="cursor-pointer">
              {item.name}
            </a>
          ))}
        </div>

        {/* 👉 Sağ Taraf Butonu (Desktop) */}
        <a
          href="https://planner-two-sage.vercel.app"
          target="_blank"
          className="hidden custom:flex absolute right-0 mr-4 px-5 py-2 rounded-full 
          bg-gradient-to-r from-[#4C1D95] to-[#6D28D9] text-white font-semibold
          shadow-md hover:opacity-90 transition-all duration-200"
        >
          Planner
        </a>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#0300145e] border border-[#7042f861] rounded-lg mt-2 text-gray-200">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="cursor-pointer py-2"
            >
              {item.name}
            </a>
          ))}

          {/* 👉 Mobile için de buton */}
          <a
            href="https://planner-two-sage.vercel.app"
            target="_blank"
            className="my-2 mb-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#4C1D95] to-[#6D28D9] text-white font-semibold shadow-md hover:opacity-80 transition-all duration-200"
          >
            Planner
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
