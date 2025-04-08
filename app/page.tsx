"use client"

import { useState, useEffect, useRef } from "react"
import Hero from "@/components/hero"
import Features from "@/components/features"
import WhyThisCourse from "@/components/nima-uchun"
import WhoIsThisFor from "@/components/kim-uchun"
import CourseModules from "@/components/course-module"
import Instructor from "@/components/instructor"
import CallToAction from "@/components/call-to"
import Footer from "@/components/footer"
import BookLanding from "@/components/aynan-men"
import KursdanKeyin from "@/components/kursdan_keyin"
import SotuvMutaxassis from "@/components/sotuv-mutaxasisi"
import TarifRejalari from "@/components/tariflar"
import Bonuslar from "@/components/bonus"
import Navbar from "@/components/navbar"
import VideoPlayer from "@/components/video-player"
import FAQSection from "@/components/faq-section"
import { Suspense } from "react"

// Define sections for navigation
const sections = [
  { id: "hero", Component: Hero },
  { id: "kurs-vazifasi", Component: Features },
  { id: "why", Component: WhyThisCourse },
  { id: "who", Component: BookLanding },
  { id: "kim-uchun", Component: WhoIsThisFor },
  { id: "kursdan-keyin", Component: KursdanKeyin },
  { id: "kurs-dasturi", Component: CourseModules },
  { id: "muallif", Component: Instructor },
  { id: "narx", Component: TarifRejalari },
  { id: "sotuv-mutaxassisi", Component: SotuvMutaxassis },
  { id: "bonuslar", Component: Bonuslar },
  { id: "faq", Component: FAQSection },
  { id: "boglanish", Component: CallToAction },
]

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobile, setIsMobile] = useState(false)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  // Check for mobile once on client side
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Simple intersection observer with reduced sensitivity
  useEffect(() => {
    if (isMobile) return

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [isMobile])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "auto", // Changed from smooth to auto for better performance
      })
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} isMobile={isMobile} />

      <div
        className="min-h-screen"
        style={{
          backgroundImage: "url('/background.webp')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <main className="pb-16">
          {sections.map(({ id, Component }, index) => (
            <section
              key={id}
              id={id}
              ref={(el) => {
                if (sectionRefs.current) sectionRefs.current[index] = el
              }}
              className="py-16"
            >
              {index < 3 ? (
                // Render first 3 sections immediately for faster initial load
                <Component />
              ) : (
                // Lazy load the rest of the sections
                <Suspense
                  fallback={
                    <div className="h-[50vh] flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-black rounded-full border-t-transparent animate-spin"></div>
                    </div>
                  }
                >
                  <Component />
                </Suspense>
              )}
            </section>
          ))}
        </main>
      </div>

      {/* Persistent video player */}
      <VideoPlayer />

      <Footer />
    </div>
  )
}
