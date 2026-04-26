import { ArrowRight, ChevronDown } from "lucide-react";

export function TempleAtDawn() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#4a4540] selection:bg-[#dbbc84] selection:text-white font-['Lora']">
      {/* SECTION 1 - HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.15]">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0C50 0 60 40 100 50C100 50 60 60 50 100C50 100 40 60 0 50C0 50 40 40 50 0Z" stroke="#dbbc84" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="30" stroke="#dbbc84" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        </div>
        
        <div className="text-center space-y-12 max-w-4xl mx-auto z-10 mt-20">
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-8xl font-light tracking-wide text-[#3a3530]">
            About the Academy
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-widest uppercase text-[#8a8075]">
            Holistic Living and Inner Awakening
          </p>
          <div className="pt-20">
            <a href="#explore" className="inline-flex flex-col items-center group gap-4 transition-opacity hover:opacity-70">
              <span className="uppercase tracking-[0.3em] text-sm text-[#8a8075]">Explore</span>
              <div className="w-[1px] h-16 bg-[#dbbc84] group-hover:h-24 transition-all duration-500"></div>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 - ACADEMY DESCRIPTION */}
      <section id="explore" className="py-40 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-[#dbbc84] mb-12">Our Foundation</p>
        <p className="text-2xl md:text-4xl leading-relaxed md:leading-loose font-light text-[#5a5045]">
          Mahayogi Siddhababa Spiritual Academy is a not-for-profit, volunteer-run organization based in Nepal, dedicated to advancing holistic well-being through the preservation and sharing of authentic education on yoga and meditation. Guided by the life and teachings of His Holiness Jagadguru Mahayogi Siddhababa, the Academy offers time-tested wisdom for modern seekers, grounded in Vedic Science.
        </p>
      </section>

      {/* SECTION 3 - OUR APPROACH TO WELL-BEING */}
      <section className="py-40 px-6 md:px-12 max-w-5xl mx-auto flex flex-col items-center">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-[#dbbc84] to-transparent mb-20 opacity-50"></div>
        <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light mb-16 text-center">Our Approach to Well-being</h2>
        <p className="text-xl md:text-2xl leading-loose font-light text-center max-w-3xl text-[#6a6055]">
          The Academy approaches well-being as a comprehensive and integrated way of living, encompassing physical, mental, emotional, social, spiritual, and environmental dimensions. Through this holistic approach, the Academy supports individuals and communities in cultivating balance, resilience, and meaningful, fulfilling lives.
        </p>
      </section>

      {/* SECTION 4 - SIX PILLARS OF SERVICE */}
      <section className="py-40 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light mb-8">Six Pillars of Service</h2>
          <p className="text-lg md:text-xl font-light tracking-wide text-[#8a8075] max-w-2xl mx-auto">
            The foundation of a balanced life, expressed through dedicated service to humanity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {[
            { title: "Swastha", label: "Health & Well-being", desc: "Cultivating physical vitality and inner harmony." },
            { title: "Sikshya", label: "Authentic Education", desc: "Preserving and sharing timeless Vedic wisdom." },
            { title: "Sanskar", label: "Cultural Values", desc: "Nurturing deep-rooted spiritual principles." },
            { title: "Sadvritta", label: "Righteous Conduct", desc: "Guiding ethical and mindful living in society." },
            { title: "Samriddhi", label: "Holistic Prosperity", desc: "Fostering abundance in all dimensions of life." },
            { title: "Shanti", label: "Universal Peace", desc: "Radiating tranquility from within to the world." }
          ].map((pillar, i) => (
            <div key={i} className="group cursor-default">
              <div className="h-[1px] w-12 bg-[#dbbc84] mb-8 transition-all duration-500 group-hover:w-full opacity-50"></div>
              <h3 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light mb-4">{pillar.title}</h3>
              <p className="uppercase tracking-[0.2em] text-xs text-[#8a8075] mb-6">{pillar.label}</p>
              <p className="text-lg font-light leading-relaxed text-[#6a6055]">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 - DISCOVER MORE */}
      <section className="py-40 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#e6d8c3] to-transparent mb-32 opacity-50"></div>
        <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-center mb-24">Discover More</h2>
        
        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          {[
            "Mahayog Meditation",
            "Programs and Courses",
            "Enlightened Guru Siddhababa"
          ].map((item, i) => (
            <a key={i} href="#" className="group flex items-center justify-between py-8 border-b border-[#e6d8c3] hover:border-[#dbbc84] transition-colors duration-500">
              <span className="font-['Cormorant_Garamond'] text-3xl font-light group-hover:translate-x-4 transition-transform duration-500">{item}</span>
              <ArrowRight className="w-6 h-6 text-[#dbbc84] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" strokeWidth={1} />
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER PADDING */}
      <div className="h-40"></div>
    </div>
  );
}
