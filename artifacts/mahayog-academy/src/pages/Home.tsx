import Nav from "@/components/Nav";
import { Link } from "wouter";
import { ArrowRight, MapPin, Heart } from "lucide-react";

const b = import.meta.env.BASE_URL;

const PATHS = [
  {
    label: "Himalayan Siddha Mahayog",
    sub: "Meditation & Inner Awakening",
    href: "/meditation",
    img: `${b}images/mahayog-group-meditation.jpg`,
    desc: "Receive Shaktipat initiation and experience the automatic awakening of Kundalini — effortlessly integrating all four yoga paths as taught by Siddhababa.",
  },
  {
    label: "Ashram & Sacred Life",
    sub: "Daily Seva · Puja · Community",
    href: "/ashram",
    img: `${b}images/ashram-satsang.png`,
    desc: "Immerse yourself in the daily rhythm of Barahachhetra — morning puja, gau seva, satsang, prasad, and the stillness of a consecrated Himalayan sanctuary.",
  },
  {
    label: "Vedanta Philosophy",
    sub: "Ancient Wisdom for Modern Minds",
    href: "/vedanta",
    img: `${b}images/vedanta-hero.png`,
    desc: "A 300-hour live course taught personally by Siddhababa — exploring Brahman, the Self, and the nature of Reality, practised alongside daily Mahayog meditation.",
  },
  {
    label: "Seva & Sacred Service",
    sub: "Gau Seva · Bhojan · Outreach",
    href: "/projects",
    img: `${b}images/ashram-seva.png`,
    desc: "From building Hanuman temples and caring for sacred cows to serving prasad and nurturing youth — selfless service as the highest spiritual practice.",
  },
];

const GALLERY = [
  { src: `${b}images/ashram-cows-sunset.jpg`, alt: "Gau Seva at sunset" },
  { src: `${b}images/ashram-satsang-night.jpg`, alt: "Night satsang at the ashram" },
  { src: `${b}images/hanumad-satsang-stage.jpg`, alt: "Satsang gathering" },
  { src: `${b}images/ashram-prasad-1.jpg`, alt: "Prasad distribution" },
  { src: `${b}images/hanumad-crowd-satsang.jpg`, alt: "Devotees at mahayagya" },
  { src: `${b}images/ashram-koshi-river.jpg`, alt: "Koshi River at Barahachetra" },
  { src: `${b}images/hanumad-saints-river.jpg`, alt: "Saints at the river" },
  { src: `${b}images/ashram-hanuman-sunset.jpg`, alt: "Hanuman temple at dusk" },
];

export default function Home() {
  return (
    <div className="bg-[#faf9f6] text-[#3d3830] min-h-screen">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "calc(100vh - 64px)" }}>
        {/* Full-width hero image */}
        <div className="absolute inset-0">
          <img src={`${b}images/hero-nepal-landscape.png`} alt="" aria-hidden
            className="w-full h-full object-cover object-center" />
        </div>
        {/* Unified dark veil + bottom cream fade */}
        <div className="absolute inset-0 bg-[#1a0f05]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#faf9f6]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Ornament */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-14 bg-[#e8c56a]/80" />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/>
            </svg>
            <div className="h-px w-14 bg-[#e8c56a]/80" />
          </div>

          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] mb-5 tracking-wide">
            Mahayogi Siddhababa<br/>
            <span className="text-[#e8c56a]">Spiritual Academy</span>
          </h1>

          <p className="text-base md:text-lg text-[#f0e4c8] tracking-[0.2em] uppercase font-light mb-12">
            Ancient Wisdom · Holistic Living · Inner Awakening
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/about">
              <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-8 py-3.5 rounded-full tracking-wider transition-all duration-200 cursor-pointer shadow-lg shadow-[#b8892a]/30">
                Explore the Academy
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </Link>
            <Link href="/meditation">
              <span className="inline-flex items-center gap-2 border border-white/50 hover:border-[#e8c56a] text-white hover:text-[#e8c56a] text-sm px-8 py-3.5 rounded-full tracking-wider transition-all duration-200 cursor-pointer backdrop-blur-sm">
                Discover Mahayog
              </span>
            </Link>
          </div>
        </div>

        {/* Scroll nudge */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#e8c56a] animate-pulse" />
        </div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-10 bg-[#b8892a]/40" />
            <span className="uppercase tracking-[0.3em] text-xs text-[#b8892a] font-medium">Our Purpose</span>
            <div className="h-px w-10 bg-[#b8892a]/40" />
          </div>
          <p className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#3d3830] leading-relaxed mb-8">
            A living sanctuary where seekers from every corner of the world come to experience the depths of Vedic wisdom, Himalayan yoga, and sacred service.
          </p>
          <p className="text-sm text-[#6a6058] leading-relaxed max-w-xl mx-auto border-t border-b border-[#b8892a]/30 py-5 tracking-wide">
            A Not-for-profit and volunteer-run organization, rooted in the ancient Ramanandi lineage and guided by the direct grace of Enlightened Guru, His Holiness Jagadguru Mahayogi Siddhababa.
          </p>
        </div>
      </section>

      {/* ── THREE PILLARS CARDS ── */}
      <section className="py-6 pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-5 items-end">

            {/* Mahayog */}
            <Link href="/meditation">
              <div className="group relative rounded-3xl overflow-hidden h-[440px] md:h-[500px] cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#b8892a]/20 transition-all duration-500">
                <img
                  src={`${b}images/mahayog-diksha-jap.jpg`}
                  alt="Mahayog"
                  className="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/95 via-[#1a0f05]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="h-px w-8 bg-[#b8892a] mb-4" />
                  <h3 className="font-['Cormorant_Garamond'] text-4xl font-light text-white mb-2 leading-tight">Mahayog</h3>
                  <p className="text-sm text-white/65 leading-relaxed mb-5">The ancient meditation of automatic Kundalini awakening</p>
                  <span className="inline-flex items-center gap-2 text-[#c9a24e] text-xs tracking-[0.15em] uppercase font-medium group-hover:gap-3 transition-all duration-300">
                    Explore <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </Link>

            {/* Mahayogi — centre, rises above side cards */}
            <Link href="/founder-guru">
              <div className="group relative rounded-3xl overflow-hidden h-[510px] md:h-[580px] -mt-12 cursor-pointer shadow-2xl hover:shadow-[#b8892a]/30 transition-all duration-500 ring-1 ring-[#b8892a]/40">
                <img
                  src={`${b}images/gurudev-darshan-smile.jpg`}
                  alt="Jagadguru Mahayogi Siddhababa"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/95 via-[#1a0f05]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="h-px w-8 bg-[#b8892a] mb-4" />
                  <h3 className="font-['Cormorant_Garamond'] text-4xl font-light text-white mb-2 leading-tight">Mahayogi</h3>
                  <p className="text-sm text-white/65 leading-relaxed mb-5">His Holiness Jagadguru Mahayogi Siddhababa — living master and guide</p>
                  <span className="inline-flex items-center gap-2 text-[#c9a24e] text-xs tracking-[0.15em] uppercase font-medium group-hover:gap-3 transition-all duration-300">
                    Meet the Guru <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </Link>

            {/* For Mankind */}
            <Link href="/about">
              <div className="group relative rounded-3xl overflow-hidden h-[440px] md:h-[500px] cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#b8892a]/20 transition-all duration-500">
                <img
                  src={`${b}images/ashram-prasad-1.jpg`}
                  alt="For Mankind"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/95 via-[#1a0f05]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="h-px w-8 bg-[#b8892a] mb-4" />
                  <h3 className="font-['Cormorant_Garamond'] text-4xl font-light text-white mb-2 leading-tight">For Mankind</h3>
                  <p className="text-sm text-white/65 leading-relaxed mb-5">Sacred service, selfless giving and the upliftment of all beings</p>
                  <span className="inline-flex items-center gap-2 text-[#c9a24e] text-xs tracking-[0.15em] uppercase font-medium group-hover:gap-3 transition-all duration-300">
                    Discover <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ── EXPLORE PATHS ── */}
      <section className="py-24 px-6 bg-[#f5ece0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="uppercase tracking-[0.3em] text-xs text-[#b8892a] font-medium">Your Path Awaits</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#2e2820] mt-3">
              Explore the Academy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PATHS.map((path) => (
              <Link key={path.href} href={path.href}>
                <div className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#e8dece] hover:shadow-2xl hover:shadow-[#b8892a]/12 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={path.img}
                      alt={path.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/50 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2e2820] mb-3 leading-snug">{path.label}</h3>
                    <p className="text-sm text-[#6a6058] leading-relaxed flex-1">{path.desc}</p>
                    <div className="flex items-center gap-1.5 mt-5 text-[#b8892a] text-xs font-medium uppercase tracking-wider group-hover:gap-2.5 transition-all">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GURU INTRODUCTION ── */}
      <section className="py-0 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative h-[520px] md:h-[640px]">
              <img
                src={`${b}images/jagadguru-2.jpg`}
                alt="Jagadguru Mahayogi Siddhababa"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#faf9f6]/30 md:to-[#faf9f6]" />
            </div>

            {/* Text */}
            <div className="px-10 md:px-16 py-16 bg-[#faf9f6]">
              <span className="uppercase tracking-[0.3em] text-xs text-[#b8892a] font-medium">The Guru</span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#2e2820] mt-3 mb-6 leading-snug">
                Jagadguru Mahayogi Siddhababa
              </h2>
              <div className="h-px w-12 bg-[#b8892a]/40 mb-6" />
              <p className="text-base text-[#5a5248] leading-relaxed mb-5">
                Born in the Himalayan foothills of Nepal and initiated into the Ramananda Sampraday, Siddhababa is a living master of Mahayog — the ancient science of awakening through prana, breath, and consciousness.
              </p>
              <p className="text-base text-[#5a5248] leading-relaxed mb-8">
                His life is marked by extraordinary yogic feats — including three medically witnessed Bhu Samadhi immersions — and an unwavering commitment to selfless service, teaching, and the upliftment of all beings.
              </p>
              <Link href="/founder-guru">
                <span className="inline-flex items-center gap-2 text-[#b8892a] hover:text-[#9d7422] text-sm font-medium tracking-wider uppercase transition-colors cursor-pointer group">
                  Learn His Story
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY STRIP ── */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
          <span className="uppercase tracking-[0.3em] text-xs text-[#b8892a] font-medium">Life at the Ashram</span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#2e2820] mt-3">A Glimpse Within</h2>
        </div>

        {/* Scrollable strip */}
        <div className="flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {GALLERY.map((g, i) => (
            <div
              key={i}
              className="shrink-0 w-72 h-52 rounded-2xl overflow-hidden snap-start group"
            >
              <img
                src={g.src}
                alt={g.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/events">
            <span className="inline-flex items-center gap-2 text-[#b8892a] hover:text-[#9d7422] text-sm font-medium tracking-wider uppercase transition-colors cursor-pointer group">
              View Events & Gatherings
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
            </span>
          </Link>
        </div>
      </section>

      {/* ── GURU DARSHAN INVITATION ── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <img
          src={`${b}images/gurudev-darshan-hero.jpg`}
          alt="Guru Darshan"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1a0f05]/72" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#e8c56a]/60" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/60" />
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-white mb-5 leading-snug">
            Seek the Guru's Blessing
          </h2>
          <p className="text-[#f0e4c8] text-base leading-relaxed mb-10 max-w-lg mx-auto">
            Darshan — the auspicious sight of the Guru — is a profound gift available to all sincere seekers. Learn how to request a personal blessing or join a group satsang.
          </p>
          <Link href="/guru-darshan">
            <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-8 py-3.5 rounded-full tracking-wider transition-colors duration-200 cursor-pointer shadow-lg shadow-black/30">
              Arrange Darshan
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </span>
          </Link>
        </div>
      </section>

      {/* ── DONATE CTA ── */}
      <section className="py-20 px-6 bg-[#fdf6ec] border-t border-b border-[#e8d8b8]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Support the Mission</span>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#2e2820] mt-2 mb-4 leading-snug">
              Every offering sustains a sacred flame
            </h2>
            <p className="text-base text-[#6a6058] leading-relaxed">
              The Academy operates entirely through the generosity of devotees and well-wishers worldwide. Your gift — however modest — keeps the gau seva, prasad distribution, and spiritual education alive for all.
            </p>
          </div>
          <div className="shrink-0 flex flex-col items-center gap-4">
            <Link href="/donate">
              <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-8 py-3.5 rounded-full tracking-wider transition-colors duration-200 cursor-pointer shadow-md shadow-[#b8892a]/20">
                <Heart className="w-4 h-4" strokeWidth={1.5} />
                Offer Dana
              </span>
            </Link>
            <Link href="/volunteer">
              <span className="text-sm text-[#b8892a] hover:text-[#9d7422] underline underline-offset-2 cursor-pointer transition-colors tracking-wide">
                Or volunteer your time
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CLOSING QUOTE ── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <img
          src={`${b}images/quote-banner-bg.png`}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1a0f05]/75" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-10 bg-[#e8c56a]/60" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/60" />
          </div>
          <p className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-white italic leading-relaxed mb-10">
            "Come with an open heart. Leave with a quiet mind. Return with a changed life."
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 border border-[#e8c56a]/60 hover:border-[#e8c56a] text-[#e8c56a] hover:text-white text-sm px-8 py-3.5 rounded-full tracking-wider transition-all duration-200 cursor-pointer">
              Get in Touch
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </span>
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1e140a] text-[#c4b49a] py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <img src={`${b}images/logo.png`} alt="Academy logo" className="h-10 w-auto mb-4 opacity-90" />
              <p className="font-['Cormorant_Garamond'] text-xl font-light text-[#e8c56a] mb-3">
                Mahayogi Siddhababa Spiritual Academy
              </p>
              <p className="text-sm text-[#9a8878] leading-relaxed max-w-xs">
                A not-for-profit, volunteer-run sanctuary dedicated to Vedic wisdom, holistic living, and selfless service — rooted in the Himalayas, open to the world.
              </p>
            </div>

            {/* Explore */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-medium mb-4">Explore</p>
              <ul className="space-y-2.5">
                {[
                  { label: "About the Academy", href: "/about" },
                  { label: "Founder Guru", href: "/founder-guru" },
                  { label: "Ashram & Centers", href: "/ashram" },
                  { label: "Events", href: "/events" },
                  { label: "Projects", href: "/projects" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>
                      <span className="text-sm text-[#9a8878] hover:text-[#e8c56a] cursor-pointer transition-colors">{l.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn & Join */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-medium mb-4">Learn & Join</p>
              <ul className="space-y-2.5">
                {[
                  { label: "Mahayog Meditation", href: "/meditation" },
                  { label: "Vedanta Course", href: "/vedanta" },
                  { label: "Gurukul", href: "/gurukul" },
                  { label: "Volunteer", href: "/volunteer" },
                  { label: "Donate", href: "/donate" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>
                      <span className="text-sm text-[#9a8878] hover:text-[#e8c56a] cursor-pointer transition-colors">{l.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#3a2a1a] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-[#6a5a4a]">© {new Date().getFullYear()} Mahayogi Siddhababa Spiritual Academy, Nepal. All rights reserved.</p>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#b8892a]" strokeWidth={1.5} />
              <p className="text-xs text-[#6a5a4a]">Barahachetra, Sunsari, Nepal</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
