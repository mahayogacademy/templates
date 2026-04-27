import { useState } from "react";
import Nav from "@/components/Nav";
import { Link } from "wouter";
import { ArrowRight, X } from "lucide-react";

const b = import.meta.env.BASE_URL;

const HANUMAN_FEATURES = [
  {
    title: "Multi-Purpose Hall",
    desc: "A 200–250 person hall adaptable for satsang, group meditation, cultural celebrations, youth programs, and community gatherings.",
  },
  {
    title: "Mahayog Meditation Center",
    desc: "Each temple doubles as a teaching center offering meditation, Vedic science, Sanatan Dharma philosophy, and sadhana programs.",
  },
  {
    title: "Community Infrastructure",
    desc: "Dedicated rooms for worship, seva kitchen (Anna Seva), pujari preparation, storage, and an administrative office.",
  },
];

const HANUMAN_PROGRAMS = [
  "Teachings on Sanatan Dharma and Hindu philosophy",
  "Yogic and Vedic science education",
  "Himalayan Siddha Mahayog practice",
  "Youth character development initiatives",
  "Cultural education in sanskar and sanskriti",
  "Regular satsang and group sadhana",
];

const COSMIC_JOURNEY = [
  { stage: "I", name: "Primordial Nothingness", desc: "The state before creation — pure unmanifest consciousness." },
  { stage: "II", name: "Tri-Guna", desc: "The emergence of Sattva, Rajas, and Tamas — the three fundamental qualities of nature." },
  { stage: "III", name: "Prakriti", desc: "The manifestation of primordial nature, the source of the material universe." },
  { stage: "IV", name: "Mahat", desc: "The arising of cosmic intelligence — the first great principle of creation." },
  { stage: "V", name: "Ahankar", desc: "The formation of individual identity and ego as creation becomes individuated." },
  { stage: "VI", name: "The Present Age", desc: "The full unfolding of creation and the journey through the four Yugas into Kali Yuga." },
];

const YUGAS = ["Satya Yuga", "Treta Yuga", "Dwapar Yuga", "Kali Yuga"];

const ARCH_HIGHLIGHTS = [
  {
    title: "Nine-Storey Structure",
    desc: "A majestic nine-storey temple symbolizing ascent through layers of consciousness and existence.",
  },
  {
    title: "Sri Yantra Architecture",
    desc: "The entire design is based on sacred geometry of the Sri Yantra — the union of cosmic energies and structure of creation.",
  },
  {
    title: "33 Koti Devatas",
    desc: "Arranged according to universal Vastu principles from Vedic scripture, with Lord Ram and His divine family at the spiritual center.",
  },
  {
    title: "Nepal's Cultural Heritage",
    desc: "A living model integrating elements from Nepal's diverse communities, with curated representations of the nation's spiritual and historical evolution.",
  },
];

const RAM_GALLERY = [
  { src: "ram-mandir-1.jpg", alt: "Ram Mandir — aerial perspective" },
  { src: "ram-mandir-2.jpg", alt: "Ram Mandir — top-down yantra view" },
  { src: "ram-mandir-3.jpg", alt: "Ram Mandir — front view with Hanuman statue" },
  { src: "ram-mandir-4.jpg", alt: "Ram Mandir — wide campus view" },
  { src: "ram-mandir-5.jpg", alt: "Ram Mandir — panoramic rendering" },
];

export default function Projects() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="bg-[#faf9f6] text-[#3d3830]">
      <Nav />

      {/* Lightbox overlay */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-7 h-7" strokeWidth={1.5} />
          </button>
          <img
            src={lightbox}
            alt="Enlarged rendering"
            className="max-w-full max-h-full rounded-xl shadow-2xl object-contain"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative h-[52vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${b}images/ashram-hero.png`}
            alt=""
            aria-hidden
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1a0f05]/72" />
        </div>
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#e8c56a]/60" />
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/60" />
          </div>
          <p className="text-[#e8c56a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Sacred Initiatives</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight">
            Our Projects
          </h1>
          <p className="text-[#f0e4c8] text-base tracking-widest uppercase font-light mt-4">
            Building for Future Generations
          </p>
        </div>
      </section>

      {/* ── SECTION ANCHOR NAV ── */}
      <div className="bg-[#faf9f6] border-b border-[#e8dece]">
        <div className="max-w-5xl mx-auto px-6 py-3">
          <div className="flex border border-[#e8dece] rounded-full overflow-hidden">
            {[
              { label: "108 Hanuman Temples", anchor: "#project-01" },
              { label: "Ram Mandir", anchor: "#project-02" },
            ].map((item, i, arr) => (
              <a
                key={item.anchor}
                href={item.anchor}
                className={`flex-1 text-center py-2.5 text-sm text-[#5a5248] hover:bg-[#e8dece] hover:text-[#7a5c1e] transition-colors tracking-wide ${i < arr.length - 1 ? "border-r border-[#e8dece]" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROJECT 01: 108 HANUMAN TEMPLES ── */}
      <section id="project-01" className="py-24 px-6 scroll-mt-16">
        <div className="max-w-5xl mx-auto">

          {/* Project header + portrait image */}
          <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start mb-14">

            {/* Left: header + description + feature items */}
            <div>
              <div className="flex items-start gap-6 mb-8">
                <span className="font-['Cormorant_Garamond'] text-8xl font-light text-[#e8dece] leading-none select-none shrink-0">01</span>
                <div className="pt-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-2">National Mission · Nepal</p>
                  <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#3d3830] leading-tight">
                    108 Hanuman Temples
                  </h2>
                  <p className="font-['Cormorant_Garamond'] text-xl italic text-[#9a8f84] mt-1">A Sacred Sat-Sankalpa</p>
                </div>
              </div>
              <div className="h-px bg-[#e8dece] mb-6" />
              <p className="text-base text-[#5a5248] leading-relaxed mb-8">
                Jagadguru Mahayogi Siddhababa has undertaken a sacred vow to establish 108 Hanuman Temples across Nepal — a visionary initiative dedicated to spiritual renewal, cultural preservation, and social upliftment. These temples are envisioned not only as places of worship, but as vibrant community centers rooted in Sanatan Dharma, built with and managed by local communities.
              </p>

              {/* Feature items — stacked below description */}
              <div className="space-y-3">
                {HANUMAN_FEATURES.map((f, i) => (
                  <div key={i} className="flex gap-5 items-start p-5 bg-white border border-[#e8dece] rounded-xl">
                    <span className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#d4a843]/50 leading-none shrink-0 w-7">{i + 1}</span>
                    <div>
                      <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#3d3830] leading-none mb-1">{f.title}</p>
                      <p className="text-sm text-[#7a7068] leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: portrait image */}
            <div className="rounded-2xl overflow-hidden shadow-md shadow-[#b8892a]/10 hidden md:block sticky top-20">
              <img
                src={`${b}images/hanuman-temple-portrait.png`}
                alt="Lord Hanuman statue at a Nepali temple"
                className="w-full object-cover object-top"
                style={{ minHeight: "520px" }}
              />
            </div>
          </div>

          {/* Programs offered */}
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-6">Programs Offered at Each Hanuman Temple</p>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {HANUMAN_PROGRAMS.map((p, i) => (
                <div key={i} className="flex items-center gap-3 py-3.5 border-b border-[#e8dece]">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="#b8892a" className="shrink-0">
                    <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z"/>
                  </svg>
                  <p className="text-sm text-[#5a5248]">{p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ways to contribute — banner */}
          <div className="mb-10 -mx-6 px-8 md:px-14 py-12 bg-[#2e2820]">

            {/* Top row: label + heading + icon + CTA */}
            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
              <div className="flex-1">
                <h3 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#faf9f6] leading-snug mb-3">
                  Be Part of Building Something Sacred
                </h3>
                <p className="text-sm text-[#9a8f84] leading-relaxed max-w-lg">
                  Your gift becomes a lasting legacy—each temple a living center of prayer, learning, and community, rooted in dharma for generations to come.
                </p>
              </div>
              <div className="shrink-0">
                <Link href="/contact">
                  <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm font-medium px-8 py-3.5 rounded-full tracking-widest transition-colors duration-200 cursor-pointer">
                    Support the Mission
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </Link>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 mb-8" />

            {/* Bottom row: contribution types with images */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-1">
                <div className="rounded-xl overflow-hidden mb-4 h-44">
                  <img src={`${b}images/land-contribution.png`} alt="Land contribution" className="w-full h-full object-cover" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4a843] font-semibold mb-1">Land</p>
                <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#e8dece] mb-2">Land Contribution</p>
                <p className="text-sm text-[#9a8f84] leading-relaxed">Donate private land, facilitate government allocation, or help identify and restore historic temple sites across Nepal.</p>
              </div>
              <div className="w-px bg-white/10 hidden md:block" />
              <div className="flex-1">
                <div className="rounded-xl overflow-hidden mb-4 h-44">
                  <img src={`${b}images/financial-support.png`} alt="Financial support" className="w-full h-full object-cover" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4a843] font-semibold mb-1">Finance</p>
                <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#e8dece] mb-2">Financial Support</p>
                <p className="text-sm text-[#9a8f84] leading-relaxed">Monetary or in-kind donations toward construction, educational programming, sadhana activities, and ongoing temple maintenance.</p>
              </div>
            </div>

          </div>

          {/* Quote */}
          <div className="relative -mx-6 overflow-hidden" style={{ minHeight: "320px" }}>
            {/* Background image */}
            <img
              src={`${b}images/quote-banner-bg.png`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-white/70" />
            {/* Content */}
            <div className="relative flex flex-col items-center justify-center text-center px-8 md:px-20 py-16">
              <span className="font-['Cormorant_Garamond'] text-6xl font-light text-[#b8892a]/40 leading-none mb-2 select-none">"</span>
              <p className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-light italic text-[#3d3830] leading-relaxed max-w-2xl mb-6">
                The body is temporary; it will pass. Let us leave behind something of lasting value that teaches sanskar and sanskriti to future generations.
              </p>
              <div className="h-px w-10 bg-[#b8892a]/50 mb-4" />
              <cite className="text-xs uppercase tracking-[0.25em] text-[#3d3830] font-semibold not-italic">
                Jagadguru Mahayogi Siddhababa
              </cite>
            </div>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[#e8dece]" />
      </div>

      {/* ── PROJECT 02: RAM MANDIR ── */}
      <section id="project-02" className="py-24 px-6 scroll-mt-16">
        <div className="max-w-5xl mx-auto">

          {/* Project header */}
          <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start mb-14">

            {/* Left: text */}
            <div>
              <div className="flex items-start gap-6 mb-8">
                <span className="font-['Cormorant_Garamond'] text-8xl font-light text-[#e8dece] leading-none select-none shrink-0">02</span>
                <div className="pt-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-2">Chatara Dham · Sunsari, Nepal</p>
                  <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#3d3830] leading-tight">
                    Ram Mandir
                  </h2>
                  <p className="font-['Cormorant_Garamond'] text-xl italic text-[#9a8f84] mt-1">Dev Sabha — The Divine Assembly</p>
                </div>
              </div>
              <div className="h-px bg-[#e8dece] mb-6" />
              <p className="text-base text-[#5a5248] leading-relaxed mb-4">
                A historic Ram Mandir will be built at Jagadguru Ramanadacharya Seva Peeth (Tarak Brahma Peeth), Chatara Dham — envisioned as a sacred replica of Dev Sabha, the divine assembly of the 33 koti devatas, with Lord Ram, Maa Sita and their divine family at the center.
              </p>
              <p className="text-base text-[#5a5248] leading-relaxed">
                This temple will not only be a place of worship, but a living spiritual and cosmological experience — its architecture based on the structure of the universe as described in Vedic scripture and realized through the spiritual insight of Jagadguru Mahayogi Siddhababa.
              </p>
            </div>

            {/* Right: feature image */}
            <div className="rounded-2xl overflow-hidden shadow-md shadow-[#b8892a]/10 hidden md:block sticky top-20 aspect-square">
              <img
                src={`${b}images/ram-mandir-3.jpg`}
                alt="Ram Mandir architectural rendering with Hanuman statue"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Cosmological journey */}
          <div className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-8">A Journey Through Creation</p>
            <div className="grid md:grid-cols-2 gap-4">
              {COSMIC_JOURNEY.map((step, i) => (
                <div key={i} className="flex gap-5 items-start p-5 bg-white border border-[#e8dece] rounded-xl">
                  <span className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#d4a843]/50 leading-none shrink-0 w-7">{step.stage}</span>
                  <div>
                    <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#3d3830] leading-none mb-1">{step.name}</p>
                    <p className="text-sm text-[#7a7068] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Yugas */}
            <div className="mt-5">
              <p className="text-xs text-[#9a8f84] mb-4 uppercase tracking-[0.2em] font-medium">The Four Yugas — Cycle of Time</p>
              <div className="grid grid-cols-4 divide-x divide-[#e8dece] border border-[#e8dece] rounded-xl overflow-hidden">
                {YUGAS.map((y, i) => (
                  <div key={i} className="flex flex-col items-center py-5 px-3 bg-[#fdf6ec]">
                    <span className="font-['Cormorant_Garamond'] text-3xl font-light text-[#b8892a]/40 leading-none mb-2">
                      {["I","II","III","IV"][i]}
                    </span>
                    <p className="font-['Cormorant_Garamond'] text-sm font-semibold text-[#5a5248] text-center leading-snug">{y}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Architectural highlights */}
          <div className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-2">Architectural Highlights</p>
            <div className="h-px bg-[#e8dece] mb-0" />
            <div>
              {ARCH_HIGHLIGHTS.map((a, i) => (
                <div key={i} className="grid md:grid-cols-[1fr_2fr] gap-6 py-6 border-b border-[#e8dece] items-start">
                  <h4 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#3d3830] leading-snug">{a.title}</h4>
                  <p className="text-sm text-[#7a7068] leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo gallery */}
          <div className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-6">Architectural Renderings</p>
            <div className="grid grid-cols-6 gap-3">
              {RAM_GALLERY.map((img, i) => (
                <div
                  key={i}
                  className={`rounded-xl overflow-hidden cursor-zoom-in h-52 ${i < 3 ? "col-span-2" : "col-span-3"}`}
                  onClick={() => setLightbox(`${b}images/${img.src}`)}
                >
                  <img
                    src={`${b}images/${img.src}`}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-[#9a8f84] mt-3 text-center tracking-wide">Click any image to enlarge</p>
          </div>

          {/* What it will be */}
          <div className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">A Spiritual and Educational Landmark</p>
            <div className="h-px bg-[#e8dece] mb-0" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3">
              {[
                "A center for devotion",
                "A hub for Vedic knowledge",
                "A cultural preservation initiative",
                "A sacred architectural landmark",
                "A spiritual pilgrimage destination",
                "A symbol of science, spirituality, and culture",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-4 border-b border-[#e8dece] pr-6">
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="#b8892a" className="shrink-0">
                    <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z"/>
                  </svg>
                  <p className="font-['Cormorant_Garamond'] text-base font-semibold text-[#3d3830]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How to contribute — banner */}
          <div className="-mx-6 px-8 md:px-14 py-12 bg-[#2e2820]">

            {/* Top row: heading + CTA */}
            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
              <div className="flex-1">
                <h3 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#faf9f6] leading-snug mb-3">
                  Help Bring This Vision to Life
                </h3>
                <p className="text-sm text-[#9a8f84] leading-relaxed max-w-lg">
                  This temple is a gift to Nepal and to the world. Whether through expertise, cultural knowledge, or financial support, your contribution shapes something that will endure for centuries.
                </p>
              </div>
              <div className="shrink-0">
                <Link href="/contact">
                  <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm font-medium px-8 py-3.5 rounded-full tracking-widest transition-colors duration-200 cursor-pointer">
                    Support the Mission
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </Link>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 mb-8" />

            {/* Bottom row: three contribution types */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-1">
                <div className="rounded-xl overflow-hidden mb-4 h-40">
                  <img src={`${b}images/ram-expertise.png`} alt="Professional skills" className="w-full h-full object-cover" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4a843] font-semibold mb-1">Expertise</p>
                <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#e8dece] mb-2">Professional Skills</p>
                <p className="text-sm text-[#9a8f84] leading-relaxed">Architecture, engineering, construction, Vastu, design, and related professional fields.</p>
              </div>
              <div className="w-px bg-white/10 hidden md:block" />
              <div className="flex-1">
                <div className="rounded-xl overflow-hidden mb-4 h-40">
                  <img src={`${b}images/ram-culture.png`} alt="Cultural knowledge" className="w-full h-full object-cover" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4a843] font-semibold mb-1">Culture</p>
                <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#e8dece] mb-2">Cultural Knowledge</p>
                <p className="text-sm text-[#9a8f84] leading-relaxed">Documentation and contribution of Nepal's diverse cultural traditions and heritage.</p>
              </div>
              <div className="w-px bg-white/10 hidden md:block" />
              <div className="flex-1">
                <div className="rounded-xl overflow-hidden mb-4 h-40">
                  <img src={`${b}images/ram-finance.png`} alt="Financial support" className="w-full h-full object-cover" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4a843] font-semibold mb-1">Finance</p>
                <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#e8dece] mb-2">Financial Support</p>
                <p className="text-sm text-[#9a8f84] leading-relaxed">Monetary donations or in-kind support toward construction and development.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6 border-t border-[#e8dece] bg-[#f5ede0]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-['Cormorant_Garamond'] text-lg font-medium text-[#b8892a]">
            Mahayogi Siddhababa Spiritual Academy
          </span>
          <p className="text-xs text-[#9a8f84] text-center">A not-for-profit, volunteer-run organization — Nepal</p>
        </div>
      </footer>
    </div>
  );
}
