import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "green";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  fullWidth = false,
}: ButtonProps) {
  // Base styles
  const baseStyles = "rounded-full font-medium transition-colors cursor-pointer";
  
  // Size variations
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };
  
  // Variant styles
  const variantStyles = {
    primary: "bg-white text-gray-800 border border-white hover:bg-white/90",
    secondary: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100",
    outline: "bg-transparent text-white border border-white hover:bg-white/10",
    green: "bg-white text-[#058631] flex items-center justify-center transition-colors hover:bg-white/90 "
  };
  
  // Combined styles
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;
  
  // Render as Link if href is provided
  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }
  
  // Otherwise render as button
  return (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
}