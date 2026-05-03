import { useEffect, useState } from "react";
import { useUser } from "@clerk/react";
import { useLocation } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Heart, Calendar, Users } from "lucide-react";

const b = import.meta.env.BASE_URL;

const PROGRAM_INFO = {
  meditation: {
    label: "Himalayan Siddha Mahayog Course",
    subtitle: "5-Day Monthly Immersion",
    colour: "text-[#b8892a]",
    bg: "bg-[#fdf6ec]",
    border: "border-[#e8c56a]/40",
    welcome: "Your registration for the Himalayan Siddha Mahayog Course has been received. We are honoured to welcome you to this ancient lineage of Himalayan meditation.",
    nextSteps: [
      { icon: Calendar, text: "Your first session begins on the upcoming first Saturday of the month. You will receive a confirmation email with joining details." },
      { icon: BookOpen, text: "Please read the preparation guidelines sent to your registered email before your first session." },
      { icon: Users, text: "Join our global community of practitioners — connect, ask questions, and share your journey." },
      { icon: Heart, text: "Come with an open heart and no expectations. No prior meditation experience is needed." },
    ],
    links: [
      { label: "About the Course", href: "/mahayog-course" },
      { label: "Guru Darshan", href: "/guru-darshan" },
      { label: "Events Calendar", href: "/events" },
    ],
  },
  vedanta: {
    label: "Vedanta Philosophy Course",
    subtitle: "300 Hours · Online · Open Enrolment",
    colour: "text-[#b8892a]",
    bg: "bg-[#fdf6ec]",
    border: "border-[#e8c56a]/40",
    welcome: "Your enrolment in the Vedanta Philosophy Course has been received. You are stepping onto a 300-hour journey through the deepest teachings of Advaita Vedanta, guided by His Holiness and senior faculty.",
    nextSteps: [
      { icon: Calendar, text: "Daily sessions are held via Zoom at a consistent time each day. Your schedule and link will be sent to your registered email." },
      { icon: BookOpen, text: "Course materials and pre-reading will be shared before your first session. Take your time with them." },
      { icon: Users, text: "You will be welcomed into a small cohort of sincere students from around the world — a community of inquiry and practice." },
      { icon: Heart, text: "This path requires patience and consistency. One hour a day, every day, is the practice." },
    ],
    links: [
      { label: "About the Course", href: "/vedanta" },
      { label: "Teachings & Articles", href: "/teachings" },
      { label: "Guru Darshan", href: "/guru-darshan" },
    ],
  },
};

export default function Dashboard() {
  const { user, isLoaded, isSignedIn } = useUser();
  const [, setLocation] = useLocation();
  const [program, setProgram] = useState<"meditation" | "vedanta" | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("msap_registered_program") as "meditation" | "vedanta" | null;
    if (saved) setProgram(saved);
  }, []);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      setLocation("/sign-in");
    }
  }, [isLoaded, isSignedIn, setLocation]);

  if (!isLoaded || !isSignedIn) return null;

  const info = program ? PROGRAM_INFO[program] : null;
  const firstName = user.firstName || user.username || "Dear Seeker";

  return (
    <div className="bg-[#faf9f6] min-h-screen">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-20 px-6">
        <img
          src={`${b}images/hero-nepal-landscape.png`}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/70 via-[#2c1a08]/55 to-[#faf9f6]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center pt-8 pb-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#e8c56a]/80" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.4" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/80" />
          </div>
          <p className="text-[#e8c56a] text-sm uppercase tracking-[0.3em] font-medium mb-3">Welcome</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight mb-4">
            Namaste, {firstName}
          </h1>
          <p className="text-white/70 text-base leading-relaxed">
            Your account is active. May your journey be filled with clarity, peace, and grace.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-10">

        {/* ── REGISTRATION ACKNOWLEDGEMENT ── */}
        {info ? (
          <div className={`${info.bg} border ${info.border} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-2 h-2 rounded-full bg-[#b8892a]" />
              <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-medium">Registration Confirmed</p>
            </div>
            <h2 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#2c1a08] mt-2 mb-1">
              {info.label}
            </h2>
            <p className="text-sm text-[#7a6252] mb-5">{info.subtitle}</p>
            <p className="text-base text-[#5a5248] leading-relaxed">{info.welcome}</p>
          </div>
        ) : (
          <div className="bg-[#fdf6ec] border border-[#e8c56a]/40 rounded-2xl p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-medium mb-2">Your Account</p>
            <h2 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#2c1a08] mb-3">
              Welcome to the Academy
            </h2>
            <p className="text-base text-[#5a5248] leading-relaxed">
              You are now part of the Mahayogi Siddhababa Spiritual Academy community. Explore our programmes, events, and teachings below.
            </p>
          </div>
        )}

        {/* ── NEXT STEPS ── */}
        {info && (
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-medium mb-5">What Happens Next</p>
            <div className="space-y-4">
              {info.nextSteps.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl px-6 py-4 border border-[#e8dece]">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-[#b8892a] flex items-center justify-center mt-0.5">
                    <Icon size={16} className="text-white" strokeWidth={1.5} />
                  </div>
                  <p className="text-base text-[#5a5248] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── QUICK LINKS ── */}
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-medium mb-5">Explore</p>
          <div className="flex flex-wrap gap-3">
            {(info?.links ?? [
              { label: "About the Academy", href: "/about" },
              { label: "Events Calendar", href: "/events" },
              { label: "Teachings & Articles", href: "/teachings" },
            ]).map(({ label, href }) => (
              <Link key={href} href={href}>
                <span className="inline-flex items-center gap-1.5 text-sm border border-[#b8892a] text-[#b8892a] hover:bg-[#b8892a] hover:text-white rounded-full px-5 py-2 font-medium cursor-pointer transition-colors duration-200">
                  {label} <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── CONTACT NOTE ── */}
        <div className="text-center py-6 border-t border-[#e8dece]">
          <p className="text-base text-[#7a6252] leading-relaxed">
            Questions about your programme?{" "}
            <Link href="/contact">
              <span className="text-[#b8892a] underline underline-offset-4 cursor-pointer hover:text-[#9d7422] transition-colors">
                Get in touch
              </span>
            </Link>
            {" "}— our team is happy to help.
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
}
