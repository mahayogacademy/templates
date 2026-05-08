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

export default function ChakraNadi() {
  const [hovered, setHovered] = useState<number | null>(3);
  const active = hovered !== null ? chakras[hovered] : null;

  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#f6f0e8" }}>
      <style>{`
        @keyframes cn-orb-pulse {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50%       { opacity: 1;    transform: scale(1.22); }
        }
        @keyframes cn-spine-dim {
          0%, 100% { opacity: 0.45; }
          50%       { opacity: 0.75; }
        }
        @keyframes cn-reveal {
          from { opacity: 0; transform: translateX(10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .cn-orb-group { cursor: pointer; }
        .cn-orb-circle {
          transition: r 0.25s, stroke-width 0.25s;
          transform-box: fill-box;
          transform-origin: center;
        }
      `}</style>

      {/* Mandala ring ornaments */}
      {[620, 420, 260].map(s => (
        <div key={s} style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: s, height: s, borderRadius: "50%",
          border: "1px solid rgba(184,137,42,0.08)",
          pointerEvents: "none",
        }} />
      ))}

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-[#b8892a]/40" />
            <span className="uppercase tracking-[0.3em] text-xs text-[#b8892a] font-medium">The Inner Cosmos</span>
            <div className="h-px w-10 bg-[#b8892a]/40" />
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#1e1a14] leading-tight mb-3">
            The Sacred Architecture Within
          </h2>
          <p className="text-sm text-[#6e6050] tracking-[0.04em]">
            Seven Energy Centers &nbsp;·&nbsp; 72,000 Energy Channels &nbsp;·&nbsp; One Awakening
          </p>
        </div>

        {/* Main layout — hidden on mobile, shown on md+ */}
        <div className="hidden md:flex items-center gap-8">

          {/* Left — nadi legend */}
          <div style={{ width: 168, flexShrink: 0 }}>
            {[
              { stroke: "2px solid #74b9ff",  name: "Ida Nadi",     sub: "Lunar · Left",      desc: "Cooling, feminine force — governs the mind, emotions, and inner stillness." },
              { stroke: "2px dashed #c8a96e", name: "Sushumna",     sub: "Central · Supreme", desc: "The path of Kundalini's ascent — channel of liberation and divine union." },
              { stroke: "2px solid #fdcb6e",  name: "Pingala Nadi", sub: "Solar · Right",     desc: "Warming, masculine force — governs vitality, action, and transformation." },
            ].map(n => (
              <div key={n.name} className="mb-5 pt-3 border-t border-[#b8892a]/20">
                <div className="flex items-center gap-2 mb-1.5">
                  <div style={{ width: 24, height: 0, border: n.stroke, borderTopWidth: 2, flexShrink: 0 }} />
                  <p className="font-['Cormorant_Garamond'] text-base text-[#1e1a14] leading-none">{n.name}</p>
                </div>
                <p className="text-[9.5px] text-[#b8892a] tracking-[0.18em] uppercase mb-1.5">{n.sub}</p>
                <p className="text-xs text-[#5a5040] leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* Centre — SVG spine */}
          <div style={{ flexShrink: 0, width: 280, display: "flex", justifyContent: "center" }}>
            <svg width={280} height={SVG_H} viewBox={`-30 0 280 ${SVG_H}`} overflow="visible">
              <defs>
                {chakras.map((c, i) => (
                  <radialGradient key={i} id={`cn-grad-${i}`} cx="38%" cy="35%">
                    <stop offset="0%" stopColor={c.glow} />
                    <stop offset="100%" stopColor={c.color} />
                  </radialGradient>
                ))}
              </defs>

              {/* Pingala — solar gold */}
              <path d={pingalaPath} fill="none" stroke="#e8a840" strokeWidth={2} strokeLinecap="round" opacity={0.85} />
              {/* Ida — lunar blue */}
              <path d={idaPath} fill="none" stroke="#74b9ff" strokeWidth={2} strokeLinecap="round" opacity={0.85} />
              {/* Sushumna — dashed central */}
              <line
                x1={CX} y1={CHAKRA_Y[0] + 14}
                x2={CX} y2={CHAKRA_Y[CHAKRA_Y.length - 1] - 14}
                stroke="#c8a96e" strokeWidth={1.5} strokeDasharray="5 5"
                style={{ animation: "cn-spine-dim 3s ease-in-out infinite" }}
              />

              {/* Chakra orbs */}
              {chakras.map((c, i) => {
                const cy = CHAKRA_Y[i];
                const isHov = hovered === i;
                return (
                  <g key={i} className="cn-orb-group"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}>

                    {/* Pulsing glow ring */}
                    <circle
                      cx={CX} cy={cy} r={isHov ? 22 : 17}
                      fill={c.glow}
                      opacity={isHov ? 0.28 : 0.14}
                      style={{
                        transition: "r 0.25s, opacity 0.25s",
                        animation: `cn-orb-pulse ${2.2 + i * 0.15}s ease-in-out infinite`,
                        animationDelay: `${i * 0.3}s`,
                        transformOrigin: `${CX}px ${cy}px`,
                      }}
                    />
                    {/* Main orb */}
                    <circle
                      className="cn-orb-circle"
                      cx={CX} cy={cy} r={isHov ? 13 : 10}
                      fill={`url(#cn-grad-${i})`}
                      stroke={isHov ? c.glow : c.color}
                      strokeWidth={isHov ? 2 : 1.2}
                      style={{
                        animation: `cn-orb-pulse ${2.2 + i * 0.15}s ease-in-out infinite`,
                        animationDelay: `${i * 0.3}s`,
                        filter: isHov ? `drop-shadow(0 0 6px ${c.glow})` : `drop-shadow(0 0 3px ${c.color}80)`,
                      }}
                    />

                    {/* Always-visible name label */}
                    <text x={CX + 22} y={cy - 3} fontSize={12}
                      fill={isHov ? c.color : "#3d3020"}
                      fontFamily="'Cormorant Garamond', serif"
                      fontWeight={isHov ? "400" : "300"}>
                      {c.name}
                    </text>
                    <text x={CX + 22} y={cy + 10} fontSize={9}
                      fill={isHov ? c.color : "#9a8070"}
                      fontFamily="'Inter', sans-serif"
                      letterSpacing="0.12em">
                      {c.english.toUpperCase()}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Right — detail panel */}
          <div style={{ flex: 1, minHeight: 360, paddingLeft: 8 }}>
            {active ? (
              <div key={hovered} style={{ animation: "cn-reveal 0.22s ease" }}>
                <p className="text-[10px] tracking-[0.32em] text-[#b8892a] uppercase mb-3">
                  Chakra {hovered! + 1} of 7
                </p>
                <h3 className="font-['Cormorant_Garamond'] font-light leading-none mb-1"
                  style={{ fontSize: 42, color: active.glow }}>
                  {active.name}
                </h3>
                <p className="font-['Cormorant_Garamond'] italic text-xl text-[#6e6050] mb-2">
                  {active.english} Centre
                </p>
                <p className="font-['Cormorant_Garamond'] text-3xl mb-5" style={{ color: active.color }}>
                  {active.sanskrit}
                </p>
                <div className="h-px w-10 mb-5" style={{ background: `${active.color}80` }} />
                <p className="text-[10px] tracking-[0.28em] text-[#9a8070] uppercase mb-1.5">Element</p>
                <p className="font-['Cormorant_Garamond'] text-xl text-[#1e1a14] mb-5">{active.element}</p>
                <p className="text-[10px] tracking-[0.28em] text-[#9a8070] uppercase mb-1.5">Qualities</p>
                <p className="font-['Cormorant_Garamond'] text-xl text-[#1e1a14] leading-relaxed">{active.quality}</p>
              </div>
            ) : (
              <div>
                <p className="text-[10px] tracking-[0.32em] text-[#b8892a] uppercase mb-5">Explore</p>
                <p className="font-['Cormorant_Garamond'] italic text-2xl text-[#3d3020] leading-relaxed mb-5">
                  Hover over a chakra to discover its element, Sanskrit name, and qualities.
                </p>
                <div className="h-px w-9 bg-[#b8892a]/40 mb-5" />
                <p className="text-sm text-[#6e6050] leading-loose">
                  Each energy centre governs a different dimension of our physical, emotional, and spiritual experience. Through Mahayog, all seven are awakened and illuminated.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile — stacked list */}
        <div className="md:hidden space-y-4">
          {chakras.map((c, i) => (
            <div key={i}
              className="border rounded-xl p-5 cursor-pointer transition-all duration-300"
              style={{
                borderColor: hovered === i ? `${c.color}60` : "rgba(184,137,42,0.2)",
                background: hovered === i ? `${c.glow}08` : "transparent",
              }}
              onClick={() => setHovered(hovered === i ? null : i)}>
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 rounded-full flex-shrink-0"
                  style={{ background: `radial-gradient(circle at 35% 35%, ${c.glow}, ${c.color})`, boxShadow: `0 0 10px ${c.color}60` }} />
                <div>
                  <p className="font-['Cormorant_Garamond'] text-xl text-[#1e1a14]">{c.name}</p>
                  <p className="text-xs text-[#9a8070] tracking-widest uppercase">{c.english}</p>
                </div>
                <p className="ml-auto font-['Cormorant_Garamond'] text-lg" style={{ color: c.color }}>{c.sanskrit}</p>
              </div>
              {hovered === i && (
                <div className="mt-4 pt-4 border-t space-y-2" style={{ borderColor: `${c.color}30` }}>
                  <p className="text-xs text-[#9a8070] uppercase tracking-widest">Element</p>
                  <p className="font-['Cormorant_Garamond'] text-lg text-[#1e1a14]">{c.element}</p>
                  <p className="text-xs text-[#9a8070] uppercase tracking-widest mt-2">Qualities</p>
                  <p className="font-['Cormorant_Garamond'] text-lg text-[#1e1a14]">{c.quality}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom ornament */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#b8892a]/30" />
            <span className="text-[#b8892a] text-xs">✦</span>
            <div className="h-px w-12 bg-[#b8892a]/30" />
          </div>
          <p className="text-xs text-[#5a5040] leading-loose tracking-wide">
            Through Shaktipat initiation, Kundalini rises through the Sushumna,<br className="hidden md:block" />
            purifying all 72,000 nadis and illuminating each energy centre.
          </p>
        </div>
      </div>
    </section>
  );
}
