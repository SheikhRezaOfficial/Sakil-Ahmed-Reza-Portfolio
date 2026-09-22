"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        <Link href="#about-me" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={50} height={50} draggable={false} />
          <div className="hidden md:flex font-bold ml-2 text-gray-200">Sakil Ahmed Reza</div>
        </Link>

        <div className="hidden md:flex w-[540px] h-full flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-5 py-2.5 rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link key={link.title} href={link.link} className="cursor-pointer hover:text-[rgb(112,66,248)] transition">
                {link.title}
              </Link>
            ))}
            <Link href={LINKS.sourceCode} target="_blank" rel="noreferrer noopener" className="cursor-pointer hover:text-[rgb(112,66,248)] transition">
              Source Code
            </Link>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link href={link} target="_blank" rel="noreferrer noopener" key={name} aria-label={name}>
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-white focus:outline-none text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link key={link.title} href={link.link} className="cursor-pointer hover:text-[rgb(112,66,248)] transition" onClick={() => setIsMobileMenuOpen(false)}>
                {link.title}
              </Link>
            ))}
            <Link href={LINKS.sourceCode} target="_blank" rel="noreferrer noopener" className="cursor-pointer hover:text-[rgb(112,66,248)] transition" onClick={() => setIsMobileMenuOpen(false)}>
              Source Code
            </Link>
          </div>
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link href={link} target="_blank" rel="noreferrer noopener" key={name} aria-label={name}>
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
