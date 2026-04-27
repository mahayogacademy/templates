import { useState } from "react";
import Nav from "@/components/Nav";
import { Link } from "wouter";
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const b = import.meta.env.BASE_URL;

const TEACHINGS = [
  "Inner development through Mahayog Meditation, self-inquiry and introspection",
  "Befriending the mind and refining character",
  "Ethical living grounded in awareness and responsibility",
  "Devotion and discernment",
  "Seva (selfless service) as a natural expression of inner realization",
];

const PILLARS = [
  {
    skt: "Seva",
    label: "Selfless Service",
    desc: "Acting in the world without attachment to reward — service as a natural expression of expanded awareness and care for all.",
  },
  {
    skt: "Sumiran",
    label: "Inner Remembrance",
    desc: "Continuous inner recognition of the divine source — an unbroken thread of awareness woven through everyday life.",
  },
  {
    skt: "Samarpan",
    label: "Wholehearted Surrender",
    desc: "The deepest act of trust — releasing the small self's grip and opening fully to the wisdom of the source of creation.",
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
    body: `The term "Jagadguru" is derived from the Sanskrit jagat (world or cosmos) and guru (one who dispels darkness). In 2019, this title was formally bestowed upon His Holiness by an international assembly of realized sages representing all six major Sanātana Dharma lineages: Vaiṣṇavism, Śaivism, Śāktism, Smārtism, Sauryaism, and Gāṇapatyaism.\n\nDuring the ceremony, his mastery of samādhi, his capacity to guide others into higher states of awareness, and his completion of the Shree Ram Tārak Brahma Mahāyajña were especially noted. His monastic name was formally conferred as Jagadguru Shree Ramanandacharya Swami Shree Ramakrishnacharya Ji Maharaj, and he was bestowed the tridaṇḍam — the sacred staff symbolizing complete dedication of body, mind, and speech to divine service.\n\nHe has also been honoured with the titles Ananta Shree and Prabal Janasewa Shree, the latter awarded by the former President of Nepal, Dr. Ram Baran Yadav, in recognition of his service to society.`,
  },
  {
    title: "Shaktipat Acharya",
    sub: "Transmission of Kundalini Awakening",
    teaser: "The sacred capacity to awaken dormant spiritual energy within a sincere seeker.",
    body: `Śakti refers to the primordial spiritual energy, often described as Kundalini, while pāta signifies descent. Shaktipat is the sacred transmission through which a realized Guru awakens this dormant energy within a sincere seeker.\n\nJagadguru Mahayogi Siddhababa is recognized as a Shaktipat Acharya, imparting this awakening through various means — glance, mantra, touch, or pure intention — according to the readiness of the seeker. This transmission initiates the inner journey of transformation under the guidance of the Guru's grace.`,
  },
  {
    title: "Samādhi Siddha Puruṣa",
    sub: "Master of Samādhi",
    teaser: "His Holiness attained mastery of samādhi from a very young age.",
    body: `His Holiness attained mastery of samādhi — the highest state of yogic absorption — from a very young age. In later years, at the request of his disciples, he publicly demonstrated bhū-samādhi (underground samādhi) on multiple occasions, drawing wide attention to the experiential depth of yogic realization described in the Vedic tradition.\n\nThese demonstrations have inspired renewed inquiry into Vedic science and direct spiritual experience, highlighting the practical power of disciplined inner practice.`,
  },
  {
    title: "Ayurveda Acharya",
    sub: "Master of the Ancient Science of Life",
    teaser: "A master of Āyurveda including rare diagnostic methods such as Nāḍi Vijñāna.",
    body: `His Holiness is a master of Āyurveda, the ancient science of life and holistic healing. He teaches classical Ayurvedic knowledge, including diagnostic methods that are increasingly rare today, such as Nāḍi Vijñāna (pulse diagnosis).\n\nUnder his guidance, Ayurvedic remedies are prepared and distributed to support free and accessible healthcare for those in need. He is also working toward the establishment of Nepal's first Ayurveda University, dedicated to preserving and advancing this sacred medical tradition.`,
  },
  {
    title: "Master of Himalayan Siddha Mahayog",
    sub: "Brahmavidyā — Knowledge of Ultimate Truth",
    teaser: "A powerful meditative path revived from Himalayan sages, now accessible to seekers worldwide.",
    body: `Himalayan Siddha Mahayog is a powerful and accessible meditative path, recognized as Brahmavidyā — the knowledge of ultimate truth. This practice unfolds through the grace of the Guru and uniquely begins with Kundalini awakening (Shaktipat). Mahayog activates a complete system for physical, mental, and spiritual wellbeing, ultimately guiding the practitioner toward self-realization.\n\nJagadguru Mahayogi Siddhababa revived this sacred practice, which had been concealed and preserved by Himalayan sages for over four centuries. Through his guidance, it is now accessible to seekers worldwide. This living Vedic tradition has been transmitted through an unbroken lineage of enlightened Gurus. His Holiness serves as the present Āchārya of this Brahmavidyā, having received the responsibility from his revered Guru, His Holiness Narayan Das Ji Maharaj.`,
  },
];

const JAGADGURU_SLIDES = [
  { src: "jagadguru-1.jpg", alt: "Siddhababa blessed by Nritya Gopal Das Ji Maharaj, head of Ayodhya's largest temple", caption: "Blessings by Nritya Gopal Das Ji Maharaj, head of Ayodhya's largest temple" },
  { src: "jagadguru-2.jpg", alt: "Siddhababa receiving the Jagadguru recognition — the formal scroll being presented, 2019", caption: "Receiving the Jagadguru Recognition · 2019", objectPosition: "20% center" },
  { src: "jagadguru-3.jpg", alt: "Siddhababa holding the tridanda staff alongside senior saints at the ceremony", caption: "With the Tridanda — Swamiji holding the ceremonial staff with senior saints" },
  { src: "jagadguru-4.jpg", alt: "The public proclamation declaring Siddhababa as Jagadguru before a large gathering, 2019", caption: "The Public Proclamation · 2019", objectPosition: "center 70%" },
];

const SAMADHI_SLIDES = [
  { src: "guru-samadhi-pokhara.jpg",  alt: "Siddhababa in Bhu Samadhi — Pokhara",                               caption: "Bhu Samadhi · Pokhara" },
  { src: "guru-bhu-samadhi.jpg",      alt: "Siddhababa in underground Bhu Samadhi",                             caption: "Bhu Samadhi · Underground" },
  { src: "bhu-samadhi-1.jpg",         alt: "Swamiji lying in the samadhi pit before sealing — Chatara 2008",   caption: "Entering the Samadhi · Chatara, 2008" },
  { src: "bhu-samadhi-2.jpg",         alt: "Devotees sealing the samadhi with a wooden board — Chatara 2008",  caption: "Sealing the Samadhi · Chatara, 2008" },
  { src: "bhu-samadhi-4.jpg",         alt: "21 kg of barley sown over the samadhi mound — Chatara 2008",       caption: "Barley Sown Above the Samadhi · Chatara, 2008" },
  { src: "bhu-samadhi-3.jpg",         alt: "Devotees cutting the barley grown over the samadhi — Chatara 2008",caption: "Cutting the Barley · Chatara, 2008" },
  { src: "bhu-samadhi-5.jpg",         alt: "Swamiji emerging from samadhi, still in deep stillness — Chatara 2008", caption: "Emerging from Samadhi · Chatara, 2008" },
  { src: "bhu-samadhi-6.jpg",         alt: "Swamiji performing Omkara path and blessings after samadhi — Chatara 2008", caption: "Blessings After Samadhi · Chatara, 2008" },
  { src: "bhu-samadhi-7.jpg",         alt: "Swamiji receiving felicitation after completing the samadhi — Chatara 2008", caption: "Felicitation · Chatara, 2008" },
  { src: "bhu-samadhi-8.jpg",         alt: "Thousands of people gathered to witness the Bhu Samadhi — Chatara 2008",    caption: "Thousands Gathered · Chatara, 2008" },
  { src: "pokhara-samadhi-2.jpg",     alt: "Swamiji in prayer and pranams before entering the Samadhi — Pokhara 2017",  caption: "Pre-Samadhi Prayer · Pokhara, 2017" },
  { src: "pokhara-samadhi-1.jpg",     alt: "Swamiji lying at rest inside the samadhi chamber — Pokhara 2017",           caption: "Entering the Samadhi · Pokhara, 2017" },
  { src: "pokhara-samadhi-3.jpg",     alt: "Medical doctors monitoring vital signs during Bhu Samadhi — Pokhara 2017",  caption: "Medical Monitoring · Pokhara, 2017" },
  { src: "pokhara-samadhi-4.jpg",     alt: "Swamiji emerging from the samadhi, observed by witnesses and media — Pokhara 2017", caption: "Emergence · Pokhara, 2017" },
  { src: "pokhara-samadhi-5.jpg",     alt: "Swamiji after completing Bhu Samadhi — Pokhara 2017",                       caption: "After the Samadhi · Pokhara, 2017" },
];

export default function FounderGuru() {
  const [samadhiSlide, setSamadhiSlide] = useState(0);
  const [jagadguruSlide, setJagadguruSlide] = useState(0);
  const [openCredential, setOpenCredential] = useState<number | null>(null);

  return (
    <div className="bg-[#faf9f6] text-[#3d3830]">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[58vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${b}images/guru-hero-new.jpg`}
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/60 via-[#1a0f05]/70 to-[#1a0f05]/85" />
        </div>
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#e8c56a]/60" />
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/60" />
          </div>
          <p className="text-[#e8c56a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Guru</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight">
            Jagadguru Mahayogi Siddhababa
          </h1>
          <p className="text-[#f0e4c8] text-base tracking-widest uppercase font-light mt-4">
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
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">Meet Siddhababa</p>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#3d3830] leading-tight mb-6">
                A Realized Saint of the<br />Ramanandi Tradition
              </h2>
              <div className="h-px bg-[#e8dece] mb-6" />
              <p className="text-base text-[#5a5248] leading-relaxed mb-5">
                Jagadguru Mahayogi Siddhababa — known as <span className="italic text-[#3d3830]">Gurudev</span> by his students — is a Himalayan yogi, Tridaṇḍa-dhārī sādhu, and master of yoga. Deeply versed in the scriptures, Kundalini yoga, classical yogic disciplines, and world religions, he embodies a life of renunciation, realization, and service.
              </p>
              <p className="text-base text-[#5a5248] leading-relaxed mb-8">
                Through his teaching, personal guidance, and the institutions he has established, he guides individuals and communities seeking well-being, purpose, and inner peace — drawing seekers from across Nepal, India, and the world.
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
            <div className="rounded-2xl overflow-hidden shadow-md shadow-[#b8892a]/10 hidden md:block sticky top-20">
              <img
                src={`${b}images/saint-siddhababa.png`}
                alt="Jagadguru Mahayogi Siddhababa"
                className="w-full object-cover object-top"
                style={{ minHeight: "440px" }}
              />
            </div>

          </div>

          {/* ── SECTION ANCHOR NAV ── */}
          <div className="flex flex-wrap gap-0 border border-[#e8dece] rounded-xl overflow-hidden mb-12">
            {[
              { label: "Life", anchor: "#life" },
              { label: "Teachings", anchor: "#teachings" },
              { label: "Key Initiatives", anchor: "#initiatives" },
              { label: "Yajñas", anchor: "#yajnas" },
              { label: "Ashrams", anchor: "#ashrams" },
            ].map((item, i, arr) => (
              <a
                key={item.anchor}
                href={item.anchor}
                className={`flex-1 text-center py-3 text-sm text-[#5a5248] hover:bg-[#fdf6ec] hover:text-[#b8892a] transition-colors tracking-wide ${i < arr.length - 1 ? "border-r border-[#e8dece]" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* ── SPIRITUAL CREDENTIALS ACCORDION ── */}
          <div className="mb-20">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-5">Titles &amp; Recognitions</p>
            <div className="divide-y divide-[#e8dece] border border-[#e8dece] rounded-2xl overflow-hidden">
              {CREDENTIALS.map((c, i) => (
                <div key={i} className="bg-white">
                  <button
                    onClick={() => setOpenCredential(openCredential === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-[#fdf6ec] transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#3d3830] leading-tight">{c.title}</p>
                      <p className="text-sm text-[#a89880] italic mt-1">{c.sub}</p>
                    </div>
                    <ChevronDown
                      className={`shrink-0 mt-1 w-4 h-4 text-[#b8892a] transition-transform duration-200 ${openCredential === i ? "rotate-180" : ""}`}
                      strokeWidth={1.5}
                    />
                  </button>
                  {openCredential === i && (
                    <div className="px-6 pt-4 pb-6 bg-[#fdf6ec]/50">
                      <p className="text-sm text-[#7a7068] leading-relaxed mb-3 italic border-l-2 border-[#b8892a]/30 pl-4">{c.teaser}</p>
                      {c.body.split("\n\n").map((para, j) => (
                        <p key={j} className="text-sm text-[#5a5248] leading-relaxed mb-3 last:mb-0">{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── LIFE SECTION ── */}
          <div id="life" className="mb-24 scroll-mt-24">

            <div className="flex items-start gap-6 mb-10">
              <span className="font-['Cormorant_Garamond'] text-8xl font-light text-[#e8dece] leading-none select-none shrink-0">I</span>
              <div className="pt-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-1">Biography</p>
                <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] leading-tight">Life</h2>
              </div>
            </div>

            <div className="h-px bg-[#e8dece] mb-12" />

            {/* Editorial photo rows */}
            <div className="space-y-16">

              {/* Row 1 — Early Life */}
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
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">Early Life</p>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] mb-4 leading-snug">
                    Spiritual Foundations from a Young Age
                  </h3>
                  <p className="text-base text-[#5a5248] leading-relaxed mb-4">
                    From a young age, Swami Ramakrishnacharya demonstrated a remarkable depth of yogic absorption. While still a young man, he achieved deep Samādhi — the highest state of meditative union — a feat that took most seekers a lifetime of practice.
                  </p>
                  <p className="text-base text-[#5a5248] leading-relaxed">
                    Drawn inward from early life, his path was not one of gradual accumulation but of direct realization. His bearing even then conveyed the stillness of a realized soul, long before the world came to know his name.
                  </p>
                </div>
              </div>

              {/* Row 2 — Bhu Samadhi (carousel + text) */}
              <div className="grid md:grid-cols-[1fr_340px] gap-10 items-center">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">Bhu Samadhi</p>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] mb-4 leading-snug">
                    Underground Burial in Meditation
                  </h3>
                  <p className="text-base text-[#5a5248] leading-relaxed mb-4">
                    At the request of students and devotees, His Holiness has publicly demonstrated <span className="italic">Bhu Samadhi</span> — the yogic practice of remaining in deep meditation underground, sealed within an enclosed space for multiple days. These demonstrations were performed across Nepal and witnessed by thousands.
                  </p>
                  <p className="text-base text-[#5a5248] leading-relaxed">
                    His Holiness entered sealed underground chambers — brick-lined pits covered and monitored — and remained in uninterrupted Samādhi for days. Witnesses recorded no signs of ordinary breath or movement. These events have kindled deep faith in the living reality of Vedic yoga, drawing sincere seekers from across the world to his guidance.
                  </p>
                </div>

                {/* Carousel */}
                <div className="relative rounded-2xl overflow-hidden shadow-sm shadow-[#b8892a]/10">
                  <div className="relative" style={{ height: "400px" }}>
                    {SAMADHI_SLIDES.map((slide, i) => (
                      <img
                        key={i}
                        src={`${b}images/${slide.src}`}
                        alt={slide.alt}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                        style={{ opacity: samadhiSlide === i ? 1 : 0 }}
                      />
                    ))}
                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-[#e8c56a] font-semibold">
                        {SAMADHI_SLIDES[samadhiSlide].caption}
                      </p>
                    </div>
                    {/* Prev / Next */}
                    <button
                      onClick={() => setSamadhiSlide(i => (i - 1 + SAMADHI_SLIDES.length) % SAMADHI_SLIDES.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-colors"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="w-4 h-4 text-white" strokeWidth={1.5} />
                    </button>
                    <button
                      onClick={() => setSamadhiSlide(i => (i + 1) % SAMADHI_SLIDES.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-colors"
                      aria-label="Next"
                    >
                      <ChevronRight className="w-4 h-4 text-white" strokeWidth={1.5} />
                    </button>
                  </div>
                  {/* Dots */}
                  <div className="flex justify-center gap-2 py-3 bg-white border-t border-[#e8dece]">
                    {SAMADHI_SLIDES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSamadhiSlide(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${samadhiSlide === i ? "bg-[#b8892a]" : "bg-[#d9cfc4]"}`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 4 — Recognition and Blessing */}
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
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                      <p className="text-white text-xs font-light tracking-wide">{JAGADGURU_SLIDES[jagadguruSlide].caption}</p>
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
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">Recognition · 2019</p>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] mb-4 leading-snug">
                    Honored as Jagadguru
                  </h3>
                  <p className="text-base text-[#5a5248] leading-relaxed mb-4">
                    In 2019, an assembly of spiritual leaders from all major Hindu monastic lineages — Vaishnava, Shaiva, Shakta, and Smarta — honored him with the title <span className="italic">Jagadguru</span> ("world-teacher"), formally recognizing him as a successor of Ramanandacharya and a Guru capable of guiding the entire world.
                  </p>
                  <p className="text-base text-[#5a5248] leading-relaxed">
                    Under his own Guru (Param Pujya Sri Narayan Das Ji Maharaj of Nasik), he revived Surat-Shabd Yoga and formulated it as <span className="font-medium text-[#3d3830]">Himalayan Siddha Mahayog</span> — sacred knowledge once known only to Himalayan ascetics, now made accessible to sincere seekers worldwide.
                  </p>
                </div>
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
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-1">Philosophy & Practice</p>
                <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] leading-tight">Teachings</h2>
              </div>
            </div>

            <div className="h-px bg-[#e8dece] mb-8" />

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-base text-[#5a5248] leading-relaxed mb-4">
                  His Holiness emphasizes three foundational principles for joyful and meaningful living. At the heart of his guidance is the practice of <span className="italic text-[#3d3830]">Himalayan Siddha Mahayog Meditation</span> — an integrated system for fostering mental and physical well-being and inner spiritual development.
                </p>
                <p className="text-base text-[#5a5248] leading-relaxed">
                  His teachings are intended for people from all walks of life. Rather than encouraging withdrawal from the world, they emphasize living with awareness — where spiritual practice strengthens one's capacity to engage fully and responsibly with family, work, and society alongside the journey to self-realization.
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
                  <p className="text-sm text-[#7a7068] leading-relaxed flex-1">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Key teachings grid */}
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-6">Key Teachings</p>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-0">
                {TEACHINGS.map((t, i) => (
                  <div key={i} className="flex items-start gap-4 py-3 border-b border-[#e8dece]">
                    <svg className="shrink-0 mt-[3px]" width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" fill="#b8892a" fillOpacity="0.5"/>
                    </svg>
                    <span className="text-sm text-[#5a5248] leading-relaxed">{t}</span>
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
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">Featured Course · Developed &amp; Instructed by His Holiness</p>
                    <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#3d3830] mb-2">
                      Vedanta Philosophy
                    </h3>
                    <p className="text-sm text-[#7a7068] leading-relaxed">A comprehensive 300-hour study of Vedāntic thought, guided directly by Jagadguru Mahayogi Siddhababa.</p>
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
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">Featured Course · Developed &amp; Instructed by His Holiness</p>
                    <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#3d3830] mb-2">
                      Himalayan Siddha Mahayog Meditation
                    </h3>
                    <p className="text-sm text-[#7a7068] leading-relaxed">An integrated system of meditation practice for inner well-being and spiritual development, transmitted by His Holiness.</p>
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
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-1">Spiritual, Educational & Cultural Work</p>
                <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] leading-tight">Key Initiatives &amp; Projects</h2>
              </div>
            </div>

            <div className="h-px bg-[#e8dece] mb-8" />

            <p className="text-base text-[#5a5248] leading-relaxed max-w-2xl mb-10">
              Under his guidance, numerous spiritual, educational, and cultural initiatives are being established — each grounded in the conviction that inner realization must serve the world.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {[
                { label: "Spiritual Revival through Himalayan Siddha Mahayog Meditation", note: "Spiritual Revival" },
                { label: "Green Revolution for Nepal's agricultural empowerment and independence", note: "Ecology" },
                { label: "Jagadguru Shriramanandacharya Gurukul (Grades 6–12)", note: "Education" },
                { label: "Nepal's first Ayurveda University", note: "Education" },
                { label: "108 Hanuman Temples across Nepal", note: "Sacred infrastructure" },
                { label: "A historic Ram Temple in Nepal", note: "Sacred infrastructure" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-[#faf9f6] border border-[#e8dece] rounded-xl">
                  <span className="mt-[5px] shrink-0 w-1.5 h-1.5 rotate-45 bg-[#b8892a]/70 inline-block" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#3d3830] leading-relaxed">{item.label}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#b8892a] font-semibold mt-1">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/projects">
              <span className="inline-flex items-center gap-2 px-6 py-3 border border-[#b8892a] text-[#b8892a] text-sm rounded-full hover:bg-[#b8892a] hover:text-white transition-colors cursor-pointer">
                View Detailed Project Pages <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </Link>

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
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-1">Ancient Vedic Observances</p>
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

            <div className="space-y-4">
              {[
                {
                  year: "2019",
                  name: "Shree Ram Tārak Brahma Mahāyajña",
                  desc: "Conducted in Nepal after a gap of 705 years — marking a profound moment of spiritual revival.",
                },
                {
                  year: "2023",
                  name: "Atirudri Mahāyajña",
                  desc: "Performed for the first time in Nepal's recorded history, within the sacred precincts of Pashupatinath Temple.",
                },
                {
                  year: "2024",
                  name: "Sankat Mochan Shree Hanumad Mahāyajña",
                  desc: "Conducted with the participation of Dhirendra Shastri Ji Maharaj (Bageshwar Dham Sarkar) as Guest of Honour.",
                },
                {
                  year: "2025",
                  name: "Ramchandi Mahāyajña",
                  desc: "Invoking Maa Chandi and Lord Ram for protection, inner transformation, and the welfare of all.",
                },
                {
                  year: "2017–Present",
                  name: "Shree Ramarchan Mahāyajña",
                  desc: "Performed an unprecedented 74 times within four months during the observance of 2024 Chaturmās.",
                },
              ].map((yajna, i) => (
                <div key={i} className="flex gap-6 items-start p-6 bg-white border border-[#e8dece] rounded-2xl">
                  <div className="shrink-0 w-24 text-right">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#b8892a] font-semibold leading-none">{yajna.year}</span>
                  </div>
                  <div className="w-px bg-[#e8dece] self-stretch shrink-0" />
                  <div>
                    <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#3d3830] mb-1">{yajna.name}</p>
                    <p className="text-sm text-[#7a7068] leading-relaxed">{yajna.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-l-2 border-[#b8892a]/40 pl-6 py-1 mb-10">
              <p className="text-base italic text-[#5a5248] leading-relaxed font-['Cormorant_Garamond'] text-lg">
                Across all these initiatives, His Holiness emphasizes that spiritual realization finds its fullest expression in service — to humanity, to culture, and to the natural world.
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
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-1">Centers of Practice</p>
                <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] leading-tight">
                  Ashrams &amp; Global Presence
                </h2>
              </div>
            </div>

            <div className="h-px bg-[#e8dece] mb-8" />

            <p className="text-base text-[#5a5248] leading-relaxed max-w-2xl mb-12">
              Under his guidance, ashrams and meditation centers have been established across Nepal, India, and internationally. These centers serve as spaces for practice, learning, service, and community — supporting reflection, education, and collective well-being.
            </p>

            {/* Centers inline list */}
            <div className="flex flex-col sm:flex-row gap-y-3 gap-x-10 mb-12 flex-wrap">
              {CENTERS.map((region) => (
                <div key={region.region} className="flex items-baseline gap-3 text-sm">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#b8892a] font-semibold shrink-0">{region.region}</span>
                  <span className="text-[#5a5248]">{region.cities.join(" · ")}</span>
                </div>
              ))}
            </div>

            {/* Head ashram callout */}
            <div className="bg-[#faf9f6] border border-[#e8dece] rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-2">Head Ashram</p>
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
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-2">For Devotees</p>
              <h3 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#3d3830] mb-3 leading-snug">
                Blessings Photo of His Holiness
              </h3>
              <p className="text-sm text-[#5a5248] leading-relaxed max-w-md mb-6">
                A high-resolution photo of Jagadguru Mahayogi Siddhababa for personal devotional use — suitable for printing and altar placement.
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

    </div>
  );
}
