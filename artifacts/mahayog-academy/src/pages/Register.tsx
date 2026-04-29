import Nav from "@/components/Nav";
import EnrolmentForm from "@/components/EnrolmentForm";
import { Link, useSearch } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Register() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const forParam = params.get("for");
  const program = forParam === "vedanta" ? "vedanta" : "meditation";
  const isVedanta = program === "vedanta";

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Nav />

      {/* ── HEADER ── */}
      <section
        className="pt-28 pb-16 px-6 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #2e1405 0%, #5a2e04 60%, #7a4a08 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #e8c56a 0%, transparent 50%), radial-gradient(circle at 80% 50%, #b8892a 0%, transparent 50%)"
        }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <Link
            href={isVedanta ? "/vedanta" : "/meditation"}
            className="inline-flex items-center gap-2 text-[#e8c56a]/70 hover:text-[#e8c56a] text-sm tracking-wide transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            {isVedanta ? "Back to Vedanta Course" : "Back to Meditation"}
          </Link>

          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#e8c56a]/50" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/50" />
          </div>

          <span className="uppercase tracking-[0.25em] text-xs text-[#e8c56a]/60 font-medium">
            {isVedanta ? "Enrolment" : "Registration"}
          </span>
          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-white mt-2 leading-tight">
            {isVedanta ? "Vedanta Course Enrolment" : "Meditation Registration"}
          </h1>
          <p className="text-sm text-[#f0e4c8]/70 mt-3 max-w-md mx-auto leading-relaxed">
            {isVedanta
              ? "Complete the form below to enrol in the Vedanta Philosophy Course."
              : "Begin your journey into Himalayan Siddha Mahāyog Meditation."}
          </p>
        </div>
      </section>

      {/* ── FORM ── */}
      <section
        className="py-16 px-6"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #f0a832 0%, #d4821a 45%, #a85c10 100%)" }}
      >
        <EnrolmentForm program={program} />
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6 border-t border-[#e8dece] bg-[#f5ede0]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-['Cormorant_Garamond'] text-lg font-medium text-[#b8892a]">
            Mahayogi Siddhababa Spiritual Academy
          </span>
          <p className="text-xs text-[#7a5a30]">© {new Date().getFullYear()} Mahayogi Siddhababa Spiritual Academy · Nepal</p>
        </div>
      </footer>
    </div>
  );
}
