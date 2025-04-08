"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function KursdanKeyin() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const benefits = [
    {
      icon: "/ustozcha.webp",
      title: "SOTUVCHILIK KASBI VA KELAJAGI HAQIDA TO'LIQ TUSHUNCHA",
    },
    {
      icon: "/odamchalar.webp",
      title: "SAMARALI SOTUV TEXNIKALARI VA MIJOZLAR BILAN TO'G'RI ISHLASH KO'NIKMALARI",
    },
    {
      icon: "/crm.png",
      title: "SOTUV INSTRUMENTLARI, CRM TIZIMLARI, SCRIPTLAR BILASH ISHLASH KO'NIKMALARI",
    },
    {
      icon: "/resumee.webp",
      title: "ISH TOPISH VA ISHGA KIRISH BO'YICHA YO'RIQNOMA",
    },
    {
      icon: "/odamcha.webp",
      title: "SOTUV SOHASIDA QAYERGA, QANDAY RIVOJLANISH BO'YICHA TUSHUNCHAGA EGA BO'LASIZ",
    },
  ]

  return (
    <div id="kursdan-keyin" className="min-h-screen w-full relative overflow-hidden">

      {/* Background elements - optimized */}
      <div className="absolute inset-0 overflow-hidden opacity-20 z-0">
        {/* Left side element - smaller and positioned better */}
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px]">
          <Image 
            src="/resume.webp" 
            alt="Decorative element" 
            fill 
            className="object-contain object-left" 
            priority 
          />
        </div>

        {/* Right side element - smaller and positioned better */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px]">
          <Image
            src="/resume.webp"
            alt="Decorative element"
            fill
            className="object-contain object-right-bottom"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black text-center mb-12 md:mb-16"
        >
          KURSDAN KEYIN:
        </motion.h1>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.slice(0, 4).map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
              }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center h-full"
            >
              <div className="relative w-14 h-14 mb-4">
                <Image
                  src={benefit.icon || "/placeholder.svg"}
                  alt={benefit.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-base md:text-lg font-bold">{benefit.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Last benefit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="relative w-14 h-14 mb-4">
              <Image
                src={benefits[4].icon || "/placeholder.svg"}
                alt={benefits[4].title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-base md:text-lg font-bold">{benefits[4].title}</h3>
          </div>
        </motion.div>
      </div>
    </div>
  )
}