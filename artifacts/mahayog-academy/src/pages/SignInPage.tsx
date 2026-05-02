import { useState } from "react";
import { Link } from "wouter";
import { Eye, EyeOff, Mail, Phone } from "lucide-react";

const b = import.meta.env.BASE_URL;

const COUNTRIES = [
  { code: "+1",   flag: "🇺🇸", name: "US" },
  { code: "+44",  flag: "🇬🇧", name: "UK" },
  { code: "+91",  flag: "🇮🇳", name: "IN" },
  { code: "+977", flag: "🇳🇵", name: "NP" },
  { code: "+61",  flag: "🇦🇺", name: "AU" },
  { code: "+49",  flag: "🇩🇪", name: "DE" },
  { code: "+33",  flag: "🇫🇷", name: "FR" },
  { code: "+81",  flag: "🇯🇵", name: "JP" },
  { code: "+86",  flag: "🇨🇳", name: "CN" },
  { code: "+55",  flag: "🇧🇷", name: "BR" },
  { code: "+27",  flag: "🇿🇦", name: "ZA" },
  { code: "+971", flag: "🇦🇪", name: "AE" },
];

const inputStyle = {
  background: "#faf9f6",
  border: "1px solid #d4c4b0",
  color: "#2c1a08",
  fontFamily: "'Inter', sans-serif",
};

function focusStyle(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = "#b8892a";
  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(184,137,42,0.1)";
}
function blurStyle(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = "#d4c4b0";
  e.currentTarget.style.boxShadow = "none";
}

function detectNepal(): boolean {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return tz === "Asia/Kathmandu";
  } catch {
    return false;
  }
}

export default function SignInPage() {
  const isNepal = detectNepal();
  const [tab, setTab] = useState<"email" | "phone">(isNepal ? "phone" : "email");
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState(isNepal ? "+977" : "+1");

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Back link ── */}
      <Link href="/">
        <span
          className="absolute top-5 left-6 z-20 flex items-center gap-2 text-sm cursor-pointer group transition-opacity opacity-70 hover:opacity-100"
          style={{ color: "rgba(255,240,210,0.9)", fontFamily: "'Inter', sans-serif" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to site
        </span>
      </Link>

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
        className="relative z-10 w-full max-w-[540px] mx-4 rounded-2xl overflow-hidden"
        style={{
          background: "rgba(250, 249, 246, 0.97)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(184,137,42,0.15)",
        }}
      >
        {/* Gold top bar */}
        <div className="h-1" style={{ background: "linear-gradient(90deg, #b8892a, #e2b55a, #b8892a)" }} />

        <div className="px-10 py-10">

          {/* Logo + Brand */}
          <Link href="/">
            <span className="flex items-center gap-3 cursor-pointer mb-8 group">
              <img
                src={`${b}images/logo.png`}
                alt="Mahayogi Siddhababa Spiritual Academy"
                className="w-12 h-12 rounded-full object-cover"
              />
              <span style={{ lineHeight: 1.15 }}>
                <span className="block group-hover:text-[#7a5518] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 500, color: "#2c1a08", letterSpacing: "0.03em" }}>
                  Mahayogi Siddhababa
                </span>
                <span className="block" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.62rem", fontWeight: 600, color: "#b8892a", letterSpacing: "0.16em", textTransform: "uppercase", marginTop: "3px" }}>
                  Spiritual Academy
                </span>
              </span>
            </span>
          </Link>

          {/* Heading */}
          <div className="mb-7">
            <h1
              className="text-4xl font-semibold"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2c1a08" }}
            >
              Welcome back
            </h1>
            <p className="mt-1.5 text-base" style={{ color: "#7a6252", fontFamily: "'Inter', sans-serif" }}>
              Sign in to continue your journey
            </p>
          </div>

          {/* Google button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl text-base font-medium border transition-all mb-5"
            style={{ border: "1px solid #d4c4b0", color: "#2c1a08", background: "#ffffff", fontFamily: "'Inter', sans-serif" }}
            onMouseOver={(e) => { e.currentTarget.style.background = "#fdf6ec"; e.currentTarget.style.borderColor = "#b8892a"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.borderColor = "#d4c4b0"; }}
          >
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
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
            <span className="text-sm tracking-widest" style={{ color: "#b0a090", fontFamily: "'Inter', sans-serif" }}>or</span>
            <div className="flex-1 h-px" style={{ background: "#e8dece" }} />
          </div>

          {/* ── Tab toggle: Email / Phone ── */}
          <div
            className="flex rounded-xl p-1 mb-6"
            style={{ background: "#f0ebe2", fontFamily: "'Inter', sans-serif" }}
          >
            <button
              type="button"
              onClick={() => setTab("email")}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all"
              style={{
                background: tab === "email" ? "#ffffff" : "transparent",
                color: tab === "email" ? "#2c1a08" : "#9a8070",
                boxShadow: tab === "email" ? "0 1px 4px rgba(0,0,0,0.10)" : "none",
              }}
            >
              <Mail size={15} strokeWidth={1.8} />
              Email
            </button>
            <button
              type="button"
              onClick={() => setTab("phone")}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all"
              style={{
                background: tab === "phone" ? "#ffffff" : "transparent",
                color: tab === "phone" ? "#2c1a08" : "#9a8070",
                boxShadow: tab === "phone" ? "0 1px 4px rgba(0,0,0,0.10)" : "none",
              }}
            >
              <Phone size={15} strokeWidth={1.8} />
              Phone number
            </button>
          </div>

          {/* ── Email form ── */}
          {tab === "email" && (
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium mb-2 tracking-wide" style={{ color: "#5a5248", fontFamily: "'Inter', sans-serif" }}>
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full px-4 py-3.5 rounded-xl text-base border outline-none transition-all"
                  style={inputStyle}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium tracking-wide" style={{ color: "#5a5248", fontFamily: "'Inter', sans-serif" }}>
                    Password
                  </label>
                  <button type="button" className="text-sm" style={{ color: "#b8892a", fontFamily: "'Inter', sans-serif" }}>
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="w-full px-4 py-3.5 pr-12 rounded-xl text-base border outline-none transition-all"
                    style={inputStyle}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    style={{ color: "#9a8070" }}
                  >
                    {showPassword ? <EyeOff size={18} strokeWidth={1.5} /> : <Eye size={18} strokeWidth={1.5} />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── Phone form ── */}
          {tab === "phone" && (
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium mb-2 tracking-wide" style={{ color: "#5a5248", fontFamily: "'Inter', sans-serif" }}>
                  Phone number
                </label>
                <div className="flex gap-2">
                  {/* Country code */}
                  <div className="relative">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="appearance-none pl-3 pr-7 py-3.5 rounded-xl text-base border outline-none transition-all cursor-pointer"
                      style={{ ...inputStyle, minWidth: "90px" }}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    >
                      {COUNTRIES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                    <svg className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 4l4 4 4-4" stroke="#9a8070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {/* Phone number */}
                  <input
                    type="tel"
                    placeholder="98X XXX XXXX"
                    autoComplete="tel-national"
                    className="flex-1 px-4 py-3.5 rounded-xl text-base border outline-none transition-all"
                    style={inputStyle}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                </div>
              </div>

              {/* OTP hint */}
              <div
                className="flex items-start gap-3 rounded-xl px-4 py-3"
                style={{ background: "#fdf6ec", border: "1px solid #e8d8b8" }}
              >
                <span className="text-lg mt-0.5">📱</span>
                <p className="text-sm leading-relaxed" style={{ color: "#7a5c28", fontFamily: "'Inter', sans-serif" }}>
                  We'll send a one-time verification code to this number. Standard SMS rates may apply.
                </p>
              </div>
            </div>
          )}

          {/* CTA button */}
          <button
            type="button"
            className="w-full py-3.5 mt-6 rounded-xl text-white text-base font-medium tracking-wide transition-all"
            style={{ background: "#b8892a", fontFamily: "'Inter', sans-serif", boxShadow: "0 4px 14px rgba(184,137,42,0.35)" }}
            onMouseOver={(e) => { e.currentTarget.style.background = "#9d7422"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(184,137,42,0.45)"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "#b8892a"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(184,137,42,0.35)"; }}
          >
            {tab === "phone" ? "Send Verification Code" : "Sign In"}
          </button>

          {/* Footer */}
          <p className="mt-7 text-center text-base" style={{ color: "#7a6252", fontFamily: "'Inter', sans-serif" }}>
            New to the Academy?{" "}
            <Link href="/sign-up">
              <span className="font-medium cursor-pointer" style={{ color: "#b8892a" }}>
                Create an account
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
