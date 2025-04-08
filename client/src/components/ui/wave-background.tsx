import { motion } from "framer-motion";

interface WaveBackgroundProps {
  position?: "top" | "bottom";
  color?: string;
  opacity?: number;
}

export function WaveBackground({ 
  position = "bottom", 
  color = "#0ea5e9", 
  opacity = 0.1 
}: WaveBackgroundProps) {
  const getPath = () => {
    if (position === "bottom") {
      return "M0,160L48,144C96,128,192,96,288,85.3C384,75,480,85,576,112C672,139,768,181,864,186.7C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";
    } else {
      return "M0,224L40,224C80,224,160,224,240,218.7C320,213,400,203,480,181.3C560,160,640,128,720,128C800,128,880,160,960,170.7C1040,181,1120,171,1200,154.7C1280,139,1360,117,1400,106.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z";
    }
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <svg 
        className={`absolute ${position === "bottom" ? "bottom-0" : "top-0"} left-0 w-full`}
        style={{ opacity }}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
        preserveAspectRatio="none">
        <motion.path 
          fill={color}
          d={getPath()}
          initial={{ y: position === "bottom" ? 100 : 0, opacity }}
          animate={{ 
            y: position === "bottom" ? [100, 50, 100] : [0, 20, 0],
            opacity: [opacity, opacity * 2, opacity],
          }}
          transition={{
            duration: position === "bottom" ? 15 : 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
      <svg 
        className={`absolute ${position === "bottom" ? "bottom-0" : "top-0"} left-0 w-full`}
        style={{ opacity: opacity * 0.7 }}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
        preserveAspectRatio="none">
        <motion.path 
          fill={color === "#0ea5e9" ? "#7dd3fc" : color}
          d={position === "bottom" 
            ? "M0,192L60,202.7C120,213,240,235,360,224C480,213,600,171,720,165.3C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            : "M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          }
          initial={{ y: 0, opacity: opacity * 0.7 }}
          animate={{ 
            y: [0, position === "bottom" ? -30 : 30, 0],
            opacity: [opacity * 0.7, opacity * 1.5, opacity * 0.7],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </svg>
    </div>
  );
}