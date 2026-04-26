import { ArrowRight, Star, Sparkles, CircleDot } from "lucide-react";

export function SacredNight() {
  return (
    <div 
      className="min-h-screen font-['Lora'] selection:bg-[hsl(38,80%,65%)] selection:text-[hsl(225,25%,8%)]" 
      style={{ background: 'hsl(225, 25%, 8%)', color: 'hsl(40, 20%, 88%)' }}
    >
      {/* SECTION 1 - HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 py-20 text-center">
        {/* Decorative background mandala/geometry */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
          <svg viewBox="0 0 100 100" className="w-[120vw] max-w-[800px] h-auto text-[hsl(38,80%,65%)]" fill="none" stroke="currentColor" strokeWidth="0.5">
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="20" />
            <path d="M50 10 L50 90 M10 50 L90 50 M21.7 21.7 L78.3 78.3 M21.7 78.3 L78.3 21.7" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8">
          <Star className="w-8 h-8 text-[hsl(38,80%,65%)] opacity-70 animate-pulse" />
          
          <div className="space-y-4">
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl tracking-tight text-[hsl(38,80%,65%)] leading-tight">
              About the Academy
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-wide opacity-90 max-w-2xl mx-auto">
              Holistic Living and Inner Awakening
            </p>
          </div>

          <button className="mt-8 px-10 py-4 border border-[hsl(38,80%,65%)] text-[hsl(38,80%,65%)] rounded-full hover:bg-[hsl(38,80%,65%,0.1)] transition-colors duration-300 flex items-center gap-3 tracking-widest uppercase text-sm group">
            Explore
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* SECTION 2 - ACADEMY DESCRIPTION */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[hsl(38,80%,65%)] opacity-80 font-semibold">
            Our Foundation
          </span>
          <p className="text-xl md:text-3xl leading-relaxed md:leading-loose font-light">
            Mahayogi Siddhababa Spiritual Academy is a not-for-profit, volunteer-run organization based in Nepal, dedicated to advancing holistic well-being through the preservation and sharing of authentic education on yoga and meditation. Guided by the life and teachings of His Holiness Jagadguru Mahayogi Siddhababa, the Academy offers time-tested wisdom for modern seekers, grounded in Vedic Science.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-md mx-auto h-[1px] bg-gradient-to-r from-transparent via-[hsl(38,80%,65%,0.3)] to-transparent" />

      {/* SECTION 3 - OUR APPROACH TO WELL-BEING */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[hsl(38,80%,65%)]">
              Our Approach to Well-being
            </h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-80 font-light">
              The Academy approaches well-being as a comprehensive and integrated way of living, encompassing physical, mental, emotional, social, spiritual, and environmental dimensions. Through this holistic approach, the Academy supports individuals and communities in cultivating balance, resilience, and meaningful, fulfilling lives.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-8">
            {["Physical", "Mental", "Emotional", "Social", "Spiritual", "Environmental"].map((dim) => (
              <div 
                key={dim}
                className="px-6 py-3 rounded-full border border-[hsl(38,80%,65%,0.3)] flex items-center gap-3 text-sm tracking-wider uppercase hover:border-[hsl(38,80%,65%)] hover:bg-[hsl(38,80%,65%,0.05)] transition-all duration-300 cursor-default shadow-[0_0_15px_rgba(212,175,55,0)] hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]"
              >
                <Sparkles className="w-4 h-4 text-[hsl(38,80%,65%)]" />
                {dim}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - SIX PILLARS OF SERVICE */}
      <section className="py-24 px-6 bg-[hsl(225,20%,10%)] border-y border-[hsl(38,80%,65%,0.1)]">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[hsl(38,80%,65%)]">
              Six Pillars of Service
            </h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto font-light">
              Our core initiatives designed to foster holistic development and community upliftment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { sanskrit: "Swastha", english: "Health", desc: "Promoting physical well-being through ancient yogic practices." },
              { sanskrit: "Sikshya", english: "Education", desc: "Imparting holistic knowledge bridging Vedic wisdom and modern life." },
              { sanskrit: "Sanskar", english: "Culture", desc: "Preserving and nurturing timeless values and traditions." },
              { sanskrit: "Sadvritta", english: "Right Conduct", desc: "Cultivating ethical living and moral harmony." },
              { sanskrit: "Samriddhi", english: "Prosperity", desc: "Fostering sustainable inner and outer abundance." },
              { sanskrit: "Shanti", english: "Peace", desc: "Guiding the journey toward profound inner tranquility." }
            ].map((pillar) => (
              <div 
                key={pillar.sanskrit}
                className="group p-8 rounded-lg bg-[hsl(225,20%,14%)] border-t-2 border-[hsl(38,80%,65%,0.4)] hover:border-[hsl(38,80%,65%)] transition-all duration-500 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.2)] hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <h3 className="font-['Playfair_Display'] text-3xl text-[hsl(38,80%,65%)] group-hover:text-[hsl(38,90%,75%)] transition-colors">
                    {pillar.sanskrit}
                  </h3>
                  <span className="block text-xs tracking-[0.2em] uppercase opacity-60">
                    {pillar.english}
                  </span>
                  <p className="opacity-80 font-light leading-relaxed pt-2">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - DISCOVER MORE */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[hsl(38,80%,65%)] text-center">
            Discover More
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Mahayog Meditation",
              "Programs and Courses",
              "Enlightened Guru Siddhababa"
            ].map((title) => (
              <div 
                key={title}
                className="group cursor-pointer p-8 rounded-lg bg-[hsl(225,20%,12%)] border border-[hsl(38,80%,65%,0.1)] hover:border-[hsl(38,80%,65%,0.3)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between min-h-[200px]"
              >
                <CircleDot className="w-6 h-6 text-[hsl(38,80%,65%,0.5)] group-hover:text-[hsl(38,80%,65%)] transition-colors" />
                <div className="flex items-end justify-between mt-8">
                  <h3 className="font-['Playfair_Display'] text-xl text-white opacity-90 pr-4">
                    {title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-[hsl(38,80%,65%)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="py-8 text-center opacity-40 text-sm font-light border-t border-white/5">
        &copy; {new Date().getFullYear()} Mahayogi Siddhababa Spiritual Academy
      </footer>
    </div>
  );
}