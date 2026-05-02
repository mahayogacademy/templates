import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronDown, ArrowRight } from "lucide-react";
import FloatingRegisterButton from "@/components/FloatingRegisterButton";

const b = import.meta.env.BASE_URL;

const OUTLINE = [
  { title: "Introduction",           lectures: 4,  desc: "Begin your journey with an overview of Vedanta's main concepts and historical context." },
  { title: "Pancha Sanskar",         lectures: 9,  desc: "Delve into the five purification rituals that are essential for spiritual growth." },
  { title: "Darsan and Sampradaya",  lectures: 8,  desc: "Understand the different schools of thought and their unique perspectives." },
  { title: "Vairagya Prakarana",     lectures: 29, desc: "Explore the path of detachment and the steps to achieve true renunciation." },
  { title: "Mumukshu Prakarana",     lectures: 22, desc: "Learn about the qualities and practices of an earnest seeker of liberation." },
  { title: "Chit Prakarana",         lectures: 20, desc: "Gain insights into consciousness and the nature of the mind." },
  { title: "Achit Prakarana",        lectures: 10, desc: "Study the unconscious aspects of reality and their significance in Vedanta." },
  { title: "Brahma Prakarana",       lectures: 30, desc: "Examine the Supreme Reality, Brahman, and its implications for existence." },
  { title: "Sadhana Prakarana",      lectures: 72, desc: "Engage in practical exercises designed to advance your spiritual practice." },
  { title: "Prapti Faal",            lectures: 46, desc: "Discover the fruits of spiritual practice and the experiences of realization." },
  { title: "Prapti Birodhi",         lectures: 17, desc: "Identify and overcome obstacles that hinder spiritual attainment." },
];

const PLAYLIST_URL = "https://youtube.com/playlist?list=PLVoaXKRxO25q8AHabrE1oG5599m4n1Ty1";

const STUDENT_STORIES = [
  { id: "LFp2qXW8_tI", name: "Sushila Wasti",          role: "Assistant Director – Early Childhood Education" },
  { id: "oFvSOOg-Rzs", name: "Dr. Harischandra Ghimire", role: "Food Scientist, Government of Canada" },
  { id: "RSaqj7huxMs", name: "Gaurav Parajuli",         role: "Data Scientist" },
  { id: "IU4lNNWXp_I", name: "Dr. Shiva Ghimire",       role: "Director, Government of Canada" },
  { id: "F_rI0qh8K-U", name: "Mahendra Gurung",         role: "Businessman" },
  { id: "2y8oYEyPqZc", name: "Ramesh Paudel",           role: "Assistant Professor, Tribhuvan University" },
  { id: "2s6b6Su8kGE", name: "Sajan Shrestha",          role: "Botany Lecturer" },
  { id: "uIvZ-pBpmbw", name: "Naina Dhakal",            role: "Senior Agriculture Economist" },
  { id: "sDjkSnfX2fI", name: "Dinesh Saytal",           role: "Advocate" },
  { id: "uB5iiXrEUAE", name: "Bibek Lamsal",            role: "MBBS" },
  { id: "dJaVxSPAV-A", name: "Basudev Marasini",        role: "Retired SSP" },
  { id: "ivbcuxNGiUE", name: "Agam Shrestha",           role: "MPhil / PhD Scholar & Sculptor" },
  { id: "yTRzqZSV-Fs", name: "Madhav Upadhaya",         role: "Deputy CEO, Garima Bikas Bank" },
  { id: "SyHv2C3E828", name: "Padma Gauli",             role: "Secondary Level Teacher" },
];

const FAQS = [
  {
    q: "Who is this course for?",
    a: "The Vedanta Philosophy Course is open to sincere seekers of all backgrounds and traditions. No prior knowledge of Vedanta is required, only a genuine wish to understand the nature of the Self and Reality.\n\nAlongside the philosophy lectures, participants also practice Himalayan Siddha Mahayog Meditation. The two are studied together, each deepening the other, for accelerated inner progress.",
  },
  {
    q: "How long does the course take to complete?",
    a: "The course is 300 hours in total and takes approximately 12 months to complete. Classes are held daily via Zoom, except on sacred holidays (Ashtami, Pratipada, Purnima, Sankranti, and Aunsi).\n\nThe programme is revolving, meaning you may join at any point in the year. From the day you enrol, you continue through all the lectures until the full programme is complete.",
  },
  {
    q: "How are the classes delivered?",
    a: "Each session is a live group Zoom class, facilitated by members of the Mahayogi Siddhababa Spiritual Academy. The heart of each session is satsang, spiritual discourse delivered by His Holiness Jagadguru Mahayogi Siddhababa himself, an enlightened Saint.\n\nPeriodic Q&A sessions are held directly with Jagadguru Mahayogi Siddhababa, offering each student the rare opportunity to receive personal guidance from an awakened Master.",
  },
  {
    q: "What if I miss a class?",
    a: "Enrolment includes access to a library of on-demand videos, written resources, and supporting materials. If you miss a session, you can catch up in your own time and continue from where you left off. No seeker is left behind.",
  },
  {
    q: "What language are the lectures delivered in?",
    a: "The course is currently delivered in Nepali. We are actively working to make the programme available in additional languages, stay tuned for updates. Please indicate your language in the registration form so we can keep you informed as new options become available.",
  },
  {
    q: "Is there a fee?",
    a: "The Vedanta course is offered freely. There is, however, a recommended donation to help cover the operational costs of running the programme, digital equipment, Zoom subscriptions, and supporting infrastructure.\n\nThe suggested donation amount can be discussed with your local center. Contributions may be made before or after enrolment, and no seeker is ever turned away for inability to contribute.",
  },
  {
    q: "What will I gain from this course?",
    a: "This course will change the way you see the world, and the way you engage with it. You will come to understand the nature of Brahman (the Supreme Reality), the Self (Ātman), and Prakriti (the phenomenal world), and how they relate to one another.\n\nBeyond philosophy, the integration of Vedanta with daily meditation practice brings this understanding into lived experience, gradually transforming perception, relationships, and the quality of inner life.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e8dece] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-6 group"
      >
        <span className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#3d3830] group-hover:text-[#9d7422] transition-colors duration-200 leading-snug">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#b8892a] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          strokeWidth={1.5}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-400 ${open ? "max-h-[600px] pb-5" : "max-h-0"}`}>
        <p className="text-sm text-[#6b6158] leading-relaxed whitespace-pre-line">{a}</p>
      </div>
    </div>
  );
}

function OutlineItem({ item, index }: { item: typeof OUTLINE[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e8dece] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 py-4 text-left hover:bg-[#fdf6ec]/50 px-1 transition-colors duration-150 rounded"
      >
        <span className="text-xs text-[#b8892a] font-medium w-5 shrink-0 tabular-nums">{String(index + 1).padStart(2, "0")}</span>
        <span className="flex-1 font-['Cormorant_Garamond'] text-lg font-light text-[#3d3830]">{item.title}</span>
        <span className="text-xs text-[#9a8f84] mr-3 shrink-0">{item.lectures} lectures</span>
        <ChevronDown
          className={`w-4 h-4 text-[#b8892a] shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={1.5}
        />
      </button>
      {open && (
        <p className="text-sm text-[#7a7068] leading-relaxed pb-4 pl-9 pr-4">{item.desc}</p>
      )}
    </div>
  );
}

export default function VedantaCourse() {
  return (
    <div className="bg-[#faf9f6] text-[#3d3830]">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[58vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={`${b}images/vedanta-hero.png`}
          alt="Ancient Vedanta philosophy, sacred manuscripts and Himalayan dawn"
          className="absolute inset-0 w-full h-full object-cover object-center"
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
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight mb-4">
            Vedanta Philosophy Course
          </h1>
          <p className="text-base text-[#f0e4c8] tracking-widest uppercase font-light mb-8">
            The Science of Self & Reality
          </p>
          <Link
            href="/register?for=vedanta"
            className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-7 py-3 rounded-full tracking-wider transition-colors duration-200"
          >
            Register <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      {/* ── QUICK STATS BAR ── */}
      <div className="bg-[#2e2820] text-[#e8c56a]">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center divide-x divide-[#e8c56a]/20">
          {[
            { label: "Format",    value: "Online" },
            { label: "Duration",  value: "300 Hours" },
            { label: "Lectures",  value: "267 Total" },
            { label: "Platform",  value: "Zoom" },
            { label: "Language",  value: "Nepali" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center px-8 py-5 gap-0.5">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c8a050] font-medium">{s.label}</span>
              <span className="font-['Cormorant_Garamond'] text-lg font-light text-white">{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          <div>
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">About the Course</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2 mb-6 leading-snug">
              Timeless Wisdom for Modern Living
            </h2>
            <p className="text-base leading-relaxed text-[#5a5248] mb-4">
              Unlock the timeless wisdom of Vedanta Philosophy designed to assist you in navigating the complexities of modern living. This course presents Vedanta in a practical and accessible way, helping students move beyond concepts to lived understanding.
            </p>
            <p className="text-base leading-relaxed text-[#5a5248] mb-8">
              This course is designed and taught by the enlightened Himalayan Yogi, His Holiness Jagadguru Mahayogi Siddhababa. It is based on the <em>Vishishtadvaita</em> School of Thought.
            </p>

            {/* Course meta */}
            <div className="space-y-3">
              {[
                { label: "Who it is for", value: "Seekers at every stage" },
                { label: "Delivery",      value: "Online via Zoom" },
                { label: "Language",      value: "Nepali" },
                { label: "Duration",      value: "300 hours · 267 lectures" },
              ].map((m) => (
                <div key={m.label} className="flex gap-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#b8892a] font-medium w-28 shrink-0 pt-0.5">{m.label}</span>
                  <span className="text-sm text-[#5a5248]">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vishishtadvaita callout card */}
          <div className="rounded-2xl bg-[#f5ece0] border border-[#e2d0b8] p-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#b8892a] font-medium">Philosophical Foundation</span>
            <h3 className="font-['Cormorant_Garamond'] text-2xl font-light text-[#3d3830] mt-2 mb-4 leading-snug">
              Vishishtadvaita Vedanta
            </h3>
            <p className="text-sm text-[#5a5248] leading-relaxed mb-6">
              Vishishtadvaita, "qualified non-dualism", holds that individual souls and the universe are real but exist as attributes of Brahman, the Supreme Reality. It unites devotion, knowledge, and action into a single path of liberation.
            </p>
            <div className="border-t border-[#e2d0b8] pt-5 space-y-2">
              {["Nature of Reality", "Individual Soul & Supreme Soul", "Path to Liberation (Moksha)", "Role of Devotion (Bhakti)"].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8892a] shrink-0" />
                  <span className="text-sm text-[#5a5248]">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSE OUTLINE ── */}
      <section className="py-16 px-6 bg-[#fdf6ec]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">267 Lectures</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2">Course Outline</h2>
          </div>

          <div className="bg-white rounded-2xl border border-[#e8dece] px-6 py-2 shadow-sm">
            {OUTLINE.map((item, i) => (
              <OutlineItem key={item.title} item={item} index={i} />
            ))}
          </div>

          {/* Total */}
          <div className="mt-6 flex justify-end items-center gap-4 pr-1">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9a8f84]">Total</span>
            <span className="font-['Cormorant_Garamond'] text-2xl text-[#b8892a]">267 lectures</span>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Included</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2">Course Highlights</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Shaktipat Initiation",
                sub: "Himalayan Siddha Mahayog Meditation",
                desc: "Students receive initiation into the Himalayan Siddha Mahayog Meditation practice, a transformative awakening of inner spiritual energy guided by Mahayogi Siddhababa.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#b8892a" strokeWidth="1.2" fill="none"/>
                  </svg>
                ),
              },
              {
                title: "Saranagati Mantra Dīkṣhā",
                sub: "Sacred Initiation Ceremony",
                desc: "The Saranagati Mantra Diksha Ceremony, a profound act of surrender at the feet of the Guru, may be available to students during the course journey.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b8892a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                ),
              },
            ].map((h) => (
              <div key={h.title} className="rounded-2xl bg-[#f5ece0] border border-[#e2d0b8] p-7">
                <div className="mb-4">{h.icon}</div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#b8892a] font-medium mb-1">{h.sub}</p>
                <h3 className="font-['Cormorant_Garamond'] text-xl font-light text-[#3d3830] mb-3">{h.title}</h3>
                <p className="text-sm text-[#5a5248] leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDENT STORIES ── */}
      <section className="py-20 px-6 bg-[#fdf6ec]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Voices from Students</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2 mb-3">
              Personal Stories of Transformation
            </h2>
            <p className="text-sm text-[#7a7068] max-w-xl mx-auto leading-relaxed">
              Students from all walks of life share how the Vedanta course and Mahayog practice have transformed their inner world.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {STUDENT_STORIES.map((s) => (
              <a
                key={s.id}
                href={`https://www.youtube.com/watch?v=${s.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl overflow-hidden bg-white border border-[#e8dece] shadow-sm hover:shadow-md hover:border-[#c8a050] transition-all duration-200 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-[#1a0f05]">
                  <img
                    src={`https://i.ytimg.com/vi/${s.id}/mqdefault.jpg`}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-200">
                    <div className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#b8892a">
                        <polygon points="5,3 19,12 5,21"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-3.5 flex-1 flex flex-col gap-1">
                  <p className="font-['Cormorant_Garamond'] text-base font-semibold text-[#3d3830] leading-snug group-hover:text-[#9d7422] transition-colors duration-150">
                    {s.name}
                  </p>
                  <p className="text-[11px] text-[#9a8f84] leading-snug">{s.role}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#b8892a] hover:text-[#9d7422] text-sm tracking-wide transition-colors duration-150 border border-[#c8a050]/50 hover:border-[#b8892a] rounded-full px-6 py-2.5"
            >
              View Full Playlist on YouTube
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <FloatingRegisterButton label="Enrol Now" href="/register?for=vedanta" />

      {/* ── FAQ ── */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#e8dcc8] via-[#ede3cf] to-[#e2d4b8]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#b8892a]/40" />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#b8892a" strokeWidth="1.2" fill="none"/>
              </svg>
              <div className="h-px w-10 bg-[#b8892a]/40" />
            </div>
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Common Questions</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#2e1405] mt-2">
              About the Vedanta Course
            </h2>
          </div>
          <div>
            {FAQS.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-28 px-6 overflow-hidden"
        style={{
          backgroundImage: `url(${b}images/cta-vedanta-study.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center 55%",
        }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(12,5,1,0.90) 0%, rgba(38,16,4,0.84) 50%, rgba(15,7,1,0.92) 100%)" }}
        />
        {/* amber centre glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(184,137,42,0.18) 0%, transparent 70%)" }}
        />

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8892a]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8892a]/20 to-transparent" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* floating diamond ornament */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#e8c56a]/50" />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1" fill="rgba(232,197,106,0.15)"/>
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#e8c56a]/50" />
          </div>

          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight mb-4"
            style={{ textShadow: "0 0 60px rgba(212,160,48,0.5), 0 2px 20px rgba(0,0,0,0.6)" }}
          >
            Begin the Study<br />of Self &amp; Reality
          </h2>

          <p className="text-[#c8b08a] text-base leading-relaxed mb-10 max-w-md mx-auto">
            The course is open for enrolment. Join a daily programme of Vedanta and meditation guided by His Holiness Jagadguru Mahayogi Siddhababa.
          </p>

          <Link
            href="/register?for=vedanta"
            className="inline-flex items-center gap-3 bg-[#b8892a] hover:bg-[#d4a030] text-white text-sm px-10 py-4 rounded-full tracking-widest transition-all duration-300 shadow-lg shadow-[#b8892a]/30 hover:shadow-[#b8892a]/50"
            style={{ boxShadow: "0 0 30px rgba(184,137,42,0.3), 0 4px 20px rgba(0,0,0,0.4)" }}
          >
            Enrol in the Course
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <p className="text-[#a89070] text-xs mt-6 tracking-wide">Open to all seekers · Join any time</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
