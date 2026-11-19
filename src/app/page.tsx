import React from 'react';

export default function Card({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-surface rounded-pet shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100 ${className}`}>
      {children}
    </div>
  );
}