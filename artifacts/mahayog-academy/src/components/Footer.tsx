import { Link } from "wouter";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const b = import.meta.env.BASE_URL;

export default function Footer() {
  const { t } = useTranslation();

  const EXPLORE = [
    { label: t("nav.exploreItems.about"),       href: "/about" },
    { label: t("nav.exploreItems.founderGuru"), href: "/founder-guru" },
    { label: t("nav.exploreItems.ashram"),      href: "/ashram" },
    { label: t("nav.exploreItems.lineage"),     href: "/lineage" },
    { label: t("nav.exploreItems.projects"),    href: "/projects" },
  ];

  const LEARN = [
    { label: t("footer.linksShort.meditation"), href: "/meditation" },
    { label: t("footer.linksShort.vedanta"),    href: "/vedanta" },
    { label: t("nav.programItems.gurukul"),     href: "/gurukul" },
    { label: t("nav.teachings"),                href: "/teachings" },
    { label: t("nav.experienceItems.volunteer"),href: "/volunteer" },
  ];

  const CONNECT = [
    { label: t("nav.experienceItems.events"),       href: "/events" },
    { label: t("nav.experienceItems.guruDarshan"),  href: "/guru-darshan" },
    { label: t("footer.linksShort.customTalks"),    href: "/custom-talks" },
    { label: t("nav.contact"),                      href: "/contact" },
    { label: t("nav.donate"),                       href: "/donate" },
  ];

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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <img src={`${b}images/logo.png`} alt={t("footer.brandAlt")} className="h-12 w-auto mb-4 opacity-90" />
            <p className="font-['Cormorant_Garamond'] text-xl font-light text-[#e8c56a] mb-3 leading-snug">
              {t("footer.brandLine1")}<br />{t("footer.brandLine2")}
            </p>
            <p className="text-sm text-[#9a8878] leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-5">{t("footer.headingExplore")}</p>
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
            <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-5">{t("footer.headingLearn")}</p>
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
            <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-5">{t("footer.headingConnect")}</p>
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
          <p className="text-xs text-[#6a5a4a]">{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#b8892a]" strokeWidth={1.5} />
            <p className="text-xs text-[#6a5a4a]">{t("footer.location")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
