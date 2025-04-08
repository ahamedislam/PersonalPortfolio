import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { WaveBackground } from "@/components/ui/wave-background";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex flex-col justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent_70%)]"></div>
      
      {/* Wave animation background */}
      <WaveBackground position="bottom" opacity={0.1} />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <motion.h1 
              className="text-2xl text-gray-400 font-medium mb-1"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              Hello, I'm
            </motion.h1>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-4 text-white"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              Md. Tareq <span className="text-primary">Ahamed</span> Jony
            </motion.h2>
            
            <motion.div
              className="mb-6"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.5}
            >
              <div className="bg-surface border border-gray-700 rounded-xl p-5 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-user-shield text-primary"></i>
                  </div>
                  <h3 className="text-lg font-medium">Security Researcher | Bug Bounty Hunter | CTF Enthusiast</h3>
                </div>
                <p className="text-gray-400 pl-2 border-l-2 border-primary/50">
                  I'm a dedicated cybersecurity professional specializing in penetration testing,
                  vulnerability assessment, and security research. With a passion for identifying and 
                  solving complex security challenges.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.7}
            >
              <a 
                href="#contact" 
                className="bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-6 rounded-md transition-all duration-300 shadow-lg shadow-primary/30"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="bg-surface hover:bg-gray-700 border border-gray-700 text-white font-medium py-2.5 px-6 rounded-md transition-all duration-300"
              >
                View Projects
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.9}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative bg-surface p-2 rounded-full border-4 border-background overflow-hidden shadow-xl">
                {/* Replace with Tareq's actual profile image or a cybersecurity themed image */}
                <svg
                  className="w-full h-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14.016q2.531 0 5.273 1.102t2.742 2.883v2.016h-16.031v-2.016q0-1.781 2.742-2.883t5.273-1.102zM12 12q-1.641 0-2.813-1.172t-1.172-2.813 1.172-2.836 2.813-1.195 2.813 1.195 1.172 2.836-1.172 2.813-2.813 1.172z" />
                </svg>
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
          <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
