import React from 'react';
import Link from 'next/link';

interface GreenButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const GreenButton: React.FC<GreenButtonProps> = ({ href, children, className = '' }) => {
  return (
    <Link 
      href={href} 
      className={`inline-block rounded-full bg-green-500 px-4 py-2 text-center text-white transition-colors hover:bg-green-600 ${className}`}
    >
      {children}
    </Link>
  );
};

export default GreenButton;