import Nav from "@/components/Nav";

const b = import.meta.env.BASE_URL;

const GURUS = [
  { name: "Jagadguru Ramanandacharya", img: "lineage-01-ramanandacharya.jpg" },
  { name: "Shree Maniramdas Ji Maharaj", img: "lineage-02-maniramdas.jpg" },
  { name: "Shree Vaishnavdas Ji Maharaj", img: "lineage-03-vaishnavdas.jpg" },
  { name: "Shree Ramcharandas Ji Maharaj", img: "lineage-04-ramcharandas.jpg" },
  { name: "Shree Ramsobhadas Ji Maharaj", img: "lineage-05-ramsobhadas.jpg" },
  { name: "Shree Rammanohar Das Ji Maharaj", img: "lineage-06-rammanohar.jpg" },
  { name: "Shree Nritya Gopal Das Ji Maharaj", img: "lineage-07-nrityagopal.jpg" },
  { name: "Shree Narayandas Ji Maharaj", img: "lineage-08-narayandas.jpg" },
  { name: "Shree Vaishnav Bhagawandas Ji Maharaj", img: "lineage-09-bhagawandas.jpg" },
  {
    name: "Jagadguru Shree Ramanandacharya Swami Ramakrishnacharya Ji Maharaj",
    sub: "Mahayogi Siddhababa",
    img: "lineage-10-siddhababa.jpg",
    current: true,
  },
];

function GoldDiamond() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" fill="#b8892a" fillOpacity="0.6"/>
    </svg>
  );
}

function GuruCard({ guru }: { guru: typeof GURUS[number] }) {
  return (
    <div className="flex flex-col items-center text-center w-48">
      <div className="relative w-44 h-44 shrink-0">
        <div className="absolute inset-0 rounded-full shadow-[0_0_0_2px_#b8892a,0_0_0_6px_#f2ead8,0_0_0_8px_#c9a55a40]" />
        <img
          src={`${b}images/${guru.img}`}
          alt={guru.name}
          className="w-full h-full object-cover object-top rounded-full"
        />
      </div>
      <p className="font-['Cormorant_Garamond'] text-[15px] font-medium text-[#4a4038] leading-snug mt-3 px-1">
        {guru.name}
      </p>
    </div>
  );
}

export default function Lineage() {
  // Pair gurus 1–8 (indices 0–7); guru 9 (Vaishnav Bhagawandas) is centered alone; guru 10 (Siddhababa) is the large closing portrait
  const rows: typeof GURUS[] = [];
  for (let i = 0; i < GURUS.length - 2; i += 2) {
    rows.push(GURUS.slice(i, i + 2) as typeof GURUS);
  }
  const penultimateGuru = GURUS[GURUS.length - 2]; // Vaishnav Bhagawandas
  const lastGuru = GURUS[GURUS.length - 1];        // Siddhababa

  return (
    <div className="bg-[#faf9f6] text-[#3d3830]">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[58vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${b}images/lineage-hero.png`} alt="" aria-hidden className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/60 via-[#1a0f05]/72 to-[#1a0f05]/88" />
        </div>
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#e8c56a]/60" />
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/60" />
          </div>
          <p className="text-[#e8c56a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Guru Paramparā</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight">A Living Himalayan Lineage</h1>
          <p className="text-[#f0e4c8] text-base tracking-widest uppercase font-light mt-4">The Disciplic Succession</p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base text-[#5a5248] leading-relaxed mb-5">
            Himalayan Siddha Mahayog arises from a living lineage of Himalayan Siddha Yogis who refined a precise science of meditation and inner awakening through direct experience.
          </p>
          <p className="text-base text-[#5a5248] leading-relaxed">
            For thousands of years, this knowledge has been transmitted from realized teacher to prepared student, preserving wisdom with clarity, responsibility, and depth of practice. This lineage is currently entrusted to His Holiness Jagadguru Ramanandacharya Swami Ramakrishnacharya Ji Maharaj (Mahayogi Siddhababa), as the present Āchārya.
          </p>
        </div>
      </section>

      {/* ── PARAMPARA CHAIN ── */}
      <section className="pb-24 px-6 bg-[#f2ead8]">
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-10 pt-14">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#b8892a] font-semibold mb-2">The Disciplic Succession</p>
            <h2 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#3d3830]">Guru Paramparā</h2>
            <div className="h-px w-12 bg-[#b8892a]/30 mx-auto mt-4" />
            <p className="text-[11px] text-[#a89880] italic mt-3">Read left → right, top to bottom</p>
          </div>

          {/* Rows */}
          <div className="flex flex-col items-center gap-0">
            {rows.map((row, rowIdx) => (
              <div key={rowIdx} className="flex flex-col items-center w-full">
                {/* Row of 2 gurus with arrow */}
                <div className="flex items-center justify-center gap-4 w-full">
                  <GuruCard guru={row[0]} />

                  {/* Horizontal arrow */}
                  <div className="flex items-center gap-1 shrink-0 pb-10">
                    <div className="h-px w-8 bg-[#c9a55a]/60" />
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                      <path d="M1 6h15M12 1l5 5-5 5" stroke="#b8892a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  <GuruCard guru={row[1]} />
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

            {/* Penultimate guru — Vaishnav Bhagawandas — centered alone */}
            <GuruCard guru={penultimateGuru} />

            {/* Connector down to Siddhababa */}
            <div className="flex flex-col items-center my-3">
              <div className="w-px h-5 bg-[#c9a55a]/40" />
              <GoldDiamond />
              <div className="w-px h-5 bg-[#c9a55a]/40" />
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M6 8L1 1h10L6 8z" fill="#c9a55a" fillOpacity="0.5"/>
              </svg>
            </div>

            {/* Last guru — full width, prominent */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-64 h-64 shrink-0">
                <div className="absolute inset-0 rounded-full shadow-[0_0_0_2px_#b8892a,0_0_0_6px_#f2ead8,0_0_0_8px_#c9a55a40]" />
                <img
                  src={`${b}images/siddhababa-portrait.jpg`}
                  alt={lastGuru.name}
                  className="w-full h-full object-cover rounded-full"
                  style={{ objectPosition: "center 18%" }}
                />
              </div>
              <div className="mt-5">
                <p className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] leading-snug max-w-sm mx-auto">
                  {lastGuru.name}
                </p>
                <p className="text-[11px] text-[#b8892a] font-semibold uppercase tracking-[0.22em] mt-2">{lastGuru.sub}</p>
                <p className="text-xs text-[#a89880] mt-1 italic">Present Āchārya</p>
              </div>
            </div>
          </div>

          {/* Closing quote */}
          <div className="mt-16 text-center border-t border-[#d4c4a8]/60 pt-10">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#b8892a]/30" />
              <GoldDiamond />
              <div className="h-px w-8 bg-[#b8892a]/30" />
            </div>
            <p className="text-[#7a7068] font-['Cormorant_Garamond'] text-xl italic leading-relaxed max-w-sm mx-auto">
              "The Guru is not a person. The Guru is the grace that flows through an unbroken chain of awakening."
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
