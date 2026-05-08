import { useState } from "react";

const CHAKRA_Y = [460, 390, 320, 250, 180, 110, 40];
const CX = 100;
const SVG_H = 560; // extra room for snake below root

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

// Kundalini: Archimedean spiral, 3 coils, starting from top (toward Muladhara)
function kundaliniSpiralPath(cx: number, cy: number): string {
  const steps = 240;
  const coils = 3;
  const totalAngle = coils * 2 * Math.PI;
  const innerR = 3.5;
  const outerR = 27;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * totalAngle;
    const angle = -Math.PI / 2 + t; // start pointing up
    const r = innerR + (outerR - innerR) * (t / totalAngle);
    const x = (cx + r * Math.cos(angle)).toFixed(2);
    const y = (cy + r * Math.sin(angle)).toFixed(2);
    d += i === 0 ? `M ${x},${y}` : ` L ${x},${y}`;
  }
  return d;
}

const idaPath      = serpentinePath(true);
const pingalaPath  = serpentinePath(false);
// Snake center: 45px below Muladhara
const SNAKE_CY     = CHAKRA_Y[0] + 48;
const snakePath    = kundaliniSpiralPath(CX, SNAKE_CY);

export default function ChakraNadi() {
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered !== null ? chakras[hovered] : null;

  return (
    <section id="inner-cosmos" className="py-24 px-6 relative overflow-hidden" style={{ background: "#f6f0e8" }}>
      <style>{`
        @keyframes cn-orb-glow {
          0%, 100% { opacity: 0.65; }
          50%       { opacity: 1;   }
        }
        @keyframes cn-spine-dim {
          0%, 100% { opacity: 0.45; }
          50%       { opacity: 0.75; }
        }
        @keyframes cn-card-in {
          from { opacity: 0; transform: translateX(-12px) scale(0.97); }
          to   { opacity: 1; transform: translateX(0)     scale(1); }
        }
        @keyframes cn-snake-shimmer {
          0%, 100% { opacity: 0.55; }
          50%       { opacity: 0.85; }
        }
      `}</style>

      {/* Mandala ring ornaments */}
      {[620, 420, 260].map(s => (
        <div key={s} style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: s, height: s, borderRadius: "50%",
          border: "1px solid rgba(184,137,42,0.08)", pointerEvents: "none",
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

        {/* ── Desktop: LEFT card | CENTRE spine | RIGHT legend ── */}
        <div className="hidden md:flex items-center gap-6">

          {/* LEFT — chakra card on hover */}
          <div className="flex-1 min-h-[420px] flex items-center">
            {active ? (
              <div
                key={hovered}
                className="w-full rounded-2xl p-6"
                style={{
                  animation: "cn-card-in 0.22s ease",
                  background: `${active.glow}0d`,
                  border: `1px solid ${active.color}40`,
                  boxShadow: `0 4px 28px ${active.color}18`,
                }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5"
                      style={{
                        background: `radial-gradient(circle at 35% 35%, ${active.glow}, ${active.color})`,
                        boxShadow: `0 0 12px ${active.color}80`,
                      }} />
                    <div>
                      <p className="font-['Cormorant_Garamond'] text-2xl text-[#2e2820] leading-tight">{active.name}</p>
                      <p className="uppercase tracking-[0.2em] text-[10px] text-[#9a8070] font-medium">{active.english}</p>
                    </div>
                  </div>
                  <p className="font-['Cormorant_Garamond'] text-2xl leading-tight" style={{ color: active.color }}>
                    {active.sanskrit}
                  </p>
                </div>
                <div className="h-px mb-5" style={{ background: `${active.color}25` }} />
                <p className="uppercase tracking-[0.22em] text-[10px] text-[#9a8070] font-medium mb-1">Element</p>
                <p className="font-['Cormorant_Garamond'] text-2xl text-[#2e2820] mb-5 leading-tight">{active.element}</p>
                <p className="uppercase tracking-[0.22em] text-[10px] text-[#9a8070] font-medium mb-1">Qualities</p>
                <p className="font-['Cormorant_Garamond'] text-2xl text-[#2e2820] leading-snug">{active.quality}</p>
              </div>
            ) : (
              <div className="w-full">
                <p className="uppercase tracking-[0.3em] text-xs text-[#b8892a] font-medium mb-5">Explore</p>
                <p className="font-['Cormorant_Garamond'] italic text-3xl text-[#3d3020] leading-relaxed mb-5">
                  Hover over a chakra orb to reveal its sacred details.
                </p>
                <div className="h-px w-9 bg-[#b8892a]/40 mb-5" />
                <p className="text-base text-[#5a5248] leading-loose">
                  Each energy centre governs a different dimension of our physical, emotional, and spiritual experience. Through Mahayog, all seven are awakened and illuminated.
                </p>
              </div>
            )}
          </div>

          {/* CENTRE — SVG spine */}
          <div style={{ flexShrink: 0, width: 280, display: "flex", justifyContent: "center" }}>
            <svg width={280} height={SVG_H} viewBox={`-30 0 300 ${SVG_H}`} overflow="visible">
              <defs>
                {chakras.map((c, i) => (
                  <radialGradient key={i} id={`cn-grad-${i}`} cx="38%" cy="35%">
                    <stop offset="0%" stopColor={c.glow} />
                    <stop offset="100%" stopColor={c.color} />
                  </radialGradient>
                ))}
                <linearGradient id="cn-snake-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#b8892a" />
                  <stop offset="50%"  stopColor="#c8a96e" />
                  <stop offset="100%" stopColor="#8a6020" />
                </linearGradient>
              </defs>

              {/* Nadi paths */}
              <path d={pingalaPath} fill="none" stroke="#e8a840" strokeWidth={2} strokeLinecap="round" opacity={0.85} />
              <path d={idaPath}     fill="none" stroke="#74b9ff" strokeWidth={2} strokeLinecap="round" opacity={0.85} />
              <line
                x1={CX} y1={CHAKRA_Y[0] + 14} x2={CX} y2={CHAKRA_Y[CHAKRA_Y.length - 1] - 14}
                stroke="#c8a96e" strokeWidth={1.5} strokeDasharray="5 5"
                style={{ animation: "cn-spine-dim 3s ease-in-out infinite" }}
              />

              {/* ── Kundalini snake — 3-coil spiral at base ── */}
              {/* Body spiral */}
              <path
                d={snakePath}
                fill="none"
                stroke="url(#cn-snake-grad)"
                strokeWidth={2.2}
                strokeLinecap="round"
                style={{ animation: "cn-snake-shimmer 4s ease-in-out infinite" }}
              />
              {/* Head — small pointed oval, sitting at center-top of the coil, facing Muladhara */}
              <ellipse
                cx={CX} cy={SNAKE_CY - 6.5}
                rx={3.5} ry={5.5}
                fill="#b8892a"
                style={{ animation: "cn-snake-shimmer 4s ease-in-out infinite" }}
              />
              {/* Eyes */}
              <circle cx={CX - 1.8} cy={SNAKE_CY - 8.5} r={0.9} fill="#3a2010" />
              <circle cx={CX + 1.8} cy={SNAKE_CY - 8.5} r={0.9} fill="#3a2010" />
              {/* Forked tongue */}
              <line x1={CX}     y1={SNAKE_CY - 12} x2={CX - 2.5} y2={SNAKE_CY - 15} stroke="#c0392b" strokeWidth={0.8} strokeLinecap="round" />
              <line x1={CX}     y1={SNAKE_CY - 12} x2={CX + 2.5} y2={SNAKE_CY - 15} stroke="#c0392b" strokeWidth={0.8} strokeLinecap="round" />
              <line x1={CX - 1} y1={SNAKE_CY - 11} x2={CX}       y2={SNAKE_CY - 12} stroke="#c0392b" strokeWidth={0.8} strokeLinecap="round" />

              {/* Chakra orbs */}
              {chakras.map((c, i) => {
                const cy = CHAKRA_Y[i];
                const isHov = hovered === i;
                return (
                  <g key={i} style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}>

                    {/* Static soft halo — no animation, no scaling */}
                    <circle
                      cx={CX} cy={cy}
                      r={isHov ? 19 : 15}
                      fill={c.glow}
                      opacity={isHov ? 0.25 : 0.12}
                      style={{ transition: "r 0.25s, opacity 0.25s" }}
                    />

                    {/* Orb — gentle opacity glow only, no scaling */}
                    <circle
                      cx={CX} cy={cy}
                      r={isHov ? 13 : 10}
                      fill={`url(#cn-grad-${i})`}
                      stroke={isHov ? c.glow : c.color}
                      strokeWidth={isHov ? 2 : 1.2}
                      style={{
                        transition: "r 0.25s, stroke-width 0.25s, filter 0.25s",
                        animation: `cn-orb-glow ${2.5 + i * 0.2}s ease-in-out infinite`,
                        animationDelay: `${i * 0.35}s`,
                        filter: isHov
                          ? `drop-shadow(0 0 8px ${c.glow})`
                          : `drop-shadow(0 0 3px ${c.color}70)`,
                      }}
                    />

                    {/* Labels */}
                    <text x={CX + 34} y={cy - 3} fontSize={13}
                      fill={isHov ? c.color : "#2e2820"}
                      fontFamily="'Cormorant Garamond', serif"
                      fontWeight={isHov ? "400" : "300"}>
                      {c.name}
                    </text>
                    <text x={CX + 34} y={cy + 11} fontSize={9}
                      fill={isHov ? c.color : "#9a8070"}
                      fontFamily="'Inter', sans-serif" letterSpacing="0.14em">
                      {c.english.toUpperCase()}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* RIGHT — nadi legend */}
          <div style={{ width: 200, flexShrink: 0 }}>
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

        {/* ── Mobile — accordion cards ── */}
        <div className="md:hidden space-y-3">
          {chakras.map((c, i) => (
            <div key={i}
              className="border rounded-2xl p-5 cursor-pointer transition-all duration-300"
              style={{
                borderColor: hovered === i ? `${c.color}50` : "rgba(184,137,42,0.2)",
                background: hovered === i ? `${c.glow}0d` : "rgba(255,252,246,0.7)",
                boxShadow: hovered === i ? `0 4px 20px ${c.color}18` : "none",
              }}
              onClick={() => setHovered(hovered === i ? null : i)}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0"
                    style={{
                      background: `radial-gradient(circle at 35% 35%, ${c.glow}, ${c.color})`,
                      boxShadow: `0 0 8px ${c.color}50`,
                    }} />
                  <div>
                    <p className="font-['Cormorant_Garamond'] text-xl text-[#2e2820] leading-tight">{c.name}</p>
                    <p className="uppercase tracking-[0.18em] text-[10px] text-[#9a8070] font-medium">{c.english}</p>
                  </div>
                </div>
                <p className="font-['Cormorant_Garamond'] text-xl leading-tight" style={{ color: c.color }}>{c.sanskrit}</p>
              </div>
              {hovered === i && (
                <div className="mt-4 pt-4 space-y-3" style={{ borderTop: `1px solid ${c.color}25` }}>
                  <div>
                    <p className="uppercase tracking-[0.22em] text-[10px] text-[#9a8070] font-medium mb-1">Element</p>
                    <p className="font-['Cormorant_Garamond'] text-xl text-[#2e2820]">{c.element}</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-[0.22em] text-[10px] text-[#9a8070] font-medium mb-1">Qualities</p>
                    <p className="font-['Cormorant_Garamond'] text-xl text-[#2e2820]">{c.quality}</p>
                  </div>
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
          <p className="text-sm text-[#5a5248] leading-loose tracking-wide">
            Through Shaktipat initiation, Kundalini rises through the Sushumna,<br className="hidden md:block" />
            purifying all 72,000 nadis and illuminating each energy centre.
          </p>
        </div>

      </div>
    </section>
  );
}
