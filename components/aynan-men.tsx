"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BookLanding() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: "/realtajriba.webp",
      title: "REAL TAJRIBALAR ASOSIDA TA'LIM.",
    },
    {
      icon: "/kere.webp",
      title: "ODDIY VA TUSHUNARLI YONDASHUV – MURAKKAB NARSALARNI SODDA TUSHUNTIRAMAN.",
    },
    {
      icon: "/aniq.webp",
      title: "SOTUV BO'YICHA ASOSIY KO'NIKMALARGA EGA BO'LASIZ QAYERGA QANDAY RIVOJLANISHNI BILIB OLASIZ",
    },
    {
      icon: "/daftarcha.webp",
      title: "SIZ KURS YAKUNIDA ISHGA KIRISH UCHUN YO'RIQNOMAGA EGA BO'LASIZ!",
    },
  ];

  return (
    <div id="who" className="w-full relative overflow-hidden" style={{ minHeight: 'calc(100vh - 1px)' }}>
      {/* Background element - absolutely positioned at top */}
      <div className="absolute left-0 top-0 h-full w-72 sm:w-[400px] md:w-[600px] opacity-50 sm:opacity-100">
        <Image 
          src="/lampochka.webp" 
          alt="Background gear" 
          fill 
          className="object-contain object-left" 
          priority
        />
      </div>

      {/* Main content container with minimal top padding */}
      <div className="container mx-auto px-4 pt-2 sm:pt-4 relative z-10">
        {/* Book Section */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -10 }}
            animate={isLoaded ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="relative w-56 h-72 sm:w-72 sm:h-96 md:w-[350px] md:h-[450px] mb-6 sm:mb-8"
          >
            <Image 
              src="/kitob.webp" 
              alt="NIMA UCHUN AYNAN MEN?" 
              fill 
              className="object-contain" 
              priority 
            />
          </motion.div>

          {/* Features Grid with reduced spacing */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pb-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-3 sm:p-4 flex flex-col items-center text-center h-full"
              >
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-2">
                  <Image 
                    src={feature.icon || "/placeholder.svg"} 
                    alt={feature.title} 
                    fill 
                    className="object-contain" 
                  />
                </div>
                <h3 className="text-xs sm:text-sm md:text-base font-bold text-center">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}