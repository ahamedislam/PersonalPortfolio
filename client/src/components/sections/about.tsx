import { motion } from "framer-motion";
import { Terminal } from "@/components/ui/terminal";
import { slideUp } from "@/lib/animations";
import { SectionHeading } from "../ui/section-heading";

export function AboutSection() {
  const terminalCommands = [
    {
      command: "cat certifications.txt",
      output: [
        "- Certified AppSec Practitioner (CAP)",
        "- Certified AppSec Pentester (CAPen)",
        "- Certified API Security Analyst (CASA)",
        "- Certified Cyber Security Analyst (C3SA)",
        "- Jr Penetration Tester"
      ]
    },
    {
      command: "cat languages.txt",
      output: [
        "- Bangla (Native)",
        "- English (Fluent)",
        "- Hindi (Intermediate)"
      ]
    },
    {
      command: "cat soft_skills.txt",
      output: [
        "- Project Management",
        "- Leadership",
        "- Communication",
        "- Team Collaboration",
        "- Time Management"
      ]
    },
    {
      command: "ls -la socials/",
      output: [
        "- GitHub",
        "- LinkedIn",
        "- Twitter",
        "- HackerOne"
      ]
    }
  ];

  return (
    <section id="about" className="py-16 bg-surface">
      <div className="container mx-auto px-4">
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
            >
              <Terminal
                title="profile.sh"
                commands={terminalCommands}
                className="shadow-lg"
              />
              
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
