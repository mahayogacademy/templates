import { useState, useRef } from "react";
import { Link } from "wouter";
import { ChevronDown, UserCircle2, LogOut } from "lucide-react";
import { useUser, useClerk, Show } from "@clerk/react";

const EXPLORE = [
  { label: "About the Academy",  href: "/about" },
  { label: "Ashram & Centers",   href: "/ashram" },
  { label: "Projects",           href: "/projects" },
  { label: "Founder Guru",       href: "/founder-guru" },
  { label: "Lineage",            href: "/lineage" },
];

const COURSES = [
  { label: "Himalayan Siddha Mahayog Meditation", href: "/meditation" },
  { label: "Vedanta Philosophy Course",           href: "/vedanta" },
  { label: "Gurukul",                             href: "/gurukul" },
];

const EXPERIENCE = [
  { label: "Ashram Life",              href: "/ashram" },
  { label: "Guru Darshan",             href: "/guru-darshan" },
  { label: "Events",                   href: "/events" },
  { label: "Volunteer",                href: "/volunteer" },
  { label: "Custom Talks & Workshops", href: "/custom-talks" },
];

type MenuKey = "explore" | "courses" | "experience" | "user" | null;

function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="absolute top-full left-0 pt-2 min-w-[220px] z-50">
      <div className="bg-white/98 backdrop-blur-sm border border-[#e8dece] rounded-xl shadow-xl shadow-[#b8892a]/8 overflow-hidden py-2">
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            <span className="block px-5 py-2.5 text-sm text-[#5a5248] hover:bg-[#eddfc8] hover:text-[#7a5518] transition-colors duration-150 cursor-pointer tracking-wide font-medium">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function UserMenu() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const [open, setOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

  function enter() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  }
  function leave() {
    timerRef.current = setTimeout(() => setOpen(false), 150);
  }

  const displayName = user?.firstName || user?.emailAddresses[0]?.emailAddress?.split("@")[0] || "Account";

  return (
    <div className="relative ml-2" onMouseEnter={enter} onMouseLeave={leave}>
      <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-[#b8892a] border border-[#b8892a]/40 hover:border-[#7a5518] hover:text-[#7a5518] hover:bg-[#eddfc8] transition-colors tracking-wide rounded-full cursor-pointer">
        {user?.imageUrl ? (
          <img src={user.imageUrl} alt="" className="w-5 h-5 rounded-full object-cover" />
        ) : (
          <UserCircle2 className="w-4 h-4" strokeWidth={1.5} />
        )}
        <span className="max-w-[100px] truncate">{displayName}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} strokeWidth={1.5} />
      </button>
      {open && (
        <div onMouseEnter={enter} onMouseLeave={leave} className="absolute top-full right-0 pt-2 min-w-[180px] z-50">
          <div className="bg-white/98 backdrop-blur-sm border border-[#e8dece] rounded-xl shadow-xl shadow-[#b8892a]/8 overflow-hidden py-2">
            <div className="px-5 py-2.5 border-b border-[#e8dece] mb-1">
              <p className="text-xs text-[#9a8070] tracking-wide">Signed in as</p>
              <p className="text-sm font-medium text-[#2c1a08] truncate max-w-[140px]">{displayName}</p>
            </div>
            <button
              onClick={() => signOut({ redirectUrl: `${window.location.origin}${basePath}/` })}
              className="w-full flex items-center gap-2 px-5 py-2.5 text-sm text-[#5a5248] hover:bg-[#eddfc8] hover:text-[#7a5518] transition-colors duration-150 cursor-pointer tracking-wide font-medium"
            >
              <LogOut className="w-3.5 h-3.5" strokeWidth={1.5} />
              Sign out
            </button>
          </div>
        </div>
      )}
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
            <span className="text-[#b8892a] group-hover:text-[#7a5518] transition-colors" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.15 }}>
              <span className="block text-[15px] font-semibold tracking-tight" style={{ color: "#2c1a08" }}>Mahayogi Siddhababa</span>
              <span className="block text-[11px] font-medium tracking-[0.18em] uppercase" style={{ color: "#b8892a", marginTop: "1px" }}>Spiritual Academy</span>
            </span>
          </span>
        </Link>

        {/* ── Menu ── */}
        <div className="flex items-center">

          {/* Explore */}
          <div className="relative" onMouseEnter={() => enter("explore")} onMouseLeave={leave}>
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-[#5a5248] hover:text-[#7a5518] hover:bg-[#eddfc8] transition-colors tracking-wide rounded-lg">
              Explore
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open === "explore" ? "rotate-180" : ""}`} strokeWidth={1.5} />
            </button>
            {open === "explore" && (
              <div onMouseEnter={() => enter("explore")} onMouseLeave={leave}>
                <DropdownMenu items={EXPLORE} />
              </div>
            )}
          </div>

          {/* Courses */}
          <div className="relative" onMouseEnter={() => enter("courses")} onMouseLeave={leave}>
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-[#5a5248] hover:text-[#7a5518] hover:bg-[#eddfc8] transition-colors tracking-wide rounded-lg">
              Courses
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open === "courses" ? "rotate-180" : ""}`} strokeWidth={1.5} />
            </button>
            {open === "courses" && (
              <div onMouseEnter={() => enter("courses")} onMouseLeave={leave}>
                <DropdownMenu items={COURSES} />
              </div>
            )}
          </div>

          {/* Experience */}
          <div className="relative" onMouseEnter={() => enter("experience")} onMouseLeave={leave}>
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-[#5a5248] hover:text-[#7a5518] hover:bg-[#eddfc8] transition-colors tracking-wide rounded-lg">
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
            <span className="px-4 py-2 text-sm text-[#5a5248] hover:text-[#7a5518] hover:bg-[#eddfc8] transition-colors tracking-wide rounded-lg cursor-pointer">
              Teachings
            </span>
          </Link>

          <Link href="/contact">
            <span className="px-4 py-2 text-sm text-[#5a5248] hover:text-[#7a5518] hover:bg-[#eddfc8] transition-colors tracking-wide rounded-lg cursor-pointer">
              Contact
            </span>
          </Link>

          {/* Auth — Sign in / User menu */}
          <Show when="signed-out">
            <Link href="/sign-in">
              <span className="ml-2 flex items-center gap-1.5 px-4 py-2 text-sm text-[#5a5248] hover:text-[#7a5518] hover:bg-[#eddfc8] transition-colors tracking-wide rounded-lg cursor-pointer">
                <UserCircle2 className="w-4 h-4" strokeWidth={1.5} />
                Log in
              </span>
            </Link>
          </Show>

          <Show when="signed-in">
            <UserMenu />
          </Show>

          {/* Join CTA */}
          <Link href="/register">
            <span className="ml-1 px-5 py-2 text-sm border border-[#b8892a] text-[#b8892a] rounded-full hover:bg-[#9d7422] hover:border-[#9d7422] hover:text-white transition-colors duration-200 tracking-wide font-medium cursor-pointer">
              Join
            </span>
          </Link>

          {/* Donate CTA */}
          <Link href="/donate">
            <span className="ml-2 px-5 py-2 text-sm bg-[#b8892a] text-white rounded-full hover:bg-[#7a5518] transition-colors tracking-wide cursor-pointer">
              Donate
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
}
