import Nav from "@/components/Nav";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

const b = import.meta.env.BASE_URL;

const CEREMONY_ELEMENTS = [
  {
    title: "Ram Naam Sankirtan",
    desc: "Continuous collective chanting of the divine names of Bhagwan Shri Ram — the primary practice of the Ramarchan, generating an unbroken field of sacred sound and devotion.",
  },
  {
    title: "Shri Ramcharitmanas Path",
    desc: "Recitation of the complete Ramcharitmanas, Goswami Tulsidas's immortal devotional rendering of Lord Ram's life — read by rotating teams of scholars and seekers throughout the ceremony.",
  },
  {
    title: "Pushp Archan",
    desc: "The ceremonial offering of flowers at the lotus feet of Bhagwan Shri Ram — a form of pure devotion in which each petal is offered with a name, a prayer, and a surrendered heart.",
  },
  {
    title: "Havan & Vedic Offerings",
    desc: "Sacred fire offerings made with ghee, herbs, grains, and sanctified materials, accompanied by Vedic mantras — consecrating the entire ceremony ground as a divine altar.",
  },
  {
    title: "Bhajans & Kirtan",
    desc: "Unbroken streams of devotional song in praise of Shri Ram — in the tradition of Mirabai, Tulsidas, Kabir, and the great saints — filling the ashram with the current of Bhakti.",
  },
  {
    title: "Satsang & Discourse",
    desc: "Teachings by Jagadguru Mahayogi Siddhababa on the life, qualities, and dharma of Bhagwan Shri Ram, and on Bhakti as the supreme path of liberation in this age.",
  },
  {
    title: "Prasadam Distribution",
    desc: "Daily distribution of blessed food and panchamrit — the five sacred substances — to all participants, as an expression of Shri Ram's boundless grace and the Guru's generosity.",
  },
  {
    title: "Closing Maha-Archan",
    desc: "The culminating 108th Ramarchan, performed in a state of collective stillness and devotion — an offering of the entire ceremony, and of all hearts present, at Shri Ram's feet.",
  },
];

const PLAYLISTS = [
  {
    id: "PLVoaXKRxO25o_ttbnjnFnxUmuXJ6QB350",
    title: "108 Ramarchan Mahayagya — Ceremony Recordings",
    desc: "Full recordings from the ceremony days — Ram Naam Sankirtan, Ramcharitmanas Path, and the sacred fire offerings.",
  },
  {
    id: "PLVoaXKRxO25p2flnb8Hql_iGwfEv7eFBk",
    title: "Satsang & Teachings — Shri Ram Series",
    desc: "Teachings and discourses by Jagadguru Mahayogi Siddhababa on the life and dharma of Bhagwan Shri Ram, offered during the Mahayagya.",
  },
];

export default function RamarchanDetail() {
  return (
    <div className="min-h-screen bg-[#faf9f6] font-['Inter']">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${b}images/ramarchan-mahayagya.jpg`}
            alt="108 Ramarchan Mahayagya — collective offering to Bhagwan Shri Ram"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0803]/75 via-[#2c1205]/45 to-[#faf9f6]" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#e8c56a]/60" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/60" />
          </div>
          <p className="text-[#e8c56a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Nepal · 2023</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight">
            108 Ramarchan Mahayagya
          </h1>
          <p className="text-[#f0e4c8] text-base tracking-widest uppercase font-light mt-4">
            The Complete Worship of Lord Ram
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
            { value: "108", label: "Complete Ramarchans" },
            { value: "Days", label: "of unbroken ceremony" },
            { value: "2023", label: "Year of the Mahayagya" },
            { value: "All Nepal", label: "& global participants" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[#e8c56a] font-light">{value}</p>
              <p className="text-[#c8a96a]/70 text-sm uppercase tracking-[0.2em] mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTEXT ── */}
      <section className="py-20 px-6 bg-[#faf9f6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">The Context</p>
            <div className="w-12 h-px bg-[#b8892a]/40 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 text-[#4a3f35] text-base leading-relaxed">
              <p>
                In 2023, Jagadguru Mahayogi Siddhababa convened one of the most ambitious devotional gatherings in the Academy's history — the 108 Ramarchan Mahayagya, a collective offering of 108 complete Ramarchans to Bhagwan Shri Ram.
              </p>
              <p>
                <em>Ramarchan</em> is the complete worship of Lord Ram: the recitation of his sacred names, the narration of his story through the Ramcharitmanas, the offering of flowers and sacred materials, and continuous devotional song. To complete 108 such full Ramarchans is a feat of extraordinary collective devotion — a continuous act of surrender carried across multiple days and nights.
              </p>
              <p>
                The ceremony drew Vedic scholars, devoted seekers, and community members from across Nepal, India, and the Academy's international centres — united in a single current of bhakti, offering all to the Maryada Purushottam, the Supreme Ideal of Dharma.
              </p>
            </div>
            <div className="bg-[#f4ede0] rounded-2xl p-8 border border-[#e8dece]">
              <p className="font-['Cormorant_Garamond'] text-2xl text-[#5c3d1e] italic leading-snug mb-4">
                "Bhagwan Shri Ram is not merely a historical figure — he is the living ideal of the fully human and the fully divine, the one whose name alone is liberation."
              </p>
              <p className="text-[#9a8f84] text-sm">— Jagadguru Mahayogi Siddhababa</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS RAMARCHAN ── */}
      <section className="py-20 px-6 bg-[#f4ede0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">The Practice</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#2c1a08] font-light">What is Ramarchan?</h2>
            <div className="w-12 h-px bg-[#b8892a]/40 mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-[#4a3f35] text-base leading-relaxed">
              <p>
                <em>Archan</em> — from the Sanskrit <em>arc</em>, meaning "to praise" or "to honour" — is the devotional act of worshipping a deity through the sequential offering of their names, accompanied by sanctified materials. <em>Ramarchan</em> is this sacred practice performed in worship of Bhagwan Shri Ram.
              </p>
              <p>
                A single complete Ramarchan involves the recitation of one thousand and eight names of Shri Ram, each name offered with a flower petal or sacred material as the devotee rests their entire attention at his feet. Combined with fire offerings, scripture reading, and kirtan, it becomes an immersive act of total devotion.
              </p>
              <p>
                The number 108 holds supreme significance in Vedic tradition — it is the number of the universe, the ratio of the Sun's distance to its diameter, the number of beads on a sacred mala. To perform 108 complete Ramarchans is to offer a complete universe of devotion at Lord Ram's feet.
              </p>
              <p>
                Performing the Mahayagya for the welfare of all living beings — not personal gain — transforms the ceremony into a universal offering, said to generate merit that benefits the entire world.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-[#faf9f6] rounded-xl border border-[#e8dece] p-5">
                <p className="text-[#b8892a] text-sm uppercase tracking-[0.2em] font-semibold mb-1">The Name</p>
                <p className="text-[#3a2f28] text-sm leading-relaxed">In the Vedic tradition, the name of Ram is considered equal in power to the thousand names of Vishnu. Tulsidas wrote: <em>"Ram naam manas kī chutakī" — the name Ram is the key that unlocks the mind."</em></p>
              </div>
              <div className="bg-[#faf9f6] rounded-xl border border-[#e8dece] p-5">
                <p className="text-[#b8892a] text-sm uppercase tracking-[0.2em] font-semibold mb-1">The Number</p>
                <p className="text-[#3a2f28] text-sm leading-relaxed">108 is the sacred number of completion in Vedic cosmology — the number of beads on the mala, the number of Upanishads, the ratio between Earth, Sun, and Moon.</p>
              </div>
              <div className="bg-[#faf9f6] rounded-xl border border-[#e8dece] p-5">
                <p className="text-[#b8892a] text-sm uppercase tracking-[0.2em] font-semibold mb-1">The Purpose</p>
                <p className="text-[#3a2f28] text-sm leading-relaxed">Performed for the welfare of all humanity — peace, liberation, the healing of collective sorrow — and as an act of pure gratitude for the life and sacrifice of Maryada Purushottam Shri Ram.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CEREMONY ELEMENTS ── */}
      <section className="py-20 px-6 bg-[#faf9f6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Elements of the Ceremony</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#2c1a08] font-light">Eight Streams of Devotion</h2>
            <div className="w-12 h-px bg-[#b8892a]/40 mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CEREMONY_ELEMENTS.map(({ title, desc }) => (
              <div key={title} className="bg-[#f4ede0] rounded-xl border border-[#e8dece] p-5 hover:border-[#b8892a]/40 transition-colors">
                <div className="w-6 h-px bg-[#b8892a]/60 mb-3" />
                <h3 className="font-['Cormorant_Garamond'] text-lg text-[#2c1a08] font-semibold mb-2">{title}</h3>
                <p className="text-[#6a5c48] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO PLAYLISTS ── */}
      <section className="py-20 px-6 bg-[#f4ede0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Watch</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#2c1a08] font-light">Ceremony Recordings</h2>
            <p className="text-[#6a5c48] text-base mt-4 max-w-xl mx-auto leading-relaxed">
              The complete ceremony recordings and teachings from the 108 Ramarchan Mahayagya, available on the Himalayan Siddha Mahayog YouTube channel.
            </p>
            <div className="w-12 h-px bg-[#b8892a]/40 mx-auto mt-4" />
          </div>
          <div className="space-y-12">
            {PLAYLISTS.map(({ id, title, desc }) => (
              <div key={id}>
                <div className="mb-4">
                  <h3 className="font-['Cormorant_Garamond'] text-2xl text-[#2c1a08] font-light">{title}</h3>
                  <p className="text-[#6a5c48] text-sm mt-1 leading-relaxed">{desc}</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#e8dece] aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/videoseries?list=${id}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-[#9a8f84] text-xs mt-2 text-right uppercase tracking-[0.15em]">
                  Himalayan Siddha Mahayog · YouTube Channel
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING QUOTE ── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${b}images/ramarchan-mahayagya.jpg`}
            alt=""
            aria-hidden
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/72" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="mx-auto mb-6 opacity-60">
            <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/>
          </svg>
          <blockquote className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-white font-light italic leading-snug mb-6">
            "Those who participated in the 108 Ramarchan Mahayagya carried home not merely memories, but a tangible shift in their inner state — the fruit of days spent in the current of sacred intention, mantra, and the Guru's grace."
          </blockquote>
          <p className="text-[#e8c56a] text-sm tracking-widest uppercase">— Mahayogi Siddhababa Spiritual Academy</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events#historic">
              <button className="inline-flex items-center gap-2 border border-[#e8c56a]/50 text-[#e8c56a] px-6 py-3 rounded-full text-sm hover:bg-[#e8c56a]/10 transition-colors">
                <ArrowLeft size={15} />
                All Historic Events
              </button>
            </Link>
            <Link href="/events/historic/hanumad-mahayagya">
              <button className="inline-flex items-center gap-2 bg-[#b8892a] text-white px-6 py-3 rounded-full text-sm hover:bg-[#9a6f1e] transition-colors">
                Next: Hanumad Mahayagya
                <ArrowRight size={15} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
