import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";

const BENEFITS = [
  {
    title: "Inner Peace & Emotional Balance",
    desc: "A deepening calmness of mind arises — restless thoughts slow, and peace emerges from within, independent of external circumstances. Compassion, forgiveness, and equanimity naturally develop alongside a felt sense of divine grace in daily life.",
  },
  {
    title: "Relief from Suffering",
    desc: "As Kundalini ascends, it dissolves mental and physical blockages. Sorrows, fears, and anxieties gradually diminish. Lifelong phobias often fade, ailments are alleviated, and the overall karmic weight on the soul feels lighter.",
  },
  {
    title: "Positive Transformation",
    desc: "A life-affirming outlook naturally develops. Negative habits lose their grip; joy, optimism, and resilience arise from within — not as forced attitudes, but as the result of genuine inner fulfillment.",
  },
  {
    title: "Ajapa Japa — Effortless Divine Name",
    desc: "Without deliberate effort, the sacred primordial Name (Rām) begins reverberating inside continuously. This phenomenon — 'without japa, the japa happens' — continues whether one is working, resting, or sleeping.",
  },
  {
    title: "Anahad Nāda — Inner Divine Sound",
    desc: "Seekers begin to hear the mystic Anahad Nāda — the unstruck, subtle sound of the universe. Perceived as a flute, bell, harp, or cosmic roar, this inner sound lifts the seeker to higher states of consciousness.",
  },
  {
    title: "Accelerated Spiritual Growth",
    desc: "The Guru's Shaktipat immediately awakens Kundalini — the foundational energy for all spiritual progress. What might otherwise take lifetimes of effort unfolds in an accelerated, protected manner under the Guru's ongoing grace.",
  },
];

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
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">The Practice</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#3d3830] mt-2 mb-6 leading-snug">
              Himalayan Siddha Mahayog
            </h2>
            <p className="text-base leading-relaxed text-[#5a5248] mb-6">
              Himalayan Siddha Mahāyog Meditation is the revival of an ancient Vedic spiritual science known as Surat-Śhabda Yoga. It is a path for transformation through direct experience and self-discovery that can be practiced by all.
            </p>
            <p className="text-base leading-relaxed text-[#5a5248] mb-6">
              Mahayog brings together two powerful practices: Ajapa Japa, automatic inner chanting of the Divine Name that continues in the background of awareness and Nāda-anusandhān, listening to the inner sound. These are activated through Shaktipat, a transmission of spiritual energy from enlightened Guru, His Holiness Jagadguru Mahayogi Siddhababa, to the student, which awakens inner awareness (Kundalini Shakti).
            </p>
            <p className="text-base leading-relaxed text-[#5a5248]">
              With this meditative path, Hatha, Mantra, Laya, and Raja Yoga naturally manifest within the practitioner. By practicing Mahayog, all four yoga types unfold.
            </p>
          </div>

          {/* How it works */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <img
              src="/images/meditation-kundalini.png"
              alt="Kundalini energy visualization"
              className="w-full rounded-2xl object-cover shadow-md order-2 md:order-1"
              style={{ height: "400px" }}
            />
            <div className="order-1 md:order-2">
              <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">How It Works</span>
              <h3 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#3d3830] mt-2 mb-5 leading-snug">
                The Practitioner as Observer
              </h3>
              <p className="text-base leading-relaxed text-[#5a5248] mb-5">
                In Mahayog, the practitioner is not an active "doer" but an "observer" — meditative experiences and states manifest automatically. This practice cannot be learned from books alone; it is awakened experientially through Shaktipat initiation.
              </p>
              <p className="text-base leading-relaxed text-[#5a5248] mb-5">
                Upon receiving Shaktipat Dīkṣā, a spark is transmitted that awakens the dormant Kundalini energy coiled at the base of the spine. The Kundalini Shakti begins to rise through the subtle chakra system, purifying and opening the seeker's inner energy channels (nāḍīs).
              </p>
              <p className="text-base leading-relaxed text-[#5a5248]">
                Jagadguru Mahayogi Siddhababa can awaken a person's Kundalini Shakti by mere glance, touch, mantra, or pure intention at a distance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section id="benefits" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">What Unfolds</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#3d3830] mt-2 mb-4">
              Benefits of the Practice
            </h2>
            <p className="text-sm text-[#7a7068] max-w-xl mx-auto leading-relaxed">
              These changes happen gradually and organically as a result of the awakened Kundalini and the Guru's ongoing grace.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {BENEFITS.map((b, i) => (
              <div
                key={b.title}
                className="flex gap-5 p-6 bg-white rounded-2xl border border-[#ede4d5] shadow-sm hover:shadow-md hover:border-[#d4a843]/50 transition-all duration-300 group"
              >
                <div className="shrink-0 pt-0.5">
                  <span className="font-['Cormorant_Garamond'] text-2xl font-light text-[#d4a843]/50 group-hover:text-[#d4a843]/80 transition-colors duration-300 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#3d3830] mb-2 leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-sm text-[#6b6158] leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
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
          <div className="max-w-3xl">
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
