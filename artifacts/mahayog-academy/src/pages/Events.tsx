import { useState, type ComponentType } from "react";
import Nav from "@/components/Nav";
import { Link } from "wouter";
import { MapPin, Monitor, CalendarDays, Clock, ChevronRight, ArrowRight, Globe, List, LayoutGrid, ChevronLeft } from "lucide-react";

const b = import.meta.env.BASE_URL;

type EventKind = "all" | "festival" | "retreat" | "ekadashi" | "course" | "special";
type ViewMode = "list" | "calendar";

// ── DATA ──────────────────────────────────────────────────────────────────────

// Rich Academy events have full card details; compact calendar entries have compact:true.
type AnyEvent = {
  id: number;
  kind: EventKind;
  kindLabel: string;
  title: string;
  date: string;
  dateObj: Date | null;
  compact?: true;
  // Rich-only (absent on compact entries)
  subtitle?: string;
  recurring?: boolean;
  time?: string;
  location?: string;
  locationIcon?: ComponentType<{ size?: number; className?: string }>;
  img?: string;
  imgPos?: string;
  desc?: string;
  note?: string;
  cta?: { label: string; href: string };
};

const UPCOMING: AnyEvent[] = [
  {
    id: 3,
    kind: "special" as EventKind,
    kindLabel: "Special Event",
    recurring: true,
    title: "Guru Purnima Darshan Mahotsav",
    subtitle: "The Most Sacred Day of the Guru–Disciple Relationship",
    date: "29 July 2026",
    dateObj: new Date(2026, 6, 29),
    time: "All day · Ashram gates open at sunrise",
    location: "Guru Ashram, Nepal · Also livestreamed",
    locationIcon: Globe,
    img: "gurudev-darshan-congregation.jpg",
    imgPos: "object-top",
    desc: "Guru Purnima is the highest celebration of the Guru–disciple bond. Thousands gather at the ashram for puja, havan, collective chanting, and the rare opportunity for personal darshan with His Holiness.",
    note: "In-person attendance open to all sincere seekers.",
    cta: { label: "Plan Your Visit", href: "/ashram" },
  },
  {
    id: 5,
    kind: "course" as EventKind,
    kindLabel: "Course",
    recurring: true,
    title: "Himalayan Siddha Mahayog Course",
    subtitle: "5-Day Monthly Immersion · First Saturday of Every Month",
    date: "Monthly · First Saturday",
    dateObj: new Date(2026, 4, 2),
    time: "5 days · Starting each first Saturday",
    location: "Online, global access",
    locationIcon: Monitor,
    desc: "A five-day monthly intensive in the living practice of Himalayan Siddha Mahayog. Each cycle begins on the first Saturday of the month and guides participants through authentic meditation, pranayama, and self-inquiry under the guidance of senior teachers.",
    note: "Open to all. No prior experience needed.",
    cta: { label: "Enrol Now", href: "/mahayog-course" },
  },
  {
    id: 4,
    kind: "course" as EventKind,
    kindLabel: "Course",
    recurring: true,
    title: "Vedanta Philosophy Course",
    subtitle: "300 Hours · Online · Ongoing, Enrol Anytime",
    date: "Ongoing · Open enrolment",
    dateObj: new Date(2026, 4, 1),
    time: "Daily sessions via Zoom · ~1 hr / day",
    location: "Online, global access",
    locationIcon: Monitor,
    img: "cta-vedanta-study.png",
    imgPos: "object-center",
    desc: "A comprehensive 300-hour course in Advaita Vedanta studied alongside daily Himalayan Siddha Mahayog Meditation. Guided by His Holiness and senior faculty. Enrol at any time, the course is always open.",
    note: "Open to all backgrounds. No prior experience required.",
    cta: { label: "Enrol Now", href: "/vedanta" },
  },
  // ── Vedic Calendar 2026 ── compact entries (source: drikpanchang.com, NPT)
  // May
  { id: 100, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Apara Ekadashi",                    subtitle: "Sacred fast for the removal of sins and merit of ancestors",                                          date: "13 May 2026",  dateObj: new Date(2026, 4, 13) },
  { id: 101, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Padmini Ekadashi (Adhika)",          subtitle: "Rare Adhika Masa Ekadashi, especially auspicious for fasting and prayer",                           date: "27 May 2026",  dateObj: new Date(2026, 4, 27) },
  // June
  { id: 102, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Paramā Ekadashi (Adhika)",           subtitle: "Culminating Ekadashi of the Adhika (intercalary) month",                                            date: "11 Jun 2026",  dateObj: new Date(2026, 5, 11) },
  { id: 103, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Nirjala Ekadashi",                   subtitle: "The most potent Ekadashi, observed without water, conferring the merit of all Ekadashis",           date: "25 Jun 2026",  dateObj: new Date(2026, 5, 25) },
  // July
  { id: 104, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Yogini Ekadashi",                    subtitle: "Fasting this day is said to cure disease and purify accumulated karma",                              date: "11 Jul 2026",  dateObj: new Date(2026, 6, 11) },
  { id: 105, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Devshayani Ekadashi",                subtitle: "Lord Vishnu enters Yoga Nidra, the sacred Chaturmas begins",                                       date: "25 Jul 2026",  dateObj: new Date(2026, 6, 25) },
  // August
  { id: 106, compact: true, kind: "festival", kindLabel: "Festival",  title: "Hariyali Teej",                      subtitle: "Festival of Parvati, women fast, pray, and celebrate the arrival of the monsoon",                   date: "1 Aug 2026",   dateObj: new Date(2026, 7, 1)  },
  { id: 107, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Kamika Ekadashi",                    subtitle: "Ekadashi during Chaturmas, prayer and fasting carry exceptional merit",                            date: "9 Aug 2026",   dateObj: new Date(2026, 7, 9)  },
  { id: 108, compact: true, kind: "festival", kindLabel: "Festival",  title: "Nag Panchami",                       subtitle: "Ancient worship of the Naga deities, milk offerings and prayer for protection",                     date: "17 Aug 2026",  dateObj: new Date(2026, 7, 17) },
  { id: 109, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Shravana Putrada Ekadashi",          subtitle: "Auspicious for seeking divine blessings for progeny and family wellbeing",                          date: "23 Aug 2026",  dateObj: new Date(2026, 7, 23) },
  { id: 110, compact: true, kind: "festival", kindLabel: "Festival",  title: "Raksha Bandhan",                     subtitle: "The sacred bond of protection between siblings, blessed through mantra and prayer",                  date: "28 Aug 2026",  dateObj: new Date(2026, 7, 28) },
  // September
  { id: 111, compact: true, kind: "festival", kindLabel: "Festival",  title: "Krishna Janmashtami",                subtitle: "The divine appearance of Bhagwan Shri Krishna, midnight vigil, bhajan, and fasting",               date: "5 Sep 2026",   dateObj: new Date(2026, 8, 5)  },
  { id: 112, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Aja Ekadashi",                       subtitle: "Fasting on this day is said to free one from the cycle of rebirth",                                 date: "7 Sep 2026",   dateObj: new Date(2026, 8, 7)  },
  { id: 113, compact: true, kind: "festival", kindLabel: "Festival",  title: "Hartalika Teej",                     subtitle: "The most sacred fast of Parvati, observed for spiritual merit and marital harmony",                date: "13 Sep 2026",  dateObj: new Date(2026, 8, 13) },
  { id: 114, compact: true, kind: "festival", kindLabel: "Festival",  title: "Ganesh Chaturthi",                   subtitle: "The birth of Bhagwan Ganesha, puja, modak, and prayer for auspicious beginnings",                  date: "14 Sep 2026",  dateObj: new Date(2026, 8, 14) },
  { id: 115, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Parsva Ekadashi",                    subtitle: "Lord Vishnu turns in cosmic sleep, a sacred milestone midway through Chaturmas",                   date: "22 Sep 2026",  dateObj: new Date(2026, 8, 22) },
  // October
  { id: 116, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Indira Ekadashi",                    subtitle: "Observed for the liberation of ancestors, offerings and prayer for departed souls",                 date: "6 Oct 2026",   dateObj: new Date(2026, 9, 6)  },
  { id: 117, compact: true, kind: "festival", kindLabel: "Festival",  title: "Navaratri Begins",                   subtitle: "Nine nights of Shakti worship, the Goddess invoked in all her divine forms",                       date: "12 Oct 2026",  dateObj: new Date(2026, 9, 12) },
  { id: 118, compact: true, kind: "festival", kindLabel: "Festival",  title: "Saraswati Puja · Maha Navami",       subtitle: "Worship of the Goddess of wisdom and arts, the culminating night of Navaratri",                    date: "20 Oct 2026",  dateObj: new Date(2026, 9, 20) },
  { id: 119, compact: true, kind: "festival", kindLabel: "Festival",  title: "Vijayadashami",                      subtitle: "Victory of dharma over adharma, the tenth day; conclusion of Navaratri",                          date: "21 Oct 2026",  dateObj: new Date(2026, 9, 21) },
  { id: 120, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Papankusha Ekadashi",                subtitle: "Said to destroy the gravest sins, puja and fasting are especially recommended",                    date: "22 Oct 2026",  dateObj: new Date(2026, 9, 22) },
  { id: 121, compact: true, kind: "festival", kindLabel: "Festival",  title: "Sharad Purnima",                     subtitle: "Full moon of autumn, Lakshmi descends to earth; moonlit offerings and kirtan",                     date: "25 Oct 2026",  dateObj: new Date(2026, 9, 25) },
  // November
  { id: 122, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Rama Ekadashi",                      subtitle: "Ekadashi of the Diwali fortnight, deeply auspicious for worship and japa",                        date: "5 Nov 2026",   dateObj: new Date(2026, 10, 5) },
  { id: 123, compact: true, kind: "festival", kindLabel: "Festival",  title: "Dhanteras",                          subtitle: "Worship of Dhanvantari and Lakshmi, the first day of the Diwali celebration",                     date: "7 Nov 2026",   dateObj: new Date(2026, 10, 7) },
  { id: 124, compact: true, kind: "festival", kindLabel: "Festival",  title: "Lakshmi Puja · Diwali",              subtitle: "The festival of lights, Lakshmi puja, diyas lit across the land, and community joy",               date: "9 Nov 2026",   dateObj: new Date(2026, 10, 9) },
  { id: 125, compact: true, kind: "festival", kindLabel: "Festival",  title: "Govardhan Puja",                     subtitle: "Krishna's victory over Indra, worship of Govardhan and gratitude for divine grace",               date: "10 Nov 2026",  dateObj: new Date(2026, 10, 10)},
  { id: 126, compact: true, kind: "festival", kindLabel: "Festival",  title: "Kansa Vadh",                         subtitle: "Celebration of the Lord's liberation of the world from the tyrant Kansa",                          date: "19 Nov 2026",  dateObj: new Date(2026, 10, 19)},
  { id: 127, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Devutthana Ekadashi · Tulasi Vivah", subtitle: "Lord Vishnu awakens from Yoga Nidra; the sacred marriage of Tulasi and Shaligram is celebrated",  date: "21 Nov 2026",  dateObj: new Date(2026, 10, 21)},
  // December
  { id: 128, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Utpanna Ekadashi",                   subtitle: "The origin-Ekadashi, marking the appearance of the Ekadashi Devi",                               date: "4 Dec 2026",   dateObj: new Date(2026, 11, 4) },
  { id: 129, compact: true, kind: "festival", kindLabel: "Festival",  title: "Vivah Panchami",                     subtitle: "The sacred marriage of Bhagwan Rama and Sita, recitation of Manas and festive puja",             date: "14 Dec 2026",  dateObj: new Date(2026, 11, 14)},
  { id: 130, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Mokshada Ekadashi · Gita Jayanti",   subtitle: "The Bhagavad Gita was revealed on this day, the Ekadashi of liberation",                         date: "20 Dec 2026",  dateObj: new Date(2026, 11, 20)},
];

const MILESTONES = [
  {
    slug: "bhu-samadhi",
    year: "2008 · 2015 · 2017",
    title: "Bhu-Samadhi of Jagadguru Mahayogi Siddhababa",
    titleHtml: "<em>Bhu-Samadhi</em> of Jagadguru Mahayogi Siddhababa",
    img: "bhu-samadhi-1.jpg",
  },
  {
    slug: "tarak-brahma-mahayagya",
    year: "2019",
    title: "Shree Tarak Brahma Mahayagya",
    img: "tarak-brahma-mahayagya.jpg",
    imgPosition: "center 35%",
  },
  {
    slug: "covid-anusthan",
    year: "2021",
    title: "Himalayan Siddha Mahayog Anuṣṭhān (COVID-19)",
    img: "ashram-extra-sanyasi-river.jpg",
  },
  {
    slug: "atirudri-mahayagya",
    year: "2022",
    title: "Atirudri Mahayagya",
    img: "atirudri-mahayagya.jpg",
  },
  {
    slug: "ramarchan-mahayagya",
    year: "2023",
    title: "108 Ramarchan Mahayagya",
    img: "ramarchan-mahayagya.jpg",
  },
  {
    slug: "hanumad-mahayagya",
    year: "2024",
    title: "Sankat Mochan Shree Hanumad Mahayagya",
    img: "hanumad-mahayagya.jpg",
    overlayImg: "hanuman-ghost-bg.png",
  },
];

const KIND_LABELS: { value: EventKind; label: string }[] = [
  { value: "all",      label: "All" },
  { value: "special",  label: "Special Events" },
  { value: "retreat",  label: "Retreats" },
  { value: "festival", label: "Annual Festivals" },
  { value: "ekadashi", label: "Ekadashi" },
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

function CalendarView({ events }: { events: AnyEvent[] }) {
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
          {selectedEvents.map(ev => (
            <div key={ev.id}>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#b8892a] font-medium mb-1">{ev.kindLabel}</p>
              <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2c1a08] mb-1">{ev.title}</p>
              {ev.compact ? (
                <p className="text-xs text-[#7a6e5a]">{ev.date} · Nepal Standard Time</p>
              ) : (
                <>
                  <div className="flex flex-wrap gap-3 mb-2">
                    {ev.time && <span className="flex items-center gap-1 text-xs text-[#7a6e5a]"><Clock size={11} className="text-[#b8892a]" />{ev.time}</span>}
                    {ev.locationIcon && ev.location && (() => { const Icon = ev.locationIcon!; return <span className="flex items-center gap-1 text-xs text-[#7a6e5a]"><Icon size={11} className="text-[#b8892a]" />{ev.location}</span>; })()}
                  </div>
                  {ev.desc && <p className="text-sm text-[#5a5248] leading-relaxed mb-3">{ev.desc}</p>}
                  {ev.cta && (
                    <Link href={ev.cta.href}>
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#b8892a] hover:text-[#8a6420] font-medium cursor-pointer">
                        {ev.cta.label} <ArrowRight size={12} />
                      </span>
                    </Link>
                  )}
                </>
              )}
            </div>
          ))}
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

  const visible = filter === "all"
    ? UPCOMING.filter(e => e.kind !== "ekadashi")
    : UPCOMING.filter(e => e.kind === filter);

  // Accent colour per kind (left border of each row)
  const KIND_ACCENT: Record<EventKind, string> = {
    all:      "bg-[#e8dece]",
    retreat:  "bg-[#4a7a5a]",
    festival: "bg-[#b8892a]",
    ekadashi: "bg-[#c8a84a]/60",
    course:   "bg-[#6a5a9a]",
    special:  "bg-[#c06030]",
  };

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
          <div className="flex gap-3 overflow-x-auto pb-2 mb-8 scrollbar-hide">
            {KIND_LABELS.map(k => (
              <button
                key={k.value}
                onClick={() => setFilter(k.value)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-[0.14em] border-2 transition-all duration-200 cursor-pointer shadow-sm ${
                  filter === k.value
                    ? "bg-[#3d3020] text-white border-[#3d3020]"
                    : "bg-white text-[#6a5c48] border-[#d8cebb] hover:border-[#b8892a] hover:text-[#3d3020]"
                }`}>
                {k.label}
              </button>
            ))}
          </div>
        )}

        {/* List view, compact row layout, grouped by month */}
        {view === "list" && (() => {
          if (visible.length === 0) return (
            <div className="text-center py-16 text-[#9a8f84]">
              <p className="font-['Cormorant_Garamond'] text-2xl font-light">No events in this category right now.</p>
              <p className="text-sm mt-2">
                <button onClick={() => setFilter("all")} className="text-[#b8892a] underline cursor-pointer">View all events</button>
              </p>
            </div>
          );

          // Sort by date, then group by month
          const sorted = [...visible].sort((a, b) =>
            (a.dateObj?.getTime() ?? 0) - (b.dateObj?.getTime() ?? 0)
          );
          const monthMap = new Map<string, typeof visible>();
          const monthOrder: string[] = [];
          sorted.forEach(ev => {
            const mon = ev.dateObj
              ? ev.dateObj.toLocaleString("en-US", { month: "long", year: "numeric" })
              : (ev.date || "").split(" ").slice(-2).join(" ");
            if (!monthMap.has(mon)) { monthMap.set(mon, []); monthOrder.push(mon); }
            monthMap.get(mon)!.push(ev);
          });
          const groups = monthOrder.map(mon => ({ month: mon, items: monthMap.get(mon)! }));

          return (
            <div className="space-y-10">
              {groups.map(({ month, items }) => (
                <div key={month}>

                  {/* ── Month heading ── */}
                  <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#3d3020] mb-5">{month}</p>

                  {/* ── Cards ── */}
                  <div className="space-y-3">
                    {items.map(ev => {
                      const Icon = ev.locationIcon;
                      const dateNum = ev.dateObj ? ev.dateObj.getDate().toString() : (ev.date || "").split(" ")[0];
                      const dateMon = ev.dateObj
                        ? ev.dateObj.toLocaleString("en-US", { month: "short" }).toUpperCase()
                        : (ev.date || "").split(" ").slice(-2, -1)[0]?.slice(0, 3).toUpperCase() ?? "";
                      const isRich = !ev.compact;

                      // Shared badge colours by kind
                      const BADGE: Record<EventKind, string> = {
                        all:      "bg-[#b8892a]/12 text-[#7a5818]",
                        retreat:  "bg-[#3a6a48]/12 text-[#2a5038]",
                        festival: "bg-[#b85a18]/12 text-[#8a3808]",
                        ekadashi: "bg-[#b8892a]/12 text-[#7a5818]",
                        course:   "bg-[#5a4a88]/12 text-[#3a2a68]",
                        special:  "bg-[#c06030]/12 text-[#8a3810]",
                      };
                      const badge = BADGE[ev.kind];
                      const accent = KIND_ACCENT[ev.kind];

                      /* ── Featured card (rich Academy events), same size as compact tiles ── */
                      if (isRich) return (
                        <div key={ev.id}
                          className="rounded-xl overflow-hidden border border-[#c8b898] bg-white hover:border-[#a8884a] hover:shadow-md transition-all duration-200 flex items-stretch group">
                          {/* Date box, same as compact tiles */}
                          <div className="shrink-0 w-16 flex flex-col items-center justify-center py-5 px-2 border-r border-[#ece5d8]">
                            <span className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#2c1a08] leading-none">{dateNum}</span>
                            <span className="text-[10px] uppercase tracking-[0.15em] text-[#b8892a] font-semibold leading-none mt-1">{dateMon}</span>
                          </div>
                          {/* Content */}
                          <div className="flex-1 px-5 py-4 flex flex-col justify-center">
                            <p className="font-['Cormorant_Garamond'] text-2xl font-normal text-[#5c2d0a] leading-tight">
                              {ev.title}
                            </p>
                            {ev.subtitle && (
                              <p className="text-sm text-[#5c4e38] mt-1 leading-relaxed">{ev.subtitle}</p>
                            )}
                            {(ev.time || ev.location) && (
                              <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1.5">
                                {ev.time && (
                                  <span className="flex items-center gap-1 text-sm text-[#9a8f84]">
                                    <Clock size={12} className="text-[#b8892a]" />{ev.time}
                                  </span>
                                )}
                                {Icon && ev.location && (
                                  <span className="flex items-center gap-1 text-sm text-[#9a8f84]">
                                    <Icon size={12} className="text-[#b8892a]" />{ev.location}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                          {/* CTA button */}
                          {ev.cta && (
                            <div className="shrink-0 flex items-center pr-5 pl-2">
                              <Link href={ev.cta.href}>
                                <span className="inline-flex items-center gap-1.5 bg-[#b8892a] hover:bg-[#c9981f] text-white text-[11px] px-4 py-2 rounded-full tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-sm whitespace-nowrap">
                                  {ev.cta.label} <ArrowRight size={11} />
                                </span>
                              </Link>
                            </div>
                          )}
                        </div>
                      );

                      /* ── Calendar tile (compact ekadashi / festival) ── */
                      return (
                        <div key={ev.id}
                          className="rounded-xl overflow-hidden border border-[#c8b898] bg-white hover:border-[#a8884a] hover:shadow-md transition-all duration-200 flex items-stretch group">

                          {/* Date box */}
                          <div className="shrink-0 w-16 flex flex-col items-center justify-center py-5 px-2 border-r border-[#ece5d8]">
                            <span className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#2c1a08] leading-none">{dateNum}</span>
                            <span className="text-[10px] uppercase tracking-[0.15em] text-[#b8892a] font-semibold leading-none mt-1">{dateMon}</span>
                          </div>

                          {/* Text */}
                          <div className="flex-1 px-5 py-4 flex flex-col justify-center">
                            <p className="font-['Cormorant_Garamond'] text-2xl font-normal text-[#5c2d0a] leading-tight">
                              {ev.title}
                            </p>
                            {ev.subtitle && (
                              <p className="text-sm text-[#5c4e38] mt-1 leading-relaxed">{ev.subtitle}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          );
        })()}

        {/* Calendar view */}
        {view === "calendar" && <CalendarView events={UPCOMING} />}
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

      {/* ── HISTORIC MILESTONES ── */}
      <section className="bg-[#f0e8d8] py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-medium mb-4">A Legacy of Sacred Service</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#2c1a08] leading-snug mb-4">
              Historic Events
            </h2>
            <p className="text-[#6a5c48] text-base max-w-xl mx-auto leading-relaxed">
              Over the years, Jagadguru Mahayogi Siddhababa has presided over some of the most significant spiritual events in the lineage, grand Mahayagyas, collective anuṣṭhāns, and historic moments of grace.
            </p>
          </div>

          {/* Image card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MILESTONES.map(m => (
              <Link key={m.slug} href={`/events/historic/${m.slug}`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-xl block">
                {/* Background image */}
                <img
                  src={`${b}images/${m.img}`}
                  alt={m.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: m.imgPosition ?? "center" }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/60 group-hover:to-black/30 transition-all duration-300" />

                {/* Optional overlay image (screen blend = black becomes invisible) */}
                {m.overlayImg && (
                  <img
                    src={`${b}images/${m.overlayImg}`}
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none opacity-80 scale-150"
                    style={{ mixBlendMode: "screen", objectPosition: "75% center" }}
                  />
                )}

                {/* Year pill, top left */}
                <div className="absolute top-4 left-4 transition-opacity duration-300 group-hover:opacity-0">
                  <span className="font-['Cormorant_Garamond'] text-lg font-semibold text-white bg-[#b8892a]/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    {m.year}
                  </span>
                </div>

                {/* Content, bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <h3 className="font-['Cormorant_Garamond'] text-xl md:text-2xl font-light text-white leading-snug"
                    dangerouslySetInnerHTML={{ __html: m.titleHtml ?? m.title }} />
                  <span className="shrink-0 ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#e8c56a] text-xs uppercase tracking-widest font-medium">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
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
