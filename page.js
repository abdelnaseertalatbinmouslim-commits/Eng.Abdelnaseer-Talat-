"use client"; // 
import React, { useState } from 'react';
export default function AbdelnaseerProPlatform() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // بياناتك الشخصية باللغتين
  const bioAr = "مهندس عبد الناصر - مبرمج وخبير الأمن السيبراني ومطور برامج ومحاضر لدى أكاديمية مصر للعلوم التكنولوجية 2025";
  const bioEn = "Eng Abdelnaseer - Programmer, Cybersecurity Expert, Software Developer, and Lecturer at Egypt Academy for Technological Sciences 2025";

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans relative" dir="rtl">
      
      {/* خلفية الأكواد البرمجية (الأشكال الخرافية) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        {/* دوائر ضوئية متحركة */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-30"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center p-6 border-b border-blue-900/50 bg-slate-950/50 backdrop-blur-md">
        <div className="text-3xl font-black text-blue-500 tracking-tighter drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
          Abdelnaseer Pro
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-2 rounded-full font-bold transition-all shadow-lg shadow-blue-500/20">
          دخول الطلاب
        </button>
      </nav>

      <main className="relative z-10 container mx-auto px-4 py-10 flex flex-col items-center">
        
        {/* الاسم الكبير المنور */}
        <h1 className="text-6xl md:text-9xl font-black text-center mb-16 uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
          Abdelnaseer Pro
        </h1>

        {/* كرت البروفايل الخرافي */}
        <div className="w-full max-w-5xl bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-2xl mb-16">
          
          {/* الصورة مع Eng Abdelnaseer */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl">
              <img 
                src="/IMG-20251206-WA0009.jpg" 
                alt="Eng Abdelnaseer" 
                className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-xl font-black text-lg shadow-xl whitespace-nowrap">
              eng Abdelnaseer
            </div>
          </div>

          {/* النصوص والمعلومات */}
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-4xl font-bold text-white mb-6 border-r-4 border-blue-500 pr-4">من أنا؟</h2>
            <p className="text-2xl text-gray-100 font-bold leading-relaxed mb-6">
              {bioAr}
            </p>
            <div className="h-px w-full bg-gradient-to-l from-blue-500 to-transparent mb-6"></div>
            <p className="text-xl text-blue-400 font-mono italic leading-relaxed">
              {bioEn}
            </p>
          </div>
        </div>

        {/* خانة اليوزر والباسورد */}
        <div className="w-full max-w-md bg-slate-900/80 border border-blue-500/50 rounded-3xl p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <h3 className="text-3xl font-black text-center text-white mb-10 tracking-tight">Login Portal</h3>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-blue-400 mr-2 uppercase tracking-widest">Username</label>
              <input 
                type="text" 
                placeholder="User"
                className="w-full bg-slate-950 border border-blue-900/50 p-4 rounded-2xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-blue-400 mr-2 uppercase tracking-widest">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-slate-950 border border-blue-900/50 p-4 rounded-2xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white font-mono"
              />
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-black py-5 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-900/40 mt-4">
              دخول المنصة
            </button>
          </div>
        </div>

      </main>

      <footer className="relative z-10 py-12 text-center text-gray-500 font-mono text-sm border-t border-blue-900/20 mt-20">
        <p>TERMINAL: Abdelnaseer_Pro_v1.0.0 Initialized...</p>
        <p className="mt-2 italic">© 2025 Egypt Academy for Technological Sciences</p>
      </footer>

      {/* تنسيقات إضافية للأنيميشن */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        .animate-pulse {
          animation: pulse 8s infinite ease-in-out;
        }
      `}</style>

    </div>
  );
}
