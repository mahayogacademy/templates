import { useState } from "react";
import { useTranslation } from "react-i18next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const b = import.meta.env.BASE_URL;

const RELATED_META = [
  { type: "article" as const, thumbnail: `${b}images/teachings-prana.png`,                 href: "/teachings/barahachhetra" },
  { type: "article" as const, thumbnail: `${b}images/teachings-nepal.png`,                 href: "/teachings/nepal-sacred-geography" },
  { type: "interview" as const, thumbnail: "https://i.ytimg.com/vi/-L3KEFytQ9I/hqdefault.jpg", href: "https://www.youtube.com/watch?v=-L3KEFytQ9I" },
];

const GALLERY_TOP_META: { src: string; objectPosition?: string }[] = [
  { src: "ashram-hanuman-sunset.jpg" },
  { src: "ashram-cows-sunset.jpg" },
  { src: "ashram-hanuman-wide.jpg" },
  { src: "ashram-satsang-night.jpg" },
];

const GALLERY_BOT_META: { src: string; objectPosition?: string }[] = [
  { src: "ashram-garden.jpg" },
  { src: "ashram-cows-1.jpg" },
  { src: "ashram-extra-prasad-serve.jpg" },
  { src: "ashram-hanuman-close.jpg" },
  { src: "ashram-extra-IMG_7604_1777303599506.jpg" },
  { src: "ashram-extra-calf-hay.jpg" },
  { src: "ashram-extra-IMG_7797_1777303606369.jpg" },
  { src: "ashram-extra-panchamukhi.jpg", objectPosition: "center 20%" },
  { src: "ashram-extra-IMG_7688_1777303609347.jpg" },
  { src: "ashram-extra-IMG_0034_1777303590698.jpg" },
  { src: "ashram-extra-cow-portrait.jpg" },
  { src: "ashram-extra-IMG_7693_1777303612187.jpg" },
  { src: "ashram-extra-IMG_7898_1777303621687.jpg" },
  { src: "ashram-extra-cow-calf-bond.jpg" },
  { src: "ashram-extra-IMG_7933_1777303625151.jpg" },
  { src: "ashram-extra-IMG_8099_1777303638539.jpg" },
  { src: "ashram-extra-sanyasi-river.jpg" },
  { src: "ashram-extra-river-diyas.jpg" },
  { src: "ashram-extra-river-stones.jpg" },
  { src: "ashram-extra-IMG_7998_1777303631687.jpg" },
  { src: "ashram-extra-IMG_8009_1777303646025.jpg" },
  { src: "ashram-extra-procession.jpg" },
];

const SCHEDULE_TIMES = ["4:00 AM","4:30 AM","6:30 AM","7:30 AM","8:00 AM","10:30 AM","11:30 AM","1:00 PM","3:00 PM","3:30 PM","5:30 PM","6:30 PM","7:30 PM","8:00 PM","9:30 PM"];

const PILLAR_KEYS = ["sumiran", "seva", "satsang"] as const;
const ASHRAM_LIFE_IMAGES = [
  { img: "ashram-life-accommodation.png", alt: "Simple ashram accommodation" },
  { img: "ashram-life-satsang.png",       alt: "Satsang gathering with the Guru" },
  { img: "ashram-life-seva.png",          alt: "Devotees performing seva" },
  { img: "ashram-life-meals.png",         alt: "Sattvic prasad thali" },
];

const SEVA_OPTION_IMAGES = ["seva-gau-seva.png", "seva-hanuman-puja.png", "seva-akhanda-kirtan.png", "seva-brahmand-bhojan.png"];

export default function Ashram() {
  const { t } = useTranslation();
  const [topIdx, setTopIdx] = useState(0);
  const [botIdx, setBotIdx] = useState(0);
  const [mIdx, setMIdx] = useState(0);

  const galleryTop  = (t("ashram.gallery.top",    { returnObjects: true }) as string[]) ?? [];
  const galleryBot  = (t("ashram.gallery.bottom", { returnObjects: true }) as string[]) ?? [];
  const lifeItems   = (t("ashram.life.items",     { returnObjects: true }) as { title: string; desc: string }[]) ?? [];
  const scheduleItems = (t("ashram.schedule.items", { returnObjects: true }) as string[]) ?? [];
  const sevaOptions = (t("ashram.sevaCta.options", { returnObjects: true }) as { name: string; sub: string }[]) ?? [];
  const relatedItems = (t("ashram.related.items", { returnObjects: true }) as { tag: string; title: string; excerpt: string; date: string }[]) ?? [];
  const nepalOthers = (t("ashram.centers.nepalOthers", { returnObjects: true }) as { city: string; note: string }[]) ?? [];
  const international = (t("ashram.centers.international", { returnObjects: true }) as { country: string; cities: string }[]) ?? [];
  const guruTags = (t("ashram.guruAshram.tags", { returnObjects: true }) as string[]) ?? [];

  const TOP = GALLERY_TOP_META.map((m, i) => ({ ...m, caption: galleryTop[i] ?? "" }));
  const BOT = GALLERY_BOT_META.map((m, i) => ({ ...m, caption: galleryBot[i] ?? "" }));
  const ALL = [...TOP, ...BOT];

  const nt = TOP.length;
  const nb = BOT.length;
  const nm = ALL.length;
  const prevTop = () => setTopIdx((i) => (i - 1 + nt) % nt);
  const nextTop = () => setTopIdx((i) => (i + 1) % nt);
  const prevBot = () => setBotIdx((i) => (i - 1 + nb) % nb);
  const nextBot = () => setBotIdx((i) => (i + 1) % nb);
  const prevM = () => setMIdx((i) => (i - 1 + nm) % nm);
  const nextM = () => setMIdx((i) => (i + 1) % nm);

  return (
    <div className="bg-[#faf9f6] text-[#3d3830]" style={{ scrollBehavior: "smooth" }}>
      <Nav />

      {/* image preloader */}
      <div aria-hidden="true" className="absolute w-0 h-0 overflow-hidden pointer-events-none">
        {[...GALLERY_TOP_META, ...GALLERY_BOT_META].map(({ src }) => (
          <img key={src} src={`${b}images/${src}`} alt="" fetchPriority="low" />
        ))}
      </div>

      {/* HERO */}
      <section className="relative h-[58vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={`${b}images/ashram-hero.png`} alt={t("ashram.hero.imgAlt")} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/65 via-[#2c1a08]/40 to-[#faf9f6]" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#e8c56a]" />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/>
            </svg>
            <div className="h-px w-12 bg-[#e8c56a]" />
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light text-white leading-tight mb-4">{t("ashram.hero.title")}</h1>
          <p className="text-lg text-[#f0e4c8] tracking-widest uppercase font-light mb-8">{t("ashram.hero.subtitle")}</p>
          <a href="#visit" className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-7 py-3 rounded-full tracking-wider transition-colors duration-200">
            {t("ashram.hero.ctaPlanVisit")}
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>
      </section>

      {/* WHAT IS AN ASHRAM */}
      <div className="relative py-8 px-6 text-center overflow-hidden">
        <img src={`${b}images/banner-subtle-bg.png`} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" />
        <div className="absolute inset-0 bg-[#f8f6f3]/91 pointer-events-none" />
        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none" width="220" height="220" viewBox="0 0 220 220" aria-hidden>
          <g transform="translate(110,110)">
            {[0,20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340].map((deg, i) => (
              <g key={i} transform={`rotate(${deg})`}>
                <ellipse cx="0" cy="-52" rx="9" ry="24" fill="none" stroke="#b8892a" strokeWidth="0.8"/>
                <ellipse cx="0" cy="-82" rx="5" ry="11" fill="none" stroke="#b8892a" strokeWidth="0.5"/>
              </g>
            ))}
            <circle cx="0" cy="0" r="22" fill="none" stroke="#b8892a" strokeWidth="0.8"/>
            <circle cx="0" cy="0" r="52" fill="none" stroke="#b8892a" strokeWidth="0.5"/>
            <circle cx="0" cy="0" r="82" fill="none" stroke="#b8892a" strokeWidth="0.3"/>
          </g>
        </svg>
        <p className="relative text-base text-[#6a5f52] leading-relaxed max-w-2xl mx-auto">
          <span className="font-medium text-[#3d3830]">{t("ashram.whatIsLead")}</span>{t("ashram.whatIs")}
        </p>
      </div>

      {/* INTRO */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">{t("ashram.guruAshram.eyebrow")}</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2 mb-6 leading-snug">{t("ashram.guruAshram.heading")}</h2>
            <p className="text-base leading-relaxed text-[#5a5248] mb-5">{t("ashram.guruAshram.p1")}</p>
            <div className="h-px w-16 bg-[#d4a843]/60 mb-5" />
            <p className="text-base leading-relaxed text-[#5a5248]">{t("ashram.guruAshram.p2")}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {guruTags.map(tag => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-[#f5ece0] text-[#9d7422] border border-[#e8d5b0] tracking-wide">{tag}</span>
              ))}
            </div>
          </div>
          <div>
            <img src={`${b}images/ashram-koshi-river.jpg`} alt={t("ashram.guruAshram.imgAlt")} className="w-full rounded-2xl object-cover shadow-md" style={{ height: "420px" }} />
          </div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#fdf6ec] to-[#faf9f6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img src={`${b}images/ashram-meditation-hanuman.jpg`} alt={t("ashram.transformation.imgAlt")} className="w-full rounded-2xl object-cover shadow-md" style={{ height: "400px" }} />
          </div>
          <div>
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">{t("ashram.transformation.eyebrow")}</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2 mb-6 leading-snug">{t("ashram.transformation.heading")}</h2>
            <p className="text-base leading-relaxed text-[#5a5248] mb-5">{t("ashram.transformation.p1")}</p>
            <p className="text-base leading-relaxed text-[#5a5248]">{t("ashram.transformation.p2")}</p>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="relative py-20 px-6 overflow-hidden">
        <img src={`${b}images/ashram-hero.png`} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover object-center scale-105" />
        <div className="absolute inset-0 bg-[#faf0e0]/88" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">{t("ashram.pillars.eyebrow")}</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#3d3830] mt-2 mb-4">{t("ashram.pillars.heading")}</h2>
            <p className="text-base text-[#6b5f54] max-w-xl mx-auto leading-relaxed">{t("ashram.pillars.intro")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PILLAR_KEYS.map((k) => (
              <div key={k} className="bg-white/80 backdrop-blur-sm border border-[#e8d5b0] rounded-2xl p-8 hover:shadow-xl hover:shadow-[#b8892a]/12 hover:bg-white/95 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#fdf6ec] border border-[#e8c56a]/50 flex items-center justify-center mb-5">
                  <span className="text-[#b8892a] text-sm">✦</span>
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#b8892a] mb-1">{t(`ashram.pillars.items.${k}.sanskrit`)}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[#9a8f84] font-medium mb-4">{t(`ashram.pillars.items.${k}.title`)}</p>
                <div className="h-px w-8 bg-[#d4a843]/50 mb-4" />
                <p className="text-base leading-relaxed text-[#5a5248]">{t(`ashram.pillars.items.${k}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">{t("ashram.gallery.eyebrow")}</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2">{t("ashram.gallery.heading")}</h2>
          </div>

          {/* mobile carousel */}
          <div className="md:hidden relative">
            <div className="relative overflow-hidden rounded-2xl" style={{ height: "320px" }}>
              <img key={mIdx} src={`${b}images/${ALL[mIdx].src}`} alt={ALL[mIdx].caption} className="w-full h-full object-cover transition-opacity duration-500" style={{ filter: "brightness(1.06) saturate(1.18) contrast(1.02)", objectPosition: ALL[mIdx].objectPosition ?? "center" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-[10px] text-white/90 tracking-[0.1em] uppercase font-medium leading-tight">{ALL[mIdx].caption}</p>
              <button onClick={prevM} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-colors"><ChevronLeft className="w-5 h-5 text-white" strokeWidth={1.5} /></button>
              <button onClick={nextM} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-colors"><ChevronRight className="w-5 h-5 text-white" strokeWidth={1.5} /></button>
            </div>
            <div className="flex justify-center flex-wrap gap-1.5 mt-3">
              {ALL.map((_, i) => (
                <button key={i} onClick={() => setMIdx(i)} className={`w-1.5 h-1.5 rounded-full transition-all ${i === mIdx ? "bg-[#b8892a] scale-125" : "bg-[#d4a843]/30"}`} />
              ))}
            </div>
          </div>

          {/* desktop top */}
          <div className="hidden md:block relative overflow-hidden rounded-2xl mb-3" style={{ height: "360px" }}>
            <img key={topIdx} src={`${b}images/${TOP[topIdx].src}`} alt={TOP[topIdx].caption} className="w-full h-full object-cover transition-opacity duration-500" style={{ filter: "brightness(1.06) saturate(1.18) contrast(1.02)" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            <p className="absolute bottom-3 left-3 sm:bottom-4 sm:left-5 text-[10px] sm:text-xs text-white/90 tracking-[0.1em] sm:tracking-[0.2em] uppercase font-medium">{TOP[topIdx].caption}</p>
            <button onClick={prevTop} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-colors"><ChevronLeft className="w-5 h-5 text-white" strokeWidth={1.5} /></button>
            <button onClick={nextTop} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-colors"><ChevronRight className="w-5 h-5 text-white" strokeWidth={1.5} /></button>
            <div className="absolute bottom-4 right-5 flex gap-1.5">
              {TOP.map((_, i) => (
                <button key={i} onClick={() => setTopIdx(i)} className={`w-1.5 h-1.5 rounded-full transition-all ${i === topIdx ? "bg-white scale-125" : "bg-white/40"}`} />
              ))}
            </div>
          </div>

          {/* desktop bottom 3-tile */}
          <div className="hidden md:block relative">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[0, 1, 2].map((offset) => {
                const img = BOT[(botIdx + offset) % nb];
                return (
                  <div key={offset} className={`${offset > 0 ? "hidden sm:block " : ""}relative overflow-hidden rounded-2xl`} style={{ height: "240px" }}>
                    <img src={`${b}images/${img.src}`} alt={img.caption} className="w-full h-full object-cover transition-opacity duration-500" style={{ filter: "brightness(1.06) saturate(1.15) contrast(1.02)", objectPosition: img.objectPosition ?? "center" }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <p className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 text-[9px] sm:text-sm text-white/85 tracking-[0.05em] sm:tracking-[0.15em] uppercase leading-tight">{img.caption}</p>
                  </div>
                );
              })}
            </div>
            <button onClick={prevBot} className="absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-[#e8dece] shadow-sm hover:border-[#b8892a] flex items-center justify-center transition-colors z-10"><ChevronLeft className="w-4 h-4 text-[#b8892a]" strokeWidth={1.5} /></button>
            <button onClick={nextBot} className="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-[#e8dece] shadow-sm hover:border-[#b8892a] flex items-center justify-center transition-colors z-10"><ChevronRight className="w-4 h-4 text-[#b8892a]" strokeWidth={1.5} /></button>
            <div className="flex justify-center gap-1.5 mt-4">
              {BOT.map((_, i) => (
                <button key={i} onClick={() => setBotIdx(i)} className={`w-1.5 h-1.5 rounded-full transition-all ${i === botIdx ? "bg-[#b8892a] scale-125" : "bg-[#d4a843]/30"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ASHRAM LIFE */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#fdf6ec] to-[#faf9f6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">{t("ashram.life.eyebrow")}</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2">{t("ashram.life.heading")}</h2>
            <p className="text-sm text-[#7a7068] mt-3 max-w-lg mx-auto">{t("ashram.life.intro")}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {lifeItems.map((item, i) => (
              <div key={i} className="flex gap-0 bg-white rounded-2xl border border-[#e8dece] hover:shadow-lg hover:shadow-[#b8892a]/8 hover:border-[#d4a843]/40 transition-all duration-300 overflow-hidden">
                <div className="shrink-0 w-36 relative">
                  <img src={`${b}images/${ASHRAM_LIFE_IMAGES[i]?.img}`} alt={ASHRAM_LIFE_IMAGES[i]?.alt} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                </div>
                <div className="flex-1 p-6">
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#3d3830] mb-2 leading-snug">{item.title}</h3>
                  <div className="h-px w-6 bg-[#d4a843]/50 mb-3" />
                  <p className="text-base leading-relaxed text-[#5a5248]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAILY SCHEDULE */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">{t("ashram.schedule.eyebrow")}</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2">{t("ashram.schedule.heading")}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
            {[0, 1].map((colIdx) => {
              const start = colIdx === 0 ? 0 : Math.ceil(SCHEDULE_TIMES.length / 2);
              const end = colIdx === 0 ? Math.ceil(SCHEDULE_TIMES.length / 2) : SCHEDULE_TIMES.length;
              return (
                <div key={colIdx} className="flex flex-col">
                  {SCHEDULE_TIMES.slice(start, end).map((time, idx) => {
                    const i = start + idx;
                    return (
                      <div key={i} className="flex items-center gap-6 py-5 border-b border-[#e8dece]/60 last:border-b-0">
                        <span className="font-['Cormorant_Garamond'] text-xl text-[#b8892a] font-semibold min-w-[90px] tracking-wide shrink-0">{time}</span>
                        <div className="w-px h-6 bg-[#d4a843]/50 shrink-0" />
                        <span className="text-base text-[#5a5248]">{scheduleItems[i]}</span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AKHANDA KIRTAN */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${b}images/akhanda-kirtan-bg.png`} alt="" aria-hidden className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#fdf6ec]/91" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">{t("ashram.akhanda.eyebrow")}</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#2e2820] leading-snug mb-6">{t("ashram.akhanda.heading")}</h2>
            <div className="h-px w-10 bg-[#b8892a]/50 mb-6" />
            <p className="text-base text-[#4a4038] leading-relaxed mb-4">{t("ashram.akhanda.p1")}</p>
            <p className="text-base text-[#4a4038] leading-relaxed">
              <span className="italic">{t("ashram.akhanda.p2Lead")}</span>{t("ashram.akhanda.p2")}
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-36 h-36 rounded-full border border-[#b8892a]/50 flex items-center justify-center mb-6 bg-white/60 backdrop-blur-sm">
              <div className="text-center">
                <p className="font-['Cormorant_Garamond'] text-5xl font-light text-[#b8892a] leading-none">24</p>
                <p className="text-sm uppercase tracking-[0.3em] text-[#6a6058] mt-1">{t("ashram.akhanda.hoursDay")}</p>
              </div>
            </div>
            <p className="font-['Cormorant_Garamond'] text-2xl italic text-[#2e2820] mb-2">{t("ashram.akhanda.ramnam")}</p>
            <p className="text-xs uppercase tracking-[0.3em] text-[#6a6058]">{t("ashram.akhanda.ramnamSub")}</p>
          </div>
        </div>
      </section>

      {/* SEVA + SATSANG */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#fdf6ec] to-[#faf9f6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl border border-[#e8dece] overflow-hidden hover:shadow-lg hover:shadow-[#b8892a]/8 transition-all duration-300">
            <img src={`${b}images/ashram-seva.png`} alt={t("ashram.sevaSection.imgAlt")} className="w-full object-cover" style={{ height: "240px" }} />
            <div className="p-8">
              <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#b8892a] mb-1">{t("ashram.sevaSection.title")}</h3>
              <p className="text-sm uppercase tracking-[0.2em] text-[#9a8f84] font-medium mb-4">{t("ashram.sevaSection.sub")}</p>
              <div className="h-px w-8 bg-[#d4a843]/50 mb-4" />
              <p className="text-base leading-relaxed text-[#5a5248] mb-4">{t("ashram.sevaSection.p1")}</p>
              <p className="text-base leading-relaxed text-[#5a5248]">{t("ashram.sevaSection.p2")}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-[#e8dece] overflow-hidden hover:shadow-lg hover:shadow-[#b8892a]/8 transition-all duration-300">
            <img src={`${b}images/satsang-intimate.png`} alt={t("ashram.satsangSection.imgAlt")} className="w-full object-cover" style={{ height: "240px" }} />
            <div className="p-8">
              <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#b8892a] mb-1">{t("ashram.satsangSection.title")}</h3>
              <p className="text-sm uppercase tracking-[0.2em] text-[#9a8f84] font-medium mb-4">{t("ashram.satsangSection.sub")}</p>
              <div className="h-px w-8 bg-[#d4a843]/50 mb-4" />
              <p className="text-base leading-relaxed text-[#5a5248] mb-4">{t("ashram.satsangSection.p1")}</p>
              <p className="text-base leading-relaxed text-[#5a5248]">{t("ashram.satsangSection.p2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ASHRAM SEVA CTA */}
      <section className="py-20 px-6 bg-[#f5ece0] border-t border-b border-[#e2d0b8]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#b8892a]/60" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#b8892a] font-semibold">{t("ashram.sevaCta.eyebrow")}</span>
              <div className="h-px w-10 bg-[#b8892a]/60" />
            </div>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#2e2820] leading-snug mb-5">{t("ashram.sevaCta.heading")}</h2>
            <p className="text-base md:text-lg text-[#5a5248] leading-relaxed max-w-2xl mx-auto">{t("ashram.sevaCta.intro")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {sevaOptions.map((s, i) => (
              <div key={s.name} className="flex flex-col rounded-2xl bg-white border border-[#e2d0b8] shadow-sm hover:shadow-md hover:border-[#d4a843]/50 transition-all duration-300 overflow-hidden">
                <div className="w-full overflow-hidden" style={{ height: "160px" }}>
                  <img src={`${b}images/${SEVA_OPTION_IMAGES[i]}`} alt={s.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 text-center">
                  <span className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2e2820] leading-snug block mb-0.5">{s.name}</span>
                  <span className="text-sm text-[#9a8f84]">{s.sub}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/donate">
              <button className="inline-flex items-center gap-3 bg-[#b8892a] hover:bg-[#9d7422] text-white text-base px-10 py-4 rounded-full tracking-wider transition-colors duration-200 shadow-lg shadow-[#b8892a]/25">
                {t("ashram.sevaCta.cta")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* PLAN A VISIT */}
      <section id="visit" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${b}images/ashram-hero.png`} alt="" aria-hidden className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-[#1a0f05]/75" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#e8c56a]/70" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/70" />
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-white mb-4">{t("ashram.visit.heading")}</h2>
          <p className="text-[#f0e4c8] text-base leading-relaxed mb-8 max-w-lg mx-auto">{t("ashram.visit.intro")}</p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-8 py-3.5 rounded-full tracking-wider transition-colors duration-200 cursor-pointer">
              {t("ashram.visit.cta")}
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </span>
          </Link>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">{t("ashram.related.eyebrow")}</span>
            <h2 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#3d3830] mt-2">{t("ashram.related.heading")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {relatedItems.map((a, i) => {
              const meta = RELATED_META[i];
              if (!meta) return null;
              const isExternal = meta.href.startsWith("http");
              const cardContent = (
                <div className="group bg-white border border-[#e8dece] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#d4a843]/40 transition-all duration-300 cursor-pointer h-full flex flex-col">
                  <div className="relative overflow-hidden" style={{ height: "180px" }}>
                    <img src={meta.thumbnail} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <span className={`absolute top-3 left-3 text-sm uppercase tracking-[0.15em] font-semibold px-2.5 py-1 rounded-full ${meta.type === "interview" ? "bg-[#5a4a8a]/90 text-white" : "bg-[#b8892a]/90 text-white"}`}>{a.tag}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-sm uppercase tracking-[0.15em] text-[#9a8f84] mb-2">{a.date}</p>
                    <h3 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#3d3830] mb-2 leading-snug group-hover:text-[#9d7422] transition-colors duration-200 flex-1">{a.title}</h3>
                    <p className="text-sm text-[#7a7068] leading-relaxed line-clamp-2 mb-4">{a.excerpt}</p>
                    <div className="flex items-center gap-1 text-[#b8892a] text-xs font-medium mt-auto">
                      {meta.type === "interview" ? t("ashram.related.watchLabel") : t("ashram.related.readLabel")} <ArrowRight className="w-3 h-3" strokeWidth={2} />
                    </div>
                  </div>
                </div>
              );
              return isExternal ? (
                <a key={meta.href} href={meta.href} target="_blank" rel="noopener noreferrer" className="flex flex-col">{cardContent}</a>
              ) : (
                <Link key={meta.href} href={meta.href}><div className="flex flex-col h-full">{cardContent}</div></Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CENTERS */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${b}images/centers-bg.png`} alt="" aria-hidden className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#1a0f05]/72" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="uppercase tracking-[0.25em] text-xs text-[#e8c56a] font-medium">{t("ashram.centers.eyebrow")}</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-white mt-2">{t("ashram.centers.heading")}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="md:pr-12 pb-10 md:pb-0">
              <p className="text-xs uppercase tracking-[0.25em] text-[#e8c56a] font-medium mb-7">{t("ashram.centers.nepalLabel")}</p>
              <div className="mb-7 pb-7 border-b border-white/20">
                <span className="text-sm uppercase tracking-[0.2em] text-white bg-[#b8892a] px-2.5 py-1 rounded font-medium inline-block mb-3">{t("ashram.centers.headBadge")}</span>
                <p className="font-['Cormorant_Garamond'] text-xl font-light text-white leading-snug">{t("ashram.centers.headName")}</p>
                <p className="text-sm text-[#d4c4a8] italic mt-1">{t("ashram.centers.headAka")}</p>
                <p className="text-sm text-[#c8b89a] mt-1">{t("ashram.centers.headLocation")}</p>
              </div>
              <div className="space-y-5">
                {nepalOthers.map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-1 h-1 rounded-full bg-[#e8c56a] mt-2.5 shrink-0" />
                    <div>
                      <p className="font-['Cormorant_Garamond'] text-lg font-light text-white leading-snug">{c.city}</p>
                      {c.note
                        ? <p className="text-sm text-[#c8b89a] mt-0.5">{c.note}</p>
                        : <p className="text-sm text-[#a89880] italic mt-0.5">{t("ashram.centers.comingSoon")}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:pl-12 pt-10 md:pt-0">
              <p className="text-xs uppercase tracking-[0.25em] text-[#e8c56a] font-medium mb-7">{t("ashram.centers.internationalLabel")}</p>
              <div className="space-y-5">
                {international.map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-1 h-1 rounded-full bg-[#e8c56a] mt-2.5 shrink-0" />
                    <div>
                      <p className="font-['Cormorant_Garamond'] text-lg font-light text-white leading-snug">{c.country}</p>
                      <p className="text-sm text-[#c8b89a] mt-0.5">{c.cities}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
