"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type FAQItem = {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "Kursni sotib olsam, uni qanchalik tez o'rganib bitira olaman?",
      answer:
        "Bu sizning tezligingiz va vaqtingizga bog'liq. Kurs modullarga bo'lingan va uni istalgan vaqtda o'tishingiz mumkin. O'rtacha o'quvchilar 7-14 kun ichida kursni yakunlab, amaliyotga o'ta boshlaydilar. Sizga qulay bo'lishi uchun: Darslarni istalgan vaqtda va istalgan joyda tomosha qilishingiz mumkin. Kursni qayta ko'rib chiqish imkoniyati bor. Har bir dars yakunida testlar va amaliy topshiriqlar bor, shuning uchun natijangizni o'zingiz nazorat qilasiz.",
    },
    {
      question: "Kursni boshlash uchun savdo bo'yicha oldindan tajribaga ega bo'lishim kerakmi?",
      answer:
        "Yo'q, bu kurs to'liq yangi boshlovchilarga ham unda ozmi ko'pmi tajribasi borlarga ham mo'ljallangan! Savdo bo'yicha hech qanday tajribaga ega bo'lmaganlar ham ushbu kurs orqali asosiy bilimlarni egallashlari va real ishga kirishlari mumkin. Darslar bosqichma-bosqich tushuntirilgan, hatto savdo sohasida umuman ishlamagan odam ham hammasini tushunadi. Agar sizda tajriba bor bo'lsa, kurs sizning bilimlaringizni tizimlashtiradi va daromadingizni oshirishga yordam beradi.",
    },
    {
      question: "Kursni tugatganimdan keyin darhol ish topa olamanmi?",
      answer:
        "Kursning asosiy maqsadi – sizni sotuv sohasida asosiy bilimlar bilan ta'minlash. Kurs davomida siz rezyume yaratish, ish topish strategiyalari bo'yicha darslar olasiz. Eng muhimi – haqiqiy amaliyot. Agar siz kursdagi bilimlarni to'liq o'zlashtirib, amalda qo'llasangiz, 3-5 mln so'm maosh bilan ish topish imkoniyatingiz katta bo'ladi. Bundan tashqari, bizda premium tarifga ega bo'lganlar uchun eksklyuziv maslahat va rezyume ko'rib chiqish xizmati mavjud. Tayyor bo'ling! Siz kursni yakunlaganingizdan so'ng, bozorga mos keladigan asosiy biimlarga ega bo'lgan mutaxassis bo'lasiz.",
    },
    {
      question: "Kurs davomida qanday amaliy mashg'ulotlar o'tkaziladi?",
      answer:
        "Kurs davomida siz real hayotiy vaziyatlarga asoslangan ko'plab amaliy mashg'ulotlarni bajarasiz. Bular orasida: mijozlar bilan muloqot simulyatsiyalari, savdo skriptlarini yozish va tahlil qilish, mijoz e'tirozlariga javob berish mashqlari, CRM tizimlarida ishlash bo'yicha amaliy topshiriqlar. Har bir modul so'ngida siz o'zingizni sinab ko'rishingiz uchun amaliy vazifalar beriladi. Premium tarif egalari uchun esa individual loyihalar va mentorlik sessiyalari ham mavjud.",
    },
    {
      question: "Kurs materiallari qancha vaqt davomida menga taqdim etiladi?",
      answer:
        "Kurs materiallariga kirish huquqi cheklanmagan muddatga beriladi. Bu degani, siz kursni sotib olgandan so'ng, unga istalgan vaqtda qayta murojaat qilishingiz mumkin. Yangilanishlar va qo'shimcha materiallar ham avtomatik ravishda sizga taqdim etiladi. Shuningdek, yopiq Telegram guruhiga a'zolik ham doimiy bo'lib, u yerda hamfikrlar bilan tajriba almashish va savollarga javob olish imkoniyati bor.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">DOIMIY SAVOLLAR BO'LIMI</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center">
                  <HelpCircle className="text-black mr-4 flex-shrink-0" size={28} />
                  <span className="font-semibold text-xl">{faq.question}</span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="flex-shrink-0 text-gray-500" size={24} />
                ) : (
                  <ChevronDown className="flex-shrink-0 text-gray-500" size={24} />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

