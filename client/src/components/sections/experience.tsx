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
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-primary/30 transform md:translate-x-0"></div>
            
            {/* Timeline Items */}
            {experienceItems.map((item: ExperienceItem, index: number) => (
              <motion.div 
                key={item.id}
                className={`relative flex flex-col md:flex-row items-start mb-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.2 * (index + 1)}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 mb-4 md:mb-0 md:flex md:justify-end' : 'md:pl-8 md:text-right order-2 md:order-1'}`}>
                  {index % 2 === 1 && (
                    <div className="absolute left-0 md:right-0 top-6 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30 transform -translate-x-1/2 md:translate-x-1/2 z-10"></div>
                  )}
                  
                  {index % 2 === 0 && (
                    <div className="bg-surface border border-gray-700 rounded-lg p-5 shadow-lg md:ml-auto w-full md:w-auto">
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-primary font-medium mb-2">{item.company} | {item.location}</p>
                      <p className="text-sm text-gray-400 mb-3">{item.date}</p>
                      <p className="text-gray-300">{item.description}</p>
                      
                      {item.bullets && (
                        <ul className="list-disc list-inside text-gray-300 space-y-1 mt-2">
                          {item.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                      
                      {item.link && (
                        <div className="mt-3">
                          <a 
                            href={item.link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-1"
                          >
                            <span>{item.link.text}</span>
                            <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8 md:relative' : 'md:pr-8 order-1 md:order-2 mb-4 md:mb-0'}`}>
                  {index % 2 === 0 && (
                    <div className="absolute left-0 md:left-0 top-6 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30 transform -translate-x-1/2 z-10"></div>
                  )}
                  
                  {index % 2 === 1 && (
                    <div className="bg-surface border border-gray-700 rounded-lg p-5 shadow-lg w-full">
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-primary font-medium mb-2">{item.company} | {item.location}</p>
                      <p className="text-sm text-gray-400 mb-3">{item.date}</p>
                      <p className="text-gray-300 mb-2">{item.description}</p>
                      
                      {item.bullets && (
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {item.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                      
                      {item.link && (
                        <div className="mt-3">
                          <a 
                            href={item.link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-1"
                          >
                            <span>{item.link.text}</span>
                            <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
