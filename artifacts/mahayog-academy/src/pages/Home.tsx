import Nav from "@/components/Nav";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#faf9f6] text-[#3d3830] min-h-screen" style={{ scrollBehavior: "smooth" }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative flex items-center justify-center" style={{ minHeight: "calc(100vh - 64px)" }}>
        <img
          src={`${import.meta.env.BASE_URL}images/academy-hero.png`}
          alt="Himalayan landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/65 via-[#2c1a08]/45 to-[#faf9f6]" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-14 bg-[#e8c56a]/80" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/>
            </svg>
            <div className="h-px w-14 bg-[#e8c56a]/80" />
          </div>

          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light text-white leading-tight mb-4 tracking-wide">
            Mahayogi Siddhababa<br/>Spiritual Academy
          </h1>
          <p className="text-base md:text-lg text-[#f0e4c8] tracking-[0.2em] uppercase font-light mb-10">
            Ancient Wisdom · Holistic Living · Inner Awakening
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/about">
              <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-7 py-3 rounded-full tracking-wider transition-colors duration-200 cursor-pointer">
                About the Academy
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </Link>
            <Link href="/meditation">
              <span className="inline-flex items-center gap-2 border border-white/60 hover:border-[#e8c56a] text-white hover:text-[#e8c56a] text-sm px-7 py-3 rounded-full tracking-wider transition-colors duration-200 cursor-pointer">
                Explore Mahayog
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── BRIEF INTRO ── */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#d4a843]/60" />
            <span className="uppercase tracking-[0.3em] text-xs text-[#b8892a] font-medium">Nepal</span>
            <div className="h-px w-8 bg-[#d4a843]/60" />
          </div>
          <p className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-light text-[#4a3f34] leading-relaxed">
            A not-for-profit, volunteer-run academy preserving and sharing authentic Vedic wisdom for holistic well-being — body, mind, and spirit.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6 border-t border-[#e8dece] bg-[#f5ede0]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-['Cormorant_Garamond'] text-lg font-medium text-[#b8892a]">
            Mahayogi Siddhababa Spiritual Academy
          </span>
          <p className="text-xs text-[#9a8f84]">A not-for-profit, volunteer-run organization — Nepal</p>
        </div>
      </footer>
    </div>
  );
}
