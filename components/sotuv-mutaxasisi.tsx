"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Check } from "lucide-react"

export default function SotuvMutaxassis() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Pro features (exclusive to this tariff)
  const proFeatures = [
    '"BIRINCHI QADAM" TARIFIDAN BARCHASI',
    '"ISHGA TAYYOR" TARIFIDAN BARCHA MAVZULAR',
    "REZYUME TAYYORLASH",
    "ISH TOPISH YO'RIQNOMASI (QAYERDAN QANDAY QILIB)",
    "MODULLAR SONI 8 TA",
    "29+ VIDEO DARSLIKLAR",
    "SHAXSIY RIVOJLANISH VA KARYERADA O'SISH BO'YICHA MASLAHATLAR",
    "VIP YOPIQ TELEGRAM GURUH (FAQAT PRO TARIFI O'QUVCHILAR UCHUN)",
  ]

  // Identify which features are new in the pro tariff
  const exclusiveProFeatures = proFeatures.filter(
    (feature) => !feature.includes('"BIRINCHI QADAM" TARIFIDAN') && !feature.includes('"ISHGA TAYYOR" TARIFIDAN'),
  )

  return (
    <div className="relative overflow-hidden py-8 ">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-4 relative z-10">
        {/* Title - with premium styling */}
        <motion.div
          className="flex justify-center mb-10 md:mb-12"
          initial={{ y: -20 }}
          animate={isLoaded ? { y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          <div className="border-4 border-black px-8 py-2">
            <h1 className="text-3xl md:text-4xl font-black text-center">PRO TARIFI</h1>
          </div>
        </motion.div>

        {/* Main card container */}
        <motion.div
          className="bg-white rounded-xl p-6 md:p-8 shadow-xl border-2 border-black relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Premium badge */}
          <div className="absolute -top-4 -right-4 text-white bg-red-600  px-4 py-2 rounded-lg font-bold text-sm">
            PRO TARIF
          </div>

          {/* Price - premium styling */}
          <motion.div
            className="flex flex-col items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="relative">
              <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-4 relative z-10">1.399.000</h2>
              <div className="absolute -inset-4 bg-yellow-200 opacity-20 rounded-full blur-lg z-0"></div>
            </div>
            <div className="bg-black px-6 py-2 rounded-full transform rotate-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">SOTUV BO'YICHA MUTAXASSIS</h3>
            </div>
          </motion.div>

          {/* Features - with premium styling - improved responsive layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {proFeatures.map((item, index) => {
              const isExclusive = exclusiveProFeatures.includes(item)

              return (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isLoaded ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <div
                    className={`${isExclusive ? "bg-red-500" : "bg-black"} text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-lg`}
                  >
                    <Check size={16} />
                  </div>
                  <p className={`text-lg md:text-xl font-medium ${isExclusive ? "text-yellow-700" : "text-gray-800"}`}>
                    {item}
                    {isExclusive && (
                      <span className="ml-2 text-xs bg-red-600 text-white px-2 py-1 rounded">PRO TARIFI</span>
                    )}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Bonus module - larger and positioned to the side on larger screens */}
            <motion.div
              className="flex justify-center md:w-1/3"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="relative w-full h-32 md:h-40">
                <Image
                  src="/bonus.webp"
                  alt="Bonus modul"
                  width={200}
                  height={150}
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Purchase button - takes remaining space */}
            <motion.a
              href="https://t.me/khanov_sotuv_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full md:w-2/3 bg-black text-white text-center py-5 rounded-lg font-bold text-2xl hover:bg-yellow-400 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              KURSNI HARID QILISH
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

