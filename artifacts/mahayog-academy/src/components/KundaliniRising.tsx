import { useState, useEffect } from "react";

// ── Geometry ─────────────────────────────────────────────────────────────────
const CX = 130;
const CHAKRA_Y = [572, 487, 402, 317, 232, 147, 62];
const SPINE_LEN = CHAKRA_Y[0] - CHAKRA_Y[6]; // 510
const COIL_CY = 622;

const CHAKRAS = [
  { name: "Muladhara",    en: "Root",          sk: "मूलाधार",      hex: "#dc2626", glow: "#ef4444", bright: "#fca5a5" },
  { name: "Svadhisthana", en: "Sacral",         sk: "स्वाधिष्ठान",  hex: "#c2410c", glow: "#fb923c", bright: "#fed7aa" },
  { name: "Manipura",     en: "Solar Plexus",   sk: "मणिपूर",       hex: "#a16207", glow: "#eab308", bright: "#fef08a" },
  { name: "Anahata",      en: "Heart",          sk: "अनाहत",        hex: "#15803d", glow: "#22c55e", bright: "#86efac" },
  { name: "Vishuddha",    en: "Throat",         sk: "विशुद्ध",      hex: "#1e40af", glow: "#3b82f6", bright: "#93c5fd" },
  { name: "Ajna",         en: "Third Eye",      sk: "आज्ञा",        hex: "#5b21b6", glow: "#a78bfa", bright: "#c4b5fd" },
  { name: "Sahasrara",    en: "Crown",          sk: "सहस्रार",      hex: "#7e22ce", glow: "#e9d5ff", bright: "#ffffff" },
];

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

function buildCoilPath(): string {
  const steps = 280, coils = 3, total = coils * 2 * Math.PI;
  const outerR = 30, innerR = 4.5;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t  = (i / steps) * total;
    const a  = Math.PI / 2 + t;
    const r  = outerR - (outerR - innerR) * (t / total);
    d += i === 0
      ? `M ${(CX + r * Math.cos(a)).toFixed(2)},${(COIL_CY + r * Math.sin(a)).toFixed(2)}`
      : ` L ${(CX + r * Math.cos(a)).toFixed(2)},${(COIL_CY + r * Math.sin(a)).toFixed(2)}`;
  }
  return d;
}
const COIL_PATH = buildCoilPath();

const CROWN_RAYS = Array.from({ length: 16 }, (_, i) => {
  const a = (i / 16) * Math.PI * 2 - Math.PI / 2;
  return { x1: CX + 20 * Math.cos(a), y1: CHAKRA_Y[6] + 20 * Math.sin(a),
           x2: CX + 56 * Math.cos(a), y2: CHAKRA_Y[6] + 56 * Math.sin(a) };
});

export default function KundaliniRising() {
  const [phase, setPhase]                 = useState<0|1|2>(0);
  const [activeChakras, setActiveChakras] = useState<Set<number>>(new Set());
  const [dashOffset, setDashOffset]       = useState(SPINE_LEN);

  useEffect(() => {
    if (phase !== 1) return;
    const t: ReturnType<typeof setTimeout>[] = [];
    t.push(setTimeout(() => setDashOffset(0), 60));
    CHAKRAS.forEach((_, i) => {
      t.push(setTimeout(() => setActiveChakras(prev => new Set([...prev, i])), 400 + i * 370));
    });
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
    <section
      id="kundalini-rising"
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: "#1e1710" }}
    >
      {/* Background image overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={`${import.meta.env.BASE_URL}images/kundalini-serene-bg.png`}
          alt=""
          className="w-full h-full object-cover object-center opacity-55"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #1e1710 0%, transparent 25%, transparent 75%, #1e1710 100%)" }} />
      </div>
      <style>{`
        @keyframes kr-burst { 0%{transform:scale(.5);opacity:0} 45%{transform:scale(1.55);opacity:1} 100%{transform:scale(1);opacity:1} }
        @keyframes kr-glow  { 0%,100%{opacity:.55} 50%{opacity:1} }
        @keyframes kr-ray   { 0%{opacity:0;stroke-width:2} 35%{opacity:1;stroke-width:3.5} 100%{opacity:.65;stroke-width:1.5} }
        @keyframes kr-ring  { 0%{r:18;opacity:0} 50%{r:26;opacity:.8} 100%{r:32;opacity:0} }
        @keyframes kr-fade  { from{opacity:0} to{opacity:1} }
        @keyframes kr-slide { from{opacity:0;transform:translateX(10px)} to{opacity:1;transform:none} }
        @keyframes kr-crown { 0%{opacity:0;transform:scale(.2)} 60%{opacity:1;transform:scale(1.3)} 100%{opacity:.85;transform:scale(1)} }
        .kr-burst { animation: kr-burst .65s cubic-bezier(.34,1.56,.64,1) forwards; }
        .kr-slide { animation: kr-slide .45s ease forwards; }
      `}</style>

      <div className="max-w-5xl mx-auto">

        {/* ── Section header ── */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10" style={{ background: "#4a3a20" }} />
            <span className="uppercase tracking-[0.3em] text-xs font-medium" style={{ color: "#b8892a" }}>Kundalini Shakti</span>
            <div className="h-px w-10" style={{ background: "#4a3a20" }} />
          </div>
          <h2 className="font-['Cormorant_Garamond'] font-light leading-tight mb-3" style={{ fontSize: "clamp(2rem,4vw,2.75rem)", color: "#f0e6cc" }}>
            The Dormant Power Within
          </h2>
          <p className="text-sm tracking-wide" style={{ color: "#6a5a38" }}>
            Click to witness the transformation through Shaktipat
          </p>
        </div>

        {/* ── Toggle ── */}
        <div className="flex justify-center mb-10">
          <div className="flex rounded-full p-1.5 gap-1" style={{ background: "#141008", border: "1px solid #2a2018" }}>
            <button
              onClick={handleBefore}
              className="transition-all duration-300 rounded-full px-6 py-2.5 text-sm font-medium tracking-wider cursor-pointer border-0"
              style={{
                fontFamily: "Inter, sans-serif",
                background: !isAfter ? "#3d2e1a" : "transparent",
                color: !isAfter ? "#e8c87a" : "#5a4830",
                boxShadow: !isAfter ? "0 2px 14px rgba(184,137,42,.22)" : "none",
              }}
            >◎ &nbsp;Before Shaktipat</button>
            <button
              onClick={handleAfter}
              disabled={phase === 1}
              className="transition-all duration-300 rounded-full px-6 py-2.5 text-sm font-medium tracking-wider border-0"
              style={{
                fontFamily: "Inter, sans-serif",
                cursor: phase === 0 ? "pointer" : "default",
                background: isAfter ? "linear-gradient(135deg,#b8892a,#e8b840,#b8892a)" : "transparent",
                color: isAfter ? "#0d0b08" : "#5a4830",
                boxShadow: isAfter ? "0 2px 22px rgba(232,168,64,.42)" : "none",
              }}
            >✦ &nbsp;After Mahayog Shaktipat</button>
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 justify-center">

          {/* LEFT — state description */}
          <div className={`w-full text-center flex-shrink-0 ${!isAfter ? "md:max-w-lg" : "md:w-56"}`}>
            {!isAfter ? (
              <div key="b" style={{ animation: "kr-fade .5s ease" }}>
                <p className="md:hidden uppercase tracking-[0.24em] text-[10px] mb-2" style={{ color: "#7a6040" }}>
                  Dormant · Head Facing Down
                </p>
                <p className="md:hidden font-['Cormorant_Garamond'] font-light leading-tight mb-1" style={{ fontSize: "clamp(1.6rem,5vw,1.9rem)", color: "#e0ccaa" }}>
                  Dormant Kundalini
                </p>
                <p className="md:hidden font-['Cormorant_Garamond'] italic mb-3" style={{ fontSize: 14, color: "#8a7040" }}>
                  सुप्त कुण्डलिनी
                </p>
                <div className="md:hidden h-px w-7 mx-auto mb-4" style={{ background: "#3a2e18" }} />
                <p className="text-sm leading-relaxed" style={{ color: "#9a7e54", lineHeight: 1.9 }}>
                  The Kundalini Shakti lies coiled three and a half times at the base of the spine — like a sleeping serpent. Her head faces downward, consciousness absorbed in the material world. Her immense power sleeps, awaiting the Guru's grace.
                </p>
                <p className="text-sm mt-4 leading-loose" style={{ color: "#9a8050", lineHeight: 1.9 }}>
                  In the average person, Kundalini remains dormant throughout life. Only through a rare Enlightened Master can this power be instantly and safely awakened.
                </p>
              </div>
            ) : (
              <div key="a" style={{ animation: "kr-fade .5s ease" }}>
                <p className="uppercase tracking-[0.24em] text-[10px] mb-2" style={{ color: "#b8892a" }}>
                  Awakened · Rising Through Sushumna
                </p>
                <p className="font-['Cormorant_Garamond'] font-light leading-tight mb-1" style={{ fontSize: "clamp(1.6rem,5vw,1.9rem)", color: "#e0ccaa" }}>
                  Awakened Kundalini
                </p>
                <p className="font-['Cormorant_Garamond'] italic mb-3" style={{ fontSize: 14, color: "#b8892a" }}>
                  जागृत कुण्डलिनी
                </p>
                <div className="h-px w-7 mx-auto mb-4" style={{ background: "#4a3a18" }} />
                <p className="text-sm leading-relaxed" style={{ color: "#c0a060", lineHeight: 1.9 }}>
                  Through the Guru's Shaktipat, Kundalini awakens and turns upward. She rises through the Sushumna Nadi, piercing each chakra, dissolving all veils, until she merges with Shiva at the Crown in Samadhi.
                </p>
              </div>
            )}
          </div>

          {/* CENTRE — SVG spine (hidden in before state) */}
          <div className={`flex-shrink-0 ${!isAfter ? "hidden" : ""}`}>
            <svg viewBox="0 0 260 670" width={220} height={567} overflow="visible">
              <defs>
                {CHAKRAS.map((c, i) => (
                  <radialGradient key={i} id={`kr2-g${i}`} cx="38%" cy="35%">
                    <stop offset="0%"   stopColor={activeChakras.has(i) ? c.bright : "#2e2418"} />
                    <stop offset="100%" stopColor={activeChakras.has(i) ? c.glow   : "#18120a"} />
                  </radialGradient>
                ))}
                <linearGradient id="kr2-rise" x1={CX} y1={CHAKRA_Y[0]} x2={CX} y2={CHAKRA_Y[6]} gradientUnits="userSpaceOnUse">
                  <stop offset="0%"   stopColor="#dc2626" />
                  <stop offset="18%"  stopColor="#f97316" />
                  <stop offset="36%"  stopColor="#eab308" />
                  <stop offset="54%"  stopColor="#22c55e" />
                  <stop offset="70%"  stopColor="#3b82f6" />
                  <stop offset="85%"  stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
                <filter id="kr2-bloom" x="-120%" y="-120%" width="340%" height="340%">
                  <feGaussianBlur stdDeviation="7" result="b" />
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="kr2-crown" x="-200%" y="-200%" width="500%" height="500%">
                  <feGaussianBlur stdDeviation="12" result="b" />
                  <feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              {/* Spine baseline */}
              <line x1={CX} y1={CHAKRA_Y[0]+16} x2={CX} y2={CHAKRA_Y[6]-20} stroke="#201a10" strokeWidth={1.5} />

              {/* Nadis */}
              {isAfter && <>
                <path d={IDA_PATH}     fill="none" stroke="#3b82f6" strokeWidth={1.5} strokeLinecap="round" opacity={0.45} />
                <path d={PINGALA_PATH} fill="none" stroke="#f97316" strokeWidth={1.5} strokeLinecap="round" opacity={0.45} />
              </>}

              {/* Rising energy line */}
              {isAfter && (
                <line
                  x1={CX} y1={CHAKRA_Y[0]} x2={CX} y2={CHAKRA_Y[6]}
                  stroke="url(#kr2-rise)" strokeWidth={4} strokeLinecap="round"
                  strokeDasharray={SPINE_LEN} strokeDashoffset={dashOffset}
                  style={{ transition: "stroke-dashoffset 2.9s cubic-bezier(0.12, 1, 0.3, 1)" }}
                />
              )}

              {/* Crown rays */}
              {activeChakras.has(6) && CROWN_RAYS.map((r, i) => (
                <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
                  stroke="#e9d5ff" strokeLinecap="round"
                  style={{ animation: `kr-ray .9s ease ${i * 0.035}s both` }}
                />
              ))}

              {/* Chakra orbs */}
              {CHAKRAS.map((c, i) => {
                const cy = CHAKRA_Y[i];
                const act = activeChakras.has(i);
                return (
                  <g key={i} style={{ transformOrigin: `${CX}px ${cy}px` }}>
                    {act && (
                      <circle cx={CX} cy={cy} r={34} fill={c.glow} opacity={0.2}
                        filter="url(#kr2-bloom)"
                        style={{ animation: `kr-glow ${2.1+i*.18}s ease-in-out infinite` }}
                      />
                    )}
                    {act && (
                      <circle cx={CX} cy={cy} r={18} fill="none"
                        stroke={c.glow} strokeWidth={2} opacity={0}
                        style={{ animation: "kr-ring .8s ease forwards" }}
                      />
                    )}
                    <circle
                      cx={CX} cy={cy}
                      r={act ? 15 : (isAfter ? 10 : 9)}
                      fill={`url(#kr2-g${i})`}
                      stroke={act ? c.glow : (isAfter ? "#302818" : "#252018")}
                      strokeWidth={act ? 2 : 1}
                      className={act ? "kr-burst" : ""}
                      style={{
                        transition: "r .3s, stroke .3s",
                        filter: act ? `drop-shadow(0 0 12px ${c.glow})` : "none",
                      }}
                    />
                    {i === 6 && act && (
                      <circle cx={CX} cy={cy} r={24} fill="none"
                        stroke="#ffffff" strokeWidth={1.5} opacity={0}
                        filter="url(#kr2-crown)"
                        style={{ animation: "kr-crown .9s ease forwards" }}
                      />
                    )}
                  </g>
                );
              })}

              {/* Dormant coil */}
              {!isAfter && (
                <g>
                  <path d={COIL_PATH} fill="none" stroke="#7a5030" strokeWidth={2.4} strokeLinecap="round" opacity={0.82} />
                  <ellipse cx={CX} cy={COIL_CY + 6.5} rx={4.5} ry={6.5} fill="#7a5030" />
                  <circle cx={CX - 2.2} cy={COIL_CY + 4} r={1}   fill="#120800" />
                  <circle cx={CX + 2.2} cy={COIL_CY + 4} r={1}   fill="#120800" />
                  <line x1={CX - 0.5} y1={COIL_CY + 11.5} x2={CX - 3.5} y2={COIL_CY + 16} stroke="#8b1a1a" strokeWidth={0.9} strokeLinecap="round" />
                  <line x1={CX + 0.5} y1={COIL_CY + 11.5} x2={CX + 3.5} y2={COIL_CY + 16} stroke="#8b1a1a" strokeWidth={0.9} strokeLinecap="round" />
                  <line x1={CX}       y1={COIL_CY + 10}   x2={CX}       y2={COIL_CY + 12}  stroke="#8b1a1a" strokeWidth={0.9} strokeLinecap="round" />
                  <text x={CX + 40} y={COIL_CY + 9} fontSize={9} fill="#5a3e20" fontFamily="Inter, sans-serif" letterSpacing="0.18em">DORMANT</text>
                </g>
              )}
            </svg>
          </div>

          {/* RIGHT — chakra name list */}
          <div className={`w-full md:w-52 flex-shrink-0 pl-8 md:pl-0 ${!isAfter ? "hidden" : ""}`}>
            {CHAKRAS.map((c, i) => {
              const act = activeChakras.has(i);
              return (
                <div key={i}
                  className={act ? "kr-slide" : ""}
                  style={{
                    display: "flex", alignItems: "center", gap: 10, marginBottom: 14,
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
                    <p className="font-['Cormorant_Garamond'] leading-tight m-0" style={{ fontSize: 18, color: act ? c.bright : "#3a2e18", transition: "color .4s" }}>
                      {c.name}
                    </p>
                    <p className="uppercase m-0" style={{ fontSize: 9, letterSpacing: "0.22em", color: act ? c.glow : "#2e2418", transition: "color .4s" }}>
                      {c.en}
                    </p>
                  </div>
                  <p className="font-['Cormorant_Garamond'] flex-shrink-0 m-0" style={{ fontSize: 15, color: act ? c.glow : "#2e2418", transition: "color .4s" }}>
                    {c.sk}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom quote ── */}
        <div className="mt-10 text-center max-w-xl mx-auto pt-6" style={{ borderTop: "1px solid #2a2018" }}>
          {isAfter ? (
            <p className="text-sm leading-loose tracking-wide" style={{ color: "#c0a060", lineHeight: 1.95 }}>
              When Kundalini reaches the Sahasrara, individual consciousness merges with universal consciousness — this is Samadhi, the ultimate aim of all Yoga.
            </p>
          ) : null}
        </div>

      </div>
    </section>
  );
}
