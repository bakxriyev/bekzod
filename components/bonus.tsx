'use client';

import Image from 'next/image';

export default function Bonuslar() {
  return (
    <section id='bonuslar' className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-red-600 text-6xl font-bold text-center mb-12">BONUSLAR</h1>
      
      <div className="relative w-full max-w-5xl flex flex-col items-center gap-6">
        {/* Chap tomondagi sovg'a rasmi */}
        <div className="absolute -left-32 bottom-10 hidden lg:block">
          <Image src="/sovga.webp" alt="Gift Left" width={400} height={400} />
        </div>

        {/* Bonuslar ro'yxati */}
        <div className="w-full flex flex-col items-center gap-6">
          {[ 
            "SHAXSIY TAVSIYA VA MASLAHATLAR",
            "SAVDO BO‘YICHA PDF-QO‘LLANMALAR",
            "REZYUME TAYYORLASH BO‘YICHA SHABLONLAR",
            "INTERVYUGA TAYYORGARLIK BO‘YICHA SKRIPTLAR",
            "YOPIQ TELEGRAM-GURUHGA KIRISH VA MENTORLIK",
          ].map((text, index) => (
            <div
              key={index}
              className="w-full bg-white shadow-2xl rounded-2xl p-6 text-center text-xl font-semibold flex items-center gap-4 max-w-lg border border-gray-200"
            >
            
              {text}
            </div>
          ))}
        </div>

        {/* O'ng tomondagi sovg'a rasmi */}
        <div className="absolute -right-32 top-10 hidden lg:block">
          <Image src="/sovga.webp" alt="Gift Right" width={400} height={400} />
        </div>
      </div>
      
    </section>
  );
}
