import { useState, useRef } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";

const EXPLORE = [
  { label: "About the Academy",  href: "/about" },
  { label: "Ashram & Centers",   href: "/ashram" },
  { label: "Projects",           href: "/projects" },
  { label: "Founder Guru",       href: "/founder-guru" },
  { label: "Lineage",            href: "/lineage" },
];

const EXPERIENCE = [
  { label: "Himalayan Siddha Mahayog Meditation", href: "/meditation" },
  { label: "Vedanta Philosophy Course",           href: "/vedanta" },
  { label: "Ashram Life",                         href: "/ashram" },
  { label: "Guru Darshan",                        href: "/guru-darshan" },
  { label: "Events",                              href: "/events" },
  { label: "Gurukul",                             href: "/gurukul" },
  { label: "Volunteer",                           href: "/volunteer" },
  { label: "Custom Talks & Workshops",            href: "/custom-talks" },
];

type MenuKey = "explore" | "experience" | null;

function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="absolute top-full left-0 pt-2 min-w-[220px] z-50">
      <div className="bg-white/98 backdrop-blur-sm border border-[#e8dece] rounded-xl shadow-xl shadow-[#b8892a]/8 overflow-hidden py-2">
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            <span className="block px-5 py-2.5 text-sm text-[#5a5248] hover:bg-[#fdf6ec] hover:text-[#b8892a] transition-colors duration-150 cursor-pointer tracking-wide">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState<MenuKey>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function enter(key: MenuKey) {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(key);
  }

  function leave() {
    timerRef.current = setTimeout(() => setOpen(null), 120);
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#faf9f6]/97 backdrop-blur-sm border-b border-[#e8dece]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* ── Logo ── */}
        <Link href="/">
          <span className="flex items-center gap-3 cursor-pointer group">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Mahayogi Siddhababa Spiritual Academy logo"
              className="h-10 w-10 rounded-full object-cover shrink-0"
            />
            <span className="font-['Cormorant_Garamond'] text-[#b8892a] tracking-wide group-hover:text-[#9d7422] transition-colors" style={{ lineHeight: 1.0 }}>
              <span className="block text-lg font-semibold">Mahayogi Siddhababa</span>
              <span className="block text-sm font-medium tracking-[0.12em] text-[#8a6518]" style={{ marginTop: "-4px" }}>Spiritual Academy</span>
            </span>
          </span>
        </Link>

        {/* ── Menu ── */}
        <div className="flex items-center">

          {/* Explore */}
          <div
            className="relative"
            onMouseEnter={() => enter("explore")}
            onMouseLeave={leave}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-[#5a5248] hover:text-[#b8892a] transition-colors tracking-wide rounded-lg hover:bg-[#fdf6ec]">
              Explore
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open === "explore" ? "rotate-180" : ""}`} strokeWidth={1.5} />
            </button>
            {open === "explore" && (
              <div onMouseEnter={() => enter("explore")} onMouseLeave={leave}>
                <DropdownMenu items={EXPLORE} />
              </div>
            )}
          </div>

          {/* Experience */}
          <div
            className="relative"
            onMouseEnter={() => enter("experience")}
            onMouseLeave={leave}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-[#5a5248] hover:text-[#b8892a] transition-colors tracking-wide rounded-lg hover:bg-[#fdf6ec]">
              Experience
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open === "experience" ? "rotate-180" : ""}`} strokeWidth={1.5} />
            </button>
            {open === "experience" && (
              <div onMouseEnter={() => enter("experience")} onMouseLeave={leave}>
                <DropdownMenu items={EXPERIENCE} />
              </div>
            )}
          </div>

          {/* Single-link items */}
          <Link href="/teachings">
            <span className="px-4 py-2 text-sm text-[#5a5248] hover:text-[#b8892a] transition-colors tracking-wide rounded-lg hover:bg-[#fdf6ec] cursor-pointer">
              Teachings
            </span>
          </Link>

          <Link href="/contact">
            <span className="px-4 py-2 text-sm text-[#5a5248] hover:text-[#b8892a] transition-colors tracking-wide rounded-lg hover:bg-[#fdf6ec] cursor-pointer">
              Contact
            </span>
          </Link>

          {/* Donate CTA */}
          <Link href="/donate">
            <span className="ml-2 px-5 py-2 text-sm bg-[#b8892a] text-white rounded-full hover:bg-[#9d7422] transition-colors tracking-wide cursor-pointer">
              Donate
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
}
