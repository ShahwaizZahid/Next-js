declare module "canvas-confetti" {
  const confetti: {
    (options?: {
      particleCount?: number;
      angle?: number;
      spread?: number;
      startVelocity?: number;
      decay?: number;
      gravity?: number;
      drift?: number;
      ticks?: number;
      colors?: string[];
      shapes?: string[];
      scalar?: number;
      zIndex?: number;
      disableForReducedMotion?: boolean;
      origin?: { x?: number; y?: number };
    }): Promise<null>;

    create: (
      canvas: HTMLCanvasElement,
      options?: { resize: boolean; useWorker?: boolean }
    ) => typeof confetti;
  };

  export default confetti;
}
