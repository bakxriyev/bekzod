"use client"

import { motion } from "framer-motion";

export default function WhyThisCourse() {
  return (
    <section
      id="why"
      className="section py-12 relative "
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black leading-tight uppercase">
            <div>NIMA UCHUN BU</div>
            <div className="bg-black text-white inline-block px-6 md:px-8 py-3 md:py-4 text-3xl md:text-5xl rounded-lg">
              KURS MUHIM?
            </div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 text-center text-xl md:text-2xl font-bold">
            <p>
              80% ISH BERUVCHILAR TAJRIBASIZ NOMZODLARNI QABUL QILISHGA TAYYOR,
              LEKIN ULARNING TAYYOR MUTAXASSIS BO'LISHINI ISTAYDI.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 text-center text-xl md:text-2xl font-bold">
            <p>
              90% NOMZODLAR MIJOZLAR BILAN ISHLASH BO'YICHA NOTO'G'RI
              YONDASHUV TUFAYLI ISHNI YO'QOTADI.
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 text-center text-xl md:text-2xl font-bold">
            <p>
              SAVDO SOHASI ENG TALABGIR YO'NALISHLARDAN BIRI BO'LIB,
              MUTAXASSISLARNING DAROMADI YUQORI.
            </p>
          </div>
        </div>

        {/* Green icon in the bottom left corner */}
        <div className="absolute bottom-5 left-0 hidden sm:block">
          <img src="/ptichka.webp" alt="Green icon" className="w-36 md:w-72 h-36 md:h-72" />
        </div>

        {/* Black angular shape in the bottom right corner */}
        <div className="absolute bottom-5 right-0 hidden sm:block">
          <img src="/angular.webp" alt="Angular shape" className="w-48 md:w-96 h-48 md:h-96" />
        </div>
      </div>
    </section>
  );
}
