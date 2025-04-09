import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface ToolIconProps {
  name: string;
  icon?: string;
}

function ToolIcon({ name, icon }: ToolIconProps) {
  // Get first letter of each word for the acronym
  const acronym = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex flex-col items-center gap-2 px-1 py-2 min-w-[80px]">
      <div className="w-12 h-12 bg-background/50 rounded-lg flex items-center justify-center border border-primary/20 shadow-md relative overflow-hidden group transition-all duration-300 hover:bg-background">
        {icon ? (
          <i className={`${icon} text-primary text-xl transition-all duration-300 group-hover:scale-110`}></i>
        ) : (
          <span className="text-primary text-sm font-bold transition-all duration-300 group-hover:scale-110">{acronym}</span>
        )}
        {/* Animated highlight effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
      </div>
      <span className="text-xs text-gray-400 text-center">{name}</span>
    </div>
  );
}

interface ToolsSliderProps {
  tools: string[];
  title: string;
  icons?: Record<string, string>;
}

export function ToolsSlider({ tools, title, icons = {} }: ToolsSliderProps) {
  const [position, setPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let animationId: number;
    const duration = 8000; // Time in ms for a complete cycle
    let startTime: number | null = null;
    
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsedTime = time - startTime;
      
      if (containerRef.current) {
        // Get total width of elements (including duplicates for infinite scroll)
        const totalWidth = tools.length * 90; // Approximate width per item
        
        // Calculate position as a percentage of the total width
        const newPosition = (elapsedTime % duration) / duration * totalWidth;
        setPosition(newPosition);
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [tools.length]);
  
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0.3}
      className="mb-4"
    >
      <h4 className="text-lg font-medium mb-3">{title}</h4>
      
      <div 
        className="overflow-hidden relative rounded-lg bg-surface/30 border border-surface p-1"
        ref={containerRef}
        style={{ height: '80px' }}
      >
        <div 
          className="flex absolute"
          style={{ 
            transform: `translateX(-${position}px)`,
            transition: 'transform 0.1s linear'
          }}
        >
          {/* Render tools twice to create illusion of infinite scroll */}
          {[...tools, ...tools].map((tool, index) => (
            <ToolIcon key={index} name={tool} icon={icons[tool]} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}