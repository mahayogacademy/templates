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

const CENTERS = [
  { id: "canada",    name: "Canada Center",        loc: "" },
  { id: "uk",        name: "UK Center",             loc: "" },
  { id: "chitwan",   name: "Chitwan Center",        loc: "Bharatpur, Chitwan" },
  { id: "pokhara",   name: "Pokhara Center",        loc: "Nadipur, Pokhara" },
  { id: "surkhet",   name: "Surkhet Center",        loc: "Ganesh Chowk, Surkhet" },
  { id: "kathmandu", name: "Kathmandu Center",      loc: "Nanakmath, Balaju" },
  { id: "chatara",   name: "Chatara Main Center",   loc: "Hanuman Mandir, Chatara" },
  { id: "usa",       name: "USA Center",            loc: "Texas" },
  { id: "australia", name: "Australia Center",      loc: "Sydney" },
];

const STEPS = [
  { num: 1, label: "Personal" },
  { num: 2, label: "Education" },
  { num: 3, label: "Center" },
  { num: 4, label: "Emergency" },
  { num: 5, label: "Reference" },
  { num: 6, label: "Login" },
];

const inputCls = "w-full bg-[#3a2e20] border border-[#5a4e38] text-[#e8dcc8] placeholder-[#6a5e48] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#b8892a] transition-colors";
const selectCls = `${inputCls} appearance-none`;
const labelCls = "block text-[10px] uppercase tracking-[0.2em] text-[#c8a050] mb-1.5 font-medium";

export default function VedantaCourse() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", gender: "", dob: "", mobile: "", address: "", placeOfBirth: "",
    education: "", educationMajor: "", profession: "",
    center: "",
    emergencyName: "", emergencyMobile: "", emergencyRelation: "",
    refererName: "", refererRelation: "", refererMobile: "",
    email: "", password: "",
  });

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

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
          src={`${b}images/vedanta-hero.png`}
          alt="Ancient Vedanta philosophy — sacred manuscripts and Himalayan dawn"
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
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Enrol</span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-white mt-2">Course Enrolment</h2>
          <p className="text-sm text-[#9a8f84] mt-3">Complete the form below to register for the Vedanta Philosophy Course.</p>
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
            <p className="font-['Cormorant_Garamond'] text-2xl font-light text-[#e8dcc8]">Enrolment Submitted</p>
            <p className="text-sm text-[#9a8f84] mt-3">Your registration has been received. We will be in touch soon with your portal access details.</p>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">

            {/* Step progress */}
            <div className="flex items-center gap-0 mb-10">
              {STEPS.map((s, i) => (
                <div key={s.num} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center gap-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors duration-200 ${
                      step > s.num ? "bg-[#b8892a] text-white" : step === s.num ? "bg-[#b8892a] text-white ring-2 ring-[#b8892a]/30" : "bg-[#3a2e20] text-[#6a5e48] border border-[#5a4e38]"
                    }`}>
                      {step > s.num ? "✓" : s.num}
                    </div>
                    <span className={`text-[9px] uppercase tracking-wider hidden sm:block ${step === s.num ? "text-[#c8a050]" : "text-[#6a5e48]"}`}>{s.label}</span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`flex-1 h-px mx-1 mb-4 transition-colors duration-200 ${step > s.num ? "bg-[#b8892a]" : "bg-[#5a4e38]"}`} />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              <div className="bg-[#3a2e20] border border-[#5a4e38] rounded-2xl p-7 space-y-5">

                {/* Step 1 – Personal Details */}
                {step === 1 && <>
                  <p className="font-['Cormorant_Garamond'] text-xl font-light text-[#e8dcc8] mb-2">Personal Details</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>First Name *</label>
                      <input required className={inputCls} value={form.firstName} onChange={e => set("firstName", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelCls}>Last Name *</label>
                      <input required className={inputCls} value={form.lastName} onChange={e => set("lastName", e.target.value)} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Gender *</label>
                      <select required className={selectCls} value={form.gender} onChange={e => set("gender", e.target.value)}>
                        <option value="">Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Date of Birth *</label>
                      <input required type="date" className={inputCls} value={form.dob} onChange={e => set("dob", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Mobile Number *</label>
                    <input required className={inputCls} placeholder="+1 555 000 0000" value={form.mobile} onChange={e => set("mobile", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Street Address *</label>
                    <input required className={inputCls} value={form.address} onChange={e => set("address", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Place of Birth</label>
                    <input className={inputCls} value={form.placeOfBirth} onChange={e => set("placeOfBirth", e.target.value)} />
                  </div>
                </>}

                {/* Step 2 – Education */}
                {step === 2 && <>
                  <p className="font-['Cormorant_Garamond'] text-xl font-light text-[#e8dcc8] mb-2">Education & Background</p>
                  <div>
                    <label className={labelCls}>Highest Education *</label>
                    <select required className={selectCls} value={form.education} onChange={e => set("education", e.target.value)}>
                      <option value="">Select level</option>
                      {["None","Primary","Secondary (1–10 Class)","Higher Secondary (11–12 Class)","Bachelor","Masters","PhD"].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Education Major</label>
                    <input className={inputCls} placeholder="e.g. Philosophy, Engineering…" value={form.educationMajor} onChange={e => set("educationMajor", e.target.value)} />
                    <p className="text-[10px] text-[#6a5e48] mt-1">Please be as specific as possible.</p>
                  </div>
                  <div>
                    <label className={labelCls}>Profession</label>
                    <input className={inputCls} value={form.profession} onChange={e => set("profession", e.target.value)} />
                  </div>
                </>}

                {/* Step 3 – Center */}
                {step === 3 && <>
                  <p className="font-['Cormorant_Garamond'] text-xl font-light text-[#e8dcc8] mb-1">Preferred Center</p>
                  <p className="text-xs text-[#9a8f84] mb-4">Select the center closest to you. If yours is not listed, please contact us.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {CENTERS.map(c => (
                      <button
                        type="button"
                        key={c.id}
                        onClick={() => set("center", c.id)}
                        className={`text-left px-4 py-3 rounded-xl border transition-colors duration-150 ${
                          form.center === c.id
                            ? "border-[#b8892a] bg-[#b8892a]/10"
                            : "border-[#5a4e38] bg-[#2e2820] hover:border-[#b8892a]/50"
                        }`}
                      >
                        <p className={`text-sm font-medium ${form.center === c.id ? "text-[#e8c56a]" : "text-[#e8dcc8]"}`}>{c.name}</p>
                        {c.loc && <p className="text-[11px] text-[#6a5e48] mt-0.5">{c.loc}</p>}
                      </button>
                    ))}
                  </div>
                </>}

                {/* Step 4 – Emergency Contact */}
                {step === 4 && <>
                  <p className="font-['Cormorant_Garamond'] text-xl font-light text-[#e8dcc8] mb-2">Emergency Contact</p>
                  <div>
                    <label className={labelCls}>Contact Name *</label>
                    <input required className={inputCls} value={form.emergencyName} onChange={e => set("emergencyName", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Contact Mobile *</label>
                    <input required className={inputCls} placeholder="+1 555 000 0000" value={form.emergencyMobile} onChange={e => set("emergencyMobile", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Relation *</label>
                    <input required className={inputCls} placeholder="e.g. Spouse, Parent, Sibling…" value={form.emergencyRelation} onChange={e => set("emergencyRelation", e.target.value)} />
                  </div>
                </>}

                {/* Step 5 – Reference */}
                {step === 5 && <>
                  <p className="font-['Cormorant_Garamond'] text-xl font-light text-[#e8dcc8] mb-1">Reference <span className="text-sm text-[#9a8f84] font-sans font-normal">(Optional)</span></p>
                  <p className="text-xs text-[#9a8f84] mb-4">If someone referred you to this course, please share their details.</p>
                  <div>
                    <label className={labelCls}>Referrer's Name</label>
                    <input className={inputCls} value={form.refererName} onChange={e => set("refererName", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Relation to Referrer</label>
                    <input className={inputCls} placeholder="e.g. Friend, Guru, Family…" value={form.refererRelation} onChange={e => set("refererRelation", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Referrer's Mobile</label>
                    <input className={inputCls} value={form.refererMobile} onChange={e => set("refererMobile", e.target.value)} />
                  </div>
                </>}

                {/* Step 6 – Login */}
                {step === 6 && <>
                  <p className="font-['Cormorant_Garamond'] text-xl font-light text-[#e8dcc8] mb-1">Login Details</p>
                  <p className="text-xs text-[#9a8f84] mb-4">These credentials will give you access to your student portal, where the Zoom class link will be available. Please save them carefully.</p>
                  <div>
                    <label className={labelCls}>Email Address *</label>
                    <input required type="email" className={inputCls} value={form.email} onChange={e => set("email", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Password *</label>
                    <input required type="password" className={inputCls} placeholder="Minimum 8 characters" minLength={8} value={form.password} onChange={e => set("password", e.target.value)} />
                  </div>
                </>}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6">
                {step > 1 ? (
                  <button type="button" onClick={() => setStep(s => s - 1)} className="px-6 py-3 rounded-full border border-[#5a4e38] text-[#c8a050] text-sm hover:border-[#b8892a] transition-colors">
                    ← Back
                  </button>
                ) : <div />}

                {step < 6 ? (
                  <button
                    type="button"
                    onClick={() => setStep(s => s + 1)}
                    className="px-8 py-3 rounded-full bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm tracking-wider transition-colors"
                  >
                    Continue →
                  </button>
                ) : (
                  <button type="submit" className="px-8 py-3 rounded-full bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm tracking-wider transition-colors font-medium">
                    Complete Enrolment
                  </button>
                )}
              </div>
            </form>
          </div>
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
