import { useState } from "react";

const nadis = [
  {
    id: "ida",
    name: "Ida Nadi",
    sanskrit: "इड़ा",
    sub: "The Moon Channel",
    side: "Left",
    symbol: "☽",
    color: "#7ecef4",
    bg: "rgba(126,206,244,0.08)",
    border: "rgba(126,206,244,0.25)",
    desc: "Ida carries lunar, cooling pranic energy up the left side of the spine. It governs the mind, emotions, the nervous system, and the feminine principle. When purified, it bestows deep stillness and inner peace.",
    qualities: ["Calmness", "Intuition", "Receptivity", "Mental Clarity"],
  },
  {
    id: "sushumna",
    name: "Sushumna Nadi",
    sanskrit: "सुषुम्ना",
    sub: "The Supreme Central Channel",
    side: "Centre",
    symbol: "✦",
    color: "#f5ede0",
    bg: "rgba(245,237,224,0.08)",
    border: "rgba(245,237,224,0.3)",
    desc: "Sushumna is the most sacred of all 72,000 nadis. Running through the centre of the spine, it is the pathway of Kundalini Shakti — the dormant cosmic power that awakens through Shaktipat and ascends to Sahasrara, the crown.",
    qualities: ["Liberation", "Samadhi", "Non-duality", "Divine Union"],
    featured: true,
  },
  {
    id: "pingala",
    name: "Pingala Nadi",
    sanskrit: "पिंगला",
    sub: "The Sun Channel",
    side: "Right",
    symbol: "☀",
    color: "#fdcb6e",
    bg: "rgba(253,203,110,0.08)",
    border: "rgba(253,203,110,0.25)",
    desc: "Pingala carries solar, warming pranic energy up the right side of the spine. It governs vital force, metabolism, action, and the masculine principle. When balanced with Ida, it ignites transformation and awakening.",
    qualities: ["Vitality", "Will-power", "Clarity", "Dynamic Energy"],
  },
];

function NadiParticles({ color, count = 6, duration = 4 }: { color: string; count?: number; duration?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          left: "50%",
          width: 3,
          height: 24,
          borderRadius: 99,
          background: `linear-gradient(to top, transparent, ${color}, transparent)`,
          transform: "translateX(-50%)",
          animation: `nadi-flow ${duration}s ease-in-out infinite`,
          animationDelay: `${(i / count) * duration}s`,
          opacity: 0.7,
        }} />
      ))}
    </>
  );
}

export default function Variant_B() {
  const [active, setActive] = useState<string>("sushumna");

  const activeNadi = nadis.find(n => n.id === active)!;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: "#f9f5ef" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400&display=swap');
        @keyframes nadi-flow {
          0% { top: 100%; opacity: 0; }
          15% { opacity: 0.8; }
          85% { opacity: 0.8; }
          100% { top: -10%; opacity: 0; }
        }
        @keyframes orb-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes reveal {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>

      {/* Subtle background ornament */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, borderRadius: "50%", border: "1px solid rgba(184,137,42,0.08)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 450, height: 450, borderRadius: "50%", border: "1px solid rgba(184,137,42,0.06)", pointerEvents: "none" }} />

      {/* Header */}
      <div className="text-center mb-10 relative z-10">
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, letterSpacing: "0.35em", color: "#b8892a", textTransform: "uppercase", marginBottom: 10 }}>
          THE PRANIC BODY
        </p>
        <h2 style={{ fontSize: 44, fontWeight: 300, color: "#2d2820", lineHeight: 1.1, marginBottom: 6 }}>
          The Rivers of Prana
        </h2>
        <p style={{ fontSize: 19, fontStyle: "italic", color: "#b8892a", marginBottom: 10 }}>
          72,000 Nadis. One Supreme Path.
        </p>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "#9a8c7a", maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
          Ancient yogic science maps the subtle body as a vast network of energy channels — nadis — through which prana, the life-force, flows. Three are supreme.
        </p>
      </div>

      {/* Three nadi columns */}
      <div className="relative z-10 flex gap-6 items-start" style={{ width: 860 }}>
        {nadis.map(n => (
          <div key={n.id}
            onClick={() => setActive(n.id)}
            style={{
              flex: 1,
              background: active === n.id ? n.bg : "transparent",
              border: `1px solid ${active === n.id ? n.border : "rgba(184,137,42,0.12)"}`,
              borderRadius: 2,
              padding: "28px 24px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
            }}>

            {/* Animated nadi channel */}
            <div style={{ position: "relative", height: 120, display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 20, overflow: "hidden" }}>
              {/* Channel line */}
              <div style={{
                position: "absolute",
                left: "50%", top: 0, bottom: 0,
                width: active === n.id ? 2 : 1,
                transform: "translateX(-50%)",
                background: `linear-gradient(to bottom, transparent, ${n.color}, transparent)`,
                transition: "width 0.3s",
              }} />
              {active === n.id && <NadiParticles color={n.color} count={5} duration={3.5} />}
              {/* Central orb */}
              <div style={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: active === n.id ? 48 : 36,
                height: active === n.id ? 48 : 36,
                borderRadius: "50%",
                border: `1.5px solid ${n.color}`,
                background: active === n.id ? `radial-gradient(circle, ${n.color}30, transparent)` : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: active === n.id ? 20 : 16,
                color: n.color,
                animation: active === n.id ? "orb-float 3s ease-in-out infinite" : "none",
                transition: "all 0.3s",
              }}>
                {n.symbol}
              </div>
            </div>

            {/* Nadi title */}
            <div className="text-center" style={{ marginBottom: 14 }}>
              <p style={{ fontSize: 24, fontWeight: 300, color: active === n.id ? n.color : "#3d3830", marginBottom: 2, transition: "color 0.3s" }}>
                {n.name}
              </p>
              <p style={{ fontSize: 20, color: active === n.id ? n.color : "#b8892a", fontStyle: "italic", marginBottom: 4, opacity: 0.8 }}>
                {n.sanskrit}
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, color: "#9a8c7a", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                {n.sub}
              </p>
            </div>

            {/* Divider */}
            <div style={{ width: 32, height: 1, background: `${n.color}60`, margin: "0 auto 14px" }} />

            {/* Description */}
            {active === n.id && (
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12.5, color: "#6a6058", lineHeight: 1.85, textAlign: "center", marginBottom: 16, animation: "reveal 0.3s ease" }}>
                {n.desc}
              </p>
            )}

            {/* Qualities */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
              {n.qualities.map(q => (
                <span key={q} style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: 10,
                  color: active === n.id ? n.color : "#9a8c7a",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "3px 8px",
                  border: `1px solid ${active === n.id ? n.color + "50" : "rgba(184,137,42,0.15)"}`,
                  borderRadius: 1,
                  transition: "all 0.3s",
                }}>
                  {q}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom teaching */}
      <div className="text-center mt-10 relative z-10" style={{ maxWidth: 620 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12, justifyContent: "center" }}>
          <div style={{ flex: 1, height: 1, background: "rgba(184,137,42,0.2)" }} />
          <span style={{ color: "#b8892a", fontSize: 12 }}>✦</span>
          <div style={{ flex: 1, height: 1, background: "rgba(184,137,42,0.2)" }} />
        </div>
        <p style={{ fontSize: 19, fontStyle: "italic", color: "#6a6058", lineHeight: 1.9 }}>
          "When Kundalini awakens through Shaktipat, she ascends through the Sushumna,<br />
          dissolving all impurities, illuminating every centre."
        </p>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "#b8892a", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 10 }}>
          — Mahayogi Siddhababa
        </p>
      </div>
    </div>
  );
}
