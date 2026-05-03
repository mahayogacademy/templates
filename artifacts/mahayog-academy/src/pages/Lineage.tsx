import { useTranslation } from "react-i18next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const b = import.meta.env.BASE_URL;

const GURU_IMAGES = [
  "lineage-01-ramanandacharya.jpg",
  "lineage-02-maniramdas.jpg",
  "lineage-03-vaishnavdas.jpg",
  "lineage-04-ramcharandas.jpg",
  "lineage-05-ramsobhadas.jpg",
  "lineage-06-rammanohar.jpg",
  "lineage-07-nrityagopal.jpg",
  "lineage-08-narayandas.jpg",
  "lineage-09-bhagawandas.jpg",
  "lineage-10-siddhababa.jpg",
];

function GoldDiamond() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" fill="#b8892a" fillOpacity="0.6"/>
    </svg>
  );
}

function GuruCard({ name, img }: { name: string; img: string }) {
  return (
    <div className="flex flex-col items-center text-center w-60">
      <div className="relative w-52 h-52 shrink-0">
        <div className="absolute inset-0 rounded-full shadow-[0_0_0_2px_#b8892a,0_0_0_6px_#f2ead8,0_0_0_8px_#c9a55a40]" />
        <img
          src={`${b}images/${img}`}
          alt={name}
          className="w-full h-full object-cover object-top rounded-full"
        />
      </div>
      <p className="font-['Cormorant_Garamond'] text-lg font-medium text-[#4a4038] leading-snug mt-3 px-1">
        {name}
      </p>
    </div>
  );
}

export default function Lineage() {
  const { t } = useTranslation();
  const guruNames = (t("lineage.gurus", { returnObjects: true }) as string[]) ?? [];
  const gurus = GURU_IMAGES.map((img, i) => ({ img, name: guruNames[i] ?? "" }));

  // Pair gurus 1–8 (indices 0–7); guru 9 (penultimate) is centered alone; guru 10 (last) is the large closing portrait
  const rows: typeof gurus[] = [];
  for (let i = 0; i < gurus.length - 2; i += 2) {
    rows.push(gurus.slice(i, i + 2));
  }
  const penultimateGuru = gurus[gurus.length - 2];
  const lastGuru = gurus[gurus.length - 1];

  return (
    <div className="bg-[#faf9f6] text-[#3d3830]">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[58vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${b}images/lineage-hero.png`} alt="" aria-hidden className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/70 via-[#2c1a08]/40 to-[#f2ead8]" />
        </div>
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#e8c56a]/60" />
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/60" />
          </div>
          <p className="text-[#e8c56a] text-xs uppercase tracking-[0.3em] font-medium mb-3">{t("lineage.hero.eyebrow")}</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight">{t("lineage.hero.title")}</h1>
          <p className="text-[#f0e4c8] text-base tracking-widest uppercase font-light mt-4">{t("lineage.hero.subtitle")}</p>
        </div>
      </section>

      {/* ── INTRO + PARAMPARA CHAIN (shared bg) ── */}
      <section className="px-6 bg-[#f2ead8]">
        <div className="max-w-2xl mx-auto text-center py-16">
          <p className="text-base text-[#5a5248] leading-relaxed mb-5">
            {t("lineage.intro.p1")}
          </p>
          <p className="text-base text-[#5a5248] leading-relaxed">
            {t("lineage.intro.p2")}
          </p>
        </div>

        {/* Divider */}
        <div className="max-w-3xl mx-auto flex items-center gap-4 pb-2">
          <div className="flex-1 h-px bg-[#c9a55a]/40" />
          <GoldDiamond />
          <div className="flex-1 h-px bg-[#c9a55a]/40" />
        </div>

      </section>

      {/* ── PARAMPARA CHAIN ── */}
      <section className="pb-24 px-6 bg-[#f2ead8]">
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-10 pt-10">
            <p className="text-sm uppercase tracking-[0.35em] text-[#b8892a] font-semibold mb-2">{t("lineage.chain.eyebrow")}</p>
            <h2 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#3d3830]">{t("lineage.chain.heading")}</h2>
            <div className="h-px w-12 bg-[#b8892a]/30 mx-auto mt-4" />
            <p className="text-sm text-[#a89880] italic mt-3">
              <span className="hidden md:inline">{t("lineage.chain.readingLong")}</span>
              <span className="md:hidden">{t("lineage.chain.readingShort")}</span>
            </p>
          </div>

          {/* Rows */}
          <div className="flex flex-col items-center gap-0">
            {rows.map((row, rowIdx) => (
              <div key={rowIdx} className="flex flex-col items-center w-full">
                {/* Row of 2 gurus with arrow */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                  <GuruCard name={row[0].name} img={row[0].img} />

                  {/* Connector between two cards: vertical on mobile, horizontal on desktop */}
                  <div className="md:hidden flex flex-col items-center my-3">
                    <div className="w-px h-5 bg-[#c9a55a]/40" />
                    <GoldDiamond />
                    <div className="w-px h-5 bg-[#c9a55a]/40" />
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M6 8L1 1h10L6 8z" fill="#c9a55a" fillOpacity="0.5"/>
                    </svg>
                  </div>
                  <div className="hidden md:flex items-center gap-1 shrink-0 pb-10">
                    <div className="h-px w-8 bg-[#c9a55a]/60" />
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                      <path d="M1 6h15M12 1l5 5-5 5" stroke="#b8892a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  <GuruCard name={row[1].name} img={row[1].img} />
                </div>

                {/* Vertical connector down to next row */}
                <div className="flex flex-col items-center my-3">
                  <div className="w-px h-5 bg-[#c9a55a]/40" />
                  <GoldDiamond />
                  <div className="w-px h-5 bg-[#c9a55a]/40" />
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M6 8L1 1h10L6 8z" fill="#c9a55a" fillOpacity="0.5"/>
                  </svg>
                </div>
              </div>
            ))}

            {/* Penultimate guru, centered alone */}
            <GuruCard name={penultimateGuru.name} img={penultimateGuru.img} />

            {/* Connector down to Siddhababa */}
            <div className="flex flex-col items-center my-3">
              <div className="w-px h-5 bg-[#c9a55a]/40" />
              <GoldDiamond />
              <div className="w-px h-5 bg-[#c9a55a]/40" />
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M6 8L1 1h10L6 8z" fill="#c9a55a" fillOpacity="0.5"/>
              </svg>
            </div>

            {/* Last guru, full width, prominent */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-72 h-72 shrink-0">
                <div className="absolute inset-0 rounded-full shadow-[0_0_0_2px_#b8892a,0_0_0_6px_#f2ead8,0_0_0_8px_#c9a55a40]" />
                <img
                  src={`${b}images/siddhababa-portrait.jpg`}
                  alt={lastGuru.name}
                  className="w-full h-full object-cover rounded-full"
                  style={{ objectPosition: "center 18%" }}
                />
              </div>
              <div className="mt-5">
                <p className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#3d3830] leading-snug max-w-sm mx-auto">
                  {lastGuru.name}
                </p>
                <p className="text-base text-[#b8892a] font-semibold uppercase tracking-[0.22em] mt-2">{t("lineage.siddhababaSub")}</p>
                <p className="text-base text-[#a89880] mt-1 italic">{t("lineage.presentAcharya")}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CLOSING QUOTE BANNER ── */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src={`${b}images/lineage-banner-bg.png`}
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="absolute inset-0 bg-[#1a0e06]/82" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0804]/60 via-transparent to-[#0d0804]/40" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-5 mb-8">
            <div className="h-px w-16 bg-[#e8c56a]/50" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" fill="#e8c56a" fillOpacity="0.7"/>
            </svg>
            <div className="h-px w-16 bg-[#e8c56a]/50" />
          </div>

          <p className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light italic text-[#f5ead8] leading-relaxed max-w-2xl mx-auto tracking-wide">
            {t("lineage.closingQuote")}
          </p>

          <div className="flex items-center justify-center gap-5 mt-8">
            <div className="h-px w-16 bg-[#e8c56a]/50" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" fill="#e8c56a" fillOpacity="0.7"/>
            </svg>
            <div className="h-px w-16 bg-[#e8c56a]/50" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
