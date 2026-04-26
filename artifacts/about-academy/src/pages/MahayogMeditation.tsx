import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";

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
    label: "Inner Experiences",
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

const FAQS = [
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

export default function MahayogMeditation() {
  return (
    <div className="bg-[#faf9f6] text-[#3d3830]" style={{ scrollBehavior: "smooth" }}>

      {/* ── STICKY NAV ── */}
      <nav className="sticky top-0 z-50 bg-[#faf9f6]/95 backdrop-blur-sm border-b border-[#e8dece]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
          <Link href="/">
            <span className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#b8892a] tracking-wide cursor-pointer hover:text-[#9d7422] transition-colors">
              Mahayogi Siddhababa Academy
            </span>
          </Link>
          <div className="flex items-center gap-7">
            <a href="#what-is" className="text-sm text-[#6b6158] hover:text-[#b8892a] transition-colors tracking-wide">What is Mahayog</a>
            <a href="#benefits" className="text-sm text-[#6b6158] hover:text-[#b8892a] transition-colors tracking-wide">Benefits</a>
            <a href="#origins" className="text-sm text-[#6b6158] hover:text-[#b8892a] transition-colors tracking-wide">Origins</a>
            <a href="#faq" className="text-sm bg-[#b8892a] text-white px-4 py-1.5 rounded-full hover:bg-[#9d7422] transition-colors tracking-wide">FAQ</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/meditation-hero.png"
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
            href="#what-is"
            className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-7 py-3 rounded-full tracking-wider transition-colors duration-200"
          >
            Begin Exploring <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>
      </section>

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
              src="/images/meditation-nature.png"
              alt="Meditating in nature"
              className="w-full rounded-2xl object-cover shadow-md"
              style={{ height: "420px" }}
            />
            <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-2xl bg-[#f5ece0] border border-[#e8d5b0] flex flex-col items-center justify-center shadow-sm">
              <span className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#b8892a] leading-none">4</span>
              <span className="text-[9px] uppercase tracking-wider text-[#9a8f84] mt-0.5">Yogas in One</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS HIMALAYAN SIDDHA MAHAYOG ── */}
      <section className="py-20 px-6 bg-[#fdf6ec]">
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
      <section className="pt-0 pb-20 bg-white">
        {/* Wave top edge — white wave cuts into the cream section above */}
        <div className="w-full -mt-14 relative z-10">
          <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
            <path d="M0,90 C240,20 480,70 720,35 C960,0 1200,55 1440,25 L1440,90 L0,90 Z" fill="white"/>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
            <img
              src="/images/meditation-howitworks.png"
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <img src="/images/meditation-origins.png" alt="" aria-hidden className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f6] via-[#faf9f6]/85 to-[#faf9f6]" />
          <div className="absolute inset-0 bg-[#f5ece0]/55" />
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
                Himalayan Siddha Mahāyog is the revival of Surat-Śhabda Yoga — literally the "union of the soul (surat) with the divine Word or sound (shabd)." According to Guru Nanak, communion with the divine Sound Current is "the only effective means" for liberating the soul.
              </p>
              <p className="text-base leading-relaxed text-[#5a5248] mb-5">
                Nearly 600–700 years ago, the great Saint Jagadguru Ramanandacharya propagated this divine knowledge for the upliftment of people. His lineage included luminaries such as Kabir, Ravidas, Tulsidas, and Mira Bai — all of whom emphasized that sincere chanting of the Divine Name and listening to the inner sound can lead to the highest realization.
              </p>
              <p className="text-base leading-relaxed text-[#5a5248] mb-8">
                Over time, this inner yogic science became esoteric, surviving only among a few Himalayan sages for 200–400 years, rarely taught openly. Its contemporary resurgence is considered a divine blessing for humanity.
              </p>
              <div className="bg-white/70 backdrop-blur-sm border border-[#e0d0b8] rounded-2xl p-7">
                <span className="uppercase tracking-[0.2em] text-xs text-[#b8892a] font-semibold block mb-3">Revival by the Guru</span>
                <p className="text-base leading-relaxed text-[#5a5248]">
                  In the present era, Surat-Śhabda Yoga has been re-introduced as Himalayan Siddha Mahayog by <strong className="text-[#3d3830]">Anant Shri Vibhushit Jagadguru Ramanandacharya Swami Ramakrishnacharya Ji Maharaj</strong> — known to devotees as Mahayogi Siddhababa. In 2019, an assembly of spiritual leaders from all major Hindu monastic lineages honored him with the title Jagadguru ("universal teacher"), recognizing his mastery of samādhi and his unique ability to transmit that state to others. Under his guidance, thousands of people have received Kundalini awakening and tangible spiritual experiences.
                </p>
              </div>
            </div>

            {/* Right: saint portraits */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#b8892a] font-medium mb-1">The Lineage</p>
              {[
                { name: "Jagadguru Ramanandacharya", img: "/images/saint-ramananda.jpg", years: "c. 1400 CE" },
                { name: "Kabir", img: "/images/saint-kabir.jpg", years: "c. 1440–1518" },
                { name: "Ravidas", img: "/images/saint-ravidas.jpg", years: "c. 1450–1520" },
                { name: "Tulsidas", img: "/images/saint-tulsidas.jpg", years: "c. 1532–1623" },
                { name: "Mira Bai", img: "/images/saint-mirabai.jpg", years: "c. 1498–1547" },
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
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 px-6 bg-[#fdf6ec]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Common Questions</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div>
            {FAQS.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
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
