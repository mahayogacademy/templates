import Nav from "@/components/Nav";
import { Link } from "wouter";
import { MapPin, Monitor, CalendarDays, ChevronDown } from "lucide-react";
import { useState } from "react";

const b = import.meta.env.BASE_URL;

const WAYS = [
  {
    icon: MapPin,
    title: "In-Person Darshan",
    sub: "At the Ashram & Sacred Sites",
    desc: "Devotees and seekers are welcome to visit His Holiness at Jagadguru Ramanandacharya Seva Peeth in Baharachettra, Nepal — the head ashram where he resides and holds court. In-person darshan offers direct proximity, the opportunity for blessing, and immersion in the ashram's living spiritual atmosphere.",
    detail: "His Holiness also holds darshan at meditation centres and during sacred pilgrimages. Contact the ashram to confirm availability before visiting.",
    cta: { label: "Plan Your Visit", href: "/ashram" },
    bg: "bg-[#fdf8f0]",
    border: "border-[#e8dece]",
  },
  {
    icon: Monitor,
    title: "Online Satsang",
    sub: "Live via Zoom · Global Access",
    desc: "For seekers around the world who are unable to travel to Nepal, His Holiness extends his grace through live online satsangs. These sessions offer teachings, meditation guidance, and the experience of his presence — accessible from any corner of the world.",
    detail: "Online satsangs are held regularly and are open to registered participants of the Mahayog Meditation programme and the Vedanta Philosophy Course.",
    cta: { label: "Register for a Programme", href: "/register" },
    bg: "bg-[#faf9f6]",
    border: "border-[#e8dece]",
  },
  {
    icon: CalendarDays,
    title: "Sacred Events & Festivals",
    sub: "Yagyas, Celebrations & Special Gatherings",
    desc: "During sacred festivals, Yagyas (fire ceremonies), and special spiritual gatherings, His Holiness holds extended darshan for all present. These occasions carry a heightened collective energy and are considered especially auspicious for receiving blessings and deepening one's practice.",
    detail: "Events are announced through the Academy's channels. Contact us or follow our communications to stay informed of upcoming occasions.",
    cta: { label: "Contact Us", href: "/contact" },
    bg: "bg-[#fdf8f0]",
    border: "border-[#e8dece]",
  },
];

const ETIQUETTE = [
  { title: "Arrive in stillness", desc: "Take a few quiet breaths before entering the darshan space. Come with an open and receptive heart." },
  { title: "Dress respectfully", desc: "Modest, clean attire is appreciated — covering the shoulders and knees as a mark of reverence." },
  { title: "Silence your devices", desc: "Switch your phone to silent. The darshan space is held as sacred ground." },
  { title: "Bring a question or intention", desc: "If you wish to receive personal guidance, reflecting on your question beforehand helps the exchange go deeper." },
  { title: "Receive without agenda", desc: "Darshan is not always verbal. Sometimes the greatest transmission comes in silence. Trust what arises." },
];

const FAQS = [
  {
    q: "Do I need to be a registered student to attend darshan?",
    a: "For online satsangs, registration in one of the Academy's programmes is generally required. In-person darshan at the ashram is more open — sincere seekers of any background are welcome to visit, though it is advisable to contact the ashram in advance to confirm His Holiness's availability and schedule.",
  },
  {
    q: "Can I request a personal audience with His Holiness?",
    a: "Yes. Personal audiences are granted at His Holiness's discretion, guided by the sincerity and readiness of the seeker. To request a personal audience, please reach out through the Contact page with a brief note about your spiritual background and what you seek. The Academy team will respond and coordinate as circumstances allow.",
  },
  {
    q: "Is there a fee for darshan?",
    a: "No fee is charged for darshan. This is in keeping with the tradition that the grace of the Guru is not a commodity. Offerings of any kind are entirely voluntary and received in the spirit of gratitude.",
  },
  {
    q: "What language does His Holiness teach in?",
    a: "His Holiness primarily teaches in Nepali and Hindi. English interpretation or translation support is available for international seekers in many settings. Please indicate your language needs when registering or contacting us.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e0d5c4] last:border-0">
      <button
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-['Cormorant_Garamond'] text-lg font-light text-[#3d3830] group-hover:text-[#b8892a] transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#b8892a] shrink-0 mt-0.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          strokeWidth={1.5}
        />
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-sm text-[#5a5248] leading-relaxed whitespace-pre-line">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function GuruDarshan() {
  return (
    <div className="bg-[#faf9f6] text-[#3d3830]">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[65vh] min-h-[460px] flex items-center justify-center overflow-hidden">
        <img
          src={`${b}images/guru-hero-new.jpg`}
          alt="His Holiness Jagadguru Mahayogi Siddhababa"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0500]/75 via-[#1a0c03]/50 to-[#faf9f6]" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#e8c56a]" />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/>
            </svg>
            <div className="h-px w-12 bg-[#e8c56a]" />
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-light text-white leading-none mb-4">
            Guru Darshan
          </h1>
          <p className="text-base text-[#f0e4c8] tracking-widest uppercase font-light mb-8">
            The Grace of the Guru's Presence
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-medium mb-4">What is Darshan?</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] leading-tight mb-6">
              Experience the presence and blessings of His Holiness
            </h2>
            <p className="text-[#5a5248] leading-relaxed mb-5">
              In the Vedic and yogic traditions, <em>darshan</em> — from the Sanskrit <em>dṛś</em>, meaning "to see" — refers to the sacred experience of beholding a realized master. Yet darshan is not mere sight. It is a living transmission: an encounter in which the seeker, by virtue of proximity and receptivity, may receive the grace and inner influence of the Guru.
            </p>
            <p className="text-[#5a5248] leading-relaxed mb-5">
              Jagadguru Mahayogi Siddhababa is recognized as a Shaktipat Acharya, one who can awaken the dormant spiritual energy within a sincere seeker through glance, intention, or presence alone. His darshan is therefore considered a living opportunity for inner transformation, not simply a formal audience.
            </p>
            <p className="text-[#5a5248] leading-relaxed">
              Seekers from Nepal, India, and across the world come to receive his presence: in person at the ashram, through online satsangs, and during sacred events. All are welcome, regardless of tradition, background, or level of experience.
            </p>
          </div>

          {/* quote block */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-[#b8892a]/10">
              <img
                src={`${b}images/ashram-gurudev-seated.jpg`}
                alt="His Holiness Jagadguru Mahayogi Siddhababa seated in darshan"
                className="w-full h-72 object-cover object-top"
              />
            </div>
            <div className="mt-8 pl-6 border-l-2 border-[#b8892a]/40">
              <p className="font-['Cormorant_Garamond'] text-xl italic font-light text-[#4a4038] leading-relaxed mb-3">
                "The Guru does not give you something from outside. He reveals what is already present within you, the infinite light that has always been your true nature."
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#b8892a] font-medium">
                — Jagadguru Mahayogi Siddhababa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE WAYS ── */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, #f5ede0 0%, #ede3cf 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-medium mb-3">How to Receive</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830]">
              Three Pathways to Darshan
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {WAYS.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className={`rounded-2xl border ${w.border} ${w.bg} p-7 flex flex-col`}>
                  <div className="w-10 h-10 rounded-full bg-[#b8892a]/10 flex items-center justify-center mb-5 shrink-0">
                    <Icon className="w-5 h-5 text-[#b8892a]" strokeWidth={1.5} />
                  </div>
                  <p className="font-['Cormorant_Garamond'] text-xl font-light text-[#3d3830] mb-1">{w.title}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#b8892a] font-medium mb-4">{w.sub}</p>
                  <p className="text-sm text-[#5a5248] leading-relaxed mb-4 flex-1">{w.desc}</p>
                  <p className="text-xs text-[#7a6e64] italic leading-relaxed mb-5">{w.detail}</p>
                  <Link href={w.cta.href}>
                    <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#b8892a] hover:text-[#9d7422] font-medium transition-colors cursor-pointer">
                      {w.cta.label}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── IMAGE BREAK ── */}
      <section className="relative h-72 overflow-hidden">
        <img
          src={`${b}images/guru-blessing.jpg`}
          alt="His Holiness offering blessings"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0c03]/70 via-transparent to-[#1a0c03]/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-white text-center max-w-xl px-6"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
            "Seek the Guru not with the eyes, but with an open and sincere heart."
          </p>
        </div>
      </section>

      {/* ── ETIQUETTE ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-medium mb-4">Before You Arrive</p>
              <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] leading-tight mb-4">
                Preparing to Receive
              </h2>
              <p className="text-[#5a5248] leading-relaxed mb-10">
                Darshan is most deeply received when the seeker arrives in a spirit of openness and quiet. A few simple preparations can help you make the most of the encounter.
              </p>

              <div className="space-y-7">
                {ETIQUETTE.map((e, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#b8892a]/12 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="font-['Cormorant_Garamond'] text-xs text-[#b8892a] font-semibold">{i + 1}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#3d3830] mb-1">{e.title}</p>
                      <p className="text-sm text-[#6a6258] leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-lg shadow-[#b8892a]/8">
                <img
                  src={`${b}images/guru-teachings.jpg`}
                  alt="His Holiness in discourse"
                  className="w-full h-64 object-cover object-top"
                />
              </div>
              <div className="rounded-xl bg-[#fdf6ec] border border-[#e8dece] p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[#b8892a] font-medium mb-3">A Note on Grace</p>
                <p className="text-sm text-[#5a5248] leading-relaxed">
                  Darshan is ultimately an act of grace — it is not something that can be forced or engineered. Come as you are. The sincerity of your presence matters far more than outward formality. His Holiness receives all seekers with equal compassion, regardless of where they are on the path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, #ede3cf 0%, #e8dcc8 100%)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-medium mb-3">Common Questions</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830]">
              Frequently Asked
            </h2>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#e0d5c4] px-8 py-2">
            {FAQS.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-24 px-6 overflow-hidden"
        style={{
          backgroundImage: `url(${b}images/jagadguru-1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(12,5,1,0.88) 0%, rgba(38,16,4,0.82) 50%, rgba(15,7,1,0.90) 100%)" }}
        />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(184,137,42,0.18) 0%, transparent 65%)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8892a]/50 to-transparent" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-14 bg-[#e8c56a]/30" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/>
            </svg>
            <div className="h-px w-14 bg-[#e8c56a]/30" />
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight mb-4"
            style={{ textShadow: "0 0 40px rgba(212,160,48,0.3), 0 2px 20px rgba(0,0,0,0.6)" }}
          >
            Seek the Guru's Guidance
          </h2>
          <p className="text-[#c8b08a] text-base leading-relaxed mb-10 max-w-md mx-auto">
            Whether you are a long-time practitioner or taking your first step on the spiritual path, His Holiness welcomes all who come with sincerity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#d4a030] text-white text-sm px-9 py-4 rounded-full tracking-widest transition-all duration-300 cursor-pointer"
                style={{ boxShadow: "0 0 30px rgba(184,137,42,0.3), 0 4px 20px rgba(0,0,0,0.4)" }}
              >
                Request Darshan
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </Link>
            <Link href="/register">
              <span className="inline-flex items-center gap-2 border border-[#e8c56a]/50 text-[#e8c56a] hover:bg-[#e8c56a]/10 text-sm px-9 py-4 rounded-full tracking-widest transition-all duration-300 cursor-pointer">
                Join a Programme
              </span>
            </Link>
          </div>
          <p className="text-[#7a6248] text-xs mt-6 tracking-wide">Open to all seekers · No prior experience required</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6 border-t border-[#e8dece] bg-[#f5ede0]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-['Cormorant_Garamond'] text-lg font-medium text-[#b8892a]">
            Mahayogi Siddhababa Spiritual Academy
          </span>
          <div className="flex items-center gap-6">
            <Link href="/about">
              <span className="text-sm text-[#7a7068] hover:text-[#b8892a] transition-colors cursor-pointer">About the Academy</span>
            </Link>
            <span className="text-sm text-[#7a7068]">·</span>
            <p className="text-xs text-[#9a8f84]">A not-for-profit, volunteer-run organization — Nepal</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
