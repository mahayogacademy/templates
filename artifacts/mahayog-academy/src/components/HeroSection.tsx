import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("foundation");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background SVG texture - Mandala/Lotus inspired */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className="w-[120%] h-[120%] min-w-[800px] min-h-[800px] text-primary fill-current">
          <path d="M400,0 C420,150 480,250 600,280 C480,310 420,410 400,560 C380,410 320,310 200,280 C320,250 380,150 400,0 Z" />
          <path d="M400,100 C410,200 450,260 520,280 C450,300 410,360 400,460 C390,360 350,300 280,280 C350,260 390,200 400,100 Z" transform="rotate(45 400 280)" />
          <path d="M400,100 C410,200 450,260 520,280 C450,300 410,360 400,460 C390,360 350,300 280,280 C350,260 390,200 400,100 Z" transform="rotate(90 400 280)" />
          <path d="M400,100 C410,200 450,260 520,280 C450,300 410,360 400,460 C390,360 350,300 280,280 C350,260 390,200 400,100 Z" transform="rotate(135 400 280)" />
          
          <path d="M400,280 C420,430 480,530 600,560 C480,590 420,690 400,840 C380,690 320,590 200,560 C320,530 380,430 400,280 Z" transform="translate(0 -280) scale(0.6) translate(266 466)" />
        </svg>
      </div>

      <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-12 h-1 bg-primary/40 mx-auto mb-8 rounded-full"></div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-6" data-testid="hero-heading">
            About the Academy
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted-foreground font-light mb-12"
          data-testid="hero-subheading"
        >
          Holistic Living and Inner Awakening
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Button 
            onClick={scrollToNext}
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 text-lg border-primary/20 hover:bg-primary/5 hover:text-primary transition-all duration-300 font-serif"
            data-testid="button-explore"
          >
            Explore <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
