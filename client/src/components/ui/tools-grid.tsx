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
    <div className="flex items-center gap-3 group border border-primary/10 rounded-md p-2 bg-primary/5 hover:bg-primary/10 transition-colors">
      <div className="w-9 h-9 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0 shadow-sm relative overflow-hidden">
        {icon ? (
          <i className={`${icon} text-primary text-sm transition-all duration-300 group-hover:scale-110`}></i>
        ) : (
          <span className="text-primary text-xs font-bold transition-all duration-300 group-hover:scale-110">{acronym}</span>
        )}
        {/* Animated highlight effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </div>
      <span className="text-gray-300 text-sm">{name}</span>
    </div>
  );
}

interface ToolsGridProps {
  tools: string[];
  title: string;
  icons?: Record<string, string>;
}

export function ToolsGrid({ tools, title, icons = {} }: ToolsGridProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0.3}
      className="mb-6"
    >
      <h4 className="text-lg font-medium text-primary mb-3">{title}</h4>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {tools.map((tool, index) => (
          <ToolIcon key={index} name={tool} icon={icons[tool]} />
        ))}
      </div>
    </motion.div>
  );
}