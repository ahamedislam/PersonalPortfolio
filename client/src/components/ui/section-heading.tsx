import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  highlight?: string;
  className?: string;
}

export function SectionHeading({ 
  title, 
  highlight, 
  className = "" 
}: SectionHeadingProps) {
  return (
    <motion.div 
      className={`mb-10 text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-mono font-bold mb-2">
        {title} {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
      <div className="h-1 w-20 bg-primary mx-auto"></div>
    </motion.div>
  );
}
