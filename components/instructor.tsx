"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Instructor() {
  return (
    <div
      id="muallif"
      className="relative min-h-screen w-full flex items-center justify-center px-4 py-12 md:px-16 lg:px-32 overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex justify-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-black text-white font-bold text-xl md:text-3xl px-6 py-3 md:px-8 md:py-4 transform -rotate-2 shadow-lg">
            KURS MUALLIFI
          </div>
        </motion.div>

        {/* Main Content - Improved responsive layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Instructor Image - Responsive height adjustments */}
          <motion.div
            className="relative w-full lg:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/zur.png"
              alt="Bekzod Khanov"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/70 rounded-lg">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">BEKZOD KHANOV</h2>
              <p className="text-sm sm:text-base md:text-lg text-white font-medium">
              SOTUV VA AVTOMATIZATSIYA BO`YICHA MUTAXASSIS
              </p>
            </div>
          </motion.div>

          {/* Credentials - Improved scrolling and responsive height */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 max-h-[50vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh] overflow-y-auto pr-2 pb-4">
            <motion.div
              className="bg-white p-4 md:p-6 rounded-xl shadow-lg border-l-4 border-yellow-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 flex items-center">
                <span className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0">
                  1
                </span>
                <span>3+ YILLIK SAVDO VA BIZNES AVTOMATLASHTIRISH BO`YICHA TAJRIBA.</span>
              </h3>
            </motion.div>

            <motion.div
              className="bg-white p-4 md:p-6 rounded-xl shadow-lg border-l-4 border-blue-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 flex items-center">
                <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0">
                  2
                </span>
                <span>100+ REAL KEYS – KICHIK, O'RTA VA YIRIK BIZNESLAR BILAN ISHLASH TAJRIBASI</span>
              </h3>
            </motion.div>

            <motion.div
              className="bg-white p-4 md:p-6 rounded-xl shadow-lg border-l-4 border-red-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 flex items-center">
                <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0">
                  3
                </span>
                <span>200+ O`RGATILGAN O`QUVCHILAR</span>
              </h3>
            </motion.div>

            <motion.div
              className="bg-white p-4 md:p-6 rounded-xl shadow-lg border-l-4 border-green-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 flex items-center">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0">
                  4
                </span>

                <span>ROSSIYA BOZORIDA YETUK SAVDO EKSPERTLARI TAJRIBASIDAN O`RGANGAN</span>
              </h3>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements - Positioned better for responsive layout */}
        <motion.div
          className="absolute -bottom-10 -left-10 opacity-20 md:opacity-30 z-0 hidden sm:block"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Image src="/ptichka.webp" width={120} height={120} alt="Decoration" />
        </motion.div>

        <motion.div
          className="absolute -top-10 -right-10 opacity-20 md:opacity-30 z-0 hidden sm:block"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Image src="/angular.webp" width={200} height={200} alt="Decoration" />
        </motion.div>
      </div>
    </div>
  )
}

