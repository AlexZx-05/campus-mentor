"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          <span className="text-black">Campus</span>
          <span className="text-blue-600"> MentorS</span>
        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[17px] font-semibold">

          <Link href="/" className="text-black hover:text-blue-600 transition">
            Home
          </Link>

          <Link href="/courses" className="text-black hover:text-blue-600 transition">
            Courses
          </Link>

          <Link href="/mentors" className="text-black hover:text-blue-600 transition">
            Mentors
          </Link>
          <Link href="/about" className="text-black hover:text-blue-600 transition">
            About Us
          </Link>

          <Link href="/contact" className="text-black hover:text-blue-600 transition">
            Contact
          </Link>

          <a href="/courses">
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm">
              Enroll Now
            </button>
          </a>
        </div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="md:hidden text-3xl focus:outline-none"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="flex flex-col px-6 py-4 gap-4 text-lg">

            <Link href="/" className="text-black hover:text-blue-600" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/courses" className="text-black hover:text-blue-600" onClick={() => setOpen(false)}>
              Courses
            </Link>

            <Link href="/mentors" className="text-black hover:text-blue-600" onClick={() => setOpen(false)}>
              Mentors
            </Link>

            <Link href="/contact" className="text-black hover:text-blue-600" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <a href="/courses">
              <button className="mt-2 w-full px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm">
                Enroll Now
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
