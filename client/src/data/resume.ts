import { SkillItem, ProjectItem, ExperienceItem, CVEItem, SocialLink, CertificationItem } from "@shared/types";

export const securitySkills: SkillItem[] = [
  { name: "Network Reconnaissance", level: 90 },
  { name: "Vulnerability Identification", level: 95 },
  { name: "Exploitation", level: 85 },
  { name: "OWASP Top 10", level: 90 },
  { name: "API Penetration Testing", level: 90 }
];

export const programmingSkills: SkillItem[] = [
  { name: "Python", level: 85 },
  { name: "PHP", level: 90 },
  { name: "MySQL", level: 85 },
  { name: "Bash", level: 80 },
  { name: "Laravel", level: 90 }
];

export const tools: string[] = [
  "Metasploit", "Nmap", "BurpSuite", "Rustscan",
  "SQLmap", "Nuclei", "Gobuster", "WireShark"
];

export const operatingSystems: string[] = [
  "Kali Linux", "Ubuntu", "Parrot OS", "Windows"
];

export const certifications: CertificationItem[] = [
  {
    id: 1,
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "Oct 2023",
    credentialId: "ECC12345678",
    credentialURL: "https://aspen.eccouncil.org/verify"
  },
  {
    id: 2,
    title: "CompTIA Security+",
    issuer: "CompTIA",
    date: "Aug 2023",
    credentialId: "COMP9876543",
    credentialURL: "https://www.credly.com/badges/example"
  },
  {
    id: 3,
    title: "Cyber Security & Ethical Hacking",
    issuer: "TechnoHacks EduTech",
    date: "Oct 2023",
    credentialId: "TH-CERT-1234",
    credentialURL: "https://technohacks.co.in/certificate-verification"
  },
  {
    id: 4,
    title: "Advanced Web Application Penetration Testing",
    issuer: "Offensive Security",
    date: "Dec 2023",
    credentialId: "OS-WEB-1234",
    credentialURL: "https://www.offensive-security.com/verify"
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    id: 1,
    title: "Bug Bounty Hunter",
    company: "HackerOne",
    location: "San Francisco",
    date: "Mar 2023 - Present",
    description: "A platform where the security researchers hack & secure worldwide companies. I've found bugs in some famous companies like Meta (Facebook), Yahoo, Mozilla Corp, NextCloud, Acronis, Apache Airflow, Internet Bug Bounty and more.",
    link: {
      url: "https://hackerone.com/0xt4req",
      text: "HackerOne Profile"
    }
  },
  {
    id: 2,
    title: "ANZ Australia Cyber Security Management Job Simulation",
    company: "ANZ Bank Melbourne",
    location: "Victoria",
    date: "Sep 2023",
    description: "Completed a simulation focused on identifying cybersecurity threats at ANZ.",
    bullets: [
      "Investigated e-mails to report suspicious items.",
      "Analyzed a Packet Capture file using an open source tool to identify and investigate potential threats."
    ]
  },
  {
    id: 3,
    title: "Cyber Security & Ethical Hacking Intern",
    company: "TechnoHacks EduTech",
    location: "Nashik, Maharashtra",
    date: "Sep 2023 - Oct 2023",
    description: "",
    bullets: [
      "Coordinated project tasks, ensuring adherence to engineering standards and regulations.",
      "Conducted comprehensive project analyses, identifying and rectifying discrepancies in engineering designs."
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Bug Bounty Platform",
    description: "A complete bug bounty platform built with Laravel Framework with AI integration for vulnerability classification.",
    image: "/projects/bug-bounty-platform.png",
    tags: ["Laravel", "PHP", "MySQL", "AI"],
    demoLink: "#",
    githubLink: "https://github.com/0xt4req/bug-bounty-platform"
  },
  {
    id: 2,
    title: "CTF Platform",
    description: "A complete Capture The Flag platform for hosting cybersecurity competitions with various challenge types.",
    image: "/projects/ctf-platform.png",
    tags: ["Laravel", "Docker", "JavaScript", "MySQL"],
    demoLink: "#",
    githubLink: "https://github.com/0xt4req/ctf-platform"
  },
  {
    id: 3,
    title: "Vulnerability Scanner",
    description: "A web-based vulnerability scanner built with Laravel that can identify common web application security issues.",
    image: "/projects/vulnerability-scanner.png",
    tags: ["Laravel", "Python", "API", "Security"],
    demoLink: "#",
    githubLink: "https://github.com/0xt4req/vulnerability-scanner"
  },
  {
    id: 4,
    title: "Event Management System",
    description: "A web-based event management system that allows users to create, manage, and attend events.",
    image: "/projects/event-management.png",
    tags: ["PHP", "MySQL", "JavaScript", "Ajax"],
    demoLink: "#",
    githubLink: "https://github.com/0xt4req/event-management"
  },
  {
    id: 5,
    title: "Student Management System",
    description: "A comprehensive student management system for educational institutions.",
    image: "/projects/student-management.png",
    tags: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    demoLink: "#",
    githubLink: "https://github.com/0xt4req/student-management"
  },
  {
    id: 6,
    title: "Image Caption Generator",
    description: "An AI-powered image caption generator that also finds similar images.",
    image: "/projects/image-caption.png",
    tags: ["Python", "TensorFlow", "AI", "Computer Vision"],
    demoLink: "#",
    githubLink: "https://github.com/0xt4req/image-caption-generator"
  }
];

export const cveItems: CVEItem[] = [
  {
    id: "CVE-2023-39955",
    title: "Directory Traversal Vulnerability in NextCloud",
    description: "A directory traversal vulnerability in NextCloud that allows attackers to access files outside the intended directory.",
    product: "NextCloud",
    detailsLink: "https://nvd.nist.gov/vuln/detail/CVE-2023-39955",
    writeupLink: "#"
  },
  {
    id: "CVE-2023-47037",
    title: "Authentication Bypass in Apache Airflow",
    description: "An authentication bypass vulnerability in Apache Airflow that could allow unauthorized access to the admin interface.",
    product: "Apache Airflow",
    detailsLink: "https://nvd.nist.gov/vuln/detail/CVE-2023-47037",
    writeupLink: "#"
  },
  {
    id: "CVE-2023-49920",
    title: "Insecure Deserialization in Apache Airflow",
    description: "An insecure deserialization vulnerability in Apache Airflow that could lead to remote code execution.",
    product: "Apache Airflow",
    detailsLink: "https://nvd.nist.gov/vuln/detail/CVE-2023-49920",
    writeupLink: "#"
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/0xt4req",
    icon: "fa-brands fa-github"
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/0xt4req",
    icon: "fa-brands fa-linkedin"
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/0xt4req",
    icon: "fa-brands fa-twitter"
  },
  {
    id: "hackerone",
    name: "HackerOne",
    url: "https://hackerone.com/0xt4req",
    icon: "fa-solid fa-bug"
  }
];
