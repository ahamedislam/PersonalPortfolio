import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
}

export function SkillBar({ 
  name, 
  percentage, 
  color = "bg-primary"
}: SkillBarProps) {
  return (
    <div className="skill-item mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-200">{name}</span>
        <span className={`text-xs text-primary`}>{percentage}%</span>
      </div>
      <div className="bg-gray-800 h-2 rounded-full overflow-hidden">
        <motion.div 
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}
