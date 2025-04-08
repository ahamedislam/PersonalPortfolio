import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { slideUp } from "@/lib/animations";
import { certifications } from "@/data/resume";
import { CertificationItem } from "@shared/types";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="Professional" highlight="Certifications" />
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert: CertificationItem, index: number) => (
            <motion.div 
              key={cert.id}
              className="bg-surface border border-gray-700 rounded-xl overflow-hidden shadow-lg"
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2 * (index + 1)}
            >
              <div className="p-5">
                <div className="flex flex-col mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-certificate text-primary"></i>
                    </div>
                    <h3 className="text-lg font-bold line-clamp-1">{cert.title}</h3>
                  </div>
                  <p className="text-primary text-sm mb-2">{cert.issuer}</p>
                </div>
                
                <div className="flex justify-between items-center mb-3">
                  <div className="bg-background/70 rounded-md px-3 py-1 text-sm text-gray-300">
                    {cert.date}
                  </div>
                  
                  {cert.credentialId && (
                    <div className="text-xs text-gray-400">
                      ID: {cert.credentialId}
                    </div>
                  )}
                </div>
                
                {cert.credentialURL && (
                  <div className="mt-2">
                    <a 
                      href={cert.credentialURL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 inline-flex items-center gap-1 text-sm font-medium"
                    >
                      <span>Verify Certificate</span>
                      <i className="fa-solid fa-external-link text-xs"></i>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}