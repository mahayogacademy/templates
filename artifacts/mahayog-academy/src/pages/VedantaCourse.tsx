import { useState } from "react";
import Nav from "@/components/Nav";
import { Link } from "wouter";
import { ChevronDown, ArrowRight } from "lucide-react";

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
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", country: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-[#faf9f6] text-[#3d3830]">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[58vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={`${b}images/guru-teachings.jpg`}
          alt="Vedanta teachings"
          className="absolute inset-0 w-full h-full object-cover object-top"
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
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-7 py-3 rounded-full tracking-wider transition-colors duration-200"
          >
            Explore the Course <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>
      </section>

      {/* ── QUICK STATS BAR ── */}
      <div className="bg-[#2e2820] text-[#e8c56a]">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center divide-x divide-[#e8c56a]/20">
          {[
            { label: "Format",    value: "Online" },
            { label: "Duration",  value: "350 Hours" },
            { label: "Lectures",  value: "267 Total" },
            { label: "Platform",  value: "Zoom" },
            { label: "Language",  value: "Nepali" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center px-8 py-5 gap-0.5">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#b8892a]/70 font-medium">{s.label}</span>
              <span className="font-['Cormorant_Garamond'] text-lg font-light text-[#e8dcc8]">{s.value}</span>
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
                { label: "Duration",      value: "350 hours · 267 lectures" },
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
              Vishishtadvaita — "qualified non-dualism" — holds that individual souls and the universe are real but exist as attributes of Brahman, the Supreme Reality. It unites devotion, knowledge, and action into a single path of liberation.
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
                desc: "Students receive initiation into the Himalayan Siddha Mahayog Meditation practice — a transformative awakening of inner spiritual energy guided by Mahayogi Siddhababa.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#b8892a" strokeWidth="1.2" fill="none"/>
                  </svg>
                ),
              },
              {
                title: "Saranagati Mantra Dīkṣhā",
                sub: "Sacred Initiation Ceremony",
                desc: "The Saranagati Mantra Diksha Ceremony — a profound act of surrender at the feet of the Guru — may be available to students during the course journey.",
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

      {/* ── REGISTER ── */}
      <section id="register" className="py-20 px-6 bg-[#2e2820]">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Enrol</span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-white mt-2">Register Today</h2>
          <p className="text-sm text-[#9a8f84] mt-3 leading-relaxed">
            Express your interest and our team will be in touch with enrolment details and upcoming start dates.
          </p>
        </div>

        {submitted ? (
          <div className="max-w-md mx-auto text-center bg-[#3a2e20] border border-[#b8892a]/30 rounded-2xl p-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#e8c56a]" />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/>
              </svg>
              <div className="h-px w-10 bg-[#e8c56a]" />
            </div>
            <p className="font-['Cormorant_Garamond'] text-2xl font-light text-[#e8dcc8]">Thank you for your interest</p>
            <p className="text-sm text-[#9a8f84] mt-3">We will be in touch soon with further details.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            {[
              { name: "name",    label: "Full Name",      type: "text",  required: true  },
              { name: "email",   label: "Email Address",  type: "email", required: true  },
              { name: "country", label: "Country",        type: "text",  required: false },
            ].map((f) => (
              <div key={f.name}>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#9a8f84] mb-1.5">{f.label}{f.required && " *"}</label>
                <input
                  type={f.type}
                  required={f.required}
                  value={form[f.name as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                  className="w-full bg-[#3a2e20] border border-[#5a4e38] text-[#e8dcc8] placeholder-[#6a5e48] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#b8892a] transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-[#9a8f84] mb-1.5">Message (optional)</label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#3a2e20] border border-[#5a4e38] text-[#e8dcc8] placeholder-[#6a5e48] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#b8892a] transition-colors resize-none"
                placeholder="Any questions or background you'd like to share…"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-2 bg-[#b8892a] hover:bg-[#9d7422] text-white py-4 rounded-full text-sm tracking-wider transition-colors duration-200 font-medium"
            >
              Submit Registration
            </button>
          </form>
        )}
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6 border-t border-[#e8dece] bg-[#fdf6ec]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-['Cormorant_Garamond'] text-lg font-medium text-[#b8892a]">
            Mahayogi Siddhababa Spiritual Academy
          </span>
          <div className="flex items-center gap-6">
            <Link href="/meditation">
              <span className="text-xs text-[#9a8f84] hover:text-[#b8892a] transition-colors cursor-pointer tracking-wide">Meditation</span>
            </Link>
            <Link href="/contact">
              <span className="text-xs text-[#9a8f84] hover:text-[#b8892a] transition-colors cursor-pointer tracking-wide">Contact</span>
            </Link>
            <Link href="/donate">
              <span className="text-xs text-[#9a8f84] hover:text-[#b8892a] transition-colors cursor-pointer tracking-wide">Donate</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
