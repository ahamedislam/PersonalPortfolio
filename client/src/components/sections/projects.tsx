import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { slideUp } from "@/lib/animations";
import { projects } from "@/data/resume";
import { ProjectItem } from "@shared/types";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="Featured" highlight="Projects" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: ProjectItem, index: number) => (
            <motion.div 
              key={project.id}
              className="project-card bg-surface border border-gray-700 rounded-xl overflow-hidden shadow-lg"
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1 * (index + 1)}
            >
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                {/* Generic SVG representing project type instead of a placeholder image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
                  <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs bg-primary/20 text-primary px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-1"
                    >
                      <span>View Project</span>
                      <i className="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                  )}
                  
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-300 text-sm font-medium inline-flex items-center gap-1"
                    >
                      <i className="fa-brands fa-github"></i>
                      <span>Github</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-10"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.5}
        >
          <a 
            href="https://github.com/0xt4req"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-gray-700 border border-gray-700 text-gray-200 font-medium py-2.5 px-6 rounded-md transition-all duration-300"
          >
            <span>View All Projects</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
