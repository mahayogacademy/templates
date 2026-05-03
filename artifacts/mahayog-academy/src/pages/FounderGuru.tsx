import { useState } from "react";
import { useTranslation } from "react-i18next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link, useLocation } from "wouter";
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown, Flame, Heart, Shield, Sparkles, Users } from "lucide-react";

const b = import.meta.env.BASE_URL;

const TEACHING_ICONS = [Flame, Heart, Shield, Sparkles, Users];

const JAGADGURU_SLIDES = [
  { src: "jagadguru-1.jpg" },
  { src: "jagadguru-2.jpg", objectPosition: "20% center" },
  { src: "jagadguru-3.jpg" },
];

const SAMADHI_SLIDES = [
  { src: "guru-samadhi-pokhara.jpg" },
  { src: "guru-bhu-samadhi.jpg" },
  { src: "bhu-samadhi-1.jpg" },
  { src: "bhu-samadhi-2.jpg" },
  { src: "bhu-samadhi-4.jpg" },
  { src: "bhu-samadhi-3.jpg" },
  { src: "bhu-samadhi-5.jpg" },
  { src: "bhu-samadhi-6.jpg" },
  { src: "bhu-samadhi-7.jpg" },
  { src: "bhu-samadhi-8.jpg" },
  { src: "pokhara-samadhi-2.jpg" },
  { src: "pokhara-samadhi-1.jpg" },
  { src: "pokhara-samadhi-3.jpg" },
  { src: "pokhara-samadhi-4.jpg" },
  { src: "pokhara-samadhi-5.jpg" },
];

const INITIATIVE_IMGS = [
  { img: "initiative-meditation.png", pos: "center 60%", href: "/meditation" },
  { img: "initiative-gurukul.png", pos: "center 70%", href: "/gurukul" },
  { img: "ram-mandir-1.jpg", pos: "center 60%", href: "/projects#project-02" },
  { img: "initiative-hanuman-temples.jpg", pos: "center 60%", href: "/projects#project-01" },
  { img: "initiative-ayurveda.png", pos: "center 70%", href: null as string | null },
  { img: "initiative-green-revolution.png", pos: "center 70%", href: null as string | null },
];

const YAJNA_IMGS = [
  { img: "tarak-brahma-mahayajna.jpg", href: "/events/historic/tarak-brahma-mahayagya" },
  { img: "atirudri-hero.png", href: "/events/historic/atirudri-mahayagya" },
  { img: "hanumad-satsang-tent.jpg", href: "/events/historic/hanumad-mahayagya" },
  { img: "ramchandi-mahayajna.jpg", href: null as string | null },
  { img: "ramarchan-mahayagya.jpg", href: "/events/historic/ramarchan-mahayagya" },
];

const INTERVIEW_REFS = [
  { thumbnail: "https://i.ytimg.com/vi/-L3KEFytQ9I/hqdefault.jpg", href: "https://www.youtube.com/watch?v=-L3KEFytQ9I" },
  { thumbnail: "https://i.ytimg.com/vi/DxnTrk8PuB8/hqdefault.jpg", href: "https://www.youtube.com/watch?v=DxnTrk8PuB8" },
  { thumbnail: "https://i.ytimg.com/vi/rtuBBVxlXF4/hqdefault.jpg", href: "https://www.youtube.com/watch?v=rtuBBVxlXF4" },
];

type Credential = { title: string; sub: string; teaser: string; body: string };
type Pillar = { skt: string; label: string; desc: string };
type YajnaItem = { year: string; name: string; desc: string };
type InitiativeItem = { label: string; note: string };
type InterviewItem = { title: string; excerpt: string; source: string; duration: string };

export default function FounderGuru() {
  const { t } = useTranslation();
  const [samadhiSlide, setSamadhiSlide] = useState(0);
  const [jagadguruSlide, setJagadguruSlide] = useState(0);
  const [openCredential, setOpenCredential] = useState<number | null>(null);
  const [, navigate] = useLocation();

  function goToAnchor(path: string, anchor: string) {
    navigate(path);
    setTimeout(() => {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }

  const credentials = (t("founder.credentials.items", { returnObjects: true }) as Credential[]) ?? [];
  const pillars = (t("founder.teachings.pillars", { returnObjects: true }) as Pillar[]) ?? [];
  const teachingItems = (t("founder.teachings.items", { returnObjects: true }) as string[]) ?? [];
  const yajnas = (t("founder.yajnas.items", { returnObjects: true }) as YajnaItem[]) ?? [];
  const initiatives = (t("founder.initiatives.items", { returnObjects: true }) as InitiativeItem[]) ?? [];
  const interviews = (t("founder.interviews.items", { returnObjects: true }) as InterviewItem[]) ?? [];

  return (
    <div className="bg-[#faf9f6] text-[#3d3830]">
      <Nav />

      {/* HERO */}
      <section className="relative h-[58vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${b}images/founder-guru-satsang.jpg`} alt="" aria-hidden className="w-full h-full object-cover" style={{ objectPosition: "center 58%" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/70 via-[#2c1a08]/40 to-[#faf9f6]" />
        </div>
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#e8c56a]/60" />
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/></svg>
            <div className="h-px w-10 bg-[#e8c56a]/60" />
          </div>
          <p className="text-[#e8c56a] text-xs uppercase tracking-[0.3em] font-medium mb-3" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}>{t("founder.hero.kicker")}</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.75)" }}>
            {t("founder.hero.title")}
          </h1>
          <p className="text-[#f0e4c8] text-base tracking-widest uppercase font-light mt-4" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}>
            {t("founder.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="pt-24 pb-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start mb-16">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">{t("founder.intro.kicker")}</p>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#3d3830] leading-tight mb-6">
                {t("founder.intro.title1")}<br />{t("founder.intro.title2")}
              </h2>
              <div className="h-px bg-[#e8dece] mb-6" />
              <p className="text-base text-[#5a5248] leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: t("founder.intro.p1") }} />
              <p className="text-base text-[#5a5248] leading-relaxed mb-8">{t("founder.intro.p2")}</p>
              <div className="border-l-2 border-[#b8892a]/40 pl-6 py-1">
                <p className="font-['Cormorant_Garamond'] text-xl italic text-[#5a5248] leading-relaxed mb-2">{t("founder.intro.quote")}</p>
                <cite className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-semibold not-italic">{t("founder.intro.quoteAuthor")}</cite>
              </div>
            </div>
            <div className="hidden md:block sticky top-20">
              <div className="rounded-2xl overflow-hidden shadow-md shadow-[#b8892a]/10">
                <img src={`${b}images/gurudev-photo.png`} alt={t("founder.hero.title")} className="w-full object-cover object-center" style={{ minHeight: "440px" }} />
              </div>
              <p className="mt-4 text-center text-xs text-[#7a6e62] leading-relaxed px-1">{t("founder.intro.portraitCaption1")}<br />{t("founder.intro.portraitCaption2")}</p>
              <a href={`${b}images/gurudev-photo.png`} download="Jagadguru-Mahayogi-Siddhababa.png" className="mt-3 flex items-center justify-center gap-2 text-xs text-[#b8892a] hover:text-[#9d7422] tracking-[0.15em] uppercase font-medium transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                {t("founder.intro.downloadPhoto")}
              </a>
            </div>
          </div>

          {/* ANCHOR NAV */}
          <nav className="flex flex-col md:flex-row items-stretch rounded-2xl md:rounded-full border border-[#d8cebb] bg-[#f4ede0] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[#d8cebb] text-sm font-medium mb-12">
            {[
              { label: t("founder.anchorNav.life"), anchor: "#life" },
              { label: t("founder.anchorNav.teachings"), anchor: "#teachings" },
              { label: t("founder.anchorNav.initiatives"), shortLabel: t("founder.anchorNav.initiativesShort"), anchor: "#initiatives" },
              { label: t("founder.anchorNav.yajnas"), anchor: "#yajnas" },
              { label: t("founder.anchorNav.ashrams"), anchor: "#ashrams" },
            ].map(({ label, shortLabel, anchor }) => (
              <a key={anchor} href={anchor} onClick={e => { e.preventDefault(); document.querySelector(anchor)?.scrollIntoView({ behavior: "smooth" }); }}
                 className="flex-1 text-center py-2.5 text-[#5c4e38] hover:text-white hover:bg-[#3d3020] transition-colors duration-150 cursor-pointer">
                {shortLabel ? (<><span className="lg:hidden">{shortLabel}</span><span className="hidden lg:inline">{label}</span></>) : label}
              </a>
            ))}
          </nav>

          {/* MOBILE PORTRAIT */}
          <div className="md:hidden mb-12">
            <div className="rounded-2xl overflow-hidden shadow-md shadow-[#b8892a]/10 max-w-sm mx-auto">
              <img src={`${b}images/gurudev-photo.png`} alt={t("founder.hero.title")} className="w-full object-cover object-center" />
            </div>
            <p className="mt-4 text-center text-xs text-[#7a6e62] leading-relaxed px-1">{t("founder.intro.portraitCaption1")}<br />{t("founder.intro.portraitCaption2")}</p>
            <a href={`${b}images/gurudev-photo.png`} download="Jagadguru-Mahayogi-Siddhababa.png" className="mt-3 flex items-center justify-center gap-2 text-xs text-[#b8892a] hover:text-[#9d7422] tracking-[0.15em] uppercase font-medium transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              {t("founder.intro.downloadPhoto")}
            </a>
          </div>

          {/* CREDENTIALS */}
          <div className="mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-5">{t("founder.credentials.label")}</p>
            <div className="divide-y divide-[#e8dece] border border-[#e8dece] rounded-2xl overflow-hidden">
              {credentials.map((c, i) => (
                <div key={i} className="bg-white">
                  <button onClick={() => setOpenCredential(openCredential === i ? null : i)} className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-[#fdf6ec] transition-colors">
                    <div className="flex-1 min-w-0">
                      <p className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] leading-tight">{c.title}</p>
                      <p className="text-base text-[#a89880] mt-1">{c.sub}</p>
                    </div>
                    <ChevronDown className={`shrink-0 mt-1 w-5 h-5 text-[#b8892a] transition-transform duration-200 ${openCredential === i ? "rotate-180" : ""}`} strokeWidth={1.5} />
                  </button>
                  {openCredential === i && (
                    <div className="px-6 pt-4 pb-6 bg-[#fdf6ec]/50">
                      <p className="text-base text-[#7a7068] leading-relaxed mb-4 border-l-2 border-[#b8892a]/30 pl-4">{c.teaser}</p>
                      {c.body.split("\n\n").map((para, j) => (
                        <p key={j} className="text-base text-[#5a5248] leading-relaxed mb-3 last:mb-0">{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* LIFE */}
          <div id="life" className="mb-12 scroll-mt-24">
            <div className="flex items-start gap-6 mb-10">
              <span className="font-['Cormorant_Garamond'] text-8xl font-light text-[#e8dece] leading-none select-none shrink-0">I</span>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-1">{t("founder.life.kicker")}</p>
                <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] leading-tight">{t("founder.life.title")}</h2>
              </div>
            </div>
            <div className="h-px bg-[#e8dece] mb-12" />
            <div className="space-y-16">

              {/* Early Life */}
              <div className="grid md:grid-cols-[340px_1fr] gap-10 items-center">
                <div className="rounded-2xl overflow-hidden shadow-sm shadow-[#b8892a]/10">
                  <img src={`${b}images/guru-early-life.jpg`} alt="" className="w-full object-cover" style={{ maxHeight: "420px", objectPosition: "top" }} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">{t("founder.life.earlyLife.kicker")}</p>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] mb-4 leading-snug">{t("founder.life.earlyLife.title")}</h3>
                  <p className="text-base text-[#5a5248] leading-relaxed mb-4">{t("founder.life.earlyLife.p1")}</p>
                  <p className="text-base text-[#5a5248] leading-relaxed">{t("founder.life.earlyLife.p2")}</p>
                </div>
              </div>

              {/* Bhu Samadhi */}
              <div className="grid md:grid-cols-[1fr_340px] gap-10 items-center">
                <div className="order-2 md:order-1">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">{t("founder.life.bhuSamadhi.kicker")}</p>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] mb-4 leading-snug">{t("founder.life.bhuSamadhi.title")}</h3>
                  <p className="text-base text-[#5a5248] leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t("founder.life.bhuSamadhi.p1") }} />
                  <p className="text-base text-[#5a5248] leading-relaxed mb-6">{t("founder.life.bhuSamadhi.p2")}</p>
                  <button onClick={() => navigate("/events/historic/bhu-samadhi")} className="inline-flex items-center gap-2 text-sm text-[#b8892a] hover:text-[#9d7422] tracking-[0.15em] uppercase font-medium transition-colors duration-200 group border border-[#b8892a]/30 rounded-full px-5 py-2.5">
                    <span>{t("founder.life.bhuSamadhi.cta")}</span>
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                  </button>
                </div>
                <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-sm shadow-[#b8892a]/10" style={{ height: "400px" }}>
                  <img src={`${b}images/${SAMADHI_SLIDES[samadhiSlide].src}`} alt="" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Recognition */}
              <div className="grid md:grid-cols-[380px_1fr] gap-10 items-center">
                <div className="rounded-2xl overflow-hidden shadow-sm shadow-[#b8892a]/10 border border-[#e8dece]">
                  <div className="relative" style={{ height: "320px" }}>
                    {JAGADGURU_SLIDES.map((slide, i) => (
                      <img key={i} src={`${b}images/${slide.src}`} alt="" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" style={{ opacity: jagadguruSlide === i ? 1 : 0, objectPosition: slide.objectPosition ?? "center" }} />
                    ))}
                    <button onClick={() => setJagadguruSlide(i => (i - 1 + JAGADGURU_SLIDES.length) % JAGADGURU_SLIDES.length)} className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center" aria-label="Previous"><ChevronLeft className="w-4 h-4 text-white" strokeWidth={1.5} /></button>
                    <button onClick={() => setJagadguruSlide(i => (i + 1) % JAGADGURU_SLIDES.length)} className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center" aria-label="Next"><ChevronRight className="w-4 h-4 text-white" strokeWidth={1.5} /></button>
                  </div>
                  <div className="flex justify-center gap-2 py-3 bg-white border-t border-[#e8dece]">
                    {JAGADGURU_SLIDES.map((_, i) => (
                      <button key={i} onClick={() => setJagadguruSlide(i)} className={`w-1.5 h-1.5 rounded-full transition-colors ${jagadguruSlide === i ? "bg-[#b8892a]" : "bg-[#d9cfc4]"}`} aria-label={`Slide ${i + 1}`} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">{t("founder.life.recognition.kicker")}</p>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] mb-4 leading-snug">{t("founder.life.recognition.title")}</h3>
                  <p className="text-base text-[#5a5248] leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t("founder.life.recognition.p1") }} />
                  <p className="text-base text-[#5a5248] leading-relaxed" dangerouslySetInnerHTML={{ __html: t("founder.life.recognition.p2") }} />
                </div>
              </div>
            </div>
          </div>

          {/* Hidden helper to silence unused warning */}
          <button className="hidden" onClick={() => setSamadhiSlide(s => s)} aria-hidden />

          {/* DARSHAN CTA */}
          <div className="mb-12 rounded-2xl border border-[#e8dece] bg-[#f5efe3] overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 flex flex-col justify-center px-8 py-8">
                <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-2">{t("founder.darshan.kicker")}</p>
                <h3 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#3d3830] mb-3 leading-snug">{t("founder.darshan.title")}</h3>
                <p className="text-base text-[#5a5248] leading-relaxed max-w-lg mb-6">{t("founder.darshan.desc")}</p>
                <Link href="/meet" onClick={() => window.scrollTo(0, 0)}>
                  <span className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8892a] text-white text-sm rounded-full hover:bg-[#9d7422] transition-colors cursor-pointer">{t("founder.darshan.cta")} <ArrowRight className="w-4 h-4" strokeWidth={1.5} /></span>
                </Link>
              </div>
              <div className="md:w-2/5 h-56 md:h-auto shrink-0 overflow-hidden order-first md:order-last">
                <img src={`${b}images/guru-darshan-card.jpg`} alt="" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </div>

          <div className="h-px bg-[#e8dece] mb-24" />

          {/* TEACHINGS */}
          <div id="teachings" className="mb-24 scroll-mt-24">
            <div className="flex items-start gap-6 mb-10">
              <span className="font-['Cormorant_Garamond'] text-8xl font-light text-[#e8dece] leading-none select-none shrink-0">II</span>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-1">{t("founder.teachings.kicker")}</p>
                <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] leading-tight">{t("founder.teachings.title")}</h2>
              </div>
            </div>
            <div className="h-px bg-[#e8dece] mb-8" />
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-base text-[#5a5248] leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t("founder.teachings.p1") }} />
                <p className="text-base text-[#5a5248] leading-relaxed">{t("founder.teachings.p2")}</p>
              </div>
              <div>
                <img src={`${b}images/guru-teachings.jpg`} alt="" className="w-full rounded-2xl object-cover shadow-md" style={{ height: "340px" }} />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-14">
              {pillars.map((p, i) => (
                <div key={i} className="bg-white border border-[#e8dece] rounded-2xl p-7 flex flex-col">
                  <p className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#b8892a] mb-1">{p.skt}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#9a8f84] font-medium mb-4">{p.label}</p>
                  <div className="h-px bg-[#e8dece] mb-4" />
                  <p className="text-base text-[#7a7068] leading-relaxed flex-1">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <p className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] mb-6">{t("founder.teachings.keyTeachingsTitle")}</p>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-0">
                {teachingItems.map((text, i) => {
                  const Icon = TEACHING_ICONS[i] ?? Flame;
                  return (
                    <div key={i} className="flex items-start gap-4 py-3 border-b border-[#e8dece]">
                      <span className="shrink-0 mt-[2px] w-8 h-8 flex items-center justify-center rounded-full bg-[#fdf6ec]">
                        <Icon className="w-4 h-4 text-[#b8892a]" strokeWidth={1.5} />
                      </span>
                      <span className="text-base text-[#5a5248] leading-relaxed">{text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-2xl border border-[#b8892a]/40 bg-white">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#b8892a]" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 px-10 py-9 pl-12">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">{t("founder.teachings.featuredLabel")}</p>
                    <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#3d3830] mb-2">{t("founder.teachings.featured1.title")}</h3>
                    <p className="text-base text-[#7a7068] leading-relaxed">{t("founder.teachings.featured1.desc")}</p>
                    <p className="text-xs text-[#a89880] italic mt-2">{t("founder.teachings.devNote")}</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="px-4 py-2 rounded-full bg-[#fdf6ec] border border-[#e8c56a]/40 text-xs uppercase tracking-[0.2em] text-[#b8892a] font-semibold whitespace-nowrap">{t("founder.teachings.featured1.hours")}</span>
                    <Link href="/vedanta"><span className="inline-flex items-center gap-2 px-6 py-3 bg-[#b8892a] text-white text-sm rounded-full hover:bg-[#9d7422] transition-colors cursor-pointer whitespace-nowrap">{t("founder.teachings.learnMore")} <ArrowRight className="w-4 h-4" strokeWidth={1.5} /></span></Link>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-[#b8892a]/40 bg-white">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#b8892a]" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 px-10 py-9 pl-12">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">{t("founder.teachings.featuredLabel")}</p>
                    <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#3d3830] mb-2">{t("founder.teachings.featured2.title")}</h3>
                    <p className="text-base text-[#7a7068] leading-relaxed">{t("founder.teachings.featured2.desc")}</p>
                    <p className="text-xs text-[#a89880] italic mt-2">{t("founder.teachings.devNote")}</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="px-4 py-2 rounded-full bg-[#fdf6ec] border border-[#e8c56a]/40 text-xs uppercase tracking-[0.2em] text-[#b8892a] font-semibold whitespace-nowrap">{t("founder.teachings.featured2.hours")}</span>
                    <Link href="/meditation" onClick={() => window.scrollTo(0, 0)}><span className="inline-flex items-center gap-2 px-6 py-3 bg-[#b8892a] text-white text-sm rounded-full hover:bg-[#9d7422] transition-colors cursor-pointer whitespace-nowrap">{t("founder.teachings.learnMore")} <ArrowRight className="w-4 h-4" strokeWidth={1.5} /></span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* QUOTE BANNER */}
      <div className="relative overflow-hidden" style={{ minHeight: "280px" }}>
        <img src={`${b}images/quote-banner-bg.png`} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative flex flex-col items-center justify-center text-center px-8 md:px-20 py-16">
          <span className="font-['Cormorant_Garamond'] text-6xl font-light text-[#b8892a]/40 leading-none mb-2 select-none">"</span>
          <p className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-light italic text-[#3d3830] leading-relaxed max-w-2xl mb-6">{t("founder.quoteBanner.quote")}</p>
          <div className="h-px w-10 bg-[#b8892a]/50 mb-4" />
          <cite className="text-xs uppercase tracking-[0.25em] text-[#3d3830] font-semibold not-italic">{t("founder.quoteBanner.author")}</cite>
        </div>
      </div>

      {/* INITIATIVES */}
      <section className="py-24 px-6 bg-white border-t border-[#e8dece]">
        <div className="max-w-5xl mx-auto">
          <div id="initiatives" className="scroll-mt-24">
            <div className="flex items-start gap-6 mb-10">
              <span className="font-['Cormorant_Garamond'] text-8xl font-light text-[#e8dece] leading-none select-none shrink-0">III</span>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-1">{t("founder.initiatives.kicker")}</p>
                <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] leading-tight">{t("founder.initiatives.title")}</h2>
              </div>
            </div>
            <div className="h-px bg-[#e8dece] mb-8" />
            <p className="text-base text-[#5a5248] leading-relaxed max-w-2xl mb-10">{t("founder.initiatives.intro")}</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {initiatives.map((item, i) => {
                const ref = INITIATIVE_IMGS[i];
                if (!ref) return null;
                const inner = (
                  <div className="flex flex-col bg-white border border-[#e8dece] rounded-2xl overflow-hidden group hover:border-[#b8892a]/40 hover:shadow-md transition-all duration-300">
                    <div className="h-40 overflow-hidden shrink-0">
                      <img src={`${b}images/${ref.img}`} alt="" aria-hidden className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: ref.pos }} />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-xs uppercase tracking-[0.2em] text-[#b8892a] font-semibold mb-2">{item.note}</p>
                      <p className="text-base font-semibold text-[#3d3830] leading-snug flex-1 line-clamp-2">{item.label}</p>
                      {ref.href && (
                        <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-[#b8892a] font-medium">{t("founder.initiatives.learnMore")} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} /></span>
                      )}
                    </div>
                  </div>
                );
                if (!ref.href) return <div key={i}>{inner}</div>;
                const [path, anchor] = ref.href.split('#');
                if (anchor) return (<div key={i} className="cursor-pointer" onClick={() => goToAnchor(path, anchor)}>{inner}</div>);
                return (<Link key={i} href={ref.href} onClick={() => window.scrollTo(0, 0)}><div className="cursor-pointer">{inner}</div></Link>);
              })}
            </div>
          </div>
        </div>
      </section>

      {/* YAJNAS */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${b}images/ram-mandir-1.jpg`} alt="" aria-hidden className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#faf9f6]/88" />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div id="yajnas" className="scroll-mt-24">
            <div className="flex items-start gap-6 mb-10">
              <span className="font-['Cormorant_Garamond'] text-8xl font-light text-[#e8dece] leading-none select-none shrink-0">IV</span>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-1">{t("founder.yajnas.kicker")}</p>
                <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] leading-tight">{t("founder.yajnas.title")}</h2>
              </div>
            </div>
            <div className="h-px bg-[#e8dece] mb-8" />
            <div className="grid md:grid-cols-2 gap-10 mb-12">
              <p className="text-base text-[#5a5248] leading-relaxed">{t("founder.yajnas.p1")}</p>
              <p className="text-base text-[#5a5248] leading-relaxed">{t("founder.yajnas.p2")}</p>
            </div>

            <div className="space-y-5">
              {yajnas.map((yajna, i) => {
                const ref = YAJNA_IMGS[i];
                const inner = (
                  <div className="flex gap-6 items-start">
                    <div className="shrink-0 w-28 flex flex-col items-center gap-2">
                      <span className="text-sm uppercase tracking-[0.2em] text-[#b8892a] font-semibold leading-none text-center">{yajna.year}</span>
                      {ref?.img && (
                        <div className="w-24 h-24 rounded-xl overflow-hidden border border-[#e8dece] shadow-sm">
                          <img src={`${b}images/${ref.img}`} alt={yajna.name} className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                    <div className="w-px bg-[#e8dece] self-stretch shrink-0" />
                    <div className="flex-1">
                      <p className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] mb-1">{yajna.name}</p>
                      <p className="text-base text-[#7a7068] leading-relaxed mb-3">{yajna.desc}</p>
                      {ref?.href && (
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#b8892a] text-[#b8892a] text-sm font-medium rounded-full">{t("founder.yajnas.learnMore")} <ArrowRight className="w-4 h-4" strokeWidth={1.5} /></span>
                      )}
                    </div>
                  </div>
                );
                if (!ref?.href) {
                  return (<div key={i} className="flex flex-col p-6 bg-white border border-[#d4c8b5] rounded-2xl shadow-sm overflow-hidden">{inner}</div>);
                }
                return (
                  <Link key={i} href={ref.href} onClick={() => window.scrollTo(0, 0)} className="block">
                    <div className="flex flex-col p-6 bg-white border border-[#d4c8b5] rounded-2xl shadow-sm overflow-hidden cursor-pointer hover:border-[#b8892a]/60 hover:shadow-md transition-all duration-300">{inner}</div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-10 border-l-2 border-[#b8892a]/40 pl-6 py-1 mb-10">
              <p className="text-base text-[#1a1714] leading-relaxed font-['Inter']">{t("founder.yajnas.footer")}</p>
            </div>

            <Link href="/events">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#b8892a] text-white text-sm rounded-full hover:bg-[#a07820] transition-colors cursor-pointer">{t("founder.yajnas.cta")} <ArrowRight className="w-4 h-4" strokeWidth={1.5} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ASHRAMS */}
      <section className="py-24 px-6 bg-white border-t border-[#e8dece]">
        <div className="max-w-5xl mx-auto">
          <div id="ashrams" className="scroll-mt-24">
            <div className="flex items-start gap-6 mb-10">
              <span className="font-['Cormorant_Garamond'] text-8xl font-light text-[#e8dece] leading-none select-none shrink-0">V</span>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-1">{t("founder.ashrams.kicker")}</p>
                <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] leading-tight">{t("founder.ashrams.title")}</h2>
              </div>
            </div>
            <div className="h-px bg-[#e8dece] mb-8" />
            <p className="text-base text-[#5a5248] leading-relaxed max-w-2xl mb-12">{t("founder.ashrams.intro")}</p>
            <div className="flex flex-col gap-y-3 mb-12">
              <div className="flex items-baseline gap-3 text-sm">
                <span className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-semibold shrink-0">{t("founder.ashrams.nepalLabel")}</span>
                <span className="text-[#5a5248]">{t("founder.ashrams.nepalCities")}</span>
              </div>
              <div className="flex items-baseline gap-3 text-sm">
                <span className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-semibold shrink-0">{t("founder.ashrams.globalLabel")}</span>
                <span className="text-[#5a5248]">{t("founder.ashrams.globalCities")}</span>
              </div>
            </div>
            <div className="bg-[#f5ede0] border border-[#d4a853]/40 rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-2">{t("founder.ashrams.headLabel")}</p>
                <p className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] mb-1">{t("founder.ashrams.headName")}</p>
                <p className="text-sm text-[#7a7068]">{t("founder.ashrams.headLocation")}</p>
              </div>
              <Link href="/ashram"><span className="shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-[#b8892a] text-[#b8892a] text-sm rounded-full hover:bg-[#b8892a] hover:text-white transition-colors cursor-pointer whitespace-nowrap">{t("founder.ashrams.visit")} <ArrowRight className="w-4 h-4" strokeWidth={1.5} /></span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTERVIEWS */}
      <section className="py-24 px-6 bg-[#faf9f6] border-t border-[#e8dece]">
        <div className="max-w-5xl mx-auto">
          <div id="interviews" className="scroll-mt-24">
            <div className="text-center mb-10">
              <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">{t("founder.interviews.kicker")}</p>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#3d3830] leading-tight">{t("founder.interviews.title")}</h2>
            </div>
            <p className="text-base text-[#5a5248] leading-relaxed max-w-2xl mx-auto text-center mb-10">{t("founder.interviews.intro")}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {interviews.map((item, i) => {
                const ref = INTERVIEW_REFS[i];
                if (!ref) return null;
                return (
                  <a key={i} href={ref.href} target="_blank" rel="noopener noreferrer" className="flex flex-col bg-white rounded-2xl border border-[#e8dece] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden cursor-pointer">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img src={ref.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/10" />
                      <span className="absolute top-3 left-3 text-xs font-semibold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full bg-[#5a4a8a]/90 text-white">{t("founder.interviews.interviewBadge")}</span>
                      <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded-full font-medium">{item.duration}</span>
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                      <p className="text-xs uppercase tracking-[0.2em] text-[#9a8070] font-medium mb-2">{item.source} · {item.duration}</p>
                      <h3 className="font-['Cormorant_Garamond'] text-xl text-[#2c1a08] font-medium leading-snug mb-2 line-clamp-2 flex-1">{item.title}</h3>
                      <p className="text-sm text-[#6a5c48] leading-relaxed line-clamp-2 mb-4">{item.excerpt}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5a4a8a]">{t("founder.interviews.watch")} <ChevronRight className="w-3.5 h-3.5" strokeWidth={2} /></span>
                    </div>
                  </a>
                );
              })}
            </div>
            <Link href="/teachings" onClick={() => window.scrollTo(0, 0)}>
              <span className="inline-flex items-center gap-2 text-sm text-[#b8892a] border border-[#b8892a]/40 rounded-full px-6 py-2.5 hover:bg-[#b8892a] hover:text-white transition-colors cursor-pointer font-medium">{t("founder.interviews.viewAll")} <ArrowRight className="w-4 h-4" strokeWidth={1.5} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section className="bg-[#1e1208] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#e8c56a]/40" />
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/></svg>
            <div className="h-px w-10 bg-[#e8c56a]/40" />
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-white mb-5 leading-tight">{t("founder.cta.title")}</h2>
          <p className="text-[#9a8f84] text-base leading-relaxed max-w-xl mx-auto mb-10">{t("founder.cta.desc")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"><span className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#b8892a] text-white rounded-full text-sm hover:bg-[#9d7422] transition-colors cursor-pointer">{t("founder.cta.contact")} <ArrowRight className="w-4 h-4" strokeWidth={1.5} /></span></Link>
            <Link href="/meditation" onClick={() => window.scrollTo(0, 0)}><span className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-[#e8dece] rounded-full text-sm hover:border-[#b8892a]/60 hover:text-[#b8892a] transition-colors cursor-pointer">{t("founder.cta.explore")}</span></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
