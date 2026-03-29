import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export default function BrandLogo({ className = '', size = 32 }: BrandLogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="barGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>
      
      {/* Three Rising Bars with Wavy Bottoms */}
      <path 
        d="M20 75 C 20 78, 25 78, 25 75 L 25 60 C 25 58, 20 58, 20 60 Z" 
        fill="url(#barGradient)" 
      />
      <path 
        d="M35 75 C 35 78, 40 78, 40 75 L 40 50 C 40 48, 35 48, 35 50 Z" 
        fill="url(#barGradient)" 
      />
      <path 
        d="M50 75 C 50 78, 55 78, 55 75 L 55 40 C 55 38, 50 38, 50 40 Z" 
        fill="url(#barGradient)" 
      />

      {/* Simplified Leaves on top */}
      <path 
        d="M52.5 38 C 52.5 30, 45 30, 45 38 C 45 34, 52.5 30, 52.5 38 Z" 
        fill="url(#leafGradient)" 
      />
      <path 
        d="M52.5 38 C 52.5 30, 60 30, 60 38 C 60 34, 52.5 30, 52.5 38 Z" 
        fill="url(#leafGradient)" 
      />
    </svg>
  );
}
