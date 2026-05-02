import { Link } from "wouter";

const b = import.meta.env.BASE_URL;

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── Left: Form Panel ── */}
      <div
        className="flex flex-col items-center justify-center flex-1 px-10 py-14 relative"
        style={{ background: "#faf9f6" }}
      >
        {/* Subtle dot pattern */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07]"
          style={{ zIndex: 0 }}
        >
          <defs>
            <pattern id="dots2" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" fill="#b8892a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots2)" />
        </svg>

        <div className="relative z-10 w-full max-w-[400px] flex flex-col items-center">

          {/* Logo */}
          <Link href="/">
            <span className="flex flex-col items-center gap-2 cursor-pointer mb-6">
              <img
                src={`${b}images/logo.png`}
                alt="Mahayogi Siddhababa Spiritual Academy"
                className="w-20 h-20 rounded-full object-cover ring-2 ring-[#b8892a]/30"
              />
            </span>
          </Link>

          {/* Heading */}
          <h1
            className="text-4xl font-semibold mb-2 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#b8892a" }}
          >
            Join the Academy
          </h1>
          <p className="text-sm mb-8 text-center" style={{ color: "#7a6252" }}>
            Create your free account to begin
          </p>

          {/* Form */}
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="First name"
                className="flex-1 px-4 py-3 rounded-lg text-sm border outline-none"
                style={{ background: "#ffffff", border: "1px solid #d4c4b0", color: "#2c1a08" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#b8892a")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#d4c4b0")}
              />
              <input
                type="text"
                placeholder="Last name"
                className="flex-1 px-4 py-3 rounded-lg text-sm border outline-none"
                style={{ background: "#ffffff", border: "1px solid #d4c4b0", color: "#2c1a08" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#b8892a")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#d4c4b0")}
              />
            </div>

            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-lg text-sm border outline-none"
              style={{ background: "#ffffff", border: "1px solid #d4c4b0", color: "#2c1a08" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#b8892a")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#d4c4b0")}
            />

            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-lg text-sm border outline-none"
              style={{ background: "#ffffff", border: "1px solid #d4c4b0", color: "#2c1a08" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#b8892a")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#d4c4b0")}
            />

            <button
              type="button"
              className="w-full py-3 rounded-lg text-white text-sm font-medium tracking-wide transition-colors"
              style={{ background: "#b8892a" }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#9d7422")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#b8892a")}
            >
              Create Account
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-1">
              <div className="flex-1 h-px" style={{ background: "#d4c4b0" }} />
              <span className="text-xs tracking-widest" style={{ color: "#9a8070" }}>or</span>
              <div className="flex-1 h-px" style={{ background: "#d4c4b0" }} />
            </div>

            {/* Google button */}
            <button
              type="button"
              className="w-full py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2.5 border transition-colors"
              style={{ border: "1px solid #d4c4b0", color: "#2c1a08", background: "#ffffff" }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#fdf6ec")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#ffffff")}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.64 9.2045C17.64 8.5663 17.5827 7.9527 17.4764 7.3636H9V10.845H13.8436C13.635 11.97 13.0009 12.9231 12.0477 13.5613V15.8195H14.9564C16.6582 14.2527 17.64 11.9454 17.64 9.2045Z" fill="#4285F4"/>
                <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5613C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z" fill="#34A853"/>
                <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.5932 3.68182 9C3.68182 8.4068 3.78409 7.83 3.96409 7.29V4.9582H0.957275C0.347727 6.1732 0 7.5477 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z" fill="#FBBC05"/>
                <path d="M9 3.5795C10.3214 3.5795 11.5077 4.0336 12.4405 4.9255L15.0218 2.3441C13.4632 0.8918 11.4259 0 9 0C5.48182 0 2.43818 2.0168 0.957275 4.9582L3.96409 7.29C4.67182 5.1627 6.65591 3.5795 9 3.5795Z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Sign in link */}
          <p className="mt-8 text-sm" style={{ color: "#7a6252" }}>
            Already have an account?{" "}
            <Link href="/sign-in">
              <span className="font-medium cursor-pointer" style={{ color: "#b8892a" }}>
                Sign in
              </span>
            </Link>
          </p>
        </div>
      </div>

      {/* ── Right: Guru Panel ── */}
      <div
        className="hidden lg:flex flex-col flex-1 relative overflow-hidden"
        style={{ background: "linear-gradient(175deg, #c4722a 0%, #7a4010 100%)" }}
      >
        {/* Subtle dot texture */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Background Guru image — tinted */}
        <img
          src={`${b}images/siddhababa-portrait.jpg`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{ mixBlendMode: "luminosity", opacity: 0.55 }}
        />

        {/* Warm saffron overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(180,90,20,0.35) 0%, rgba(100,48,10,0.7) 100%)" }}
        />

        {/* Foreground Guru image */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingBottom: "220px" }}>
          <img
            src={`${b}images/siddhababa-portrait.jpg`}
            alt="Mahayogi Siddhababa"
            style={{ maxHeight: "70%", objectFit: "contain", filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.4))" }}
          />
        </div>

        {/* Quote card — pinned to bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(80, 35, 5, 0.72)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <span className="text-3xl leading-none" style={{ color: "rgba(255,205,100,0.8)", fontFamily: "serif" }}>"</span>
            <p
              className="leading-relaxed mt-1 italic"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "rgba(255,240,210,0.95)" }}
            >
              Begin the journey inward — where the eternal truth awaits,
              and the self merges with the infinite.
            </p>
            <p className="mt-3 text-xs tracking-widest uppercase" style={{ color: "rgba(255,200,120,0.75)" }}>
              — Mahayogi Siddhababa
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
