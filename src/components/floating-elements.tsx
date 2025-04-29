"use client";

import { useEffect, useState } from "react";
type FloatingElement = {
  id: number;
  type: string;
  x: number;
  y: number;
  size: number;
  depth: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  duration: number;
  delay: number;
};
// 3D floating elements component
export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  useEffect(() => {
    // Create floating elements with random properties
    const newElements = [];
    const elementTypes = ["🎁", "🎈", "✨", "🎊", "🎂", "🎉", "🎵", "🎀"];

    for (let i = 0; i < 200; i++) {
      newElements.push({
        id: i,
        type: elementTypes[Math.floor(Math.random() * elementTypes.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 20,
        depth: Math.random() * 1000 - 500,
        rotateX: Math.random() * 360,
        rotateY: Math.random() * 360,
        rotateZ: Math.random() * 360,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      });
    }

    setElements(newElements);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute text-4xl"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            fontSize: `${element.size}px`,
            transform: `translateZ(${element.depth}px) rotateX(${element.rotateX}deg) rotateY(${element.rotateY}deg) rotateZ(${element.rotateZ}deg)`,
            animation: `float3D ${element.duration}s ease-in-out ${element.delay}s infinite alternate`,
          }}
        >
          {element.type}
        </div>
      ))}

      {/* Animation for 3D floating elements */}
      <style jsx>{`
        @keyframes float3D {
          0% {
            transform: translateZ(${Math.random() * 500 - 250}px) translateX(0)
              translateY(0) rotateX(${Math.random() * 360}deg)
              rotateY(${Math.random() * 360}deg)
              rotateZ(${Math.random() * 360}deg);
          }
          100% {
            transform: translateZ(${Math.random() * 500 - 250}px)
              translateX(${Math.random() * 100 - 50}px)
              translateY(${Math.random() * 100 - 50}px)
              rotateX(${Math.random() * 360}deg)
              rotateY(${Math.random() * 360}deg)
              rotateZ(${Math.random() * 360}deg);
          }
        }
      `}</style>
    </div>
  );
}
