import { motion } from "framer-motion";
import { fadeIn, slideInFromLeft, slideInFromRight } from "@/lib/animations";
import { WaveBackground } from "@/components/ui/wave-background";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex flex-col justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),transparent_70%)]"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      
      {/* Wave animation background */}
      <WaveBackground position="bottom" opacity={0.15} />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left column - Text content */}
          <motion.div 
            className="lg:w-3/5"
            variants={slideInFromLeft}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            {/* Greeting tag */}
            <div className="inline-block mb-4">
              <Badge className="px-4 py-1.5 text-base bg-primary/10 text-primary border border-primary/30 rounded-full">
                Cybersecurity Professional
              </Badge>
            </div>
            
            {/* Name heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Md. Tareq <span className="text-primary">Ahamed</span> Jony
            </h1>
            
            {/* Bio card */}
            <div className="bg-surface/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl mb-8 max-w-2xl">
              <div className="flex items-start gap-4 mb-3">
                <div className="bg-primary/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fa-solid fa-shield-halved text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Security Researcher | Bug Bounty Hunter | CTF Enthusiast</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I'm a dedicated cybersecurity professional specializing in penetration testing,
                    vulnerability assessment, and security research. With a passion for identifying and 
                    solving complex security challenges.
                  </p>
                </div>
              </div>
              
              {/* Stats indicators */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-5 border-t border-gray-700/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-gray-400">CVEs Reported</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-400">Security Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">8+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 flex items-center gap-2"
              >
                <i className="fa-solid fa-envelope"></i>
                <span>Contact Me</span>
              </a>
              <a 
                href="#projects" 
                className="bg-surface/80 backdrop-blur-sm hover:bg-surface border border-gray-700/50 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 flex items-center gap-2"
              >
                <i className="fa-solid fa-folder-open"></i>
                <span>View Projects</span>
              </a>
            </div>
          </motion.div>
          
          {/* Right column - Profile image */}
          <motion.div 
            className="lg:w-2/5 flex justify-center"
            variants={slideInFromRight}
            initial="hidden"
            animate="visible"
            custom={0.5}
          >
            <div className="relative">
              {/* Decorative security-themed graphics */}
              <div className="absolute -top-10 -left-10 w-20 h-20 border-4 border-primary/30 rounded-xl rotate-12 opacity-70"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 border-4 border-primary/30 rounded-full opacity-70"></div>
              
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative bg-surface/90 backdrop-blur-sm p-3 rounded-2xl border-2 border-gray-700/50 overflow-hidden shadow-2xl">
                <div className="bg-gray-800 rounded-xl overflow-hidden w-72 h-72 md:w-80 md:h-80 relative">
                  {/* Profile silhouette - Replace with actual image if available */}
                  <svg
                    className="w-full h-full text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 14.016q2.531 0 5.273 1.102t2.742 2.883v2.016h-16.031v-2.016q0-1.781 2.742-2.883t5.273-1.102zM12 12q-1.641 0-2.813-1.172t-1.172-2.813 1.172-2.836 2.813-1.195 2.813 1.195 1.172 2.836-1.172 2.813-2.813 1.172z" />
                  </svg>
                  
                  {/* Security pattern overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.3)_100%)]"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-primary transition-colors">
            <span className="text-sm font-medium mb-1">Explore More</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
