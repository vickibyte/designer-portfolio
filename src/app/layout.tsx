import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Clement David | Graphic Designer",
  description: "Portfolio of Clement David, Nigerian Graphic Designer. Site built by Fisher9ine Creative Hub.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />  {/* ✅ required for metadata & head tags */}
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
