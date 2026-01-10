"use client";
import React, { useState, useEffect, useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: "slow" | "medium" | "fast";
  delay?: "none" | "short" | "medium" | "long";
  className?: string;
  threshold?: number; // How much of the element needs to be visible
  rootMargin?: string; // Margin around the root
  reverseOnExit?: boolean; // Whether to reverse animation on exit
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = "up",
  duration = "medium",
  delay = "none",
  className = "",
  threshold = 0.3, // Trigger when 30% is visible
  rootMargin = "0px 0px -50px 0px", // Trigger earlier (before fully in view)
  reverseOnExit = true, // Keep default as true since you want to keep it
}) => {
  const directionClasses = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    none: "translate-y-0",
  };

  const durationClasses = {
    slow: "duration-1000",
    medium: "duration-700",
    fast: "duration-500",
  };

  const delayClasses = {
    none: "delay-0",
    short: "delay-100",
    medium: "delay-300",
    long: "delay-500",
  };

  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = wrapperRef.current;

    // Only run if browser supports IntersectionObserver
    if (!currentRef || typeof IntersectionObserver !== "function") {
      setTimeout(() => {
        setIsVisible(true);
      }, 0); // Fallback for older browsers
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If element is entering viewport, always set to visible
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
        // If element is exiting viewport and reverseOnExit is true, set to not visible
        else if (reverseOnExit) {
          setIsVisible(false);
        }
        // Otherwise keep it visible even when it exits viewport
      },
      {
        root: null, // Use viewport as root
        rootMargin,
        threshold,
      },
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [rootMargin, threshold, reverseOnExit]);

  return (
    // Wrapper div that doesn't move - used only for intersection detection
    <div ref={wrapperRef} className={className}>
      {/* Inner div that handles the animation */}
      <div
        className={`transform transition ${durationClasses[duration]} ${delayClasses[delay]} ease-out ${
          isVisible
            ? "translate-x-0 translate-y-0 opacity-100"
            : `opacity-0 ${directionClasses[direction]}`
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default FadeIn;
