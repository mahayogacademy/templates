import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import KundaliniRising from "@/components/KundaliniRising";
import { Link } from "wouter";
import { ArrowRight, MapPin, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const b = import.meta.env.BASE_URL;

function RecolouredSymbol({ src, className }: { src: string; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] < 30) continue;
        // All visible pixels → off-white
        data[i] = 205; data[i + 1] = 158; data[i + 2] = 65;
      }
      ctx.putImageData(new ImageData(data, canvas.width, canvas.height), 0, 0);
    };
    img.src = src;
  }, [src]);
  return <canvas ref={canvasRef} className={className} />;
}

export default function Home() {
  const { t } = useTranslation();
  const [galleryReady, setGalleryReady] = useState(false);
  useEffect(() => { setGalleryReady(true); }, []);

  // Paths carousel (mobile auto-scroll + manual arrows)
  const pathsRef = useRef<HTMLDivElement>(null);
  const [pathIdx, setPathIdx] = useState(0);
  const PATH_COUNT = 4;
  function pathScroll(dir: 1 | -1) {
    const next = (pathIdx + dir + PATH_COUNT) % PATH_COUNT;
    setPathIdx(next);
    const el = pathsRef.current;
    if (!el) return;
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  }
  useEffect(() => {
    const el = pathsRef.current;
    if (!el) return;
    const interval = setInterval(() => {
      const next = pathIdx + 1 >= PATH_COUNT ? 0 : pathIdx + 1;
      setPathIdx(next);
      el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
    }, 3000);
    return () => clearInterval(interval);
  }, [pathIdx]);

  // Projects carousel (mobile manual arrows)
  const projRef = useRef<HTMLDivElement>(null);
  const [projIdx, setProjIdx] = useState(0);
  const PROJ_COUNT = 4;
  function projScroll(dir: 1 | -1) {
    const next = (projIdx + dir + PROJ_COUNT) % PROJ_COUNT;
    setProjIdx(next);
    const el = projRef.current;
    if (!el) return;
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  }

  const PATHS = [
    {
      key: "meditation",
      href: "/meditation",
      img: `${b}images/mahayog-group-meditation.jpg`,
      overlay: "bg-gradient-to-t from-[#1a0f05]/50 to-transparent",
      mobilePos: "50% 30%",
    },
    {
      key: "ashram",
      href: "/ashram",
      img: `${b}images/ashram-yogic-life.jpg`,
      overlay: "bg-gradient-to-t from-[#1a0f05]/50 to-transparent",
    },
    {
      key: "vedanta",
      href: "/vedanta",
      img: `${b}images/vedanta-hero.png`,
      overlay: "bg-gradient-to-t from-[#1a0f05]/50 to-transparent",
    },
    {
      key: "service",
      href: "/projects",
      img: `${b}images/selfless-service.jpg`,
      overlay: "bg-gradient-to-t from-[#1a0f05]/50 to-transparent",
    },
  ] as const;

  const GALLERY_SRCS = [
    `${b}images/gallery-ganesh-puja.jpg`,
    `${b}images/gallery-gurudev-youth.jpg`,
    `${b}images/gallery-mass-meditation.jpg`,
    `${b}images/gallery-kalash-yatra.jpg`,
    `${b}images/ashram-cows-sunset.jpg`,
    `${b}images/gallery-bhu-samadhi.jpg`,
    `${b}images/gallery-students-meditation.jpg`,
    `${b}images/gallery-dada-gurudev.jpg`,
    `${b}images/ashram-satsang-night.jpg`,
    `${b}images/gallery-saints-gathering.jpg`,
    `${b}images/gallery-ashram-calf.jpg`,
    `${b}images/gallery-gurukul-girls.jpg`,
    `${b}images/gallery-bageshwar-dham.jpg`,
    `${b}images/hanumad-crowd-satsang.jpg`,
    `${b}images/gallery-with-prachanda.jpg`,
    `${b}images/gallery-army-meditation.jpg`,
    `${b}images/gallery-with-gyanendra.jpg`,
    `${b}images/gallery-temple-inauguration.jpg`,
    `${b}images/ashram-prasad-1.jpg`,
    `${b}images/ashram-koshi-river.jpg`,
    `${b}images/gallery-rajendra-das.jpg`,
    `${b}images/gallery-ramdev.jpg`,
    `${b}images/gallery-shaktipat-deeksha.jpg`,
  ];

  const captions = (t("home.gallery.captions", { returnObjects: true }) as string[]) ?? [];
  const GALLERY = GALLERY_SRCS.map((src, i) => ({ src, caption: captions[i] ?? "" }));


  return (
    <div className="bg-[#faf9f6] text-[#3d3830] min-h-screen">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "calc(55vh - 64px)" }}>
        {/* Full-width hero image */}
        <div className="absolute inset-0">
          <img src={`${b}images/hero-nepal-landscape.png`} alt="" aria-hidden
            className="w-full h-full object-cover object-center" />
        </div>
        {/* Dark overlay fading to cream at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/55 via-[#1a0f05]/60 via-[65%] to-[#faf9f6]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16 md:pt-0">
          {/* Sacred symbols */}
          <div className="flex justify-center mb-3 md:mb-6">
            <RecolouredSymbol
              src={`${b}images/dhanush-band.png`}
              className="h-20 w-auto object-contain"
            />
          </div>
          {/* Ornament */}
          <div className="flex items-center justify-center gap-4 mb-4 md:mb-8">
            <div className="h-px w-14 bg-[#e8c56a]/80" />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/>
            </svg>
            <div className="h-px w-14 bg-[#e8c56a]/80" />
          </div>

          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-5 tracking-wide">
            {t("home.hero.title1")}<br/>
            <span className="text-[#e8c56a]">{t("home.hero.title2")}</span>
          </h1>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/about">
              <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-8 py-3.5 rounded-full tracking-wider transition-all duration-200 cursor-pointer shadow-lg shadow-[#b8892a]/30">
                {t("home.hero.ctaExplore")}
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </Link>
          </div>
        </div>

        {/* Scroll nudge */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#e8c56a] animate-pulse" />
        </div>
      </section>

      {/* ── MISSION + THREE PILLARS (shared decorative background) ── */}
      <div className="relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 20%, #f5ede0 0%, #faf9f6 65%)" }}>
        {/* Faint SVG mandala watermark */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none" viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <g transform="translate(450,350)">
            {[0,20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340].map((deg, i) => (
              <g key={i} transform={`rotate(${deg})`}>
                <ellipse cx="0" cy="-110" rx="22" ry="55" fill="none" stroke="#b8892a" strokeWidth="0.7"/>
                <ellipse cx="0" cy="-190" rx="13" ry="28" fill="none" stroke="#b8892a" strokeWidth="0.4"/>
              </g>
            ))}
            <circle cx="0" cy="0" r="50" fill="none" stroke="#b8892a" strokeWidth="0.7"/>
            <circle cx="0" cy="0" r="110" fill="none" stroke="#b8892a" strokeWidth="0.5"/>
            <circle cx="0" cy="0" r="170" fill="none" stroke="#b8892a" strokeWidth="0.3"/>
            <circle cx="0" cy="0" r="230" fill="none" stroke="#b8892a" strokeWidth="0.2"/>
          </g>
        </svg>

      {/* ── THREE PILLARS CARDS ── */}
      <section className="relative pt-6 pb-6 md:pt-14 md:pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end">

            {/* Mahayog */}
            <Link href="/meditation">
              <div className="group relative rounded-3xl overflow-hidden h-[300px] md:h-[500px] cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#b8892a]/20 transition-all duration-500 ring-1 ring-[#b8892a]/40">
                <img
                  src={`${b}images/mahayog-diksha-jap.jpg`}
                  alt={t("home.pillars.mahayog.title")}
                  className="w-full h-full object-cover object-[80%_100%] md:object-left group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05] via-[#1a0f05]/75 to-[#1a0f05]/10" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-7">
                  <div className="h-px w-8 bg-[#b8892a] mb-2 md:mb-4" />
                  <h3 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-white mb-1 md:mb-2 leading-tight">{t("home.pillars.mahayog.title")}</h3>
                  <p className="text-sm text-white/85 leading-relaxed mb-3 md:mb-5">{t("home.pillars.mahayog.desc")}</p>
                  <span className="inline-flex items-center gap-2 text-[#c9a24e] text-xs tracking-[0.15em] uppercase font-medium group-hover:gap-3 transition-all duration-300">
                    {t("home.pillars.mahayog.cta")} <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </Link>

            {/* Mahayogi — centre */}
            <Link href="/founder-guru">
              <div className="group relative rounded-3xl overflow-hidden h-[300px] md:h-[500px] cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#b8892a]/20 transition-all duration-500 ring-1 ring-[#b8892a]/40">
                <img
                  src={`${b}images/gurudev-darshan-smile.jpg`}
                  alt={t("home.pillars.mahayogi.alt")}
                  className="w-full h-full object-cover object-bottom md:object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05] via-[#1a0f05]/75 to-[#1a0f05]/10" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-7">
                  <div className="h-px w-8 bg-[#b8892a] mb-2 md:mb-4" />
                  <h3 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-white mb-1 md:mb-2 leading-tight">{t("home.pillars.mahayogi.title")}</h3>
                  <p className="text-sm text-white/85 leading-relaxed mb-3 md:mb-5">{t("home.pillars.mahayogi.desc")}</p>
                  <span className="inline-flex items-center gap-2 text-[#c9a24e] text-xs tracking-[0.15em] uppercase font-medium group-hover:gap-3 transition-all duration-300">
                    {t("home.pillars.mahayogi.cta")} <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </Link>

            {/* For Mankind */}
            <Link href="/about">
              <div className="group relative rounded-3xl overflow-hidden h-[300px] md:h-[500px] cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#b8892a]/20 transition-all duration-500 ring-1 ring-[#b8892a]/40">
                <img
                  src={`${b}images/ashram-prasad-1.jpg`}
                  alt={t("home.pillars.forMankind.alt")}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05] via-[#1a0f05]/75 to-[#1a0f05]/10" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-7">
                  <div className="h-px w-8 bg-[#b8892a] mb-2 md:mb-4" />
                  <h3 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-white mb-1 md:mb-2 leading-tight">{t("home.pillars.forMankind.title")}</h3>
                  <p className="text-sm text-white/85 leading-relaxed mb-3 md:mb-5">{t("home.pillars.forMankind.desc")}</p>
                  <span className="inline-flex items-center gap-2 text-[#c9a24e] text-xs tracking-[0.15em] uppercase font-medium group-hover:gap-3 transition-all duration-300">
                    {t("home.pillars.forMankind.cta")} <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>
      {/* ── MISSION STATEMENT ── */}
      <section className="relative py-10 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-4 md:mb-8">
            <div className="h-px w-10 bg-[#b8892a]/40" />
            <span className="uppercase tracking-[0.3em] text-xs text-[#b8892a] font-medium">{t("home.mission.eyebrow")}</span>
            <div className="h-px w-10 bg-[#b8892a]/40" />
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl lg:text-4xl font-light text-[#3d3830] leading-tight mb-2 md:whitespace-nowrap">
            {t("home.mission.lead")}
          </h2>
          <p className="font-['Cormorant_Garamond'] text-3xl md:text-4xl lg:text-5xl font-light italic text-[#b8892a] leading-tight mb-4 md:mb-8">
            {t("home.mission.leadSub")}
          </p>
          <div className="text-base text-[#6a6058] leading-relaxed max-w-xl mx-auto border-t border-b border-[#b8892a]/30 py-5 tracking-wide space-y-4">
            <p>{t("home.mission.support")}</p>
            <p>{t("home.mission.support2")}</p>
          </div>
        </div>
      </section>

      </div>{/* end decorative background wrapper */}

      {/* ── EXPLORE PATHS ── */}
      <section className="py-10 md:py-24 bg-[#f5ece0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6 md:mb-14">
            <span className="uppercase tracking-[0.3em] text-xs text-[#b8892a] font-medium">{t("home.paths.eyebrow")}</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#2e2820] mt-3">
              {t("home.paths.heading")}
            </h2>
          </div>
        </div>

        {/* Mobile: auto-scrolling carousel with arrows */}
        <div className="md:hidden relative px-6">
          <div
            ref={pathsRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PATHS.map((path) => {
              const label = t(`home.paths.items.${path.key}.label`);
              const desc = t(`home.paths.items.${path.key}.desc`);
              return (
                <Link key={path.href} href={path.href}>
                  <div className="snap-start shrink-0 w-[82vw] group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#e8dece] flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img src={path.img} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={path.mobilePos ? { objectPosition: path.mobilePos } : undefined} />
                      <div className={`absolute inset-0 ${path.overlay}`} />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2e2820] mb-2 leading-snug">{label}</h3>
                      <p className="text-sm text-[#6a6058] leading-relaxed flex-1">{desc}</p>
                      <div className="flex items-center gap-1.5 mt-4 text-[#b8892a] text-xs font-medium uppercase tracking-wider">
                        <span>{t("home.paths.cta")}</span>
                        <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Arrow controls */}
          <div className="flex items-center justify-between mt-5">
            <button
              onClick={() => pathScroll(-1)}
              disabled={pathIdx === 0}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[#b8892a]/40 text-[#b8892a] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#b8892a] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <div className="flex gap-1.5">
              {Array.from({ length: PATH_COUNT }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setPathIdx(i); pathsRef.current?.scrollTo({ left: i * pathsRef.current.clientWidth, behavior: "smooth" }); }}
                  className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer ${i === pathIdx ? "bg-[#b8892a]" : "bg-[#b8892a]/25"}`}
                />
              ))}
            </div>
            <button
              onClick={() => pathScroll(1)}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[#b8892a]/40 text-[#b8892a] hover:bg-[#b8892a] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:block max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PATHS.map((path) => {
              const label = t(`home.paths.items.${path.key}.label`);
              const desc = t(`home.paths.items.${path.key}.desc`);
              return (
                <Link key={path.href} href={path.href}>
                  <div className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#e8dece] hover:shadow-2xl hover:shadow-[#b8892a]/12 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-52 overflow-hidden">
                      <img src={path.img} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className={`absolute inset-0 ${path.overlay}`} />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2e2820] mb-3 leading-snug">{label}</h3>
                      <p className="text-base text-[#6a6058] leading-relaxed flex-1">{desc}</p>
                      <div className="flex items-center gap-1.5 mt-5 text-[#b8892a] text-xs font-medium uppercase tracking-wider group-hover:gap-2.5 transition-all">
                        <span>{t("home.paths.cta")}</span>
                        <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GURU INTRODUCTION ── */}
      <section className="py-0 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative h-[300px] md:h-[640px]">
              <img
                src={`${b}images/gurudev-photo.png`}
                alt={t("home.guru.alt")}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent from-50% via-transparent via-65% to-[#faf9f6] hidden md:block" />
            </div>

            {/* Text */}
            <div className="px-6 md:px-16 py-8 md:py-16 bg-[#faf9f6]">
              <span className="uppercase tracking-[0.3em] text-xs text-[#b8892a] font-medium">{t("home.guru.eyebrow")}</span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#2e2820] mt-3 mb-6 leading-snug">
                {t("home.guru.heading")}
              </h2>
              <div className="h-px w-12 bg-[#b8892a]/40 mb-6" />
              <p className="text-base text-[#5a5248] leading-relaxed mb-5">
                {t("home.guru.para1")}
              </p>
              <p className="text-base text-[#5a5248] leading-relaxed mb-8">
                {t("home.guru.para2")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/founder-guru">
                  <span className="inline-flex items-center gap-2 text-[#b8892a] hover:text-[#9d7422] text-sm font-medium tracking-wider uppercase transition-colors cursor-pointer group">
                    {t("home.guru.ctaLearn")}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
                  </span>
                </Link>
                <Link href="/guru-darshan">
                  <span className="inline-flex items-center gap-2 text-[#b8892a] hover:text-[#9d7422] text-sm font-medium tracking-wider uppercase transition-colors cursor-pointer group">
                    {t("home.guru.ctaMeet")}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KUNDALINI RISING ── */}
      <KundaliniRising />

      {/* ── PHOTO GALLERY CAROUSEL ── */}
      <section className="py-10 md:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-5 md:mb-10 text-center">
          <span className="uppercase tracking-[0.3em] text-xs text-[#b8892a] font-medium">{t("home.gallery.eyebrow")}</span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#2e2820] mt-3">{t("home.gallery.heading")}</h2>
        </div>

        <style>{`
          @keyframes marquee-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: marquee-scroll 60s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Auto-scrolling strip */}
        <div
          className="overflow-hidden transition-opacity duration-700"
          style={{ opacity: galleryReady ? 1 : 0 }}
        >
          <div
            className="marquee-track flex gap-4"
            style={{ width: "max-content", willChange: "transform", transform: "translateZ(0)" }}
          >
            {[...GALLERY, ...GALLERY].map((g, i) => (
              <div
                key={i}
                className="shrink-0 w-72 h-52 rounded-2xl overflow-hidden group relative"
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  loading={i < GALLERY.length ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-0 left-0 right-0 px-3 py-2.5 text-white text-xs leading-snug translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-['Inter']">
                  {g.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/events">
            <span className="inline-flex items-center gap-2 border border-[#b8892a] hover:bg-[#b8892a] hover:text-white text-[#b8892a] text-sm font-medium tracking-wider uppercase transition-all duration-200 cursor-pointer group px-6 py-2.5 rounded-full">
              {t("home.gallery.cta")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
            </span>
          </Link>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="py-10 md:py-24 bg-[#fdf6ec] border-t border-[#e8d8b8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-16">
            <span className="uppercase tracking-[0.3em] text-xs text-[#b8892a] font-medium">{t("home.projects.eyebrow")}</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#2e2820] mt-3">
              {t("home.projects.heading")}
            </h2>
            <div className="h-px w-12 bg-[#b8892a]/40 mx-auto mt-6" />
          </div>
        </div>

        {/* Mobile: manual carousel with arrows */}
        <div className="md:hidden relative px-6">
          <div
            ref={projRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-5 pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Card 1 — Gurukul */}
            <Link href="/gurukul">
              <div className="snap-start shrink-0 w-[82vw] group bg-white rounded-2xl border border-[#e8dece] overflow-hidden flex flex-col cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={`${b}images/gurukul-hero.png`} alt={t("home.projects.gurukul.alt")} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/60 to-transparent" />
                  <span className="absolute top-4 left-4 text-xs uppercase tracking-[0.2em] text-[#e8c56a] font-semibold bg-[#1a0f05]/50 px-2.5 py-1 rounded-full">{t("home.projects.gurukul.tag")}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-light text-[#2e2820] mb-2 leading-snug">{t("home.projects.gurukul.title")}</h3>
                  <div className="h-px w-8 bg-[#b8892a]/40 mb-3" />
                  <p className="text-sm text-[#6a6058] leading-relaxed flex-1">{t("home.projects.gurukul.desc")}</p>
                  <div className="flex items-center gap-1.5 mt-4 text-[#b8892a] text-xs font-medium uppercase tracking-wider">
                    <span>{t("home.projects.cta")}</span><ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </div>
                </div>
              </div>
            </Link>
            {/* Card 2 — Ram Mandir */}
            <Link href="/projects">
              <div className="snap-start shrink-0 w-[82vw] group bg-white rounded-2xl border border-[#e8dece] overflow-hidden flex flex-col cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={`${b}images/ram-mandir-1.jpg`} alt={t("home.projects.ramMandir.alt")} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/60 to-transparent" />
                  <span className="absolute top-4 left-4 text-xs uppercase tracking-[0.2em] text-[#e8c56a] font-semibold bg-[#1a0f05]/50 px-2.5 py-1 rounded-full">{t("home.projects.ramMandir.tag")}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-light text-[#2e2820] mb-2 leading-snug">{t("home.projects.ramMandir.title")}</h3>
                  <div className="h-px w-8 bg-[#b8892a]/40 mb-3" />
                  <p className="text-sm text-[#6a6058] leading-relaxed flex-1">{t("home.projects.ramMandir.desc")}</p>
                  <div className="flex items-center gap-1.5 mt-4 text-[#b8892a] text-xs font-medium uppercase tracking-wider">
                    <span>{t("home.projects.cta")}</span><ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </div>
                </div>
              </div>
            </Link>
            {/* Card 3 — Hanuman */}
            <Link href="/projects">
              <div className="snap-start shrink-0 w-[82vw] group bg-white rounded-2xl border border-[#e8dece] overflow-hidden flex flex-col cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={`${b}images/hanuman-temple-portrait.png`} alt={t("home.projects.hanuman.alt")} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ objectPosition: "50% 30%" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/60 to-transparent" />
                  <span className="absolute top-4 left-4 text-xs uppercase tracking-[0.2em] text-[#e8c56a] font-semibold bg-[#1a0f05]/50 px-2.5 py-1 rounded-full">{t("home.projects.hanuman.tag")}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-light text-[#2e2820] mb-2 leading-snug">{t("home.projects.hanuman.title")}</h3>
                  <div className="h-px w-8 bg-[#b8892a]/40 mb-3" />
                  <p className="text-sm text-[#6a6058] leading-relaxed flex-1">{t("home.projects.hanuman.desc")}</p>
                  <div className="flex items-center gap-1.5 mt-4 text-[#b8892a] text-xs font-medium uppercase tracking-wider">
                    <span>{t("home.projects.cta")}</span><ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </div>
                </div>
              </div>
            </Link>
            {/* Card 4 — Cultural */}
            <div className="snap-start shrink-0 w-[82vw] bg-white rounded-2xl border border-[#e8dece] overflow-hidden flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img src={`${b}images/initiative-green-revolution.png`} alt={t("home.projects.cultural.alt")} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/60 to-transparent" />
                <span className="absolute top-4 left-4 text-xs uppercase tracking-[0.2em] text-[#e8c56a] font-semibold bg-[#1a0f05]/50 px-2.5 py-1 rounded-full">{t("home.projects.cultural.tag")}</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-['Cormorant_Garamond'] text-xl font-light text-[#2e2820] mb-2 leading-snug">{t("home.projects.cultural.title")}</h3>
                <div className="h-px w-8 bg-[#b8892a]/40 mb-3" />
                <p className="text-sm text-[#6a6058] leading-relaxed flex-1">{t("home.projects.cultural.desc")}</p>
              </div>
            </div>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center justify-between mt-5">
            <button
              onClick={() => projScroll(-1)}
              disabled={projIdx === 0}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[#b8892a]/40 text-[#b8892a] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#b8892a] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            {/* Dot indicators */}
            <div className="flex gap-1.5">
              {Array.from({ length: PROJ_COUNT }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setProjIdx(i); projRef.current?.scrollTo({ left: i * projRef.current.clientWidth, behavior: "smooth" }); }}
                  className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer ${i === projIdx ? "bg-[#b8892a]" : "bg-[#b8892a]/25"}`}
                />
              ))}
            </div>
            <button
              onClick={() => projScroll(1)}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[#b8892a]/40 text-[#b8892a] hover:bg-[#b8892a] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Desktop: 2-col grid */}
        <div className="hidden md:block max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/gurukul">
              <div className="group bg-white rounded-2xl border border-[#e8dece] hover:shadow-xl hover:shadow-[#b8892a]/10 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer">
                <div className="relative h-52 overflow-hidden">
                  <img src={`${b}images/gurukul-hero.png`} alt={t("home.projects.gurukul.alt")} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/60 to-transparent" />
                  <span className="absolute top-4 left-4 text-sm uppercase tracking-[0.25em] text-[#e8c56a] font-semibold bg-[#1a0f05]/50 px-3 py-1 rounded-full">{t("home.projects.gurukul.tag")}</span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-light text-[#2e2820] mb-3 leading-snug">{t("home.projects.gurukul.title")}</h3>
                  <div className="h-px w-8 bg-[#b8892a]/40 mb-4" />
                  <p className="text-base text-[#6a6058] leading-relaxed flex-1">{t("home.projects.gurukul.desc")}</p>
                  <div className="flex items-center gap-1.5 mt-6 text-[#b8892a] text-xs font-medium uppercase tracking-wider group-hover:gap-2.5 transition-all">
                    <span>{t("home.projects.cta")}</span><ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/projects">
              <div className="group bg-white rounded-2xl border border-[#e8dece] hover:shadow-xl hover:shadow-[#b8892a]/10 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer">
                <div className="relative h-52 overflow-hidden">
                  <img src={`${b}images/ram-mandir-1.jpg`} alt={t("home.projects.ramMandir.alt")} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/60 to-transparent" />
                  <span className="absolute top-4 left-4 text-sm uppercase tracking-[0.25em] text-[#e8c56a] font-semibold bg-[#1a0f05]/50 px-3 py-1 rounded-full">{t("home.projects.ramMandir.tag")}</span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-light text-[#2e2820] mb-3 leading-snug">{t("home.projects.ramMandir.title")}</h3>
                  <div className="h-px w-8 bg-[#b8892a]/40 mb-4" />
                  <p className="text-base text-[#6a6058] leading-relaxed flex-1">{t("home.projects.ramMandir.desc")}</p>
                  <div className="flex items-center gap-1.5 mt-6 text-[#b8892a] text-xs font-medium uppercase tracking-wider group-hover:gap-2.5 transition-all">
                    <span>{t("home.projects.cta")}</span><ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/projects">
              <div className="group bg-white rounded-2xl border border-[#e8dece] hover:shadow-xl hover:shadow-[#b8892a]/10 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer">
                <div className="relative h-52 overflow-hidden">
                  <img src={`${b}images/hanuman-temple-portrait.png`} alt={t("home.projects.hanuman.alt")} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ objectPosition: "50% 30%" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/60 to-transparent" />
                  <span className="absolute top-4 left-4 text-sm uppercase tracking-[0.25em] text-[#e8c56a] font-semibold bg-[#1a0f05]/50 px-3 py-1 rounded-full">{t("home.projects.hanuman.tag")}</span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-light text-[#2e2820] mb-3 leading-snug">{t("home.projects.hanuman.title")}</h3>
                  <div className="h-px w-8 bg-[#b8892a]/40 mb-4" />
                  <p className="text-base text-[#6a6058] leading-relaxed flex-1">{t("home.projects.hanuman.desc")}</p>
                  <div className="flex items-center gap-1.5 mt-6 text-[#b8892a] text-xs font-medium uppercase tracking-wider group-hover:gap-2.5 transition-all">
                    <span>{t("home.projects.cta")}</span><ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </div>
                </div>
              </div>
            </Link>
            <div className="bg-white rounded-2xl border border-[#e8dece] overflow-hidden flex flex-col h-full">
              <div className="relative h-52 overflow-hidden">
                <img src={`${b}images/initiative-green-revolution.png`} alt={t("home.projects.cultural.alt")} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/60 to-transparent" />
                <span className="absolute top-4 left-4 text-sm uppercase tracking-[0.25em] text-[#e8c56a] font-semibold bg-[#1a0f05]/50 px-3 py-1 rounded-full">{t("home.projects.cultural.tag")}</span>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-light text-[#2e2820] mb-3 leading-snug">{t("home.projects.cultural.title")}</h3>
                <div className="h-px w-8 bg-[#b8892a]/40 mb-4" />
                <p className="text-base text-[#6a6058] leading-relaxed flex-1">{t("home.projects.cultural.desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DONATE CTA ── */}
      <section className="relative py-14 md:py-28 px-6 overflow-hidden">
        <img
          src={`${b}images/ashram-cows-sunset.jpg`}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a1505]/70 via-[#1a0f05]/65 to-[#1a0f05]/80" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#e8c56a]/50" />
            <Heart className="w-4 h-4 text-[#e8c56a]/70" strokeWidth={1.2} />
            <div className="h-px w-10 bg-[#e8c56a]/50" />
          </div>

          <span className="uppercase tracking-[0.3em] text-xs text-[#e8c56a] font-medium">{t("home.donate.eyebrow")}</span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-white mt-4 mb-6 leading-snug">
            {t("home.donate.headingLine1")}<br className="hidden md:block" /> {t("home.donate.headingLine2")}
          </h2>
          <p className="text-[#e8d8bc] text-base leading-relaxed mb-10 max-w-lg mx-auto">
            {t("home.donate.body")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/donate">
              <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-9 py-3.5 rounded-full tracking-wider transition-colors duration-200 cursor-pointer shadow-lg shadow-black/30">
                <Heart className="w-4 h-4" strokeWidth={1.5} />
                {t("home.donate.ctaDana")}
              </span>
            </Link>
            <Link href="/volunteer">
              <span className="inline-flex items-center gap-2 border border-white/30 hover:border-[#e8c56a]/60 text-white/80 hover:text-[#e8c56a] text-sm px-9 py-3.5 rounded-full tracking-wider transition-all duration-200 cursor-pointer">
                {t("home.donate.ctaVolunteer")}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CLOSING QUOTE + FOOTER ── */}
      <div style={{ background: "radial-gradient(ellipse at 60% 30%, #2c1708 0%, #1a0d04 55%, #0f0702 100%)" }}>
      <section className="relative py-14 md:py-28 px-6 overflow-hidden">
        {/* Subtle SVG mandala watermark */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <g transform="translate(400,200)">
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
              <g key={i} transform={`rotate(${deg})`}>
                <ellipse cx="0" cy="-80" rx="18" ry="40" fill="none" stroke="#e8c56a" strokeWidth="0.6"/>
                <ellipse cx="0" cy="-140" rx="10" ry="22" fill="none" stroke="#e8c56a" strokeWidth="0.4"/>
              </g>
            ))}
            <circle cx="0" cy="0" r="40" fill="none" stroke="#e8c56a" strokeWidth="0.6"/>
            <circle cx="0" cy="0" r="80" fill="none" stroke="#e8c56a" strokeWidth="0.4"/>
            <circle cx="0" cy="0" r="120" fill="none" stroke="#e8c56a" strokeWidth="0.3"/>
            <circle cx="0" cy="0" r="160" fill="none" stroke="#e8c56a" strokeWidth="0.2"/>
          </g>
        </svg>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-10 bg-[#e8c56a]/60" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/60" />
          </div>
          <p className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-white italic leading-relaxed mb-10">
            {t("home.closing.quote")}
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 border border-[#e8c56a]/60 hover:border-[#e8c56a] text-[#e8c56a] hover:text-white text-sm px-8 py-3.5 rounded-full tracking-wider transition-all duration-200 cursor-pointer">
              {t("home.closing.cta")}
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
}
