import { useState } from "react";
import Nav from "@/components/Nav";
import EnrolmentForm from "@/components/EnrolmentForm";
import { useSearch } from "wouter";

const b = import.meta.env.BASE_URL;

type Program = "meditation" | "vedanta";

const PROGRAMMES = [
  {
    id: "meditation" as Program,
    label: "Himalayan Siddha Mahayog Meditation",
    tag: "5-Day Initiation Workshop",
    desc: "Receive Shaktipat initiation and begin your journey into Himalayan Siddha Mahāyog Meditation.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" />
        <path d="M12 3C12 3 15 8 15 12C15 16 12 21 12 21" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <path d="M12 3C12 3 9 8 9 12C9 16 12 21 12 21" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "vedanta" as Program,
    label: "Vedanta Philosophy Course",
    tag: "267-Lecture Programme",
    desc: "Immerse yourself in the science of Self and Reality through the teachings of Vedanta.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
        <path d="M4 19V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M4 19h16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M8 7h8M8 10h8M8 13h5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Register() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const initial: Program = params.get("for") === "vedanta" ? "vedanta" : "meditation";
  const [program, setProgram] = useState<Program>(initial);

  const active = PROGRAMMES.find(p => p.id === program)!;

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[58vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={`${b}images/register-hero.png`}
          alt="Sacred ashram courtyard at sunrise"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/65 via-[#2c1a08]/45 to-[#faf9f6]" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#e8c56a]" />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/>
            </svg>
            <div className="h-px w-12 bg-[#e8c56a]" />
          </div>
          <span className="uppercase tracking-[0.25em] text-xs text-white font-medium [text-shadow:0_1px_6px_rgba(0,0,0,0.55)]">Programme Registration</span>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light text-white leading-none mt-2 mb-4 [text-shadow:0_2px_12px_rgba(0,0,0,0.35)]">
            Begin Your Journey
          </h1>
          <p className="text-base text-white/90 tracking-wide font-light [text-shadow:0_1px_6px_rgba(0,0,0,0.55)]">
            Choose the programme you wish to register for below.
          </p>
        </div>
      </section>

      {/* ── PROGRAMME PICKER ── */}
      <section className="px-6 pt-16 pb-10 bg-[#faf9f6]">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-[#b8892a] mb-10 font-medium">
            Select Your Path
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROGRAMMES.map(p => {
              const selected = program === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setProgram(p.id)}
                  className={`group relative text-center flex flex-col items-center p-10 rounded-3xl transition-all duration-300 ${
                    selected
                      ? "bg-[#f0e8d5] shadow-lg shadow-[#b8892a]/12"
                      : "bg-white border border-[#e8dece] hover:border-[#b8892a]/40 hover:shadow-md hover:shadow-[#b8892a]/08"
                  }`}
                >
                  {/* top accent bar */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full transition-all duration-300 ${
                    selected ? "w-16 bg-[#b8892a]" : "w-0 bg-[#b8892a]"
                  }`} />

                  {/* icon */}
                  <div className={`mb-5 transition-colors duration-300 ${selected ? "text-[#b8892a]" : "text-[#c8a868]/60 group-hover:text-[#b8892a]/70"}`}>
                    <div className="w-14 h-14 flex items-center justify-center">
                      {p.icon}
                    </div>
                  </div>

                  {/* tag */}
                  <span className={`text-[10px] uppercase tracking-[0.22em] font-medium mb-2 transition-colors duration-300 ${selected ? "text-[#b8892a]" : "text-[#b8892a]/60"}`}>
                    {p.tag}
                  </span>

                  {/* title */}
                  <p className={`font-['Cormorant_Garamond'] text-2xl font-semibold leading-snug mb-3 transition-colors duration-300 ${selected ? "text-[#2e1405]" : "text-[#5a3a18]"}`}>
                    {p.label}
                  </p>

                  {/* divider */}
                  <div className={`h-px w-10 mb-3 transition-colors duration-300 ${selected ? "bg-[#b8892a]/50" : "bg-[#e8dece]"}`} />

                  {/* description */}
                  <p className="text-sm text-[#7a5a30] leading-relaxed">{p.desc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section
        className="py-14 px-6"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #f0a832 0%, #d4821a 45%, #a85c10 100%)" }}
      >
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="uppercase tracking-[0.25em] text-xs text-[#5a2e04]/70 font-medium">
            {program === "vedanta" ? "Enrolment Form" : "Registration Form"}
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#2e1405] mt-1">
            {active.label}
          </h2>
        </div>
        <EnrolmentForm program={program} key={program} />
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
