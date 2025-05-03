"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ImageIcon, Film } from "lucide-react";

export default function GalleryPage() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");

  const images = [
    {
      id: 0,
      src: "/anda/1.jpeg",
      alt: "Birthday Memory 1",
      liked: false,
    },
    {
      id: 1,
      src: "/anda/2.jpeg",
      alt: "Birthday Memory 2",
      liked: false,
    },
    {
      id: 2,
      src: "/anda/3.jpeg",
      alt: "Birthday Memory 3",
      liked: false,
    },
    {
      id: 3,
      src: "/anda/4.jpeg",
      alt: "Birthday Memory 4",
      liked: false,
    },
    {
      id: 4,
      src: "/anda/5.jpeg",
      alt: "Birthday Memory 5",
      liked: false,
    },
    {
      id: 5,
      src: "/anda/6.jpeg",
      alt: "Birthday Memory 6",
      liked: false,
    },
    {
      id: 6,
      src: "/anda/7.jpeg",
      alt: "Birthday Memory 7",
      liked: false,
    },
    {
      id: 7,
      src: "/anda/8.jpeg",
      alt: "Birthday Memory 8",
      liked: false,
    },
    {
      id: 8,
      src: "/anda/9.jpeg",
      alt: "Birthday Memory 9",
      liked: false,
    },
    {
      id: 9,
      src: "/anda/10.jpeg",
      alt: "Birthday Memory 10",
      liked: false,
    },
    {
      id: 10,
      src: "/anda/11.jpeg",
      alt: "Birthday Memory 11",
      liked: false,
    },
    {
      id: 11,
      src: "/anda/12.jpeg",
      alt: "Birthday Memory 12",
      liked: false,
    },
    {
      id: 12,
      src: "/anda/13.jpeg",
      alt: "Birthday Memory 13",
      liked: false,
    },
    {
      id: 13,
      src: "/anda/14.jpeg",
      alt: "Birthday Memory 14",
      liked: false,
    },
    {
      id: 14,
      src: "/anda/15.jpeg",
      alt: "Birthday Memory 15",
      liked: false,
    },
    {
      id: 15,
      src: "/anda/16.jpeg",
      alt: "Birthday Memory 16",
      liked: false,
    },
    {
      id: 16,
      src: "/anda/17.jpeg",
      alt: "Birthday Memory 17",
      liked: false,
    },
    {
      id: 17,
      src: "/anda/18.jpeg",
      alt: "Birthday Memory 18",
      liked: false,
    },
    {
      id: 18,
      src: "/anda/19.jpeg",
      alt: "Birthday Memory 19",
      liked: false,
    },
    {
      id: 19,
      src: "/anda/20.jpeg",
      alt: "Birthday Memory 20",
      liked: false,
    },
  ];

  const videos = [
    {
      id: 0,
      thumbnail: "/anda1/1.png",
      src: "/anda1/1.mp4",
      alt: "Birthday Video 1",
      filename: "birthday-video-1.mp4",
      duration: "1:23",
    },
    {
      id: 1,
      thumbnail: "/anda1/2.png",
      src: "/anda1/2.mp4",
      alt: "Birthday Video 2",
      filename: "birthday-video-2.mp4",
      duration: "2:05",
    },
    {
      id: 2,
      thumbnail: "/anda1/3.png",
      src: "/anda1/3.mp4",
      alt: "Birthday Video 3",
      filename: "birthday-video-3.mp4",
      duration: "1:58",
    },
    {
      id: 3,
      thumbnail: "/anda1/4.png",
      src: "/anda1/4.mp4",
      alt: "Birthday Video 4",
      filename: "birthday-video-4.mp4",
      duration: "2:17",
    },
    {
      id: 4,
      thumbnail: "/anda1/5.png",
      src: "/anda1/5.mp4",
      alt: "Birthday Video 5",
      filename: "birthday-video-5.mp4",
      duration: "1:44",
    },
    {
      id: 5,
      thumbnail: "/anda1/6.png",
      src: "/anda1/6.mp4",
      alt: "Birthday Video 611",
      filename: "birthday-video-6.mp4",
      duration: "2:09",
    },
    {
      id: 6,
      thumbnail: "/anda1/7.png",
      src: "/anda1/7.mp4",
      alt: "Birthday Video 7",
      filename: "birthday-video-7.mp4",
      duration: "1:36",
    },
    {
      id: 7,
      thumbnail: "/anda1/8.png",
      src: "/anda1/8.mp4",
      alt: "Birthday Video 8",
      filename: "birthday-video-8.mp4",
      duration: "2:01",
    },
    {
      id: 8,
      thumbnail: "/anda1/9.png",
      src: "/anda1/9.mp4",
      alt: "Birthday Video 9",
      filename: "birthday-video-8.mp4",
      duration: "2:01",
    },
    {
      id: 9,
      thumbnail: "/anda1/10.png",
      src: "/anda1/10.mp4",
      alt: "Birthday Video 10",
      filename: "birthday-video-8.mp4",
      duration: "2:01",
    },
    {
      id: 10,
      thumbnail: "/anda1/11.png",
      src: "/anda1/11.mp4",
      alt: "Birthday Video 11",
      filename: "birthday-video-8.mp4",
      duration: "2:01",
    },
    {
      id: 11,
      thumbnail: "/anda1/12.png",
      src: "/anda1/12.mp4",
      alt: "Birthday Video 12",
      filename: "birthday-video-8.mp4",
      duration: "2:01",
    },
    {
      id: 12,
      thumbnail: "/anda1/13.png",
      src: "/anda1/13.mp4",
      alt: "Birthday Video 13",
      filename: "birthday-video-8.mp4",
      duration: "2:01",
    },
    {
      id: 13,
      thumbnail: "/anda1/14.png",
      src: "/anda1/14.mp4",
      alt: "Birthday Video 14",
      filename: "birthday-video-8.mp4",
      duration: "2:01",
    },
    {
      id: 14,
      thumbnail: "/anda1/15.png",
      src: "/anda1/15.mp4",
      alt: "Birthday Video 15",
      filename: "birthday-video-8.mp4",
      duration: "2:01",
    },
  ];

  useEffect(() => {
    // Reset visible items when changing tabs
    setVisibleItems([]);

    // Staggered animation for items appearing
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleItems((prev) => {
          const nextIndex = prev.length;
          const maxItems =
            activeTab === "images" ? images.length : videos.length;

          if (nextIndex >= maxItems) {
            clearInterval(interval);
            return prev;
          }
          return [...prev, nextIndex];
        });
      }, 100); // 100ms between each item appearing

      return () => clearInterval(interval);
    }, 300); // Initial delay

    return () => clearTimeout(timer);
  }, [activeTab, images.length, videos.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-purple-600 to-pink-500 p-4 md:p-8">
      {/* Header with back button */}
      <header className="mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-md transition-all hover:bg-white/30"
        >
          <ArrowLeft size={20} />
          <span>Back </span>
        </Link>
        <h1 className="text-center text-3xl font-bold text-white drop-shadow-lg md:text-4xl">
          🥳 🥳 🥳 🥳 Memories 🥳 🥳 🥳 🥳
        </h1>
        <div className="w-[100px]"></div> {/* Spacer for centering */}
      </header>

      {/* Gallery tabs */}
      <div className="mx-auto mb-8 flex max-w-md justify-center gap-4 rounded-full bg-white/10 p-1 backdrop-blur-md">
        <button
          className={`flex items-center gap-2 rounded-full px-6 py-2 transition-all ${
            activeTab === "images"
              ? "bg-white text-purple-700"
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setActiveTab("images")}
        >
          <ImageIcon size={18} />
          <span>Photos</span>
        </button>
        <button
          className={`flex items-center gap-2 rounded-full px-6 py-2 transition-all ${
            activeTab === "videos"
              ? "bg-white text-purple-700"
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setActiveTab("videos")}
        >
          <Film size={18} />
          <span>Videos</span>
        </button>
      </div>

      {/* Gallery grid */}
      <div className="mx-auto max-w-7xl">
        {activeTab === "images" && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`group relative aspect-square cursor-pointer overflow-hidden rounded-lg transition-all duration-500 ${
                  visibleItems.includes(index)
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
                </div>

                {/* 3D effect shadow */}
                <div className="absolute -bottom-1 left-1/2 h-2 w-[90%] -translate-x-1/2 rounded-full bg-black opacity-30 blur-md transition-all duration-500 group-hover:opacity-50"></div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`group relative aspect-video cursor-pointer overflow-hidden rounded-lg transition-all duration-500 ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  transform: `perspective(1000px) rotateY(${Math.random() * 5 - 2.5}deg) rotateX(${Math.random() * 5 - 2.5}deg)`,
                }}
                onClick={() => setSelectedVideo(video.id)}
              >
                {/* Video thumbnail */}
                <div className="relative h-full w-full overflow-hidden rounded-lg border-2 border-white/30 shadow-xl transition-all duration-500 group-hover:scale-105">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/30 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                      <div className="ml-1 h-0 w-0 border-y-8 border-y-transparent border-l-12 border-l-white"></div>
                    </div>
                  </div>

                  {/* Video duration */}
                  <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                    {video.duration}
                  </div>

                  {/* Overlay with info */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-center text-sm font-medium text-white">
                      Video #{video.id + 1}
                    </p>
                  </div>
                </div>

                {/* 3D effect shadow */}
                <div className="absolute -bottom-1 left-1/2 h-2 w-[90%] -translate-x-1/2 rounded-full bg-black opacity-30 blur-md transition-all duration-500 group-hover:opacity-50"></div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image Lightbox */}
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

            {/* Close button */}
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

      {/* Video Lightbox */}
      {selectedVideo !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-[80vw] max-w-4xl">
              <video
                src={videos[selectedVideo].src}
                controls
                autoPlay
                className="h-full w-full"
                poster={videos[selectedVideo].thumbnail}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Close button */}
            <button
              className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/40"
              onClick={() => setSelectedVideo(null)}
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
