"use client"

import { motion } from "framer-motion"

export default function WhoIsThisFor() {
  const targetAudience = [
    {
      title: "SAVDO SOHASIDAGI BILIMLARINGIZNI OSHIRMOQCHI BO'LSANGIZ",
      subtitle: "USHBU KURS SIZ UCHUN, AGAR SIZ:",
      icon: "📈",
      delay: 0.1,
    },
    {
      title: "CALL-MARKAZ YOKI SAVDO SOHASIDA BOSHLAMOQCHI BO'LSANGIZ",
      subtitle: "ISH QIDIRAYOTGAN BO'LSANGIZ:",
      icon: "🔎",
      delay: 0.2,
    },
    {
      title: "LEKIN BU YO'NALISHDA RIVOJLANISHNI ISTASANGIZ",
      subtitle: "MIJOZLAR BILAN ISHLASH TAJRIBANGIZ BO'LMASA",
      icon: "🚀",
      delay: 0.3,
    },
    {
      title: "(MARKETOLOG, TARGETOLOG, SAYT YARATUVCHILAR VA BOSHQALAR)",
      subtitle: "FREELANCER SIFATIDA O'Z XIZMATLARINGIZNI SOTISHNI XOHLASANGIZ",
      icon: "💼",
      delay: 0.4,
    },
  ]

  return (
    <section id="kim-uchun" className="min-h-screen w-full py-16 mt-16 sm:py-12 px-4">
      <div className="max-w-6xl mx-auto py-16">
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            className="inline-block transform -rotate-6"
            initial={{ opacity: 0, rotate: -12 }}
            whileInView={{ opacity: 1, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-black text-white px-6 py-3 inline-block">
              KURS KIMLAR UCHUN?
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {targetAudience.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <div className="flex items-start mb-3 sm:mb-4">
                <div className="text-2xl sm:text-3xl mr-3 sm:mr-4">{item.icon}</div>
                <div className="bg-black px-3 sm:px-4 py-1 sm:py-2 rounded">
                  <h3 className="text-white font-bold text-xs sm:text-sm md:text-base">
                    {item.subtitle}
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-8 sm:mt-12">
          {/* Add your sticker-growth element here if needed */}
        </div>
      </div>
    </section>
  )
}