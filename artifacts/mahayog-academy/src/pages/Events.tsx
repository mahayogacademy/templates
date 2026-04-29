import { useState } from "react";
import Nav from "@/components/Nav";
import { Link } from "wouter";
import { MapPin, Monitor, CalendarDays, Clock, ChevronRight, ArrowRight, Globe } from "lucide-react";

const b = import.meta.env.BASE_URL;

type EventKind = "all" | "festival" | "retreat" | "satsang" | "course";

const UPCOMING = [
  {
    id: 1,
    kind: "satsang" as EventKind,
    kindLabel: "Weekly Satsang",
    title: "Sunday Online Satsang",
    subtitle: "Live Discourse & Meditation with His Holiness",
    date: "Every Sunday",
    time: "7:00 AM Nepal Time · 1:15 AM UTC",
    location: "Live via Zoom",
    locationIcon: Monitor,
    desc: "Each week, His Holiness Jagadguru Mahayogi Siddhababa leads a live online satsang: guided meditation, Vedic discourse, and direct transmission of grace — accessible to seekers across the globe.",
    note: "Open to registered programme participants.",
    cta: { label: "Register to Attend", href: "/register" },
    accent: "#b8892a",
    bg: "bg-[#fdf8f0]",
    border: "border-[#e8dece]",
  },
  {
    id: 2,
    kind: "retreat" as EventKind,
    kindLabel: "Retreat",
    title: "Himalayan Siddha Mahayog Retreat",
    subtitle: "Three-Day Immersion at the Guru Ashram",
    date: "7 – 9 June 2026",
    time: "Residential · Full board",
    location: "Guru Ashram, Barahachetra, Nepal",
    locationIcon: MapPin,
    desc: "An intensive three-day immersion at the foot of the Himalayas. Participants engage in morning and evening meditation sessions, Vedanta discourse, sacred Koshi riverbank walks, and personal time in the presence of His Holiness.",
    note: "Limited places. Early registration strongly advised.",
    cta: { label: "Register Now", href: "/register" },
    accent: "#7a6e5a",
    bg: "bg-[#faf9f6]",
    border: "border-[#ddd4c8]",
  },
  {
    id: 3,
    kind: "festival" as EventKind,
    kindLabel: "Sacred Festival",
    title: "Guru Purnima Darshan Mahotsav",
    subtitle: "The Most Sacred Day of the Guru–Disciple Relationship",
    date: "10 July 2026",
    time: "All day · Ashram gates open at sunrise",
    location: "Guru Ashram, Barahachetra, Nepal · Also livestreamed",
    locationIcon: Globe,
    desc: "Guru Purnima is the highest celebration of the Guru–disciple bond. Thousands gather at the ashram for puja, havan, collective chanting, and the rare opportunity for personal darshan with His Holiness. Those unable to attend in person may join the livestream.",
    note: "In-person attendance open to all sincere seekers.",
    cta: { label: "Plan Your Visit", href: "/ashram" },
    accent: "#c07820",
    bg: "bg-[#fdf6ec]",
    border: "border-[#e8d8b8]",
  },
  {
    id: 4,
    kind: "course" as EventKind,
    kindLabel: "New Cohort",
    title: "Vedanta Philosophy Course — New Intake",
    subtitle: "300 Hours · Online · Begins September 2026",
    date: "Enrolment open now · Starts 1 September 2026",
    time: "Daily sessions via Zoom · ~1 hr / day",
    location: "Online — global access",
    locationIcon: Monitor,
    desc: "A new cohort of the Academy's comprehensive 300-hour Vedanta Philosophy Course begins in September. Study the foundational texts of Advaita Vedanta alongside daily Himalayan Siddha Mahayog Meditation practice — guided by His Holiness and senior faculty.",
    note: "Open to all backgrounds. No prior experience required.",
    cta: { label: "Enrol Now", href: "/vedanta" },
    accent: "#6a7a5a",
    bg: "bg-[#f7faf5]",
    border: "border-[#d0dac8]",
  },
  {
    id: 5,
    kind: "festival" as EventKind,
    kindLabel: "Sacred Festival",
    title: "Navaratri Mahayagya & Havan",
    subtitle: "Nine Nights of Sacred Fire Ceremonies",
    date: "22 – 30 September 2026",
    time: "Morning & evening sessions",
    location: "Guru Ashram, Barahachetra, Nepal",
    locationIcon: MapPin,
    desc: "The nine sacred nights of Navaratri are marked at the ashram by continuous havan, Devi puja, kirtan, and discourse. The Mahayagya, a grand fire ceremony, is conducted by Jagadguru Mahayogi Siddhababa on the final night — a profoundly auspicious occasion for inner purification.",
    note: "Residential accommodation available at the ashram.",
    cta: { label: "Contact the Ashram", href: "/contact" },
    accent: "#b8892a",
    bg: "bg-[#fdf8f0]",
    border: "border-[#e8dece]",
  },
];

const PAST = [
  {
    title: "Mahashivaratri Celebration 2026",
    date: "February 2026",
    location: "Guru Ashram, Nepal",
    summary: "An overnight vigil of chanting, meditation, and Shiva puja. Several hundred seekers gathered from across Nepal and abroad.",
  },
  {
    title: "International Meditation Workshop",
    date: "January 2026",
    location: "Online · Zoom",
    summary: "A two-day intensive for international participants covering the foundations of Himalayan Siddha Mahayog — guided directly by His Holiness.",
  },
  {
    title: "Ram Navami Celebration",
    date: "April 2026",
    location: "Guru Ashram, Nepal",
    summary: "Celebration of the appearance of Bhagwan Shri Ram, marked with Ramayan recitation, havan, prasad distribution, and satsang.",
  },
  {
    title: "Guru Purnima 2025",
    date: "July 2025",
    location: "Guru Ashram, Nepal",
    summary: "Over two thousand seekers gathered for the annual Guru Purnima Mahotsav — the largest gathering of the year at the ashram.",
  },
];

const KIND_LABELS: { value: EventKind; label: string }[] = [
  { value: "all",      label: "All Events" },
  { value: "satsang",  label: "Satsang" },
  { value: "retreat",  label: "Retreats" },
  { value: "festival", label: "Festivals" },
  { value: "course",   label: "Courses" },
];

export default function Events() {
  const [filter, setFilter] = useState<EventKind>("all");

  const visible = filter === "all"
    ? UPCOMING
    : UPCOMING.filter(e => e.kind === filter);

  return (
    <div className="min-h-screen bg-[#faf9f6] font-['Inter']">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src={`${b}images/gurudev-darshan-congregation.jpg`}
          alt="Seekers gathered for a sacred event with His Holiness"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0500]/80 via-[#1a0c03]/55 to-[#faf9f6]" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-14 bg-[#e8c56a]/50" />
            <p className="text-[#e8c56a] text-xs uppercase tracking-[0.3em] font-medium">Mahayogi Siddhababa Spiritual Academy</p>
            <div className="h-px w-14 bg-[#e8c56a]/50" />
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light text-white leading-tight mb-6"
            style={{ textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}>
            Sacred Gatherings<br /><em className="italic font-extralight">&amp; Events</em>
          </h1>
          <p className="text-[#d4bfa0] text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
            Join seekers from around the world at satsangs, festivals, retreats, and sacred ceremonies throughout the year.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-medium mb-4">The Living Tradition</p>
        <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#2c1a08] leading-snug mb-6">
          Every Gathering is an Occasion for Grace
        </h2>
        <p className="text-[#5a5248] leading-relaxed text-base md:text-lg mb-4">
          In the Vedic tradition, communal spiritual practice — whether in person at the ashram or joined from afar — carries a power that solitary effort cannot replicate. When seekers come together in the presence of a realised Master, the field of grace intensifies for all.
        </p>
        <p className="text-[#5a5248] leading-relaxed text-base md:text-lg">
          The Academy hosts events across the year: weekly satsangs, immersive retreats, ancient fire ceremonies, and the great festivals of the Vedic calendar. All are held in the living spirit of the lineage.
        </p>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="sticky top-[64px] z-30 bg-[#faf9f6]/95 backdrop-blur-sm border-b border-[#e8dece]">
        <div className="max-w-5xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {KIND_LABELS.map(k => (
            <button
              key={k.value}
              onClick={() => setFilter(k.value)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all duration-200 cursor-pointer ${
                filter === k.value
                  ? "bg-[#b8892a] text-white shadow-sm"
                  : "text-[#7a6e5a] hover:text-[#3d3830] hover:bg-[#f0e8d8]"
              }`}
            >
              {k.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-medium">Upcoming</p>
          <div className="flex-1 h-px bg-[#e8dece]" />
        </div>

        <div className="space-y-6">
          {visible.map(ev => {
            const Icon = ev.locationIcon;
            return (
              <div key={ev.id}
                className={`rounded-2xl border ${ev.border} ${ev.bg} p-7 md:p-8 flex flex-col md:flex-row md:items-start gap-6`}>
                {/* Left: date badge */}
                <div className="shrink-0 flex flex-col items-center justify-center w-20 h-20 rounded-xl border border-[#d8cfc4] bg-white/70 text-center shadow-sm">
                  <CalendarDays size={18} className="text-[#b8892a] mb-1" />
                  <p className="font-['Cormorant_Garamond'] text-[10px] uppercase tracking-[0.15em] text-[#9a8f84] leading-none">
                    {ev.kind === "satsang" ? "Weekly" : ev.date.split(" ")[ev.date.includes("–") ? 2 : 1]}
                  </p>
                  <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#3d3830] leading-tight">
                    {ev.kind === "satsang" ? "Sun" : ev.date.split(" ")[0]}
                  </p>
                </div>

                {/* Middle: content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium px-3 py-1 rounded-full bg-[#b8892a]/10 text-[#8a6420]">
                      {ev.kindLabel}
                    </span>
                  </div>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-light text-[#2c1a08] leading-tight mb-1">
                    {ev.title}
                  </h3>
                  <p className="text-sm text-[#7a6e5a] italic mb-4">{ev.subtitle}</p>

                  <div className="flex flex-wrap gap-x-5 gap-y-1 mb-4">
                    <span className="flex items-center gap-1.5 text-xs text-[#7a6e5a]">
                      <CalendarDays size={12} className="text-[#b8892a]" />
                      {ev.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-[#7a6e5a]">
                      <Clock size={12} className="text-[#b8892a]" />
                      {ev.time}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-[#7a6e5a]">
                      <Icon size={12} className="text-[#b8892a]" />
                      {ev.location}
                    </span>
                  </div>

                  <p className="text-[#5a5248] text-sm leading-relaxed mb-3">{ev.desc}</p>
                  <p className="text-xs text-[#9a8f84] italic">{ev.note}</p>
                </div>

                {/* Right: CTA */}
                <div className="shrink-0 flex items-start">
                  <Link href={ev.cta.href}>
                    <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#c9981f] text-white text-xs px-6 py-3 rounded-full tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-sm">
                      {ev.cta.label}
                      <ArrowRight size={13} />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {visible.length === 0 && (
          <div className="text-center py-16 text-[#9a8f84]">
            <p className="font-['Cormorant_Garamond'] text-2xl font-light">No events in this category right now.</p>
            <p className="text-sm mt-2">Check back soon or <button onClick={() => setFilter("all")} className="text-[#b8892a] underline cursor-pointer">view all events</button>.</p>
          </div>
        )}
      </section>

      {/* ── TYPES OF EVENTS ── */}
      <section className="bg-[#f5ede0] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-medium mb-3">Throughout the Year</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#2c1a08]">
              What We Gather For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Weekly Satsang",
                icon: "🪔",
                desc: "Live teachings and meditation every Sunday with His Holiness — via Zoom, open to registered participants worldwide.",
              },
              {
                title: "Sacred Festivals",
                icon: "🌕",
                desc: "Guru Purnima, Navaratri, Mahashivaratri, Ram Navami, and other Vedic celebrations marked with ceremony, discourse, and darshan.",
              },
              {
                title: "Retreats",
                icon: "🏔",
                desc: "Multi-day immersive retreats at the Guru Ashram in the Himalayas — combining intensive meditation, Vedanta study, and ashram life.",
              },
              {
                title: "Yagya & Havan",
                icon: "🔥",
                desc: "Ancient Vedic fire ceremonies conducted by Jagadguru Mahayogi Siddhababa — powerful rites of purification and collective blessings.",
              },
            ].map(c => (
              <div key={c.title}
                className="bg-white/60 border border-[#e8dece] rounded-2xl p-7 text-center hover:shadow-md hover:bg-white/90 transition-all duration-300">
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2c1a08] mb-3">{c.title}</h3>
                <p className="text-[#5a5248] text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE BREAK ── */}
      <section className="relative h-64 overflow-hidden">
        <img
          src={`${b}images/ashram-satsang.png`}
          alt="Seekers in collective satsang"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0c03]/70 via-[#1a0c03]/40 to-[#1a0c03]/70" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-light text-white text-center max-w-2xl"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
            "Where seekers gather with sincerity, the presence of the Guru is never absent."
          </p>
        </div>
      </section>

      {/* ── PAST EVENTS ── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#7a6e5a] font-medium">Recent Gatherings</p>
          <div className="flex-1 h-px bg-[#e8dece]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PAST.map(p => (
            <div key={p.title}
              className="rounded-xl bg-[#fdf8f0] border border-[#e8dece] p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-[#b8892a]/10 flex items-center justify-center">
                  <CalendarDays size={14} className="text-[#b8892a]" />
                </div>
                <div>
                  <h4 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2c1a08] leading-snug mb-1">
                    {p.title}
                  </h4>
                  <div className="flex flex-wrap gap-3 mb-2">
                    <span className="text-xs text-[#9a8f84]">{p.date}</span>
                    <span className="text-xs text-[#9a8f84]">·</span>
                    <span className="text-xs text-[#9a8f84]">{p.location}</span>
                  </div>
                  <p className="text-sm text-[#5a5248] leading-relaxed">{p.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-24 px-6 overflow-hidden"
        style={{
          backgroundImage: `url(${b}images/quote-banner-bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(12,5,1,0.90) 0%, rgba(38,16,4,0.84) 50%, rgba(15,7,1,0.92) 100%)" }}
        />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(184,137,42,0.18) 0%, transparent 65%)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8892a]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8892a]/30 to-transparent" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-14 bg-[#e8c56a]/30" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/>
            </svg>
            <div className="h-px w-14 bg-[#e8c56a]/30" />
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight mb-4"
            style={{ textShadow: "0 0 40px rgba(212,160,48,0.3), 0 2px 20px rgba(0,0,0,0.6)" }}>
            Stay Connected
          </h2>
          <p className="text-[#c8b08a] text-base leading-relaxed mb-10 max-w-md mx-auto">
            Register for a programme to receive invitations to satsangs and events, or contact the Academy to learn about upcoming gatherings near you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#d4a030] text-white text-sm px-9 py-4 rounded-full tracking-widest transition-all duration-300 cursor-pointer"
                style={{ boxShadow: "0 0 30px rgba(184,137,42,0.3), 0 4px 20px rgba(0,0,0,0.4)" }}>
                Register for a Programme
                <ChevronRight size={15} />
              </span>
            </Link>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 border border-[#e8c56a]/40 hover:border-[#e8c56a]/70 text-[#e8c56a] text-sm px-9 py-4 rounded-full tracking-widest transition-all duration-300 cursor-pointer">
                Contact the Academy
              </span>
            </Link>
          </div>
          <p className="text-[#7a6248] text-xs mt-6 tracking-wide">Open to all seekers · All traditions welcome</p>
        </div>
      </section>
    </div>
  );
}
