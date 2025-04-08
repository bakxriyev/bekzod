"use client"

import { motion,AnimatePresence } from "framer-motion"
import { useState } from "react";

export default function Hero() {


  return (
    <section className="w-full overflow-hidden">
      <div className="container relative md:p-20 min-h-screen z-10 md:min-h-[700px] flex items-center max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <motion.div
            className="text-black w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[4rem] font-black leading-[0.9] mb-2">
              CALL-MARKAZ
            </h1>
            <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-black leading-[0.9] mb-4">
              OPERATORI
            </h1>
            
            <div className="bg-black inline-block px-4 py-2 mb-8 w-auto">
              <h2 className="text-white font-black text-[2rem] md:text-[2.5rem] lg:text-[2.5rem] leading-tight m-0">
                VA SOTUV MENEJERI
              </h2>
            </div>

            <p className="text-lg md:text-xl mb-8 max-w-[600px]">
              Savdo va mijozlar bilan ishlash bo'yicha muhim ko'nikmalarni tez va samarali o'rganing!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
            <motion.a

              href="https://t.me/khanov_sotuv_bot"
              target="_blank"
              className="bg-gray-800 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform  shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              KURS HARIDI
            </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Dollar bill background images */}
            <div className="absolute -bottom-20 -left-20 z-0 opacity-60 rotate-12">
              <img src="/dollor1.webp" alt="Dollar 1" className="w-[200px] md:w-[300px]" />
            </div>
            <div className="absolute top-20 right-0 z-0 opacity-50 -rotate-12">
              <img src="/dollor2.webp" alt="Dollar 2" className="w-[200px] md:w-[300px]" />
            </div>
            
            {/* Main person image */}
            <img
              src="/yaxshi.webp"
              alt="Professional sales person"
              className="relative z-10 w-full object-contain"
            />
          </motion.div>
        </div>
      </div>
      
    </section>
  )
}
