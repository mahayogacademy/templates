import { useState } from "react";

const CHAKRA_Y = [460, 390, 320, 250, 180, 110, 40];

const chakras = [
  { name: "Muladhara",   english: "Root",         sanskrit: "मूलाधार",       color: "#c0392b", glow: "#e74c3c", element: "Earth (Prithvi)", quality: "Stability · Grounding · Survival" },
  { name: "Svadhisthana",english: "Sacral",        sanskrit: "स्वाधिष्ठान",  color: "#d35400", glow: "#e67e22", element: "Water (Jala)",   quality: "Creativity · Flow · Vitality" },
  { name: "Manipura",    english: "Solar Plexus",  sanskrit: "मणिपूर",        color: "#c8a200", glow: "#f1c40f", element: "Fire (Agni)",    quality: "Will · Transformation · Power" },
  { name: "Anahata",     english: "Heart",         sanskrit: "अनाहत",          color: "#1a8a5a", glow: "#27ae60", element: "Air (Vayu)",     quality: "Love · Compassion · Healing" },
  { name: "Vishuddha",   english: "Throat",        sanskrit: "विशुद्ध",        color: "#1a6aaa", glow: "#2980b9", element: "Space (Akasha)", quality: "Expression · Truth · Purification" },
  { name: "Ajna",        english: "Third Eye",     sanskrit: "आज्ञा",          color: "#5b3fb0", glow: "#8e44ad", element: "Light",          quality: "Intuition · Wisdom · Inner Vision" },
  { name: "Sahasrara",   english: "Crown",         sanskrit: "सहस्रार",        color: "#8e3aaa", glow: "#9b59b6", element: "Pure Consciousness", quality: "Liberation · Unity · Transcendence" },
];

// SVG dimensions
const SVG_W = 200;
const SVG_H = 500;
const CX = 100; // center x

// Build cubic bezier path for a serpentine that crosses CX at each chakra y-point
function serpentinePath(startLeft: boolean): string {
  const pts = CHAKRA_Y;
  let d = `M ${CX},${pts[0]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const y1 = pts[i];
    const y2 = pts[i + 1];
    const my = (y1 + y2) / 2;
    const bulge = (i % 2 === 0) === startLeft ? 42 : -42;
    d += ` C ${CX + bulge},${my} ${CX + bulge},${my} ${CX},${y2}`;
  }
  return d;
}

const idaPath = serpentinePath(true);
const pingalaPath = serpentinePath(false);

export default function Variant_A() {
  const [hovered, setHovered] = useState<number | null>(null);

  const active = hovered !== null ? chakras[hovered] : null;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: "#f6f0e8" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400&display=swap');
        @keyframes orb-pulse {
          0%, 100% { opacity: 0.7; r: 10; }
          50% { opacity: 1; r: 12; }
        }
        @keyframes spine-shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.9; }
        }
        @keyframes nadi-flow {
          0% { stroke-dashoffset: 400; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes reveal {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .chakra-circle { cursor: pointer; transition: r 0.2s; }
        .chakra-circle:hover { filter: brightness(1.3); }
      `}</style>

      {/* Faint mandala bg ornament */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 560, height: 560, borderRadius: "50%",
        border: "1px solid rgba(184,137,42,0.1)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 380, height: 380, borderRadius: "50%",
        border: "1px solid rgba(184,137,42,0.07)", pointerEvents: "none",
      }} />

      {/* Heading */}
      <div className="text-center mb-10 relative z-10">
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, letterSpacing: "0.35em", color: "#b8892a", textTransform: "uppercase", marginBottom: 10 }}>
          THE INNER COSMOS
        </p>
        <h2 style={{ fontSize: 40, fontWeight: 300, color: "#2d2820", lineHeight: 1.15, marginBottom: 6 }}>
          The Sacred Architecture Within
        </h2>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "#9a8c7a", letterSpacing: "0.04em" }}>
          Seven Energy Centers &nbsp;·&nbsp; 72,000 Energy Channels &nbsp;·&nbsp; One Awakening
        </p>
      </div>

      {/* Main body */}
      <div className="relative z-10 flex items-center gap-10" style={{ width: 860 }}>

        {/* Left — Nadi legend */}
        <div style={{ width: 190, flexShrink: 0 }}>
          {[
            { color: "#74b9ff", name: "Ida Nadi",      sub: "Lunar · Left channel",    desc: "Cooling, feminine pranic force — governs the mind, emotions, and inner stillness." },
            { color: "#e0d8cc", name: "Sushumna Nadi", sub: "Central · Supreme path",  desc: "The path of Kundalini's ascent — the channel of liberation and divine union." },
            { color: "#fdcb6e", name: "Pingala Nadi",  sub: "Solar · Right channel",   desc: "Warming, masculine pranic force — governs vitality, action, and transformation." },
          ].map(n => (
            <div key={n.name} style={{ marginBottom: 22, borderTop: "1px solid rgba(184,137,42,0.15)", paddingTop: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <div style={{ width: 28, height: 2, background: n.color, borderRadius: 1, flexShrink: 0 }} />
                <p style={{ fontSize: 15, color: "#3d3830", margin: 0 }}>{n.name}</p>
              </div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, color: "#b8892a", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 5 }}>{n.sub}</p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11.5, color: "#8a7e70", lineHeight: 1.75 }}>{n.desc}</p>
            </div>
          ))}
        </div>

        {/* Centre — SVG spine */}
        <div style={{ flexShrink: 0, width: SVG_W + 40, display: "flex", justifyContent: "center" }}>
          <svg width={SVG_W} height={SVG_H} viewBox={`0 0 ${SVG_W} ${SVG_H}`} overflow="visible">
            {/* Sushumna — central golden line */}
            <line
              x1={CX} y1={CHAKRA_Y[0]}
              x2={CX} y2={CHAKRA_Y[CHAKRA_Y.length - 1]}
              stroke="#c8a96e"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              opacity={0.6}
              style={{ animation: "spine-shimmer 3s ease-in-out infinite" }}
            />

            {/* Pingala — solar, warm gold */}
            <path
              d={pingalaPath}
              fill="none"
              stroke="#e8a840"
              strokeWidth={1.8}
              strokeLinecap="round"
              opacity={0.75}
            />

            {/* Ida — lunar, cool blue */}
            <path
              d={idaPath}
              fill="none"
              stroke="#74b9ff"
              strokeWidth={1.8}
              strokeLinecap="round"
              opacity={0.75}
            />

            {/* Chakra orbs — on top, separate from nadis */}
            {chakras.map((c, i) => {
              const cy = CHAKRA_Y[i];
              const isHov = hovered === i;
              return (
                <g key={i} className="chakra-circle"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}>
                  {/* Outer glow ring */}
                  <circle
                    cx={CX} cy={cy}
                    r={isHov ? 20 : 14}
                    fill={c.glow}
                    opacity={isHov ? 0.18 : 0.1}
                    style={{ transition: "r 0.25s, opacity 0.25s" }}
                  />
                  {/* Main orb */}
                  <circle
                    cx={CX} cy={cy}
                    r={isHov ? 13 : 9}
                    fill={`url(#grad-${i})`}
                    stroke={c.glow}
                    strokeWidth={isHov ? 1.5 : 1}
                    opacity={isHov ? 1 : 0.85}
                    style={{ transition: "r 0.25s" }}
                  />
                  {/* Sanskrit mini label */}
                  {isHov && (
                    <text
                      x={CX + 22} y={cy + 4}
                      fontSize={11}
                      fill={c.color}
                      fontFamily="'Cormorant Garamond', serif"
                    >
                      {c.sanskrit}
                    </text>
                  )}
                  <defs>
                    <radialGradient id={`grad-${i}`} cx="35%" cy="35%">
                      <stop offset="0%" stopColor={c.glow} />
                      <stop offset="100%" stopColor={c.color} />
                    </radialGradient>
                  </defs>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Right — Chakra detail */}
        <div style={{ flex: 1, minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {active ? (
            <div key={hovered} style={{ animation: "reveal 0.22s ease" }}>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, color: "#b8892a", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: 10 }}>
                Chakra {hovered! + 1} of 7
              </p>
              <h3 style={{ fontSize: 36, fontWeight: 300, color: active.glow, marginBottom: 2, lineHeight: 1 }}>
                {active.name}
              </h3>
              <p style={{ fontSize: 19, fontStyle: "italic", color: "#9a8c7a", marginBottom: 6 }}>
                {active.english} Centre
              </p>
              <p style={{ fontSize: 24, color: active.color, marginBottom: 16, letterSpacing: "0.04em" }}>
                {active.sanskrit}
              </p>
              <div style={{ width: 36, height: 1, background: `${active.color}70`, marginBottom: 16 }} />
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "#9a8c7a", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 5 }}>
                Element
              </p>
              <p style={{ fontSize: 18, color: "#4a3f34", marginBottom: 16 }}>{active.element}</p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "#9a8c7a", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 5 }}>
                Qualities
              </p>
              <p style={{ fontSize: 17, color: "#4a3f34", lineHeight: 1.7 }}>{active.quality}</p>
            </div>
          ) : (
            <div style={{ opacity: 0.55 }}>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12.5, color: "#7a6e60", lineHeight: 1.9, marginBottom: 18 }}>
                Hover over a chakra to explore its element, Sanskrit name, and qualities.
              </p>
              <p style={{ fontSize: 19, fontStyle: "italic", color: "#8a7e70", lineHeight: 1.9 }}>
                "Within the human body lies a universe of energy — subtle, vast, and waiting to be awakened."
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center mt-10 relative z-10">
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10, justifyContent: "center" }}>
          <div style={{ width: 60, height: 1, background: "rgba(184,137,42,0.25)" }} />
          <span style={{ color: "#b8892a", fontSize: 11 }}>✦</span>
          <div style={{ width: 60, height: 1, background: "rgba(184,137,42,0.25)" }} />
        </div>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#9a8c7a", lineHeight: 2, letterSpacing: "0.03em" }}>
          Through Shaktipat initiation, Kundalini rises through the Sushumna,<br />
          purifying all 72,000 nadis and illuminating each energy centre.
        </p>
      </div>
    </div>
  );
}
