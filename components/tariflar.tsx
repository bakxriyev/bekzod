"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function TarifRejalari() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Common features in the first tariff
  const basicFeatures = [
    "SAVDO SOHASIGA KIRISH",
    "ASOSIY MULOQOT KO'NIKMALARI",
    "MIJOZ PSIXOLOGIYASI",
    "SOTUV TERMINOLOGIYASI",
    "YOPIQ TELEGRAM GURUHGA KIRISH",
    "MODULLAR SONI 4 TA",
    "16+ VIDEO DARSLIKLAR",
  ]

  // Features in the second tariff
  const intermediateFeatures = [
    'BIRINCHI QADAM" TARIFIDAN BARCHA MAVZULAR',
    "MIJOZ QARSHILIKLARI BILAN ISHLASH",
    "CRM VA IP TELEFONIYA TIZIMLARIDA ISHLASH",
    "ASOSIY SCRIPT TUZISH TEXNIKALARI, SCRIPTLAR BILAN ISHLASH",
    "MODULLAR SONI 6 TA",
    "21+ VIDEO DARSLIK",
  ]

  // Identify which features are new in the intermediate tariff
  const newIntermediateFeatures = intermediateFeatures.filter(
    (feature) => !basicFeatures.includes(feature) && feature !== 'BIRINCHI QADAM" TARIFIDAN BARCHA MAVZULAR',
  )

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-2 relative z-10">
        {/* Title */}
        <div className="flex justify-center mb-10 md:mb-12 relative z-20">
          <div className="border-4 border-black px-8 py-2">
            <h1 className="text-3xl md:text-4xl font-black text-center">TARIF REJALARI</h1>
          </div>
        </div>

        {/* Pricing columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto relative z-20">
          {/* First column */}
          <motion.div
            className="flex flex-col bg-white rounded-xl p-6 md:p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="border-2 border-black px-4 py-2 inline-block mb-4">
              <h2 className="text-xl md:text-2xl font-black">BIRINCHI QADAM</h2>
            </div>
            <h3 className="text-5xl md:text-6xl font-black mb-8">699.000</h3>

            <div className="space-y-4 flex-grow">
              {basicFeatures.map((item, index) => (
                <div className="flex items-start" key={index}>
                  <div className="relative flex-shrink-0 w-8 h-8 mr-3">
                    <div className="absolute inset-0 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">
                      <Check size={16} />
                    </div>
                  </div>
                  <p className="font-bold text-lg md:text-xl mt-1">{item}</p>
                </div>
              ))}
            </div>

            {/* Purchase button */}
            <a

              href="https://t.me/khanov_sotuv_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-black text-white text-center py-4 rounded-lg font-bold text-xl hover:bg-gray-800 transition-colors"
            >
              KURSNI HARID QILISH
            </a>
          </motion.div>

          {/* Second column - with highlighted features */}
          <motion.div
            className="flex flex-col bg-white rounded-xl p-6 md:p-8 shadow-xl border-2 border-black relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Recommended badge */}
            <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-2 rounded-lg font-bold text-sm">
              TAVSIYA ETILGAN
            </div>

            <div className="border-2 border-black px-4 py-2 inline-block mb-4">
              <h2 className="text-xl md:text-2xl font-black">ISHGA TAYYOR</h2>
            </div>
            <h3 className="text-5xl md:text-6xl font-black mb-8">899.000</h3>

            <div className="space-y-4 flex-grow">
              {intermediateFeatures.map((item, index) => {
                const isNewFeature = newIntermediateFeatures.includes(item)

                return (
                  <div className="flex items-start" key={index}>
                    <div className="relative flex-shrink-0 w-8 h-8 mr-3">
                      <div
                        className={`absolute inset-0 ${isNewFeature ? "bg-red-600" : "bg-black"} rounded-full flex items-center justify-center text-white font-bold text-lg`}
                      >
                        <Check size={16} />
                      </div>
                    </div>
                    <p className={`font-bold text-lg md:text-xl mt-1 ${isNewFeature ? "text-red-600" : ""}`}>
                      {item}
                      {isNewFeature && (
                        <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-1 rounded">YANGI</span>
                      )}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Purchase button */}
            <a
              href="https://t.me/khanov_sotuv_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-black text-white text-center py-4 rounded-lg font-bold text-xl hover:bg-gray-800 transition-colors"
            >
              KURSNI HARID QILISH
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Background Money Icon */}
      <div className="absolute bottom-4 right-4 w-[120px] h-[120px] md:w-[150px] md:h-[150px] opacity-30 z-0">
        <Image src="/ptichka.webp" alt="Money icons" width={150} height={150} className="object-contain" priority />
      </div>
    </div>
  )
}

