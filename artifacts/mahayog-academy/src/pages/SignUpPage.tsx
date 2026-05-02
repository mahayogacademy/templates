import { useState } from "react";
import { Link } from "wouter";
import { Eye, EyeOff } from "lucide-react";

const b = import.meta.env.BASE_URL;

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-8">

      {/* ── Background ── */}
      <img
        src={`${b}images/academy-hero.png`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, rgba(20,10,4,0.55) 0%, rgba(44,26,8,0.72) 100%)" }}
      />

      {/* ── Card ── */}
      <div
        className="relative z-10 w-full max-w-[420px] mx-4 rounded-2xl overflow-hidden"
        style={{
          background: "rgba(250, 249, 246, 0.97)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(184,137,42,0.15)",
        }}
      >
        {/* Gold top bar */}
        <div className="h-1" style={{ background: "linear-gradient(90deg, #b8892a, #e2b55a, #b8892a)" }} />

        <div className="px-8 py-9">

          {/* Logo + Brand */}
          <Link href="/">
            <span className="flex items-center gap-3 cursor-pointer mb-8 group">
              <img
                src={`${b}images/logo.png`}
                alt="Mahayogi Siddhababa Spiritual Academy"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.1 }}>
                <span className="block text-sm font-semibold group-hover:text-[#b8892a] transition-colors" style={{ color: "#2c1a08", letterSpacing: "0.04em" }}>
                  Mahayogi Siddhababa
                </span>
                <span className="block text-xs tracking-[0.12em]" style={{ color: "#b8892a" }}>
                  SPIRITUAL ACADEMY
                </span>
              </span>
            </span>
          </Link>

          {/* Heading */}
          <div className="mb-7">
            <h1
              className="text-3xl font-semibold"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2c1a08" }}
            >
              Join the Academy
            </h1>
            <p className="mt-1 text-sm" style={{ color: "#7a6252", fontFamily: "'Inter', sans-serif" }}>
              Begin your journey of inner awakening
            </p>
          </div>

          {/* Google button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-2.5 rounded-lg text-sm font-medium border transition-all mb-5"
            style={{ border: "1px solid #d4c4b0", color: "#2c1a08", background: "#ffffff", fontFamily: "'Inter', sans-serif" }}
            onMouseOver={(e) => { e.currentTarget.style.background = "#fdf6ec"; e.currentTarget.style.borderColor = "#b8892a"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.borderColor = "#d4c4b0"; }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.2045C17.64 8.5663 17.5827 7.9527 17.4764 7.3636H9V10.845H13.8436C13.635 11.97 13.0009 12.9231 12.0477 13.5613V15.8195H14.9564C16.6582 14.2527 17.64 11.9454 17.64 9.2045Z" fill="#4285F4"/>
              <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5613C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z" fill="#34A853"/>
              <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.5932 3.68182 9C3.68182 8.4068 3.78409 7.83 3.96409 7.29V4.9582H0.957275C0.347727 6.1732 0 7.5477 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z" fill="#FBBC05"/>
              <path d="M9 3.5795C10.3214 3.5795 11.5077 4.0336 12.4405 4.9255L15.0218 2.3441C13.4632 0.8918 11.4259 0 9 0C5.48182 0 2.43818 2.0168 0.957275 4.9582L3.96409 7.29C4.67182 5.1627 6.65591 3.5795 9 3.5795Z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px" style={{ background: "#e8dece" }} />
            <span className="text-xs tracking-widest" style={{ color: "#b0a090", fontFamily: "'Inter', sans-serif" }}>or</span>
            <div className="flex-1 h-px" style={{ background: "#e8dece" }} />
          </div>

          {/* Form */}
          <div className="flex flex-col gap-3.5">
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-xs font-medium mb-1.5 tracking-wide" style={{ color: "#5a5248", fontFamily: "'Inter', sans-serif" }}>
                  First name
                </label>
                <input
                  type="text"
                  placeholder="Arjun"
                  autoComplete="given-name"
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-all"
                  style={{ background: "#faf9f6", border: "1px solid #d4c4b0", color: "#2c1a08", fontFamily: "'Inter', sans-serif" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#b8892a"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(184,137,42,0.1)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "#d4c4b0"; e.currentTarget.style.boxShadow = "none"; }}
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-medium mb-1.5 tracking-wide" style={{ color: "#5a5248", fontFamily: "'Inter', sans-serif" }}>
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Sharma"
                  autoComplete="family-name"
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-all"
                  style={{ background: "#faf9f6", border: "1px solid #d4c4b0", color: "#2c1a08", fontFamily: "'Inter', sans-serif" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#b8892a"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(184,137,42,0.1)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "#d4c4b0"; e.currentTarget.style.boxShadow = "none"; }}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium mb-1.5 tracking-wide" style={{ color: "#5a5248", fontFamily: "'Inter', sans-serif" }}>
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full px-3.5 py-2.5 rounded-lg text-sm border outline-none transition-all"
                style={{ background: "#faf9f6", border: "1px solid #d4c4b0", color: "#2c1a08", fontFamily: "'Inter', sans-serif" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#b8892a"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(184,137,42,0.1)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "#d4c4b0"; e.currentTarget.style.boxShadow = "none"; }}
              />
            </div>

            <div>
              <label className="block text-xs font-medium mb-1.5 tracking-wide" style={{ color: "#5a5248", fontFamily: "'Inter', sans-serif" }}>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimum 8 characters"
                  autoComplete="new-password"
                  className="w-full px-3.5 py-2.5 pr-10 rounded-lg text-sm border outline-none transition-all"
                  style={{ background: "#faf9f6", border: "1px solid #d4c4b0", color: "#2c1a08", fontFamily: "'Inter', sans-serif" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#b8892a"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(184,137,42,0.1)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "#d4c4b0"; e.currentTarget.style.boxShadow = "none"; }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: "#9a8070" }}
                >
                  {showPassword ? <EyeOff size={15} strokeWidth={1.5} /> : <Eye size={15} strokeWidth={1.5} />}
                </button>
              </div>
            </div>
          </div>

          {/* Create Account button */}
          <button
            type="button"
            className="w-full py-2.5 mt-5 rounded-lg text-white text-sm font-medium tracking-wide transition-all"
            style={{ background: "#b8892a", fontFamily: "'Inter', sans-serif", boxShadow: "0 4px 14px rgba(184,137,42,0.35)" }}
            onMouseOver={(e) => { e.currentTarget.style.background = "#9d7422"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(184,137,42,0.45)"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "#b8892a"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(184,137,42,0.35)"; }}
          >
            Create Account
          </button>

          {/* Terms */}
          <p className="mt-3 text-center text-xs leading-relaxed" style={{ color: "#9a8070", fontFamily: "'Inter', sans-serif" }}>
            By creating an account you agree to our{" "}
            <span className="underline cursor-pointer" style={{ color: "#b8892a" }}>Terms</span>
            {" & "}
            <span className="underline cursor-pointer" style={{ color: "#b8892a" }}>Privacy Policy</span>
          </p>

          {/* Footer */}
          <p className="mt-5 text-center text-sm" style={{ color: "#7a6252", fontFamily: "'Inter', sans-serif" }}>
            Already have an account?{" "}
            <Link href="/sign-in">
              <span className="font-medium cursor-pointer" style={{ color: "#b8892a" }}>
                Sign in
              </span>
            </Link>
          </p>
        </div>
      </div>

      {/* Bottom attribution */}
      <div className="absolute bottom-6 left-0 right-0 text-center z-10">
        <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,240,210,0.5)", fontFamily: "'Inter', sans-serif" }}>
          Mahayogi Siddhababa Spiritual Academy · Nepal
        </p>
      </div>

    </div>
  );
}
