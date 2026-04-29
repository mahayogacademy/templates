import { useState, type ComponentType } from "react";
import Nav from "@/components/Nav";
import { Link } from "wouter";
import { MapPin, Monitor, CalendarDays, Clock, ChevronRight, ArrowRight, Globe, List, LayoutGrid, ChevronLeft } from "lucide-react";

const b = import.meta.env.BASE_URL;

type EventKind = "all" | "festival" | "retreat" | "ekadashi" | "course";
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
    id: 2,
    kind: "retreat",
    kindLabel: "Retreat",
    recurring: false,
    title: "Himalayan Siddha Mahayog Retreat",
    subtitle: "Three-Day Immersion at the Guru Ashram",
    date: "7 – 9 June 2026",
    dateObj: new Date(2026, 5, 7),
    time: "Residential · Full board",
    location: "Guru Ashram, Barahachetra, Nepal",
    locationIcon: MapPin,
    img: "ashram-koshi-river.jpg",
    imgPos: "object-center",
    desc: "An intensive three-day immersion at the foot of the Himalayas. Participants engage in morning and evening meditation sessions, Vedanta discourse, and personal time in the presence of His Holiness.",
    note: "Limited places. Early registration strongly advised.",
    cta: { label: "Register Now", href: "/register" },
  },
  {
    id: 3,
    kind: "festival" as EventKind,
    kindLabel: "Annual Festival",
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
    id: 4,
    kind: "course" as EventKind,
    kindLabel: "New Cohort",
    recurring: false,
    title: "Vedanta Philosophy Course — New Intake",
    subtitle: "300 Hours · Online · Begins September 2026",
    date: "Starts 1 Sep 2026",
    dateObj: new Date(2026, 8, 1),
    time: "Daily sessions via Zoom · ~1 hr / day",
    location: "Online — global access",
    locationIcon: Monitor,
    img: "cta-vedanta-study.png",
    imgPos: "object-center",
    desc: "A new cohort of the Academy's comprehensive 300-hour Vedanta Philosophy Course begins in September. Study Advaita Vedanta alongside daily Himalayan Siddha Mahayog Meditation, guided by His Holiness and senior faculty.",
    note: "Open to all backgrounds. No prior experience required.",
    cta: { label: "Enrol Now", href: "/vedanta" },
  },
  // ── Vedic Calendar 2026 ── compact entries (source: drikpanchang.com, NPT)
  // May
  { id: 100, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Apara Ekadashi",                    date: "13 May 2026",  dateObj: new Date(2026, 4, 13) },
  { id: 101, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Padmini Ekadashi (Adhika)",          date: "27 May 2026",  dateObj: new Date(2026, 4, 27) },
  // June
  { id: 102, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Paramā Ekadashi (Adhika)",           date: "11 Jun 2026",  dateObj: new Date(2026, 5, 11) },
  { id: 103, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Nirjala Ekadashi",                   date: "25 Jun 2026",  dateObj: new Date(2026, 5, 25) },
  // July
  { id: 104, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Yogini Ekadashi",                    date: "11 Jul 2026",  dateObj: new Date(2026, 6, 11) },
  { id: 105, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Devshayani Ekadashi",                date: "25 Jul 2026",  dateObj: new Date(2026, 6, 25) },
  // August
  { id: 106, compact: true, kind: "festival", kindLabel: "Festival",  title: "Hariyali Teej",                      date: "1 Aug 2026",   dateObj: new Date(2026, 7, 1)  },
  { id: 107, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Kamika Ekadashi",                    date: "9 Aug 2026",   dateObj: new Date(2026, 7, 9)  },
  { id: 108, compact: true, kind: "festival", kindLabel: "Festival",  title: "Nag Panchami",                       date: "17 Aug 2026",  dateObj: new Date(2026, 7, 17) },
  { id: 109, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Shravana Putrada Ekadashi",          date: "23 Aug 2026",  dateObj: new Date(2026, 7, 23) },
  { id: 110, compact: true, kind: "festival", kindLabel: "Festival",  title: "Raksha Bandhan",                     date: "28 Aug 2026",  dateObj: new Date(2026, 7, 28) },
  // September
  { id: 111, compact: true, kind: "festival", kindLabel: "Festival",  title: "Krishna Janmashtami",                date: "5 Sep 2026",   dateObj: new Date(2026, 8, 5)  },
  { id: 112, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Aja Ekadashi",                       date: "7 Sep 2026",   dateObj: new Date(2026, 8, 7)  },
  { id: 113, compact: true, kind: "festival", kindLabel: "Festival",  title: "Hartalika Teej",                     date: "13 Sep 2026",  dateObj: new Date(2026, 8, 13) },
  { id: 114, compact: true, kind: "festival", kindLabel: "Festival",  title: "Ganesh Chaturthi",                   date: "14 Sep 2026",  dateObj: new Date(2026, 8, 14) },
  { id: 115, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Parsva Ekadashi",                    date: "22 Sep 2026",  dateObj: new Date(2026, 8, 22) },
  // October
  { id: 116, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Indira Ekadashi",                    date: "6 Oct 2026",   dateObj: new Date(2026, 9, 6)  },
  { id: 117, compact: true, kind: "festival", kindLabel: "Festival",  title: "Navaratri Begins",                   date: "12 Oct 2026",  dateObj: new Date(2026, 9, 12) },
  { id: 118, compact: true, kind: "festival", kindLabel: "Festival",  title: "Saraswati Puja · Maha Navami",       date: "20 Oct 2026",  dateObj: new Date(2026, 9, 20) },
  { id: 119, compact: true, kind: "festival", kindLabel: "Festival",  title: "Vijayadashami",                      date: "21 Oct 2026",  dateObj: new Date(2026, 9, 21) },
  { id: 120, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Papankusha Ekadashi",                date: "22 Oct 2026",  dateObj: new Date(2026, 9, 22) },
  { id: 121, compact: true, kind: "festival", kindLabel: "Festival",  title: "Sharad Purnima",                     date: "25 Oct 2026",  dateObj: new Date(2026, 9, 25) },
  // November
  { id: 122, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Rama Ekadashi",                      date: "5 Nov 2026",   dateObj: new Date(2026, 10, 5) },
  { id: 123, compact: true, kind: "festival", kindLabel: "Festival",  title: "Dhanteras",                          date: "7 Nov 2026",   dateObj: new Date(2026, 10, 7) },
  { id: 124, compact: true, kind: "festival", kindLabel: "Festival",  title: "Lakshmi Puja · Diwali",              date: "9 Nov 2026",   dateObj: new Date(2026, 10, 9) },
  { id: 125, compact: true, kind: "festival", kindLabel: "Festival",  title: "Govardhan Puja",                     date: "10 Nov 2026",  dateObj: new Date(2026, 10, 10)},
  { id: 126, compact: true, kind: "festival", kindLabel: "Festival",  title: "Kansa Vadh",                         date: "19 Nov 2026",  dateObj: new Date(2026, 10, 19)},
  { id: 127, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Devutthana Ekadashi · Tulasi Vivah", date: "21 Nov 2026",  dateObj: new Date(2026, 10, 21)},
  // December
  { id: 128, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Utpanna Ekadashi",                   date: "4 Dec 2026",   dateObj: new Date(2026, 11, 4) },
  { id: 129, compact: true, kind: "festival", kindLabel: "Festival",  title: "Vivah Panchami",                     date: "14 Dec 2026",  dateObj: new Date(2026, 11, 14)},
  { id: 130, compact: true, kind: "ekadashi", kindLabel: "Ekadashi",  title: "Mokshada Ekadashi · Gita Jayanti",   date: "20 Dec 2026",  dateObj: new Date(2026, 11, 20)},
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
    img: "bhu-samadhi-1.jpg",
  },
  {
    year: "2019",
    title: "Shree Tarak Brahma Mahayagya",
    desc: "A grand Mahayagya — one of the largest fire ceremonies conducted by the Academy — invoking the liberating grace of Tarak Brahma. Thousands of seekers participated across multiple days of continuous havan, kirtan, and satsang.",
    badge: "Mahayagya",
    img: "gurudev-darshan-congregation.jpg",
  },
  {
    year: "2021",
    title: "Himalayan Siddha Mahayog Anuṣṭhān (COVID-19)",
    desc: "In response to the global COVID-19 pandemic, Jagadguru Mahayogi Siddhababa led an extended collective anuṣṭhān — a sustained spiritual observance of prayer, mantra, havan, and meditation — invoking healing and protection for the world. Seekers across continents joined online.",
    badge: "Special Anuṣṭhān",
    img: "ashram-extra-sanyasi-river.jpg",
  },
  {
    year: "2022",
    title: "Atirudri Mahayagya",
    desc: "The Atirudri — one of the most elaborate and potent of all Vedic fire ceremonies, involving the recitation of the Shri Rudram eleven hundred and forty-four times — was conducted under the direct guidance of His Holiness, with Vedic pandits and thousands of participants.",
    badge: "Mahayagya",
    img: "ashram-extra-river-diyas.jpg",
  },
  {
    year: "2023",
    title: "108 Ramarchan Mahayagya",
    desc: "A monumental sacred ceremony involving 108 Ramarchan — the complete worship of Bhagwan Shri Ram — performed continuously across multiple days. This immense collective offering is considered especially auspicious for both personal liberation and the welfare of all beings.",
    badge: "Mahayagya",
    img: "ram-mandir-1.jpg",
  },
  {
    year: "2024",
    title: "Sankat Mochan Shree Hanumad Mahayagya",
    desc: "Dedicated to Lord Hanuman — the remover of all obstacles — this Mahayagya was conducted to invoke protection, strength, and liberation for seekers and the wider world. It included Sundarkanda path, Hanuman Chalisa, and extended havan rituals led by His Holiness.",
    badge: "Mahayagya",
    img: "ashram-hanuman-wide.jpg",
  },
];

const KIND_LABELS: { value: EventKind; label: string }[] = [
  { value: "all",      label: "All" },
  { value: "retreat",  label: "Retreats" },
  { value: "festival", label: "Festivals" },
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

  const visible = filter === "all" ? UPCOMING : UPCOMING.filter(e => e.kind === filter);

  // Default background images for compact calendar entries, rotated by id
  const EKADASHI_IMGS = ["ashram-koshi-river.jpg", "ashram-life-satsang.png", "ashram-extra-sanyasi-river.jpg"];
  const FESTIVAL_IMGS  = ["ashram-extra-river-diyas.jpg", "congregation.jpg", "ram-mandir-1.jpg"];

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

        {/* List view — unified card for every event */}
        {view === "list" && (
          <div className="space-y-3">
            {visible.map(ev => {
              const Icon = ev.locationIcon;
              // Resolve image: rich events have their own; compact entries cycle through defaults
              const imgSrc = ev.img
                || (ev.kind === "ekadashi"
                  ? EKADASHI_IMGS[(ev.id - 100) % EKADASHI_IMGS.length]
                  : FESTIVAL_IMGS[(ev.id - 100) % FESTIVAL_IMGS.length]);
              const imgPos = ev.imgPos || "object-center";
              const dateParts = (ev.date || "").split(" ");
              const dateDay    = dateParts[0] ?? "";
              const dateMonYr  = dateParts.slice(-2).join(" ");

              return (
                <div key={ev.id}
                  className="rounded-xl overflow-hidden border border-[#e8dece] bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row">
                  {/* Image panel — compact */}
                  <div className="relative sm:w-40 md:w-52 shrink-0 h-36 sm:h-auto overflow-hidden">
                    <img src={`${b}images/${imgSrc}`} alt={ev.title}
                      className={`w-full h-full object-cover ${imgPos} transition-transform duration-500 hover:scale-105`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-black/10" />
                    {/* Date badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1.5 text-center shadow-sm min-w-[3rem]">
                      <p className="font-['Cormorant_Garamond'] text-[9px] uppercase tracking-[0.12em] text-[#9a8f84] leading-none mb-0.5">{dateMonYr}</p>
                      <p className="font-['Cormorant_Garamond'] text-sm font-semibold text-[#2c1a08] leading-none">{dateDay}</p>
                    </div>
                    {ev.recurring && !ev.compact && (
                      <div className="absolute bottom-3 left-3 bg-[#4a6a3a]/80 text-white text-[9px] uppercase tracking-[0.12em] px-2 py-0.5 rounded-full font-medium">Annual</div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 px-5 py-4 flex flex-col justify-between min-h-[7rem]">
                    <div>
                      <span className="inline-block text-[9px] uppercase tracking-[0.2em] font-medium px-2.5 py-0.5 rounded-full bg-[#b8892a]/10 text-[#8a6420] mb-2">
                        {ev.kindLabel}
                      </span>
                      <h3 className="font-['Cormorant_Garamond'] text-xl md:text-2xl font-light text-[#2c1a08] leading-snug mb-1">
                        {ev.title}
                      </h3>
                      {ev.subtitle && (
                        <p className="text-xs text-[#7a6e5a] italic mb-2">{ev.subtitle}</p>
                      )}
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
                        <span className="flex items-center gap-1 text-[11px] text-[#7a6e5a]">
                          <CalendarDays size={11} className="text-[#b8892a]" />{ev.date}
                        </span>
                        {ev.time && (
                          <span className="flex items-center gap-1 text-[11px] text-[#7a6e5a]">
                            <Clock size={11} className="text-[#b8892a]" />{ev.time}
                          </span>
                        )}
                        {Icon && ev.location && (
                          <span className="flex items-center gap-1 text-[11px] text-[#7a6e5a]">
                            <Icon size={11} className="text-[#b8892a]" />{ev.location}
                          </span>
                        )}
                      </div>
                      {ev.desc && (
                        <p className="text-[#5a5248] text-xs leading-relaxed">{ev.desc}</p>
                      )}
                      {ev.note && (
                        <p className="text-[11px] text-[#9a8f84] italic mt-1">{ev.note}</p>
                      )}
                    </div>
                    {ev.cta && (
                      <div className="mt-3 pt-3 border-t border-[#f0ebe3]">
                        <Link href={ev.cta.href}>
                          <span className="inline-flex items-center gap-1.5 bg-[#b8892a] hover:bg-[#c9981f] text-white text-[10px] px-5 py-2 rounded-full tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-sm">
                            {ev.cta.label} <ArrowRight size={11} />
                          </span>
                        </Link>
                      </div>
                    )}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
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
      <section className="bg-[#120800] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(184,137,42,0.10) 0%, transparent 55%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8892a]/40 to-transparent" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-medium mb-4">A Legacy of Sacred Service</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-white leading-snug mb-4">
              Historic Milestones
            </h2>
            <p className="text-[#a09080] text-base max-w-xl mx-auto leading-relaxed">
              Over the years, Jagadguru Mahayogi Siddhababa has presided over some of the most significant spiritual events in the lineage — grand Mahayagyas, collective anuṣṭhāns, and historic moments of grace.
            </p>
          </div>

          {/* Image card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MILESTONES.map(m => (
              <div key={m.year}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-default shadow-xl">
                {/* Background image */}
                <img
                  src={`${b}images/${m.img}`}
                  alt={m.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay — darker at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 transition-all duration-300" />

                {/* Year pill — top left */}
                <div className="absolute top-4 left-4">
                  <span className="font-['Cormorant_Garamond'] text-sm font-semibold text-white bg-[#b8892a]/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    {m.year}
                  </span>
                </div>

                {/* Badge — top right */}
                <div className="absolute top-4 right-4">
                  <span className="text-[9px] uppercase tracking-[0.18em] text-[#e8c56a] border border-[#e8c56a]/40 px-2.5 py-1 rounded-full font-medium bg-black/30 backdrop-blur-sm">
                    {m.badge}
                  </span>
                </div>

                {/* Content — bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-['Cormorant_Garamond'] text-xl md:text-2xl font-light text-white leading-snug mb-2">
                    {m.title}
                  </h3>
                  {/* Description slides up on hover */}
                  <p className="text-[#c8b8a0] text-xs leading-relaxed max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500 ease-in-out">
                    {m.desc}
                  </p>
                </div>
              </div>
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
