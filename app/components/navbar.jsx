"use client"
import { useState } from "react";
import ApplicationLogo from "../icons/aplicationlogo";
export default function Navbar(){

    const [scrolled, setIsScrolled] = useState(false);

    return(
        <nav className={`bg-[#282C33] w-full flex gap-72 justify-between items-center py-4 sticky z-30 top-0 px-36 ${scrolled ? "" : ""} `}>
            <span>
                <ApplicationLogo />
            </span>

            <ul className="flex flex-row gap-6 justify-center items-center text-lg">
                <li className="rounded-[10px] w-max p-2">
                    <a href="/#home"><span className="text-[#C778DD]">#</span>home</a>
                </li>
                <li className="rounded-[10px] w-max p-2">
                    <a href="/#works"><span className="text-[#C778DD]">#</span>works</a>
                </li>
                <li className="rounded-[10px] w-max p-2">
                    <a href="/#about-me"><span className="text-[#C778DD]">#</span>about-me</a>
                </li>
                <li className="rounded-[10px] w-max p-2">
                    <a href="/#contacts"><span className="text-[#C778DD]">#</span>contacts</a>
                </li>
            </ul>
        </nav>
    );
}