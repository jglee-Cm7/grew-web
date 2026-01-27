"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FadeIn } from "@/lib/motion";

export function HeroSection() {
  // Define the video path constant here - no import needed
  const videoPath = "/mainpage/brand-film.webm";
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0; // Start from beginning
      videoRef.current.play();
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", handleVideoEnded);
      return () => {
        video.removeEventListener("ended", handleVideoEnded);
      };
    }
  }, []);

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center">
      {/* Video Background/Container */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster="/church-poster.webp"
          onEnded={handleVideoEnded}
          playsInline
          muted={!isPlaying} /* Muted when not actively playing */
          loop={false}
          controls={false} /* Only show controls when actively playing */
          style={{
            opacity: isPlaying ? 1 : 0.7,
          }} /* Dim the thumbnail when not playing */
        >
          {/* Use the videoPath constant */}
          <source src={videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional overlay to darken the thumbnail */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${isPlaying ? "opacity-0" : "opacity-40"}`}
        ></div>
      </div>

      {/* Content Container */}
      <div
        className={`z-20 flex flex-col items-center justify-center transition-opacity duration-500 ${isPlaying ? "pointer-events-none opacity-0" : "opacity-100"}`}
      >
        {/* Play Button */}
        <FadeIn>
          {/* Desktop: Video Play Button */}
          <div
            className="mb-6 hidden h-16 w-16 transform cursor-pointer items-center justify-center rounded-full border-2 border-white bg-white transition-transform duration-300 hover:scale-110 lg:flex"
            onClick={handlePlayClick}
          >
            <svg className="h-8 w-8 text-white" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          {/* Mobile: YouTube Link Button */}
          <a
            href="https://www.youtube.com/watch?v=HYDR6OVdzZw"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 flex h-16 w-16 transform cursor-pointer items-center justify-center rounded-full border-2 border-white bg-white transition-transform duration-300 hover:scale-110 active:scale-95 lg:hidden"
          >
            <svg className="h-8 w-8 text-white" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>
        </FadeIn>
        <FadeIn>
          <div className="mb-8 text-sm text-white">영상보기</div>
        </FadeIn>

        {/* Logo */}
        <FadeIn>
          <div>
            <Image
              src={"/logo/logo-white-all.svg"}
              alt="그루 로고"
              width={350}
              height={120}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
