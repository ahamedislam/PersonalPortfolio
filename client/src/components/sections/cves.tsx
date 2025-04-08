import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { slideUp } from "@/lib/animations";
import { cveItems } from "@/data/resume";
import { CVEItem } from "@shared/types";

export function CVEsSection() {
  return (
    <section id="cves" className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <SectionHeading title="CVE" highlight="Publications" />
        
        <div className="max-w-6xl mx-auto grid gap-6">
          {cveItems.map((cve: CVEItem, index: number) => (
            <motion.div 
              key={cve.id}
              className="bg-gradient-to-r from-background to-surface border border-gray-700 rounded-xl p-6 shadow-lg"
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1 * (index + 1)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-yellow-500/30 text-yellow-500 px-3 py-1 rounded-md font-mono text-sm">{cve.id}</div>
                    <div className="bg-primary/20 text-primary px-3 py-1 rounded-md font-mono text-sm">{cve.product}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cve.title}</h3>
                  <p className="text-gray-400">{cve.description}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <a 
                    href={cve.detailsLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-background hover:bg-background/80 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 text-center"
                  >
                    View Details
                  </a>
                  {cve.writeupLink && (
                    <a 
                      href={cve.writeupLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary/10 hover:bg-primary/20 text-primary font-medium py-2 px-4 rounded-md transition-all duration-300 text-center"
                    >
                      Read Write-up
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
