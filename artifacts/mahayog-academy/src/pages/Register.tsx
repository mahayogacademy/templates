import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EnrolmentForm from "@/components/EnrolmentForm";
import { useSearch } from "wouter";
import { ChevronDown } from "lucide-react";

const b = import.meta.env.BASE_URL;

const FAQS: Record<"meditation" | "vedanta", { q: string; a: string }[]> = {
  meditation: [
    {
      q: "Who can attend?",
      a: "The Mahayog Meditation program is open to sincere seekers of all backgrounds, nationalities, and spiritual traditions. No prior experience with yoga or meditation is required, the only prerequisite is a genuine openness to inner exploration and a commitment to attend the full 5 days.",
    },
    {
      q: "Do I need prior meditation experience?",
      a: "No. The program welcomes complete beginners as well as experienced practitioners. The initiation process is guided entirely by the Guru's transmission, it does not depend on prior technique or knowledge. Come as you are.",
    },
    {
      q: "What happens during the 5-day workshop?",
      a: "The workshop is a structured, immersive introduction to Mahayog Meditation, culminating in the transmission of Shaktipat initiation by Jagadguru Mahayogi Siddhababa, in person or through his direct representatives.\n\nEach day includes guided meditation sessions, teachings on Kundalini, the subtle body, and the stages of inner awakening, and open time for questions. The program builds progressively, preparing each participant to receive initiation safely and with awareness.\n\nFull attendance across all five days is essential.",
    },
    {
      q: "Is there a fee?",
      a: "There is no fixed fee for participation or initiation. The teachings are offered freely as a spiritual gift.\n\nDonations, known in the yogic tradition as Guru dakshina, are welcomed as an expression of gratitude and may be offered at the center at your discretion. No one is turned away for inability to contribute.",
    },
    {
      q: "When should I register?",
      a: "We recommend registering as early as possible, as spaces are limited. Registration typically closes a few days before the workshop date. If you miss a particular month's intake, you are welcome to register for the following month, workshops run on the first Saturday of every month.",
    },
    {
      q: "Can I cancel or reschedule?",
      a: "If you are unable to attend your selected workshop, please notify your center as soon as possible. Your registration can be transferred to a future monthly intake. As there is no fee involved, there is no financial penalty, we simply ask for timely notice so your place can be offered to another seeker.",
    },
    {
      q: "What happens after I receive initiation?",
      a: "Initiation is a beginning, not an end. Once Kundalini is awakened, the energy continues to purify and unfold naturally through your daily meditation practice. After the workshop you will receive guidance on how to maintain and deepen your practice independently.",
    },
  ],
  vedanta: [
    {
      q: "Who is this course for?",
      a: "The Vedanta Philosophy Course is open to sincere seekers of all backgrounds and traditions. No prior knowledge of Vedanta is required, only a genuine wish to understand the nature of the Self and Reality.\n\nAlongside the philosophy lectures, participants also practice Himalayan Siddha Mahayog Meditation. The two are studied together, each deepening the other, for accelerated inner progress.",
    },
    {
      q: "How long does the course take to complete?",
      a: "The course is 300 hours in total and takes approximately 12 months to complete. Classes are held daily via Zoom, except on sacred holidays (Ashtami, Pratipada, Purnima, Sankranti, and Aunsi).\n\nThe programme is revolving, meaning you may join at any point in the year. From the day you enrol, you continue through all the lectures until the full programme is complete.",
    },
    {
      q: "How are the classes delivered?",
      a: "Each session is a live group Zoom class, facilitated by members of the Mahayogi Siddhababa Spiritual Academy. The heart of each session is satsang, spiritual discourse delivered by His Holiness Jagadguru Mahayogi Siddhababa himself, an enlightened Saint.\n\nPeriodic Q&A sessions are held directly with Jagadguru Mahayogi Siddhababa, offering each student the rare opportunity to receive personal guidance from an awakened Master.",
    },
    {
      q: "What if I miss a class?",
      a: "Enrolment includes access to a library of on-demand videos, written resources, and supporting materials. If you miss a session, you can catch up in your own time and continue from where you left off. No seeker is left behind.",
    },
    {
      q: "What language are the lectures delivered in?",
      a: "The course is currently delivered in Nepali. We are actively working to make the programme available in additional languages, stay tuned for updates. Please indicate your language in the registration form so we can keep you informed as new options become available.",
    },
    {
      q: "Is there a fee?",
      a: "The Vedanta course is offered freely. There is, however, a recommended donation to help cover the operational costs of running the programme, digital equipment, Zoom subscriptions, and supporting infrastructure.\n\nThe suggested donation amount can be discussed with your local center. Contributions may be made before or after enrolment, and no seeker is ever turned away for inability to contribute.",
    },
    {
      q: "What will I gain from this course?",
      a: "This course will change the way you see the world, and the way you engage with it. You will come to understand the nature of Brahman (the Supreme Reality), the Self (Ātman), and Prakriti (the phenomenal world), and how they relate to one another.\n\nBeyond philosophy, the integration of Vedanta with daily meditation practice brings this understanding into lived experience, gradually transforming perception, relationships, and the quality of inner life.",
    },
  ],
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e8dece] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-6 group"
      >
        <span className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#3d3830] group-hover:text-[#9d7422] transition-colors duration-200 leading-snug">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#b8892a] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          strokeWidth={1.5}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-400 ${open ? "max-h-[600px] pb-5" : "max-h-0"}`}>
        <p className="text-sm text-[#6b6158] leading-relaxed whitespace-pre-line">{a}</p>
      </div>
    </div>
  );
}

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
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/70 via-[#2c1a08]/50 to-[#2c1a08]/10" />
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
                  <span className={`text-sm uppercase tracking-[0.22em] font-medium mb-2 transition-colors duration-300 ${selected ? "text-[#b8892a]" : "text-[#b8892a]/60"}`}>
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

      {/* ── FAQ ── */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#e8dcc8] via-[#ede3cf] to-[#e2d4b8]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#b8892a]/40" />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#b8892a" strokeWidth="1.2" fill="none"/>
              </svg>
              <div className="h-px w-10 bg-[#b8892a]/40" />
            </div>
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Common Questions</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#2e1405] mt-2">
              {program === "vedanta" ? "About the Vedanta Course" : "About the Meditation Workshop"}
            </h2>
          </div>
          <div>
            {FAQS[program].map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
