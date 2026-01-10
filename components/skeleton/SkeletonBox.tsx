import React from "react";

interface SkeletonBoxProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  variant?: "rectangular" | "circular" | "text";
  lines?: number;
  lineHeight?: string | number;
  animated?: boolean;
  rounded?: boolean;
}

const SkeletonBox: React.FC<SkeletonBoxProps> = ({
  width = "100%",
  height = "20px",
  className = "",
  variant = "rectangular",
  lines = 1,
  lineHeight = "20px",
  animated = true,
  rounded = true,
}) => {
  // 기본 스켈레톤 스타일
  const baseStyles = `
    !bg-gray-100 dark:!bg-gray-300
    ${animated ? "animate-pulse" : ""}
    ${rounded ? "rounded" : ""}
    shadow-sm
  `;

  // 텍스트 라인 스켈레톤
  if (variant === "text" && lines > 1) {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseStyles} ${className}`}
            style={{
              width: index === lines - 1 ? "60%" : width,
              height: lineHeight,
              minHeight: lineHeight,
            }}
          />
        ))}
      </div>
    );
  }

  // 단일 요소 스켈레톤
  const skeletonStyles = `
    ${baseStyles}
    ${variant === "circular" ? "rounded-full" : ""}
    ${className}
  `;

  return (
    <div
      className={skeletonStyles}
      style={{
        width,
        height,
      }}
    />
  );
};

export default SkeletonBox;
