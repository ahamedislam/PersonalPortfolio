import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { slideUp } from "@/lib/animations";
import { experienceItems } from "@/data/resume";
import { ExperienceItem } from "@shared/types";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <SectionHeading title="Work" highlight="Experience" />
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experienceItems.map((item: ExperienceItem, index: number) => (
              <motion.div 
                key={item.id}
                className="bg-background border border-gray-700 rounded-xl p-6 shadow-lg"
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.2 * (index + 1)}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Company Logo or Icon */}
                  <div className="bg-primary/20 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-briefcase text-primary text-2xl"></i>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-primary font-medium">{item.company} | {item.location}</p>
                      </div>
                      <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm whitespace-nowrap">
                        {item.date}
                      </div>
                    </div>
                    
                    {item.description && (
                      <p className="text-gray-300 mb-4">{item.description}</p>
                    )}
                    
                    {item.bullets && (
                      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                        {item.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="pl-2">
                            <span className="text-gray-200">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {item.link && (
                      <div>
                        <a 
                          href={item.link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                          <span>{item.link.text}</span>
                          <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
