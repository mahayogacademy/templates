import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "wouter";
import { ChevronDown, UserCircle2, LogOut, Menu, X, Globe } from "lucide-react";
import { useUser, useClerk, Show } from "@clerk/react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "@/i18n";

type MenuItem = { i18nKey: string; href: string };

const EXPLORE: MenuItem[] = [
  { i18nKey: "nav.exploreItems.about",       href: "/about" },
  { i18nKey: "nav.exploreItems.ashram",      href: "/ashram" },
  { i18nKey: "nav.exploreItems.projects",    href: "/projects" },
  { i18nKey: "nav.exploreItems.founderGuru", href: "/founder-guru" },
  { i18nKey: "nav.exploreItems.lineage",     href: "/lineage" },
];

const COURSES: MenuItem[] = [
  { i18nKey: "nav.programItems.meditation", href: "/meditation" },
  { i18nKey: "nav.programItems.vedanta",    href: "/vedanta" },
  { i18nKey: "nav.programItems.gurukul",    href: "/gurukul" },
];

const EXPERIENCE: MenuItem[] = [
  { i18nKey: "nav.experienceItems.ashramLife",   href: "/ashram" },
  { i18nKey: "nav.experienceItems.guruDarshan",  href: "/guru-darshan" },
  { i18nKey: "nav.experienceItems.events",       href: "/events" },
  { i18nKey: "nav.experienceItems.volunteer",    href: "/volunteer" },
  { i18nKey: "nav.experienceItems.customTalks",  href: "/custom-talks" },
];

type MenuKey = "explore" | "courses" | "experience" | "user" | "lang" | null;

function DropdownMenu({ items }: { items: MenuItem[] }) {
  const { t } = useTranslation();
  return (
    <div className="absolute top-full left-0 pt-2 min-w-[220px] z-50">
      <div className="bg-white/98 backdrop-blur-sm border border-[#e8dece] rounded-xl shadow-xl shadow-[#b8892a]/8 overflow-hidden py-2">
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            <span className="block px-5 py-2.5 text-sm text-[#5a5248] hover:bg-[#eddfc8] hover:text-[#7a5518] transition-colors duration-150 cursor-pointer tracking-wide font-medium">
              {t(item.i18nKey)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function LanguageSwitcher({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "en").slice(0, 2);

  if (variant === "mobile") {
    return (
      <div className="flex items-center gap-2 flex-wrap">
        {SUPPORTED_LANGUAGES.map((l) => {
          const active = current === l.code;
          return (
            <button
              key={l.code}
              onClick={() => i18n.changeLanguage(l.code)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs tracking-wide border transition-colors cursor-pointer ${
                active
                  ? "bg-[#b8892a] text-white border-[#b8892a]"
                  : "bg-white text-[#5a5248] border-[#d4c4b0] hover:border-[#b8892a] hover:text-[#7a5518]"
              }`}
            >
              {l.nativeLabel}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 ml-2">
      {SUPPORTED_LANGUAGES.map((l) => {
        const active = current === l.code;
        return (
          <button
            key={l.code}
            onClick={() => i18n.changeLanguage(l.code)}
            aria-label={`Switch language to ${l.nativeLabel}`}
            className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors cursor-pointer min-w-[2.75rem] border ${
              active
                ? "bg-[#b8892a] text-white border-[#b8892a]"
                : "text-[#5a5248] border-[#d4c4b0]/60 hover:bg-[#eddfc8] hover:text-[#7a5518] hover:border-[#b8892a]"
            }`}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}

function UserMenu() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const { t } = useTranslation();
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

  const displayName = user?.firstName || user?.emailAddresses[0]?.emailAddress?.split("@")[0] || t("nav.account");

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
              <p className="text-xs text-[#9a8070] tracking-wide">{t("nav.signedInAs")}</p>
              <p className="text-sm font-medium text-[#2c1a08] truncate max-w-[140px]">{displayName}</p>
            </div>
            <button
              onClick={() => signOut({ redirectUrl: `${window.location.origin}${basePath}/` })}
              className="w-full flex items-center gap-2 px-5 py-2.5 text-sm text-[#5a5248] hover:bg-[#eddfc8] hover:text-[#7a5518] transition-colors duration-150 cursor-pointer tracking-wide font-medium"
            >
              <LogOut className="w-3.5 h-3.5" strokeWidth={1.5} />
              {t("nav.signOut")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileSection({ title, items, onNavigate }: { title: string; items: MenuItem[]; onNavigate: () => void }) {
  const { t } = useTranslation();
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-3">{title}</p>
      <ul className="space-y-1">
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href}>
              <span onClick={onNavigate} className="block py-2 text-base text-[#3d3830] hover:text-[#7a5518] cursor-pointer">
                {t(it.i18nKey)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { signOut } = useClerk();
  const { isSignedIn } = useUser();
  const { t } = useTranslation();
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

  function enter(key: MenuKey) {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(key);
  }

  function leave() {
    timerRef.current = setTimeout(() => setOpen(null), 120);
  }

  // Lock body scroll when mobile drawer open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#faf9f6]/97 backdrop-blur-sm border-b border-[#e8dece]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">

        {/* ── Logo ── */}
        <Link href="/">
          <span className="flex items-center gap-2 sm:gap-4 cursor-pointer group min-w-0">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Mahayogi Siddhababa Spiritual Academy logo"
              className="h-10 w-10 sm:h-14 sm:w-14 rounded-full object-cover shrink-0 shadow-sm"
            />
            <span style={{ lineHeight: 1.15 }} className="min-w-0">
              {/* Below lg: short acronym so it fits comfortably on one row */}
              <span
                className="lg:hidden block whitespace-nowrap group-hover:text-[#7a5518] transition-colors text-lg sm:text-xl"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: "#2c1a08", letterSpacing: "0.08em" }}
              >
                MSSA
              </span>
              {/* lg+: two-line stacked layout */}
              <span
                className="hidden lg:block group-hover:text-[#7a5518] transition-colors text-xl truncate"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: "#2c1a08", letterSpacing: "0.03em" }}
              >
                Mahayogi Siddhababa
              </span>
              <span
                className="hidden lg:block"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 600, color: "#b8892a", letterSpacing: "0.16em", textTransform: "uppercase", marginTop: "3px" }}
              >
                Spiritual Academy
              </span>
            </span>
          </span>
        </Link>

        {/* ── Desktop Menu (hidden on mobile) ── */}
        <div className="hidden lg:flex items-center ml-16">

          {/* Explore */}
          <div className="relative" onMouseEnter={() => enter("explore")} onMouseLeave={leave}>
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-[#5a5248] hover:text-[#7a5518] hover:bg-[#eddfc8] transition-colors tracking-wide rounded-lg">
              {t("nav.explore")}
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
              {t("nav.programs")}
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
              {t("nav.experience")}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open === "experience" ? "rotate-180" : ""}`} strokeWidth={1.5} />
            </button>
            {open === "experience" && (
              <div onMouseEnter={() => enter("experience")} onMouseLeave={leave}>
                <DropdownMenu items={EXPERIENCE} />
              </div>
            )}
          </div>

          <Link href="/teachings">
            <span className="px-4 py-2 text-sm text-[#5a5248] hover:text-[#7a5518] hover:bg-[#eddfc8] transition-colors tracking-wide rounded-lg cursor-pointer">
              {t("nav.teachings")}
            </span>
          </Link>

          <Link href="/contact">
            <span className="px-4 py-2 text-sm text-[#5a5248] hover:text-[#7a5518] hover:bg-[#eddfc8] transition-colors tracking-wide rounded-lg cursor-pointer">
              {t("nav.contact")}
            </span>
          </Link>

          <Show when="signed-out">
            <Link href="/sign-in">
              <span className="ml-2 flex items-center gap-1.5 px-4 py-2 text-sm text-[#5a5248] hover:text-[#7a5518] hover:bg-[#eddfc8] transition-colors tracking-wide rounded-lg cursor-pointer whitespace-nowrap">
                <UserCircle2 className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                {t("nav.login")}
              </span>
            </Link>
          </Show>

          <Show when="signed-in">
            <UserMenu />
          </Show>

          <Link href="/register">
            <span className="ml-1 px-5 py-2 text-sm bg-[#b8892a] text-white rounded-full hover:bg-[#7a5518] transition-colors tracking-wide font-medium cursor-pointer">
              {t("nav.join")}
            </span>
          </Link>

          <Link href="/donate">
            <span className="ml-2 px-5 py-2 text-sm border border-[#b8892a] text-[#b8892a] rounded-full hover:bg-[#9d7422] hover:border-[#9d7422] hover:text-white transition-colors duration-200 tracking-wide cursor-pointer">
              {t("nav.donate")}
            </span>
          </Link>

          <div className="ml-2 pl-2 border-l border-[#e8dece] flex items-center text-[#9a8070]">
            <Globe className="w-3.5 h-3.5 mr-1" strokeWidth={1.5} />
            <LanguageSwitcher variant="desktop" />
          </div>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 -mr-2 text-[#3d3830] hover:text-[#7a5518] cursor-pointer"
        >
          <Menu className="w-6 h-6" strokeWidth={1.5} />
        </button>
      </div>

      {/* ── Mobile drawer (portaled to body to escape nav's backdrop-filter containing block) ── */}
      {mobileOpen && createPortal(
        <div className="lg:hidden fixed inset-0 z-[100]">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-[#1a0f05]/60 backdrop-blur-sm"
            onClick={closeMobile}
          />
          {/* panel */}
          <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-[#faf9f6] shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between h-16 px-5 border-b border-[#e8dece]">
              <span
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 500, color: "#2c1a08" }}
              >
                {t("nav.menu")}
              </span>
              <button
                aria-label="Close menu"
                onClick={closeMobile}
                className="p-2 -mr-2 text-[#3d3830] hover:text-[#7a5518] cursor-pointer"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            <div className="px-5 py-6 space-y-7">
              {/* Top CTAs */}
              <div className="flex gap-2">
                <Link href="/register">
                  <span onClick={closeMobile} className="flex-1 inline-block text-center px-3 py-2.5 text-sm bg-[#b8892a] text-white rounded-full tracking-wide cursor-pointer">
                    {t("nav.join")}
                  </span>
                </Link>
                <Link href="/donate">
                  <span onClick={closeMobile} className="flex-1 inline-block text-center px-3 py-2.5 text-sm border border-[#b8892a] text-[#b8892a] rounded-full font-medium tracking-wide cursor-pointer">
                    {t("nav.donate")}
                  </span>
                </Link>
                {!isSignedIn && (
                  <Link href="/sign-in">
                    <span onClick={closeMobile} className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm text-[#5a5248] border border-[#d4c4b0] rounded-full tracking-wide cursor-pointer">
                      <UserCircle2 className="w-4 h-4" strokeWidth={1.5} />
                      {t("nav.login")}
                    </span>
                  </Link>
                )}
              </div>

              {/* Language switcher — directly below action buttons */}
              <div className="flex items-center gap-2 pt-1 pb-1 border-t border-[#e8dece]">
                <Globe className="w-3.5 h-3.5 text-[#b8892a] shrink-0" strokeWidth={1.5} />
                <LanguageSwitcher variant="mobile" />
              </div>

              <MobileSection title={t("nav.explore")} items={EXPLORE} onNavigate={closeMobile} />
              <MobileSection title={t("nav.programs")} items={COURSES} onNavigate={closeMobile} />
              <MobileSection title={t("nav.experience")} items={EXPERIENCE} onNavigate={closeMobile} />

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-3">{t("nav.more")}</p>
                <ul className="space-y-1">
                  <li>
                    <Link href="/teachings">
                      <span onClick={closeMobile} className="block py-2 text-base text-[#3d3830] hover:text-[#7a5518] cursor-pointer">{t("nav.teachings")}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <span onClick={closeMobile} className="block py-2 text-base text-[#3d3830] hover:text-[#7a5518] cursor-pointer">{t("nav.contact")}</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Account (signed-in only) */}
              <Show when="signed-in">
                <div className="pt-4 border-t border-[#e8dece]">
                  <Link href="/dashboard">
                    <span onClick={closeMobile} className="flex items-center gap-2 py-2 text-base text-[#3d3830] hover:text-[#7a5518] cursor-pointer">
                      <UserCircle2 className="w-5 h-5" strokeWidth={1.5} />
                      {t("nav.dashboard")}
                    </span>
                  </Link>
                  <button
                    onClick={() => { closeMobile(); signOut({ redirectUrl: `${window.location.origin}${basePath}/` }); }}
                    className="flex items-center gap-2 py-2 text-base text-[#3d3830] hover:text-[#7a5518] cursor-pointer"
                  >
                    <LogOut className="w-5 h-5" strokeWidth={1.5} />
                    {t("nav.signOut")}
                  </button>
                </div>
              </Show>
            </div>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
}
