import React from 'react';
import { cn } from './utils';

interface LegoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'yellow' | 'red' | 'blue' | 'green' | 'white';
  studs?: number; // Number of studs on top
  title?: string;
}

const colorMap = {
  yellow: 'bg-yellow-400',
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  white: 'bg-white',
};

export const LegoCard = ({ 
  className, 
  children, 
  color = 'white', 
  studs = 4,
  title,
  ...props 
}: LegoCardProps) => {
  return (
    <div className={cn("relative mt-4 group", className)} {...props}>
      {/* Studs */}
      <div className="absolute -top-3 left-0 flex gap-4 px-4">
        {Array.from({ length: studs }).map((_, i) => (
          <div 
            key={i} 
            className={cn(
              "w-8 h-4 border-x-2 border-t-2 border-black rounded-t-sm", 
              colorMap[color]
            )} 
          />
        ))}
      </div>

      {/* Card Body */}
      <div className={cn(
        "border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200",
        "group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]",
        colorMap[color]
      )}>
        {title && (
          <div className="border-b-4 border-black pb-2 mb-4 font-black text-xl uppercase tracking-tighter">
            {title}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
