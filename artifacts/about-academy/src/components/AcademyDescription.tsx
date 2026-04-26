import { motion } from "framer-motion";

export default function AcademyDescription() {
  return (
    <section id="foundation" className="w-full py-24 md:py-40 bg-background relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-12 italic" data-testid="section-heading-foundation">
            Our Foundation
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed md:leading-loose text-foreground"
          data-testid="text-academy-description"
        >
          Mahayogi Siddhababa Spiritual Academy is a not-for-profit, volunteer-run organization based in Nepal, dedicated to advancing holistic well-being through the preservation and sharing of authentic education on yoga and meditation. Guided by the life and teachings of His Holiness Jagadguru Mahayogi Siddhababa, the Academy offers time-tested wisdom for modern seekers, grounded in Vedic Science.
        </motion.p>
      </div>
    </section>
  );
}
