import React, { useRef, useEffect } from "react";
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
    <div className="flex flex-col items-center gap-2 py-2 px-1">
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
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Auto scroll animation
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    let animationId: number;
    let startTime: number;
    const duration = 20000; // ms for a complete cycle
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Calculate position based on time
      const progress = (elapsed % duration) / duration;
      const totalWidth = slider.scrollWidth - slider.clientWidth;
      const position = totalWidth * progress;
      
      slider.scrollLeft = position;
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [tools]);
  
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
        className="flex overflow-x-auto scrollbar-hide pb-1 pt-1" 
        ref={sliderRef}
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="flex space-x-2 pr-4">
          {tools.map((tool, index) => (
            <ToolIcon key={index} name={tool} icon={icons[tool]} />
          ))}
          
          {/* Duplicate items to create seamless loop effect */}
          {tools.slice(0, 4).map((tool, index) => (
            <ToolIcon key={`dup-${index}`} name={tool} icon={icons[tool]} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Add custom styles for hiding scrollbar
const style = document.createElement('style');
style.textContent = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.appendChild(style);