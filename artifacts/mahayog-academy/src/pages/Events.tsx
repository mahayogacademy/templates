import { useState } from "react";
import Nav from "@/components/Nav";
import { Link } from "wouter";
import { MapPin, Monitor, CalendarDays, Clock, ChevronRight, ArrowRight, Globe, List, LayoutGrid, ChevronLeft } from "lucide-react";

const b = import.meta.env.BASE_URL;

type EventKind = "all" | "festival" | "retreat" | "satsang" | "course";
type ViewMode = "list" | "calendar";

// ── DATA ──────────────────────────────────────────────────────────────────────

const UPCOMING = [
  {
    id: 1,
    kind: "satsang" as EventKind,
    kindLabel: "Weekly Satsang",
    recurring: true,
    title: "Sunday Online Satsang",
    subtitle: "Live Discourse & Meditation with His Holiness",
    date: "Every Sunday",
    dateObj: null as Date | null,
    time: "7:00 AM Nepal Time · 1:15 AM UTC",
    location: "Live via Zoom",
    locationIcon: Monitor,
    desc: "Each week, His Holiness Jagadguru Mahayogi Siddhababa leads a live online satsang: guided meditation, Vedic discourse, and direct transmission of grace — accessible to seekers across the globe.",
    note: "Open to registered programme participants.",
    cta: { label: "Register to Attend", href: "/register" },
    border: "border-[#e8dece]",
    bg: "bg-[#fdf8f0]",
  },
  {
    id: 2,
    kind: "retreat" as EventKind,
    kindLabel: "Retreat",
    recurring: false,
    title: "Himalayan Siddha Mahayog Retreat",
    subtitle: "Three-Day Immersion at the Guru Ashram",
    date: "7 – 9 June 2026",
    dateObj: new Date(2026, 5, 7),
    time: "Residential · Full board",
    location: "Guru Ashram, Barahachetra, Nepal",
    locationIcon: MapPin,
    desc: "An intensive three-day immersion at the foot of the Himalayas. Participants engage in morning and evening meditation sessions, Vedanta discourse, and personal time in the presence of His Holiness.",
    note: "Limited places. Early registration strongly advised.",
    cta: { label: "Register Now", href: "/register" },
    border: "border-[#ddd4c8]",
    bg: "bg-[#faf9f6]",
  },
  {
    id: 3,
    kind: "festival" as EventKind,
    kindLabel: "Annual Festival",
    recurring: true,
    title: "Guru Purnima Darshan Mahotsav",
    subtitle: "The Most Sacred Day of the Guru–Disciple Relationship",
    date: "10 July 2026",
    dateObj: new Date(2026, 6, 10),
    time: "All day · Ashram gates open at sunrise",
    location: "Guru Ashram, Nepal · Also livestreamed",
    locationIcon: Globe,
    desc: "Guru Purnima is the highest celebration of the Guru–disciple bond. Thousands gather at the ashram for puja, havan, collective chanting, and the rare opportunity for personal darshan with His Holiness.",
    note: "In-person attendance open to all sincere seekers.",
    cta: { label: "Plan Your Visit", href: "/ashram" },
    border: "border-[#e8d8b8]",
    bg: "bg-[#fdf6ec]",
  },
  {
    id: 4,
    kind: "course" as EventKind,
    kindLabel: "New Cohort",
    recurring: false,
    title: "Vedanta Philosophy Course — New Intake",
    subtitle: "300 Hours · Online · Begins September 2026",
    date: "Enrolment open · Starts 1 Sep 2026",
    dateObj: new Date(2026, 8, 1),
    time: "Daily sessions via Zoom · ~1 hr / day",
    location: "Online — global access",
    locationIcon: Monitor,
    desc: "A new cohort of the Academy's comprehensive 300-hour Vedanta Philosophy Course begins in September. Study Advaita Vedanta alongside daily Himalayan Siddha Mahayog Meditation, guided by His Holiness and senior faculty.",
    note: "Open to all backgrounds. No prior experience required.",
    cta: { label: "Enrol Now", href: "/vedanta" },
    border: "border-[#d0dac8]",
    bg: "bg-[#f7faf5]",
  },
  {
    id: 5,
    kind: "festival" as EventKind,
    kindLabel: "Annual Festival",
    recurring: true,
    title: "Navaratri Mahayagya & Havan",
    subtitle: "Nine Nights of Sacred Fire Ceremonies",
    date: "22 – 30 Sep 2026",
    dateObj: new Date(2026, 8, 22),
    time: "Morning & evening sessions",
    location: "Guru Ashram, Barahachetra, Nepal",
    locationIcon: MapPin,
    desc: "Nine sacred nights marked at the ashram by continuous havan, Devi puja, kirtan, and discourse. The Mahayagya — a grand fire ceremony — is conducted by Jagadguru Mahayogi Siddhababa on the final night.",
    note: "Residential accommodation available at the ashram.",
    cta: { label: "Contact the Ashram", href: "/contact" },
    border: "border-[#e8dece]",
    bg: "bg-[#fdf8f0]",
  },
];

const PAST = [
  {
    title: "Gurudev's Vardapan Mahotsav (Birthday Celebration)",
    date: "February 2026",
    location: "Ashram, Nepal & Online",
    summary: "Seekers worldwide gathered to offer blessings and prayers on the occasion of His Holiness's birthday — marked with puja, satsang, and Bhandara.",
  },
  {
    title: "Mahashivaratri — Rudra-Abhishek & Bhandara",
    date: "February 2026",
    location: "Local Centres & Ashram",
    summary: "An overnight vigil of Shiva puja, Rudra-Abhishek, chanting, and Bhandara at the ashram and affiliated centres globally.",
  },
  {
    title: "Ram Navami — Ramcharitmanas Parayan & Havan",
    date: "April 2026",
    location: "Guru Ashram, Nepal",
    summary: "The appearance of Bhagwan Shri Ram celebrated through nine-day Manas path, havan, Sundarkanda recitation, and prasad distribution.",
  },
  {
    title: "Guru Purnima Darshan Mahotsav 2025",
    date: "July 2025",
    location: "Guru Ashram, Nepal",
    summary: "Over two thousand seekers gathered for the annual Guru Purnima Mahotsav — the largest gathering of the year — with darshan, puja, and collective meditation.",
  },
  {
    title: "International Meditation Workshop",
    date: "January 2026",
    location: "Online · Zoom",
    summary: "A two-day intensive for international participants covering the foundations of Himalayan Siddha Mahayog — guided directly by His Holiness.",
  },
  {
    title: "Health Camp",
    date: "Recurring · Multiple dates",
    location: "Ashram & affiliated centres",
    summary: "Free holistic health camps offered to local communities — integrating Ayurvedic consultation, yoga, and meditation guidance as a form of sacred service (seva).",
  },
];

const MILESTONES = [
  {
    year: "2016",
    title: "Bhu-Samadhi of Pujya Nritya Gopal Das Ji Maharaj",
    desc: "The sacred passing (Bhu-Samadhi) of Jagadguru Mahayogi Siddhababa's own revered Guru — a pivotal moment in the lineage, observed with deep ceremony, Vedic rites, and collective grief and gratitude by thousands of disciples. His Holiness continues to carry forward this sacred mission.",
    badge: "Lineage",
  },
  {
    year: "2019",
    title: "Shree Tarak Brahma Mahayagya",
    desc: "A grand Mahayagya — one of the largest fire ceremonies conducted by the Academy — invoking the liberating grace of Tarak Brahma. Thousands of seekers participated across multiple days of continuous havan, kirtan, and satsang.",
    badge: "Mahayagya",
  },
  {
    year: "2021",
    title: "Himalayan Siddha Mahayog Anuṣṭhān (COVID-19)",
    desc: "In response to the global COVID-19 pandemic, Jagadguru Mahayogi Siddhababa led an extended collective anuṣṭhān — a sustained spiritual observance of prayer, mantra, havan, and meditation — invoking healing and protection for the world. Seekers across continents joined online.",
    badge: "Special Anuṣṭhān",
  },
  {
    year: "2022",
    title: "Atirudri Mahayagya",
    desc: "The Atirudri — one of the most elaborate and potent of all Vedic fire ceremonies, involving the recitation of the Shri Rudram eleven hundred and forty-four times — was conducted under the direct guidance of His Holiness, with Vedic pandits and thousands of participants.",
    badge: "Mahayagya",
  },
  {
    year: "2023",
    title: "108 Ramarchan Mahayagya",
    desc: "A monumental sacred ceremony involving 108 Ramarchan — the complete worship of Bhagwan Shri Ram — performed continuously across multiple days. This immense collective offering is considered especially auspicious for both personal liberation and the welfare of all beings.",
    badge: "Mahayagya",
  },
  {
    year: "2024",
    title: "Sankat Mochan Shree Hanumad Mahayagya",
    desc: "Dedicated to Lord Hanuman — the remover of all obstacles — this Mahayagya was conducted to invoke protection, strength, and liberation for seekers and the wider world. It included Sundarkanda path, Hanuman Chalisa, and extended havan rituals led by His Holiness.",
    badge: "Mahayagya",
  },
];

const KIND_LABELS: { value: EventKind; label: string }[] = [
  { value: "all",      label: "All Events" },
  { value: "satsang",  label: "Satsang" },
  { value: "retreat",  label: "Retreats" },
  { value: "festival", label: "Festivals" },
  { value: "course",   label: "Courses" },
];

const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAY_NAMES = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

// ── CALENDAR HELPERS ──────────────────────────────────────────────────────────

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

// ── SUB-COMPONENTS ────────────────────────────────────────────────────────────

function CalendarView({ events }: { events: typeof UPCOMING }) {
  const today = new Date(2026, 3, 29); // April 29 2026
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [selected, setSelected] = useState<number | null>(null);

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const eventsByDay: Record<number, typeof UPCOMING> = {};
  events.forEach(ev => {
    if (ev.dateObj && ev.dateObj.getFullYear() === viewYear && ev.dateObj.getMonth() === viewMonth) {
      const d = ev.dateObj.getDate();
      if (!eventsByDay[d]) eventsByDay[d] = [];
      eventsByDay[d].push(ev);
    }
  });

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
    setSelected(null);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
    setSelected(null);
  }

  const selectedEvents = selected ? (eventsByDay[selected] ?? []) : [];

  return (
    <div className="space-y-4">
      {/* Month header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="p-2 rounded-full hover:bg-[#f0e8d8] transition-colors cursor-pointer">
          <ChevronLeft size={18} className="text-[#7a6e5a]" />
        </button>
        <h3 className="font-['Cormorant_Garamond'] text-2xl font-light text-[#2c1a08]">
          {MONTH_NAMES[viewMonth]} {viewYear}
        </h3>
        <button onClick={nextMonth} className="p-2 rounded-full hover:bg-[#f0e8d8] transition-colors cursor-pointer">
          <ChevronRight size={18} className="text-[#7a6e5a]" />
        </button>
      </div>

      {/* Grid */}
      <div className="rounded-2xl border border-[#e8dece] overflow-hidden bg-white/60">
        <div className="grid grid-cols-7 border-b border-[#e8dece]">
          {DAY_NAMES.map(d => (
            <div key={d} className="py-2 text-center text-[10px] uppercase tracking-[0.15em] text-[#9a8f84] font-medium">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} className="h-16 border-b border-r border-[#f0ebe3] last:border-r-0" />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const hasEvent = !!eventsByDay[day];
            const isToday = viewYear === today.getFullYear() && viewMonth === today.getMonth() && day === today.getDate();
            const isSelected = selected === day;
            return (
              <div
                key={day}
                onClick={() => hasEvent ? setSelected(isSelected ? null : day) : undefined}
                className={`h-16 border-b border-r border-[#f0ebe3] last:border-r-0 p-1 flex flex-col items-center pt-2 transition-colors
                  ${hasEvent ? "cursor-pointer hover:bg-[#fdf6ec]" : ""}
                  ${isSelected ? "bg-[#fdf0d8]" : ""}
                `}
              >
                <span className={`text-sm w-7 h-7 flex items-center justify-center rounded-full font-medium transition-colors
                  ${isToday ? "bg-[#b8892a] text-white" : isSelected ? "text-[#b8892a]" : "text-[#5a5248]"}`}>
                  {day}
                </span>
                {hasEvent && (
                  <div className="flex gap-0.5 mt-1">
                    {eventsByDay[day].slice(0, 3).map((_, idx) => (
                      <div key={idx} className="w-1.5 h-1.5 rounded-full bg-[#b8892a]" />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Event detail popout */}
      {selected && selectedEvents.length > 0 && (
        <div className="rounded-xl border border-[#e8d8b8] bg-[#fdf6ec] p-5 space-y-3">
          {selectedEvents.map(ev => {
            const Icon = ev.locationIcon;
            return (
              <div key={ev.id}>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#b8892a] font-medium mb-1">{ev.kindLabel}</p>
                <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2c1a08] mb-1">{ev.title}</p>
                <div className="flex flex-wrap gap-3 mb-2">
                  <span className="flex items-center gap-1 text-xs text-[#7a6e5a]"><Clock size={11} className="text-[#b8892a]" />{ev.time}</span>
                  <span className="flex items-center gap-1 text-xs text-[#7a6e5a]"><Icon size={11} className="text-[#b8892a]" />{ev.location}</span>
                </div>
                <p className="text-sm text-[#5a5248] leading-relaxed mb-3">{ev.desc}</p>
                <Link href={ev.cta.href}>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#b8892a] hover:text-[#8a6420] font-medium cursor-pointer">
                    {ev.cta.label} <ArrowRight size={12} />
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      )}

      {/* No events this month notice */}
      {Object.keys(eventsByDay).length === 0 && (
        <p className="text-center text-[#9a8f84] text-sm py-4">No scheduled events this month. Check upcoming months.</p>
      )}
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function Events() {
  const [filter, setFilter] = useState<EventKind>("all");
  const [view, setView] = useState<ViewMode>("list");

  const visible = filter === "all" ? UPCOMING : UPCOMING.filter(e => e.kind === filter);

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
          <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
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
          In the Vedic tradition, communal spiritual practice, whether in person at the ashram or joined from afar, carries a power that solitary effort cannot replicate. When seekers come together in the presence of a realised Master, the field of grace intensifies for all.
        </p>
        <p className="text-[#5a5248] leading-relaxed text-base md:text-lg">
          The Academy hosts events across the year: satsangs, immersive retreats, ancient fire ceremonies (havan), observances (anuṣṭhān), social services and the great festivals of the Vedic calendar. All are held in the living spirit of the lineage.
        </p>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        {/* Section header + controls */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-4 flex-1">
            <p className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-medium whitespace-nowrap">Upcoming Events</p>
            <div className="flex-1 h-px bg-[#e8dece]" />
          </div>
          {/* View toggle */}
          <div className="flex items-center gap-1 bg-[#f0e8d8] rounded-full p-1">
            <button
              onClick={() => setView("list")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${view === "list" ? "bg-white text-[#3d3830] shadow-sm" : "text-[#7a6e5a] hover:text-[#3d3830]"}`}>
              <List size={13} /> List
            </button>
            <button
              onClick={() => setView("calendar")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${view === "calendar" ? "bg-white text-[#3d3830] shadow-sm" : "text-[#7a6e5a] hover:text-[#3d3830]"}`}>
              <LayoutGrid size={13} /> Calendar
            </button>
          </div>
        </div>

        {/* Filter tabs (list view only) */}
        {view === "list" && (
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
            {KIND_LABELS.map(k => (
              <button
                key={k.value}
                onClick={() => setFilter(k.value)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all duration-200 cursor-pointer ${
                  filter === k.value
                    ? "bg-[#b8892a] text-white shadow-sm"
                    : "text-[#7a6e5a] hover:text-[#3d3830] hover:bg-[#f0e8d8] bg-[#faf9f6] border border-[#e8dece]"
                }`}>
                {k.label}
              </button>
            ))}
          </div>
        )}

        {/* List view */}
        {view === "list" && (
          <div className="space-y-5">
            {visible.map(ev => {
              const Icon = ev.locationIcon;
              return (
                <div key={ev.id}
                  className={`rounded-2xl border ${ev.border} ${ev.bg} p-7 md:p-8 flex flex-col md:flex-row md:items-start gap-6`}>
                  <div className="shrink-0 flex flex-col items-center justify-center w-20 h-20 rounded-xl border border-[#d8cfc4] bg-white/70 text-center shadow-sm">
                    <CalendarDays size={18} className="text-[#b8892a] mb-1" />
                    <p className="font-['Cormorant_Garamond'] text-[10px] uppercase tracking-[0.12em] text-[#9a8f84] leading-none px-1">
                      {ev.recurring ? "Annual" : ev.date.split(" ")[0]}
                    </p>
                    <p className="font-['Cormorant_Garamond'] text-base font-semibold text-[#3d3830] leading-tight px-1">
                      {ev.dateObj ? ev.dateObj.getDate() : "—"}
                    </p>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-medium px-3 py-1 rounded-full bg-[#b8892a]/10 text-[#8a6420]">
                        {ev.kindLabel}
                      </span>
                      {ev.recurring && (
                        <span className="text-[10px] uppercase tracking-[0.15em] font-medium px-3 py-1 rounded-full bg-[#5a7a4a]/10 text-[#4a6a3a]">
                          Recurring
                        </span>
                      )}
                    </div>
                    <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-light text-[#2c1a08] leading-tight mb-1">
                      {ev.title}
                    </h3>
                    <p className="text-sm text-[#7a6e5a] italic mb-4">{ev.subtitle}</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 mb-4">
                      <span className="flex items-center gap-1.5 text-xs text-[#7a6e5a]">
                        <CalendarDays size={12} className="text-[#b8892a]" />{ev.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[#7a6e5a]">
                        <Clock size={12} className="text-[#b8892a]" />{ev.time}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[#7a6e5a]">
                        <Icon size={12} className="text-[#b8892a]" />{ev.location}
                      </span>
                    </div>
                    <p className="text-[#5a5248] text-sm leading-relaxed mb-2">{ev.desc}</p>
                    <p className="text-xs text-[#9a8f84] italic">{ev.note}</p>
                  </div>

                  <div className="shrink-0 flex items-start">
                    <Link href={ev.cta.href}>
                      <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#c9981f] text-white text-xs px-6 py-3 rounded-full tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-sm">
                        {ev.cta.label}<ArrowRight size={13} />
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
            {visible.length === 0 && (
              <div className="text-center py-16 text-[#9a8f84]">
                <p className="font-['Cormorant_Garamond'] text-2xl font-light">No events in this category right now.</p>
                <p className="text-sm mt-2">
                  <button onClick={() => setFilter("all")} className="text-[#b8892a] underline cursor-pointer">View all events</button>
                </p>
              </div>
            )}
          </div>
        )}

        {/* Calendar view */}
        {view === "calendar" && <CalendarView events={UPCOMING} />}
      </section>

      {/* ── TYPES OF EVENTS ── */}
      <section className="bg-[#f5ede0] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-medium mb-3">Throughout the Year</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#2c1a08]">What We Gather For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Weekly Satsang",    icon: "🪔", desc: "Live teachings and meditation every Sunday with His Holiness — via Zoom, open to registered participants worldwide." },
              { title: "Sacred Festivals",  icon: "🌕", desc: "Guru Purnima, Navaratri, Mahashivaratri, Ram Navami, and other Vedic celebrations marked with ceremony, discourse, and darshan." },
              { title: "Retreats",          icon: "🏔", desc: "Multi-day immersive retreats at the Guru Ashram in the Himalayas — combining intensive meditation, Vedanta study, and ashram life." },
              { title: "Yagya & Havan",     icon: "🔥", desc: "Ancient Vedic fire ceremonies conducted by Jagadguru Mahayogi Siddhababa — powerful rites of purification and collective blessing." },
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
        <img src={`${b}images/ashram-satsang.png`} alt="Seekers in collective satsang"
          className="absolute inset-0 w-full h-full object-cover object-center" />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PAST.map(p => (
            <div key={p.title} className="rounded-xl bg-[#fdf8f0] border border-[#e8dece] p-6">
              <div className="w-8 h-8 rounded-full bg-[#b8892a]/10 flex items-center justify-center mb-4">
                <CalendarDays size={14} className="text-[#b8892a]" />
              </div>
              <h4 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2c1a08] leading-snug mb-2">{p.title}</h4>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs text-[#9a8f84]">{p.date}</span>
                <span className="text-xs text-[#9a8f84]">· {p.location}</span>
              </div>
              <p className="text-sm text-[#5a5248] leading-relaxed">{p.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HISTORIC MILESTONES ── */}
      <section className="bg-[#1a0c03] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(184,137,42,0.12) 0%, transparent 60%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8892a]/40 to-transparent" />

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-medium mb-4">A Legacy of Sacred Service</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-white leading-snug mb-4">
              Historic Milestones
            </h2>
            <p className="text-[#a09080] text-base max-w-xl mx-auto leading-relaxed">
              Over the years, Jagadguru Mahayogi Siddhababa has presided over some of the most significant spiritual events in the lineage — grand Mahayagyas, collective anuṣṭhāns, and historic moments of grace.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#b8892a]/40 via-[#b8892a]/20 to-transparent" />

            <div className="space-y-10">
              {MILESTONES.map((m, i) => (
                <div key={m.year}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Year bubble — centered on line */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 z-10">
                    <div className="w-16 h-16 rounded-full border-2 border-[#b8892a]/60 bg-[#1a0c03] flex items-center justify-center shadow-lg"
                      style={{ boxShadow: "0 0 20px rgba(184,137,42,0.2)" }}>
                      <span className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#e8c56a]">{m.year}</span>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />

                  {/* Card */}
                  <div className={`ml-24 md:ml-0 flex-1 rounded-2xl border border-[#b8892a]/20 bg-white/5 p-7 backdrop-blur-sm
                    ${i % 2 === 0 ? "md:mr-10" : "md:ml-10"}`}>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-[#b8892a]/30 text-[#e8c56a] font-medium">
                        {m.badge}
                      </span>
                    </div>
                    <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-light text-white leading-snug mb-3">
                      {m.title}
                    </h3>
                    <p className="text-[#a09080] text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-24 px-6 overflow-hidden"
        style={{
          backgroundImage: `url(${b}images/quote-banner-bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(12,5,1,0.90) 0%, rgba(38,16,4,0.84) 50%, rgba(15,7,1,0.92) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(184,137,42,0.18) 0%, transparent 65%)" }} />
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
                Register for a Programme <ChevronRight size={15} />
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
