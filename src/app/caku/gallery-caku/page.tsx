"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";

export default function GalleryPage() {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 0,
      src: "/caku/1.jpeg",
      alt: "Birthday Memory 1",
      liked: false,
    },
    {
      id: 1,
      src: "/caku/2.jpeg",
      alt: "Birthday Memory 2",
      liked: false,
    },
    {
      id: 2,
      src: "/caku/3.jpeg",
      alt: "Birthday Memory 3",
      liked: false,
    },
    {
      id: 3,
      src: "/caku/4.jpeg",
      alt: "Birthday Memory 4",
      liked: false,
    },
    {
      id: 4,
      src: "/caku/5.jpeg",
      alt: "Birthday Memory 5",
      liked: false,
    },
    {
      id: 5,
      src: "/caku/6.jpeg",
      alt: "Birthday Memory 6",
      liked: false,
    },
    {
      id: 6,
      src: "/caku/7.jpeg",
      alt: "Birthday Memory 7",
      liked: false,
    },
    {
      id: 7,
      src: "/caku/8.jpeg",
      alt: "Birthday Memory 8",
      liked: false,
    },
    {
      id: 8,
      src: "/caku/9.jpeg",
      alt: "Birthday Memory 9",
      liked: false,
    },
    {
      id: 9,
      src: "/caku/10.jpeg",
      alt: "Birthday Memory 10",
      liked: false,
    },
    {
      id: 10,
      src: "/caku/11.jpeg",
      alt: "Birthday Memory 11",
      liked: false,
    },
    {
      id: 11,
      src: "/caku/12.jpeg",
      alt: "Birthday Memory 12",
      liked: false,
    },
    {
      id: 12,
      src: "/caku/13.jpeg",
      alt: "Birthday Memory 13",
      liked: false,
    },
    {
      id: 13,
      src: "/caku/14.jpeg",
      alt: "Birthday Memory 14",
      liked: false,
    },
    {
      id: 14,
      src: "/caku/15.jpeg",
      alt: "Birthday Memory 15",
      liked: false,
    },
    {
      id: 15,
      src: "/caku/16.jpeg",
      alt: "Birthday Memory 16",
      liked: false,
    },
    {
      id: 16,
      src: "/caku/17.jpeg",
      alt: "Birthday Memory 17",
      liked: false,
    },
    {
      id: 17,
      src: "/caku/18.jpeg",
      alt: "Birthday Memory 18",
      liked: false,
    },
    {
      id: 18,
      src: "/caku/19.jpeg",
      alt: "Birthday Memory 19",
      liked: false,
    },
    {
      id: 19,
      src: "/caku/20.jpeg",
      alt: "Birthday Memory 20",
      liked: false,
    },
  ];

  useEffect(() => {
    // Staggered animation for images appearing
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleImages((prev) => {
          const nextIndex = prev.length;
          if (nextIndex >= images.length) {
            clearInterval(interval);
            return prev;
          }
          return [...prev, nextIndex];
        });
      }, 100); // 100ms between each image appearing

      return () => clearInterval(interval);
    }, 300); // Initial delay

    return () => clearTimeout(timer);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-purple-600 to-pink-500 p-4 md:p-8">
      {/* Header with back button */}
      <header className="mb-8 flex items-center justify-between">
        <Link
          href="/caku"
          className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-md transition-all hover:bg-white/30"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </Link>
        <h1 className="text-center text-3xl font-bold text-white drop-shadow-lg md:text-4xl">
          🥳 🥳 🥳 🥳 Happy Birthday 🥳 🥳 🥳 🥳
        </h1>
        <div className="w-[100px]"></div> {/* Spacer for centering */}
      </header>

      {/* Gallery grid */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`group relative aspect-square cursor-pointer overflow-hidden rounded-lg transition-all duration-500 ${
                visibleImages.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
                transform: `perspective(1000px) rotateY(${Math.random() * 5 - 2.5}deg) rotateX(${Math.random() * 5 - 2.5}deg)`,
              }}
              onClick={() => setSelectedImage(image.id)}
            >
              {/* Image */}
              <div className="relative h-full w-full overflow-hidden rounded-lg border-2 border-white/30 shadow-xl transition-all duration-500 group-hover:scale-105">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay with info */}
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-center text-sm font-medium text-white">
                    Memory #{image.id + 1}
                  </p>
                </div>

                {/* Like button */}
                <button
                  className="absolute right-2 top-2 rounded-full bg-white/20 p-2 opacity-0 backdrop-blur-md transition-opacity duration-300 hover:bg-white/40 group-hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Toggle like functionality would go here
                  }}
                >
                  <Heart size={16} className="text-white" />
                </button>
              </div>

              {/* 3D effect shadow */}
              <div className="absolute -bottom-1 left-1/2 h-2 w-[90%] -translate-x-1/2 rounded-full bg-black opacity-30 blur-md transition-all duration-500 group-hover:opacity-50"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for selected image */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[80vh] w-[80vw] max-w-4xl">
              <Image
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
            <button
              className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating decoration elements */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 20}px`,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out ${Math.random() * 5}s infinite alternate`,
            }}
          >
            {
              ["🎁", "🎈", "✨", "🎊", "🎂", "🎉", "🎵", "🎀"][
                Math.floor(Math.random() * 8)
              ]
            }
          </div>
        ))}
      </div>

      {/* Animation keyframes */}
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
      `}</style>
    </div>
  );
}
