import { motion } from "framer-motion";
import { Sun, BookOpen, HeartHandshake, ShieldCheck, Sprout, Wind } from "lucide-react";

export default function SixPillars() {
  const pillars = [
    {
      sanskrit: "Swastha",
      english: "Holistic health and well-being",
      description: "Cultivating vitality across all dimensions of existence.",
      icon: Sun
    },
    {
      sanskrit: "Sikshya",
      english: "Lifelong learning and self-development",
      description: "Awakening inner intelligence and seeking true knowledge.",
      icon: BookOpen
    },
    {
      sanskrit: "Sanskar",
      english: "Cultivation of character and values",
      description: "Refining the mind through positive impressions and habits.",
      icon: HeartHandshake
    },
    {
      sanskrit: "Sadvritta",
      english: "Ethical conduct",
      description: "Living in harmony with natural laws and universal truth.",
      icon: ShieldCheck
    },
    {
      sanskrit: "Samriddhi",
      english: "Collective prosperity",
      description: "Fostering abundance that supports the welfare of all.",
      icon: Sprout
    },
    {
      sanskrit: "Shanti",
      english: "Peace",
      description: "Realizing the profound stillness at the core of our being.",
      icon: Wind
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full py-24 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24 max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-6" data-testid="section-heading-pillars">
            Six Pillars of Service
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-pillars-intro">
            The Academy's work is rooted in six interconnected pillars of service, which guide its programs, projects, and practices.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div 
              key={pillar.sanskrit} 
              variants={item}
              className="bg-card border border-border/50 p-8 rounded-3xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
              data-testid={`card-pillar-${pillar.sanskrit.toLowerCase()}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <pillar.icon strokeWidth={1.5} className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-3xl font-medium text-foreground mb-2" data-testid={`text-pillar-name-${index}`}>
                {pillar.sanskrit}
              </h3>
              <h4 className="font-sans text-sm uppercase tracking-wider text-primary mb-4 font-medium" data-testid={`text-pillar-english-${index}`}>
                {pillar.english}
              </h4>
              <p className="text-muted-foreground" data-testid={`text-pillar-desc-${index}`}>
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
