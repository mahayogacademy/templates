import Nav from "@/components/Nav";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Flame, Leaf, Moon, Sun, Wind, Droplets } from "lucide-react";

const b = import.meta.env.BASE_URL;

const PURPOSES = [
  {
    icon: Flame,
    title: "Protection for the Healthy",
    body: "Strengthen the body's natural defences through Vedic discipline, yogic practice, and Ayurvedic nourishment — creating an inner environment inhospitable to disease.",
  },
  {
    icon: Leaf,
    title: "Healing for the Unwell",
    body: "Channel the purifying energy of collective mantra, pranayama, and medicinal herbs to support recovery and restore balance to those already afflicted.",
  },
  {
    icon: Sun,
    title: "Preservation of Life",
    body: "Uphold the sanctity of life during a time of collective fear and uncertainty — offering a calm, grounded daily structure rooted in timeless Vedic wisdom.",
  },
];

const PILLARS = [
  {
    label: "Right Diet",
    desc: "Moderate, sattvic food prepared with immune-supportive spices — turmeric, ginger, black pepper, cloves, and herbs drawn from the Ayurvedic tradition. Avoiding stimulants, meat, and heavy foods that tax the system.",
  },
  {
    label: "Right Routine",
    desc: "Waking at brahma muhurta (90 minutes before sunrise), morning purification, sun exposure and fresh air, regular yogasana and pranayama, and timely rest — reestablishing the body's natural rhythms.",
  },
  {
    label: "Self-Discipline",
    desc: "Celibacy, silence, minimising electronic devices, avoiding gossip and violence of speech — cultivating the inner stillness that makes the body and mind receptive to healing.",
  },
];

const GUIDELINES = [
  "Rise at brahma muhurta — approximately 90 minutes before sunrise — and drink water immediately upon waking.",
  "Purify through daily bathing, yogasana, and pranayama as guided in the live program.",
  "Follow the daily menu and Ayurvedic food protocols for the full 15 days.",
  "Observe celibacy and reduce all non-essential activity and conversation.",
  "Wear a clean mask even within the home; wash hands frequently with soap.",
  "Avoid leaving the home except in genuine necessity.",
  "Minimise use of electronic devices outside of the daily live program.",
  "Refrain from sour, heavy, or fried food throughout the anusthan period.",
  "Do not share food or utensils with other household members.",
];

const KEY_HERBS = [
  "Turmeric (1 kg)", "Ginger (500 g)", "Neem leaves (500 g)", "Tulsi / Holy Basil (200 g)",
  "Gurjo / Giloy (500 g)", "Amla / Gooseberry (500 g)", "Black pepper (200 g)", "Cloves (200 g)",
  "Cardamom (200 g)", "Cinnamon (200 g)", "Fenugreek (250 g)", "Cumin seeds (250 g)",
  "Pippali / Long pepper (200 g)", "Harro / Haritaki (500 g)", "Aloe vera (3 kg)",
];

export default function CovidAnusthanDetail() {
  return (
    <div className="min-h-screen bg-[#faf9f6] font-['Inter']">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${b}images/covid-anusthan-hero.png`}
            alt="Himalayan Siddha Mahayog Anusthan"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/70 via-[#2c1a08]/40 to-[#faf9f6]" />
        </div>
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#e8c56a]/60" />
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/60" />
          </div>
          <p className="text-[#e8c56a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Nepal · May–June 2020 · Global Response</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight">
            Himalayan Siddha Mahayog Anuṣṭhān
          </h1>
          <p className="text-[#f0e4c8] text-base tracking-widest uppercase font-light mt-4">
            15 Days of Vedic Practice Against COVID-19
          </p>
        </div>
      </section>

      {/* ── BACK LINK ── */}
      <div className="bg-[#faf9f6] border-b border-[#e8dece] px-6 py-3">
        <div className="max-w-5xl mx-auto">
          <Link href="/events">
            <span className="inline-flex items-center gap-2 text-sm text-[#7a6e5a] hover:text-[#b8892a] transition-colors cursor-pointer font-medium">
              <ArrowLeft size={15} />
              Back to Events
            </span>
          </Link>
        </div>
      </div>

      {/* ── STATS BANNER ── */}
      <section className="bg-[#1a0c03] py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "15", label: "Days of Practice" },
            { value: "5–7 AM", label: "Daily Program (NPT)" },
            { value: "26 May – 11 Jun", label: "Anusthan Period" },
            { value: "Live", label: "YouTube Broadcast" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[#e8c56a] font-light whitespace-nowrap">{value}</p>
              <p className="text-white/60 text-xs uppercase tracking-wider mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTEXT ── */}
      <section className="bg-[#faf9f6] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-[#e8dece]" />
            <p className="text-xs uppercase tracking-[0.3em] text-[#b8892a] font-medium whitespace-nowrap">The Anusthan</p>
            <div className="h-px flex-1 bg-[#e8dece]" />
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#2c1a08] leading-snug mb-8 text-center">
            A Vedic Response to a Global Crisis
          </h2>
          <div className="space-y-5 text-[#4a3f32] text-base leading-[1.9]">
            <p>
              In the spring of 2020, Nepal and the world faced an unprecedented public health emergency. As governments imposed lockdowns and hospitals strained under pressure, Jagadguru Mahayogi Siddhababa turned to what the Vedic tradition has always offered in times of collective affliction: a structured, disciplined <em>anusthan</em> — a ceremonial programme of inner and outer purification.
            </p>
            <p>
              The Himalayan Siddha Mahayog Anusthan was not a retreat from the crisis but an active engagement with it. Drawing on the Vedic understanding that disease arises from imbalance — physical, energetic, and spiritual — Siddhababa offered a 15-day protocol that addressed all three dimensions simultaneously: Ayurvedic diet and herbs for the body, pranayama and yogasana for the vital energy, and mantra, celibacy, and silence for the mind and spirit.
            </p>
            <p>
              Broadcast live each morning from 5 to 7 AM Nepal Standard Time on the <em>Himalayan Siddha Mahayog</em> YouTube channel, the programme reached thousands of households across Nepal and around the world — families following the practice in their own homes, guided daily by Siddhababa's instructions.
            </p>
            <p className="text-[#6a5c48] italic border-l-2 border-[#b8892a]/40 pl-4">
              The entire program was conducted in accordance with the directives of the World Health Organization and the policies of the Government of Nepal — a modern response grounded in ancient knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* ── THREE PURPOSES ── */}
      <section className="bg-[#f4ede0] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b8892a] font-medium mb-3">Purpose of the Anusthan</p>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#2c1a08] leading-snug">
              Three Intentions, One Practice
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PURPOSES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white/70 rounded-2xl border border-[#d8cebb] p-8 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#f4ede0] border border-[#d8cebb] flex items-center justify-center mb-5">
                  <Icon size={18} className="text-[#b8892a]" />
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-xl text-[#2c1a08] font-light mb-3 leading-snug">{title}</h3>
                <p className="text-[#6a5c48] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="bg-[#faf9f6] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b8892a] font-medium mb-3">Daily Practice</p>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#2c1a08] leading-snug">
              The Three Pillars
            </h2>
            <p className="text-[#6a5c48] text-base mt-4 max-w-xl mx-auto leading-relaxed">
              Each day of the anusthan was structured around three interlocking disciplines — inseparable and mutually reinforcing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map(({ label, desc }, i) => (
              <div key={label} className="relative rounded-2xl border border-[#e8dece] bg-white/50 p-8 shadow-sm">
                <div className="absolute top-0 left-8 -translate-y-1/2 bg-[#b8892a] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {i + 1}
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-2xl text-[#2c1a08] font-light mb-3">{label}</h3>
                <p className="text-[#6a5c48] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YOUTUBE PLAYLIST ── */}
      <section className="bg-[#f4ede0] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b8892a] font-medium mb-3">Watch the Program</p>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#2c1a08] leading-snug">
              The Full 15-Day Anusthan
            </h2>
            <p className="text-[#6a5c48] text-base mt-4 max-w-xl mx-auto leading-relaxed">
              Every session of the live program is archived and available in full. Watch Jagadguru Mahayogi Siddhababa's daily teachings and guided practice from May 26 to June 11, 2020.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLVoaXKRxO25oK0Qr2_YCdhZpzj0FXvG6b"
              title="Himalayan Siddha Mahayog COVID-19 Anusthan Playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <p className="text-center text-sm text-[#8a7860] mt-4 italic">
            Full playlist · Himalayan Siddha Mahayog YouTube Channel · 15 sessions
          </p>
        </div>
      </section>

      {/* ── GUIDELINES ── */}
      <section className="bg-[#faf9f6] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#b8892a] font-medium mb-4">Participant Guidelines</p>
              <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#2c1a08] leading-snug mb-6">
                Rules for the Anusthan Period
              </h2>
              <p className="text-[#6a5c48] text-base leading-relaxed mb-8">
                The full benefit of the anusthan depends on wholehearted commitment during the 15-day period. Participants were asked to observe the following daily disciplines as demonstrated in the live program.
              </p>
              <ul className="space-y-3">
                {GUIDELINES.map((rule, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 w-5 h-5 rounded-full border border-[#b8892a]/50 bg-[#f4ede0] flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b8892a]" />
                    </span>
                    <p className="text-[#4a3f32] text-sm leading-relaxed">{rule}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Herbs image + list */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={`${b}images/covid-anusthan-herbs.png`}
                  alt="Ayurvedic herbs and spices used in the anusthan"
                  className="w-full object-cover"
                />
              </div>
              <div className="rounded-2xl border border-[#d8cebb] bg-[#f4ede0] p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[#b8892a] font-medium mb-4">Key Herbs &amp; Materials</p>
                <div className="flex flex-wrap gap-2">
                  {KEY_HERBS.map(herb => (
                    <span
                      key={herb}
                      className="text-xs text-[#4a3f32] bg-white/70 border border-[#e8dece] rounded-full px-3 py-1"
                    >
                      {herb}
                    </span>
                  ))}
                </div>
                <p className="text-[#8a7860] text-xs mt-4 italic leading-relaxed">
                  Quantities shown are approximate guidelines per family of 3–5 persons for the full 15-day period. Participants were encouraged to use what was available to them locally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING QUOTE ── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <img
          src={`${b}images/covid-anusthan-hero.png`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="w-12 h-px bg-[#b8892a]/70 mx-auto mb-8" />
          <p className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-[#f0e8d8] font-light italic leading-relaxed mb-8">
            "Throughout history, the Vedic tradition has responded to plague and disease not with fear, but with knowledge — systematic, tested, and rooted in the understanding of the whole human being. This anusthan is our offering to the world in that spirit."
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-[#e8c56a] font-medium mb-8">— Jagadguru Mahayogi Siddhababa</p>
          <div className="w-12 h-px bg-[#b8892a]/70 mx-auto" />
        </div>
      </section>

      {/* ── FOOTER NAV ── */}
      <section className="bg-[#faf9f6] py-12 px-6 border-t border-[#e8dece]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link href="/events#historic"
            className="inline-flex items-center gap-2 text-sm text-[#8a7860] hover:text-[#b8892a] transition-colors">
            <ArrowLeft size={14} />
            All Historic Events
          </Link>
          <Link href="/events/historic/atirudri-mahayagya"
            className="sm:ml-auto inline-flex items-center gap-2 text-sm text-[#8a7860] hover:text-[#b8892a] transition-colors">
            Next: Atirudri Mahayagya
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
