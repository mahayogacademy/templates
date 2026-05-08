import { useState } from "react";

const chakras = [
  { name: "Sahasrara", english: "Crown", sanskrit: "सहस्रार", color: "#b06fc0", glow: "#d4a0e0", element: "Pure Consciousness", quality: "Liberation · Unity · Transcendence" },
  { name: "Ajna", english: "Third Eye", sanskrit: "आज्ञा", color: "#6c5ce7", glow: "#a29bfe", element: "Light", quality: "Intuition · Wisdom · Inner Vision" },
  { name: "Vishuddha", english: "Throat", sanskrit: "विशुद्ध", color: "#0984e3", glow: "#74b9ff", element: "Space (Akasha)", quality: "Expression · Truth · Purification" },
  { name: "Anahata", english: "Heart", sanskrit: "अनाहत", color: "#00b894", glow: "#55efc4", element: "Air (Vayu)", quality: "Love · Compassion · Healing" },
  { name: "Manipura", english: "Solar Plexus", sanskrit: "मणिपूर", color: "#e17055", glow: "#fab1a0", element: "Fire (Agni)", quality: "Will · Transformation · Power" },
  { name: "Svadhisthana", english: "Sacral", sanskrit: "स्वाधिष्ठान", color: "#e67e22", glow: "#f9ca24", element: "Water (Jala)", quality: "Creativity · Flow · Vitality" },
  { name: "Muladhara", english: "Root", sanskrit: "मूलाधार", color: "#d63031", glow: "#ff7675", element: "Earth (Prithvi)", quality: "Stability · Grounding · Survival" },
];

const nadis = [
  { id: "ida", label: "Ida Nadi", sub: "Lunar Channel · Left", color: "#74b9ff", desc: "The cooling, lunar energy channel flowing on the left side of the spine — governing the mind, intuition, and feminine principle." },
  { id: "sushumna", label: "Sushumna Nadi", sub: "Central Channel · Supreme", color: "#dfe6e9", desc: "The supreme central channel through which Kundalini rises during Mahayog — the path of ultimate liberation." },
  { id: "pingala", label: "Pingala Nadi", sub: "Solar Channel · Right", color: "#fdcb6e", desc: "The warming, solar energy channel flowing on the right side — governing vital force, action, and masculine principle." },
];

export default function Variant_A() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [nadiFocus, setNadiFocus] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#07080f] text-white flex flex-col items-center justify-center relative overflow-hidden"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400&display=swap');
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes flow-up {
          0% { transform: translateY(100%); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        @keyframes spine-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes float-in {
          from { opacity: 0; transform: translateX(12px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .chakra-orb {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .chakra-orb:hover {
          transform: scale(1.25);
        }
        .nadi-line {
          position: absolute;
          width: 2px;
          top: 0; bottom: 0;
          overflow: hidden;
        }
        .nadi-particle {
          position: absolute;
          width: 3px;
          height: 20px;
          border-radius: 99px;
          animation: flow-up 3s ease-in-out infinite;
        }
      `}</style>

      {/* Ambient background radials */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(108,92,231,0.08) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "50%", transform: "translateX(-50%)", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(209,102,0,0.07) 0%, transparent 70%)" }} />
      </div>

      {/* Heading */}
      <div className="text-center mb-12 relative z-10">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.35em", color: "#b8892a", textTransform: "uppercase", marginBottom: 12 }}>
          THE INNER COSMOS
        </p>
        <h2 style={{ fontSize: 42, fontWeight: 300, lineHeight: 1.15, color: "#f5f0ea", marginBottom: 8 }}>
          The Sacred Architecture Within
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#8a8070", letterSpacing: "0.05em" }}>
          Seven Energy Centers &nbsp;·&nbsp; 72,000 Channels &nbsp;·&nbsp; One Awakening
        </p>
      </div>

      {/* Main layout */}
      <div className="relative z-10 flex items-start gap-16" style={{ width: 900 }}>

        {/* Left nadi info */}
        <div style={{ width: 200, paddingTop: 60 }}>
          {nadis.map(n => (
            <div key={n.id}
              onMouseEnter={() => setNadiFocus(n.id)}
              onMouseLeave={() => setNadiFocus(null)}
              style={{
                marginBottom: 24, cursor: "default", padding: "12px 0",
                borderTop: `1px solid ${nadiFocus === n.id ? n.color + "60" : "rgba(255,255,255,0.06)"}`,
                transition: "border-color 0.3s"
              }}>
              <div style={{ width: 24, height: 2, background: n.color, marginBottom: 8, opacity: nadiFocus === n.id ? 1 : 0.5, transition: "opacity 0.3s" }} />
              <p style={{ fontSize: 13, color: n.color, marginBottom: 2, opacity: nadiFocus === n.id ? 1 : 0.6 }}>{n.label}</p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, color: "#6a6058", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: nadiFocus === n.id ? 8 : 0 }}>{n.sub}</p>
              {nadiFocus === n.id && (
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11.5, color: "#9a9088", lineHeight: 1.7, animation: "float-in 0.25s ease" }}>{n.desc}</p>
              )}
            </div>
          ))}
        </div>

        {/* Central spine */}
        <div style={{ width: 200, position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Nadi lines */}
          <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", transform: "translateX(-50%)", width: 120, pointerEvents: "none" }}>
            {/* Sushumna central */}
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, transform: "translateX(-50%)", background: "linear-gradient(to bottom, rgba(223,230,233,0.6), rgba(223,230,233,0.1))", animation: "spine-pulse 3s ease-in-out infinite" }}>
              {[0, 1, 2].map(i => (
                <div key={i} className="nadi-particle" style={{ background: "#dfe6e9", left: -1, animationDelay: `${i * 1}s`, animationDuration: "2.5s" }} />
              ))}
            </div>
            {/* Ida left */}
            <div style={{ position: "absolute", left: "25%", top: 0, bottom: 0, width: 1, background: "rgba(116,185,255,0.3)", animation: "spine-pulse 4s ease-in-out infinite 0.5s" }}>
              {[0, 1].map(i => (
                <div key={i} className="nadi-particle" style={{ background: "#74b9ff", left: -1, animationDelay: `${i * 1.4}s`, animationDuration: "3.2s" }} />
              ))}
            </div>
            {/* Pingala right */}
            <div style={{ position: "absolute", right: "25%", top: 0, bottom: 0, width: 1, background: "rgba(253,203,110,0.3)", animation: "spine-pulse 4s ease-in-out infinite 1s" }}>
              {[0, 1].map(i => (
                <div key={i} className="nadi-particle" style={{ background: "#fdcb6e", left: -1, animationDelay: `${i * 1.4 + 0.7}s`, animationDuration: "3.2s" }} />
              ))}
            </div>
          </div>

          {/* Chakra orbs */}
          {chakras.map((c, i) => (
            <div key={i}
              className="chakra-orb"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative", zIndex: 2,
                width: hovered === i ? 56 : 40,
                height: hovered === i ? 56 : 40,
                borderRadius: "50%",
                background: `radial-gradient(circle at 35% 35%, ${c.glow}, ${c.color})`,
                boxShadow: hovered === i
                  ? `0 0 30px ${c.glow}, 0 0 60px ${c.color}80`
                  : `0 0 12px ${c.color}60`,
                animation: `pulse-glow ${2.5 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
                cursor: "pointer",
                marginBottom: 32,
                transition: "width 0.25s, height 0.25s, box-shadow 0.25s",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
              {hovered === i && (
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 9, color: "rgba(255,255,255,0.9)", letterSpacing: "0.05em" }}>
                  {i + 1}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Right chakra info panel */}
        <div style={{ width: 340, paddingTop: 20 }}>
          {hovered !== null ? (
            <div style={{ animation: "float-in 0.2s ease" }}>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, color: "#b8892a", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: 8 }}>
                Chakra {7 - hovered} of 7
              </p>
              <h3 style={{ fontSize: 34, fontWeight: 300, color: chakras[hovered].glow, marginBottom: 2 }}>
                {chakras[hovered].name}
              </h3>
              <p style={{ fontSize: 18, fontStyle: "italic", color: "#9a9088", marginBottom: 4 }}>
                {chakras[hovered].english} Centre
              </p>
              <p style={{ fontSize: 22, color: chakras[hovered].color, marginBottom: 16, letterSpacing: "0.05em" }}>
                {chakras[hovered].sanskrit}
              </p>
              <div style={{ width: 40, height: 1, background: `${chakras[hovered].color}80`, marginBottom: 16 }} />
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#6a6058", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>
                Element
              </p>
              <p style={{ fontSize: 18, color: "#c9bfaf", marginBottom: 16 }}>{chakras[hovered].element}</p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#6a6058", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>
                Qualities
              </p>
              <p style={{ fontSize: 17, color: "#c9bfaf", lineHeight: 1.6 }}>{chakras[hovered].quality}</p>
            </div>
          ) : (
            <div style={{ opacity: 0.5 }}>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#6a6058", marginBottom: 20, letterSpacing: "0.05em", lineHeight: 1.8 }}>
                Hover over a chakra to explore its qualities, element, and Sanskrit name.
              </p>
              <p style={{ fontSize: 17, color: "#7a7068", lineHeight: 1.9, fontStyle: "italic" }}>
                "Within the human body lies a universe of energy — subtle, vast, and waiting to be awakened."
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center mt-14 relative z-10">
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#4a4438", letterSpacing: "0.1em", lineHeight: 2 }}>
          Through Shaktipat initiation, the dormant Kundalini rises through the Sushumna,<br />
          purifying all 72,000 nadis and illuminating each energy centre.
        </p>
      </div>
    </div>
  );
}
