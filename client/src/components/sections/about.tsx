import { motion } from "framer-motion";
import { slideUp } from "@/lib/animations";
import { SectionHeading } from "../ui/section-heading";
import { WaveBackground } from "@/components/ui/wave-background";

export function AboutSection() {
  const languages = [
    "Bangla (Native)",
    "English (Fluent)",
    "Hindi (Intermediate)"
  ];
  
  const softSkills = [
    "Project Management",
    "Leadership",
    "Communication",
    "Team Collaboration",
    "Time Management"
  ];
  
  const socials = [
    "GitHub",
    "LinkedIn",
    "Twitter",
    "HackerOne"
  ];

  return (
    <section id="about" className="py-16 bg-surface relative overflow-hidden">
      {/* Wave animation background */}
      <WaveBackground position="top" opacity={0.05} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="About" highlight="Me" />
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              <p className="mb-4 text-gray-300">
                Passionate Security Researcher, Bug Bounty Hunter, and CTF Enthusiast with real-world 
                experience in finding vulnerabilities across various companies and earning CVEs. I love 
                diving deep into cybersecurity challenges and also enjoy building secure backend systems 
                with PHP and Laravel.
              </p>
              <p className="mb-6 text-gray-300">
                Currently based in Dinajpur, Bangladesh, I'm actively hunting bugs on platforms like 
                HackerOne, finding vulnerabilities in companies like Meta, Yahoo, Mozilla, and more.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-primary">Contact Info</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-envelope text-gray-400"></i>
                      <span>hello@0xt4req.com</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-phone text-gray-400"></i>
                      <span>+8801521784179</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-location-dot text-gray-400"></i>
                      <span>Dinajpur, Bangladesh</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3 text-primary">Education</h3>
                  <div className="space-y-2">
                    <p className="text-gray-300">Diploma In Computer Science & Technology</p>
                    <p className="text-sm text-gray-400">Dinajpur Polytechinc Institute</p>
                    <p className="text-sm text-gray-400">Feb 2022 - Dec 2025</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.4}
              className="space-y-4"
            >
              {/* Profile cards to replace terminal */}
              <div className="bg-card rounded-lg border border-border p-5 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-language text-primary"></i>
                  </div>
                  <h3 className="text-lg font-medium">Languages</h3>
                </div>
                
                <ul className="pl-2 border-l-2 border-primary/30 space-y-1">
                  {languages.map((lang, index) => (
                    <li key={index} className="text-gray-300">{lang}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-5 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-brain text-primary"></i>
                  </div>
                  <h3 className="text-lg font-medium">Soft Skills</h3>
                </div>
                
                <ul className="grid grid-cols-2 gap-y-1 pl-2 border-l-2 border-primary/30">
                  {softSkills.map((skill, index) => (
                    <li key={index} className="text-gray-300">{skill}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-5 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-share-nodes text-primary"></i>
                  </div>
                  <h3 className="text-lg font-medium">Socials</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {socials.map((social, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-md text-sm">
                      {social}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex justify-center">
                <a 
                  href="/resume.pdf" 
                  download
                  className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 font-medium py-2.5 px-6 rounded-md transition-all duration-300 inline-flex items-center gap-2"
                >
                  <i className="fa-solid fa-download"></i> Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
