import Nav from "@/components/Nav";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

const b = import.meta.env.BASE_URL;

const PROGRAM_ELEMENTS = [
  { title: "Kalas Yatra", desc: "The sacred procession of ceremonial water vessels — a purifying rite that opens the nine-day ceremony and consecrates the ground." },
  { title: "Vastu Pujan", desc: "Worship of the divine presence in the space itself, sanctifying the Pashupatinath premises for the full duration of the Mahayagya." },
  { title: "Sri Rudraprashanam", desc: "Continuous recitation of the Rudraprashanam — the supreme Vedic hymn to Lord Shiva — by a team of trained Vedic pandits throughout all nine days." },
  { title: "Non-Stop Rudrabhisheka", desc: "Unbroken sacred abhishekam of the Shiva lingam with panchamrit, sacred waters, and Vedic offerings across all the divine madhabs of the temple." },
  { title: "Shiva Mantra Chanting", desc: "Collective chanting of the most powerful Vedic mantras to Lord Shiva, generating an unbroken field of sacred sound across the nine days." },
  { title: "Satsang & Darshan of Saints", desc: "Rare opportunity for darshan of and satsang with assembled sages, saints, and Mahayogi Siddhababa himself — transmissions not ordinarily available." },
  { title: "Prasadam & Panchamrit", desc: "Daily distribution of sanctified food offerings and the five sacred substances — milk, curd, honey, ghee, and sugar — blessed through the ceremony." },
];

const GALLERY = [
  { src: "atirudri-ceremony-1.jpg", alt: "Hundreds of devotees gathered under the ceremony tent at Pashupatinath" },
  { src: "atirudri-ceremony-4.jpg", alt: "Participants with copper vessels assembled for the Rudrabhisheka" },
  { src: "atirudri-ceremony-2.jpg", alt: "Vedic pandits and students in continuous recitation of the Rudraprashanam" },
  { src: "atirudri-ceremony-3.jpg", alt: "Women devotees in saffron sarees, vessels ready for ceremonial offerings" },
];

export default function AtirudriDetail() {
  return (
    <div className="min-h-screen bg-[#faf9f6] font-['Inter']">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${b}images/atirudri-hero.png`}
            alt="Pashupatinath Temple, Kathmandu"
            className="w-full h-full object-cover object-center"
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
          <p className="text-[#e8c56a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Pashupatinath, Kathmandu · July 2022</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight">
            Atirudra Mahayagya
          </h1>
          <p className="text-[#f0e4c8] text-base tracking-widest uppercase font-light mt-4">
            The Ultimate Destroyer of Sorrow — at Pashupatinath
          </p>
        </div>
      </section>

      {/* ── BACK LINK ── */}
      <div className="bg-[#faf9f6] border-b border-[#e8dece] px-6 py-3">
        <div className="max-w-5xl mx-auto">
          <Link href="/events">
            <span className="inline-flex items-center gap-2 text-sm text-[#7a6e5a] hover:text-[#b8892a] transition-colors cursor-pointer font-medium">
              <ArrowLeft size={15} />
              Back to Events
            </span>
          </Link>
        </div>
      </div>

      {/* ── STATS BANNER ── */}
      <section className="bg-[#1a0c03] py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "9", label: "Days of Ceremony" },
            { value: "14,641", label: "Rudri Hymn Cycles" },
            { value: "18–26 July", label: "2022" },
            { value: "First Ever", label: "at Pashupatinath" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[#e8c56a] font-light whitespace-nowrap">{value}</p>
              <p className="text-white/60 text-xs uppercase tracking-wider mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY: RUDRAKOP ── */}
      <section className="bg-[#faf9f6] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-[#e8dece]" />
            <p className="text-xs uppercase tracking-[0.3em] text-[#b8892a] font-medium whitespace-nowrap">The Context</p>
            <div className="h-px flex-1 bg-[#e8dece]" />
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#2c1a08] leading-snug mb-8 text-center">
            A World in Rudrakop
          </h2>
          <div className="space-y-5 text-[#4a3f32] text-base leading-[1.9]">
            <p>
              The Vedic tradition describes the universe as threefold: Sattvic, Rajasic, and Tamasic. When the Tamasic quality becomes disturbed — through collective human violence, greed, spiritual neglect, and the accumulation of negative karma — harmful vibrations pervade the atmosphere, the waters, and the earth itself. The rishi-munis called this state <em>Rudrakop</em> — the arousal of Rudra's wrath.
            </p>
            <p>
              The consequences of Rudrakop manifest across every dimension of existence: as mental afflictions — grief, hatred, fear, jealousy, ego, and anger — and as physical catastrophe: pandemics, earthquakes, floods, wars, poverty, and global instability. In 2022, the world was experiencing all of these simultaneously: the wounds of the COVID pandemic, devastating conflicts, and an accelerating breakdown of natural and social order.
            </p>
            <p>
              The ancient rishis also preserved the remedy: the worship of Lord Rudra. Performing sacred abhishekam of the Shiva lingam according to Vedic ordinance draws the Tamasic vibrations that pervade the atmosphere and counterbalances them — causing positive vibrations to prevail across the universe. Among all forms of Shiva worship, the most powerful is the Atirudra Mahayagya.
            </p>
            <p className="text-[#6a5c48] italic border-l-2 border-[#b8892a]/40 pl-4">
              As our rishi-munis realised: when Tamasic nature is disturbed, only Rudra can restore balance — for Rudra is the Tamasic form of supreme consciousness itself, the force that dissolves what must be dissolved and purifies what must be purified.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT IS ATIRUDRA ── */}
      <section className="bg-[#f4ede0] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#b8892a] font-medium mb-4">The Highest Shiva Worship</p>
              <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#2c1a08] leading-snug mb-6">
                What is <em>Atirudra</em>?
              </h2>
              <div className="space-y-4 text-[#4a3f32] text-base leading-[1.9]">
                <p>
                  <em>Ati</em> means ultimate or supreme. <em>Rudra</em> means the destroyer of sorrow. Atirudra is therefore the ultimate destroyer of sorrow — the highest and most powerful form of collective worship that can be offered to Lord Shiva within the Vedic tradition.
                </p>
                <p>
                  At the heart of the Atirudra is the <em>Abhisheka</em> — the continuous ceremonial pouring of sacred substances over the Shiva lingam while trained Vedic pandits recite the <em>Shri Rudraprashanam</em> without interruption. Each complete cycle of the Rudraprashanam is called one Rudram. The Atirudra Mahayagya involves 14,641 recitations of the Rudram — a number that is 11 raised to the power of 4, held in the Vedic tradition as supremely auspicious.
                </p>
                <p>
                  This ceremony brings about soul welfare for all participants, works toward the ending of global crises, and generates a field of sacred energy that enhances compassion and builds a sense of universal kinship across all human beings.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={`${b}images/atirudri-shivalingam.jpg`}
                alt="The sacred Shiva lingam adorned with marigolds and naga cobra at the Atirudra Mahayagya"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PASHUPATINATH ── */}
      <section className="bg-[#faf9f6] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-video">
                <img
                  src={`${b}images/atirudri-hero.png`}
                  alt="Pashupatinath Temple on the Bagmati River, Kathmandu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img
                    src={`${b}images/atirudri-pashupati-2.png`}
                    alt="Devotees performing puja in the Pashupatinath courtyard"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img
                    src={`${b}images/atirudri-pashupati-3.png`}
                    alt="Evening aarti on the Bagmati River ghats"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#b8892a] font-medium mb-4">The Sacred Site</p>
              <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#2c1a08] leading-snug mb-6">
                Pashupatinath Temple, Kathmandu
              </h2>
              <div className="space-y-4 text-[#4a3f32] text-base leading-[1.9]">
                <p>
                  Pashupatinath — Lord Shiva in his form as the Protector of All Living Beings — is one of the most sacred Hindu temples on earth. Set in the Gaushala region of Kathmandu on the banks of the holy Bagmati River, the temple is considered the protector of the universe and the guardian deity of Nepal. It is a UNESCO World Heritage Site and draws millions of pilgrims each year.
                </p>
                <p>
                  The Atirudra Mahayagya of 2022 was, by the account of those who organised it, the first time in recorded history that this ceremony was conducted at Pashupatinath — making the event a landmark moment not only for Nepal but for the entire Vedic world. Under the leadership of His Holiness Jagadguru Mahayogi Siddhababa, the nine-day ceremony unfolded within the sanctified precincts of this ancient temple from July 18 to July 26, 2022.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { label: "Location", value: "Gaushala, Kathmandu" },
                  { label: "Dates", value: "18–26 July 2022" },
                  { label: "Daily Hours", value: "8:00 AM – 4:00 PM" },
                  { label: "Presiding Master", value: "Jagadguru Mahayogi Siddhababa" },
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-xl bg-[#f4ede0] border border-[#d8cebb] p-4">
                    <p className="text-sm uppercase tracking-[0.15em] text-[#b8892a] font-medium mb-1">{label}</p>
                    <p className="text-[#2c1a08] text-sm font-light leading-snug">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAM ELEMENTS ── */}
      <section className="bg-[#f4ede0] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b8892a] font-medium mb-3">The Nine-Day Programme</p>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#2c1a08] leading-snug">
              What Took Place
            </h2>
            <p className="text-[#6a5c48] text-base mt-4 max-w-xl mx-auto leading-relaxed">
              Each of the nine days from 8 AM to 4 PM included a continuous interlocking programme of sacred ritual, recitation, and ceremony.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROGRAM_ELEMENTS.map(({ title, desc }, i) => (
              <div key={title} className="bg-white/70 rounded-2xl border border-[#d8cebb] p-6 flex gap-4 items-start shadow-sm">
                <div className="shrink-0 w-8 h-8 rounded-full bg-[#f4ede0] border border-[#d8cebb] flex items-center justify-center mt-0.5">
                  <span className="font-['Cormorant_Garamond'] text-sm text-[#b8892a] font-semibold">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-['Cormorant_Garamond'] text-lg text-[#2c1a08] font-light mb-2 leading-snug">{title}</h3>
                  <p className="text-[#6a5c48] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY (PLACEHOLDERS) ── */}
      <section className="bg-[#faf9f6] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b8892a] font-medium mb-3">From the Ceremony</p>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#2c1a08] leading-snug">
              Nine Days at Pashupatinath
            </h2>
            <p className="text-[#6a5c48] text-base mt-4 max-w-xl mx-auto leading-relaxed">
              Photographs from the Atirudra Mahayagya, July 18–26, 2022.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {GALLERY.map(({ src, alt }) => (
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

      {/* ── CLOSING QUOTE ── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <img
          src={`${b}images/atirudri-abhishekam.png`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="w-12 h-px bg-[#b8892a]/70 mx-auto mb-8" />
          <p className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-[#f0e8d8] font-light italic leading-relaxed mb-8">
            "Through the power of Rudra worship — performed with precision, devotion, and collective intention — the Tamasic forces that cloud the world can be dissolved. What remains is the luminous Sattvic quality: compassion, unity, and the recognition that all beings belong to one family."
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-[#e8c56a] font-medium mb-8">— Jagadguru Mahayogi Siddhababa</p>
          <div className="w-12 h-px bg-[#b8892a]/70 mx-auto" />
        </div>
      </section>

      {/* ── FOOTER NAV ── */}
      <section className="bg-[#faf9f6] py-12 px-6 border-t border-[#e8dece]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link href="/events#historic"
            className="inline-flex items-center gap-2 text-sm text-[#8a7860] hover:text-[#b8892a] transition-colors">
            <ArrowLeft size={14} />
            All Historic Events
          </Link>
          <Link href="/events/historic/ramarchan-mahayagya"
            className="sm:ml-auto inline-flex items-center gap-2 text-sm text-[#8a7860] hover:text-[#b8892a] transition-colors">
            Next: Ramarchan Mahayagya
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
