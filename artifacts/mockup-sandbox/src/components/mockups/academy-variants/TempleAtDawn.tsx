import { ArrowRight, Wind, BookOpen, ShieldCheck, Sprout, Sun, HeartHandshake } from "lucide-react";

export function TempleAtDawn() {
  return (
    <div className="bg-[#faf9f6] text-[#3d3830] font-['Lora']" style={{ scrollBehavior: "smooth" }}>

      {/* ── STICKY NAVIGATION ── */}
      <nav className="sticky top-0 z-50 bg-[#faf9f6]/95 backdrop-blur-sm border-b border-[#e8dece]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
          <span className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#b8892a] tracking-wide">
            Mahayogi Siddhababa Academy
          </span>
          <div className="flex items-center gap-8">
            <a
              href="#foundation"
              className="text-sm text-[#6b6158] hover:text-[#b8892a] transition-colors duration-200 tracking-wide"
            >
              Our Foundation
            </a>
            <a
              href="#wellbeing"
              className="text-sm text-[#6b6158] hover:text-[#b8892a] transition-colors duration-200 tracking-wide"
            >
              Approach to Well-being
            </a>
            <a
              href="#pillars"
              className="text-sm text-[#6b6158] hover:text-[#b8892a] transition-colors duration-200 tracking-wide"
            >
              Pillars of Service
            </a>
            <a
              href="#discover"
              className="text-sm bg-[#b8892a] text-white px-4 py-1.5 rounded-full hover:bg-[#9d7422] transition-colors duration-200 tracking-wide"
            >
              Explore
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="/__mockup/images/academy-hero.png"
          alt="Himalayan mountain valley"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2c1f0a]/60 via-[#3d2b0d]/40 to-[#faf9f6]" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          {/* Tiny decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#e8c56a]" />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/>
            </svg>
            <div className="h-px w-12 bg-[#e8c56a]" />
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light text-white leading-tight mb-4">
            About the Academy
          </h1>
          <p className="text-lg text-[#f0e4c8] tracking-widest uppercase font-light mb-8">
            Holistic Living and Inner Awakening
          </p>
          <a
            href="#foundation"
            className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-7 py-3 rounded-full tracking-wider transition-colors duration-200"
          >
            Explore
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>
      </section>

      {/* ── COMBINED: OUR FOUNDATION + APPROACH TO WELL-BEING ── */}
      <section id="foundation" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">

          {/* Text column */}
          <div>
            {/* Anchor for approach to well-being nav link */}
            <div id="wellbeing" className="mb-8">
              <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Our Foundation &amp; Approach</span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2 mb-6 leading-snug">
                Ancient Wisdom for the Modern World
              </h2>
            </div>

            <p className="text-base leading-relaxed text-[#5a5248] mb-6">
              Mahayogi Siddhababa Spiritual Academy is a not-for-profit, volunteer-run organization based in Nepal, dedicated to advancing holistic well-being through the preservation and sharing of authentic education on yoga and meditation. Guided by the life and teachings of His Holiness Jagadguru Mahayogi Siddhababa, the Academy offers time-tested wisdom for modern seekers, grounded in Vedic Science.
            </p>

            <div className="h-px w-16 bg-[#d4a843] mb-6 opacity-60" />

            <p className="text-base leading-relaxed text-[#5a5248]">
              The Academy approaches well-being as a comprehensive and integrated way of living, encompassing physical, mental, emotional, social, spiritual, and environmental dimensions. Through this holistic approach, the Academy supports individuals and communities in cultivating balance, resilience, and meaningful, fulfilling lives.
            </p>

            {/* Dimension chips */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["Physical", "Mental", "Emotional", "Social", "Spiritual", "Environmental"].map(d => (
                <span key={d} className="text-xs px-3 py-1.5 rounded-full bg-[#f5ece0] text-[#9d7422] border border-[#e8d5b0] tracking-wide">
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="flex flex-col gap-4">
            <img
              src="/__mockup/images/academy-meditation.png"
              alt="Meditation practice in the mountains"
              className="w-full rounded-2xl object-cover shadow-md"
              style={{ height: "260px" }}
            />
            <img
              src="/__mockup/images/academy-lotus.png"
              alt="Lotus in calm waters"
              className="w-full rounded-2xl object-cover shadow-md"
              style={{ height: "180px" }}
            />
          </div>
        </div>
      </section>

      {/* ── SIX PILLARS OF SERVICE ── */}
      <section id="pillars" className="py-20 px-6 bg-gradient-to-b from-[#fdf6ec] to-[#faf9f6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Guiding Principles</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#3d3830] mt-2 mb-4">
              Six Pillars of Service
            </h2>
            <p className="text-sm text-[#7a7068] max-w-xl mx-auto leading-relaxed">
              The Academy's work is rooted in six interconnected pillars of service, which guide its programs, projects, and practices.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { title: "Swastha",    label: "Holistic health and well-being",       desc: "Cultivating vitality across all dimensions of existence.",         icon: Sun },
              { title: "Sikshya",   label: "Lifelong learning and self-development", desc: "Awakening inner intelligence through authentic education.",       icon: BookOpen },
              { title: "Sanskar",   label: "Cultivation of character and values",    desc: "Refining the mind through positive impressions and practice.",    icon: HeartHandshake },
              { title: "Sadvritta", label: "Ethical conduct",                        desc: "Living in harmony with natural laws and universal truth.",        icon: ShieldCheck },
              { title: "Samriddhi", label: "Collective prosperity",                  desc: "Fostering abundance that supports the welfare of all.",           icon: Sprout },
              { title: "Shanti",    label: "Peace",                                  desc: "Realising the profound stillness at the core of being.",          icon: Wind },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#ede4d5] hover:shadow-md hover:border-[#d4a843] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#fdf3e3] flex items-center justify-center mb-4 group-hover:bg-[#f5e4c0] transition-colors duration-300">
                  <p.icon className="w-5 h-5 text-[#b8892a]" strokeWidth={1.5} />
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-3xl font-medium text-[#3d3830] mb-1">
                  {p.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#b8892a] mb-3 font-medium">{p.label}</p>
                <p className="text-sm text-[#6b6158] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCOVER MORE ── */}
      <section id="discover" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Continue Your Journey</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2">Discover More</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Mahayog Meditation",
                desc: "Explore the ancient science of Mahayog — a complete system for inner transformation and awakening.",
                color: "from-[#3d2b0d] to-[#6b4a1c]",
                img: "/__mockup/images/academy-hero.png",
              },
              {
                title: "Programs and Courses",
                desc: "Discover structured learning paths in yoga, meditation, and Vedic philosophy for all levels.",
                color: "from-[#1c3828] to-[#2e5c40]",
                img: "/__mockup/images/academy-meditation.png",
              },
              {
                title: "Enlightened Guru Siddhababa",
                desc: "Learn about the life, mission, and divine wisdom of His Holiness Jagadguru Mahayogi Siddhababa.",
                color: "from-[#2c1f0a] to-[#5a3e16]",
                img: "/__mockup/images/academy-lotus.png",
              },
            ].map((card) => (
              <a
                key={card.title}
                href="#"
                className="group relative overflow-hidden rounded-2xl h-64 flex flex-col justify-end p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-75`} />
                <div className="relative z-10">
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-white mb-1">{card.title}</h3>
                  <p className="text-xs text-white/70 leading-relaxed mb-3 line-clamp-2">{card.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[#e8c56a] text-xs font-medium tracking-wide group-hover:gap-3 transition-all duration-300">
                    Learn More <ArrowRight className="w-3 h-3" strokeWidth={2} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6 border-t border-[#e8dece] bg-[#f5ede0]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-['Cormorant_Garamond'] text-lg font-medium text-[#b8892a]">
            Mahayogi Siddhababa Spiritual Academy
          </span>
          <p className="text-xs text-[#9a8f84] text-center">
            A not-for-profit, volunteer-run organization — Nepal
          </p>
        </div>
      </footer>

    </div>
  );
}
