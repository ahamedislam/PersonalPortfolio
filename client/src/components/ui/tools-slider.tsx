import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { fadeIn } from "@/lib/animations";

interface ToolIconProps {
  name: string;
  icon?: string;
}

function ToolIcon({ name, icon }: ToolIconProps) {
  // Get first letter of each word for the acronym
  const acronym = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shadow-lg relative overflow-hidden group">
        {icon ? (
          <i className={`${icon} text-primary text-2xl`}></i>
        ) : (
          <span className="text-primary text-xl font-bold">{acronym}</span>
        )}
        {/* Animated highlight effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </div>
      <span className="text-gray-300 text-sm">{name}</span>
    </div>
  );
}

interface ToolsSliderProps {
  tools: string[];
  title: string;
  icons?: Record<string, string>;
}

export function ToolsSlider({ tools, title, icons = {} }: ToolsSliderProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0.3}
      className="mb-10"
    >
      <h4 className="text-lg font-medium text-primary mb-5">{title}</h4>
      
      <div className="relative px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {tools.map((tool, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/4 lg:basis-1/5">
                <ToolIcon name={tool} icon={icons[tool]} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-surface/80 backdrop-blur-sm hover:bg-surface border-gray-700 text-gray-300" />
          <CarouselNext className="right-0 bg-surface/80 backdrop-blur-sm hover:bg-surface border-gray-700 text-gray-300" />
        </Carousel>
      </div>
    </motion.div>
  );
}