import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Nav from "@/components/Nav";

export default function AboutAcademy() {
  return (
    <div className="bg-[#faf9f6] text-[#3d3830]" style={{ scrollBehavior: "smooth" }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[58vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}images/academy-hero.png`}
          alt="Himalayan mountain valley"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/70 via-[#2c1a08]/40 to-[#faf9f6]" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
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
          <div>
            <div id="wellbeing" className="mb-8">
              <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Our Foundation &amp; Approach</span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2 mb-6 leading-snug">
                Ancient Wisdom for the Modern World
              </h2>
            </div>
            <p className="text-base leading-relaxed text-[#5a5248] mb-6">
              Mahayogi Siddhababa Spiritual Academy is a not-for-profit, volunteer-run organization based in Nepal, dedicated to preserving and sharing an authentic tradition of yoga and meditation.
            </p>
            <div className="h-px w-16 bg-[#d4a843] mb-6 opacity-60" />
            <p className="text-base leading-relaxed text-[#5a5248] mb-6">
              The Academy focuses on sharing Vedic knowledge and offering direct practice of meditation and self-inquiry, alongside core principles of selfless service, ethical living, and personal responsibility. Its approach is practical and lived, integrating inner development with everyday life.
            </p>
            <p className="text-base leading-relaxed text-[#5a5248]">
              Through its programs, teachings, and community initiatives, the Academy supports individuals in developing clarity of mind, stability of being, and a deeper understanding of themselves, while contributing meaningfully to the world around them.
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              {["Physical", "Mental", "Emotional", "Social", "Spiritual", "Environmental"].map(d => (
                <span key={d} className="text-xs px-3 py-1.5 rounded-full bg-[#f5ece0] text-[#9d7422] border border-[#e8d5b0] tracking-wide">
                  {d}
                </span>
              ))}
            </div>
          </div>
          <div>
            <img
              src={`${import.meta.env.BASE_URL}images/about-ancient-wisdom.png`}
              alt="Ancient Sanskrit manuscripts and sacred texts by lamplight"
              className="w-full rounded-2xl object-cover shadow-md"
              style={{ height: "460px" }}
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
              { title: "Swastha",    label: "Holistic Health",      desc: "Cultivating vitality across all dimensions of existence.",       img: `${import.meta.env.BASE_URL}images/pillar-swastha.png` },
              { title: "Sikshya",   label: "Authentic Education",   desc: "Awakening inner intelligence through sacred Vedic learning.",    img: `${import.meta.env.BASE_URL}images/pillar-sikshya.png` },
              { title: "Sanskar",   label: "Character & Values",    desc: "Refining the self through positive impressions and ritual.",     img: `${import.meta.env.BASE_URL}images/pillar-sanskar.png` },
              { title: "Sadvritta", label: "Ethical Conduct",       desc: "Living in harmony with natural laws and universal truth.",       img: `${import.meta.env.BASE_URL}images/pillar-sadvritta.png` },
              { title: "Samriddhi", label: "Collective Prosperity", desc: "Fostering abundance that uplifts the welfare of all.",           img: `${import.meta.env.BASE_URL}images/pillar-samriddhi.png` },
              { title: "Shanti",    label: "Peace",                 desc: "Realising the profound stillness at the core of all being.",     img: `${import.meta.env.BASE_URL}images/pillar-shanti.png` },
            ].map((p) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 cursor-default"
                style={{ height: "260px" }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a04]/95 via-[#1a1206]/50 to-transparent" />
                <div className="absolute top-0 left-0 h-[3px] w-10 bg-[#d4a843] group-hover:w-full transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3
                    className="font-['Cormorant_Garamond'] text-3xl font-semibold text-white leading-none mb-1"
                    style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-[10px] uppercase tracking-widest text-[#f0d47a] mb-2 font-semibold"
                    style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                  >
                    {p.label}
                  </p>
                  <p
                    className="text-xs text-white/90 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-16 transition-all duration-500"
                    style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCOVER MORE ── */}
      <section id="discover" className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${import.meta.env.BASE_URL}images/academy-hero.png`}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f6] via-[#faf9f6]/80 to-[#faf9f6]" />
          <div className="absolute inset-0 bg-[#f5ece0]/60" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Continue Your Journey</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2">Discover More</h2>
          </div>

          <div className="divide-y divide-[#d8c9b0]/60">
            {[
              {
                title: "Mahayog Meditation",
                desc: "Explore Mahayog, a complete, time-tested system for inner transformation rooted in the Vedic tradition.",
                img: `${import.meta.env.BASE_URL}images/meditation-hero.png`,
                tag: "Practice",
                href: "/meditation",
              },
              {
                title: "Vedanta Philosophy Course",
                desc: "Explore the timeless teachings of Vedanta — the philosophy of non-duality, self-inquiry, and the nature of ultimate reality.",
                img: `${import.meta.env.BASE_URL}images/discover-programs.png`,
                tag: "Philosophy",
                href: "/vedanta",
              },
              {
                title: "The Ashram",
                desc: "Step into a place of stillness and renewal, our Himalayan ashram offers a sanctuary for deep practice and retreat.",
                img: `${import.meta.env.BASE_URL}images/discover-ashram.png`,
                tag: "Retreat",
                href: "/ashram",
              },
              {
                title: "Enlightened Guru Siddhababa",
                desc: "Learn about the life and divine mission of His Holiness Jagadguru Mahayogi Siddhababa, the heart of the Academy.",
                img: `${import.meta.env.BASE_URL}images/saint-siddhababa.png`,
                tag: "Lineage",
                href: "/founder-guru",
              },
            ].map((item) => (
              <Link key={item.title} href={item.href}>
                <div className="group flex items-center gap-8 py-7 hover:bg-white/50 transition-colors duration-300 px-4 -mx-4 rounded-xl cursor-pointer">
                  <div className="w-24 h-20 rounded-xl overflow-hidden shrink-0 shadow-sm">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#b8892a] font-semibold mb-1 block">
                      {item.tag}
                    </span>
                    <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] leading-snug mb-1 group-hover:text-[#9d7422] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#7a7068] leading-relaxed line-clamp-2">{item.desc}</p>
                  </div>
                  <div className="shrink-0 w-9 h-9 rounded-full border border-[#d4a843]/50 flex items-center justify-center group-hover:bg-[#b8892a] group-hover:border-[#b8892a] transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-[#b8892a] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                </div>
              </Link>
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
            A not-for-profit, volunteer-run organization, Nepal
          </p>
        </div>
      </footer>

    </div>
  );
}
