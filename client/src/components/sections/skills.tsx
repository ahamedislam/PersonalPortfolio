import { motion } from "framer-motion";
import { SkillBar } from "@/components/ui/skill-bar";
import { SectionHeading } from "@/components/ui/section-heading";
import { ToolsSlider } from "@/components/ui/tools-slider";
import { slideUp } from "@/lib/animations";
import { securitySkills, programmingSkills, tools, operatingSystems } from "@/data/resume";

export function SkillsSection() {
  // Icons for tools
  const toolIcons: Record<string, string> = {
    "Metasploit": "fa-solid fa-bug",
    "Nmap": "fa-solid fa-radar",
    "BurpSuite": "fa-solid fa-spider",
    "Rustscan": "fa-solid fa-bolt",
    "SQLmap": "fa-solid fa-database",
    "Nuclei": "fa-solid fa-atom",
    "Gobuster": "fa-solid fa-folder-open",
    "WireShark": "fa-solid fa-network-wired",
  };

  // Icons for operating systems
  const osIcons: Record<string, string> = {
    "Kali Linux": "fa-brands fa-linux",
    "Ubuntu": "fa-brands fa-ubuntu",
    "Parrot OS": "fa-brands fa-linux",
    "Windows": "fa-brands fa-windows",
  };

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="Technical" highlight="Skills" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Security Expertise */}
          <motion.div 
            className="bg-surface border border-gray-700 rounded-xl p-6 shadow-lg"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
          >
            <div className="bg-primary/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <i className="fa-solid fa-shield-halved text-primary text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Security Expertise</h3>
            
            <div className="space-y-4">
              {securitySkills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.level}
                  color="bg-primary"
                />
              ))}
            </div>
          </motion.div>
          
          {/* Programming Languages */}
          <motion.div 
            className="bg-surface border border-gray-700 rounded-xl p-6 shadow-lg"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
          >
            <div className="bg-green-500/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <i className="fa-solid fa-code text-green-500 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
            
            <div className="space-y-4">
              {programmingSkills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.level}
                  color="bg-green-500"
                />
              ))}
            </div>
          </motion.div>
          
          {/* Tools & Technologies */}
          <motion.div 
            className="bg-surface border border-gray-700 rounded-xl p-6 shadow-lg"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.5}
          >
            <div className="bg-yellow-500/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <i className="fa-solid fa-toolbox text-yellow-500 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Tools & Technologies</h3>
            
            <div className="space-y-5">
              <ToolsSlider tools={tools} title="Security Tools" icons={toolIcons} />
              <ToolsSlider tools={operatingSystems} title="Operating Systems" icons={osIcons} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
