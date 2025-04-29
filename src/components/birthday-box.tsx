"use client";

import { useState } from "react";
type BirthdayBoxProps = {
  onOpen: () => void;
};
export default function BirthdayBox({ onOpen }: BirthdayBoxProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [stage, setStage] = useState(0); // Animation stage

  // 3D hover effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isClicked && isHovered) {
      const box = e.currentTarget.getBoundingClientRect();
      const centerX = box.left + box.width / 2;
      const centerY = box.top + box.height / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate rotation based on mouse position
      const rotateY = ((mouseX - centerX) / (box.width / 2)) * 15;
      const rotateX = -((mouseY - centerY) / (box.height / 2)) * 15;

      setRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleClick = () => {
    if (isClicked) return;
    setIsClicked(true);

    // Reset rotation for opening animation
    setRotation({ x: 0, y: 0 });

    // Animation sequence
    setTimeout(() => setStage(1), 100); // Lid starts to open
    setTimeout(() => setStage(2), 800); // Lid opens more
    setTimeout(() => setStage(3), 1500); // Lid fully open
    setTimeout(() => setStage(4), 2000); // Box starts to fade

    // Delay the actual opening to show the animation
    setTimeout(() => {
      onOpen();
    }, 2500);
  };

  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="relative" style={{ perspective: "1500px" }}>
      <div
        className={`relative cursor-pointer transition-all duration-500 ${isClicked ? "scale-110" : "scale-100"}`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{
          transform: isClicked
            ? `rotateX(5deg) scale3d(1, 1, 1)`
            : `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.3s ease",
        }}
      >
        {/* Complete 3D Box */}
        <div
          className="relative h-64 w-64"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Box base - all 6 faces */}
          <div
            className="absolute h-64 w-64 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600"
            style={{
              transform: "translateZ(32px)",
              boxShadow: "inset 0 0 30px rgba(0,0,0,0.2)",
            }}
          >
            {/* Front face texture */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px w-full bg-white opacity-50"
                  style={{ top: `${i * 8 + 4}px` }}
                ></div>
              ))}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-full w-px bg-white opacity-50"
                  style={{ left: `${i * 8 + 4}px` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Back face */}
          <div
            className="absolute h-64 w-64 rounded-lg bg-gradient-to-br from-pink-600 to-pink-700"
            style={{
              transform: "translateZ(-32px) rotateY(180deg)",
              boxShadow: "inset 0 0 30px rgba(0,0,0,0.2)",
            }}
          >
            {/* Back face texture */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px w-full bg-white opacity-50"
                  style={{ top: `${i * 8 + 4}px` }}
                ></div>
              ))}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-full w-px bg-white opacity-50"
                  style={{ left: `${i * 8 + 4}px` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Left face */}
          <div
            className="absolute h-64 w-64 bg-gradient-to-br from-pink-400 to-pink-500"
            style={{
              transform: "rotateY(-90deg) translateZ(32px)",
              width: "64px",
              boxShadow: "inset 0 0 30px rgba(0,0,0,0.2)",
            }}
          ></div>

          {/* Right face */}
          <div
            className="absolute h-64 w-64 bg-gradient-to-br from-pink-400 to-pink-500"
            style={{
              transform: "rotateY(90deg) translateZ(32px)",
              width: "64px",
              boxShadow: "inset 0 0 30px rgba(0,0,0,0.2)",
            }}
          ></div>

          {/* Bottom face */}
          <div
            className="absolute h-64 w-64 bg-gradient-to-br from-pink-700 to-pink-800"
            style={{
              transform: "rotateX(90deg) translateZ(32px)",
              height: "64px",
              boxShadow: "inset 0 0 30px rgba(0,0,0,0.2)",
            }}
          ></div>

          {/* Top inner face (visible when lid is open) */}
          <div
            className="absolute h-64 w-64 bg-gradient-to-br from-pink-300 to-pink-400"
            style={{
              transform: "rotateX(-90deg) translateZ(32px)",
              height: "64px",
              boxShadow: "inset 0 0 30px rgba(0,0,0,0.2)",
            }}
          >
            {/* Inner box texture */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px w-full bg-white opacity-50"
                  style={{ top: `${i * 16 + 8}px` }}
                ></div>
              ))}
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-full w-px bg-white opacity-50"
                  style={{ left: `${i * 16 + 8}px` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Box contents (visible when lid is open) */}
          {stage >= 2 && (
            <div
              className="absolute left-0 top-0 flex h-full w-full items-center justify-center"
              style={{
                transform: "translateZ(20px)",
                animation: "float 2s ease-in-out infinite",
              }}
            >
              <div className="text-6xl">🎁</div>
            </div>
          )}

          {/* Ribbon vertical */}
          <div
            className="absolute left-1/2 top-0 h-full w-12 -translate-x-1/2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500"
            style={{
              transform: "translateZ(33px)",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          >
            {/* Ribbon texture */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px w-full bg-white opacity-50"
                  style={{ top: `${i * 6 + 3}px` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Ribbon horizontal */}
          <div
            className="absolute left-0 top-1/2 h-12 w-full -translate-y-1/2 bg-gradient-to-b from-yellow-500 via-yellow-400 to-yellow-500"
            style={{
              transform: "translateZ(33px)",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          >
            {/* Ribbon texture */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-full w-px bg-white opacity-50"
                  style={{ left: `${i * 6 + 3}px` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Box Lid */}
          <div
            className={`absolute -top-12 left-0 h-12 w-full transition-all duration-1000 ease-out ${
              stage >= 1 ? "animate-lid-open" : ""
            }`}
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "bottom",
              transform:
                stage >= 1
                  ? `rotateX(${-90 - stage * 30}deg) translateY(${stage * 10}px) translateZ(${stage * 5}px)`
                  : "rotateX(0deg)",
            }}
          >
            {/* Lid top */}
            <div
              className="absolute h-64 w-64 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600"
              style={{
                transform: "translateZ(6px)",
                height: "12px",
                boxShadow: "0 0 20px rgba(0,0,0,0.3)",
              }}
            >
              {/* Lid texture */}
              <div className="absolute inset-0 overflow-hidden opacity-30">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-px w-full bg-white opacity-50"
                    style={{ top: `${i * 4 + 2}px` }}
                  ></div>
                ))}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-full w-px bg-white opacity-50"
                    style={{ left: `${i * 8 + 4}px` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Lid front */}
            <div
              className="absolute top-12 h-64 w-64 bg-gradient-to-b from-pink-600 to-pink-700"
              style={{
                transform: "rotateX(90deg)",
                height: "6px",
                transformOrigin: "top",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            ></div>

            {/* Lid left */}
            <div
              className="absolute h-12 w-6 bg-gradient-to-r from-pink-700 to-pink-600"
              style={{
                transform: "rotateY(-90deg)",
                left: "0",
                transformOrigin: "left",
              }}
            ></div>

            {/* Lid right */}
            <div
              className="absolute h-12 w-6 bg-gradient-to-r from-pink-600 to-pink-700"
              style={{
                transform: "rotateY(90deg)",
                right: "0",
                transformOrigin: "right",
              }}
            ></div>

            {/* Lid back */}
            <div
              className="absolute h-6 w-64 bg-gradient-to-b from-pink-700 to-pink-600"
              style={{
                transform: "rotateX(-90deg) translateY(-6px)",
                bottom: "0",
                transformOrigin: "bottom",
              }}
            ></div>
          </div>

          {/* 3D Bow */}
          <div
            className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
              stage >= 1
                ? `translate-y-${-20 - stage * 10}px rotate-${stage * 45}deg scale-${100 + stage * 20}`
                : ""
            }`}
            style={{
              transformStyle: "preserve-3d",
              transform: `translateZ(40px) ${stage >= 1 ? `rotateZ(${stage * 45}deg)` : ""}`,
            }}
          >
            {/* Bow center */}
            <div
              className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-400"
              style={{
                transform: "translateZ(4px)",
                boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              }}
            ></div>

            {/* Bow loops */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 h-16 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-300"
                style={{
                  transform: `translateZ(2px) rotate(${i * 45}deg) translateX(8px)`,
                  transformOrigin: "center left",
                  boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
                }}
              ></div>
            ))}

            {/* Bow ribbons hanging down */}
            <div
              className="absolute left-1/2 top-1/2 h-24 w-6 -translate-x-1/2 translate-y-4 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500"
              style={{
                transform: "translateZ(0px) rotate(10deg)",
                transformOrigin: "top center",
                boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
                borderBottomLeftRadius: "40%",
                borderBottomRightRadius: "40%",
              }}
            ></div>
            <div
              className="absolute left-1/2 top-1/2 h-20 w-6 -translate-x-1/2 translate-y-4 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500"
              style={{
                transform: "translateZ(1px) rotate(-15deg)",
                transformOrigin: "top center",
                boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
                borderBottomLeftRadius: "40%",
                borderBottomRightRadius: "40%",
              }}
            ></div>
          </div>

          {/* Happy Birthday text */}
          <div
            className="absolute bottom-4 left-0 w-full text-center"
            style={{ transform: "translateZ(34px)" }}
          >
            <h2 className="text-2xl font-bold text-white drop-shadow-lg">
              Happy Birthday!
            </h2>
            <p className="text-sm text-white opacity-80">(Click to open)</p>
          </div>
        </div>

        {/* Box shadow on ground */}
        <div
          className={`absolute -bottom-8 left-1/2 h-4 w-48 -translate-x-1/2 rounded-full bg-black opacity-30 blur-md transition-all duration-500 ${
            isClicked ? "w-32 opacity-10" : isHovered ? "w-56" : "w-48"
          }`}
        ></div>
      </div>

      {/* Explosion effect when clicked */}
      {stage >= 2 && (
        <div className="absolute left-0 top-0">
          {[...Array(20)].map((_, i) => {
            const size = Math.random() * 10 + 5;
            const duration = Math.random() * 1 + 0.5;
            const delay = Math.random() * 0.3;

            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-yellow-400"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  transform: "translate(-50%, -50%)",
                  animation: `explode ${duration}s ease-out ${delay}s forwards`,
                }}
              />
            );
          })}
        </div>
      )}

      {/* Animation for explosion particles and lid */}
      <style jsx>{`
        @keyframes explode {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%)
              translateX(${Math.random() * 200 - 100}px)
              translateY(${Math.random() * 200 - 100}px) scale(1);
            opacity: 0;
          }
        }

        @keyframes lid-open {
          0% {
            transform: rotateX(0deg);
          }
          50% {
            transform: rotateX(-110deg) translateY(10px);
          }
          75% {
            transform: rotateX(-130deg) translateY(20px);
          }
          100% {
            transform: rotateX(-150deg) translateY(30px) translateZ(15px);
          }
        }
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
      `}</style>
    </div>
  );
}
