import { useState } from "react";

const CHAKRA_Y = [460, 390, 320, 250, 180, 110, 40];
const CX = 100;
const SVG_H = 500;

const chakras = [
  { name: "Muladhara",    english: "Root",         sanskrit: "मूलाधार",      color: "#c0392b", glow: "#e74c3c", element: "Earth (Prithvi)",    quality: "Stability · Grounding · Survival" },
  { name: "Svadhisthana", english: "Sacral",        sanskrit: "स्वाधिष्ठान", color: "#c75000", glow: "#e67e22", element: "Water (Jala)",       quality: "Creativity · Flow · Vitality" },
  { name: "Manipura",     english: "Solar Plexus",  sanskrit: "मणिपूर",       color: "#b8920a", glow: "#d4a800", element: "Fire (Agni)",        quality: "Will · Transformation · Power" },
  { name: "Anahata",      english: "Heart",         sanskrit: "अनाहत",        color: "#1a7a4a", glow: "#27ae60", element: "Air (Vayu)",         quality: "Love · Compassion · Healing" },
  { name: "Vishuddha",    english: "Throat",        sanskrit: "विशुद्ध",      color: "#1560a0", glow: "#2980b9", element: "Space (Akasha)",     quality: "Expression · Truth · Purification" },
  { name: "Ajna",         english: "Third Eye",     sanskrit: "आज्ञा",        color: "#5432a0", glow: "#6c5ce7", element: "Light",              quality: "Intuition · Wisdom · Inner Vision" },
  { name: "Sahasrara",    english: "Crown",         sanskrit: "सहस्रार",      color: "#7d2a9b", glow: "#9b59b6", element: "Pure Consciousness", quality: "Liberation · Unity · Transcendence" },
];

function serpentinePath(startLeft: boolean): string {
  let d = `M ${CX},${CHAKRA_Y[0]}`;
  for (let i = 0; i < CHAKRA_Y.length - 1; i++) {
    const y1 = CHAKRA_Y[i], y2 = CHAKRA_Y[i + 1], my = (y1 + y2) / 2;
    const bulge = (i % 2 === 0) === startLeft ? 46 : -46;
    d += ` C ${CX + bulge},${my} ${CX + bulge},${my} ${CX},${y2}`;
  }
  return d;
}

const idaPath = serpentinePath(true);
const pingalaPath = serpentinePath(false);

function ChakraCard({ c, i }: { c: typeof chakras[0]; i: number }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="rounded-2xl p-5 transition-all duration-300 cursor-default"
      style={{
        background: hov ? `${c.glow}0d` : "rgba(255,252,246,0.7)",
        border: `1px solid ${hov ? c.color + "50" : "rgba(184,137,42,0.2)"}`,
        boxShadow: hov ? `0 4px 24px ${c.color}18` : "none",
        transform: hov ? "translateY(-2px)" : "none",
      }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5"
            style={{
              background: `radial-gradient(circle at 35% 35%, ${c.glow}, ${c.color})`,
              boxShadow: hov ? `0 0 10px ${c.color}80` : `0 0 6px ${c.color}40`,
              animation: `cn-orb-pulse ${2.2 + i * 0.15}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
          <div>
            <p className="font-['Cormorant_Garamond'] text-xl text-[#2e2820] leading-tight">{c.name}</p>
            <p className="uppercase tracking-[0.18em] text-[10px] text-[#9a8070] font-medium">{c.english}</p>
          </div>
        </div>
        <p
          className="font-['Cormorant_Garamond'] text-xl leading-tight"
          style={{ color: c.color }}
        >
          {c.sanskrit}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px mb-4" style={{ background: "rgba(184,137,42,0.15)" }} />

      {/* Element */}
      <p className="uppercase tracking-[0.22em] text-[10px] text-[#9a8070] font-medium mb-1">Element</p>
      <p className="font-['Cormorant_Garamond'] text-lg text-[#2e2820] mb-3 leading-tight">{c.element}</p>

      {/* Qualities */}
      <p className="uppercase tracking-[0.22em] text-[10px] text-[#9a8070] font-medium mb-1">Qualities</p>
      <p className="font-['Cormorant_Garamond'] text-lg text-[#2e2820] leading-snug">{c.quality}</p>
    </div>
  );
}

export default function ChakraNadi() {
  return (
    <section id="inner-cosmos" className="py-24 px-6 relative overflow-hidden" style={{ background: "#f6f0e8" }}>
      <style>{`
        @keyframes cn-orb-pulse {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50%       { opacity: 1;    transform: scale(1.22); }
        }
        @keyframes cn-spine-dim {
          0%, 100% { opacity: 0.45; }
          50%       { opacity: 0.75; }
        }
      `}</style>

      {/* Mandala ring ornaments */}
      {[700, 500, 320].map(s => (
        <div key={s} style={{
          position: "absolute", top: "30%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: s, height: s, borderRadius: "50%",
          border: "1px solid rgba(184,137,42,0.07)", pointerEvents: "none",
        }} />
      ))}

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ── Heading ── */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-[#b8892a]/40" />
            <span className="uppercase tracking-[0.3em] text-xs text-[#b8892a] font-medium">The Inner Cosmos</span>
            <div className="h-px w-10 bg-[#b8892a]/40" />
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#2e2820] leading-tight mb-3">
            The Sacred Architecture Within
          </h2>
          <p className="text-sm text-[#6a6058] tracking-[0.04em]">
            Seven Energy Centers &nbsp;·&nbsp; 72,000 Energy Channels &nbsp;·&nbsp; One Awakening
          </p>
        </div>

        {/* ── SVG spine + nadi legend ── */}
        <div className="flex items-center justify-center gap-10 mb-14">

          {/* SVG spine */}
          <div style={{ flexShrink: 0, width: 280, display: "flex", justifyContent: "center" }}>
            <svg width={280} height={SVG_H} viewBox={`-30 0 300 ${SVG_H}`} overflow="visible">
              <defs>
                {chakras.map((c, i) => (
                  <radialGradient key={i} id={`cn-grad-${i}`} cx="38%" cy="35%">
                    <stop offset="0%" stopColor={c.glow} />
                    <stop offset="100%" stopColor={c.color} />
                  </radialGradient>
                ))}
              </defs>

              <path d={pingalaPath} fill="none" stroke="#e8a840" strokeWidth={2} strokeLinecap="round" opacity={0.85} />
              <path d={idaPath}     fill="none" stroke="#74b9ff" strokeWidth={2} strokeLinecap="round" opacity={0.85} />
              <line
                x1={CX} y1={CHAKRA_Y[0] + 14} x2={CX} y2={CHAKRA_Y[CHAKRA_Y.length - 1] - 14}
                stroke="#c8a96e" strokeWidth={1.5} strokeDasharray="5 5"
                style={{ animation: "cn-spine-dim 3s ease-in-out infinite" }}
              />

              {chakras.map((c, i) => {
                const cy = CHAKRA_Y[i];
                return (
                  <g key={i}>
                    {/* Glow ring */}
                    <circle cx={CX} cy={cy} r={17} fill={c.glow} opacity={0.15}
                      style={{
                        animation: `cn-orb-pulse ${2.2 + i * 0.15}s ease-in-out infinite`,
                        animationDelay: `${i * 0.3}s`,
                        transformOrigin: `${CX}px ${cy}px`,
                      }}
                    />
                    {/* Orb */}
                    <circle cx={CX} cy={cy} r={10}
                      fill={`url(#cn-grad-${i})`}
                      stroke={c.color} strokeWidth={1.2}
                      style={{
                        animation: `cn-orb-pulse ${2.2 + i * 0.15}s ease-in-out infinite`,
                        animationDelay: `${i * 0.3}s`,
                        filter: `drop-shadow(0 0 3px ${c.color}80)`,
                      }}
                    />
                    <text x={CX + 34} y={cy - 3} fontSize={13}
                      fill="#2e2820" fontFamily="'Cormorant Garamond', serif" fontWeight="300">
                      {c.name}
                    </text>
                    <text x={CX + 34} y={cy + 11} fontSize={9}
                      fill="#9a8070" fontFamily="'Inter', sans-serif" letterSpacing="0.14em">
                      {c.english.toUpperCase()}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Nadi legend */}
          <div style={{ width: 220, flexShrink: 0 }}>
            {[
              { stroke: "2px solid #74b9ff",  name: "Ida Nadi",     sub: "Lunar · Left",      desc: "Cooling, feminine force — governs the mind, emotions, and inner stillness." },
              { stroke: "2px dashed #c8a96e", name: "Sushumna",     sub: "Central · Supreme", desc: "The path of Kundalini's ascent — channel of liberation and divine union." },
              { stroke: "2px solid #fdcb6e",  name: "Pingala Nadi", sub: "Solar · Right",     desc: "Warming, masculine force — governs vitality, action, and transformation." },
            ].map(n => (
              <div key={n.name} className="mb-6 pt-4 border-t border-[#b8892a]/20">
                <div className="flex items-center gap-2 mb-1.5">
                  <div style={{ width: 24, height: 0, border: n.stroke, borderTopWidth: 2, flexShrink: 0 }} />
                  <p className="font-['Cormorant_Garamond'] text-lg text-[#2e2820] leading-none">{n.name}</p>
                </div>
                <p className="uppercase tracking-[0.18em] text-[10px] text-[#b8892a] font-medium mb-1.5">{n.sub}</p>
                <p className="text-sm text-[#5a5248] leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Chakra cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {/* Row 1: 4 cards */}
          {chakras.slice(0, 4).map((c, i) => (
            <ChakraCard key={i} c={c} i={i} />
          ))}
          {/* Row 2: 3 cards centred */}
          <div className="sm:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {chakras.slice(4).map((c, i) => (
              <ChakraCard key={i + 4} c={c} i={i + 4} />
            ))}
          </div>
        </div>

        {/* Bottom ornament */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#b8892a]/30" />
            <span className="text-[#b8892a] text-xs">✦</span>
            <div className="h-px w-12 bg-[#b8892a]/30" />
          </div>
          <p className="text-sm text-[#5a5248] leading-loose tracking-wide">
            Through Shaktipat initiation, Kundalini rises through the Sushumna,<br className="hidden md:block" />
            purifying all 72,000 nadis and illuminating each energy centre.
          </p>
        </div>

      </div>
    </section>
  );
}
