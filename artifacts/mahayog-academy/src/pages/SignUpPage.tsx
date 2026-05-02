import { SignUp } from "@clerk/react";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex">
      <div
        className="hidden lg:flex flex-col justify-center px-16 flex-1 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #faf9f6 0%, #f0e8d5 100%)" }}
      >
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle at 30% 50%, #b8892a 1px, transparent 1px), radial-gradient(circle at 70% 80%, #b8892a 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        <div className="relative z-10 max-w-md">
          <div className="text-7xl mb-8 opacity-80" style={{ color: "#b8892a", fontFamily: "serif" }}>ॐ</div>
          <blockquote className="text-3xl leading-relaxed mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2c1a08" }}>
            "Begin the journey inward — where the eternal truth awaits."
          </blockquote>
          <p className="text-base tracking-widest uppercase" style={{ color: "#b8892a", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
            Mahayogi Siddhababa Spiritual Academy
          </p>
          <div className="mt-12 w-16 h-px" style={{ background: "#b8892a", opacity: 0.5 }} />
          <p className="mt-6 text-sm leading-relaxed" style={{ color: "#6b5a4e", fontFamily: "'Inter', sans-serif" }}>
            Join our growing community of seekers from around the world. Create your free account to receive teachings, updates, and sacred knowledge.
          </p>
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center flex-1 px-6 py-12"
        style={{ background: "#faf9f6" }}
      >
        <SignUp
          routing="path"
          path={`${basePath}/sign-up`}
          signInUrl={`${basePath}/sign-in`}
        />
      </div>
    </div>
  );
}
