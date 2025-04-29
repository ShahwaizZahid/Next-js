"use client";

import { useEffect, useState } from "react";

export default function Confetti() {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Dynamically import canvas-confetti to avoid SSR issues
    import("canvas-confetti").then((confetti) => {
      const confettiModule = confetti.default;

      // Initial burst of confetti
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min: number, max: number): number {
        return Math.random() * (max - min) + min;
      }
      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // Since particles fall down, start a bit higher than random
        confettiModule({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confettiModule({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);

      // Continuous gentle confetti
      const gentleInterval = setInterval(() => {
        if (!isActive) return;

        confettiModule({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confettiModule({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
      }, 500);

      return () => {
        clearInterval(interval);
        clearInterval(gentleInterval);
      };
    });

    // Stop confetti after 15 seconds to save resources
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 15000);

    return () => clearTimeout(timer);
  }, [isActive]);

  return null;
}
