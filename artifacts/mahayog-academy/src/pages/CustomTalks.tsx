import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowRight, Mic, Users, Building2, Leaf, Globe, Clock } from "lucide-react";

const b = import.meta.env.BASE_URL;

const FORMATS = [
  {
    icon: Mic,
    title: "Keynote Talk",
    duration: "45 – 90 min",
    desc: "An inspiring address on Vedic wisdom, consciousness, or the science of inner well-being — ideal for conferences, retreats, and large gatherings.",
  },
  {
    icon: Users,
    title: "Half-Day Workshop",
    duration: "3 – 4 hours",
    desc: "An immersive, participatory session combining teaching, guided meditation, and Q&A — suited to yoga studios, wellness centres, and spiritual communities.",
  },
  {
    icon: Globe,
    title: "Online Session",
    duration: "Flexible",
    desc: "Bring the wisdom of the Himalayan tradition to your global audience via Zoom — accessible from anywhere in the world, for groups of any size.",
  },
  {
    icon: Building2,
    title: "Workplace Programme",
    duration: "Half or full day",
    desc: "A tailor-made programme for corporate teams — addressing stress, leadership, focus, and the deeper dimensions of meaningful work.",
  },
  {
    icon: Leaf,
    title: "Retreat Module",
    duration: "1 – 3 days",
    desc: "A dedicated module woven into an existing retreat — deepening the inner dimension of any wellness or spiritual programme.",
  },
  {
    icon: Clock,
    title: "Ongoing Series",
    duration: "Weekly / Monthly",
    desc: "A structured series of sessions over several weeks or months — ideal for communities seeking sustained growth and deepening practice.",
  },
];

const TOPICS = [
  { title: "Himalayan Siddha Mahayog Meditation", tag: "Signature" },
  { title: "Vedic Philosophy & the Nature of the Self", tag: "" },
  { title: "Stress, the Mind & the Science of Inner Peace", tag: "Corporate" },
  { title: "Kundalini, Prana & the Subtle Body", tag: "" },
  { title: "Dharma — Living with Purpose & Integrity", tag: "" },
  { title: "Ayurveda & Vedic Approaches to Wellbeing", tag: "" },
  { title: "Death, Consciousness & the Vedic View of Life", tag: "" },
  { title: "Guru, Grace & the Path of Spiritual Surrender", tag: "" },
];

const WHO = [
  "Yoga studios & wellness centres",
  "Universities & educational institutions",
  "Corporations & professional organisations",
  "Spiritual communities & meditation groups",
  "Retreat centres & festival organisers",
  "Hospitals & healthcare providers",
  "Faith communities & interfaith forums",
  "Online platforms & global audiences",
];

export default function CustomTalks() {
  return (
    <div className="min-h-screen bg-[#faf9f6] font-['Inter']">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${b}images/custom-talks-hero.png`}
            alt="Spiritual talk at Mahayogi Siddhababa Spiritual Academy with audience"
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0803]/90 via-[#2c1205]/65 to-[#faf9f6]" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#e8c56a]/60" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/60" />
          </div>
          <p className="text-[#e8c56a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Mahayogi Siddhababa Spiritual Academy</p>
          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl font-light text-white leading-tight">
            Custom Talks &amp;<br /><span className="text-[#e8c56a]">Workshops</span>
          </h1>
          <p className="text-white text-sm tracking-widest uppercase font-light mt-4">
            Bringing Vedic Wisdom to Your Community
          </p>
          <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-7 py-3 rounded-full tracking-wider transition-colors duration-200 cursor-pointer">
                Enquire Now <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-20 px-6 bg-[#faf9f6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">About This Offering</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#2c1a08] font-light leading-snug">
              Ancient Wisdom for the Modern World
            </h2>
            <div className="w-12 h-px bg-[#b8892a]/40 mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 text-[#4a3728] text-base leading-relaxed">
              <p>
                Jagadguru Mahayogi Siddhababa and the Academy's senior teachers are available to bring the depth of the Vedic tradition to your organisation, community, or event — through talks, workshops, and immersive programmes tailored to your needs.
              </p>
              <p>
                Whether you are seeking an inspiring keynote, a transformative meditation workshop, or a sustained series on Vedic philosophy, we offer a thoughtful, authentic experience drawn from a living lineage of Himalayan wisdom.
              </p>
              <p>
                Each programme is designed in close consultation with you — honouring the unique context, audience, and intention of your gathering.
              </p>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 border border-[#b8892a]/40 text-[#b8892a] hover:bg-[#b8892a]/8 text-sm font-medium px-6 py-3 rounded-full transition-colors cursor-pointer mt-2">
                  Discuss Your Programme <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-md border border-[#e8dece]">
              <img
                src={`${b}images/custom-talks-workshop.png`}
                alt="Intimate meditation workshop with a small group"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TOPICS ── */}
      <section className="py-20 px-6 bg-[#f4ede0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Subject Areas</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#2c1a08] font-light">Topics We Offer</h2>
            <div className="w-12 h-px bg-[#b8892a]/40 mx-auto mt-4" />
            <p className="text-[#6a5c48] text-base mt-4 max-w-xl mx-auto">
              All topics can be adapted in depth, language, and format for your specific audience — from complete beginners to experienced practitioners.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {TOPICS.map(({ title, tag }) => (
              <div key={title} className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 border border-[#e8dece] shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#b8892a] flex-shrink-0" />
                <p className="text-[#2c1a08] text-base font-medium flex-1">{title}</p>
                {tag && (
                  <span className="text-sm uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-[#b8892a]/10 text-[#b8892a] font-medium flex-shrink-0">
                    {tag}
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-[#9a8070] text-base mt-8 italic">
            Don't see your topic? Reach out — we are happy to develop bespoke content.
          </p>
        </div>
      </section>

      {/* ── FORMATS ── */}
      <section className="py-20 px-6 bg-[#faf9f6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">How We Work</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#2c1a08] font-light">Programme Formats</h2>
            <div className="w-12 h-px bg-[#b8892a]/40 mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FORMATS.map(({ icon: Icon, title, duration, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-[#e8dece] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#b8892a]/10 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#b8892a]" />
                </div>
                <p className="text-[#b8892a] text-xs uppercase tracking-[0.2em] font-medium mb-1">{duration}</p>
                <h3 className="font-['Cormorant_Garamond'] text-xl text-[#2c1a08] font-medium mb-3">{title}</h3>
                <p className="text-[#6a5c48] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ── */}
      <section className="py-20 px-6 bg-[#f4ede0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-md border border-[#e8dece]">
              <img
                src={`${b}images/custom-talks-community.jpg`}
                alt="Large group meditation session with the Mahayogi Siddhababa community"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Who This Is For</p>
              <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#2c1a08] font-light mb-6 leading-snug">
                We Work With All Communities
              </h2>
              <div className="space-y-3">
                {WHO.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 border border-[#e8dece]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#b8892a] flex-shrink-0" />
                    <p className="text-[#4a3728] text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE BANNER ── */}
      <section className="py-16 px-6 bg-[#1a0c03]">
        <div className="max-w-3xl mx-auto text-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mx-auto mb-6">
            <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/>
          </svg>
          <p className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-white font-light italic leading-snug mb-4">
            "Wisdom shared is wisdom multiplied. When one lamp lights another, neither loses its flame."
          </p>
          <p className="text-[#e8c56a] text-xs tracking-widest uppercase">— Jagadguru Mahayogi Siddhababa</p>
        </div>
      </section>

      {/* ── ENQUIRE CTA ── */}
      <section className="py-20 px-6 bg-[#faf9f6]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Get in Touch</p>
          <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#2c1a08] font-light mb-5">
            Ready to Bring This to Your Community?
          </h2>
          <p className="text-[#6a5c48] text-base leading-relaxed max-w-xl mx-auto mb-10">
            Write to us with a brief description of your organisation, the size and nature of your audience, and what you are hoping to offer them. We will be in touch to explore the possibilities together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-8 py-3.5 rounded-full tracking-wider transition-colors duration-200 cursor-pointer shadow-md">
                Send an Enquiry <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </Link>
            <Link href="/founder-guru">
              <span className="inline-flex items-center gap-2 border border-[#b8892a]/40 text-[#b8892a] hover:bg-[#b8892a]/8 text-sm px-8 py-3.5 rounded-full tracking-wider transition-colors duration-200 cursor-pointer">
                About the Teacher
              </span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
