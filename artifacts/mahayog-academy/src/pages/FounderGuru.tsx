import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link, useLocation } from "wouter";
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown, Flame, Heart, Shield, Sparkles, Users } from "lucide-react";

const b = import.meta.env.BASE_URL;

const TEACHINGS = [
  { icon: Flame,    text: "Inner development through Mahayog Meditation, self-inquiry and introspection" },
  { icon: Heart,    text: "Befriending the mind and refining character" },
  { icon: Shield,   text: "Ethical living grounded in awareness and responsibility" },
  { icon: Sparkles, text: "Devotion and discernment" },
  { icon: Users,    text: "Seva (selfless service) as a natural expression of inner realization" },
];

const PILLARS = [
  {
    skt: "Seva",
    label: "Selfless Service",
    desc: "Acting in the world without attachment to reward, service as a natural expression of expanded awareness and care for all.",
  },
  {
    skt: "Sumiran",
    label: "Inner Remembrance",
    desc: "Continuous inner recognition of the divine source, an unbroken thread of awareness woven through everyday life.",
  },
  {
    skt: "Samarpan",
    label: "Wholehearted Surrender",
    desc: "The deepest act of trust, releasing the small self's grip and opening fully to the wisdom of the source of creation.",
  },
];

const CENTERS = [
  { region: "Nepal", cities: ["Kathmandu", "Pokhara", "Surkhet", "Tikapur", "Chitwan", "Devghat", "Barahachettra Dham"] },
  { region: "Global", cities: ["India", "North America", "Europe", "Australia"] },
];

const CREDENTIALS = [
  {
    title: "Jagadguru",
    sub: "Guru of the World",
    teaser: "A title reserved for a rare master whose influence extends beyond sectarian boundaries.",
    body: `The term "Jagadguru" is derived from the Sanskrit jagat (world or cosmos) and guru (one who dispels darkness). In 2019, this title was formally bestowed upon His Holiness by an international assembly of realized sages representing all six major Sanātana Dharma lineages: Vaiṣṇavism, Śaivism, Śāktism, Smārtism, Sauryaism, and Gāṇapatyaism.\n\nDuring the ceremony, his mastery of samādhi, his capacity to guide others into higher states of awareness, and his completion of the Shree Ram Tārak Brahma Mahāyajña were especially noted. His monastic name was formally conferred as Jagadguru Shree Ramanandacharya Swami Shree Ramakrishnacharya Ji Maharaj, and he was bestowed the tridaṇḍam, the sacred staff symbolizing complete dedication of body, mind, and speech to divine service.`,
  },
  {
    title: "Shaktipat Acharya",
    sub: "Transmission of Kundalini Awakening",
    teaser: "The sacred capacity to awaken dormant spiritual energy within a sincere seeker.",
    body: `Śakti refers to the primordial spiritual energy, often described as Kundalini, while pāta signifies descent. Shaktipat is the sacred transmission through which a realized Guru awakens this dormant energy within a sincere seeker.\n\nJagadguru Mahayogi Siddhababa is recognized as a Shaktipat Acharya, imparting this awakening through various means, glance, mantra, touch, or pure intention, according to the readiness of the seeker. This transmission initiates the inner journey of transformation under the guidance of the Guru's grace.`,
  },
  {
    title: "Samādhi Siddha Puruṣa",
    sub: "Master of Samādhi",
    teaser: "His Holiness attained mastery of samādhi from a very young age.",
    body: `His Holiness attained mastery of samādhi, the highest state of yogic absorption, from a very young age. In later years, at the request of his disciples, he publicly demonstrated bhū-samādhi (underground samādhi) on multiple occasions, drawing wide attention to the experiential depth of yogic realization described in the Vedic tradition.\n\nThese demonstrations have inspired renewed inquiry into Vedic science and direct spiritual experience, highlighting the practical power of disciplined inner practice.`,
  },
  {
    title: "Ayurveda Acharya",
    sub: "Master of the Ancient Science of Life",
    teaser: "A master of Āyurveda including rare diagnostic methods such as Nāḍi Vijñāna.",
    body: `His Holiness is a master of Āyurveda, the ancient science of life and holistic healing. He teaches classical Ayurvedic knowledge, including diagnostic methods that are increasingly rare today, such as Nāḍi Vijñāna (pulse diagnosis).\n\nUnder his guidance, Ayurvedic remedies are prepared and distributed to support free and accessible healthcare for those in need. He is also working toward the establishment of Nepal's first Ayurveda University, dedicated to preserving and advancing this sacred medical tradition.`,
  },
  {
    title: "Master of Himalayan Siddha Mahayog",
    sub: "Brahmavidyā, Knowledge of Ultimate Truth",
    teaser: "A powerful meditative path revived from Himalayan sages, now accessible to seekers worldwide.",
    body: `Himalayan Siddha Mahayog is a powerful and accessible meditative path, recognized as Brahmavidyā, the knowledge of ultimate truth. This practice unfolds through the grace of the Guru and uniquely begins with Kundalini awakening (Shaktipat). Mahayog activates a complete system for physical, mental, and spiritual wellbeing, ultimately guiding the practitioner toward self-realization.\n\nJagadguru Mahayogi Siddhababa revived this sacred practice, which had been concealed and preserved by Himalayan sages for over four centuries. Through his guidance, it is now accessible to seekers worldwide. This living Vedic tradition has been transmitted through an unbroken lineage of enlightened Gurus. His Holiness serves as the present Āchārya of this Brahmavidyā, having received the responsibility from his revered Guru, His Holiness Narayan Das Ji Maharaj.`,
  },
  {
    title: "Prabal Janasewa Shree",
    sub: "State Honour for Exemplary Public Service, Awarded by the President of Nepal",
    teaser: "A title of national distinction conferred by the President of Nepal for selfless service to society.",
    body: `Prabal Janasewa Shree is one of Nepal's most distinguished state honours, awarded for exemplary, selfless service to the public.\n\nThis title was personally conferred upon His Holiness Jagadguru Mahayogi Siddhababa by Dr. Ram Baran Yadav, former President of Nepal, in recognition of His Holiness's tireless contributions to the spiritual, cultural, educational, and humanitarian welfare of the nation and its people.`,
  },
];

const JAGADGURU_SLIDES = [
  { src: "jagadguru-1.jpg", alt: "Siddhababa blessed by Nritya Gopal Das Ji Maharaj, head of Ayodhya's largest temple", caption: "Blessings by Nritya Gopal Das Ji Maharaj, head of Ayodhya's largest temple" },
  { src: "jagadguru-2.jpg", alt: "Siddhababa receiving the Jagadguru recognition, the formal scroll being presented, 2019", caption: "Receiving the Jagadguru Recognition · 2019", objectPosition: "20% center" },
  { src: "jagadguru-3.jpg", alt: "Siddhababa holding the tridanda staff alongside senior saints at the ceremony", caption: "With the Tridanda, Swamiji holding the ceremonial staff with senior saints" },
];

const SAMADHI_SLIDES = [
  { src: "guru-samadhi-pokhara.jpg",  alt: "Siddhababa in Bhu Samadhi, Pokhara",                               caption: "Bhu Samadhi · Pokhara" },
  { src: "guru-bhu-samadhi.jpg",      alt: "Siddhababa in underground Bhu Samadhi",                             caption: "Bhu Samadhi · Underground" },
  { src: "bhu-samadhi-1.jpg",         alt: "Swamiji lying in the samadhi pit before sealing, Chatara 2008",   caption: "Entering the Samadhi · Chatara, 2008" },
  { src: "bhu-samadhi-2.jpg",         alt: "Devotees sealing the samadhi with a wooden board, Chatara 2008",  caption: "Sealing the Samadhi · Chatara, 2008" },
  { src: "bhu-samadhi-4.jpg",         alt: "21 kg of barley sown over the samadhi mound, Chatara 2008",       caption: "Barley Sown Above the Samadhi · Chatara, 2008" },
  { src: "bhu-samadhi-3.jpg",         alt: "Devotees cutting the barley grown over the samadhi, Chatara 2008",caption: "Cutting the Barley · Chatara, 2008" },
  { src: "bhu-samadhi-5.jpg",         alt: "Swamiji emerging from samadhi, still in deep stillness, Chatara 2008", caption: "Emerging from Samadhi · Chatara, 2008" },
  { src: "bhu-samadhi-6.jpg",         alt: "Swamiji performing Omkara path and blessings after samadhi, Chatara 2008", caption: "Blessings After Samadhi · Chatara, 2008" },
  { src: "bhu-samadhi-7.jpg",         alt: "Swamiji receiving felicitation after completing the samadhi, Chatara 2008", caption: "Felicitation · Chatara, 2008" },
  { src: "bhu-samadhi-8.jpg",         alt: "Thousands of people gathered to witness the Bhu Samadhi, Chatara 2008",    caption: "Thousands Gathered · Chatara, 2008" },
  { src: "pokhara-samadhi-2.jpg",     alt: "Swamiji in prayer and pranams before entering the Samadhi, Pokhara 2016",  caption: "Pre-Samadhi Prayer · Pokhara, 2016" },
  { src: "pokhara-samadhi-1.jpg",     alt: "Swamiji lying at rest inside the samadhi chamber, Pokhara 2016",           caption: "Entering the Samadhi · Pokhara, 2016" },
  { src: "pokhara-samadhi-3.jpg",     alt: "Medical doctors monitoring vital signs during Bhu Samadhi, Pokhara 2016",  caption: "Medical Monitoring · Pokhara, 2016" },
  { src: "pokhara-samadhi-4.jpg",     alt: "Swamiji emerging from the samadhi, observed by witnesses and media, Pokhara 2016", caption: "Emergence · Pokhara, 2016" },
  { src: "pokhara-samadhi-5.jpg",     alt: "Swamiji after completing Bhu Samadhi, Pokhara 2016",                       caption: "After the Samadhi · Pokhara, 2016" },
];

export default function FounderGuru() {
  const [samadhiSlide, setSamadhiSlide] = useState(0);
  const [jagadguruSlide, setJagadguruSlide] = useState(0);
  const [openCredential, setOpenCredential] = useState<number | null>(null);
  const [, navigate] = useLocation();

  function goToAnchor(path: string, anchor: string) {
    navigate(path);
    setTimeout(() => {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }

  return (
    <div className="bg-[#faf9f6] text-[#3d3830]">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[58vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${b}images/founder-guru-satsang.jpg`}
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 58%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/70 via-[#2c1a08]/40 to-[#faf9f6]" />
        </div>
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#e8c56a]/60" />
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/60" />
          </div>
          <p className="text-[#e8c56a] text-xs uppercase tracking-[0.3em] font-medium mb-3" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}>Guru</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.75)" }}>
            Jagadguru Mahayogi Siddhababa
          </h1>
          <p className="text-[#f0e4c8] text-base tracking-widest uppercase font-light mt-4" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}>
            Founder &amp; Acharya
          </p>
        </div>
      </section>

      {/* ── INTRO: TWO-COLUMN ── */}
      <section className="pt-24 pb-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start mb-16">

            {/* Left: bio intro */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">Meet Siddhababa</p>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#3d3830] leading-tight mb-6">
                A Realized Saint of the<br />Ramanandi Tradition
              </h2>
              <div className="h-px bg-[#e8dece] mb-6" />
              <p className="text-base text-[#5a5248] leading-relaxed mb-5">
                Jagadguru Mahayogi Siddhababa, known as <span className="italic text-[#3d3830]">Gurudev</span> by his students, is a Himalayan yogi, Tridaṇḍa-dhārī sādhu, and master of yoga. Deeply versed in the scriptures, Kundalini yoga, classical yogic disciplines, and world religions, he embodies a life of renunciation, realization, and service.
              </p>
              <p className="text-base text-[#5a5248] leading-relaxed mb-8">
                He is presently the sole Āchārya of the Himalayan Siddha Mahayog technique, entrusted with carrying forward this living lineage. His life and work are dedicated to guiding seekers and preserving the authenticity and continuity of the yogic path.
              </p>

              {/* Central quote */}
              <div className="border-l-2 border-[#b8892a]/40 pl-6 py-1">
                <p className="font-['Cormorant_Garamond'] text-xl italic text-[#5a5248] leading-relaxed mb-2">
                  Realize the inner-self and think selflessly.
                </p>
                <cite className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-semibold not-italic">
                  Jagadguru Mahayogi Siddhababa
                </cite>
              </div>
            </div>

            {/* Right: portrait */}
            <div className="hidden md:block sticky top-20">
              <div className="rounded-2xl overflow-hidden shadow-md shadow-[#b8892a]/10">
                <img
                  src={`${b}images/gurudev-photo.png`}
                  alt="Jagadguru Mahayogi Siddhababa"
                  className="w-full object-cover object-center"
                  style={{ minHeight: "440px" }}
                />
              </div>
              <p className="mt-4 text-center text-xs text-[#7a6e62] leading-relaxed px-1">
                Jagadguru Shree Ramanandacharya<br />Swami Shree Ramakrishnacharya Ji Maharaj
              </p>
              <a
                href={`${b}images/gurudev-photo.png`}
                download="Jagadguru-Mahayogi-Siddhababa.png"
                className="mt-3 flex items-center justify-center gap-2 text-xs text-[#b8892a] hover:text-[#9d7422] tracking-[0.15em] uppercase font-medium transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Photo
              </a>
            </div>

          </div>

          {/* ── SECTION ANCHOR NAV ── */}
          <nav className="flex items-stretch rounded-full border border-[#d8cebb] bg-[#f4ede0] overflow-hidden divide-x divide-[#d8cebb] text-sm font-medium mb-12">
            {[
              { label: "Life",             anchor: "#life"         },
              { label: "Teachings",        anchor: "#teachings"    },
              { label: "Key Initiatives",  anchor: "#initiatives"  },
              { label: "Yajñas",           anchor: "#yajnas"       },
              { label: "Ashrams",          anchor: "#ashrams"      },
            ].map(({ label, anchor }) => (
              <a
                key={anchor}
                href={anchor}
                onClick={e => { e.preventDefault(); document.querySelector(anchor)?.scrollIntoView({ behavior: "smooth" }); }}
                className="flex-1 text-center py-2.5 text-[#5c4e38] hover:text-white hover:bg-[#3d3020] transition-colors duration-150 cursor-pointer"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* ── SPIRITUAL CREDENTIALS ACCORDION ── */}
          <div className="mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-5">Titles &amp; Recognitions</p>
            <div className="divide-y divide-[#e8dece] border border-[#e8dece] rounded-2xl overflow-hidden">
              {CREDENTIALS.map((c, i) => (
                <div key={i} className="bg-white">
                  <button
                    onClick={() => setOpenCredential(openCredential === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-[#fdf6ec] transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] leading-tight">{c.title}</p>
                      <p className="text-base text-[#a89880] mt-1">{c.sub}</p>
                    </div>
                    <ChevronDown
                      className={`shrink-0 mt-1 w-5 h-5 text-[#b8892a] transition-transform duration-200 ${openCredential === i ? "rotate-180" : ""}`}
                      strokeWidth={1.5}
                    />
                  </button>
                  {openCredential === i && (
                    <div className="px-6 pt-4 pb-6 bg-[#fdf6ec]/50">
                      <p className="text-base text-[#7a7068] leading-relaxed mb-4 border-l-2 border-[#b8892a]/30 pl-4">{c.teaser}</p>
                      {c.body.split("\n\n").map((para, j) => (
                        <p key={j} className="text-base text-[#5a5248] leading-relaxed mb-3 last:mb-0">{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── LIFE SECTION ── */}
          <div id="life" className="mb-12 scroll-mt-24">

            <div className="flex items-start gap-6 mb-10">
              <span className="font-['Cormorant_Garamond'] text-8xl font-light text-[#e8dece] leading-none select-none shrink-0">I</span>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-1">Biography</p>
                <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] leading-tight">Life</h2>
              </div>
            </div>

            <div className="h-px bg-[#e8dece] mb-12" />

            {/* Editorial photo rows */}
            <div className="space-y-16">

              {/* Row 1, Early Life */}
              <div className="grid md:grid-cols-[340px_1fr] gap-10 items-center">
                <div className="rounded-2xl overflow-hidden shadow-sm shadow-[#b8892a]/10">
                  <img
                    src={`${b}images/guru-early-life.jpg`}
                    alt="Siddhababa in meditation in his early years"
                    className="w-full object-cover"
                    style={{ maxHeight: "420px", objectPosition: "top" }}
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">Early Life</p>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] mb-4 leading-snug">
                    Spiritual Foundations from a Young Age
                  </h3>
                  <p className="text-base text-[#5a5248] leading-relaxed mb-4">
                    His Holiness was born in Nepal's Mountain region. From an early age, he undertook rigorous yogic discipline under the guidance of realized masters. Through sustained practice, deep meditation, and the grace of the Guru, he attained the capacity for samādhi in his youth—a state described in the yogic scriptures as the culmination of spiritual practice and the final limb of Patañjali's eightfold path of yoga.
                  </p>
                  <p className="text-base text-[#5a5248] leading-relaxed">
                    An expert in botany and plant sciences, and a renowned Ayurveda Acharya, His Holiness brings together scientific understanding and spiritual science, offering a grounded approach to the study of the body, mind, and consciousness.
                  </p>
                </div>
              </div>

              {/* Row 2, Bhu Samadhi (carousel + text) */}
              <div className="grid md:grid-cols-[1fr_340px] gap-10 items-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">Bhu Samadhi</p>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] mb-4 leading-snug">
                    Underground Burial in Meditation
                  </h3>
                  <p className="text-base text-[#5a5248] leading-relaxed mb-4">
                    At the request of students and devotees, His Holiness has publicly demonstrated <span className="italic">Bhu Samadhi</span>, the yogic practice of remaining in deep meditation underground, sealed, without oxygen. These demonstrations were performed across Nepal and witnessed by thousands.
                  </p>
                  <p className="text-base text-[#5a5248] leading-relaxed mb-6">
                    Buried for nine days, in uninterrupted samādhi, medical doctors were shocked when examining him. They found no change in his bodily condition before and after Samadhi. These events have kindled deep faith in the living power of Vedic philosophy, drawing sincere seekers from across the world to his guidance.
                  </p>
                  <button
                    onClick={() => navigate("/events/historic/bhu-samadhi")}
                    className="inline-flex items-center gap-2 text-sm text-[#b8892a] hover:text-[#9d7422] tracking-[0.15em] uppercase font-medium transition-colors duration-200 group border border-[#b8892a]/30 rounded-full px-5 py-2.5"
                  >
                    <span>Explore the Bhu Samadhis</span>
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </button>
                </div>

                {/* Static image */}
                <div className="rounded-2xl overflow-hidden shadow-sm shadow-[#b8892a]/10" style={{ height: "400px" }}>
                  <img
                    src={`${b}images/${SAMADHI_SLIDES[0].src}`}
                    alt={SAMADHI_SLIDES[0].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Row 4, Recognition and Blessing */}
              <div className="grid md:grid-cols-[380px_1fr] gap-10 items-center">
                {/* Jagadguru carousel */}
                <div className="rounded-2xl overflow-hidden shadow-sm shadow-[#b8892a]/10 border border-[#e8dece]">
                  <div className="relative" style={{ height: "320px" }}>
                    {JAGADGURU_SLIDES.map((slide, i) => (
                      <img
                        key={i}
                        src={`${b}images/${slide.src}`}
                        alt={slide.alt}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                        style={{ opacity: jagadguruSlide === i ? 1 : 0, objectPosition: slide.objectPosition ?? "center" }}
                      />
                    ))}
                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent px-4 pb-4 pt-14">
                      <p className="text-white text-sm font-light tracking-wide leading-snug">{JAGADGURU_SLIDES[jagadguruSlide].caption}</p>
                    </div>
                    {/* Prev/Next */}
                    <button
                      onClick={() => setJagadguruSlide(i => (i - 1 + JAGADGURU_SLIDES.length) % JAGADGURU_SLIDES.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="w-4 h-4 text-white" strokeWidth={1.5} />
                    </button>
                    <button
                      onClick={() => setJagadguruSlide(i => (i + 1) % JAGADGURU_SLIDES.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center"
                      aria-label="Next"
                    >
                      <ChevronRight className="w-4 h-4 text-white" strokeWidth={1.5} />
                    </button>
                  </div>
                  {/* Dots */}
                  <div className="flex justify-center gap-2 py-3 bg-white border-t border-[#e8dece]">
                    {JAGADGURU_SLIDES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setJagadguruSlide(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${jagadguruSlide === i ? "bg-[#b8892a]" : "bg-[#d9cfc4]"}`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">Recognition · 2019</p>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] mb-4 leading-snug">
                    Honored as Jagadguru
                  </h3>
                  <p className="text-base text-[#5a5248] leading-relaxed mb-4">
                    In 2019, an assembly of spiritual leaders from all major Hindu monastic lineages, Vaishnava, Shaiva, Shakta, and Smarta, honored him with the highest monastical title — <span className="italic">Jagadguru</span> ("Guru of the world"). They unanimously recognized him as a successor of Ramanandacharya and a Guru capable of guiding the entire world.
                  </p>
                  <p className="text-base text-[#5a5248] leading-relaxed">
                    Under the guidance of his Guru, Param Pujya Sri Narayan Das Ji Maharaj of Nasik, His Holiness revived the practice of Surat-Shabd Yoga as <span className="font-medium text-[#3d3830]">Himalayan Siddha Mahayog</span>. Since Maha Shivaratri 2007, he has made this sacred knowledge, once limited to Himalayan ascetics, accessible to sincere seekers worldwide.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* ── MEET SIDDHABABA CTA ── */}
          <div className="mb-12 rounded-2xl border border-[#e8dece] bg-[#f5efe3] overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 flex flex-col justify-center px-8 py-8">
                <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-2">Darshan</p>
                <h3 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#3d3830] mb-3 leading-snug">
                  Meet Siddhababa
                </h3>
                <p className="text-base text-[#5a5248] leading-relaxed max-w-lg mb-6">
                  His Holiness holds audience, teachings, and darshan at the ashram, select global locations and online. View his schedule or contact us to find out how you can receive his guidance.
                </p>
                <Link href="/meet" onClick={() => window.scrollTo(0, 0)}>
                  <span className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8892a] text-white text-sm rounded-full hover:bg-[#9d7422] transition-colors cursor-pointer">
                    Get Darshan <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </Link>
              </div>
              <div className="md:w-2/5 h-56 md:h-auto shrink-0 overflow-hidden order-first md:order-last">
                <img
                  src={`${b}images/guru-darshan-card.jpg`}
                  alt="His Holiness Jagadguru Mahayogi Siddhababa giving darshan"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#e8dece] mb-24" />

          {/* ── TEACHINGS SECTION ── */}
          <div id="teachings" className="mb-24 scroll-mt-24">

            <div className="flex items-start gap-6 mb-10">
              <span className="font-['Cormorant_Garamond'] text-8xl font-light text-[#e8dece] leading-none select-none shrink-0">II</span>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-1">Philosophy & Practice</p>
                <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] leading-tight">Teachings</h2>
              </div>
            </div>

            <div className="h-px bg-[#e8dece] mb-8" />

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-base text-[#5a5248] leading-relaxed mb-4">
                  His Holiness emphasizes three foundational principles for joyful and meaningful living. At the heart of his guidance is the practice of <span className="italic text-[#3d3830]">Himalayan Siddha Mahayog Meditation</span>, an integrated system for fostering mental and physical well-being and inner spiritual development.
                </p>
                <p className="text-base text-[#5a5248] leading-relaxed">
                  His teachings are intended for people from all walks of life. Rather than encouraging withdrawal from the world, they emphasize living with awareness, where spiritual practice strengthens one's capacity to engage fully and responsibly with family, work, and society alongside the journey to self-realization.
                </p>
              </div>
              <div>
                <img
                  src={`${b}images/guru-teachings.jpg`}
                  alt="Jagadguru Mahayogi Siddhababa giving spiritual teachings to a group of students"
                  className="w-full rounded-2xl object-cover shadow-md"
                  style={{ height: "340px" }}
                />
              </div>
            </div>

            {/* Three pillars */}
            <div className="grid md:grid-cols-3 gap-6 mb-14">
              {PILLARS.map((p, i) => (
                <div key={i} className="bg-white border border-[#e8dece] rounded-2xl p-7 flex flex-col">
                  <p className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#b8892a] mb-1">{p.skt}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#9a8f84] font-medium mb-4">{p.label}</p>
                  <div className="h-px bg-[#e8dece] mb-4" />
                  <p className="text-base text-[#7a7068] leading-relaxed flex-1">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Key teachings grid */}
            <div className="mb-8">
              <p className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] mb-6">Key Teachings</p>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-0">
                {TEACHINGS.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-4 py-3 border-b border-[#e8dece]">
                    <span className="shrink-0 mt-[2px] w-8 h-8 flex items-center justify-center rounded-full bg-[#fdf6ec]">
                      <Icon className="w-4 h-4 text-[#b8892a]" strokeWidth={1.5} />
                    </span>
                    <span className="text-base text-[#5a5248] leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured courses */}
            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-2xl border border-[#b8892a]/40 bg-white">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#b8892a]" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 px-10 py-9 pl-12">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">Featured Course</p>
                    <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#3d3830] mb-2">
                      Vedanta Philosophy
                    </h3>
                    <p className="text-base text-[#7a7068] leading-relaxed">A comprehensive 300-hour study of Vedāntic thought, guided directly by Jagadguru Mahayogi Siddhababa.</p>
                    <p className="text-xs text-[#a89880] italic mt-2">Developed &amp; instructed by His Holiness</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="px-4 py-2 rounded-full bg-[#fdf6ec] border border-[#e8c56a]/40 text-xs uppercase tracking-[0.2em] text-[#b8892a] font-semibold whitespace-nowrap">
                      300 Hours
                    </span>
                    <Link href="/vedanta">
                      <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#b8892a] text-white text-sm rounded-full hover:bg-[#9d7422] transition-colors cursor-pointer whitespace-nowrap">
                        Learn More <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-[#b8892a]/40 bg-white">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#b8892a]" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 px-10 py-9 pl-12">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">Featured Course</p>
                    <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#3d3830] mb-2">
                      Himalayan Siddha Mahayog Meditation
                    </h3>
                    <p className="text-base text-[#7a7068] leading-relaxed">An integrated system of meditation practice for inner well-being and spiritual development, transmitted by His Holiness.</p>
                    <p className="text-xs text-[#a89880] italic mt-2">Developed &amp; instructed by His Holiness</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="px-4 py-2 rounded-full bg-[#fdf6ec] border border-[#e8c56a]/40 text-xs uppercase tracking-[0.2em] text-[#b8892a] font-semibold whitespace-nowrap">
                      10 Hours
                    </span>
                    <Link href="/meditation" onClick={() => window.scrollTo(0, 0)}>
                      <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#b8892a] text-white text-sm rounded-full hover:bg-[#9d7422] transition-colors cursor-pointer whitespace-nowrap">
                        Learn More <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── QUOTE BANNER ── */}
      <div className="relative overflow-hidden" style={{ minHeight: "280px" }}>
        <img
          src={`${b}images/quote-banner-bg.png`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative flex flex-col items-center justify-center text-center px-8 md:px-20 py-16">
          <span className="font-['Cormorant_Garamond'] text-6xl font-light text-[#b8892a]/40 leading-none mb-2 select-none">"</span>
          <p className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-light italic text-[#3d3830] leading-relaxed max-w-2xl mb-6">
            Realize the inner-self and think selflessly.
          </p>
          <div className="h-px w-10 bg-[#b8892a]/50 mb-4" />
          <cite className="text-xs uppercase tracking-[0.25em] text-[#3d3830] font-semibold not-italic">
            Jagadguru Mahayogi Siddhababa
          </cite>
        </div>
      </div>

      {/* ── KEY INITIATIVES SECTION ── */}
      <section className="py-24 px-6 bg-white border-t border-[#e8dece]">
        <div className="max-w-5xl mx-auto">
          <div id="initiatives" className="scroll-mt-24">

            <div className="flex items-start gap-6 mb-10">
              <span className="font-['Cormorant_Garamond'] text-8xl font-light text-[#e8dece] leading-none select-none shrink-0">III</span>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-1">Spiritual, Educational & Cultural Work</p>
                <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] leading-tight">Key Initiatives &amp; Projects</h2>
              </div>
            </div>

            <div className="h-px bg-[#e8dece] mb-8" />

            <p className="text-base text-[#5a5248] leading-relaxed max-w-2xl mb-10">
              Under his guidance, numerous spiritual, educational, and cultural initiatives are being established, each grounded in the conviction that inner realization must serve the world.
            </p>

            {(() => {
              type Initiative = { label: string; note: string; img: string; pos?: string; href: string | null; wide?: boolean };
              const ITEMS: Initiative[] = [
                { label: "Himalayan Siddha Mahayog Meditation", note: "Inner Awakening", img: "initiative-meditation.png", href: "/meditation" },
                { label: "Restoration of the Cow as Nepal's National Animal",              note: "Cultural & Ecological Advocacy", img: "ashram-cows-sunset.jpg",          href: null },
                { label: "Jagadguru Shriramanandacharya Gurukul (Grades 6–12)",           note: "Education",                     img: "initiative-gurukul.png",          href: "/gurukul", wide: true },
                { label: "A historic Ram Temple in Nepal",                                 note: "Sacred Infrastructure",          img: "ram-mandir-1.jpg",                href: "/projects#project-02" },
                { label: "108 Hanuman Temples across Nepal",                              note: "Sacred Infrastructure",          img: "initiative-hanuman-temples.jpg",  href: "/projects#project-01" },
                { label: "Nepal's first Ayurveda University",                             note: "Education",                     img: "initiative-ayurveda.png",         href: null },
                { label: "Green Revolution for Nepal's agricultural empowerment and independence", note: "Ecology",             img: "initiative-green-revolution.png", href: null },
              ];

              const Card = ({ item, wide = false }: { item: Initiative; wide?: boolean }) => {
                const inner = (
                  <>
                    <div className={`${wide ? "h-48" : "h-36"} overflow-hidden shrink-0`}>
                      <img
                        src={`${b}images/${item.img}`}
                        alt=""
                        aria-hidden
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: item.pos ?? "center center" }}
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-sm uppercase tracking-[0.2em] text-[#b8892a] font-semibold mb-2">{item.note}</p>
                      <p className="text-base font-bold text-[#3d3830] leading-snug flex-1">{item.label}</p>
                      {item.href && (
                        <span className="mt-3 inline-flex items-center gap-2 text-sm text-[#b8892a] font-medium tracking-wide">
                          Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
                        </span>
                      )}
                    </div>
                  </>
                );
                const baseClass = `flex flex-col bg-[#faf9f6] border border-[#e8dece] rounded-xl overflow-hidden group`;
                const clickClass = `cursor-pointer hover:border-[#b8892a]/50 hover:shadow-md transition-all duration-300`;
                if (!item.href) return <div className={baseClass}>{inner}</div>;
                const [path, anchor] = item.href.split('#');
                if (anchor) return (
                  <div className={`${baseClass} ${clickClass}`} onClick={() => goToAnchor(path, anchor)}>{inner}</div>
                );
                return (
                  <Link href={item.href} onClick={() => window.scrollTo(0, 0)}>
                    <div className={`${baseClass} ${clickClass}`}>{inner}</div>
                  </Link>
                );
              };

              return (
                <div className="flex flex-col gap-4">
                  {/* Row 1: two cards */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Card item={ITEMS[0]} />
                    <Card item={ITEMS[1]} />
                  </div>
                  {/* Row 2: one full-width card */}
                  <Card item={ITEMS[2]} wide />
                  {/* Row 3: two cards */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Card item={ITEMS[3]} />
                    <Card item={ITEMS[4]} />
                  </div>
                  {/* Row 4: two cards */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Card item={ITEMS[5]} />
                    <Card item={ITEMS[6]} />
                  </div>
                </div>
              );
            })()}

          </div>
        </div>
      </section>

      {/* ── YAJNAS SECTION ── */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src={`${b}images/ram-mandir-1.jpg`}
            alt=""
            aria-hidden
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#faf9f6]/88" />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div id="yajnas" className="scroll-mt-24">

            <div className="flex items-start gap-6 mb-10">
              <span className="font-['Cormorant_Garamond'] text-8xl font-light text-[#e8dece] leading-none select-none shrink-0">IV</span>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-1">Ancient Vedic Observances</p>
                <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] leading-tight">Revival of Historic Yajñas</h2>
              </div>
            </div>

            <div className="h-px bg-[#e8dece] mb-8" />

            <div className="grid md:grid-cols-2 gap-10 mb-12">
              <p className="text-base text-[#5a5248] leading-relaxed">
                His Holiness has revitalized rare Vedic observances that had gradually diminished over time. These yajñas have been conducted according to advanced Vedic science, requiring precise knowledge, discipline, and alignment with seasonal and ecological cycles.
              </p>
              <p className="text-base text-[#5a5248] leading-relaxed">
                Through focused mantra vibration and ritual precision, these observances are understood to support both atmospheric purification and inner transformation.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  year: "2019",
                  name: "Shree Ram Tārak Brahma Mahāyajña",
                  desc: "Conducted in Nepal after a gap of 705 years, marking a profound moment of spiritual revival.",
                  href: "/events/historic/tarak-brahma-mahayagya",
                  img: "tarak-brahma-mahayajna.jpg",
                },
                {
                  year: "2023",
                  name: "Atirudri Mahāyajña",
                  desc: "Performed for the first time in Nepal's recorded history, within the sacred precincts of Pashupatinath Temple.",
                  href: "/events/historic/atirudri-mahayagya",
                },
                {
                  year: "2024",
                  name: "Sankat Mochan Shree Hanumad Mahāyajña",
                  desc: "Conducted with the participation of Dhirendra Shastri Ji Maharaj (Bageshwar Dham Sarkar) as Guest of Honour.",
                  href: "/events/historic/hanumad-mahayagya",
                },
                {
                  year: "2025",
                  name: "Ramchandi Mahāyajña",
                  desc: "Invoking Maa Chandi and Lord Ram for protection, inner transformation, and the welfare of all.",
                  href: null,
                },
                {
                  year: "2017–Present",
                  name: "Shree Ramarchan Mahāyajña",
                  desc: "Performed an unprecedented 74 times within four months during the observance of 2024 Chaturmās.",
                  href: "/events/historic/ramarchan-mahayagya",
                },
              ].map((yajna: { year: string; name: string; desc: string; href: string | null; img?: string }, i) => {
                const inner = (
                  <div className="flex gap-6 items-start">
                    <div className="shrink-0 w-28 flex flex-col items-end gap-2">
                      <span className="text-sm uppercase tracking-[0.2em] text-[#b8892a] font-semibold leading-none">{yajna.year}</span>
                      {yajna.img && (
                        <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#e8dece] shadow-sm">
                          <img
                            src={`${b}images/${yajna.img}`}
                            alt={yajna.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                    <div className="w-px bg-[#e8dece] self-stretch shrink-0" />
                    <div className="flex-1">
                      <p className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] mb-1">{yajna.name}</p>
                      <p className="text-base text-[#7a7068] leading-relaxed mb-3">{yajna.desc}</p>
                      {yajna.href && (
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#b8892a] text-[#b8892a] text-sm font-medium rounded-full">
                          Learn more <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                        </span>
                      )}
                    </div>
                  </div>
                );
                if (!yajna.href) {
                  return (
                    <div key={i} className="flex flex-col p-6 bg-white border border-[#d4c8b5] rounded-2xl shadow-sm overflow-hidden">
                      {inner}
                    </div>
                  );
                }
                return (
                  <Link key={i} href={yajna.href} onClick={() => window.scrollTo(0, 0)} className="block">
                    <div className="flex flex-col p-6 bg-white border border-[#d4c8b5] rounded-2xl shadow-sm overflow-hidden cursor-pointer hover:border-[#b8892a]/60 hover:shadow-md transition-all duration-300">
                      {inner}
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-10 border-l-2 border-[#b8892a]/40 pl-6 py-1 mb-10">
              <p className="text-base italic text-[#5a5248] leading-relaxed font-['Cormorant_Garamond'] text-lg">
                Across all these initiatives, His Holiness emphasizes that spiritual realization finds its fullest expression in service, to humanity, to culture, and to the natural world.
              </p>
            </div>

            <Link href="/events">
              <span className="inline-flex items-center gap-2 px-6 py-3 border border-[#b8892a] text-[#b8892a] text-sm rounded-full hover:bg-[#b8892a] hover:text-white transition-colors cursor-pointer">
                View Upcoming Events <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* ── ASHRAMS SECTION ── */}
      <section className="py-24 px-6 bg-white border-t border-[#e8dece]">
        <div className="max-w-5xl mx-auto">
          <div id="ashrams" className="scroll-mt-24">

            <div className="flex items-start gap-6 mb-10">
              <span className="font-['Cormorant_Garamond'] text-8xl font-light text-[#e8dece] leading-none select-none shrink-0">V</span>
              <div className="pt-4">
                <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-1">Centers of Practice</p>
                <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] leading-tight">
                  Ashrams &amp; Global Presence
                </h2>
              </div>
            </div>

            <div className="h-px bg-[#e8dece] mb-8" />

            <p className="text-base text-[#5a5248] leading-relaxed max-w-2xl mb-12">
              Under his guidance, ashrams and meditation centers have been established across Nepal, India, and internationally. These centers serve as spaces for practice, learning, service, and community, supporting reflection, education, and collective well-being.
            </p>

            {/* Centers inline list */}
            <div className="flex flex-col sm:flex-row gap-y-3 gap-x-10 mb-12 flex-wrap">
              {CENTERS.map((region) => (
                <div key={region.region} className="flex items-baseline gap-3 text-sm">
                  <span className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-semibold shrink-0">{region.region}</span>
                  <span className="text-[#5a5248]">{region.cities.join(" · ")}</span>
                </div>
              ))}
            </div>

            {/* Head ashram callout */}
            <div className="bg-[#faf9f6] border border-[#e8dece] rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-2">Head Ashram</p>
                <p className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] mb-1">
                  Jagadguru Ramanandacharya Sewa Pith
                </p>
                <p className="text-sm text-[#7a7068]">Chatara, Barahachettra Dham, Sunsari, Nepal</p>
              </div>
              <Link href="/ashram">
                <span className="shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-[#b8892a] text-[#b8892a] text-sm rounded-full hover:bg-[#b8892a] hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                  Visit Ashram Page <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── DEVOTEE PHOTO DOWNLOAD ── */}
      <section className="py-16 px-6 bg-[#faf9f6] border-t border-[#e8dece]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Thumbnail */}
            <div className="shrink-0 w-44 h-52 rounded-2xl overflow-hidden shadow-md border border-[#e8dece]">
              <img
                src={`${b}images/gurudev-download.jpg`}
                alt="His Holiness Jagadguru Mahayogi Siddhababa"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Text + button */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-2">For Devotees</p>
              <h3 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#3d3830] mb-3 leading-snug">
                Blessings Photo of His Holiness
              </h3>
              <p className="text-sm text-[#5a5248] leading-relaxed max-w-md mb-6">
                A high-resolution photo of Jagadguru Mahayogi Siddhababa for personal devotional use, suitable for printing and altar placement.
              </p>
              <a
                href={`${b}images/gurudev-download.jpg`}
                download="Jagadguru-Mahayogi-Siddhababa.jpg"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#b8892a] text-white text-sm rounded-full hover:bg-[#9d7422] transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 3v13M5 16l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 21h18" strokeLinecap="round"/>
                </svg>
                Download Photo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── DARK CTA BANNER ── */}
      <section className="bg-[#2e2820] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#e8c56a]/40" />
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/40" />
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-white mb-5 leading-tight">
            Deeper Insight About His Holiness
          </h2>
          <p className="text-[#9a8f84] text-base leading-relaxed max-w-xl mx-auto mb-10">
            To learn more about the lineage, teachings, and the living tradition that Jagadguru Mahayogi Siddhababa carries forward, explore further or reach out directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#b8892a] text-white rounded-full text-sm hover:bg-[#9d7422] transition-colors cursor-pointer">
                Make Contact <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </Link>
            <Link href="/meditation" onClick={() => window.scrollTo(0, 0)}>
              <span className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-[#e8dece] rounded-full text-sm hover:border-[#b8892a]/60 hover:text-[#b8892a] transition-colors cursor-pointer">
                Explore the Practice
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
