"use client"

import React from 'react';

export default function Features() {
  const features = [
    {
      title: "SOTUV KASBINI TO'LIQ TUSHUNTIRISH",
    },
    {
      title: "SAVDO SOHASIDA ISH TOPISH BO'YICHA YO'RIQNOMA",
    },
    {
      title: "SOTUV TEXNIKALARINI VA MIJOZLAR BILAN ISHLASH STRATEGIYALARINI O'RGATISH",
    },
    {
      title: "SOTUV INSTRUMENTLARIDAN FOYDALANISHNI O'ZLASHTIRISHGA YORDAM BERISH",
    },
  ];

  return (
    <section id='kurs-vazifasi' className="py-16 relative">
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="bg-black inline-block px-8 py-2 mb-8">
            <h2 className="text-white text-4xl font-bold">KURS VAZIFASI:</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-20">
          <img src="/ptichka.webp" alt="Checkmark" className="w-48 h-48" />
        </div>
      </div>
    </section>
  );
}