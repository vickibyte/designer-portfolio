"use client"

import Image from "next/image"
import Header from "@/components/Header"
import { PenTool, Layers, Palette, Monitor, Facebook, Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-20 px-6 flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-6xl md:text-5xl font-bold text-black">
            Nigerian Graphic Designer
          </h2>

          <p className="text-gray-600 max-w-md text-lg">
            I create bold and creative visuals for brands, businesses, and
            individuals, combining design with storytelling to leave a lasting
            impression.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition cursor-pointer"
          >
            Get in Touch
          </motion.button>

          {/* Social icons under the button */}
          <div className="flex space-x-5 mt-6">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-6 h-6 text-green-500 hover:text-green-700 transition" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="w-6 h-6 text-green-500 hover:text-green-700 transition" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="w-6 h-6 text-green-500 hover:text-green-700 transition" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="w-6 h-6 text-green-500 hover:text-green-700 transition" />
            </Link>
            <Link href="https://wa.me/+2347065462076" target="_blank">
              <MessageCircle className="w-6 h-6 text-green-500 hover:text-green-700 transition" />
            </Link>
          </div>
        </motion.div>

        {/* Right Image with green fading background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 mt-10 md:mt-0 flex justify-center relative"
        >
          {/* Green fading background */}
          <div className="absolute w-80 h-80 rounded-full bg-green-400 translate-y-28" />

          {/* Profile image */}
          <Image
            src="/profile.png"
            alt="Clement David"
            width={300}
            height={300}
            className="relative z-10 object-cover"
          />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">My Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <PenTool className="w-10 h-10 text-green-600" />, name: "Brand Identity" },
              { icon: <Layers className="w-10 h-10 text-green-600" />, name: "Illustration" },
              { icon: <Palette className="w-10 h-10 text-green-600" />, name: "Print Design" },
              { icon: <Monitor className="w-10 h-10 text-green-600" />, name: "UI Graphics" },
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-2"
              >
                {skill.icon}
                <p className="font-bold text-lg">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">Featured Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/project1.png",
                title: "Brand Identity Design",
                desc: "A bold brand identity for a startup company.",
              },
              {
                img: "/project2.png",
                title: "Illustration Artwork",
                desc: "Digital illustration crafted with storytelling.",
              },
              {
                img: "/project3.png",
                title: "Poster & Print Design",
                desc: "Print materials for an event campaign.",
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="rounded-lg"
                />
                <h4 className="mt-4 font-bold">{project.title}</h4>
                <p className="text-gray-600 text-sm">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-green-600 text-white py-6 text-center"
      >
        <p>© 2025 Fisher9ine Creative Hub — All Rights Reserved</p>
      </motion.footer>
    </main>
  )
}
