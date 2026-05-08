import { useState, useEffect } from "react";

// ── Geometry ─────────────────────────────────────────────────────────────────
const CX = 130; // spine centre-x in SVG
// y positions bottom→top: Root → Crown
const CHAKRA_Y = [572, 487, 402, 317, 232, 147, 62];
const SPINE_LEN = CHAKRA_Y[0] - CHAKRA_Y[6]; // 510
const COIL_CY = 622; // snake coil centre (below root)

const CHAKRAS = [
  { name: "Muladhara",    en: "Root",          sk: "मूलाधार",      hex: "#dc2626", glow: "#ef4444", bright: "#fca5a5" },
  { name: "Svadhisthana", en: "Sacral",         sk: "स्वाधिष्ठान",  hex: "#c2410c", glow: "#fb923c", bright: "#fed7aa" },
  { name: "Manipura",     en: "Solar Plexus",   sk: "मणिपूर",       hex: "#a16207", glow: "#eab308", bright: "#fef08a" },
  { name: "Anahata",      en: "Heart",          sk: "अनाहत",        hex: "#15803d", glow: "#22c55e", bright: "#86efac" },
  { name: "Vishuddha",    en: "Throat",         sk: "विशुद्ध",      hex: "#1e40af", glow: "#3b82f6", bright: "#93c5fd" },
  { name: "Ajna",         en: "Third Eye",      sk: "आज्ञा",        hex: "#5b21b6", glow: "#a78bfa", bright: "#c4b5fd" },
  { name: "Sahasrara",    en: "Crown",          sk: "सहस्रार",      hex: "#7e22ce", glow: "#e9d5ff", bright: "#ffffff" },
];

// Serpentine nadi paths
function serpentine(left: boolean): string {
  let d = `M ${CX},${CHAKRA_Y[0]}`;
  for (let i = 0; i < CHAKRA_Y.length - 1; i++) {
    const y1 = CHAKRA_Y[i], y2 = CHAKRA_Y[i + 1], my = (y1 + y2) / 2;
    const b = (i % 2 === 0) === left ? 46 : -46;
    d += ` C ${CX+b},${my} ${CX+b},${my} ${CX},${y2}`;
  }
  return d;
}
const IDA_PATH     = serpentine(true);
const PINGALA_PATH = serpentine(false);

// 3-coil Archimedean spiral, head pointing DOWN (dormant toward earth)
function buildCoilPath(): string {
  const steps = 280, coils = 3, total = coils * 2 * Math.PI;
  const outerR = 30, innerR = 4.5;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t  = (i / steps) * total;
    const a  = Math.PI / 2 + t;                          // start pointing DOWN (π/2)
    const r  = outerR - (outerR - innerR) * (t / total); // spiral inward
    d += i === 0
      ? `M ${(CX + r * Math.cos(a)).toFixed(2)},${(COIL_CY + r * Math.sin(a)).toFixed(2)}`
      : ` L ${(CX + r * Math.cos(a)).toFixed(2)},${(COIL_CY + r * Math.sin(a)).toFixed(2)}`;
  }
  return d;
}
const COIL_PATH = buildCoilPath();

// Crown rays (16 spokes)
const CROWN_RAYS = Array.from({ length: 16 }, (_, i) => {
  const a = (i / 16) * Math.PI * 2 - Math.PI / 2;
  return { x1: CX + 20 * Math.cos(a), y1: CHAKRA_Y[6] + 20 * Math.sin(a),
           x2: CX + 56 * Math.cos(a), y2: CHAKRA_Y[6] + 56 * Math.sin(a) };
});

// ── Component ─────────────────────────────────────────────────────────────────
export function KundaliniRising() {
  const [phase, setPhase]               = useState<0|1|2>(0); // 0=before 1=animating 2=after
  const [activeChakras, setActiveChakras] = useState<Set<number>>(new Set());
  const [dashOffset, setDashOffset]     = useState(SPINE_LEN);

  // Animation sequence when entering phase 1
  useEffect(() => {
    if (phase !== 1) return;
    const t: ReturnType<typeof setTimeout>[] = [];

    // Tiny delay so React renders line with dashOffset=SPINE_LEN before transition fires
    t.push(setTimeout(() => setDashOffset(0), 60));

    // Chakra activations: root → crown, ~350ms apart
    CHAKRAS.forEach((_, i) => {
      t.push(setTimeout(() => setActiveChakras(prev => new Set([...prev, i])), 400 + i * 370));
    });

    // Finish animation
    t.push(setTimeout(() => setPhase(2), 400 + 7 * 370 + 300));

    return () => t.forEach(clearTimeout);
  }, [phase]);

  const handleAfter = () => {
    if (phase !== 0) return;
    setDashOffset(SPINE_LEN);
    setActiveChakras(new Set());
    setPhase(1);
  };

  const handleBefore = () => {
    setPhase(0);
    setActiveChakras(new Set());
    setDashOffset(SPINE_LEN);
  };

  const isAfter = phase === 1 || phase === 2;

  return (
    <div style={{
      background: "#0d0b08", width: "100%", minHeight: "100vh",
      display: "flex", flexDirection: "column", alignItems: "center",
      padding: "36px 24px 48px",
      fontFamily: "'Inter', sans-serif", color: "#e8d5b4",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&family=Inter:wght@300;400;500&display=swap');
        @keyframes kr-burst  { 0%{transform:scale(.5);opacity:0} 45%{transform:scale(1.55);opacity:1} 100%{transform:scale(1);opacity:1} }
        @keyframes kr-glow   { 0%,100%{opacity:.55} 50%{opacity:1} }
        @keyframes kr-ray    { 0%{opacity:0;stroke-width:2} 35%{opacity:1;stroke-width:3.5} 100%{opacity:.65;stroke-width:1.5} }
        @keyframes kr-ring   { 0%{r:18;opacity:0} 50%{r:26;opacity:.8} 100%{r:32;opacity:0} }
        @keyframes kr-fade   { from{opacity:0} to{opacity:1} }
        @keyframes kr-slide  { from{opacity:0;transform:translateX(10px)} to{opacity:1;transform:none} }
        @keyframes kr-crown  { 0%{opacity:0;transform:scale(.2)} 60%{opacity:1;transform:scale(1.3)} 100%{opacity:.85;transform:scale(1)} }
        .kr-burst  { animation: kr-burst .65s cubic-bezier(.34,1.56,.64,1) forwards; }
        .kr-slide  { animation: kr-slide .45s ease forwards; }
      `}</style>

      {/* ── Heading ── */}
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <p style={{ textTransform: "uppercase", letterSpacing: "0.34em", fontSize: 11, color: "#b8892a", fontWeight: 500, marginBottom: 10 }}>
          Kundalini Shakti
        </p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 40, color: "#f0e6cc", lineHeight: 1.15, margin: "0 0 10px" }}>
          The Dormant Power Within
        </h2>
        <p style={{ fontSize: 13, color: "#6a5a38", letterSpacing: "0.04em" }}>
          Click to witness the transformation through Shaktipat
        </p>
      </div>

      {/* ── Toggle ── */}
      <div style={{ display: "flex", background: "#191410", borderRadius: 50, padding: 5, gap: 4, marginBottom: 36, border: "1px solid #2a2018" }}>
        <button onClick={handleBefore} style={{
          padding: "10px 26px", borderRadius: 44, border: "none", cursor: "pointer",
          fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.06em",
          transition: "all 0.35s",
          background: !isAfter ? "#3d2e1a" : "transparent",
          color: !isAfter ? "#e8c87a" : "#5a4830",
          boxShadow: !isAfter ? "0 2px 14px rgba(184,137,42,.22)" : "none",
        }}>◎ &nbsp;Before Shaktipat</button>
        <button onClick={handleAfter} disabled={phase === 1} style={{
          padding: "10px 26px", borderRadius: 44, border: "none",
          cursor: phase === 0 ? "pointer" : "default",
          fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.06em",
          transition: "all 0.35s",
          background: isAfter ? "linear-gradient(135deg,#b8892a,#e8b840,#b8892a)" : "transparent",
          color: isAfter ? "#0d0b08" : "#5a4830",
          boxShadow: isAfter ? "0 2px 22px rgba(232,168,64,.42)" : "none",
        }}>✦ &nbsp;After Mahayog Shaktipat</button>
      </div>

      {/* ── Main layout ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 44, maxWidth: 1020, width: "100%" }}>

        {/* LEFT — description */}
        <div style={{ width: 230, flexShrink: 0, textAlign: "center" }}>
          {!isAfter ? (
            <div key="b" style={{ animation: "kr-fade .5s ease" }}>
              <p style={{ textTransform: "uppercase", letterSpacing: "0.24em", fontSize: 10, color: "#7a6040", marginBottom: 10 }}>
                Dormant · Head Facing Down
              </p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 28, color: "#c0a060", marginBottom: 14, lineHeight: 1.2 }}>
                सुप्त कुण्डलिनी
              </p>
              <div style={{ width: 28, height: 1, background: "#3a2e18", marginBottom: 16, margin: "0 auto 16px" }} />
              <p style={{ fontSize: 14, color: "#9a7e54", lineHeight: 1.9 }}>
                The Kundalini Shakti lies coiled three and a half times at the base of the spine — like a sleeping serpent. Her head faces downward, consciousness absorbed in the material world. Her immense power sleeps, awaiting the Guru's touch.
              </p>
            </div>
          ) : (
            <div key="a" style={{ animation: "kr-fade .5s ease" }}>
              <p style={{ textTransform: "uppercase", letterSpacing: "0.24em", fontSize: 10, color: "#b8892a", marginBottom: 10 }}>
                Awakened · Rising Through Sushumna
              </p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 28, color: "#e8c87a", marginBottom: 14, lineHeight: 1.2 }}>
                जागृत कुण्डलिनी
              </p>
              <div style={{ width: 28, height: 1, background: "#4a3a18", marginBottom: 16, margin: "0 auto 16px" }} />
              <p style={{ fontSize: 14, color: "#c0a060", lineHeight: 1.9 }}>
                Through the Guru's Shaktipat, Kundalini awakens and turns upward. She rises through the Sushumna Nadi, piercing each chakra, dissolving all veils, until she merges with Shiva at the Crown in Samadhi.
              </p>
            </div>
          )}
        </div>

        {/* CENTRE — SVG spine */}
        <div style={{ flexShrink: 0 }}>
          <svg viewBox="0 0 260 670" width={230} height={595} overflow="visible">
            <defs>
              {CHAKRAS.map((c, i) => (
                <radialGradient key={i} id={`kg${i}`} cx="38%" cy="35%">
                  <stop offset="0%"   stopColor={activeChakras.has(i) ? c.bright : "#2e2418"} />
                  <stop offset="100%" stopColor={activeChakras.has(i) ? c.glow  : "#18120a"} />
                </radialGradient>
              ))}
              <linearGradient id="krise" x1={CX} y1={CHAKRA_Y[0]} x2={CX} y2={CHAKRA_Y[6]} gradientUnits="userSpaceOnUse">
                <stop offset="0%"    stopColor="#dc2626" />
                <stop offset="18%"   stopColor="#f97316" />
                <stop offset="36%"   stopColor="#eab308" />
                <stop offset="54%"   stopColor="#22c55e" />
                <stop offset="70%"   stopColor="#3b82f6" />
                <stop offset="85%"   stopColor="#a78bfa" />
                <stop offset="100%"  stopColor="#ffffff" />
              </linearGradient>
              <filter id="kbloom" x="-120%" y="-120%" width="340%" height="340%">
                <feGaussianBlur stdDeviation="7" result="b" />
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="kcrown" x="-200%" y="-200%" width="500%" height="500%">
                <feGaussianBlur stdDeviation="12" result="b" />
                <feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            {/* Spine baseline */}
            <line x1={CX} y1={CHAKRA_Y[0]+16} x2={CX} y2={CHAKRA_Y[6]-20} stroke="#201a10" strokeWidth={1.5} />

            {/* Nadis — appear in after state */}
            {isAfter && <>
              <path d={IDA_PATH}     fill="none" stroke="#3b82f6" strokeWidth={1.5} strokeLinecap="round" opacity={0.45} />
              <path d={PINGALA_PATH} fill="none" stroke="#f97316" strokeWidth={1.5} strokeLinecap="round" opacity={0.45} />
            </>}

            {/* Rising Kundalini energy — animated line */}
            {isAfter && (
              <line
                x1={CX} y1={CHAKRA_Y[0]} x2={CX} y2={CHAKRA_Y[6]}
                stroke="url(#krise)"
                strokeWidth={4}
                strokeLinecap="round"
                strokeDasharray={SPINE_LEN}
                strokeDashoffset={dashOffset}
                style={{ transition: "stroke-dashoffset 2.9s cubic-bezier(0.12, 1, 0.3, 1)" }}
              />
            )}

            {/* Crown rays burst */}
            {activeChakras.has(6) && CROWN_RAYS.map((r, i) => (
              <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
                stroke="#e9d5ff" strokeLinecap="round"
                style={{ animation: `kr-ray .9s ease ${i * 0.035}s both` }}
              />
            ))}

            {/* Chakra orbs */}
            {CHAKRAS.map((c, i) => {
              const cy  = CHAKRA_Y[i];
              const act = activeChakras.has(i);
              return (
                <g key={i} style={{ transformOrigin: `${CX}px ${cy}px` }}>
                  {/* Bloom halo */}
                  {act && (
                    <circle cx={CX} cy={cy} r={34} fill={c.glow} opacity={0.2}
                      filter="url(#kbloom)"
                      style={{ animation: `kr-glow ${2.1+i*.18}s ease-in-out infinite` }}
                    />
                  )}
                  {/* Ring pulse on activation */}
                  {act && (
                    <circle cx={CX} cy={cy} r={18} fill="none"
                      stroke={c.glow} strokeWidth={2} opacity={0}
                      style={{ animation: "kr-ring .8s ease forwards" }}
                    />
                  )}
                  {/* Main orb */}
                  <circle
                    cx={CX} cy={cy}
                    r={act ? 15 : (isAfter ? 10 : 9)}
                    fill={`url(#kg${i})`}
                    stroke={act ? c.glow : (isAfter ? "#302818" : "#252018")}
                    strokeWidth={act ? 2 : 1}
                    className={act ? "kr-burst" : ""}
                    style={{
                      transition: "r .3s, stroke .3s",
                      filter: act ? `drop-shadow(0 0 12px ${c.glow})` : "none",
                    }}
                  />
                  {/* Crown special outer ring */}
                  {i === 6 && act && (
                    <circle cx={CX} cy={cy} r={24} fill="none"
                      stroke="#ffffff" strokeWidth={1.5} opacity={0}
                      filter="url(#kcrown)"
                      style={{ animation: "kr-crown .9s ease forwards" }}
                    />
                  )}
                </g>
              );
            })}

            {/* Dormant coiled snake (before state only) */}
            {!isAfter && (
              <g>
                <path d={COIL_PATH} fill="none" stroke="#7a5030" strokeWidth={2.4} strokeLinecap="round" opacity={0.82} />
                {/* Head — oval pointing DOWN */}
                <ellipse cx={CX} cy={COIL_CY + 6.5} rx={4.5} ry={6.5} fill="#7a5030" />
                {/* Eyes */}
                <circle cx={CX - 2.2} cy={COIL_CY + 4}   r={1}   fill="#120800" />
                <circle cx={CX + 2.2} cy={COIL_CY + 4}   r={1}   fill="#120800" />
                {/* Forked tongue pointing DOWN */}
                <line x1={CX - 0.5} y1={COIL_CY + 11.5} x2={CX - 3.5} y2={COIL_CY + 16} stroke="#8b1a1a" strokeWidth={0.9} strokeLinecap="round" />
                <line x1={CX + 0.5} y1={COIL_CY + 11.5} x2={CX + 3.5} y2={COIL_CY + 16} stroke="#8b1a1a" strokeWidth={0.9} strokeLinecap="round" />
                <line x1={CX}       y1={COIL_CY + 10}   x2={CX}       y2={COIL_CY + 12} stroke="#8b1a1a" strokeWidth={0.9} strokeLinecap="round" />
                {/* Label */}
                <text x={CX + 40} y={COIL_CY + 9} fontSize={9} fill="#5a3e20" fontFamily="'Inter', sans-serif" letterSpacing="0.18em">DORMANT</text>
              </g>
            )}
          </svg>
        </div>

        {/* RIGHT — chakra name list */}
        <div style={{ width: 210, flexShrink: 0 }}>
          {CHAKRAS.map((c, i) => {
            const act = activeChakras.has(i);
            return (
              <div key={i} className={act ? "kr-slide" : ""}
                style={{
                  display: "flex", alignItems: "center", gap: 10, marginBottom: 15,
                  opacity: act ? 1 : (isAfter ? 0.28 : 0.45),
                  transition: "opacity .4s",
                }}>
                <div style={{
                  width: 10, height: 10, borderRadius: "50%", flexShrink: 0,
                  background: act ? c.glow : "#2e2418",
                  boxShadow: act ? `0 0 10px ${c.glow}, 0 0 20px ${c.glow}60` : "none",
                  transition: "background .4s, box-shadow .4s",
                }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, color: act ? c.bright : "#3a2e18", lineHeight: 1.1, margin: 0, transition: "color .4s" }}>
                    {c.name}
                  </p>
                  <p style={{ fontSize: 9, letterSpacing: "0.22em", color: act ? c.glow : "#2e2418", margin: 0, textTransform: "uppercase", transition: "color .4s" }}>
                    {c.en}
                  </p>
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, color: act ? c.glow : "#2e2418", transition: "color .4s", flexShrink: 0 }}>
                  {c.sk}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom quote */}
      <div style={{ marginTop: 32, textAlign: "center", maxWidth: 560, borderTop: "1px solid #1e1810", paddingTop: 24 }}>
        <p style={{ fontSize: 13, color: isAfter ? "#6a5030" : "#3a2e18", lineHeight: 1.95, letterSpacing: "0.03em", transition: "color .6s" }}>
          {isAfter
            ? "When Kundalini reaches the Sahasrara, individual consciousness merges with universal consciousness — this is Samadhi, the ultimate aim of all Yoga."
            : "In the average person, Kundalini remains dormant throughout life. Only through a rare Enlightened Master can this power be instantly and safely awakened."}
        </p>
      </div>
    </div>
  );
}
