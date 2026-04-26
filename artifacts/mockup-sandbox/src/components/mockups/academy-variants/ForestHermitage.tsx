import { ArrowRight, Leaf, Heart, Sparkles, Sun, BookOpen, Shield } from "lucide-react";

export function ForestHermitage() {
  return (
    <div className="w-full min-h-screen font-['Lora'] text-slate-800 selection:bg-[#E99736] selection:text-white antialiased">
      {/* SECTION 1 - HERO */}
      <section 
        className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-24 text-center overflow-hidden"
        style={{ backgroundColor: "hsl(152, 30%, 18%)" }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-soft-light"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-8 opacity-90 transition-transform duration-700 hover:scale-110" style={{ color: "hsl(32, 75%, 52%)" }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22c4.97-1.5 9-7.5 9-13a9 9 0 0 0-18 0c0 5.5 4.03 11.5 9 13z" />
              <path d="M12 22c-2.48-1.5-4.5-7.5-4.5-13a4.5 9 0 0 1 9 0c0 5.5-2.02 11.5-4.5 13z" />
              <circle cx="12" cy="7" r="2" />
              <path d="M12 9v4" />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Merriweather'] font-light text-[#FDFBF7] mb-6 tracking-tight leading-tight">
            About the Academy
          </h1>
          
          <p className="text-xl md:text-2xl font-['Lora'] mb-12 max-w-2xl font-light leading-relaxed" style={{ color: "#b3c9bc" }}>
            Holistic Living and Inner Awakening
          </p>
          
          <button 
            className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-white transition-all duration-300 ease-in-out overflow-hidden rounded-full hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: "hsl(32, 75%, 52%)" }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </section>

      {/* SECTION 2 - ACADEMY DESCRIPTION */}
      <section 
        className="py-32 px-6 relative"
        style={{ backgroundColor: "hsl(35, 30%, 93%)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block uppercase tracking-[0.2em] text-sm font-bold mb-8" style={{ color: "hsl(32, 75%, 52%)" }}>
            Our Foundation
          </span>
          <p className="text-2xl md:text-4xl font-['Lora'] leading-normal md:leading-relaxed text-[#2a3b32] font-normal">
            Mahayogi Siddhababa Spiritual Academy is a not-for-profit, volunteer-run organization based in Nepal, dedicated to advancing holistic well-being through the preservation and sharing of authentic education on yoga and meditation. Guided by the life and teachings of His Holiness Jagadguru Mahayogi Siddhababa, the Academy offers time-tested wisdom for modern seekers, grounded in Vedic Science.
          </p>
        </div>
      </section>

      {/* SECTION 3 - OUR APPROACH TO WELL-BEING */}
      <section 
        className="py-32 px-6"
        style={{ backgroundColor: "hsl(18, 25%, 93%)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-['Merriweather'] text-[#2a3b32] mb-6">
              Our Approach to Well-being
            </h2>
            <p className="text-lg md:text-xl text-[#4a5e51] font-['Lora'] leading-relaxed">
              We approach human flourishing through six interconnected dimensions, drawing from ancient Vedic sciences to nurture the complete individual in the modern world.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              { name: "Physical", icon: Heart },
              { name: "Mental", icon: Sparkles },
              { name: "Emotional", icon: Sun },
              { name: "Intellectual", icon: BookOpen },
              { name: "Social", icon: Shield },
              { name: "Spiritual", icon: Leaf },
            ].map((dim, i) => (
              <div 
                key={i}
                className="flex items-center gap-3 px-8 py-4 rounded-full shadow-sm border border-[rgba(0,0,0,0.05)] transition-all hover:shadow-md hover:-translate-y-1 cursor-default"
                style={{ backgroundColor: "hsl(35, 30%, 93%)", color: "hsl(152, 30%, 18%)" }}
              >
                <dim.icon className="w-5 h-5" style={{ color: "hsl(32, 75%, 52%)" }} />
                <span className="font-['Lora'] text-lg font-medium">{dim.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - SIX PILLARS OF SERVICE */}
      <section 
        className="py-32 px-6"
        style={{ backgroundColor: "hsl(28, 40%, 88%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-['Merriweather'] text-[#3d2b1f] mb-6">
              Six Pillars of Service
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "hsl(32, 75%, 52%)" }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Swastha", desc: "Health & Healing" },
              { name: "Sikshya", desc: "Education & Wisdom" },
              { name: "Sanskar", desc: "Culture & Values" },
              { name: "Sadvritta", desc: "Righteous Conduct" },
              { name: "Samriddhi", desc: "Sustainable Prosperity" },
              { name: "Shanti", desc: "Universal Peace" },
            ].map((pillar, i) => (
              <div 
                key={i} 
                className="bg-[#FDFBF7] rounded-2xl p-10 shadow-[0_4px_20px_rgb(0,0,0,0.05)] relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-[#E99736]/20"
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-2 transition-all duration-300 group-hover:h-3"
                  style={{ backgroundColor: "hsl(32, 75%, 52%)" }}
                ></div>
                <div className="mt-2 text-[#2a3b32] font-['Merriweather'] italic text-3xl mb-4">
                  {pillar.name}
                </div>
                <p className="text-[#5c4a3d] font-['Lora'] text-lg md:text-xl">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - DISCOVER MORE */}
      <section 
        className="py-32 px-6"
        style={{ backgroundColor: "hsl(152, 30%, 18%)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <h2 className="text-3xl md:text-5xl font-['Merriweather'] text-[#FDFBF7] mb-6 md:mb-0">
              Continue Your Journey
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Mahayog Meditation",
              "Programs and Courses",
              "Enlightened Guru Siddhababa"
            ].map((title, i) => (
              <div 
                key={i}
                className="group cursor-pointer rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between h-64 border"
                style={{ 
                  backgroundColor: "rgba(10, 20, 15, 0.4)",
                  borderColor: "rgba(255, 255, 255, 0.05)"
                }}
              >
                <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: "rgba(233, 151, 54, 0.1)" }}>
                   <Leaf className="w-6 h-6" style={{ color: "hsl(32, 75%, 52%)" }} />
                </div>
                
                <h3 className="text-2xl font-['Merriweather'] text-[#FDFBF7] leading-snug mb-4">
                  {title}
                </h3>
                
                <div className="flex items-center gap-2 mt-auto" style={{ color: "hsl(32, 75%, 52%)" }}>
                  <span className="text-sm font-semibold tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-4 group-hover:translate-x-0 duration-300">
                    Discover
                  </span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
