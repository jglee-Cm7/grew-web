import { ReactNode } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { FadeIn } from "@/components/ui";

interface PageHeaderProps {
  backgroundImage: StaticImageData | string;
  children: ReactNode;
  height?: string;
  overlayColor?: string;
  overlayOpacity?: number;
  textColor?: string;
  textPosition?: "center" | "left" | "right";
  textAlignment?: "center" | "left" | "right";
  priority?: boolean;
}

export function PageHeader({
  backgroundImage,
  children,
  height = "400px",
  overlayColor = "#000",
  overlayOpacity = 0.3,
  textColor = "#fff",
  textPosition = "center",
  textAlignment = "center",
  priority = true,
}: PageHeaderProps) {
  // Calculate text positioning
  const getTextPosition = () => {
    switch (textPosition) {
      case "left":
        return "justify-start";
      case "right":
        return "justify-end";
      default:
        return "justify-center";
    }
  };

  // Calculate text alignment
  const getTextAlignment = () => {
    switch (textAlignment) {
      case "left":
        return "text-left";
      case "right":
        return "text-right";
      default:
        return "text-center";
    }
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ height }}>
      {/* Background Image using Next.js Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Page header background"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority={priority}
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />

      {/* Content container */}
      <div
        className={`absolute inset-0 flex items-center ${getTextPosition()} px-4 sm:px-6 md:px-8 lg:px-12`}
      >
        <FadeIn direction="down">
          <div
            className={`relative z-10 w-full max-w-5xl ${getTextAlignment()} pt-30 text-3xl font-bold md:text-4xl lg:text-5xl`}
            style={{ color: textColor }}
          >
            {children}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
