import React from 'react';
import Image from 'next/image';

export default function AbdelnaseerProPlatform() {
  const imageUrl = "/IMG-20251206-WA0009.jpg"; // تأكد إن الصورة دي موجودة في فولدر public

  const userData = {
    arabic: {
      name: "مهندس عبد الناصر",
      bio: "مبرمج وخبير الأمن السيبراني ومطور برامج ومحاضر لدى أكاديمية مصر للعلوم التكنولوجية 2025.",
    },
    english: {
      name: "eng Abdelnaseer",
      bio: "Programmer, Cybersecurity Expert, Software Developer, and Lecturer at Egypt Academy for Technological Sciences 2025.",
    },
  };

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden font-sans text-white flex flex-col items-center justify-center p-4">
      {/* Background with glowing code lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-blue-500 to-green-400"
            style={{
              height: '2px',
              width: `${Math.random() * 100 + 50}%`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100 - 50}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `glow-line ${Math.random() * 10 + 5}s infinite alternate`,
              filter: `blur(${Math.random() * 1}px)`,
            }}
          ></div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes glow-line {
          0% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            opacity: 0.1;
          }
        }
        .text-glow {
          text-shadow: 0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-4xl text-center">
        {/* Main Title */}
        <h1 className="text-7xl md:text-8xl font-extrabold mb-12 text-blue-400 text-glow">
          Abdelnaseer Pro
        </h1>

        {/* Profile Card */}
        <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-blue-600 mb-12 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 rtl:space-x-reverse">
          {/* Image */}
          <div className="w-40 h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            {/* تأكد من وجود الصورة في مجلد public في مشروعك */}{/* اسم الصورة IMG-20251206-WA0009.jpg  */}
            <Image
              src={imageUrl}
              alt="Abdelnaseer Profile"
              width={160}
              height={160}
              objectFit="cover"
              className="rounded-full"
            />
          </div>

          {/* Bio Content */}
          <div className="text-left flex-grow">
            <h2 className="text-4xl font-bold text-blue-300 mb-2">
              {userData.english.name}
            </h2>
            <p className="text-lg text-gray-200 mb-4">{userData.english.bio}</p>
            <p className="text-lg text-gray-300 font-bold mb-1">Eng. Abdelnaseer</p>
            <ul className="text-gray-400 text-base list-disc list-inside">
              <li>Programmer</li>
              <li>Cybersecurity Expert</li>
              <li>Software Developer</li>
              <li>Lecturer at Egypt Academy for Technological Sciences 2025</li>
            </ul>
          </div>
        </div>

        {/* Login Section */}
        <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-blue-600 w-full max-w-md mx-auto">
          <h3 className="text-3xl font-bold text-green-400 mb-8">Login to Your Account</h3>
          <div className="space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="User"
                className="w-full p-4 bg-gray-700 text-white rounded-lg border border-blue-500 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 bg-gray-700 text-white rounded-lg border border-blue-500 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
              />
            </div>
            <button className="w-full bg-blue-600 text-white text-xl font-bold py-4 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-lg">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
