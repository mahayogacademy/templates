import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingRegisterButton from "@/components/FloatingRegisterButton";

type YogaItem = { name: string; short: string; second: string; desc: string };
type BenefitItem = { title: string; subtitle: string; desc: string };
type SaintItem = { name: string; years: string };
type FaqItem = { q: string; a: string };
type FaqGroup = { theme: string; items: FaqItem[] };

const YOGA_GEOM = [
  { id: "hatha", cx: 160, cy: 160, r: 140, fill: "#e8c56a", stroke: "#d4a843", labelX: 105, labelY: 105 },
  { id: "mantra", cx: 340, cy: 160, r: 140, fill: "#c4855a", stroke: "#b8743e", labelX: 395, labelY: 105 },
  { id: "laya", cx: 160, cy: 340, r: 140, fill: "#7a9e7e", stroke: "#5e8862", labelX: 105, labelY: 395 },
  { id: "raja", cx: 340, cy: 340, r: 140, fill: "#b8892a", stroke: "#9d7422", labelX: 395, labelY: 395 },
];

function VennDiagram() {
  const { t } = useTranslation();
  const yogas = (t("meditation.venn.yogas", { returnObjects: true }) as YogaItem[]) ?? [];
  const [hovered, setHovered] = useState<string | null>(null);

  const activeIdx = YOGA_GEOM.findIndex(y => y.id === hovered);
  const isMahayog = hovered === "mahayog";
  const activeName = isMahayog ? t("meditation.venn.centerName") : (activeIdx >= 0 ? yogas[activeIdx]?.name : null);
  const activeDesc = isMahayog ? t("meditation.venn.centerDesc") : (activeIdx >= 0 ? yogas[activeIdx]?.desc : null);

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className={`flex items-center gap-2 transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#b8892a] animate-ping inline-block" />
        <span className="text-xs uppercase tracking-[0.2em] text-[#b8892a] font-medium">{t("meditation.venn.hint")}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#b8892a] animate-ping inline-block" />
      </div>

      <svg viewBox="0 0 500 500" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {YOGA_GEOM.map((y, i) => {
          const yi = yogas[i];
          return (
            <g key={y.id}>
              <circle cx={y.cx} cy={y.cy} r={y.r} fill={y.fill}
                fillOpacity={hovered === y.id ? 0.60 : hovered ? 0.15 : 0.30}
                stroke={y.stroke} strokeWidth={hovered === y.id ? 2.5 : 1.5}
                style={{ cursor: "pointer", transition: "fill-opacity 0.3s, stroke-width 0.2s" }}
                onMouseEnter={() => setHovered(y.id)} onMouseLeave={() => setHovered(null)} />
              <text x={y.labelX} y={y.labelY} textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontSize="26" fontWeight="700"
                fill={hovered === y.id ? "#2a1f08" : "#3d3830"} style={{ pointerEvents: "none", transition: "fill 0.2s" }}>
                {yi?.short ?? ""}
              </text>
              <text x={y.labelX} y={y.labelY + 30} textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontSize="22"
                fill={hovered === y.id ? "#5a3e10" : "#6b5a3e"} style={{ pointerEvents: "none", transition: "fill 0.2s" }}>
                {yi?.second ?? ""}
              </text>
            </g>
          );
        })}
        <circle cx="250" cy="250" r="82" fill="#3d3830" fillOpacity={hovered === "mahayog" ? 1 : 0.90}
          style={{ cursor: "pointer", transition: "fill-opacity 0.25s" }}
          onMouseEnter={() => setHovered("mahayog")} onMouseLeave={() => setHovered(null)} />
        <text x="250" y="238" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontSize="26" fill="white" fontStyle="italic" style={{ pointerEvents: "none" }}>
          {t("meditation.venn.centerLabel1")}
        </text>
        <text x="250" y="265" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontSize="17" fill="#e8c56a" letterSpacing="2" style={{ pointerEvents: "none" }}>
          {t("meditation.venn.centerLabel2")}
        </text>
      </svg>

      {activeName && (
        <div className="w-full max-w-md rounded-2xl border border-[#e0d0b8] bg-white/80 px-6 py-4 text-center transition-all duration-300">
          <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#b8892a] mb-1">{activeName}</p>
          <p className="text-sm text-[#5a5248] leading-relaxed">{activeDesc}</p>
        </div>
      )}
    </div>
  );
}

function renderFAQAnswer(text: string) {
  return text.split('\n').map((line, i, arr) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return (
      <span key={i}>
        {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="font-semibold text-[#4a3a28]">{part}</strong> : part)}
        {i < arr.length - 1 && '\n'}
      </span>
    );
  });
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e8dece]">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-6 group">
        <span className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#3d3830] group-hover:text-[#9d7422] transition-colors duration-200 leading-snug">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#b8892a] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} strokeWidth={1.5} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? "max-h-[600px] pb-5" : "max-h-0"}`}>
        <div className="text-base text-[#6b6158] leading-relaxed whitespace-pre-line">{renderFAQAnswer(a)}</div>
      </div>
    </div>
  );
}

function FAQGroup({ theme, items }: { theme: string; items: FaqItem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border transition-colors duration-300 ${open ? "border-[#c8a868]/50 bg-[#fdf8f0]" : "border-[#ddd0b8] bg-[#f5ede0]/60"}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left group">
        <div className="flex items-center gap-3">
          <span className={`text-sm transition-colors duration-300 ${open ? "text-[#b8892a]" : "text-[#b8892a]/50"}`}>◆</span>
          <span className={`uppercase tracking-[0.2em] text-sm font-medium transition-colors duration-300 ${open ? "text-[#7a4a10]" : "text-[#9a7040]"}`}>{theme}</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-[#b8892a] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} strokeWidth={1.5} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? "max-h-[2000px]" : "max-h-0"}`}>
        <div className="px-6 pb-2">
          {items.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </div>
    </div>
  );
}

function HorizontalSectionNav() {
  const { t } = useTranslation();
  const sections = [
    { id: "what-is", short: t("meditation.nav.foundations") },
    { id: "mahayog", short: t("meditation.nav.mahayog") },
    { id: "how-it-works", short: t("meditation.nav.howItWorks") },
    { id: "benefits", short: t("meditation.nav.benefits") },
    { id: "origins", short: t("meditation.nav.origins") },
    { id: "faq", short: t("meditation.nav.faq") },
    { id: "register", short: t("meditation.nav.register") },
  ];
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const triggerY = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= triggerY) current = id;
      }
      setActive(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="md:sticky md:top-[60px] z-30 flex justify-center px-6 py-3 bg-[#faf9f6]/95 backdrop-blur-sm border-b border-[#e8dece]">
      <nav className="flex flex-col md:flex-row w-full max-w-4xl items-stretch rounded-2xl md:rounded-full border border-[#d8cebb] bg-[#f4ede0] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[#d8cebb] text-sm font-medium">
        {sections.map(({ id, short }) => {
          const isActive = active === id;
          return (
            <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }}
              className={`flex-1 text-center py-2.5 transition-colors duration-150 cursor-pointer ${isActive ? "bg-[#3d3020] text-white" : "text-[#5c4e38] hover:text-white hover:bg-[#3d3020]"}`}>
              {short}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

function CheckCircle() {
  return (
    <span className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-md" style={{ background: "#b8892a" }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8.5L6.5 12L13 4.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function BenefitRow({ title, subtitle, desc, align, expanded, onToggle }: {
  title: string; subtitle: string; desc: string;
  align: "left" | "right"; expanded: boolean; onToggle: () => void;
}) {
  const isLeft = align === "left";
  return (
    <div className={`flex gap-3 ${isLeft ? "flex-row-reverse" : "flex-row"}`}>
      <button onClick={onToggle} className="mt-0.5 shrink-0 hover:opacity-80 transition-opacity"><CheckCircle /></button>
      <div className={`flex-1 ${isLeft ? "text-right" : "text-left"}`}>
        <button onClick={onToggle} className="w-full text-inherit">
          <h3 className={`font-['Cormorant_Garamond'] text-xl font-bold leading-snug transition-colors ${expanded ? "text-[#b8892a]" : "text-[#2d2011] hover:text-[#b8892a]"}`}>{title}</h3>
          <p className="text-sm text-[#9a8068] uppercase tracking-[0.15em] mt-0.5">{subtitle}</p>
        </button>
        <div className="overflow-hidden transition-all duration-400 ease-in-out"
          style={{ maxHeight: expanded ? "200px" : "0px", opacity: expanded ? 1 : 0, transition: "max-height 0.4s ease, opacity 0.3s ease" }}>
          <p className="text-base text-[#5a5248] leading-relaxed mt-2 text-center">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function BenefitsRadial() {
  const { t } = useTranslation();
  const items = (t("meditation.benefits.items", { returnObjects: true }) as BenefitItem[]) ?? [];
  const left = items.slice(0, 3);
  const right = items.slice(3, 6);
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggle = (title: string) => setExpanded((p) => (p === title ? null : title));
  const b = import.meta.env.BASE_URL;

  return (
    <>
      <div className="hidden md:grid grid-cols-[1fr_300px_1fr] xl:grid-cols-[1fr_360px_1fr] gap-6 xl:gap-10 items-center">
        <div className="flex flex-col gap-8">
          {left.map((item) => (
            <BenefitRow key={item.title} {...item} align="left" expanded={expanded === item.title} onToggle={() => toggle(item.title)} />
          ))}
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#f2ead8] scale-90 blur-sm opacity-60" />
          <img src={`${b}images/meditation-center.png`} alt="" className="relative w-full object-contain drop-shadow-md" />
        </div>
        <div className="flex flex-col gap-8">
          {right.map((item) => (
            <BenefitRow key={item.title} {...item} align="right" expanded={expanded === item.title} onToggle={() => toggle(item.title)} />
          ))}
        </div>
      </div>

      <div className="md:hidden flex flex-col gap-3">
        {items.map((item) => {
          const isOpen = expanded === item.title;
          return (
            <div key={item.title} className="border border-[#e8dece] rounded-xl overflow-hidden bg-white">
              <button onClick={() => toggle(item.title)} className="w-full flex items-center gap-3 p-4 text-left">
                <CheckCircle />
                <span className="font-['Cormorant_Garamond'] text-xl font-bold text-[#2d2011] flex-1 leading-snug">{item.title}</span>
                <span className="text-[#b8892a] text-xl font-light">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="px-4 pb-4 pt-0">
                  <p className="text-base text-[#5a5248] leading-relaxed">{item.desc}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default function MahayogMeditation() {
  const { t } = useTranslation();
  const b = import.meta.env.BASE_URL;
  const journeySteps = (t("meditation.journey.steps", { returnObjects: true }) as { step: string; sub: string; title: string; desc: string }[]) ?? [];
  const whatIsPoints = (t("meditation.whatIs.points", { returnObjects: true }) as string[]) ?? [];
  const saints = (t("meditation.origins.saints", { returnObjects: true }) as SaintItem[]) ?? [];
  const faqGroups = (t("meditation.faq.groups", { returnObjects: true }) as FaqGroup[]) ?? [];

  const saintImgs = ["saint-kabir.jpg", "saint-ravidas.jpg", "saint-tulsidas.jpg", "saint-mirabai.jpg"];

  return (
    <div className="bg-[#faf9f6] text-[#3d3830]" style={{ scrollBehavior: "smooth" }}>
      <Nav />

      {/* HERO */}
      <section className="relative h-[58vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={`${b}images/meditation-hero.png`} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/70 via-[#2c1a08]/40 to-[#faf9f6]" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#e8c56a]" />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/></svg>
            <div className="h-px w-12 bg-[#e8c56a]" />
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light text-white leading-none mb-4">{t("meditation.hero.title")}</h1>
          <p className="text-lg text-[#f0e4c8] tracking-widest uppercase font-light mb-8">{t("meditation.hero.subtitle")}</p>
          <Link href="/register?for=meditation" className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-7 py-3 rounded-full tracking-wider transition-colors duration-200">
            {t("meditation.hero.register")} <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <HorizontalSectionNav />

      {/* WHAT IS */}
      <section id="what-is" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">{t("meditation.whatIs.kicker")}</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2 mb-6 leading-snug">{t("meditation.whatIs.title")}</h2>
            <p className="text-base leading-relaxed text-[#5a5248] mb-4">{t("meditation.whatIs.p1")}</p>
            <p className="text-base leading-relaxed text-[#5a5248] mb-4">{t("meditation.whatIs.p2")}</p>
            <div className="space-y-2">
              {whatIsPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#b8892a] mt-2 shrink-0" />
                  <span className="text-base text-[#5a5248] leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={`${b}images/meditation-nature.png`} alt="" className="w-full rounded-2xl object-cover shadow-md" style={{ height: "420px" }} />
          </div>
        </div>
      </section>

      {/* MAHAYOG */}
      <section id="mahayog" className="py-20 px-6 bg-[#fdf6ec]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center mb-14">
            <div>
              <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">{t("meditation.mahayog.kicker")}</span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#3d3830] mt-2 mb-6 leading-tight">{t("meditation.mahayog.title")}</h2>
              <p className="text-base leading-relaxed text-[#5a5248] mb-6">{t("meditation.mahayog.p1")}</p>
              <p className="text-base leading-relaxed text-[#5a5248] mb-6">
                {t("meditation.mahayog.p2a")}<span className="text-[#b8892a] font-semibold italic">{t("meditation.mahayog.ajapa")}</span>
                {t("meditation.mahayog.p2b")}<span className="text-[#b8892a] font-semibold italic">{t("meditation.mahayog.nada")}</span>
                {t("meditation.mahayog.p2c")}<span className="text-[#b8892a] font-semibold italic">{t("meditation.mahayog.shaktipat")}</span>
                {t("meditation.mahayog.p2d")}
              </p>
              <p className="text-base leading-relaxed text-[#5a5248]">{t("meditation.mahayog.p3")}</p>
            </div>
            <VennDiagram />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="pt-0 pb-20 bg-white">
        <div className="w-full -mt-14 relative z-10">
          <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
            <path d="M0,90 C240,20 480,70 720,35 C960,0 1200,55 1440,25 L1440,90 L0,90 Z" fill="white"/>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
            <img src={`${b}images/meditation-howitworks.png`} alt="" className="w-full rounded-2xl object-cover shadow-md order-2 md:order-1" style={{ height: "400px" }} />
            <div className="order-1 md:order-2">
              <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">{t("meditation.howItWorks.kicker")}</span>
              <h3 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#3d3830] mt-2 mb-5 leading-snug">{t("meditation.howItWorks.title")}</h3>
              <p className="text-base leading-relaxed text-[#5a5248] mb-5">
                {t("meditation.howItWorks.p1a")}<span className="text-[#b8892a] font-semibold italic">{t("meditation.howItWorks.shaktipat")}</span>{t("meditation.howItWorks.p1b")}
              </p>
              <p className="text-base leading-relaxed text-[#5a5248] mb-5">
                {t("meditation.howItWorks.p2a")}<span className="text-[#b8892a] font-semibold italic">{t("meditation.howItWorks.shaktipat2")}</span>{t("meditation.howItWorks.p2b")}
              </p>
              <p className="text-base leading-relaxed text-[#5a5248]">{t("meditation.howItWorks.p3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-24 px-6 bg-[#2d2720]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.3em] text-xs text-white/70 font-medium">{t("meditation.journey.kicker")}</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-white mt-3 mb-4 leading-snug">{t("meditation.journey.title")}</h2>
            <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">{t("meditation.journey.intro")}</p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 relative mb-16">
            <div className="hidden md:block absolute top-[48px] left-[calc(16.66%+48px)] w-[calc(33.33%-96px)] h-px bg-gradient-to-r from-white/20 to-white/50" />
            <div className="hidden md:block absolute top-[48px] left-[calc(50%+48px)] w-[calc(33.33%-96px)] h-px bg-gradient-to-r from-white/50 to-white/20" />
            {journeySteps.map((item, i) => (
              <div key={item.step} className="flex-1 flex flex-col items-center text-center px-6 md:px-10 relative">
                <div className="relative z-10 w-[96px] h-[96px] rounded-full border-2 border-[#b8892a] bg-[#b8892a]/20 flex flex-col items-center justify-center mb-6 shadow-[0_0_32px_rgba(184,137,42,0.35)]">
                  <span className="font-['Cormorant_Garamond'] text-4xl font-bold text-[#e8c06a] leading-none">{item.step}</span>
                </div>
                {i < 2 && (<div className="md:hidden text-[#b8892a]/70 text-3xl mb-6">↓</div>)}
                <span className="text-sm uppercase tracking-[0.25em] text-white/60 font-medium mb-2">{item.sub}</span>
                <h4 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#f0d898] mb-3 leading-snug">{item.title}</h4>
                <p className="text-sm text-white/75 leading-relaxed max-w-[220px]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/register?for=meditation" className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#b8892a] hover:bg-[#d4a843] text-white font-semibold tracking-wide text-sm transition-all duration-300 shadow-[0_4px_24px_rgba(184,137,42,0.4)] hover:shadow-[0_4px_32px_rgba(184,137,42,0.65)] hover:scale-105">
              {t("meditation.journey.cta")}
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <p className="text-xs text-white/50 mt-4">{t("meditation.journey.note")}</p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">{t("meditation.benefits.kicker")}</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2 mb-3">{t("meditation.benefits.title")}</h2>
            <p className="text-base text-[#7a7068] max-w-xl mx-auto leading-relaxed">{t("meditation.benefits.intro")}</p>
          </div>
          <p className="text-sm text-[#a89880] text-center mb-8 flex items-center justify-center gap-2">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2v12M2 8h12" stroke="#a89880" strokeWidth="1.5" strokeLinecap="round"/></svg>
            {t("meditation.benefits.clickHint")}
          </p>
          <BenefitsRadial />
        </div>
      </section>

      {/* ORIGINS */}
      <section id="origins" className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${b}images/meditation-origins.png`} alt="" aria-hidden className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f6]/95 via-[#faf9f6]/75 to-[#faf9f6]/95" />
          <div className="absolute inset-0 bg-[#f5ece0]/40" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_280px] gap-12 items-start">
            <div>
              <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">{t("meditation.origins.kicker")}</span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2 mb-6 leading-snug">{t("meditation.origins.title")}</h2>
              <p className="text-base leading-relaxed text-[#5a5248] mb-5">{t("meditation.origins.p1")}</p>
              <p className="text-base leading-relaxed text-[#5a5248] mb-5">{t("meditation.origins.p2")}</p>
              <p className="text-base leading-relaxed text-[#5a5248] mb-8">{t("meditation.origins.p3")}</p>
              {/* Mobile Ramananda card */}
              <div className="md:hidden bg-white/70 backdrop-blur-sm border border-[#e0d0b8] rounded-2xl p-4 flex gap-4 items-center mb-6">
                <img src={`${b}images/saint-ramananda.jpg`} alt={t("meditation.origins.ramanandaName")} className="w-20 h-24 rounded-xl object-cover object-top shadow-md border border-[#e0d0b8] shrink-0" />
                <div>
                  <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#3d3830] leading-tight">{t("meditation.origins.ramanandaName")}</p>
                  <p className="text-sm text-[#9a8878] mt-1">{t("meditation.origins.ramanandaYear")}</p>
                  <p className="text-base text-[#5a5248] mt-2 leading-relaxed">{t("meditation.origins.ramanandaDesc")}</p>
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-[#e0d0b8] rounded-2xl p-7 flex flex-col-reverse md:flex-row gap-6 items-center md:items-start">
                <div className="flex-1">
                  <span className="uppercase tracking-[0.2em] text-xs text-[#b8892a] font-semibold block mb-3">{t("meditation.origins.revivalLabel")}</span>
                  <p className="text-base leading-relaxed text-[#5a5248]">
                    {t("meditation.origins.revivalText")} <strong className="text-[#3d3830]">{t("meditation.origins.revivalGuru")}</strong>{t("meditation.origins.revivalText2")}
                  </p>
                  <a href="#" className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-[#b8892a] hover:text-[#96711e] transition-colors duration-200 group">
                    {t("meditation.origins.revivalCta")}
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">›</span>
                  </a>
                </div>
                <img src={`${b}images/gurudev-sketch.png`} alt={t("meditation.origins.revivalGuru")} className="w-32 shrink-0 rounded-xl object-cover shadow-sm" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="hidden md:flex bg-white/70 backdrop-blur-sm border border-[#e0d0b8] rounded-2xl p-4 gap-4 items-center mb-2">
                <img src={`${b}images/saint-ramananda.jpg`} alt={t("meditation.origins.ramanandaName")} className="w-20 h-24 rounded-xl object-cover object-top shadow-md border border-[#e0d0b8] shrink-0" />
                <div>
                  <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#3d3830] leading-tight">{t("meditation.origins.ramanandaName")}</p>
                  <p className="text-sm text-[#9a8878] mt-1">{t("meditation.origins.ramanandaYear")}</p>
                  <p className="text-base text-[#5a5248] mt-2 leading-relaxed">{t("meditation.origins.ramanandaDesc")}</p>
                </div>
              </div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-medium mb-1">{t("meditation.origins.practitionersLabel")}</p>
              {saints.map((s, i) => (
                <div key={s.name} className="flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-[#e0d0b8] rounded-xl p-3 hover:bg-white/80 transition-all duration-200">
                  <img src={`${b}images/${saintImgs[i] ?? "saint-kabir.jpg"}`} alt={s.name} className="w-14 h-14 rounded-lg object-cover object-top shrink-0 shadow-sm" />
                  <div>
                    <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#3d3830] leading-tight">{s.name}</p>
                    <p className="text-sm text-[#9a8878] mt-0.5">{s.years}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-2xl bg-[#f2ead8] border border-[#e0d0b8] px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-['Cormorant_Garamond'] text-xl text-[#3d3830] font-light">{t("meditation.origins.lineageTitle")}</p>
              <p className="text-sm text-[#9a8878] mt-1">{t("meditation.origins.lineageDesc")}</p>
            </div>
            <a href="#" className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#b8892a] text-[#b8892a] text-sm font-medium hover:bg-[#b8892a] hover:text-white transition-all duration-300 group">
              {t("meditation.origins.lineageCta")}
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">›</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-gradient-to-b from-[#e8dcc8] via-[#ede3cf] to-[#e2d4b8]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">{t("meditation.faq.kicker")}</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2">{t("meditation.faq.title")}</h2>
          </div>
          <div className="space-y-3">
            {faqGroups.map((group) => (
              <FAQGroup key={group.theme} theme={group.theme} items={group.items} />
            ))}
          </div>
        </div>
      </section>

      <FloatingRegisterButton label={t("meditation.floatingRegister")} href="/register?for=meditation" />

      {/* CTA */}
      <section id="register" className="relative py-24 px-6 overflow-hidden"
        style={{ backgroundImage: `url(${b}images/cta-meditation-dawn.png)`, backgroundSize: "cover", backgroundPosition: "center 40%" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(18,7,1,0.88) 0%, rgba(42,18,4,0.82) 50%, rgba(20,10,2,0.90) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(184,137,42,0.22) 0%, transparent 65%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8892a]/50 to-transparent" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-14 bg-[#e8c56a]/30" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/></svg>
            <div className="h-px w-14 bg-[#e8c56a]/30" />
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight mb-4">
            {t("meditation.finalCta.title1")}<br />{t("meditation.finalCta.title2")}
          </h2>
          <p className="text-[#c8b08a] text-base leading-relaxed mb-10 max-w-md mx-auto">{t("meditation.finalCta.desc")}</p>
          <Link href="/register?for=meditation" className="inline-flex items-center gap-3 bg-[#b8892a] hover:bg-[#d4a030] text-white text-sm px-10 py-4 rounded-full tracking-widest transition-all duration-300 shadow-lg shadow-[#b8892a]/20 hover:shadow-[#b8892a]/40">
            {t("meditation.finalCta.button")}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <p className="text-[#7a6248] text-base mt-6 tracking-wide">{t("meditation.finalCta.note")}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
