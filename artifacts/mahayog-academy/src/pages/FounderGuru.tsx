import Nav from "@/components/Nav";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

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
  { region: "India", cities: ["Jaipur", "Nashik"] },
  { region: "Global", cities: ["North America", "Europe", "Australia"] },
];

export default function FounderGuru() {
  return (
    <div className="bg-[#faf9f6] text-[#3d3830]">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[58vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${b}images/saint-siddhababa.png`}
            alt=""
            aria-hidden
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/55 via-[#1a0f05]/65 to-[#1a0f05]/80" />
        </div>
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#e8c56a]/60" />
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/60" />
          </div>
          <p className="text-[#e8c56a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Founder Guru</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight">
            Jagadguru Mahayogi Siddhababa
          </h1>
          <p className="text-[#f0e4c8] text-base tracking-widest uppercase font-light mt-4">
            The Role of Guru in Yoga Philosophy
          </p>
        </div>
      </section>

      {/* ── INTRO: TWO-COLUMN ── */}
      <section className="py-24 px-6">
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
                Anant Shri Vibhushit Jagadguru Ramanandacharya Swami Ramakrishnacharya Ji Maharaj is popularly known as Jagadguru Mahayogi Siddhababa — and simply as <span className="italic text-[#3d3830]">Gurudev</span> by his students. He is a realized saint in the Ramanandi (Sri Vaishnava) tradition.
              </p>
              <p className="text-base text-[#5a5248] leading-relaxed mb-8">
                His Holiness is a Tridandi sannyasi renowned for his mastery of scriptures, yoga, and Kundalini science. Through his teaching, personal guidance, and the institutions he has established, he guides individuals and communities seeking well-being, purpose, and inner peace.
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
          <div className="flex flex-wrap gap-0 border border-[#e8dece] rounded-xl overflow-hidden mb-20">
            {[
              { label: "Life", anchor: "#life" },
              { label: "Teachings", anchor: "#teachings" },
              { label: "Ashrams & Global Presence", anchor: "#ashrams" },
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

          {/* ── LIFE SECTION ── */}
          <div id="life" className="mb-24 scroll-mt-24">

            <div className="flex items-start gap-6 mb-10">
              <span className="font-['Cormorant_Garamond'] text-8xl font-light text-[#e8dece] leading-none select-none shrink-0">I</span>
              <div className="pt-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-1">Biography</p>
                <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] leading-tight">Life</h2>
              </div>
            </div>

            <div className="h-px bg-[#e8dece] mb-8" />

            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <div className="space-y-5">
                <p className="text-base text-[#5a5248] leading-relaxed">
                  Swami Ramakrishnacharya's life is a testament to yogic profundity. From a young age he achieved deep Samādhi — the highest state of yogic absorption. At the request of students and devotees, he has publicly demonstrated <span className="italic">Bhu Samadhi</span> (underground burial in meditation) on multiple occasions, astonishing onlookers by remaining in meditation beneath the earth for days.
                </p>
                <p className="text-base text-[#5a5248] leading-relaxed">
                  These demonstrations have kindled widespread curiosity and faith in the power of authentic Vedic yoga, drawing seekers from across Nepal, India, and the world to his guidance.
                </p>
              </div>
              <div className="space-y-5">
                <p className="text-base text-[#5a5248] leading-relaxed">
                  In 2019, an assembly of spiritual leaders from all major Hindu monastic lineages — Vaishnava, Shaiva, Shakta, Smarta — honored him with the title <span className="italic">Jagadguru</span> ("world-teacher" or universal teacher), formally recognizing him as a successor of Ramanandacharya and a Guru capable of guiding the entire world.
                </p>
                <p className="text-base text-[#5a5248] leading-relaxed">
                  Under the guidance of his own Guru (Param Pujya Sri Narayan Das Ji Maharaj of Nasik), he revived Surat-Shabd Yoga practice and formulated it as <span className="font-medium text-[#3d3830]">Himalayan Siddha Mahayog</span> — sacred knowledge, known only to few ascetics in Himalayan caves, now made accessible to sincere seekers worldwide.
                </p>
              </div>
            </div>

            {/* Shaktipat highlight */}
            <div className="bg-white border border-[#e8dece] rounded-2xl p-8 flex gap-7 items-start">
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#fdf6ec] border border-[#e8c56a]/40 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#b8892a" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-2">Shaktipāt Dīkṣā</p>
                <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#3d3830] mb-2">Transmission of Spiritual Energy</p>
                <p className="text-sm text-[#7a7068] leading-relaxed">
                  His Holiness initiates seekers through Shaktipāt Dīkṣā — the ancient method of transmitting spiritual energy (śakti) from Guru to student. This transmission awakens the inner Kundalini, setting in motion a profound, organic process of inner development that unfolds naturally within the practitioner.
                </p>
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

            <p className="text-base text-[#5a5248] leading-relaxed max-w-2xl mb-4">
              His Holiness emphasizes three foundational principles for joyful and meaningful living. At the heart of his guidance is the practice of <span className="italic text-[#3d3830]">Himalayan Siddha Mahayog Meditation</span> — an integrated system for fostering mental and physical well-being and inner spiritual development.
            </p>
            <p className="text-base text-[#5a5248] leading-relaxed max-w-2xl mb-12">
              His teachings are intended for people from all walks of life. Rather than encouraging withdrawal from the world, they emphasize living with awareness — where spiritual practice strengthens one's capacity to engage fully and responsibly with family, work, and society alongside the journey to self-realization.
            </p>

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

            {/* Key teachings list */}
            <div className="bg-[#fdf6ec] border border-[#e8c56a]/30 rounded-2xl px-8 py-7">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-5">Key Teachings</p>
              <ul className="space-y-3">
                {TEACHINGS.map((t, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-[5px] shrink-0 w-1.5 h-1.5 rotate-45 bg-[#b8892a]/60 inline-block" />
                    <span className="text-sm text-[#5a5248] leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
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

      {/* ── ASHRAMS SECTION ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <div id="ashrams" className="scroll-mt-24">

            <div className="flex items-start gap-6 mb-10">
              <span className="font-['Cormorant_Garamond'] text-8xl font-light text-[#e8dece] leading-none select-none shrink-0">III</span>
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

            {/* Centers grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {CENTERS.map((region) => (
                <div key={region.region} className="bg-white border border-[#e8dece] rounded-2xl p-7">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-4">{region.region}</p>
                  <ul className="space-y-2.5">
                    {region.cities.map((city) => (
                      <li key={city} className="flex items-center gap-3 text-sm text-[#5a5248]">
                        <span className="shrink-0 w-1 h-1 rounded-full bg-[#b8892a]/50" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Head ashram callout */}
            <div className="bg-white border border-[#e8dece] rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-2">Head Ashram</p>
                <p className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#3d3830] mb-1">
                  Jagadguru Ramanandacharya Sewa Pith
                </p>
                <p className="text-sm text-[#7a7068]">Barahachettra Dham, Chatara, Sunsari, Nepal</p>
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
            <Link href="/meditation">
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
