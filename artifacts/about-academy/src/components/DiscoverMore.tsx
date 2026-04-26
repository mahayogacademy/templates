import { motion } from "framer-motion";
import { ArrowRight, Compass, GraduationCap, UserCircle } from "lucide-react";

export default function DiscoverMore() {
  const cards = [
    {
      title: "Mahayog Meditation",
      description: "Experience the profound inner stillness through guided ancient techniques.",
      icon: Compass,
      link: "#"
    },
    {
      title: "Programs and Courses",
      description: "Explore authentic teachings in yoga, meditation, and Vedic philosophy.",
      icon: GraduationCap,
      link: "#"
    },
    {
      title: "Enlightened Guru Siddhababa",
      description: "Discover the life and teachings of His Holiness Jagadguru Mahayogi Siddhababa.",
      icon: UserCircle,
      link: "#"
    }
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-card relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-8" data-testid="section-heading-discover">
            Discover More
          </h2>
          <div className="w-16 h-px bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.a
              href={card.link}
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block bg-background p-8 rounded-3xl border border-border/50 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500"
              data-testid={`card-discover-${index}`}
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                  <card.icon strokeWidth={1.5} className="w-6 h-6" />
                </div>
                <div className="w-8 h-8 rounded-full bg-transparent border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-500">
                  <ArrowRight strokeWidth={2} className="w-4 h-4" />
                </div>
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-3" data-testid={`text-discover-title-${index}`}>
                {card.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`text-discover-desc-${index}`}>
                {card.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
