"use client";

import { useState } from "react";
import BirthdayBox from "@/components/birthday-box";
import BirthdayMessage from "@/components/birthday-message";
import ConfettiEffect from "@/components/confetti-effect";
import FloatingElements from "@/components/floating-elements";
import Link from "next/link";
import { Camera } from "lucide-react";

export default function BirthdayPage() {
  const [isBoxOpened, setIsBoxOpened] = useState(false);
  const [username] = useState("Ali Anda");
  return (
    <main className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-purple-800 via-purple-600 to-pink-500">
      {/* 3D perspective wrapper */}
      {/* Gallery button - only visible after box is opened */}
      {isBoxOpened && (
        <Link
          href="/gallery"
          className="absolute  top-10 z-30 flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/30"
        >
          <Camera size={20} />
          <span>View Gallery</span>
        </Link>
      )}
      <div className="relative h-full w-full" style={{ perspective: "1000px" }}>
        {/* Animated background with parallax effect */}
        <div className="absolute inset-0 z-0">
          {isBoxOpened && (
            <div className="absolute inset-0 overflow-hidden">
              {/* Parallax background circles */}
              {[...Array(30)].map((_, i) => {
                const size = Math.random() * 150 + 20;
                const depth = Math.random() * 5;
                const speed = 20 + Math.random() * 40;

                return (
                  <div
                    key={i}
                    className="absolute rounded-full bg-white opacity-20"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      transform: `translateZ(${-depth * 100}px)`,
                      animation: `float ${speed}s ease-in-out infinite alternate`,
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* 3D floating elements */}
        {isBoxOpened && <FloatingElements />}

        {/* Birthday content */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
          {!isBoxOpened ? (
            <BirthdayBox onOpen={() => setIsBoxOpened(true)} />
          ) : (
            <BirthdayMessage username={username} />
          )}
        </div>

        {/* Instruction */}
        {!isBoxOpened && (
          <div className="absolute bottom-10 left-0 right-0 z-20 text-center text-white">
            <p className="animate-bounce text-xl">
              Click the gift box to open your surprise!
            </p>
          </div>
        )}
      </div>

      {/* Confetti overlay */}
      {isBoxOpened && <ConfettiEffect />}

      {/* Global animations */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }

        @keyframes spin {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes floatParallax {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(10px, -30px, 50px);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes moveBackground {
       @keyframes moveBackground {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .moving-background {
          background: linear-gradient(
            45deg,
            #ff9a9e,
            #fad0c4,
            #fbc2eb,
            #a18cd1,
            #fbc2eb,
            #fad0c4,
            #ff9a9e
          );
          background-size: 400% 400%;
          animation: moveBackground 15s ease infinite;
        }
      `}</style>
    </main>
  );
}
