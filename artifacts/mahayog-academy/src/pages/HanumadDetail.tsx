import Nav from "@/components/Nav";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const b = import.meta.env.BASE_URL;


const CEREMONY_GALLERY = [
  { src: "hanumad-havan-night.jpg", alt: "Rows of sacred fire at the Kotihom — devotees gathered around the night havan" },
  { src: "hanumad-siddhababa-havan.jpg", alt: "Jagadguru Mahayogi Siddhababa at the sacred havan fire" },
  { src: "hanumad-crowd-satsang.jpg", alt: "Thousands of devotees with hands raised in blessing during the Hanumad Mahayagya satsang" },
  { src: "hanumad-crowd-hanuman.jpg", alt: "Massive gathering at night with the 80-foot Hanuman statue lit above the crowd" },
  { src: "hanumad-venue-aerial.jpg", alt: "Aerial view of the ceremony ground at Barahakshetra — saffron banners and the golden Hanuman statue" },
  { src: "hanumad-mandap-night.jpg", alt: "The illuminated yagya mandap at night — golden lights outlining the sacred pavilion" },
  { src: "hanumad-mandap-crowd.jpg", alt: "Devotees assembled outside the glowing yagya mandap at night" },
  { src: "hanumad-aarati-night.jpg", alt: "Women devotees performing aarati with oil lamps at the night ceremony" },
  { src: "hanumad-satsang-stage.jpg", alt: "Siddhababa on stage with a large Ram-Hanuman painting, devotees filling the satsang hall" },
  { src: "hanumad-satsang-hall.jpg", alt: "Full satsang hall with hundreds of devotees seated facing the stage" },
  { src: "hanumad-satsang-women.jpg", alt: "Women devotees assembled in the satsang hall" },
];

const SAINTS_GALLERY = [
  { src: "hanumad-two-saints.jpg", alt: "Jagadguru Mahayogi Siddhababa and Shree Bageshwardham Sarkar arriving together" },
  { src: "hanumad-bageshwar-arrival.jpg", alt: "Siddhababa greeting Bageshwar Dham Sarkar with flower garlands on arrival" },
  { src: "hanumad-blessing.jpg", alt: "Siddhababa placing a garland of blessing on Bageshwar Dham Sarkar on stage" },
  { src: "hanumad-puja-lingam.jpg", alt: "Both saints performing puja together at the sacred Shiva lingam" },
  { src: "hanumad-saints-river.jpg", alt: "Siddhababa and Bageshwar Dham Sarkar in meditation by the rocky Kaushiki riverbank" },
  { src: "hanumad-world-record.jpg", alt: "World Book of Records Certificate of Excellence awarded to Jagadguru Mahayogi Siddhababa" },
];

export default function HanumadDetail() {
  return (
    <div className="min-h-screen bg-[#faf9f6] font-['Inter']">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${b}images/hanumad-satsang-tent.jpg`}
            alt="Thousands of devotees filling the satsang tent at the Sankat Mochan Shree Hanumad Mahayagya, Barahakshetra"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0803]/80 via-[#2c1205]/50 to-[#faf9f6]" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#e8c56a]/60" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/60" />
          </div>
          <p className="text-[#e8c56a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Barahakshetra, Nepal · April 2024</p>
          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl font-light text-white leading-tight">
            Sankat Mochan<br />Shree Hanumad Mahayagya
          </h1>
          <p className="text-[#f0e4c8] text-base tracking-widest uppercase font-light mt-4">
            The Remover of All Obstacles — Kotihom
          </p>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <div className="bg-[#faf9f6] border-b border-[#e8dece]">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link href="/events" className="inline-flex items-center gap-2 text-sm text-[#b8892a] hover:text-[#9a6f1e] transition-colors font-medium">
            <ArrowLeft size={15} />
            Back to Events
          </Link>
        </div>
      </div>

      {/* ── STATS BANNER ── */}
      <section className="bg-[#1a0c03] py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "31", label: "Days of sacred programme" },
            { value: "Kotihom", label: "1 crore Hanuman mantra ahutis" },
            { value: "April 17–23", label: "Core Mahayagya" },
            { value: "Barahakshetra", label: "Sacred riverbank, Nepal" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[#e8c56a] font-light">{value}</p>
              <p className="text-[#c8a96a]/70 text-[10px] uppercase tracking-[0.2em] mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTEXT ── */}
      <section className="py-20 px-6 bg-[#faf9f6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">The Occasion</p>
            <div className="w-12 h-px bg-[#b8892a]/40 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 text-[#4a3f35] text-base leading-relaxed">
              <p>
                In April 2024, the joyous occasions of Shri Ram Navami and Hanuman Jayanti — the appearance days of Bhagwan Shri Ram and Shri Hanuman Ji — fell in the same sacred month. By the grace of Jagadguru Mahayogi Siddhababa, this rare confluence became the occasion for one of the most extraordinary religious gatherings in Nepal's modern history.
              </p>
              <p>
                The Sankat Mochan Shree Hanumad Mahayagya (Kotihom) was convened at the sacred grounds of Shree Ram Tarak Brahma Peeth, Barahakshetra — the Prachin Haridwar of Nepal, on the banks of the divine Kaushiki river, home to an 80-foot golden Hanuman statue, the tallest of its kind in the country.
              </p>
              <p>
                The thirty-one-day programme drew hundreds of thousands of devotees from across Nepal, India, and the world — for Ram Katha, Hanuman Katha, the Kotihom ceremony, Sant Samagam, and guided Mahayog Meditation.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={`${b}images/hanumad-venue-aerial.jpg`}
                alt="Aerial view of the Hanumad Mahayagya venue at Barahakshetra"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS KOTIHOM ── */}
      <section className="py-20 px-6 bg-[#f4ede0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">The Ceremony</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#2c1a08] font-light">What is the Kotihom?</h2>
            <div className="w-12 h-px bg-[#b8892a]/40 mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-[#4a3f35] text-base leading-relaxed">
              <p>
                <em>Kotihom</em> means the offering of one crore (ten million) fire oblations — <em>ahutis</em> — into the sacred flame, each accompanied by the recitation of the Hanuman mantra. It is among the most demanding and powerful of all Vedic fire ceremonies: requiring continuous, disciplined, multi-day performance by teams of trained Vedic pandits working in rotation.
              </p>
              <p>
                Combined with the continuous recitation of the Hanuman Sahasranama, Hanuman Chalisa, Sundarkanda, and Hanumanashtak, the ceremony generates a field of extraordinary sacred energy — invoking Shri Hanuman's qualities of strength, protection, devotion, and the dissolution of all obstacles.
              </p>
              <p>
                <em>Sankat Mochan</em> — "the one who removes all calamity" — is one of Hanuman Ji's most beloved names. The ceremony was offered for the welfare of all living beings: for healing, for protection from suffering, for liberation, and for the upliftment of humanity.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-[#faf9f6] rounded-xl border border-[#e8dece] p-5">
                <p className="text-[#b8892a] text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">1 Crore Ahutis</p>
                <p className="text-[#3a2f28] text-sm leading-relaxed">Ten million fire offerings with the Hanuman mantra — continuous from 6 AM to noon each day across seven days, with additional Sundarkanda, Chalisa, and Sahasranama recitations.</p>
              </div>
              <div className="bg-[#faf9f6] rounded-xl border border-[#e8dece] p-5">
                <p className="text-[#b8892a] text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">The Sacred Ground</p>
                <p className="text-[#3a2f28] text-sm leading-relaxed">The Varaha Purana states that twelve thousand years of penance at other pilgrimage sites is equalled by a single continuous twenty-four-hour penance at Shree Ram Tarak Brahma Peeth, Barahakshetra.</p>
              </div>
              <div className="bg-[#faf9f6] rounded-xl border border-[#e8dece] p-5">
                <p className="text-[#b8892a] text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">The Kaushiki River</p>
                <p className="text-[#3a2f28] text-sm leading-relaxed">The ceremony was held on the banks of the sacred Kaushiki river — where the sage Vishwamitra and countless Siddhas performed their austerities. This land is considered Prachin Haridwar, the ancient Haridwar of Nepal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAM SCHEDULE ── */}
      <section className="py-20 px-6 bg-[#faf9f6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Programme</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#2c1a08] font-light">April 9 – May 9, 2024</h2>
            <div className="w-12 h-px bg-[#b8892a]/40 mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phase 1 */}
            <div className="bg-[#f4ede0] rounded-2xl border border-[#e8dece] overflow-hidden">
              <div className="bg-[#2c1a08] px-5 py-4">
                <p className="text-[#e8c56a] text-[10px] uppercase tracking-[0.25em] font-medium">Opening · April 9–16</p>
                <p className="font-['Cormorant_Garamond'] text-xl text-white font-light mt-0.5">The Invitation</p>
              </div>
              <div className="px-5 py-5 space-y-4">
                <div>
                  <p className="text-[#b8892a] text-[10px] uppercase tracking-[0.2em] font-semibold">April 9</p>
                  <p className="text-[#2c1a08] text-sm font-medium mt-0.5">Kalas Yatra — Holy Procession</p>
                  <p className="text-[#6a5c48] text-xs mt-0.5 leading-relaxed">Opening procession consecrating the sacred ground · 7:30 AM</p>
                </div>
                <div className="w-full h-px bg-[#e8dece]" />
                <div>
                  <p className="text-[#b8892a] text-[10px] uppercase tracking-[0.2em] font-semibold">April 9–16</p>
                  <p className="text-[#2c1a08] text-sm font-medium mt-0.5">Shri Ram Katha</p>
                  <p className="text-[#6a5c48] text-xs mt-0.5 leading-relaxed">Eight days of Ram's story by Shree Chandrakala Sakhi · 3–6 PM daily</p>
                </div>
              </div>
            </div>

            {/* Phase 2 — highlight */}
            <div className="bg-[#f4ede0] rounded-2xl border-2 border-[#b8892a] overflow-hidden">
              <div className="bg-[#2c1a08] px-5 py-4">
                <p className="text-[#e8c56a] text-[10px] uppercase tracking-[0.25em] font-medium">Core Ceremony · April 17–23</p>
                <p className="font-['Cormorant_Garamond'] text-xl text-white font-semibold mt-0.5">The Mahayagya</p>
              </div>
              <div className="px-5 py-5 space-y-4">
                <div>
                  <p className="text-[#b8892a] text-[10px] uppercase tracking-[0.2em] font-semibold">April 17</p>
                  <p className="text-[#2c1a08] text-sm font-medium mt-0.5">Arrival of Bageshwardham Sarkar · Ram Navami · Temple Foundation Stone</p>
                  <p className="text-[#6a5c48] text-xs mt-0.5">Maha-Aarati at 12 PM</p>
                </div>
                <div className="w-full h-px bg-[#e8dece]" />
                <div>
                  <p className="text-[#b8892a] text-[10px] uppercase tracking-[0.2em] font-semibold">April 17–23 · 6 AM–12 PM</p>
                  <p className="text-[#2c1a08] text-sm font-medium mt-0.5">Kotihom — 1 Crore Hanuman Mantra Ahutis</p>
                </div>
                <div className="w-full h-px bg-[#e8dece]" />
                <div>
                  <p className="text-[#b8892a] text-[10px] uppercase tracking-[0.2em] font-semibold">April 17–21 · 2–6 PM</p>
                  <p className="text-[#2c1a08] text-sm font-medium mt-0.5">Hanuman Katha by Bageshwardham Sarkar</p>
                </div>
                <div className="w-full h-px bg-[#e8dece]" />
                <div>
                  <p className="text-[#b8892a] text-[10px] uppercase tracking-[0.2em] font-semibold">April 19 · 1 PM</p>
                  <p className="text-[#2c1a08] text-sm font-medium mt-0.5">Divine Darshan — Congregation of Saints</p>
                </div>
                <div className="w-full h-px bg-[#e8dece]" />
                <div>
                  <p className="text-[#b8892a] text-[10px] uppercase tracking-[0.2em] font-semibold">April 23 · 12 PM</p>
                  <p className="text-[#2c1a08] text-sm font-medium mt-0.5">Purnahuti — Final Offerings · Hanuman Jayanti · Maha-Aarati</p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-[#f4ede0] rounded-2xl border border-[#e8dece] overflow-hidden">
              <div className="bg-[#2c1a08] px-5 py-4">
                <p className="text-[#e8c56a] text-[10px] uppercase tracking-[0.25em] font-medium">Closing · April 24–May 9</p>
                <p className="font-['Cormorant_Garamond'] text-xl text-white font-light mt-0.5">The Integration</p>
              </div>
              <div className="px-5 py-5 space-y-4">
                <div>
                  <p className="text-[#b8892a] text-[10px] uppercase tracking-[0.2em] font-semibold">April 24</p>
                  <p className="text-[#2c1a08] text-sm font-medium mt-0.5">Phulpati Bisarjan & Farewell</p>
                  <p className="text-[#6a5c48] text-xs mt-0.5 leading-relaxed">Ceremonial immersion of sacred flowers, closing rites</p>
                </div>
                <div className="w-full h-px bg-[#e8dece]" />
                <div>
                  <p className="text-[#b8892a] text-[10px] uppercase tracking-[0.2em] font-semibold">April 25–May 9</p>
                  <p className="text-[#2c1a08] text-sm font-medium mt-0.5">Guided Mahayog Meditation</p>
                  <p className="text-[#6a5c48] text-xs mt-0.5 leading-relaxed">Extended meditation retreat under Gurudev's personal instructions · Daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TWO SAINTS ── */}
      <section className="py-20 px-6 bg-[#f4ede0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">A Historic Meeting</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#2c1a08] font-light">Two Great Saints</h2>
            <p className="text-[#6a5c48] text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              A special highlight of the Mahayagya was the gracious presence of <strong>Shree Bageshwardham Sarkar</strong> — Shree Shree Dhirendra Krishna Shastriji — the beloved saint of Hanuman Ji, widely revered across India. His joining with Jagadguru Mahayogi Siddhababa in this sacred ceremony was described as an extraordinarily rare blessing — two great saints together for the welfare of all.
            </p>
            <p className="text-[#9a8f84] text-sm mt-4 italic max-w-xl mx-auto">
              "The gathering of saints and the divine discourse on the glory of Lord Rama are extremely rare in this world, accessible only through good fortune and the blessings of Lord Shri Ram."
              <span className="block mt-1 not-italic">— Goswami Tulsidas</span>
            </p>
            <div className="w-12 h-px bg-[#b8892a]/40 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SAINTS_GALLERY.map(({ src, alt }) => (
              <div key={src} className="rounded-2xl overflow-hidden shadow-lg group aspect-[4/3]">
                <img
                  src={`${b}images/${src}`}
                  alt={alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
          {/* World Book of Records callout */}
          <div className="mt-10 bg-[#1a0c03] rounded-2xl p-8 text-center border border-[#b8892a]/30">
            <p className="text-[#e8c56a] text-[10px] uppercase tracking-[0.3em] font-medium mb-2">World Book of Records</p>
            <p className="font-['Cormorant_Garamond'] text-2xl text-white font-light leading-snug">
              The Sankat Mochan Shree Hanumad Mahayagya was recognised with a World Book of Records — Certificate of Excellence, awarded to Jagadguru Mahayogi Siddhababa during the ceremony.
            </p>
          </div>
        </div>
      </section>

      {/* ── CEREMONY GALLERY ── */}
      <section className="py-20 px-6 bg-[#faf9f6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Gallery</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#2c1a08] font-light">From the Mahayagya</h2>
            <p className="text-[#6a5c48] text-base mt-4 max-w-xl mx-auto leading-relaxed">
              Photographs from the thirty-one days of ceremony at Barahakshetra, April–May 2024.
            </p>
            <div className="w-12 h-px bg-[#b8892a]/40 mx-auto mt-4" />
          </div>
          {/* Featured row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div className="rounded-2xl overflow-hidden shadow-lg group aspect-[4/3]">
              <img
                src={`${b}images/hanumad-havan-night.jpg`}
                alt="Night havan — rows of sacred fire during the Kotihom ceremony"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg group aspect-[4/3]">
              <img
                src={`${b}images/hanumad-crowd-satsang.jpg`}
                alt="Thousands of devotees with hands raised in collective blessing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CEREMONY_GALLERY.slice(1).filter(p => p.src !== "hanumad-crowd-satsang.jpg" && p.src !== "hanumad-havan-night.jpg").map(({ src, alt }) => (
              <div key={src} className="rounded-2xl overflow-hidden shadow-lg group aspect-[4/3]">
                <img
                  src={`${b}images/${src}`}
                  alt={alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS CALLOUT ── */}
      <section className="py-20 px-6 bg-[#f4ede0]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-6">By the Grace of Shri Hanuman Ji</p>
          <h2 className="font-['Cormorant_Garamond'] text-3xl text-[#2c1a08] font-light mb-10">The Blessings of the Mahayagya</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "An increase in sattvic qualities — clarity, peace, and the joy of inner freedom",
              "Protection from the negative forces of circumstance, negativity, and harm",
              "Relief from planetary difficulties — the Hanuman mantra being the supreme remedy",
              "The fruit of days spent in the current of sacred intention and the Guru's grace",
              "Participation in a collective offering for the welfare of all humanity",
              "The rare blessing of Sant Samagam — the gathering of two great saints",
            ].map((benefit) => (
              <div key={benefit} className="flex gap-3 items-start bg-[#faf9f6] rounded-xl p-4 border border-[#e8dece]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#b8892a] mt-2 flex-shrink-0" />
                <p className="text-[#4a3f35] text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING QUOTE ── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${b}images/hanumad-mandap-night.jpg`}
            alt=""
            aria-hidden
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="mx-auto mb-6 opacity-60">
            <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/>
          </svg>
          <blockquote className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-white font-light italic leading-snug mb-6">
            "Many who attended described a feeling of lightness and courage that remained with them long after the ceremony ended — a gift, perhaps, of the Sankat Mochan himself, who is said to dissolve all obstacles from the path of sincere devotees."
          </blockquote>
          <p className="text-[#e8c56a] text-sm tracking-widest uppercase">— Mahayogi Siddhababa Spiritual Academy</p>
          <div className="mt-10">
            <Link href="/events">
              <button className="inline-flex items-center gap-2 border border-[#e8c56a]/50 text-[#e8c56a] px-6 py-3 rounded-full text-sm hover:bg-[#e8c56a]/10 transition-colors">
                <ArrowLeft size={15} />
                All Historic Events
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
