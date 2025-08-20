import Image from "next/image"
import Header from "@/components/Header"
import { PenTool, Layers, Palette, Monitor } from "lucide-react"

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-20 px-6 flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-6xl md:text-5xl font-bold text-black">
            Nigerian Graphic Designer
          </h2>
          
          <p className="text-gray-600 max-w-md text-lg">
            I create bold and creative visuals for brands, businesses, and
            individuals, combining design with storytelling to leave a lasting
            impression.
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition">
            Get in Touch
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/profile.png"
            alt="Clement David"
            width={300}
            height={300}
            className="rounded-full object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">Featured Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project Card */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <Image
                src="/project1.png"
                alt="Project 1"
                width={400}
                height={250}
                className="rounded-lg"
              />
              <h4 className="mt-4 font-bold">Brand Identity Design</h4>
              <p className="text-gray-600 text-sm">
                A bold brand identity for a startup company.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <Image
                src="/project2.png"
                alt="Project 2"
                width={400}
                height={250}
                className="rounded-lg"
              />
              <h4 className="mt-4 font-bold">Illustration Artwork</h4>
              <p className="text-gray-600 text-sm">
                Digital illustration crafted with storytelling.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <Image
                src="/project3.png"
                alt="Project 3"
                width={400}
                height={250}
                className="rounded-lg"
              />
              <h4 className="mt-4 font-bold">Poster & Print Design</h4>
              <p className="text-gray-600 text-sm">
                Print materials for an event campaign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">My Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center space-y-2">
              <PenTool className="w-10 h-10 text-green-600" />
              <p className="font-bold text-lg">Brand Identity</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Layers className="w-10 h-10 text-green-600" />
              <p className="font-bold text-lg">Illustration</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Palette className="w-10 h-10 text-green-600" />
              <p className="font-bold text-lg">Print Design</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Monitor className="w-10 h-10 text-green-600" />
              <p className="font-bold text-lg">UI Graphics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-6 text-center">
        <p>© 2025 Fisher9ine Creative Hub — All Rights Reserved</p>
      </footer>
    </main>
  )
}
