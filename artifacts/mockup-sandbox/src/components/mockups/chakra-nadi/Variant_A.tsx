import { useState } from "react";

const CHAKRA_Y = [460, 390, 320, 250, 180, 110, 40];
const CX = 100;
const SVG_W = 220;
const SVG_H = 500;

const chakras = [
  { name: "Muladhara",    english: "Root",          sanskrit: "मूलाधार",      color: "#c0392b", glow: "#e74c3c", element: "Earth (Prithvi)",     quality: "Stability · Grounding · Survival" },
  { name: "Svadhisthana", english: "Sacral",         sanskrit: "स्वाधिष्ठान", color: "#c75000", glow: "#e67e22", element: "Water (Jala)",        quality: "Creativity · Flow · Vitality" },
  { name: "Manipura",     english: "Solar Plexus",   sanskrit: "मणिपूर",       color: "#b8920a", glow: "#d4a800", element: "Fire (Agni)",         quality: "Will · Transformation · Power" },
  { name: "Anahata",      english: "Heart",          sanskrit: "अनाहत",        color: "#1a7a4a", glow: "#27ae60", element: "Air (Vayu)",          quality: "Love · Compassion · Healing" },
  { name: "Vishuddha",    english: "Throat",         sanskrit: "विशुद्ध",      color: "#1560a0", glow: "#2980b9", element: "Space (Akasha)",      quality: "Expression · Truth · Purification" },
  { name: "Ajna",         english: "Third Eye",      sanskrit: "आज्ञा",        color: "#5432a0", glow: "#6c5ce7", element: "Light",               quality: "Intuition · Wisdom · Inner Vision" },
  { name: "Sahasrara",    english: "Crown",          sanskrit: "सहस्रार",      color: "#7d2a9b", glow: "#9b59b6", element: "Pure Consciousness",  quality: "Liberation · Unity · Transcendence" },
];

function serpentinePath(startLeft: boolean): string {
  const pts = CHAKRA_Y;
  let d = `M ${CX},${pts[0]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const y1 = pts[i], y2 = pts[i + 1], my = (y1 + y2) / 2;
    const bulge = (i % 2 === 0) === startLeft ? 46 : -46;
    d += ` C ${CX + bulge},${my} ${CX + bulge},${my} ${CX},${y2}`;
  }
  return d;
}

const idaPath = serpentinePath(true);
const pingalaPath = serpentinePath(false);

export default function Variant_A() {
  const [hovered, setHovered] = useState<number | null>(3);
  const active = hovered !== null ? chakras[hovered] : null;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: "#f6f0e8" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400&display=swap');

        @keyframes orb-pulse {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50%       { opacity: 1;    transform: scale(1.22); }
        }
        @keyframes glow-ring {
          0%, 100% { opacity: 0.15; r: 16px; }
          50%       { opacity: 0.35; r: 22px; }
        }
        @keyframes spine-dim {
          0%, 100% { opacity: 0.45; }
          50%       { opacity: 0.75; }
        }
        @keyframes reveal-panel {
          from { opacity: 0; transform: translateX(10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .orb-group { cursor: pointer; }
        .orb-circle { transition: transform 0.2s ease; transform-origin: center; transform-box: fill-box; }
        .orb-group:hover .orb-circle { transform: scale(1.3); }
      `}</style>

      {/* Faint mandala rings */}
      {[620, 420, 260].map(s => (
        <div key={s} style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: s, height: s, borderRadius: "50%",
          border: "1px solid rgba(184,137,42,0.08)", pointerEvents: "none",
        }} />
      ))}

      {/* ── Heading ── */}
      <div className="text-center mb-8 relative z-10">
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, letterSpacing: "0.38em", color: "#b8892a", textTransform: "uppercase", marginBottom: 10 }}>
          THE INNER COSMOS
        </p>
        <h2 style={{ fontSize: 40, fontWeight: 300, color: "#1e1a14", lineHeight: 1.15, marginBottom: 6 }}>
          The Sacred Architecture Within
        </h2>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "#6e6050", letterSpacing: "0.04em" }}>
          Seven Energy Centers &nbsp;·&nbsp; 72,000 Energy Channels &nbsp;·&nbsp; One Awakening
        </p>
      </div>

      {/* ── Main row ── */}
      <div className="relative z-10 flex items-center" style={{ width: 900, gap: 24 }}>

        {/* Left — nadi legend */}
        <div style={{ width: 168, flexShrink: 0 }}>
          {[
            { color: "#74b9ff", stroke: "2px solid #74b9ff", name: "Ida Nadi",      sub: "Lunar · Left",    desc: "Cooling, feminine force — governs the mind, emotions, and inner stillness." },
            { color: "#c8a96e", stroke: "2px dashed #c8a96e", name: "Sushumna",     sub: "Central · Supreme", desc: "The path of Kundalini's ascent — channel of liberation and divine union." },
            { color: "#fdcb6e", stroke: "2px solid #fdcb6e", name: "Pingala Nadi",  sub: "Solar · Right",   desc: "Warming, masculine force — governs vitality, action, and transformation." },
          ].map(n => (
            <div key={n.name} style={{ marginBottom: 20, borderTop: "1px solid rgba(184,137,42,0.2)", paddingTop: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                <div style={{ width: 24, height: 0, border: n.stroke, borderTopWidth: 2, flexShrink: 0 }} />
                <p style={{ fontSize: 15, color: "#1e1a14", margin: 0, lineHeight: 1 }}>{n.name}</p>
              </div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 9.5, color: "#b8892a", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 5 }}>{n.sub}</p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "#5a5040", lineHeight: 1.75 }}>{n.desc}</p>
            </div>
          ))}
        </div>

        {/* Centre — SVG spine */}
        <div style={{ flexShrink: 0, width: SVG_W + 60, display: "flex", justifyContent: "center" }}>
          <svg width={SVG_W + 60} height={SVG_H} viewBox={`-30 0 ${SVG_W + 60} ${SVG_H}`} overflow="visible">
            <defs>
              {chakras.map((c, i) => (
                <radialGradient key={i} id={`orb-grad-${i}`} cx="38%" cy="35%">
                  <stop offset="0%" stopColor={c.glow} />
                  <stop offset="100%" stopColor={c.color} />
                </radialGradient>
              ))}
            </defs>

            {/* Pingala */}
            <path d={pingalaPath} fill="none" stroke="#e8a840" strokeWidth={2} strokeLinecap="round" opacity={0.85} />
            {/* Ida */}
            <path d={idaPath} fill="none" stroke="#74b9ff" strokeWidth={2} strokeLinecap="round" opacity={0.85} />
            {/* Sushumna */}
            <line
              x1={CX} y1={CHAKRA_Y[0] + 14}
              x2={CX} y2={CHAKRA_Y[CHAKRA_Y.length - 1] - 14}
              stroke="#c8a96e" strokeWidth={1.5} strokeDasharray="5 5"
              style={{ animation: "spine-dim 3s ease-in-out infinite" }}
            />

            {/* Chakra orbs with labels */}
            {chakras.map((c, i) => {
              const cy = CHAKRA_Y[i];
              const isHov = hovered === i;
              const pulseDelay = `${i * 0.3}s`;
              return (
                <g key={i} className="orb-group"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}>

                  {/* Pulsing glow ring */}
                  <circle
                    cx={CX} cy={cy} r={isHov ? 22 : 17}
                    fill={c.glow} opacity={isHov ? 0.28 : 0.14}
                    style={{
                      transition: "r 0.25s, opacity 0.25s",
                      animation: `orb-pulse ${2.2 + i * 0.15}s ease-in-out infinite`,
                      animationDelay: pulseDelay,
                      transformOrigin: `${CX}px ${cy}px`,
                    }}
                  />
                  {/* Main orb */}
                  <circle
                    className="orb-circle"
                    cx={CX} cy={cy} r={isHov ? 13 : 10}
                    fill={`url(#orb-grad-${i})`}
                    stroke={isHov ? c.glow : c.color}
                    strokeWidth={isHov ? 2 : 1.2}
                    style={{
                      transition: "r 0.25s, stroke-width 0.25s",
                      animation: `orb-pulse ${2.2 + i * 0.15}s ease-in-out infinite`,
                      animationDelay: pulseDelay,
                      filter: isHov ? `drop-shadow(0 0 6px ${c.glow})` : `drop-shadow(0 0 3px ${c.color}80)`,
                    }}
                  />

                  {/* Always-visible name label */}
                  <text
                    x={CX + 22} y={cy - 3}
                    fontSize={12}
                    fill={isHov ? c.color : "#3d3020"}
                    fontFamily="'Cormorant Garamond', serif"
                    fontWeight={isHov ? "400" : "300"}
                    style={{ transition: "fill 0.2s" }}
                  >
                    {c.name}
                  </text>
                  <text
                    x={CX + 22} y={cy + 10}
                    fontSize={9}
                    fill={isHov ? c.color : "#9a8070"}
                    fontFamily="'Inter', sans-serif"
                    letterSpacing="0.12em"
                    style={{ textTransform: "uppercase", transition: "fill 0.2s" }}
                  >
                    {c.english.toUpperCase()}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Right — detail panel */}
        <div style={{ flex: 1, minHeight: 380, paddingLeft: 8 }}>
          {active ? (
            <div key={hovered} style={{ animation: "reveal-panel 0.22s ease" }}>
              {/* Eyebrow */}
              <p style={{
                fontFamily: "'Inter',sans-serif", fontSize: 10,
                letterSpacing: "0.32em", color: "#b8892a",
                textTransform: "uppercase", marginBottom: 14,
              }}>
                Chakra {hovered! + 1} of 7
              </p>

              {/* Name */}
              <h3 style={{ fontSize: 42, fontWeight: 300, color: active.glow, lineHeight: 1, marginBottom: 4 }}>
                {active.name}
              </h3>

              {/* English subtitle */}
              <p style={{ fontSize: 20, fontStyle: "italic", color: "#6e6050", marginBottom: 10 }}>
                {active.english} Centre
              </p>

              {/* Sanskrit */}
              <p style={{ fontSize: 28, color: active.color, marginBottom: 20, letterSpacing: "0.03em" }}>
                {active.sanskrit}
              </p>

              {/* Divider */}
              <div style={{ width: 40, height: 1, background: `${active.color}80`, marginBottom: 20 }} />

              {/* Element */}
              <p style={{
                fontFamily: "'Inter',sans-serif", fontSize: 10,
                letterSpacing: "0.28em", color: "#9a8070",
                textTransform: "uppercase", marginBottom: 6,
              }}>
                Element
              </p>
              <p style={{ fontSize: 20, color: "#1e1a14", marginBottom: 20, lineHeight: 1 }}>
                {active.element}
              </p>

              {/* Qualities */}
              <p style={{
                fontFamily: "'Inter',sans-serif", fontSize: 10,
                letterSpacing: "0.28em", color: "#9a8070",
                textTransform: "uppercase", marginBottom: 6,
              }}>
                Qualities
              </p>
              <p style={{ fontSize: 20, color: "#1e1a14", lineHeight: 1.6 }}>
                {active.quality}
              </p>
            </div>
          ) : (
            <div>
              <p style={{
                fontFamily: "'Inter',sans-serif", fontSize: 10,
                letterSpacing: "0.32em", color: "#b8892a",
                textTransform: "uppercase", marginBottom: 20,
              }}>
                Explore
              </p>
              <p style={{ fontSize: 22, fontStyle: "italic", color: "#3d3020", lineHeight: 1.8, marginBottom: 20 }}>
                Hover over a chakra to discover its element, Sanskrit name, and qualities.
              </p>
              <div style={{ width: 36, height: 1, background: "rgba(184,137,42,0.4)", marginBottom: 20 }} />
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#6e6050", lineHeight: 2 }}>
                Each energy centre governs a different dimension of our physical, emotional, and spiritual experience. Through Mahayog, all seven are awakened and illuminated.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center mt-10 relative z-10">
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10, justifyContent: "center" }}>
          <div style={{ width: 50, height: 1, background: "rgba(184,137,42,0.3)" }} />
          <span style={{ color: "#b8892a", fontSize: 11 }}>✦</span>
          <div style={{ width: 50, height: 1, background: "rgba(184,137,42,0.3)" }} />
        </div>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#5a5040", lineHeight: 2, letterSpacing: "0.03em" }}>
          Through Shaktipat initiation, Kundalini rises through the Sushumna,<br />
          purifying all 72,000 nadis and illuminating each energy centre.
        </p>
      </div>
    </div>
  );
}
