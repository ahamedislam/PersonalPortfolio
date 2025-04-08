import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface TerminalProps {
  title?: string;
  commands?: {
    command: string;
    output: string | string[];
  }[];
  className?: string;
  typingSpeed?: number;
  initialDelay?: number;
}

export function Terminal({
  title = "terminal",
  commands = [],
  className = "",
  typingSpeed = 50,
  initialDelay = 500,
}: TerminalProps) {
  const [typedCommands, setTypedCommands] = useState<
    Array<{ command: string; output: string | string[]; typed: boolean }>
  >([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialCommands = commands.map((cmd) => ({
      ...cmd,
      typed: false,
    }));
    setTypedCommands(initialCommands);
  }, [commands]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const typeNextCommand = (index: number) => {
      if (index >= typedCommands.length) return;
      
      const newTypedCommands = [...typedCommands];
      newTypedCommands[index] = { ...newTypedCommands[index], typed: true };
      
      setTypedCommands(newTypedCommands);
      
      if (index < typedCommands.length - 1) {
        const delay = Array.isArray(typedCommands[index].output)
          ? typedCommands[index].output.length * 100 + 500
          : typedCommands[index].command.length * typingSpeed + 500;
        
        timeout = setTimeout(() => typeNextCommand(index + 1), delay);
      }
    };
    
    if (typedCommands.length > 0 && !typedCommands[0].typed) {
      timeout = setTimeout(() => typeNextCommand(0), initialDelay);
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [typedCommands, initialDelay, typingSpeed]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [typedCommands]);

  return (
    <div className={`bg-terminal rounded-lg shadow-md overflow-hidden ${className}`}>
      {/* Terminal Header */}
      <div className="bg-gray-900 px-4 py-2 flex items-center">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
        <span className="text-gray-400 text-xs ml-2">{title}</span>
      </div>
      
      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="p-4 font-mono text-sm text-gray-200 max-h-[400px] overflow-y-auto"
        style={{ backgroundColor: "#0d1117" }}
      >
        {typedCommands.map((cmd, cmdIndex) => (
          <div key={cmdIndex} className="mb-2">
            <div className="flex">
              <span className="text-green-400">guest@tareq-portfolio:~$</span>
              <motion.span 
                className="text-gray-200 ml-2"
                initial={{ opacity: 0 }}
                animate={cmd.typed ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {cmd.typed ? cmd.command : ""}
                {cmd.typed && cmdIndex === typedCommands.length - 1 && (
                  <span className="inline-block w-2 h-4 bg-blue-500 ml-1 animate-pulse"></span>
                )}
              </motion.span>
            </div>
            {cmd.typed && (
              <motion.div 
                className="text-gray-400 ml-5 mt-1"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {Array.isArray(cmd.output) ? (
                  cmd.output.map((line, lineIndex) => (
                    <div key={lineIndex}>{line}</div>
                  ))
                ) : (
                  cmd.output
                )}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
