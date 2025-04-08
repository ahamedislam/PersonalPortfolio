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
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-certificate text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{cert.title}</h3>
                    <p className="text-primary">{cert.issuer}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="bg-background/70 rounded-md px-3 py-1 text-sm text-gray-300">
                    {cert.date}
                  </div>
                  
                  {cert.credentialId && (
                    <div className="text-sm text-gray-400">
                      ID: {cert.credentialId}
                    </div>
                  )}
                </div>
                
                {cert.credentialURL && (
                  <div className="mt-4">
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