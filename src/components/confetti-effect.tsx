"use client";

import { useEffect } from "react";

export default function ConfettiEffect() {
  useEffect(() => {
    const loadConfetti = async () => {
      try {
        const confettiModule = await import("canvas-confetti");
        const confetti = confettiModule.default;

        const canvas = document.createElement("canvas");
        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = "100";
        document.body.appendChild(canvas);

        const myConfetti = confetti.create(canvas, { resize: true });

        const end = Date.now() + 3 * 1000;

        const launchFireworks = () => {
          const timeLeft = end - Date.now();
          if (timeLeft <= 0) return;

          myConfetti({
            particleCount: 50,
            angle: 270,
            spread: 70,
            origin: { x: Math.random(), y: Math.random() * 0.3 + 0.5 },
            colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
            startVelocity: 30,
            gravity: 0.8,
            shapes: ["circle", "square"],
            scalar: 1.2,
          });

          requestAnimationFrame(launchFireworks);
        };

        launchFireworks();

        const interval = setInterval(() => {
          myConfetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ["#ff9999", "#99ff99", "#9999ff", "#ffff99", "#ff99ff"],
          });

          myConfetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ["#ff9999", "#99ff99", "#9999ff", "#ffff99", "#ff99ff"],
          });
        }, 400);

        return () => {
          clearInterval(interval);
          document.body.removeChild(canvas);
        };
      } catch (error) {
        console.error("Failed to load confetti:", error);
      }
    };

    loadConfetti();
  }, []);

  return null;
}
