import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { WaveBackground } from "@/components/ui/wave-background";
import { slideUp } from "@/lib/animations";
import { workshopGallery } from "@/data/resume";

export function GallerySection() {

  // State for currently enlarged image
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <WaveBackground position="top" opacity={0.03} color="#1e40af" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Workshop" highlight="Gallery" />
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            I conduct cybersecurity workshops and training sessions to share knowledge 
            and empower others in the field of security research and ethical hacking.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshopGallery.map((item, index) => (
              <motion.div
                key={item.id}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.1 * (index + 1)}
                className="relative overflow-hidden group rounded-xl"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl border border-gray-800 shadow-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <h3 className="text-white font-medium text-lg">{item.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-300 mt-1">
                      <i className="fa-regular fa-calendar text-primary"></i>
                      <span>{item.date}</span>
                      
                      {item.location && (
                        <>
                          <span className="mx-1">•</span>
                          <i className="fa-solid fa-location-dot text-primary"></i>
                          <span>{item.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 font-medium py-2.5 px-6 rounded-md transition-all duration-300"
            >
              <i className="fa-solid fa-calendar-days"></i>
              Request a Workshop
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}