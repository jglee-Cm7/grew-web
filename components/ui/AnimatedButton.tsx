// components/ui/AnimatedButton.tsx
import React from 'react';
import Link from 'next/link';

interface AnimatedButtonProps {
  href?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  href, 
  className = '', 
  onClick, 
  children 
}) => {
  const buttonClasses = `
    relative 
    overflow-hidden
    inline-flex 
    items-center 
    justify-center 
    px-8 
    py-4 
    rounded-full 
    border-2 
    border-[#27AF58] 
    text-[#27AF58] 
    font-medium
    transition-colors 
    duration-300
    ease-in-out
    hover:text-white
    group
    cursor-pointer
    ${className}
  `;

  // Content to render inside the button
  const content = (
    <>
      {/* This is the green fill that slides in from left */}
      <span 
        className="absolute top-0 bottom-0 left-0 -z-10 w-0 bg-[#27AF58] transition-all duration-300 ease-in-out group-hover:w-full"
        aria-hidden="true"
      />
      {children}
    </>
  );

  // Return Link if href is provided, otherwise return button
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {content}
    </button>
  );
};

export default AnimatedButton;