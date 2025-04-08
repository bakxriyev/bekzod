"use client"

import { useState } from "react"
import { Instagram, Youtube, Phone } from "lucide-react"

export default function SocialNavbar({
  activeSection,
  scrollToSection,
  isMobile,
}: {
  activeSection: string
  scrollToSection: (sectionId: string) => void
  isMobile: boolean
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-black/90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-2xl">BEKZOD | KHANOV</div>

        {isMobile ? (
          <div className="flex items-center gap-4">
            {/* Social icons for mobile */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/khanov.bekzod/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@KhanovBekzod"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400"
              >
                <Youtube size={20} />
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex items-center w-full justify-between">
            {/* Navigation links - wider spacing */}
            <div className="flex space-x-8 ml-12">
              <button
                onClick={() => scrollToSection("kurs-vazifasi")}
                className={`text-white hover:text-green-400 text-lg ${
                  activeSection === "kurs-vazifasi" ? "text-green-400 font-semibold" : ""
                }`}
              >
                KURS VAZIFASI
              </button>
              <button
                onClick={() => scrollToSection("kim-uchun")}
                className={`text-white hover:text-green-400 text-lg ${
                  activeSection === "kim-uchun" ? "text-green-400 font-semibold" : ""
                }`}
              >
                KURS KIMLAR UCHUN
              </button>
              <button
                onClick={() => scrollToSection("kurs-dasturi")}
                className={`text-white hover:text-green-400 text-lg ${
                  activeSection === "kurs-dasturi" ? "text-green-400 font-semibold" : ""
                }`}
              >
                KURS DASTURI
              </button>
              <button
                onClick={() => scrollToSection("muallif")}
                className={`text-white hover:text-green-400 text-lg ${
                  activeSection === "muallif" ? "text-green-400 font-semibold" : ""
                }`}
              >
                KURS MUALLIFI
              </button>
              <button
                onClick={() => scrollToSection("narx")}
                className={`text-white hover:text-green-400 text-lg ${
                  activeSection === "narx" ? "text-green-400 font-semibold" : ""
                }`}
              >
                TARIFLAR
              </button>
            </div>

            {/* Social icons and contact - more space */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/khanov.bekzod/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@KhanovBekzod"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://t.me/khanov_business"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.333.234-.633.234l.274-3.035 5.532-5c.287-.258-.07-.392-.404-.16l-6.816 4.287-2.9-.967c-.633-.2-.633-.643.146-.954l11.337-4.377c.533-.194.989.126.814.814l.15.017z" />
                </svg>
              </a>
              <a href="tel:+998123456789" className="flex items-center text-white hover:text-green-400">
                <Phone size={24} className="mr-2" />
                <span className="hidden lg:inline text-lg">+998 12 345 67 89</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-black py-3">
          <div className="px-4 pt-3 pb-4 space-y-3">
            <button
              onClick={() => {
                scrollToSection("kurs-vazifasi")
                setIsMenuOpen(false)
              }}
              className={`block w-full text-left px-4 py-3 text-lg text-white ${
                activeSection === "kurs-vazifasi" ? "text-green-400 font-semibold" : ""
              }`}
            >
              KURS VAZIFASI
            </button>
            <button
              onClick={() => {
                scrollToSection("kim-uchun")
                setIsMenuOpen(false)
              }}
              className={`block w-full text-left px-4 py-3 text-lg text-white ${
                activeSection === "kim-uchun" ? "text-green-400 font-semibold" : ""
              }`}
            >
              KURS KIMLAR UCHUN
            </button>
            <button
              onClick={() => {
                scrollToSection("kurs-dasturi")
                setIsMenuOpen(false)
              }}
              className={`block w-full text-left px-4 py-3 text-lg text-white ${
                activeSection === "kurs-dasturi" ? "text-green-400 font-semibold" : ""
              }`}
            >
              KURS DASTURI
            </button>
            <button
              onClick={() => {
                scrollToSection("muallif")
                setIsMenuOpen(false)
              }}
              className={`block w-full text-left px-4 py-3 text-lg text-white ${
                activeSection === "muallif" ? "text-green-400 font-semibold" : ""
              }`}
            >
              KURS MUALLIFI
            </button>
            <button
              onClick={() => {
                scrollToSection("narx")
                setIsMenuOpen(false)
              }}
              className={`block w-full text-left px-4 py-3 text-lg text-white ${
                activeSection === "narx" ? "text-green-400 font-semibold" : ""
              }`}
            >
              TARIFLAR
            </button>

            {/* Social links in mobile menu */}
            <div className="flex gap-4 px-4 py-3">
              <a
                href="https://www.instagram.com/khanov.bekzod/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@KhanovBekzod"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://t.me/khanov_business"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.333.234-.633.234l.274-3.035 5.532-5c.287-.258-.07-.392-.404-.16l-6.816 4.287-2.9-.967c-.633-.2-.633-.643.146-.954l11.337-4.377c.533-.194.989.126.814.814l.15.017z" />
                </svg>
              </a>
              <a href="tel:+998123456789" className="flex items-center text-white hover:text-green-400">
                <Phone size={20} className="mr-1" />
                <span>+998 12 345 67 89</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

