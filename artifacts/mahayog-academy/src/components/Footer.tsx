import { Link } from "wouter";
import { MapPin } from "lucide-react";

const b = import.meta.env.BASE_URL;

const EXPLORE = [
  { label: "About the Academy",  href: "/about" },
  { label: "Founder Guru",       href: "/founder-guru" },
  { label: "Ashram & Centers",   href: "/ashram" },
  { label: "Lineage",            href: "/lineage" },
  { label: "Projects",           href: "/projects" },
];

const LEARN = [
  { label: "Mahayog Meditation", href: "/meditation" },
  { label: "Vedanta Course",     href: "/vedanta" },
  { label: "Gurukul",            href: "/gurukul" },
  { label: "Teachings",          href: "/teachings" },
  { label: "Volunteer",          href: "/volunteer" },
];

const CONNECT = [
  { label: "Events",             href: "/events" },
  { label: "Guru Darshan",       href: "/guru-darshan" },
  { label: "Custom Talks",       href: "/custom-talks" },
  { label: "Contact",            href: "/contact" },
  { label: "Donate",             href: "/donate" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e1208] text-[#c4b49a] pt-14 pb-10 px-6">
      {/* Decorative divider */}
      <div className="max-w-6xl mx-auto mb-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-[#3a2a1a]" />
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#b8892a" strokeWidth="1.5" fill="none"/>
        </svg>
        <div className="flex-1 h-px bg-[#3a2a1a]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <img src={`${b}images/logo.png`} alt="Academy logo" className="h-12 w-auto mb-4 opacity-90" />
            <p className="font-['Cormorant_Garamond'] text-xl font-light text-[#e8c56a] mb-3 leading-snug">
              Mahayogi Siddhababa<br />Spiritual Academy
            </p>
            <p className="text-sm text-[#9a8878] leading-relaxed max-w-xs">
              A not-for-profit, volunteer-run organization dedicated to Vedic wisdom, holistic living, and selfless service.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-5">Explore</p>
            <ul className="space-y-3">
              {EXPLORE.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <span className="text-sm text-[#9a8878] hover:text-[#e8c56a] cursor-pointer transition-colors">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn & Join */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-5">Learn & Join</p>
            <ul className="space-y-3">
              {LEARN.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <span className="text-sm text-[#9a8878] hover:text-[#e8c56a] cursor-pointer transition-colors">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-5">Connect</p>
            <ul className="space-y-3">
              {CONNECT.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <span className="text-sm text-[#9a8878] hover:text-[#e8c56a] cursor-pointer transition-colors">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#3a2a1a] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#6a5a4a]">© {new Date().getFullYear()} Mahayogi Siddhababa Spiritual Academy, Nepal. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#b8892a]" strokeWidth={1.5} />
            <p className="text-xs text-[#6a5a4a]">Barahachetra, Sunsari, Nepal</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
