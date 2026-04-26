import { motion } from "framer-motion";
import { Heart, Brain, Users, Leaf, Flame, Sparkles } from "lucide-react";

export default function WellBeingSection() {
  const dimensions = [
    { name: "Physical", icon: Heart },
    { name: "Mental", icon: Brain },
    { name: "Emotional", icon: Flame },
    { name: "Social", icon: Users },
    { name: "Spiritual", icon: Sparkles },
    { name: "Environmental", icon: Leaf },
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-card relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-8" data-testid="section-heading-wellbeing">
            Our Approach to Well-being
          </h2>
          <div className="w-16 h-px bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-wellbeing-description">
              The Academy approaches well-being as a comprehensive and integrated way of living, encompassing physical, mental, emotional, social, spiritual, and environmental dimensions. Through this holistic approach, the Academy supports individuals and communities in cultivating balance, resilience, and meaningful, fulfilling lives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            {dimensions.map((dim, i) => (
              <div 
                key={dim.name} 
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-background shadow-sm border border-border/50 hover:border-primary/30 transition-colors duration-300"
                data-testid={`card-dimension-${dim.name.toLowerCase()}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <dim.icon strokeWidth={1.5} className="w-6 h-6" />
                </div>
                <span className="font-serif text-lg text-foreground">{dim.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
