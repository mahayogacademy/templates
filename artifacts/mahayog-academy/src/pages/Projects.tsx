import Nav from "@/components/Nav";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

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

export default function Projects() {
  return (
    <div className="bg-[#faf9f6] text-[#3d3830]">
      <Nav />

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

      {/* ── PROJECT 01: 108 HANUMAN TEMPLES ── */}
      <section className="py-24 px-6">
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
              <div>
                {HANUMAN_FEATURES.map((f, i) => (
                  <div key={i} className="flex gap-4 py-4 border-b border-[#e8dece] pl-3 border-l-2 border-l-[#b8892a]">
                    <span className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#b8892a] leading-none shrink-0 w-6 pt-0.5">{i + 1}</span>
                    <div>
                      <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#3d3830] leading-snug mb-1">{f.title}</p>
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
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#d4a843] font-semibold mb-3">Support This Mission</p>
                <h3 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#faf9f6] leading-snug mb-3">
                  Be Part of Building Something Sacred
                </h3>
                <p className="text-sm text-[#9a8f84] leading-relaxed max-w-lg">
                  Your gift becomes a lasting legacy—each temple a living center of prayer, learning, and community, rooted in dharma for generations to come.
                </p>
              </div>
              {/* Hanuman icon — sits between heading and button */}
              <div className="shrink-0 hidden md:block">
                <img
                  src={`${b}images/gadha-icon.png`}
                  alt="Gadha — Hanuman Ji's mace"
                  className="w-24 h-24 object-contain"
                />
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
          <div className="relative py-14 px-8 md:px-16 text-center overflow-hidden">
            <div className="absolute top-4 left-6 font-['Cormorant_Garamond'] text-8xl leading-none text-[#d4a843]/15 select-none">"</div>
            <div className="absolute bottom-0 right-6 font-['Cormorant_Garamond'] text-8xl leading-none text-[#d4a843]/15 select-none">"</div>
            <p className="relative font-['Cormorant_Garamond'] text-2xl md:text-3xl font-light italic text-[#3d3830] leading-relaxed max-w-2xl mx-auto mb-5">
              The body is temporary; it will pass. Let us leave behind something of lasting value that teaches sanskar and sanskriti to future generations.
            </p>
            <div className="h-px w-10 bg-[#b8892a]/50 mx-auto mb-4" />
            <cite className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-semibold not-italic">
              Jagadguru Mahayogi Siddhababa
            </cite>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-[#e8dece]" />
      </div>

      {/* ── PROJECT 02: RAM MANDIR ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Project header */}
          <div className="mb-14">
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
            <div className="h-px bg-[#e8dece] mb-8" />
            <p className="text-base text-[#5a5248] leading-relaxed max-w-3xl mb-4">
              A historic Ram Mandir will be built at Jagadguru Ramanadacharya Seva Peeth (Tarak Brahma Peeth), Chatara Dham — envisioned as a sacred replica of Dev Sabha, the divine assembly of the 33 koti devatas, with Lord Ram, Maa Sita and their divine family at the center.
            </p>
            <p className="text-base text-[#5a5248] leading-relaxed max-w-3xl">
              This temple will not only be a place of worship, but a living spiritual and cosmological experience — its architecture based on the structure of the universe as described in Vedic scripture and realized through the spiritual insight of Jagadguru Mahayogi Siddhababa. Visitors will journey through the temple as they would journey through creation itself.
            </p>
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
            <div className="mt-5 p-5 bg-[#fdf6ec] border border-[#e8dece] rounded-xl">
              <p className="text-xs text-[#9a8f84] mb-3 uppercase tracking-[0.2em] font-medium">The Four Yugas — Cycle of Time</p>
              <div className="flex flex-wrap gap-3">
                {YUGAS.map((y, i) => (
                  <span key={i} className="font-['Cormorant_Garamond'] text-base font-semibold text-[#5a5248] flex items-center gap-2">
                    {y}
                    {i < YUGAS.length - 1 && <span className="text-[#d4a843]/60 font-light">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Architectural highlights */}
          <div className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-6">Architectural Highlights</p>
            <div className="grid md:grid-cols-2 gap-5">
              {ARCH_HIGHLIGHTS.map((a, i) => (
                <div key={i} className="bg-white border border-[#e8dece] rounded-2xl p-6 hover:shadow-sm transition-shadow duration-200">
                  <div className="w-8 h-px bg-[#b8892a] mb-4" />
                  <h4 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#3d3830] mb-2 leading-snug">{a.title}</h4>
                  <p className="text-sm text-[#7a7068] leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What it will be */}
          <div className="bg-[#1a0f05] rounded-2xl px-10 py-10 mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#e8c56a] font-semibold mb-6">A Spiritual and Educational Landmark</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
              {[
                "A center for devotion",
                "A hub for Vedic knowledge",
                "A cultural preservation initiative",
                "A sacred architectural landmark",
                "A spiritual pilgrimage destination",
                "A symbol of science, spirituality, and culture",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#e8c56a] mt-1.5 shrink-0" />
                  <p className="text-sm text-[#f0e4c8]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How to contribute */}
          <div className="bg-[#f5ede0]/70 rounded-2xl p-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-6">How You Can Contribute</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#3d3830] mb-2">Expertise</h4>
                <p className="text-sm text-[#7a7068] leading-relaxed">Architecture, engineering, construction, Vastu, design, and related fields.</p>
              </div>
              <div>
                <h4 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#3d3830] mb-2">Cultural Knowledge</h4>
                <p className="text-sm text-[#7a7068] leading-relaxed">Documentation and contribution of Nepal's diverse cultural traditions and heritage.</p>
              </div>
              <div>
                <h4 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#3d3830] mb-2">Financial Support</h4>
                <p className="text-sm text-[#7a7068] leading-relaxed">Monetary donations or in-kind support toward construction and development.</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-[#e8dece]">
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 text-sm text-[#b8892a] font-medium hover:text-[#9d7422] transition-colors cursor-pointer">
                  Get in touch to support this initiative
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </Link>
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
