import { useState } from "react";
import Nav from "@/components/Nav";
import { Link } from "wouter";
import { Phone, MapPin, BookOpen, Sun, Heart, Users, Laptop, Flame, X, ZoomIn } from "lucide-react";

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
  },
  {
    title: "Modern Curriculum",
    desc: "Grade 6–12 under the NEB curriculum in English medium. Science, mathematics, computer, and technical subjects taught to global standards.",
  },
  {
    title: "Vedic Living",
    desc: "Sanskrit recitation, Vedic studies, Ayurveda, Jyotish, and yoga woven into daily life — not as electives, but as a way of being.",
  },
  {
    title: "Residential Life",
    desc: "Students live as ancient Rishis — a disciplined, sattvic, and loving residential environment that becomes a true second home.",
  },
  {
    title: "Holistic Development",
    desc: "Sports, music, cultural arts, and community service cultivate the full person — strong in body, sharp in mind, and noble in spirit.",
  },
  {
    title: "Patriotism & Service",
    desc: "Students are nurtured with deep love for their homeland and a commitment to serve Nepal and the world with wisdom and integrity.",
  },
];

export default function Gurukul() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#faf9f6] font-['Inter']">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${b}images/gurukul-hero.png`}
            alt="Jagatguru Shriramanandacharya Gurukul — sacred learning at Barahakshetra"
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
            Jagatguru Shree Ramanandacharya<br /><span className="text-[#e8c56a]">Gurukul</span>
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
            "Western Mind &amp; Eastern Philosophy"
          </p>
          <p className="text-white/70 text-sm mt-2 tracking-wide">
            For the first time in Nepal — a Gurukul that unites the best of both worlds
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
                Under the divine guidance of <span className="font-medium text-[#2c1a08]">His Holiness Jagatguru Mahayogi Siddhababa</span>, Jagatguru Shriramanandacharya Gurukul opens its doors at the sacred grounds of Chataradham, Barahakshetra.
              </p>
              <p>
                This fully residential institution offers Grade 6 children, under the NEB curriculum in English medium, the opportunity to not merely study, but <em>live</em> the lifestyle of the ancient Rishis. Each day begins before dawn and unfolds through a rhythm of prayer, yoga, learning, and reflection.
              </p>
              <p>
                In today's world, true success lies not just in degrees but in <strong>character, sanskar, discipline, and spiritual awareness</strong>. This Gurukul is committed to shaping strong, visionary, and culturally grounded individuals in a safe, loving, and sattvic environment.
              </p>
              <p className="text-xs text-[#9a8070] italic pt-2">
                Click either poster to view full size.
              </p>
            </div>
            {/* Two posters side by side */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: `${b}images/gurukul-poster-en.jpg`, alt: "Gurukul English poster — Vedic Values, Modern Education" },
                { src: `${b}images/gurukul-poster.jpg`,    alt: "Gurukul Nepali poster — Vedic Sanskar, Modern Education" },
              ].map(({ src, alt }) => (
                <button
                  key={src}
                  onClick={() => setLightbox(src)}
                  className="relative group rounded-xl overflow-hidden shadow-lg border border-[#b8892a]/20 cursor-zoom-in focus:outline-none"
                >
                  <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                  </div>
                </button>
              ))}
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
            {PILLARS.map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 border border-[#b8892a]/15 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-px bg-[#b8892a] mb-4" />
                <h3 className="font-['Cormorant_Garamond'] text-xl text-[#2c1a08] font-medium mb-3">{title}</h3>
                <p className="text-[#6a5c48] text-sm leading-relaxed">{desc}</p>
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
          <p className="text-[#e8c56a] text-xs tracking-widest uppercase">— Jagatguru Shriramanandacharya Gurukul</p>
        </div>
      </section>

      {/* ── ADMISSIONS CTA ── */}
      <section className="py-20 px-6 bg-[#f4ede0]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Admissions</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#2c1a08] font-light mb-3">Admission Open Now</h2>
            <p className="text-[#6a5c48] text-base">Limited seats available — Academic Session 2082 (2025–26)</p>
            <div className="w-12 h-px bg-[#b8892a]/40 mx-auto mt-4" />
          </div>

          <div className="bg-white rounded-2xl p-8 border border-[#b8892a]/20 shadow-sm space-y-6">
            {/* Urgent badge */}
            <div className="text-center">
              <span className="inline-block bg-[#b8892a] text-white text-xs font-medium px-5 py-2 rounded-full tracking-wide uppercase">
                Limited Seats — Apply Early
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#b8892a] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#2c1a08] text-sm font-medium mb-1">Contact</p>
                  <p className="text-[#4a3728] text-sm">+977 985-1126710</p>
                  <p className="text-[#4a3728] text-sm">+977 976-7393900</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#b8892a] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#2c1a08] text-sm font-medium mb-1">Location</p>
                  <p className="text-[#4a3728] text-sm">Barahakshetra-1, Chataradham</p>
                  <p className="text-[#4a3728] text-sm">Sunsari, Koshi Province, Nepal</p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#b8892a]/15 pt-5 text-center">
              <p className="text-[#6a5c48] text-xs mb-4">For more information, visit</p>
              <a
                href="https://www.siddhamahayog.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b8892a] text-sm font-medium hover:underline"
              >
                www.siddhamahayog.org
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 bg-[#b8892a] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#a07820] transition-colors">
                Contact the Academy
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER SPACE ── */}
      <div className="h-16 bg-[#faf9f6]" />
    </div>
  );
}
