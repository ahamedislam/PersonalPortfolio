import { motion } from "framer-motion";
import { slideUp, fadeIn } from "@/lib/animations";
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
    { name: "GitHub", icon: "fa-brands fa-github" },
    { name: "LinkedIn", icon: "fa-brands fa-linkedin" },
    { name: "Twitter", icon: "fa-brands fa-twitter" },
    { name: "HackerOne", icon: "fa-solid fa-bug" }
  ];

  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
      {/* Wave animation background */}
      <WaveBackground position="top" opacity={0.05} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="About" highlight="Me" />
          
          <div className="bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl mb-12">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-block p-1 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-full mb-6">
                <div className="w-24 h-24 rounded-full bg-surface flex items-center justify-center">
                  <i className="fa-solid fa-shield-halved text-primary text-4xl"></i>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Cybersecurity Professional</h3>
              <p className="text-gray-300 mb-5 leading-relaxed">
                Passionate Security Researcher, Bug Bounty Hunter, and CTF Enthusiast with real-world 
                experience in finding vulnerabilities across various companies and earning CVEs. I love 
                diving deep into cybersecurity challenges and also enjoy building secure backend systems 
                with PHP and Laravel.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently based in Dinajpur, Bangladesh, I'm actively hunting bugs on platforms like 
                HackerOne, finding vulnerabilities in companies like Meta, Yahoo, Mozilla, and more.
              </p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Left column */}
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3}
            >
              <div className="bg-card rounded-xl border border-border p-6 shadow-lg h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-id-card text-primary text-xl"></i>
                  </div>
                  <h3 className="text-lg font-medium">Personal Info</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm block">Email</span>
                      <span className="text-gray-200">hello@0xt4req.com</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-phone text-primary"></i>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm block">Phone</span>
                      <span className="text-gray-200">+8801521784179</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-location-dot text-primary"></i>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm block">Location</span>
                      <span className="text-gray-200">Dinajpur, Bangladesh</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Middle column */}
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.4}
            >
              <div className="bg-card rounded-xl border border-border p-6 shadow-lg h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-graduation-cap text-primary text-xl"></i>
                  </div>
                  <h3 className="text-lg font-medium">Education</h3>
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div className="relative pl-6 border-l-2 border-primary/30 py-1">
                    <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
                    <h4 className="text-gray-100 font-medium mb-1">Diploma In Computer Science & Technology</h4>
                    <p className="text-gray-400">Dinajpur Polytechinc Institute</p>
                    <p className="text-sm text-primary mt-2">Feb 2022 - Dec 2025</p>
                  </div>
                </div>
                  
                <div className="mt-5 pt-5 border-t border-gray-700">
                  <h4 className="text-lg font-medium mb-3 text-primary">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang, index) => (
                      <span key={index} className="bg-primary/10 text-gray-300 px-3 py-1 rounded-md text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right column */}
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.5}
            >
              <div className="bg-card rounded-xl border border-border p-6 shadow-lg h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-brain text-primary text-xl"></i>
                  </div>
                  <h3 className="text-lg font-medium">Skills & Connect</h3>
                </div>
                
                <div className="flex-1">
                  <h4 className="text-gray-300 font-medium mb-3">Soft Skills</h4>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {softSkills.map((skill, index) => (
                      <div key={index} className="bg-primary/5 border border-primary/10 rounded-md px-3 py-2 text-sm text-gray-300">
                        {skill}
                      </div>
                    ))}
                  </div>
                  
                  <h4 className="text-gray-300 font-medium mb-3">Social Profiles</h4>
                  <div className="flex flex-wrap gap-3">
                    {socials.map((social, index) => (
                      <a 
                        href="#" 
                        key={index} 
                        className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                      >
                        <i className={`${social.icon} text-primary`}></i>
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <a 
                    href="/resume.pdf" 
                    download
                    className="bg-primary/20 hover:bg-primary/30 text-primary w-full border border-primary/30 font-medium py-2.5 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    <i className="fa-solid fa-download"></i> Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
