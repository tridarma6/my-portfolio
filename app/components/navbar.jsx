"use client"
import { useState } from "react";
import ApplicationLogo from "../icons/aplicationlogo";

export default function Navbar() {
  const [scrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-[#282C33] w-full flex justify-between items-center py-4 sticky z-30 top-0 px-6`}>
      <span>
        <ApplicationLogo />
      </span>

      {/* Desktop Navbar */}
      <ul className="hidden lg:flex flex-row gap-6 justify-center items-center text-lg">
        <li className="rounded-[10px] w-max p-2">
          <a href="/#home"><span className="text-[#C778DD]">#</span>home</a>
        </li>
        <li className="rounded-[10px] w-max p-2">
          <a href="/#project"><span className="text-[#C778DD]">#</span>project</a>
        </li>
        <li className="rounded-[10px] w-max p-2">
          <a href="/#about-me"><span className="text-[#C778DD]">#</span>about-me</a>
        </li>
        <li className="rounded-[10px] w-max p-2">
          <a href="/#contact"><span className="text-[#C778DD]">#</span>contacts</a>
        </li>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleSidebar} className="text-white">
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-[#282C33] transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} ease-in-out duration-300`}>
        <div className="flex justify-between items-center p-4">
          <span>
            <ApplicationLogo />
          </span>
          {/* Button X for closing sidebar */}
          <button 
            onClick={toggleSidebar} 
            className="text-white absolute top-4 right-8">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-end text-lg pr-8">
          <li className="rounded-[10px] w-max p-2">
            <a href="/#home"><span className="text-[#C778DD]">#</span>home</a>
          </li>
          <li className="rounded-[10px] w-max p-2">
            <a href="/#project"><span className="text-[#C778DD]">#</span>project</a>
          </li>
          <li className="rounded-[10px] w-max p-2">
            <a href="/#about-me"><span className="text-[#C778DD]">#</span>about-me</a>
          </li>
          <li className="rounded-[10px] w-max p-2">
            <a href="/#contact"><span className="text-[#C778DD]">#</span>contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
