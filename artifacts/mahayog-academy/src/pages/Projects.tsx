import { useState } from "react";
import { useTranslation } from "react-i18next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, X } from "lucide-react";

const b = import.meta.env.BASE_URL;

const RAM_GALLERY_SRC = ["ram-mandir-1.jpg", "ram-mandir-2.jpg", "ram-mandir-3.jpg", "ram-mandir-4.jpg", "ram-mandir-5.jpg"];
const HANUMAN_BANNER_IMGS = ["land-contribution.png", "financial-support.png"];
const RAM_BANNER_IMGS = ["ram-expertise.png", "ram-culture.png", "ram-finance.png"];

export default function Projects() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<string | null>(null);

  const features = (t("projects.hanuman.features", { returnObjects: true }) as { title: string; desc: string }[]) ?? [];
  const programs = (t("projects.hanuman.programs", { returnObjects: true }) as string[]) ?? [];
  const hanumanBannerTypes = (t("projects.hanuman.banner.types", { returnObjects: true }) as { kind: string; title: string; desc: string; imgAlt: string }[]) ?? [];
  const journey = (t("projects.ramMandir.journey", { returnObjects: true }) as { stage: string; name: string; desc: string }[]) ?? [];
  const yugas = (t("projects.ramMandir.yugas", { returnObjects: true }) as string[]) ?? [];
  const arch = (t("projects.ramMandir.arch", { returnObjects: true }) as { title: string; desc: string }[]) ?? [];
  const galleryAlts = (t("projects.ramMandir.galleryAlts", { returnObjects: true }) as string[]) ?? [];
  const landmarkItems = (t("projects.ramMandir.landmarkItems", { returnObjects: true }) as string[]) ?? [];
  const ramBannerTypes = (t("projects.ramMandir.banner.types", { returnObjects: true }) as { kind: string; title: string; desc: string; imgAlt: string }[]) ?? [];

  return (
    <div className="bg-[#faf9f6] text-[#3d3830]">
      <Nav />

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 md:p-10" onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors" onClick={() => setLightbox(null)}>
            <X className="w-7 h-7" strokeWidth={1.5} />
          </button>
          <img src={lightbox} alt={t("projects.lightboxAlt")} className="max-w-full max-h-full rounded-xl shadow-2xl object-contain" onClick={e => e.stopPropagation()} />
        </div>
      )}

      {/* HERO */}
      <section className="relative h-[58vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${b}images/projects-hero.png`} alt="" aria-hidden className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/70 via-[#2c1a08]/40 to-[#faf9f6]" />
        </div>
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#e8c56a]/60" />
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/60" />
          </div>
          <p className="text-[#e8c56a] text-xs uppercase tracking-[0.3em] font-medium mb-3">{t("projects.hero.eyebrow")}</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight">{t("projects.hero.title")}</h1>
          <p className="text-[#f0e4c8] text-base tracking-widest uppercase font-light mt-4">{t("projects.hero.subtitle")}</p>
        </div>
      </section>

      {/* SECTION ANCHOR NAV */}
      <div className="md:sticky md:top-0 z-30 bg-[#faf9f6]/95 backdrop-blur-sm border-b border-[#e8dece] px-6 py-3">
        <nav className="max-w-3xl mx-auto flex flex-col md:flex-row items-stretch rounded-2xl md:rounded-full border border-[#d8cebb] bg-[#f4ede0] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[#d8cebb] text-sm font-medium">
          {[
            { label: t("projects.nav.p1"), anchor: "#project-01" },
            { label: t("projects.nav.p2"), anchor: "#project-02" },
          ].map(({ label, anchor }) => (
            <a key={anchor} href={anchor} onClick={e => { e.preventDefault(); document.querySelector(anchor)?.scrollIntoView({ behavior: "smooth" }); }} className="flex-1 text-center py-2.5 text-[#5c4e38] hover:text-white hover:bg-[#3d3020] transition-colors duration-150 cursor-pointer">
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* PROJECT 01 */}
      <section id="project-01" className="py-24 px-6 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start mb-14">
            <div>
              <div className="flex items-start gap-6 mb-8">
                <span className="font-['Cormorant_Garamond'] text-8xl font-light text-[#e8dece] leading-none select-none shrink-0">{t("projects.hanuman.number")}</span>
                <div className="pt-4">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-2">{t("projects.hanuman.eyebrow")}</p>
                  <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#3d3830] leading-tight">{t("projects.hanuman.title")}</h2>
                  <p className="font-['Cormorant_Garamond'] text-xl italic text-[#9a8f84] mt-1">{t("projects.hanuman.sub")}</p>
                </div>
              </div>
              <div className="h-px bg-[#e8dece] mb-6" />
              <p className="text-base text-[#5a5248] leading-relaxed mb-8">{t("projects.hanuman.intro")}</p>

              <div className="space-y-3">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-5 items-start p-5 bg-white border border-[#e8dece] rounded-xl">
                    <span className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#d4a843]/50 leading-none shrink-0 w-7">{i + 1}</span>
                    <div>
                      <p className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] leading-none mb-1.5">{f.title}</p>
                      <p className="text-base text-[#7a7068] leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md shadow-[#b8892a]/10 hidden md:block sticky top-20">
              <img src={`${b}images/hanuman-temple-portrait.png`} alt={t("projects.hanuman.portraitAlt")} className="w-full object-cover object-top" style={{ minHeight: "520px" }} />
            </div>
          </div>

          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-6">{t("projects.hanuman.programsLabel")}</p>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {programs.map((p, i) => (
                <div key={i} className="flex items-center gap-3 py-4 border-b border-[#e8dece]">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="#b8892a" className="shrink-0">
                    <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z"/>
                  </svg>
                  <p className="text-base text-[#5a5248]">{p}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 -mx-6 px-8 md:px-14 py-12 bg-[#2e2820]">
            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
              <div className="flex-1">
                <h3 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#faf9f6] leading-snug mb-3">{t("projects.hanuman.banner.heading")}</h3>
                <p className="text-base text-[#9a8f84] leading-relaxed max-w-lg">{t("projects.hanuman.banner.intro")}</p>
              </div>
              <div className="shrink-0">
                <Link href="/contact">
                  <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm font-medium px-8 py-3.5 rounded-full tracking-widest transition-colors duration-200 cursor-pointer">
                    {t("projects.supportCta")}
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </Link>
              </div>
            </div>
            <div className="h-px bg-white/10 mb-8" />
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {hanumanBannerTypes.map((tp, i) => (
                <div key={i} className="flex-1 flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
                  {i > 0 && <div className="w-px bg-white/10 hidden md:block self-stretch" />}
                  <div className="flex-1">
                    <div className="rounded-xl overflow-hidden mb-4 h-44">
                      <img src={`${b}images/${HANUMAN_BANNER_IMGS[i]}`} alt={tp.imgAlt} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#d4a843] font-semibold mb-1">{tp.kind}</p>
                    <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#e8dece] mb-2">{tp.title}</p>
                    <p className="text-base text-[#9a8f84] leading-relaxed">{tp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="relative -mx-6 overflow-hidden" style={{ minHeight: "320px" }}>
            <img src={`${b}images/quote-banner-bg.png`} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-white/70" />
            <div className="relative flex flex-col items-center justify-center text-center px-8 md:px-20 py-16">
              <span className="font-['Cormorant_Garamond'] text-6xl font-light text-[#b8892a]/40 leading-none mb-2 select-none">"</span>
              <p className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-light italic text-[#3d3830] leading-relaxed max-w-2xl mb-6">{t("projects.hanuman.quote.text")}</p>
              <div className="h-px w-10 bg-[#b8892a]/50 mb-4" />
              <cite className="text-xs uppercase tracking-[0.25em] text-[#3d3830] font-semibold not-italic">{t("projects.hanuman.quote.cite")}</cite>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-[#e8dece]" /></div>

      {/* PROJECT 02 */}
      <section id="project-02" className="py-24 px-6 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start mb-14">
            <div>
              <div className="flex items-start gap-6 mb-8">
                <span className="font-['Cormorant_Garamond'] text-8xl font-light text-[#e8dece] leading-none select-none shrink-0">{t("projects.ramMandir.number")}</span>
                <div className="pt-4">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-2">{t("projects.ramMandir.eyebrow")}</p>
                  <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#3d3830] leading-tight">{t("projects.ramMandir.title")}</h2>
                  <p className="font-['Cormorant_Garamond'] text-xl italic text-[#9a8f84] mt-1">{t("projects.ramMandir.sub")}</p>
                </div>
              </div>
              <div className="h-px bg-[#e8dece] mb-6" />
              <p className="text-base text-[#5a5248] leading-relaxed mb-4">{t("projects.ramMandir.p1")}</p>
              <p className="text-base text-[#5a5248] leading-relaxed">{t("projects.ramMandir.p2")}</p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md shadow-[#b8892a]/10 hidden md:block sticky top-20 aspect-square">
              <img src={`${b}images/ram-mandir-3.jpg`} alt={t("projects.ramMandir.featureImgAlt")} className="w-full h-full object-cover object-top" />
            </div>
          </div>

          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-8">{t("projects.ramMandir.journeyLabel")}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {journey.map((step, i) => (
                <div key={i} className="flex gap-5 items-start p-5 bg-white border border-[#e8dece] rounded-xl">
                  <span className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#d4a843]/50 leading-none shrink-0 w-7">{step.stage}</span>
                  <div>
                    <p className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] leading-none mb-1.5">{step.name}</p>
                    <p className="text-base text-[#7a7068] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <p className="text-sm text-[#9a8f84] mb-4 uppercase tracking-[0.15em] font-medium">{t("projects.ramMandir.yugasLabel")}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 sm:divide-x divide-[#e8dece] border border-[#e8dece] rounded-xl overflow-hidden">
                {yugas.map((y, i) => (
                  <div key={i} className="flex flex-col items-center py-5 px-3 bg-[#fdf6ec]">
                    <span className="font-['Cormorant_Garamond'] text-3xl font-light text-[#b8892a]/40 leading-none mb-2">{["I","II","III","IV"][i]}</span>
                    <p className="font-['Cormorant_Garamond'] text-base font-semibold text-[#5a5248] text-center leading-snug">{y}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-2">{t("projects.ramMandir.archLabel")}</p>
            <div className="h-px bg-[#e8dece] mb-0" />
            <div>
              {arch.map((a, i) => (
                <div key={i} className="grid md:grid-cols-[1fr_2fr] gap-6 py-6 border-b border-[#e8dece] items-start">
                  <h4 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#3d3830] leading-snug">{a.title}</h4>
                  <p className="text-base text-[#7a7068] leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-6">{t("projects.ramMandir.galleryLabel")}</p>
            <div className="grid grid-cols-6 gap-3">
              {RAM_GALLERY_SRC.map((src, i) => (
                <div key={i} className={`rounded-xl overflow-hidden cursor-zoom-in h-52 ${i < 3 ? "col-span-2" : "col-span-3"}`} onClick={() => setLightbox(`${b}images/${src}`)}>
                  <img src={`${b}images/${src}`} alt={galleryAlts[i] ?? ""} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
            <p className="text-sm text-[#9a8f84] mt-3 text-center tracking-wide">{t("projects.ramMandir.galleryHint")}</p>
          </div>

          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-3">{t("projects.ramMandir.landmarkLabel")}</p>
            <div className="h-px bg-[#e8dece] mb-0" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3">
              {landmarkItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-4 border-b border-[#e8dece] pr-6">
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="#b8892a" className="shrink-0">
                    <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z"/>
                  </svg>
                  <p className="text-base text-[#5a5248]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="-mx-6 px-8 md:px-14 py-12 bg-[#2e2820]">
            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
              <div className="flex-1">
                <h3 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#faf9f6] leading-snug mb-3">{t("projects.ramMandir.banner.heading")}</h3>
                <p className="text-base text-[#9a8f84] leading-relaxed max-w-lg">{t("projects.ramMandir.banner.intro")}</p>
              </div>
              <div className="shrink-0">
                <Link href="/contact">
                  <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm font-medium px-8 py-3.5 rounded-full tracking-widest transition-colors duration-200 cursor-pointer">
                    {t("projects.supportCta")}
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </Link>
              </div>
            </div>
            <div className="h-px bg-white/10 mb-8" />
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {ramBannerTypes.map((tp, i) => (
                <div key={i} className="flex-1 flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
                  {i > 0 && <div className="w-px bg-white/10 hidden md:block self-stretch" />}
                  <div className="flex-1">
                    <div className="rounded-xl overflow-hidden mb-4 h-40">
                      <img src={`${b}images/${RAM_BANNER_IMGS[i]}`} alt={tp.imgAlt} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#d4a843] font-semibold mb-1">{tp.kind}</p>
                    <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#e8dece] mb-2">{tp.title}</p>
                    <p className="text-base text-[#9a8f84] leading-relaxed">{tp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
