"use client"

import Link from "next/link"
import { useState } from "react"
// Import Lucide icons
import { Facebook, Instagram, Twitter, Linkedin, Phone } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-green-500">Clement David</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-bold">
          <Link href="#about">About</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#contact">Contact</Link>


        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl cursor-pointer"
        >
          ☰
        </button>

        {isOpen && (
          <div className="absolute top-16 right-6 bg-white shadow-md p-4 flex flex-col space-y-2 md:hidden">
            <Link href="#about">About</Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#contact">Contact</Link>

            {/* Mobile social icons */}
            <div className="flex space-x-4 mt-3">
              <Link href="https://facebook.com" target="_blank">
                <Facebook className="w-5 h-5 text-green-500 hover:text-green-700 transition" />
              </Link>
              <Link href="https://x.com" target="_blank">
                <Twitter className="w-5 h-5 text-green-500 hover:text-green-700 transition" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Instagram className="w-5 h-5 text-green-500 hover:text-green-700 transition" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="w-5 h-5 text-green-500 hover:text-green-700 transition" />
              </Link>
              <Link href="https://wa.me/2348012345678" target="_blank">
          <Phone className="w-6 h-6 text-green-600 hover:text-green-800 transition" />
        </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
