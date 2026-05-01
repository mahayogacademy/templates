import { useState } from "react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import { Phone, MapPin, BookOpen, Sun, Heart, Users, Laptop, Flame, X, ZoomIn, ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";

const b = import.meta.env.BASE_URL;

const MODERN_FEATURES = [
  { icon: Laptop, label: "Smart Classrooms" },
  { icon: BookOpen, label: "Science & Computer Labs" },
  { icon: BookOpen, label: "Library & Reading Rooms" },
  { icon: Users, label: "Sports & Physical Education" },
  { icon: Heart, label: "Music & Cultural Activities" },
  { icon: BookOpen, label: "NEB English Medium Curriculum" },
];

const VEDIC_FEATURES = [
  { icon: Sun, label: "Brahmamuhurta Daily Routine" },
  { icon: Flame, label: "Sandhya Vandana" },
  { icon: Heart, label: "Yoga & Pranayama" },
  { icon: Heart, label: "Meditation & Dharana" },
  { icon: BookOpen, label: "Ayurveda & Jyotish" },
  { icon: BookOpen, label: "Vedic Studies & Sanskrit Grammar" },
];

const PILLARS = [
  {
    title: "Vedic Values",
    desc: "Not merely information, but the formation of character — moral, spiritual, and human संस्कार at the core of every lesson.",
    img: `${b}images/pillar-vedic-values.png`,
    imgAlt: "Ancient Sanskrit manuscripts and sacred texts by candlelight",
  },
  {
    title: "Modern Curriculum",
    desc: "Grade 6–12 under the NEB curriculum in English medium. Science, mathematics, computer, and technical subjects taught to global standards.",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    imgAlt: "Students in a modern classroom",
  },
  {
    title: "Vedic Living",
    desc: "Sanskrit recitation, Vedic studies, Ayurveda, Jyotish, and yoga woven into daily life — not as electives, but as a way of being.",
    img: `${b}images/pillar-vedic-living.png`,
    imgAlt: "Student doing pranayama at dawn in an ashram courtyard",
  },
  {
    title: "Residential Life",
    desc: "Students live as ancient Rishis — a disciplined, sattvic, and loving residential environment that becomes a true second home.",
    img: `${b}images/pillar-residential.png`,
    imgAlt: "Students walking through an ashram corridor at dawn",
  },
  {
    title: "Holistic Development",
    desc: "Sports, music, cultural arts, and community service cultivate the full person — strong in body, sharp in mind, and noble in spirit.",
    img: `${b}images/pillar-holistic.png`,
    imgAlt: "Children playing tabla and singing in a music room",
  },
  {
    title: "Patriotism & Service",
    desc: "Students are nurtured with deep love for their homeland and a commitment to serve Nepal and the world with wisdom and integrity.",
    img: `${b}images/pillar-service.png`,
    imgAlt: "Students planting saplings together with Himalayan hills behind",
  },
];

export default function Gurukul() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [posterIndex, setPosterIndex] = useState(0);

  const POSTERS = [
    { src: `${b}images/gurukul-poster-en.jpg`, label: "English", alt: "Gurukul English poster — Vedic Values, Modern Education" },
    { src: `${b}images/gurukul-poster.jpg`,    label: "नेपाली", alt: "Gurukul Nepali poster — Vedic Sanskar, Modern Education" },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] font-['Inter']">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${b}images/gurukul-hero.png`}
            alt="Jagadguru Shriramanandacharya Gurukul — sacred learning at Barahakshetra"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0803]/80 via-[#2c1205]/50 to-[#faf9f6]" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#e8c56a]/60" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/60" />
          </div>
          <p className="text-[#e8c56a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Barahakshetra, Nepal · Admissions Open</p>
          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl font-light text-white leading-tight">
            Jagadguru Shree Ramanandacharya<br /><span className="text-[#e8c56a]">Gurukul</span>
          </h1>
          <p className="text-white text-base tracking-widest uppercase font-light mt-4">
            Where Modern Excellence Meets Ancient Wisdom
          </p>
        </div>
      </section>

      {/* ── VISION BANNER ── */}
      <section className="bg-[#b8892a] py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-white font-light">
            "Vedic Values &amp; Modern Education"
          </p>
          <p className="text-white/70 text-sm mt-2 tracking-wide">
            A Gurukul that unites the best of both worlds
          </p>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-20 px-6 bg-[#faf9f6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">About the Gurukul</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#2c1a08] font-light mb-6">A Living Tradition, Reimagined</h2>
            <div className="w-12 h-px bg-[#b8892a]/40 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-5 text-[#4a3728] text-base leading-relaxed">
              <p>
                Under the divine guidance of <span className="font-medium text-[#2c1a08]">His Holiness Jagadguru Mahayogi Siddhababa</span>, Jagadguru Shriramanandacharya Gurukul opens its doors at the sacred grounds of Chataradham, Barahakshetra.
              </p>
              <p>
                This fully residential institution offers Grade 6 children, under the NEB curriculum in English medium, the opportunity to not merely study, but <em>live</em> the lifestyle of the ancient Rishis. Each day begins before dawn and unfolds through a rhythm of prayer, yoga, learning, and reflection.
              </p>
              <p>
                In today's world, true success lies not just in degrees but in <strong>character, sanskar, discipline, and spiritual awareness</strong>. This Gurukul is committed to shaping strong, visionary, and culturally grounded individuals in a safe, loving, and sattvic environment.
              </p>

              {/* Key stats grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { value: "Grade 6–12", label: "NEB Curriculum" },
                  { value: "English", label: "Medium of Instruction" },
                  { value: "Residential", label: "Full Boarding System" },
                  { value: "Sattvic", label: "Lifestyle & Environment" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-[#f4ede0] rounded-xl px-4 py-3 border border-[#b8892a]/15">
                    <p className="font-['Cormorant_Garamond'] text-lg text-[#2c1a08] font-medium leading-tight">{value}</p>
                    <p className="text-[#9a8070] text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>

              {/* Admission contact */}
              <div className="mt-4 border-t border-[#b8892a]/20 pt-5 space-y-3">
                <p className="text-[#b8892a] text-xs uppercase tracking-[0.25em] font-medium">Admissions · Limited Seats</p>
                <div className="flex items-start gap-2 text-sm text-[#4a3728]">
                  <Phone size={14} className="text-[#b8892a] mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    {[
                      { display: "+977 985-1126710", tel: "+9779851126710", wa: "9779851126710" },
                      { display: "+977 976-7393900", tel: "+9779767393900", wa: "9779767393900" },
                    ].map(({ display, tel, wa }) => (
                      <div key={tel} className="flex items-center gap-2 flex-wrap">
                        <a href={`tel:${tel}`} className="hover:text-[#b8892a] hover:underline transition-colors font-medium">{display}</a>
                        <a
                          href={`https://wa.me/${wa}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-[#25d366]/10 text-[#1a9e4d] border border-[#25d366]/30 hover:bg-[#25d366]/20 transition-colors font-medium"
                        >
                          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.099 1.516 5.82L0 24l6.335-1.496A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.006-1.367l-.36-.214-3.728.88.937-3.64-.235-.374A9.808 9.808 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
                          </svg>
                          WhatsApp
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm text-[#4a3728]">
                  <MapPin size={14} className="text-[#b8892a] mt-0.5 flex-shrink-0" />
                  <p>Barahakshetra-1, Chataradham, Sunsari, Nepal</p>
                </div>
                <Link href="/donate">
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#c84b11] to-[#e8922a] hover:from-[#b53e0e] hover:to-[#d07d1e] text-white text-sm font-medium py-3 rounded-xl transition-all shadow-md mt-6">
                    <GraduationCap size={14} />
                    Sponsor a Child's Education
                  </button>
                </Link>
              </div>
            </div>
            {/* Poster carousel */}
            <div className="flex flex-col items-center gap-3">
              {/* Language tabs */}
              <div className="flex gap-2 self-start">
                {POSTERS.map((p, i) => (
                  <button
                    key={p.label}
                    onClick={() => setPosterIndex(i)}
                    className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                      i === posterIndex
                        ? "bg-[#b8892a] border-[#b8892a] text-white"
                        : "border-[#b8892a]/40 text-[#b8892a] hover:bg-[#b8892a]/10"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              {/* Image + arrows */}
              <div className="relative w-full group">
                <button
                  onClick={() => setLightbox(POSTERS[posterIndex].src)}
                  className="relative w-full rounded-xl overflow-hidden shadow-xl border border-[#b8892a]/20 cursor-zoom-in focus:outline-none block"
                >
                  <img
                    src={POSTERS[posterIndex].src}
                    alt={POSTERS[posterIndex].alt}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                  </div>
                </button>
                {/* Prev / Next */}
                <button
                  onClick={() => setPosterIndex(i => (i - 1 + POSTERS.length) % POSTERS.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setPosterIndex(i => (i + 1) % POSTERS.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
              {/* Dots */}
              <div className="flex gap-2">
                {POSTERS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPosterIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${i === posterIndex ? "bg-[#b8892a]" : "bg-[#b8892a]/30"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Gurukul poster full size"
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* ── TWO WORLDS ── */}
      <section className="py-20 px-6 bg-[#f4ede0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">The Dual Path</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#2c1a08] font-light">Ancient Wisdom. Modern Capability.</h2>
            <div className="w-12 h-px bg-[#b8892a]/40 mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Modern */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#b8892a]/15">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#f4ede0] flex items-center justify-center">
                  <Laptop size={18} className="text-[#b8892a]" />
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-2xl text-[#2c1a08] font-light">Modern Excellence</h3>
              </div>
              <ul className="space-y-3">
                {MODERN_FEATURES.map(({ label }) => (
                  <li key={label} className="flex items-center gap-3 text-[#4a3728] text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b8892a] flex-shrink-0" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
            {/* Vedic */}
            <div className="bg-[#2c1a08] rounded-2xl p-8 shadow-sm border border-[#b8892a]/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#b8892a]/20 flex items-center justify-center">
                  <Flame size={18} className="text-[#e8c56a]" />
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-2xl text-white font-light">Vedic Living</h3>
              </div>
              <ul className="space-y-3">
                {VEDIC_FEATURES.map(({ label }) => (
                  <li key={label} className="flex items-center gap-3 text-white/75 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e8c56a] flex-shrink-0" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIX PILLARS ── */}
      <section className="py-20 px-6 bg-[#faf9f6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Why This Gurukul</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#2c1a08] font-light">Six Pillars of Formation</h2>
            <div className="w-12 h-px bg-[#b8892a]/40 mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map(({ title, desc, img, imgAlt }) => (
              <div key={title} className="bg-white rounded-2xl overflow-hidden border border-[#b8892a]/15 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-44 overflow-hidden">
                  <img
                    src={img}
                    alt={imgAlt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="w-8 h-px bg-[#b8892a] mb-3" />
                  <h3 className="font-['Cormorant_Garamond'] text-xl text-[#2c1a08] font-medium mb-2">{title}</h3>
                  <p className="text-[#6a5c48] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE BANNER ── */}
      <section className="py-16 px-6 bg-[#1a0c03]">
        <div className="max-w-3xl mx-auto text-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto mb-5 opacity-50">
            <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/>
          </svg>
          <p className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-white font-light italic leading-snug mb-4">
            "Not just certificates — the formation of authentic character. That is our highest purpose."
          </p>
          <p className="text-[#e8c56a] text-xs tracking-widest uppercase">— Jagadguru Mahayogi Siddhababa</p>
        </div>
      </section>

      {/* ── SPONSOR A CHILD ── */}
      <section className="py-20 px-6 bg-[#faf9f6]">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-xl border border-[#b8892a]/15">

            {/* Left — warm gold panel */}
            <div className="bg-[#b8892a] px-10 py-12 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mb-6">
                  <GraduationCap size={22} className="text-white" />
                </div>
                <p className="text-white/70 text-xs uppercase tracking-[0.3em] font-medium mb-3">Scholarship Programme</p>
                <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-white font-light leading-tight mb-5">
                  Sponsor a Child's<br />Education
                </h2>
                <p className="text-white/80 text-base leading-relaxed">
                  Many gifted children in Nepal dream of a Gurukul education but cannot afford the fees. Your sponsorship covers a child's full residential year — giving them not just schooling, but a life transformed by wisdom, discipline, and love.
                </p>
              </div>
              <div className="mt-10 border-t border-white/20 pt-6">
                <p className="text-white/60 text-xs uppercase tracking-widest mb-1">One sponsor. One child. One future.</p>
                <p className="font-['Cormorant_Garamond'] text-white text-2xl italic">
                  "The highest gift is the gift of education."
                </p>
              </div>
            </div>

            {/* Right — cream panel */}
            <div className="bg-[#fdf8f2] px-10 py-12 flex flex-col justify-between">
              <div>
                <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-6">Your sponsorship covers</p>
                <div className="space-y-4">
                  {[
                    { label: "Full board & residential accommodation", detail: "A safe, sattvic home throughout the year" },
                    { label: "NEB academic tuition", detail: "English-medium Grade 6–12 curriculum" },
                    { label: "Vedic & spiritual education", detail: "Sanskrit, yoga, meditation, values" },
                    { label: "Meals, healthcare & wellbeing", detail: "Nutritious sattvic food and care" },
                    { label: "Books, materials & uniform", detail: "Everything a student needs to thrive" },
                  ].map(({ label, detail }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#b8892a]/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#b8892a]" />
                      </div>
                      <div>
                        <p className="text-[#2c1a08] text-sm font-medium leading-snug">{label}</p>
                        <p className="text-[#9a8070] text-xs mt-0.5">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <Link href="/donate">
                  <button className="w-full flex items-center justify-center gap-2 bg-[#b8892a] hover:bg-[#a07820] text-white font-medium py-4 rounded-2xl transition-colors text-sm tracking-wide shadow-md">
                    <Heart size={15} />
                    Sponsor a Child Now
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="w-full flex items-center justify-center gap-2 border border-[#b8892a]/30 text-[#b8892a] hover:bg-[#b8892a]/8 font-medium py-3.5 rounded-2xl transition-colors text-sm">
                    Ask Us About Scholarships
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ADMISSIONS CTA ── */}
      <section className="py-20 px-6 bg-[#f4ede0]">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <span className="inline-block bg-[#b8892a]/15 text-[#b8892a] text-xs font-medium px-4 py-1.5 rounded-full tracking-widest uppercase mb-5">
            Admissions Now Open
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#2c1a08] font-light leading-tight mb-3">
            Give Your Child a Future<br />
            <span className="text-[#b8892a]">Rooted in Wisdom</span>
          </h2>
          <p className="text-[#6a5c48] text-base mb-2">
            Academic Session 2082 B.S. (2025–26) · Grade 6 Intake
          </p>
          <p className="text-[#9a8070] text-sm mb-10">
            Seats are limited. Contact Us.
          </p>

          {/* Call buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {[
              { display: "+977 985-1126710", tel: "+9779851126710", wa: "9779851126710" },
              { display: "+977 976-7393900", tel: "+9779767393900", wa: "9779767393900" },
            ].map(({ display, tel, wa }) => (
              <div key={tel} className="flex flex-col gap-2">
                <a
                  href={`tel:${tel}`}
                  className="flex items-center justify-center gap-2 bg-[#b8892a] hover:bg-[#a07820] text-white font-medium px-7 py-4 rounded-2xl transition-colors shadow-md text-base"
                >
                  <Phone size={16} />
                  {display}
                </a>
                <a
                  href={`https://wa.me/${wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1fba59] text-white font-medium px-7 py-3 rounded-2xl transition-colors text-sm"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.099 1.516 5.82L0 24l6.335-1.496A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.006-1.367l-.36-.214-3.728.88.937-3.64-.235-.374A9.808 9.808 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
                  </svg>
                  WhatsApp us
                </a>
              </div>
            ))}
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-1.5 text-sm text-[#6a5c48]">
            <MapPin size={13} className="text-[#b8892a]" />
            Barahakshetra-1, Chataradham, Sunsari, Nepal
          </div>
        </div>
      </section>

      {/* ── FOOTER SPACE ── */}
      <div className="h-16 bg-[#faf9f6]" />
    </div>
  );
}
