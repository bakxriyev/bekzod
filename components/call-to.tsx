"use client"

import { motion } from "framer-motion"

export default function CallToAction() {
  return (
    <section id="boglanish" className="py-16 text-white">
      <div className="container mx-auto text-center px-4">
        <motion.div
          className="bg-gray-800 p-10 rounded-xl shadow-2xl border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.h2
            className="text-4xl font-extrabold mb-6 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Sotuv sohasida muvaffaqiyatga erishishga tayyormisiz?
          </motion.h2>
          <motion.p
            className="text-lg max-w-2xl mx-auto mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Bugun ro'yxatdan o'ting va professional sotuv mutaxassisi bo'lish yo'lida birinchi qadamni qo'ying!
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a

              href="https://t.me/khanov_sotuv_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-300 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kurs harid qilish
            </motion.a>
            <motion.a
              href="https://t.me/khanov_sotuv_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-300 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Bepul konsultatsiya olish
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

