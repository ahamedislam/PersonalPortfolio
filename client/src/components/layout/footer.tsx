import { SocialLink } from "@shared/types";
import { socialLinks } from "@/data/resume";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-surface py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">&copy; {currentYear} Md. Tareq Ahamed Jony. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link: SocialLink) => (
              <a 
                key={link.id}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors text-xl"
                aria-label={link.name}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <BackToTopButton />
    </footer>
  );
}

function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-primary/90 hover:bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-primary/20 transition-all duration-300 z-20"
      aria-label="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}
