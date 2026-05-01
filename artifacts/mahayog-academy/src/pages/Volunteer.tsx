import { useState } from "react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import { Laptop, Flame, BookOpen, Users, Heart, Sun, ArrowRight, Mail, Globe } from "lucide-react";

const b = import.meta.env.BASE_URL;

const ROLES = [
  {
    icon: Sun,
    title: "Ashram Seva",
    desc: "Offer your hands and heart at the Ashram — helping with daily upkeep, flower arrangements, kitchen service, and the sacred rhythms of ashram life.",
    img: `${b}images/volunteer-ashram-seva.png`,
    imgAlt: "Volunteer arranging marigold offerings at an ashram temple",
  },
  {
    icon: Flame,
    title: "Events & Sacred Festivals",
    desc: "Support the preparation and running of yagyas, festivals, and spiritual gatherings — from logistics and decoration to welcoming pilgrims and guests.",
    img: `${b}images/volunteer-festivals.png`,
    imgAlt: "Sacred yagya fire ritual ceremony at a Nepali ashram",
  },
  {
    icon: BookOpen,
    title: "Teaching & Education",
    desc: "Assist with the Vedanta courses, Gurukul programmes, and meditation classes — as a teaching assistant, translator, or study guide facilitator.",
    img: `${b}images/volunteer-teaching.png`,
    imgAlt: "Spiritual teacher with students in an ashram garden",
  },
  {
    icon: Laptop,
    title: "Digital & Communications",
    desc: "Help build and maintain the Academy's digital presence — website, social media, photography, video editing, and content creation for a global audience.",
    img: `${b}images/volunteer-digital.png`,
    imgAlt: "Volunteer photographer documenting ashram life",
  },
  {
    icon: Heart,
    title: "Outreach & Community",
    desc: "Represent the Academy in your local community, organise satsangs, translate teachings, and help introduce seekers to the path of Mahayog.",
    img: `${b}images/volunteer-outreach.png`,
    imgAlt: "Diverse group gathered for a satsang community circle",
  },
  {
    icon: Users,
    title: "Administration & Coordination",
    desc: "Support the Academy's day-to-day operations — correspondence, scheduling, event coordination, and donor relations from anywhere in the world.",
    img: `${b}images/volunteer-admin.png`,
    imgAlt: "Volunteers coordinating around a wooden table in an ashram",
  },
];

const QUALITIES = [
  "A sincere interest in Vedic spirituality and selfless service",
  "Willingness to work within a sattvic and disciplined environment",
  "Reliability, humility, and a spirit of genuine giving",
];

export default function Volunteer() {
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.role) e.role = "Please select an area of interest.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Please write a brief message (at least 10 characters).";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  }

  function handleChange(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] font-['Inter']">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src={`${b}images/volunteer-hero.png`}
          alt="Volunteers serving at the Ashram"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0803]/75 via-[#2c1205]/45 to-[#faf9f6]" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#e8c56a]/60" />
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" fill="#e8c56a" fillOpacity="0.8"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/60" />
          </div>
          <p className="text-[#e8c56a] text-xs uppercase tracking-[0.35em] font-medium mb-4">
            Mahayogi Siddhababa Spiritual Academy
          </p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-white font-light leading-tight mb-4">
            Serve with <span className="text-[#e8c56a]">Purpose</span>
          </h1>
          <p className="text-white/75 text-sm uppercase tracking-[0.2em]">
            Volunteer & Contribute to a Living Tradition
          </p>
        </div>
      </section>

      {/* ── WHY VOLUNTEER ── */}
      <section className="py-20 px-6 bg-[#faf9f6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Why Volunteer</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#2c1a08] font-light">Selfless Service as Spiritual Practice</h2>
            <div className="w-12 h-px bg-[#b8892a]/40 mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-[#4a3728] text-base leading-relaxed">
              <p>
                Mahayogi Siddhababa Spiritual Academy is a <span className="font-medium text-[#2c1a08]">not-for-profit, volunteer-run organisation</span>. Everything we offer — courses, events, the Gurukul, outreach — is made possible by the sincere dedication of people like you.
              </p>
              <p>
                In the Vedic tradition, <em>seva</em> — selfless service — is among the highest forms of spiritual practice. By offering your time, skills, and energy to the Academy, you are not merely helping an organisation: you are walking an ancient path of devotion, discipline, and inner growth.
              </p>
              <p>
                Volunteers work from Nepal and from around the world, contributing whatever they are able — a few hours a week or a full immersive residency at the Ashram.
              </p>

              {/* What you receive */}
              <div className="bg-[#f4ede0] rounded-2xl px-6 py-5 space-y-3 mt-2">
                <p className="text-[#b8892a] text-xs uppercase tracking-[0.25em] font-medium">What Volunteers Receive</p>
                {[
                  "Deepened connection to authentic Vedic wisdom",
                  "Personal guidance and mentorship from Academy teachers",
                  "Access to teachings, courses, and retreat programmes",
                  "A global community of sincere spiritual seekers",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[#4a3728]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#b8892a] mt-1.5 flex-shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="rounded-3xl overflow-hidden h-full min-h-[320px]">
              <img
                src={`${b}images/volunteer-why.png`}
                alt="Volunteer offering compassionate seva at the Ashram"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SIX ROLES ── */}
      <section className="py-20 px-6 bg-[#f4ede0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Ways to Serve</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#2c1a08] font-light">Volunteer Opportunities</h2>
            <div className="w-12 h-px bg-[#b8892a]/40 mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROLES.map(({ icon: Icon, title, desc, img, imgAlt }) => (
              <div key={title} className="bg-white rounded-2xl overflow-hidden border border-[#b8892a]/15 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-44 overflow-hidden">
                  <img
                    src={img}
                    alt={imgAlt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-full bg-[#b8892a]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-[#b8892a]" />
                    </div>
                    <h3 className="font-['Cormorant_Garamond'] text-xl text-[#2c1a08] font-medium">{title}</h3>
                  </div>
                  <p className="text-[#6a5c48] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO CAN VOLUNTEER ── */}
      <section className="py-20 px-6 bg-[#faf9f6]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Who Can Volunteer</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#2c1a08] font-light">Open to All Sincere Seekers</h2>
            <div className="w-12 h-px bg-[#b8892a]/40 mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-[#4a3728] text-base leading-relaxed">
                The Academy welcomes volunteers from all backgrounds and traditions who resonate with the values of compassion, truth, and selfless service.
              </p>
              <p className="text-[#4a3728] text-base leading-relaxed">
                Whether you are based in Kathmandu or California, whether you have an hour a week or wish to reside at the Ashram for a season, there is a place for you here.
              </p>
            </div>
            <div className="space-y-3">
              {QUALITIES.map((q) => (
                <div key={q} className="flex items-start gap-3 bg-[#f4ede0] rounded-xl px-5 py-3.5">
                  <div className="w-2 h-2 rounded-full bg-[#b8892a] mt-1.5 flex-shrink-0" />
                  <p className="text-[#4a3728] text-sm leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLY FORM ── */}
      <section className="py-20 px-6 bg-[#1a0c03]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#e8c56a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Get Involved</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-white font-light">Express Your Interest</h2>
            <p className="text-white/60 text-sm mt-3">
              Fill in the form below and our volunteer coordinator will be in touch within a few days.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full bg-[#b8892a]/20 flex items-center justify-center mx-auto mb-5">
                <Heart size={24} className="text-[#b8892a]" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-3xl text-white font-light mb-3">Thank You</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-md mx-auto">
                Your expression of interest has been received. We are grateful for your heart and will be in touch soon. May your path be filled with light.
              </p>
              <Link href="/">
                <button className="mt-8 inline-flex items-center gap-2 border border-[#b8892a]/40 text-[#e8c56a] px-6 py-2.5 rounded-full text-sm hover:bg-[#b8892a]/10 transition-colors">
                  Return Home <ArrowRight size={14} />
                </button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-[#e8c56a] text-xs uppercase tracking-widest mb-2">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-[#faf6ef] border border-[#e8dece] rounded-xl px-4 py-3 text-[#2c1a08] placeholder-[#7a6250] text-sm focus:outline-none focus:border-[#b8892a] transition-colors"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-[#e8c56a] text-xs uppercase tracking-widest mb-2">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-[#faf6ef] border border-[#e8dece] rounded-xl px-4 py-3 text-[#2c1a08] placeholder-[#7a6250] text-sm focus:outline-none focus:border-[#b8892a] transition-colors"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Role interest */}
              <div>
                <label className="block text-[#e8c56a] text-xs uppercase tracking-widest mb-2">Area of Interest</label>
                <select
                  value={form.role}
                  onChange={(e) => handleChange("role", e.target.value)}
                  className="w-full bg-[#faf6ef] border border-[#e8dece] rounded-xl px-4 py-3 text-[#2c1a08] text-sm focus:outline-none focus:border-[#b8892a] transition-colors appearance-none"
                >
                  <option value="" disabled>Select a role…</option>
                  {ROLES.map(({ title }) => (
                    <option key={title} value={title}>{title}</option>
                  ))}
                  <option value="Open to Any">Open to Any — Let the Academy Decide</option>
                </select>
                {errors.role && <p className="text-red-400 text-xs mt-1">{errors.role}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-[#e8c56a] text-xs uppercase tracking-widest mb-2">A Few Words About Yourself</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us a little about yourself, your background, and why you wish to volunteer…"
                  className="w-full bg-[#faf6ef] border border-[#e8dece] rounded-xl px-4 py-3 text-[#2c1a08] placeholder-[#7a6250] text-sm focus:outline-none focus:border-[#b8892a] transition-colors resize-none"
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#b8892a] hover:bg-[#a07820] text-white font-medium py-4 rounded-2xl transition-colors text-sm tracking-wide"
              >
                <Mail size={15} />
                Send My Expression of Interest
              </button>

              <p className="text-white/30 text-xs text-center">
                As a volunteer-run organisation, we aim to respond within 3–5 working days.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER SPACE ── */}
      <div className="h-16 bg-[#faf9f6]" />
    </div>
  );
}
