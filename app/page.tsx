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

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobile, setIsMobile] = useState(false)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
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
      element.scrollIntoView({ behavior: "smooth" })
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
        {/* Modified main container - removed snap scrolling for better visibility */}
        <main className="pb-16">
          {[
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
          ].map(({ id, Component }, index) => (
            <section
              key={id}
              id={id}
              ref={(el) => {
                if (sectionRefs.current) sectionRefs.current[index] = el
              }}
              className="py-20" // Increased padding for more space
            >
              <Suspense fallback={<div className="flex items-center justify-center h-[50vh]">Loading...</div>}>
                <Component />
              </Suspense>
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

