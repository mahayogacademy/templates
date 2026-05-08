const BASE = "https://2b3d15cf-9158-4234-a9a3-b1b8d901a0fe-00-ahgkkruh79v5.spock.replit.dev/mahayog-academy/";

function GoldLine() {
  return (
    <div className="flex items-center justify-center gap-4 mb-7">
      <div className="h-px w-14" style={{ background: "rgba(232,197,106,0.8)" }} />
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z"
          stroke="#e8c56a" strokeWidth="1.2" fill="none" />
      </svg>
      <div className="h-px w-14" style={{ background: "rgba(232,197,106,0.8)" }} />
    </div>
  );
}

export function Compact() {
  return (
    <div style={{ background: "#faf9f6", color: "#3d3830", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>

      {/* Nav */}
      <nav style={{ height: 64, background: "rgba(26,15,5,0.96)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#e8c56a", fontFamily: "'Cormorant Garamond', serif", fontSize: 20, letterSpacing: "0.04em", fontWeight: 300 }}>
          Mahayogi Siddhababa Spiritual Academy
        </span>
      </nav>

      {/* ── COMPACT HERO (~55vh) ── */}
      <section style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", minHeight: "calc(55vh - 64px)" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={`${BASE}images/hero-nepal-landscape.png`} alt="" aria-hidden
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(26,15,5,0.55), rgba(26,15,5,0.60) 65%, #faf9f6)" }} />

        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <img src={`${BASE}images/dhanush-band.png`} alt="" aria-hidden style={{ height: 52, objectFit: "contain", filter: "invert(74%) sepia(45%) saturate(600%) hue-rotate(5deg)" }} />
          </div>

          <GoldLine />

          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 300, color: "white", lineHeight: 1.05, marginBottom: 12, letterSpacing: "0.04em" }}>
            Mahayogi Siddhababa<br />
            <span style={{ color: "#e8c56a" }}>Spiritual Academy</span>
          </h1>

          <p style={{ fontSize: 13, color: "#f0e4c8", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 300, marginBottom: 24 }}>
            Ancient Wisdom · Holistic Living · Inner Awakening
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ background: "#b8892a", color: "white", border: "none", padding: "10px 28px", borderRadius: 9999, fontSize: 13, letterSpacing: "0.1em", cursor: "pointer", boxShadow: "0 4px 20px rgba(184,137,42,0.35)" }}>
              Explore the Academy →
            </button>
            <button style={{ background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.5)", padding: "10px 28px", borderRadius: 9999, fontSize: 13, letterSpacing: "0.1em", cursor: "pointer" }}>
              Discover Mahayog
            </button>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
          <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, transparent, #e8c56a)", opacity: 0.6 }} />
        </div>
      </section>

      {/* ── SECTION BELOW (shows context) ── */}
      <div style={{ background: "radial-gradient(ellipse at 50% 20%, #f5ede0 0%, #faf9f6 65%)", padding: "64px 24px 80px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ height: 1, width: 40, background: "#b8892a" }} />
              <span style={{ color: "#b8892a", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Our Purpose</span>
              <div style={{ height: 1, width: 40, background: "#b8892a" }} />
            </div>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 300, color: "#3d3830", lineHeight: 1.15, marginBottom: 24 }}>
            A Living Sanctuary of<br />
            <span style={{ color: "#b8892a" }}>Himalayan Wisdom</span>
          </h2>
          <p style={{ fontSize: 15, color: "#6b6259", lineHeight: 1.85, marginBottom: 12 }}>
            We share the living science of Himalayan Siddha Mahayog Meditation — a complete, time-tested path for awakening consciousness, healing the body, and serving all beings.
          </p>
          <p style={{ fontSize: 13, color: "#9c8f84" }}>
            Guided by the direct experience and boundless grace of Mahayogi Siddhababa.
          </p>
        </div>
      </div>

    </div>
  );
}
