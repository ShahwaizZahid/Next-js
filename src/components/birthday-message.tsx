"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function BirthdayMessage({ username }: { username: string }) {
  // State to control visibility and flip of the card
  const [visible, setVisible] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    // Animate in after a short delay
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Handle card flip
  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      {/* 3D Flip Card */}
      <div
        className={`relative h-96 w-80 cursor-pointer transition-all duration-1000 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
        onClick={handleCardClick}
        style={{
          perspective: "1500px",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="relative h-full w-full rounded-2xl shadow-2xl transition-all duration-1000"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front of card */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 p-6"
            style={{
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="mb-6 text-center"
              style={{ transform: "translateZ(40px)" }}
            >
              <h1 className="text-4xl font-bold text-white drop-shadow-lg">
                Happy Birthday!
              </h1>
              <h2 className="mt-2 text-3xl font-bold text-yellow-300 drop-shadow-md">
                {username}
              </h2>
            </div>

            <div
              className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-yellow-300 shadow-lg"
              style={{ transform: "translateZ(60px)" }}
            >
              <Image
                src="/both.jpeg" // Ensure the image is in the public folder
                alt="Birthday celebration"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p
              className="mt-6 text-center text-white opacity-80"
              style={{ transform: "translateZ(30px)" }}
            >
              Click to see your message
            </p>

            {/* 3D decorative elements */}
            <div
              className="absolute -right-4 -top-4 text-4xl"
              style={{ transform: "translateZ(50px) rotate(-15deg)" }}
            >
              🎈
            </div>
            <div
              className="absolute -left-4 -top-4 text-4xl"
              style={{ transform: "translateZ(50px) rotate(15deg)" }}
            >
              ✨
            </div>
            <div
              className="absolute -bottom-2 -right-4 text-4xl"
              style={{ transform: "translateZ(50px) rotate(10deg)" }}
            >
              🎉
            </div>
          </div>

          {/* Back of card */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-6"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="text-center"
              style={{ transform: "translateZ(40px)" }}
            >
              <h2 className="mb-4 text-3xl font-bold text-white drop-shadow-lg">
                Your Special Day!
              </h2>
              <p className="mb-6 text-lg text-white">
                Wishing you a day filled with happiness and a year filled with
                joy. May all your dreams come true!
              </p>
              <div className="flex justify-center space-x-4">
                <div
                  className="text-5xl"
                  style={{ transform: "translateZ(20px) rotate(-5deg)" }}
                >
                  🎂
                </div>
                <div
                  className="text-5xl"
                  style={{ transform: "translateZ(30px)" }}
                >
                  🎁
                </div>
                <div
                  className="text-5xl"
                  style={{ transform: "translateZ(20px) rotate(5deg)" }}
                >
                  🎊
                </div>
              </div>
            </div>

            {/* 3D decorative elements */}
            <div
              className="absolute -left-4 -top-4 text-4xl"
              style={{ transform: "translateZ(50px) rotate(-10deg)" }}
            >
              🎵
            </div>
            <div
              className="absolute -bottom-2 -left-4 text-4xl"
              style={{ transform: "translateZ(50px) rotate(10deg)" }}
            >
              🎊
            </div>
            <div
              className="absolute -bottom-2 -right-4 text-4xl"
              style={{ transform: "translateZ(50px) rotate(-5deg)" }}
            >
              🎈
            </div>
          </div>
        </div>

        {/* Card shadow */}
        <div
          className={`absolute -bottom-6 left-1/2 h-4 w-64 -translate-x-1/2 rounded-full bg-black opacity-30 blur-md transition-all duration-1000 ${
            flipped ? "w-56 rotate-180" : "w-64"
          }`}
        ></div>
      </div>

      {/* Animated emojis at the bottom */}
      <div
        className={`mt-8 flex space-x-8 transition-all duration-1000 delay-700 ${
          visible ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        {["🎂", "🎁", "🎉", "🎊", "🎈"].map((emoji, index) => (
          <div
            key={index}
            className="text-5xl"
            style={{
              animation: `bounce ${1 + index * 0.2}s ease-in-out infinite alternate`,
              animationDelay: `${index * 0.1}s`,
              transform: "translateZ(20px)",
            }}
          >
            {emoji}
          </div>
        ))}
      </div>
    </div>
  );
}
