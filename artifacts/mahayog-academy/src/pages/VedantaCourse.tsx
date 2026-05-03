import { useState } from "react";
import { useTranslation } from "react-i18next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronDown, ArrowRight } from "lucide-react";
import FloatingRegisterButton from "@/components/FloatingRegisterButton";

const b = import.meta.env.BASE_URL;

const PLAYLIST_URL = "https://youtube.com/playlist?list=PLVoaXKRxO25q8AHabrE1oG5599m4n1Ty1";

const STORY_IDS = [
  "LFp2qXW8_tI", "oFvSOOg-Rzs", "RSaqj7huxMs", "IU4lNNWXp_I",
  "F_rI0qh8K-U", "2y8oYEyPqZc", "2s6b6Su8kGE", "uIvZ-pBpmbw",
  "sDjkSnfX2fI", "uB5iiXrEUAE", "dJaVxSPAV-A", "ivbcuxNGiUE",
];

const OUTLINE_LECTURES = [4, 9, 8, 29, 22, 20, 10, 30, 72, 46, 17];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e8dece] last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-6 group">
        <span className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#3d3830] group-hover:text-[#9d7422] transition-colors duration-200 leading-snug">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#b8892a] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} strokeWidth={1.5} />
      </button>
      <div className={`overflow-hidden transition-all duration-400 ${open ? "max-h-[600px] pb-5" : "max-h-0"}`}>
        <p className="text-base text-[#6b6158] leading-relaxed whitespace-pre-line">{a}</p>
      </div>
    </div>
  );
}

function OutlineItem({ title, desc, lectures, index, suffix }: { title: string; desc: string; lectures: number; index: number; suffix: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e8dece] last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-4 py-4 text-left hover:bg-[#fdf6ec]/50 px-1 transition-colors duration-150 rounded">
        <span className="text-sm text-[#b8892a] font-medium w-5 shrink-0 tabular-nums">{String(index + 1).padStart(2, "0")}</span>
        <span className="flex-1 font-['Cormorant_Garamond'] text-xl font-light text-[#3d3830]">{title}</span>
        <span className="text-sm text-[#9a8f84] mr-3 shrink-0">{lectures} {suffix}</span>
        <ChevronDown className={`w-4 h-4 text-[#b8892a] shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} strokeWidth={1.5} />
      </button>
      {open && <p className="text-base text-[#7a7068] leading-relaxed pb-4 pl-9 pr-4">{desc}</p>}
    </div>
  );
}

export default function VedantaCourse() {
  const { t } = useTranslation();
  const stats = (t("vedanta.stats", { returnObjects: true }) as { label: string; value: string }[]) ?? [];
  const meta = (t("vedanta.about.meta", { returnObjects: true }) as { label: string; value: string }[]) ?? [];
  const topics = (t("vedanta.vishishta.topics", { returnObjects: true }) as string[]) ?? [];
  const outlineItems = (t("vedanta.outline.items", { returnObjects: true }) as { title: string; desc: string }[]) ?? [];
  const lecturesSuffix = t("vedanta.outline.lecturesSuffix");
  const highlights = (t("vedanta.highlights.items", { returnObjects: true }) as { sub: string; title: string; desc: string }[]) ?? [];
  const names = (t("vedanta.stories.names", { returnObjects: true }) as string[]) ?? [];
  const roles = (t("vedanta.stories.roles", { returnObjects: true }) as string[]) ?? [];
  const faqs = (t("vedanta.faq.items", { returnObjects: true }) as { q: string; a: string }[]) ?? [];

  return (
    <div className="bg-[#faf9f6] text-[#3d3830]">
      <Nav />

      <section className="relative h-[58vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={`${b}images/vedanta-hero.png`} alt={t("vedanta.hero.imgAlt")} className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/70 via-[#2c1a08]/40 to-[#faf9f6]" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#e8c56a]" />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/>
            </svg>
            <div className="h-px w-12 bg-[#e8c56a]" />
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight mb-4">{t("vedanta.hero.title")}</h1>
          <p className="text-base text-[#f0e4c8] tracking-widest uppercase font-light mb-8">{t("vedanta.hero.subtitle")}</p>
          <Link href="/register?for=vedanta" className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-7 py-3 rounded-full tracking-wider transition-colors duration-200">
            {t("vedanta.hero.cta")} <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <div className="bg-[#2e2820] text-[#e8c56a]">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center divide-x divide-[#e8c56a]/20">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center px-8 py-5 gap-0.5">
              <span className="text-sm uppercase tracking-[0.25em] text-[#c8a050] font-medium">{s.label}</span>
              <span className="font-['Cormorant_Garamond'] text-lg font-light text-white">{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      <section id="about" className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">{t("vedanta.about.eyebrow")}</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2 mb-6 leading-snug">{t("vedanta.about.title")}</h2>
            <p className="text-base leading-relaxed text-[#5a5248] mb-4">{t("vedanta.about.p1")}</p>
            <p className="text-base leading-relaxed text-[#5a5248] mb-8">
              {t("vedanta.about.p2Pre")}<em>{t("vedanta.about.p2Em")}</em>{t("vedanta.about.p2Post")}
            </p>
            <div className="space-y-3">
              {meta.map((m) => (
                <div key={m.label} className="flex gap-4">
                  <span className="text-sm uppercase tracking-[0.2em] text-[#b8892a] font-medium w-32 shrink-0 pt-0.5">{m.label}</span>
                  <span className="text-base text-[#5a5248]">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#f5ece0] border border-[#e2d0b8] p-8">
            <span className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-medium">{t("vedanta.vishishta.eyebrow")}</span>
            <h3 className="font-['Cormorant_Garamond'] text-2xl font-light text-[#3d3830] mt-2 mb-4 leading-snug">{t("vedanta.vishishta.title")}</h3>
            <p className="text-base text-[#5a5248] leading-relaxed mb-6">{t("vedanta.vishishta.body")}</p>
            <div className="border-t border-[#e2d0b8] pt-5 space-y-2">
              {topics.map((tp) => (
                <div key={tp} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8892a] shrink-0" />
                  <span className="text-base text-[#5a5248]">{tp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#fdf6ec]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">{t("vedanta.outline.eyebrow")}</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2">{t("vedanta.outline.title")}</h2>
          </div>
          <div className="bg-white rounded-2xl border border-[#e8dece] px-6 py-2 shadow-sm">
            {outlineItems.map((it, i) => (
              <OutlineItem key={i} title={it.title} desc={it.desc} lectures={OUTLINE_LECTURES[i] ?? 0} index={i} suffix={lecturesSuffix} />
            ))}
          </div>
          <div className="mt-6 flex justify-end items-center gap-4 pr-1">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9a8f84]">{t("vedanta.outline.totalLabel")}</span>
            <span className="font-['Cormorant_Garamond'] text-2xl text-[#b8892a]">{t("vedanta.outline.totalValue")}</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">{t("vedanta.highlights.eyebrow")}</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2">{t("vedanta.highlights.title")}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="rounded-2xl bg-[#f5ece0] border border-[#e2d0b8] p-7">
                <div className="mb-4">
                  {i === 0 ? (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#b8892a" strokeWidth="1.2" fill="none"/>
                    </svg>
                  ) : (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b8892a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  )}
                </div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#b8892a] font-medium mb-1">{h.sub}</p>
                <h3 className="font-['Cormorant_Garamond'] text-xl font-light text-[#3d3830] mb-3">{h.title}</h3>
                <p className="text-base text-[#5a5248] leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#fdf6ec]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">{t("vedanta.stories.eyebrow")}</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2 mb-3">{t("vedanta.stories.title")}</h2>
            <p className="text-base text-[#7a7068] max-w-xl mx-auto leading-relaxed">{t("vedanta.stories.intro")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {STORY_IDS.map((id, i) => (
              <a key={id} href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer" className="group rounded-xl overflow-hidden bg-white border border-[#e8dece] shadow-sm hover:shadow-md hover:border-[#c8a050] transition-all duration-200 flex flex-col">
                <div className="relative aspect-video overflow-hidden bg-[#1a0f05]">
                  <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`} alt={names[i] ?? ""} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-200">
                    <div className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#b8892a"><polygon points="5,3 19,12 5,21"/></svg>
                    </div>
                  </div>
                </div>
                <div className="p-3.5 flex-1 flex flex-col gap-1">
                  <p className="font-['Cormorant_Garamond'] text-base font-semibold text-[#3d3830] leading-snug group-hover:text-[#9d7422] transition-colors duration-150">{names[i] ?? ""}</p>
                  <p className="text-sm text-[#9a8f84] leading-snug">{roles[i] ?? ""}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={PLAYLIST_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#7a5518] text-white text-base tracking-wide transition-colors duration-150 rounded-full px-6 py-2.5">
              {t("vedanta.stories.playlistCta")}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <FloatingRegisterButton label={t("vedanta.floatingCta")} href="/register?for=vedanta" />

      <section className="py-20 px-6 bg-gradient-to-b from-[#e8dcc8] via-[#ede3cf] to-[#e2d4b8]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#b8892a]/40" />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#b8892a" strokeWidth="1.2" fill="none"/>
              </svg>
              <div className="h-px w-10 bg-[#b8892a]/40" />
            </div>
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">{t("vedanta.faq.eyebrow")}</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#2e1405] mt-2">{t("vedanta.faq.title")}</h2>
          </div>
          <div>
            {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      <section className="relative py-28 px-6 overflow-hidden" style={{ backgroundImage: `url(${b}images/cta-vedanta-study.png)`, backgroundSize: "cover", backgroundPosition: "center 55%" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(12,5,1,0.90) 0%, rgba(38,16,4,0.84) 50%, rgba(15,7,1,0.92) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(184,137,42,0.18) 0%, transparent 70%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8892a]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8892a]/20 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#e8c56a]/50" />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1" fill="rgba(232,197,106,0.15)"/>
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#e8c56a]/50" />
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight mb-4" style={{ textShadow: "0 0 60px rgba(212,160,48,0.5), 0 2px 20px rgba(0,0,0,0.6)" }}>
            {t("vedanta.cta.title1")}<br />{t("vedanta.cta.title2")}
          </h2>
          <p className="text-[#c8b08a] text-base leading-relaxed mb-10 max-w-md mx-auto">{t("vedanta.cta.body")}</p>
          <Link href="/register?for=vedanta" className="inline-flex items-center gap-3 bg-[#b8892a] hover:bg-[#d4a030] text-white text-sm px-10 py-4 rounded-full tracking-widest transition-all duration-300 shadow-lg shadow-[#b8892a]/30 hover:shadow-[#b8892a]/50" style={{ boxShadow: "0 0 30px rgba(184,137,42,0.3), 0 4px 20px rgba(0,0,0,0.4)" }}>
            {t("vedanta.cta.button")}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <p className="text-[#a89070] text-xs mt-6 tracking-wide">{t("vedanta.cta.footnote")}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
