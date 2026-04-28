import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import EnrolmentForm from "@/components/EnrolmentForm";
import FloatingRegisterButton from "@/components/FloatingRegisterButton";

// viewBox 500×500; circles at corners offset 90px from centre (250,250), r=140
// Label positions are inside each circle's unique outer quadrant
const YOGAS = [
  {
    id: "hatha",
    name: "Hatha Yoga",
    cx: 160, cy: 160, r: 140,
    fill: "#e8c56a", stroke: "#d4a843",
    labelX: 105, labelY: 105,
    desc: "Purification and mastery of the physical body through postures (asanas) and breath control (pranayama), creating a strong, receptive vessel for higher awareness.",
  },
  {
    id: "mantra",
    name: "Mantra Yoga",
    cx: 340, cy: 160, r: 140,
    fill: "#c4855a", stroke: "#b8743e",
    labelX: 395, labelY: 105,
    desc: "The repetition and internalization of sacred sound and divine names to harmonize the mind, purify speech, and awaken inner vibrations of consciousness.",
  },
  {
    id: "laya",
    name: "Laya Yoga",
    cx: 160, cy: 340, r: 140,
    fill: "#7a9e7e", stroke: "#5e8862",
    labelX: 105, labelY: 395,
    desc: "Dissolution of individual consciousness into the universal through deep absorption — focusing on subtle energy centers (chakras) and the inner sound (nāda).",
  },
  {
    id: "raja",
    name: "Raja Yoga",
    cx: 340, cy: 340, r: 140,
    fill: "#b8892a", stroke: "#9d7422",
    labelX: 395, labelY: 395,
    desc: "The royal path of meditation — mastery of the mind through concentration, contemplation, and ultimate absorption (samādhi), leading to direct Self-realization.",
  },
];

const MAHAYOG_DESC = "Mahāyog naturally integrates all four yoga paths. As Kundalini awakens through Shaktipat initiation, each yoga unfolds organically within the practitioner — without effort or deliberate technique.";

function VennDiagram() {
  const [hovered, setHovered] = useState<string | null>(null);
  const activeYoga = YOGAS.find(y => y.id === hovered);
  const isMahayog = hovered === "mahayog";
  const activeDesc = isMahayog ? MAHAYOG_DESC : activeYoga?.desc;
  const activeName = isMahayog ? "Mahāyog Meditation" : activeYoga?.name ?? null;

  return (
    <div className="flex flex-col items-center gap-4 w-full">

      {/* Hover hint — fades out once user starts interacting */}
      <div className={`flex items-center gap-2 transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#b8892a] animate-ping inline-block" />
        <span className="text-xs uppercase tracking-[0.2em] text-[#b8892a] font-medium">Hover each circle to explore</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#b8892a] animate-ping inline-block" />
      </div>

      <svg viewBox="0 0 500 500" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {YOGAS.map((y) => (
          <g key={y.id}>
            <circle
              cx={y.cx} cy={y.cy} r={y.r}
              fill={y.fill}
              fillOpacity={hovered === y.id ? 0.60 : hovered ? 0.15 : 0.30}
              stroke={y.stroke}
              strokeWidth={hovered === y.id ? 2.5 : 1.5}
              style={{ cursor: "pointer", transition: "fill-opacity 0.3s, stroke-width 0.2s" }}
              onMouseEnter={() => setHovered(y.id)}
              onMouseLeave={() => setHovered(null)}
            />
            {/* Two-line label: "Hatha" + "Yoga" — centered inside the circle's outer quadrant */}
            <text
              x={y.labelX} y={y.labelY}
              textAnchor="middle"
              fontFamily="'Cormorant Garamond', serif"
              fontSize="20"
              fontWeight="700"
              fill={hovered === y.id ? "#2a1f08" : "#3d3830"}
              style={{ pointerEvents: "none", transition: "fill 0.2s" }}
            >
              {y.name.split(" ")[0]}
            </text>
            <text
              x={y.labelX} y={y.labelY + 24}
              textAnchor="middle"
              fontFamily="'Cormorant Garamond', serif"
              fontSize="17"
              fill={hovered === y.id ? "#5a3e10" : "#6b5a3e"}
              style={{ pointerEvents: "none", transition: "fill 0.2s" }}
            >
              Yoga
            </text>
          </g>
        ))}

        {/* Centre — Mahayog */}
        <circle
          cx="250" cy="250" r="82"
          fill="#3d3830"
          fillOpacity={hovered === "mahayog" ? 1 : 0.90}
          style={{ cursor: "pointer", transition: "fill-opacity 0.25s" }}
          onMouseEnter={() => setHovered("mahayog")}
          onMouseLeave={() => setHovered(null)}
        />
        <text x="250" y="241" textAnchor="middle" fontFamily="'Cormorant Garamond', serif"
          fontSize="20" fill="white" fontStyle="italic" style={{ pointerEvents: "none" }}>
          Mahāyog
        </text>
        <text x="250" y="264" textAnchor="middle" fontFamily="'Cormorant Garamond', serif"
          fontSize="13" fill="#e8c56a" letterSpacing="2" style={{ pointerEvents: "none" }}>
          MEDITATION
        </text>
      </svg>

      {/* Description panel — only shown on hover */}
      {activeName && (
        <div className="w-full max-w-md rounded-2xl border border-[#e0d0b8] bg-white/80 px-6 py-4 text-center transition-all duration-300">
          <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#b8892a] mb-1">{activeName}</p>
          <p className="text-sm text-[#5a5248] leading-relaxed">{activeDesc}</p>
        </div>
      )}
    </div>
  );
}

const BENEFIT_CATEGORIES = [
  {
    label: "Mind & Heart",
    color: "#e8c56a",
    items: [
      {
        icon: "peace",
        title: "Inner Peace",
        subtitle: "Emotional Balance",
        desc: "Restless thoughts slow; peace emerges from within. Compassion, equanimity, and a felt sense of divine grace naturally develop in daily life.",
      },
      {
        icon: "transform",
        title: "Positive Transformation",
        subtitle: "Renewed Outlook",
        desc: "Negative habits lose their grip; joy, optimism, and resilience arise — not as forced attitudes, but as the result of genuine inner fulfillment.",
      },
      {
        icon: "relief",
        title: "Relief from Suffering",
        subtitle: "Dissolving Blockages",
        desc: "Sorrows, fears, and anxieties gradually diminish. Lifelong phobias often fade as Kundalini dissolves mental and physical blockages.",
      },
    ],
  },
  {
    label: "Deep Transformation",
    color: "#c4855a",
    items: [
      {
        icon: "ajapa",
        title: "Ajapa Japa",
        subtitle: "Effortless Divine Name",
        desc: "The sacred primordial Name (Rām) begins reverberating inside continuously. 'Without japa, the japa happens' — whether working, resting, or sleeping.",
      },
      {
        icon: "nada",
        title: "Anahad Nāda",
        subtitle: "Inner Divine Sound",
        desc: "The mystic unstruck sound of the universe becomes audible, often perceived as a flute, bell, harp, or cosmic roar, lifting awareness to higher states.",
      },
    ],
  },
  {
    label: "Spiritual Evolution",
    color: "#7a9e7e",
    items: [
      {
        icon: "growth",
        title: "Accelerated Growth",
        subtitle: "Under the Guru's Grace",
        desc: "What might otherwise take lifetimes of effort unfolds in an accelerated, protected manner through Shaktipat and the Guru's ongoing guidance.",
      },
    ],
  },
];

function BenefitIcon({ type }: { type: string }) {
  const s = { fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, stroke: "#b8892a" };
  switch (type) {
    case "peace":
      return (
        <svg viewBox="0 0 32 32" className="w-9 h-9">
          <circle cx="16" cy="16" r="2.5" fill="#b8892a" />
          <circle cx="16" cy="16" r="7" strokeWidth="1.5" {...s} />
          <circle cx="16" cy="16" r="12" strokeWidth="1" strokeDasharray="2 3" {...s} />
        </svg>
      );
    case "relief":
      return (
        <svg viewBox="0 0 32 32" className="w-9 h-9">
          <circle cx="16" cy="16" r="5" strokeWidth="1.5" {...s} />
          {([[16,3],[16,29],[3,16],[29,16],[7,7],[25,25],[25,7],[7,25]] as [number,number][]).map(([x,y], i) => {
            const dx = x - 16, dy = y - 16;
            const len = Math.sqrt(dx*dx+dy*dy);
            const x2 = 16 + dx/len*8, y2 = 16 + dy/len*8;
            return <line key={i} x1={x} y1={y} x2={x2} y2={y2} strokeWidth="1.5" {...s} />;
          })}
        </svg>
      );
    case "transform":
      return (
        <svg viewBox="0 0 32 32" className="w-9 h-9">
          <circle cx="16" cy="16" r="11" strokeWidth="1.2" strokeDasharray="3 3" {...s} />
          <polyline points="11,20 16,10 21,20" strokeWidth="1.8" {...s} />
          <line x1="16" y1="10" x2="16" y2="22" strokeWidth="1.8" {...s} />
        </svg>
      );
    case "ajapa":
      return (
        <svg viewBox="0 0 32 32" className="w-9 h-9">
          <path d="M10 22 Q8 16 12 12 Q16 8 16 12 Q16 18 10 22Z" strokeWidth="1.5" {...s} />
          <path d="M16 12 Q20 8 22 12 Q24 17 20 20" strokeWidth="1.5" {...s} />
          <path d="M8 24 Q16 28 24 24" strokeWidth="1.5" {...s} />
          <circle cx="16" cy="27" r="1.2" fill="#b8892a" />
        </svg>
      );
    case "nada":
      return (
        <svg viewBox="0 0 32 32" className="w-9 h-9">
          <line x1="16" y1="6" x2="16" y2="26" strokeWidth="1.8" {...s} />
          <path d="M11 10 C7 13 7 19 11 22" strokeWidth="1.5" {...s} />
          <path d="M7 7 C1 12 1 20 7 25" strokeWidth="1.2" {...s} />
          <path d="M21 10 C25 13 25 19 21 22" strokeWidth="1.5" {...s} />
          <path d="M25 7 C31 12 31 20 25 25" strokeWidth="1.2" {...s} />
        </svg>
      );
    case "growth":
      return (
        <svg viewBox="0 0 32 32" className="w-9 h-9">
          <path d="M16 26 C16 26 9 20 9 13 C9 9 12 6 16 6 C20 6 23 9 23 13 C23 20 16 26 16 26Z" strokeWidth="1.5" {...s} />
          <path d="M12 18 C8 17 5 19 4 22" strokeWidth="1.2" {...s} />
          <path d="M20 18 C24 17 27 19 28 22" strokeWidth="1.2" {...s} />
          <circle cx="16" cy="13" r="2.5" strokeWidth="1.2" {...s} />
        </svg>
      );
    default: return null;
  }
}

const FAQ_GROUPS: { theme: string; items: { q: string; a: string }[] }[] = [
  {
    theme: "Understanding Mahayog",
    items: [
      {
        q: "What is Kundalini?",
        a: "Kundalini is the dormant cosmic energy of transformation that lies at the base of the spine. It is the power of higher consciousness within every individual, waiting to be awakened. To experience the full potential of human life, no matter the spiritual path, Kundalini awakening is foundational. It is the bedrock of spiritual advancement.\n\nKundalini has been recognized across cultures: in Hinduism as the coiled serpent energy, in Tantric traditions as Shakti, in Chinese medicine as Qi, in Taoism through Tai Chi and Qigong, and in Western mysticism through Kabbalah. Across all traditions, awakening this latent energy is viewed as a means to realize one's highest potential.",
      },
      {
        q: "What is Kundalini Awakening?",
        a: "Kundalini awakening refers to the activation of the latent spiritual energy within a person, leading to expanded awareness and inner transformation. Regardless of one's spiritual path, Kundalini awakening is the foundation for true inner evolution and self-realization.",
      },
      {
        q: "How to Awaken the Kundalini Safely?",
        a: "Through Guru Grace (The Automatic Method): Jagadguru Mahayogi Siddhababa can awaken a seeker's Kundalini through touch, sight, mantra, or pure intention. This initiation — known as Shaktipat — sparks automatic deep purification, heightened awareness, and accelerated transformation.\n\nWith the guidance of an enlightened Master, Kundalini rises naturally, safely, and in alignment with the seeker's individual journey.\n\nPersonal Effort (The Manual Method): Many attempt to awaken Kundalini through books or online guides. This approach carries significant risks without proper guidance — the energy is potent and can cause physical, emotional, and psychological imbalances if not properly directed.",
      },
      {
        q: "What happens once Kundalini is Awakened?",
        a: "After awakening, the practitioner becomes the observer during meditation. Experiences depend on where the Kundalini focuses across the three body types:\n\n• Physical Body — Gross sensations such as automatic asanas, mudras, shaking, and mantra recitation.\n• Subtle Body — Inner visualizations, energy flow through the 72,000 nāḍīs (energy channels).\n• Causal Body — Deep internal transformation through the cleansing of Samskaras, felt as growing contentment and inner peace.\n\nEach individual's experience will be unique, as the Kundalini moves through the chakra system according to the practitioner's individual constitution.",
      },
      {
        q: "What are the Stages of Kundalini Awakening?",
        a: "Kundalini awakening is not a single moment, but a gradual inner unfolding through three broad phases:\n\n1. Awakening Begins — During Mahayog Meditation training, the Guru raises the Kundalini from its dormant position. Practitioners often report increased clarity, sensitivity, and awareness of inner movement.\n\n2. Purification — As inner energy becomes active, unresolved impressions surface. The Kundalini purifies body and mind. Emotional patterns begin to be released; dreams become more vivid; awareness refines.\n\n3. Integration — The flow of energy stabilizes. Awareness becomes naturally expressed through daily life — characterized by steadiness, discernment, and ease. Inner silence and clarity begin to inform relationships, work, and service.",
      },
      {
        q: "What is the Chakra System?",
        a: "Chakras are subtle energy centers — focal points of consciousness, formed at the junctions where the three main subtle energy channels (sushumna, ida, and pingala) converge.\n\nIn Mahayog, chakras are not stimulated or controlled. Through the natural rising of Kundalini, they are engaged as needed for the practitioner. While over 32,000 chakras exist, seven are considered primary:\n\nMuladhara (base of spine) — Stability, grounding\nSvadhisthana (lower abdomen) — Flow, creativity\nManipur (solar plexus) — Will, inner strength\nAnahata (heart) — Compassion, balance\nVishuddha (throat) — Expression, truthfulness\nAjna (between eyebrows) — Insight, perception\nSahasrara (crown) — Stillness, unity, expanded awareness",
      },
    ],
  },
  {
    theme: "Eligibility & Preparation",
    items: [
      {
        q: "Who can attend?",
        a: "The Mahayog Meditation program is open to sincere seekers of all backgrounds, nationalities, and spiritual traditions. No prior experience with yoga or meditation is required — the only prerequisite is a genuine openness to inner exploration and a commitment to attend the full 5 days.",
      },
      {
        q: "Do I need prior meditation experience?",
        a: "No. The program welcomes complete beginners as well as experienced practitioners. The initiation process is guided entirely by the Guru's transmission — it does not depend on prior technique or knowledge. Come as you are.",
      },
      {
        q: "Are there health or age requirements?",
        a: "There is no strict age minimum, though participants under 18 may be asked to attend with a parent or guardian. The voluntary health section in the registration form helps the instructor be aware of any relevant conditions so appropriate support can be offered.\n\nThose with significant medical or psychiatric conditions are encouraged to consult a healthcare provider before attending, and to share relevant details in the health section of the form.",
      },
      {
        q: "What should I wear or bring?",
        a: "Comfortable, loose-fitting clothing in natural fabrics is recommended. White or soft, neutral tones are traditional for meditation practice, though not required. A shawl or light wrap can be useful for seated sessions. All essential materials will be provided by the center.",
      },
      {
        q: "What languages are sessions conducted in?",
        a: "Sessions at Nepal centers are conducted primarily in Nepali, with English support available where needed. International online sessions are conducted primarily in English, Nepali, or Hindi — whichever best serves the participants present. To help us accommodate you, please indicate the languages you speak in the registration form.",
      },
    ],
  },
  {
    theme: "The Workshop",
    items: [
      {
        q: "What happens during the 5-day workshop?",
        a: "The workshop is a structured, immersive introduction to Mahayog Meditation, culminating in the transmission of Shaktipat initiation by Jagadguru Mahayogi Siddhababa — in person or through his direct representatives.\n\nEach day includes guided meditation sessions, teachings on Kundalini, the subtle body, and the stages of inner awakening, and open time for questions. The program builds progressively, preparing each participant to receive initiation safely and with awareness.\n\nFull attendance across all five days is essential. The days build upon each other and initiation is offered only to those who have completed the full program.",
      },
      {
        q: "What are the daily timings?",
        a: "Session timings vary slightly by center. As a general guide, morning sessions begin around 7:00 AM and the day concludes by early evening. Confirmed timings will be communicated to you after registration. For in-person centers, contact your center directly for the exact schedule.",
      },
      {
        q: "Can I join if I miss a day?",
        a: "No — full attendance across all five days is required for program completion and to receive initiation. If you are unable to commit to the full five days for a given month, we encourage you to register for a future intake instead. Workshops run every month, beginning on the first Saturday.",
      },
    ],
  },
  {
    theme: "Online Participants",
    items: [
      {
        q: "How will I receive the Zoom link?",
        a: "Once your registration is confirmed, the Zoom link for your selected workshop will be sent to the email address you provide — typically a few days before the workshop begins. Please check your spam or promotions folder if you do not see it in your inbox.",
      },
      {
        q: "What time zone are online sessions held in?",
        a: "Online sessions are currently scheduled in Nepal Standard Time (NPT, UTC+5:45). The confirmed daily schedule, including times converted for common international time zones, will be sent to you with the Zoom link before the workshop.",
      },
      {
        q: "What equipment do I need?",
        a: "A stable internet connection and a device with a camera and microphone are required — a laptop or desktop is recommended for the best experience. A quiet, private space where you can sit undisturbed during sessions is important. Headphones improve audio quality during guided meditation.",
      },
    ],
  },
  {
    theme: "Fees & Registration",
    items: [
      {
        q: "Is there a fee for the Mahayog Meditation program?",
        a: "There is no fixed fee for participation or initiation. The teachings are offered freely as a spiritual gift.\n\nDonations — known in the yogic tradition as Guru dakshina — are welcomed as an expression of gratitude and reciprocity, and may be offered at the center at your discretion. No one is turned away for inability to contribute.\n\nFor those attending in person at a Nepal center, contributions may be made directly at the center. For international participants joining online, guidance on offering Guru dakshina will be shared alongside the workshop details.",
      },
      {
        q: "When should I register?",
        a: "We recommend registering as early as possible, as space at in-person centers is limited. Registration typically closes a few days before the workshop date. If you miss a particular month's intake, you are welcome to register for the following month — workshops run on the first Saturday of every month.",
      },
      {
        q: "Can I cancel or reschedule?",
        a: "If you are unable to attend your selected workshop, please notify your center as soon as possible. Your registration can be transferred to a future monthly intake. As there is no fee involved, there is no financial penalty — we simply ask for timely notice so your place can be offered to another seeker.",
      },
    ],
  },
  {
    theme: "After Initiation",
    items: [
      {
        q: "What happens after I receive initiation?",
        a: "Initiation is a beginning, not an end. Once Kundalini is awakened, the energy continues to purify and unfold naturally through your daily meditation practice. After the workshop you will receive guidance on how to maintain and deepen your practice independently.",
      },
      {
        q: "How do I continue my practice?",
        a: "Participants receive instruction in Mahayog self-practice, which can be maintained at home without additional equipment or guidance. Ongoing resources — including teachings, group sittings (satsang), and access to the broader Mahayog community — are available through your center and through this website.",
      },
      {
        q: "Is there ongoing support after initiation?",
        a: "Yes. Mahayog is not a one-time event — it is a living practice. Your local center provides regular satsang (community gatherings) and access to the Guru's teachings. International participants are also supported through online satsang and the global Mahayog network.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e8dece]">
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
      <div
        className={`overflow-hidden transition-all duration-500 ${open ? "max-h-[600px] pb-5" : "max-h-0"}`}
      >
        <div className="text-sm text-[#6b6158] leading-relaxed whitespace-pre-line">{a}</div>
      </div>
    </div>
  );
}

const NAV_SECTIONS = [
  { id: "what-is",      label: "What is Meditation", short: "Foundations"         },
  { id: "mahayog",      label: "Himalayan Mahayog",  short: "Mahayog"        },
  { id: "how-it-works", label: "How It Works",       short: "How It Works"   },
  { id: "benefits",     label: "Benefits",           short: "Benefits"       },
  { id: "origins",      label: "Ancient Origins",    short: "Origins"        },
  { id: "faq",          label: "FAQ",                short: "FAQ"            },
  { id: "register",     label: "Register",           short: "Register"       },
];

function HorizontalSectionNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="sticky top-[60px] z-30 flex justify-center px-4 py-3 bg-[#faf9f6]/80 backdrop-blur-sm border-b border-[#e8dcc8]/60">
      <div className="flex w-full max-w-4xl rounded-full border border-[#ddd0ba] bg-white overflow-hidden">
        {NAV_SECTIONS.map(({ id, short }, i) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`relative flex-1 flex items-center justify-center py-3 px-2 text-[11px] tracking-widest uppercase font-medium transition-all duration-200 whitespace-nowrap ${
                id === "register"
                  ? "text-[#b8892a] hover:text-[#96711e]"
                  : isActive ? "text-[#b8892a]" : "text-[#7a7060] hover:text-[#3d3830]"
              }`}
            >
              {i > 0 && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-px bg-[#ddd0ba]" />
              )}
              {id === "register" ? (
                <span className="flex items-center gap-1.5">
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="#b8892a" className="shrink-0">
                    <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z"/>
                  </svg>
                  {short}
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="#b8892a" className="shrink-0">
                    <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z"/>
                  </svg>
                </span>
              ) : short}
              {(isActive || id === "register") && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-px bg-[#b8892a]" />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}

function SidebarNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="hidden xl:flex fixed right-7 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-5">
      {NAV_SECTIONS.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className="group flex items-center gap-3"
            onClick={(e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }}
          >
            <span
              className={`text-xs tracking-widest uppercase transition-all duration-300 ${
                isActive
                  ? "text-[#b8892a] opacity-100 translate-x-0"
                  : "text-[#9a8e7e] opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "w-2.5 h-2.5 bg-[#b8892a]"
                  : "w-1.5 h-1.5 bg-[#c4b49a] group-hover:bg-[#b8892a] group-hover:scale-125"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}

export default function MahayogMeditation() {
  return (
    <div className="bg-[#faf9f6] text-[#3d3830]" style={{ scrollBehavior: "smooth" }}>
      <SidebarNav />

      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[58vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}images/meditation-hero.png`}
          alt="Meditating at sunrise in the Himalayas"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/70 via-[#2c1a08]/40 to-[#faf9f6]" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#e8c56a]" />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/>
            </svg>
            <div className="h-px w-12 bg-[#e8c56a]" />
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light text-white leading-none mb-4">
            Himalayan Siddha Mahayog Meditation
          </h1>
          <p className="text-lg text-[#f0e4c8] tracking-widest uppercase font-light mb-8">
            The Vedic Science of Self-Realization
          </p>
          <a
            href="#register"
            className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-7 py-3 rounded-full tracking-wider transition-colors duration-200"
          >
            Register <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>
      </section>

      <HorizontalSectionNav />

      {/* ── WHAT IS MEDITATION ── */}
      <section id="what-is" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">The Essence</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2 mb-6 leading-snug">
              What is Meditation?
            </h2>
            <p className="text-base leading-relaxed text-[#5a5248] mb-4">
              Meditation is a process of inner alignment, where the mind naturally settles and awareness turns toward its source.
            </p>
            <p className="text-base leading-relaxed text-[#5a5248] mb-4">
              Its ultimate aim is to realize the true Self and Ultimate Reality—freeing oneself from ignorance and ego. Along the way, practitioners often experience:
            </p>
            <div className="space-y-2">
              {[
                "deep inner peace and emotional balance",
                "reduced stress, fear, and mental agitation",
                "increased clarity, compassion, and resilience",
                "a growing sense of meaning, love, and inner joy",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#b8892a] mt-2 shrink-0" />
                  <span className="text-base text-[#5a5248] leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={`${import.meta.env.BASE_URL}images/meditation-nature.png`}
              alt="Meditating in nature"
              className="w-full rounded-2xl object-cover shadow-md"
              style={{ height: "420px" }}
            />
          </div>
        </div>
      </section>

      {/* ── WHAT IS HIMALAYAN SIDDHA MAHAYOG ── */}
      <section id="mahayog" className="py-20 px-6 bg-[#fdf6ec]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center mb-14">
            {/* Text */}
            <div>
              <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">The Practice</span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#3d3830] mt-2 mb-6 leading-tight">
                Himalayan Siddha Mahayog
              </h2>
              <p className="text-base leading-relaxed text-[#5a5248] mb-6">
                Himalayan Siddha Mahāyog Meditation is the revival of an ancient Vedic spiritual science known as Surat-Śhabda Yoga. It is a path for transformation through direct experience and self-discovery that can be practiced by all.
              </p>
              <p className="text-base leading-relaxed text-[#5a5248] mb-6">
                Mahayog brings together two powerful practices: <span className="text-[#b8892a] font-semibold italic">Ajapa Japa</span>, automatic inner chanting of the Divine Name that continues in the background of awareness and <span className="text-[#b8892a] font-semibold italic">Nāda-anusandhān</span>, listening to the inner sound. These are activated through <span className="text-[#b8892a] font-semibold italic">Shaktipat</span>, a transmission of spiritual energy from enlightened Guru, His Holiness Jagadguru Mahayogi Siddhababa, to the student, which awakens inner awareness (Kundalini Shakti).
              </p>
              <p className="text-base leading-relaxed text-[#5a5248]">
                With this meditative path, Hatha, Mantra, Laya, and Raja Yoga naturally manifest within the practitioner. By practicing Mahayog, all four yoga types unfold.
              </p>
            </div>

            {/* Venn Diagram */}
            <VennDiagram />
          </div>

        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="pt-0 pb-20 bg-white">
        {/* Wave top edge — white wave cuts into the cream section above */}
        <div className="w-full -mt-14 relative z-10">
          <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
            <path d="M0,90 C240,20 480,70 720,35 C960,0 1200,55 1440,25 L1440,90 L0,90 Z" fill="white"/>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
            <img
              src={`${import.meta.env.BASE_URL}images/meditation-howitworks.png`}
              alt="Meditating in a Himalayan ashram"
              className="w-full rounded-2xl object-cover shadow-md order-2 md:order-1"
              style={{ height: "400px" }}
            />
            <div className="order-1 md:order-2">
              <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">How It Works</span>
              <h3 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#3d3830] mt-2 mb-5 leading-snug">
                The Practitioner as Observer
              </h3>
              <p className="text-base leading-relaxed text-[#5a5248] mb-5">
                In Mahayog, the practitioner is not an active "doer" but an "observer" — meditative experiences and states manifest automatically. This practice cannot be learned from books alone; it is awakened experientially through <span className="text-[#b8892a] font-semibold italic">Shaktipat</span> initiation.
              </p>
              <p className="text-base leading-relaxed text-[#5a5248] mb-5">
                Upon receiving <span className="text-[#b8892a] font-semibold italic">Shaktipat</span> Dīkṣā, a spark is transmitted that awakens the dormant Kundalini energy coiled at the base of the spine. The Kundalini Shakti begins to rise through the subtle chakra system, purifying and opening the seeker's inner energy channels (nāḍīs).
              </p>
              <p className="text-base leading-relaxed text-[#5a5248]">
                Jagadguru Mahayogi Siddhababa can awaken a person's Kundalini Shakti by mere glance, touch, mantra, or pure intention at a distance.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── YOUR JOURNEY ── standalone hero-weight section */}
      <section className="py-24 px-6 bg-[#2d2720]">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.3em] text-xs text-white/70 font-medium">Your Journey</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-white mt-3 mb-4 leading-snug">
              Beginning the Path
            </h2>
            <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
              Three steps from where you are now to awakening.
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-0 relative mb-16">
            {/* Connecting lines desktop — two segments that stop at each circle's edge */}
            <div className="hidden md:block absolute top-[48px] left-[calc(16.66%+48px)] w-[calc(33.33%-96px)] h-px bg-gradient-to-r from-white/20 to-white/50" />
            <div className="hidden md:block absolute top-[48px] left-[calc(50%+48px)] w-[calc(33.33%-96px)] h-px bg-gradient-to-r from-white/50 to-white/20" />

            {[
              {
                step: "01",
                sub: "Begin here",
                title: "Register",
                desc: "Express your intention to receive Shaktipat initiation by registering for an upcoming workshop.",
              },
              {
                step: "02",
                sub: "The initiation",
                title: "5-Day Workshop",
                desc: "Receive Shaktipat Dīkṣā from Jagadguru Mahayogi Siddhababa. Kundalini awakening and the inner journey begins under direct guidance.",
              },
              {
                step: "03",
                sub: "The unfolding",
                title: "Continue at Home",
                desc: "Return home with an awakened practice. Meditate daily as Kundalini continues to rise and deepen, supported by the Guru's ongoing grace.",
              },
            ].map((item, i) => (
              <div key={item.step} className="flex-1 flex flex-col items-center text-center px-6 md:px-10 relative">
                {/* Badge */}
                <div className="relative z-10 w-[96px] h-[96px] rounded-full border-2 border-[#b8892a] bg-[#b8892a]/20 flex flex-col items-center justify-center mb-6 shadow-[0_0_32px_rgba(184,137,42,0.35)]">
                  <span className="font-['Cormorant_Garamond'] text-4xl font-bold text-[#e8c06a] leading-none">{item.step}</span>
                </div>
                {/* Mobile arrow */}
                {i < 2 && (
                  <div className="md:hidden text-[#b8892a]/70 text-3xl mb-6">↓</div>
                )}
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 font-medium mb-2">{item.sub}</span>
                <h4 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#f0d898] mb-3 leading-snug">{item.title}</h4>
                <p className="text-sm text-white/75 leading-relaxed max-w-[220px]">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#register"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#b8892a] hover:bg-[#d4a843] text-white font-semibold tracking-wide text-sm transition-all duration-300 shadow-[0_4px_24px_rgba(184,137,42,0.4)] hover:shadow-[0_4px_32px_rgba(184,137,42,0.65)] hover:scale-105"
            >
              Register for the Workshop
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
            <p className="text-xs text-white/50 mt-4">Upcoming dates available — limited places per retreat.</p>
          </div>

        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section id="benefits" className="py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">What Unfolds</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2 mb-3">
              Benefits of the Practice
            </h2>
            <p className="text-sm text-[#7a7068] max-w-xl mx-auto leading-relaxed">
              These changes happen gradually and organically through awakened Kundalini and the Guru's grace.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
            {(() => {
              // Build a lookup of items by title for flexible ordering
              const flat = BENEFIT_CATEGORIES.flatMap((cat) =>
                cat.items.map((b) => ({ ...b, catLabel: cat.label, catColor: cat.color }))
              );
              const byTitle = Object.fromEntries(flat.map((x) => [x.title, x]));
              const order = [
                "Positive Transformation",
                "Relief from Suffering",
                "Inner Peace",
                "Ajapa Japa",
                "Anahad Nāda",
                "Accelerated Growth",
              ];
              return order.map((title) => {
                const b = byTitle[title];
                return (
                  <div
                    key={b.title}
                    className="flex flex-col p-5 bg-white rounded-xl border-2 border-[#c4a872] shadow-sm hover:shadow-md hover:border-[#b8892a] transition-all duration-300 group"
                  >
                    {/* Category tag */}
                    <span
                      className="inline-block text-[9px] uppercase tracking-[0.2em] font-semibold px-2 py-0.5 rounded-full mb-3 self-start"
                      style={{ color: b.catColor, background: `${b.catColor}22` }}
                    >
                      {b.catLabel}
                    </span>

                    {/* Icon + title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `${b.catColor}30`, border: `1.5px solid ${b.catColor}70` }}
                      >
                        <BenefitIcon type={b.icon} />
                      </div>
                      <div>
                        <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2d2011] leading-tight">
                          {b.title}
                        </h3>
                        <p className="text-[10px] uppercase tracking-[0.15em] text-[#7a5014]">{b.subtitle}</p>
                      </div>
                    </div>

                    {/* Read more hint — collapses on hover */}
                    <div className="overflow-hidden max-h-6 group-hover:max-h-0 transition-all duration-300 ease-in-out">
                      <p className="mt-2 text-[11px] text-[#b8892a] tracking-wide flex items-center gap-1 opacity-100 group-hover:opacity-0 transition-opacity duration-200">
                        <span>Read more</span>
                        <span>›</span>
                      </p>
                    </div>

                    {/* Description — slides in on hover */}
                    <div className="overflow-hidden max-h-0 group-hover:max-h-48 transition-all duration-500 ease-in-out">
                      <p className="text-sm text-[#5a5248] leading-relaxed pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">{b.desc}</p>
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </section>

      {/* ── ANCIENT ORIGINS ── */}
      <section id="origins" className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${import.meta.env.BASE_URL}images/meditation-origins.png`} alt="" aria-hidden className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f6]/95 via-[#faf9f6]/75 to-[#faf9f6]/95" />
          <div className="absolute inset-0 bg-[#f5ece0]/40" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_280px] gap-12 items-start">
            {/* Left: text */}
            <div>
              <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">A Living Tradition</span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2 mb-6 leading-snug">
                Ancient Origins & Revival
              </h2>
              <p className="text-base leading-relaxed text-[#5a5248] mb-5">
                Himalayan Siddha Mahāyog is the revival of Surat-Śhabda Yoga — literally the "union of the soul (surat) with the divine Word or sound (shabd)." Communion with the divine Sound Current is known to be the only effective means for liberating the soul, according to spiritual luminaries such as Guru Nanak.
              </p>
              <p className="text-base leading-relaxed text-[#5a5248] mb-5">
                Nearly 600–700 years ago, the great Saint Jagadguru Ramanandacharya propagated this divine knowledge for the upliftment of people. His lineage included luminaries such as Kabir, Ravidas, Tulsidas, and Mira Bai — all of whom emphasized that sincere chanting of the Divine Name and listening to the inner sound can lead to the highest realization.
              </p>
              <p className="text-base leading-relaxed text-[#5a5248] mb-8">
                Over time, this inner yogic science became esoteric, surviving only among a few Himalayan sages for 200–400 years, rarely taught openly. Its contemporary resurgence is considered a divine blessing for humanity.
              </p>
              <div className="bg-white/70 backdrop-blur-sm border border-[#e0d0b8] rounded-2xl p-7 flex gap-6 items-start">
                <div className="flex-1">
                  <span className="uppercase tracking-[0.2em] text-xs text-[#b8892a] font-semibold block mb-3">Revival by the Guru</span>
                  <p className="text-base leading-relaxed text-[#5a5248]">
                    In the present era, Surat-Śhabda Yoga has been re-introduced as Himalayan Siddha Mahayog by <strong className="text-[#3d3830]">Anant Shri Vibhushit Jagadguru Ramanandacharya Swami Ramakrishnacharya Ji Maharaj</strong> — known to devotees as Jagadguru Mahayogi Siddhababa. His Holiness is recognized for his mastery of samādhi and his unique ability to transmit that state to others. Under his guidance, thousands have received Kundalini awakening and advanced spiritual progression.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-[#b8892a] hover:text-[#96711e] transition-colors duration-200 group"
                  >
                    Learn More
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">›</span>
                  </a>
                </div>
                <img
                  src={`${import.meta.env.BASE_URL}images/gurudev-sketch.png`}
                  alt="Jagadguru Mahayogi Siddhababa — sketch portrait"
                  className="w-32 shrink-0 rounded-xl object-cover shadow-sm"
                />
              </div>
            </div>

            {/* Right: saint portraits */}
            <div className="flex flex-col gap-3">
              {/* Featured Ramanandacharya portrait */}
              <div className="bg-white/70 backdrop-blur-sm border border-[#e0d0b8] rounded-2xl p-4 flex gap-4 items-center mb-2">
                <img
                  src={`${import.meta.env.BASE_URL}images/saint-ramananda.jpg`}
                  alt="Jagadguru Ramanandacharya"
                  className="w-20 h-24 rounded-xl object-cover object-top shadow-md border border-[#e0d0b8] shrink-0"
                />
                <div>
                  <p className="font-['Cormorant_Garamond'] text-base font-semibold text-[#3d3830] leading-tight">Jagadguru Ramanandacharya</p>
                  <p className="text-[11px] text-[#9a8878] mt-1">c. 1400 CE</p>
                  <p className="text-xs text-[#5a5248] mt-2 leading-relaxed">Propagator of Surat-Śhabda Yoga for the upliftment of humanity</p>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#b8892a] font-medium mb-1">Prominent Practitioners</p>
              {[
                { name: "Kabir", img: `${import.meta.env.BASE_URL}images/saint-kabir.jpg`, years: "c. 1440–1518" },
                { name: "Ravidas", img: `${import.meta.env.BASE_URL}images/saint-ravidas.jpg`, years: "c. 1450–1520" },
                { name: "Tulsidas", img: `${import.meta.env.BASE_URL}images/saint-tulsidas.jpg`, years: "c. 1532–1623" },
                { name: "Mira Bai", img: `${import.meta.env.BASE_URL}images/saint-mirabai.jpg`, years: "c. 1498–1547" },
              ].map((s) => (
                <div key={s.name} className="flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-[#e0d0b8] rounded-xl p-2.5 hover:bg-white/80 transition-all duration-200">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-12 h-12 rounded-lg object-cover object-top shrink-0 shadow-sm"
                  />
                  <div>
                    <p className="font-['Cormorant_Garamond'] text-sm font-semibold text-[#3d3830] leading-tight">{s.name}</p>
                    <p className="text-[10px] text-[#9a8878] mt-0.5">{s.years}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA — links to future Lineage page */}
          <div className="mt-14 pt-10 border-t border-[#e0d0b8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-['Cormorant_Garamond'] text-xl text-[#3d3830] font-light">Discover the Full Lineage of the Tradition</p>
              <p className="text-sm text-[#9a8878] mt-1">Explore the unbroken chain of masters from ancient times to the present day.</p>
            </div>
            <a
              href="#"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#b8892a] text-[#b8892a] text-sm font-medium hover:bg-[#b8892a] hover:text-white transition-all duration-300 group"
            >
              Explore the Lineage
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">›</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 px-6 bg-gradient-to-b from-[#e8dcc8] via-[#ede3cf] to-[#e2d4b8]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Common Questions</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-10">
            {FAQ_GROUPS.map((group) => (
              <div key={group.theme}>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[#b8892a] text-xs">◆</span>
                  <span className="uppercase tracking-[0.2em] text-xs text-[#b8892a] font-medium">{group.theme}</span>
                </div>
                <div>
                  {group.items.map((f) => (
                    <FAQItem key={f.q} q={f.q} a={f.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloatingRegisterButton label="Register" />

      {/* ── REGISTER ── */}
      <section
        id="register"
        className="py-20 px-6"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #f0a832 0%, #d4821a 45%, #a85c10 100%)" }}
      >
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="uppercase tracking-[0.25em] text-xs text-[#5a2e04] font-medium">Register</span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#2e1405] mt-2">Meditation Registration</h2>
          <p className="text-sm text-[#2e1405] mt-3">Begin your journey into Himalayan Siddha Mahāyog Meditation.</p>
        </div>
        <EnrolmentForm program="meditation" />
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6 border-t border-[#e8dece] bg-[#f5ede0]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-['Cormorant_Garamond'] text-lg font-medium text-[#b8892a]">
            Mahayogi Siddhababa Spiritual Academy
          </span>
          <div className="flex items-center gap-6">
            <Link href="/">
              <span className="text-sm text-[#7a7068] hover:text-[#b8892a] transition-colors cursor-pointer">About the Academy</span>
            </Link>
            <span className="text-sm text-[#7a7068]">·</span>
            <p className="text-xs text-[#9a8f84]">A not-for-profit, volunteer-run organization — Nepal</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
