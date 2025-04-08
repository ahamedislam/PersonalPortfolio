import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { slideUp } from "@/lib/animations";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent_70%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Get In" highlight="Touch" />
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            <div className="bg-surface border border-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-center">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="bg-background/50 rounded-lg p-4 flex items-start gap-4">
                  <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-user text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Name</h4>
                    <p className="text-gray-400">Md. Tareq Ahamed Jony</p>
                  </div>
                </div>
                
                <div className="bg-background/50 rounded-lg p-4 flex items-start gap-4">
                  <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Email</h4>
                    <p className="text-gray-400">hello@0xt4req.com</p>
                  </div>
                </div>
                
                <div className="bg-background/50 rounded-lg p-4 flex items-start gap-4">
                  <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-phone text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Phone</h4>
                    <p className="text-gray-400">+8801521784179</p>
                  </div>
                </div>
                
                <div className="bg-background/50 rounded-lg p-4 flex items-start gap-4">
                  <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-location-dot text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Location</h4>
                    <p className="text-gray-400">Dinajpur, Bangladesh</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium text-gray-200 mb-3 text-center">Social Media</h4>
                  <div className="flex gap-3 justify-center">
                    <a href="https://github.com/0xt4req" target="_blank" rel="noopener noreferrer" 
                      className="bg-background hover:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                      <i className="fa-brands fa-github text-gray-300"></i>
                    </a>
                    <a href="https://linkedin.com/in/0xt4req" target="_blank" rel="noopener noreferrer" 
                      className="bg-background hover:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                      <i className="fa-brands fa-linkedin text-gray-300"></i>
                    </a>
                    <a href="https://twitter.com/0xt4req" target="_blank" rel="noopener noreferrer" 
                      className="bg-background hover:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                      <i className="fa-brands fa-twitter text-gray-300"></i>
                    </a>
                    <a href="https://hackerone.com/0xt4req" target="_blank" rel="noopener noreferrer" 
                      className="bg-background hover:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                      <i className="fa-solid fa-bug text-gray-300"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
