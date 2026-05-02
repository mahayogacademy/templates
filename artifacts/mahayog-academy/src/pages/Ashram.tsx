import { useState } from "react";
import Nav from "@/components/Nav";
import { Link } from "wouter";
import { ArrowRight, ChevronLeft, ChevronRight, Mic2 } from "lucide-react";

const b2 = import.meta.env.BASE_URL;

const RELATED = [
  {
    type: "article" as const,
    tag: "Sacred Places",
    title: "The Spiritual Significance of Barahachhetra",
    excerpt: "In the sacred geography of Sanātan Dharma, certain lands do not merely witness divinity. They hold it. Barahachhetra is one such land — revered across ages by gods, rishis, avatars, ancestors, and saints.",
    date: "20 April 2025",
    thumbnail: `${b2}images/teachings-prana.png`,
    href: "/teachings/barahachhetra",
  },
  {
    type: "article" as const,
    tag: "Sacred Places",
    title: "Nepal: Spirituality's Beating Heart",
    excerpt: "Nepal is described in sacred traditions as a land where the divine is not distant but actively present. Siddhababa reveals Nepal as Bhū-Vaikuṇṭha — an earthly expression of the divine realm.",
    date: "1 April 2025",
    thumbnail: `${b2}images/teachings-nepal.png`,
    href: "/teachings/nepal-sacred-geography",
  },
  {
    type: "interview" as const,
    tag: "Interview",
    title: "Reviving Nepal's Ancient Wisdom: Yoga, Āyurveda & Nāḍī Science",
    excerpt: "A rich Malaku TV conversation on Nepal's ancient knowledge systems — the science of yoga, the healing arts of Āyurveda, and the profound diagnostic tradition of Nāḍī Science.",
    date: "Malaku TV · 49 min",
    thumbnail: "https://i.ytimg.com/vi/-L3KEFytQ9I/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=-L3KEFytQ9I",
  },
];

const GALLERY_TOP = [
  { src: "ashram-hanuman-sunset.jpg", alt: "Hanuman statue silhouette at golden sunset",       caption: "Sewa Pith Ashram · Nepal" },
  { src: "ashram-cows-sunset.jpg",    alt: "Sacred cows grazing at sunset on ashram grounds",  caption: "Goshala at Sunset" },
  { src: "ashram-hanuman-wide.jpg",    alt: "Ashram grounds with Hanuman statue and green lawn",   caption: "Ashram Grounds" },
  { src: "ashram-satsang-night.jpg",  alt: "Gurudev seated with disciples for evening satsang",   caption: "Evening Satsang" },
];

const GALLERY_BOT = [
  { src: "ashram-garden.jpg",                                alt: "Devotees tending the ashram herb garden",                  caption: "Sacred Garden" },
  { src: "ashram-cows-1.jpg",                                alt: "Devotee caring for sacred cows at the ashram gate",        caption: "Caring for the Sacred" },
  { src: "ashram-extra-prasad-serve.jpg",                    alt: "Devotees serving prasad to a long row of seated guests",   caption: "Prasad Seva" },
  { src: "ashram-hanuman-close.jpg",                         alt: "The golden Hanuman statue at the ashram temple",           caption: "The Hanuman Temple" },
  { src: "ashram-extra-IMG_7604_1777303599506.jpg",          alt: "Devotees gathered for satsang at the center",              caption: "Community Satsang" },
  { src: "ashram-extra-calf-hay.jpg",                        alt: "Newborn sacred calf resting in hay at the ashram",         caption: "New Life" },
  { src: "ashram-extra-IMG_7797_1777303606369.jpg",          alt: "The ornate temple altar adorned with flowers and deities", caption: "The Sacred Altar" },
  { src: "ashram-extra-panchamukhi.jpg",                     alt: "Panchamukhi Hanuman deity adorned with garlands",          caption: "Panchamukhi Hanuman", objectPosition: "center 20%" },
  { src: "ashram-extra-IMG_7688_1777303609347.jpg",          alt: "Devotees preparing prasad in the ashram kitchen",          caption: "Prasad Preparation" },
  { src: "ashram-extra-IMG_0034_1777303590698.jpg",          alt: "Devotee harvesting herbs in the ashram garden",            caption: "Herb Garden Harvest" },
  { src: "ashram-extra-cow-portrait.jpg",                    alt: "Sacred cow looking into the camera at the ashram",         caption: "Gau Seva" },
  { src: "ashram-extra-IMG_7693_1777303612187.jpg",          alt: "Devotee serving blessed food to the community",            caption: "Prasad Distribution" },
  { src: "ashram-extra-IMG_7898_1777303621687.jpg",          alt: "Devotees planting and tending the ashram fields",          caption: "Seva in the Fields" },
  { src: "ashram-extra-cow-calf-bond.jpg",                   alt: "Mother cow nuzzling her calf in the ashram barn",          caption: "Divine Bond" },
  { src: "ashram-extra-IMG_7933_1777303625151.jpg",          alt: "Scenic river and forested hills near the ashram",          caption: "Sacred Land" },
  { src: "ashram-extra-IMG_8099_1777303638539.jpg",          alt: "Garden walkway lined with topiary and mountain views",     caption: "Garden Path" },
  { src: "ashram-extra-sanyasi-river.jpg",                   alt: "Smiling sanyasi seated under a tree by the river",         caption: "Joy by the River" },
  { src: "ashram-extra-river-diyas.jpg",                     alt: "Lit diyas floating on the sacred river at dusk",           caption: "River Aarti" },
  { src: "ashram-extra-river-stones.jpg",                    alt: "Balanced stones stacked on the Koshi riverbank at dusk",   caption: "River Stones" },
  { src: "ashram-extra-IMG_7998_1777303631687.jpg",          alt: "Wide ashram grounds with Himalayan hills in the distance", caption: "Ashram Grounds" },
  { src: "ashram-extra-IMG_8009_1777303646025.jpg",          alt: "Ashram temple and flag with green hills behind",           caption: "Temple Grounds" },
  { src: "ashram-extra-procession.jpg",                      alt: "Devotees in procession carrying sacred vessels",           caption: "Sacred Procession" },
];

const b = import.meta.env.BASE_URL;

const PILLARS = [
  {
    sanskrit: "Sumiran",
    title: "Meditation & Remembrance",
    desc: "The practice of inner stillness, turning the mind toward the divine through daily meditation, mantra, and conscious remembrance of the eternal self.",
    icon: "✦",
  },
  {
    sanskrit: "Seva",
    title: "Selfless Service",
    desc: "Sacred action performed without attachment to reward. Seva purifies the heart, dissolves ego, and transforms everyday work into a form of worship.",
    icon: "✦",
  },
  {
    sanskrit: "Satsang",
    title: "Spiritual Discourse",
    desc: "Gathering in the company of truth, receiving wisdom from the Guru and senior practitioners, asking questions, and deepening understanding through sacred dialogue.",
    icon: "✦",
  },
];

const ASHRAM_LIFE = [
  {
    title: "Sacred Living Spaces",
    desc: "Simple, serene accommodations designed to support spiritual practice, inner contemplation, and a life free from unnecessary distraction.",
    img: "ashram-life-accommodation.png",
    alt: "Simple ashram accommodation",
  },
  {
    title: "Daily Satsang",
    desc: "Regular spiritual discourses and Q&A sessions with Gurudev and senior practitioners, guidance for every stage of the path.",
    img: "ashram-life-satsang.png",
    alt: "Satsang gathering with the Guru",
  },
  {
    title: "Seva Opportunities",
    desc: "Contribute meaningfully to ashram life through selfless service, a powerful spiritual practice in its own right. All forms of seva are equally valued.",
    img: "ashram-life-seva.png",
    alt: "Devotees performing seva",
  },
  {
    title: "Sattvic Meals",
    desc: "Nourishing vegetarian meals prepared with love, following Ayurvedic principles, food as medicine, offered as prasad.",
    img: "ashram-life-meals.png",
    alt: "Sattvic prasad thali",
  },
];

const SCHEDULE = [
  { time: "4:00 AM",  item: "Wake Up" },
  { time: "4:30 AM",  item: "Morning Group Meditation" },
  { time: "6:30 AM",  item: "Aarti and Stuti" },
  { time: "7:30 AM",  item: "Bal Bhog Prashad (Breakfast)" },
  { time: "8:00 AM",  item: "Seva" },
  { time: "10:30 AM", item: "Raj Bhog Prashad (Lunch)" },
  { time: "11:30 AM", item: "Seva / Rest" },
  { time: "1:00 PM",  item: "Sanskrit Class" },
  { time: "3:00 PM",  item: "Rest" },
  { time: "3:30 PM",  item: "Seva" },
  { time: "5:30 PM",  item: "Biharu Prashad (Light Dinner)" },
  { time: "6:30 PM",  item: "Evening Aarti & Stuti" },
  { time: "7:30 PM",  item: "Ramcharitmanas / Bhajan" },
  { time: "8:00 PM",  item: "Satsang" },
  { time: "9:30 PM",  item: "Rest" },
];


const NEPAL_CENTERS = [
  {
    name: "Jagadguru Ramanadacharya Seva Peeth",
    aka: "Shree Ram Tarak Brahma Peeth",
    city: "Baharachettra, Sunsari",
    role: "Head Ashram",
    featured: true,
  },
  {
    name: "Mahayogi Siddhababa Spiritual Academy",
    city: "Kathmandu",
    note: "Naya Bazar, Balaju (next to Bishumati Bridge)",
    featured: false,
  },
  {
    name: "Pokhara Center",
    city: "Pokhara",
    note: "Narayanthan, Nadipur",
    featured: false,
  },
  {
    name: "Chitwan Center",
    city: "Chitwan",
    note: "",
    featured: false,
  },
  {
    name: "Surkhet Center",
    city: "Surkhet",
    note: "",
    featured: false,
  },
];

const INTERNATIONAL_CENTERS = [
  { country: "India", cities: ["Jaipur"] },
  { country: "Canada", cities: ["Ottawa", "Calgary", "Edmonton", "Vancouver"] },
  { country: "United States", cities: ["Dallas", "Lubbock"] },
  { country: "United Kingdom", cities: ["London", "Reading", "Dartford"] },
  { country: "Denmark", cities: ["Copenhagen"] },
  { country: "Australia", cities: ["Sydney", "Adelaide"] },
];

export default function Ashram() {
  const [topIdx, setTopIdx] = useState(0);
  const [botIdx, setBotIdx] = useState(0);

  const nt = GALLERY_TOP.length;
  const nb = GALLERY_BOT.length;
  const prevTop = () => setTopIdx((i) => (i - 1 + nt) % nt);
  const nextTop = () => setTopIdx((i) => (i + 1) % nt);
  const prevBot = () => setBotIdx((i) => (i - 1 + nb) % nb);
  const nextBot = () => setBotIdx((i) => (i + 1) % nb);

  return (
    <div className="bg-[#faf9f6] text-[#3d3830]" style={{ scrollBehavior: "smooth" }}>
      <Nav />

      {/* ── IMAGE PRELOADER ── */}
      <div aria-hidden="true" className="absolute w-0 h-0 overflow-hidden pointer-events-none">
        {[...GALLERY_TOP, ...GALLERY_BOT].map(({ src }) => (
          <img key={src} src={`${b}images/${src}`} alt="" fetchPriority="low" />
        ))}
      </div>

      {/* ── HERO ── */}
      <section className="relative h-[58vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={`${b}images/ashram-hero.png`}
          alt="The Guru Ashram at Barahachetra, Nepal"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/65 via-[#2c1a08]/40 to-[#faf9f6]" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#e8c56a]" />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/>
            </svg>
            <div className="h-px w-12 bg-[#e8c56a]" />
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light text-white leading-tight mb-4">
            Ashram & Centers
          </h1>
          <p className="text-lg text-[#f0e4c8] tracking-widest uppercase font-light mb-8">
            A Spiritual Home for All
          </p>
          <a
            href="#visit"
            className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-7 py-3 rounded-full tracking-wider transition-colors duration-200"
          >
            Plan a Visit
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>
      </section>

      {/* ── WHAT IS AN ASHRAM ── */}
      <section className="py-20 px-6 bg-[#fdf6ec]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-[#b8892a]/40" />
            <span className="uppercase tracking-[0.3em] text-xs text-[#b8892a] font-medium">Understanding the Tradition</span>
            <div className="h-px w-10 bg-[#b8892a]/40" />
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#3d3830] mb-8 leading-snug">
            What is an Ashram?
          </h2>
          <p className="text-base text-[#5a5248] leading-relaxed mb-5">
            The word <span className="text-[#3d3830] font-medium">ashram</span> comes from the Sanskrit <span className="text-[#3d3830] font-medium">āśrama</span> — meaning a place of refuge, effort, and inner work. Traditionally, an ashram is a residential community centred around a spiritual teacher, where people gather to learn, practise, serve, and live with greater intention and clarity.
          </p>
          <p className="text-base text-[#5a5248] leading-relaxed mb-5">
            Unlike a retreat centre or temple, an ashram is a living environment — a place where the rhythms of daily life themselves become the practice. Mornings begin with meditation and prayer. Days are shaped by study, selfless service, and communal activity. Evenings close with satsang — gathering in the presence of truth.
          </p>
          <p className="text-base text-[#5a5248] leading-relaxed">
            An ashram welcomes people of all backgrounds and beliefs. There is no requirement to adopt a particular religion or worldview — only a sincere wish to grow inwardly, to serve, and to live with greater awareness.
          </p>
        </div>
      </section>

      {/* ── INTRO + IMAGE ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">The Guru Ashram</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2 mb-6 leading-snug">
              On the Banks of the Sacred Koshi River
            </h2>
            <p className="text-base leading-relaxed text-[#5a5248] mb-5">
              Situated on the banks of the sacred Kaushiki (Koshi) River, the Guru Ashram spans over 10 acres in Chataradham, Barahachetra, Nepal. Surrounded by hills, rivers, and natural beauty, the ashram offers the ideal environment for peace, reflection, and deep meditation.
            </p>
            <div className="h-px w-16 bg-[#d4a843]/60 mb-5" />
            <p className="text-base leading-relaxed text-[#5a5248]">
              Open to visitors and spiritual seekers from all walks of life, the Guru Ashram serves as a spiritual home, supporting sincere practice and quiet contemplation.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Chataradham, Nepal", "10+ Acres", "All Seekers Welcome"].map(t => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-[#f5ece0] text-[#9d7422] border border-[#e8d5b0] tracking-wide">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <img
              src={`${b}images/ashram-koshi-river.jpg`}
              alt="The sacred Kaushiki (Koshi) River flowing through the misty hills of Nepal"
              className="w-full rounded-2xl object-cover shadow-md"
              style={{ height: "420px" }}
            />
          </div>
        </div>
      </section>

      {/* ── A PLACE OF TRANSFORMATION ── */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#fdf6ec] to-[#faf9f6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src={`${b}images/ashram-satsang.png`}
              alt="Evening satsang"
              className="w-full rounded-2xl object-cover shadow-md"
              style={{ height: "400px" }}
            />
          </div>
          <div>
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Sacred Ground</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2 mb-6 leading-snug">
              A Place of Transformation
            </h2>
            <p className="text-base leading-relaxed text-[#5a5248] mb-5">
              The Ashram follows traditional Vedic principles while providing modern amenities for visiting seekers. Daily meditation sessions, satsangs, and seva opportunities create a complete spiritual immersion experience.
            </p>
            <p className="text-base leading-relaxed text-[#5a5248]">
              Whether you are visiting for a day or staying for an extended retreat, the Ashram offers the space and support for sincere spiritual practice.
            </p>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background image with warm overlay */}
        <img
          src={`${b}images/ashram-hero.png`}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-[#faf0e0]/88" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">The Foundation of Practice</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#3d3830] mt-2 mb-4">
              Three Pillars of Practice
            </h2>
            <p className="text-sm text-[#6b5f54] max-w-xl mx-auto leading-relaxed">
              The Guru Ashram is a rare place where seekers can engage in all three together in a supportive and loving setting.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PILLARS.map((p) => (
              <div key={p.sanskrit} className="bg-white/80 backdrop-blur-sm border border-[#e8d5b0] rounded-2xl p-8 hover:shadow-xl hover:shadow-[#b8892a]/12 hover:bg-white/95 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#fdf6ec] border border-[#e8c56a]/50 flex items-center justify-center mb-5">
                  <span className="text-[#b8892a] text-sm">{p.icon}</span>
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#b8892a] mb-1">{p.sanskrit}</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#9a8f84] font-medium mb-4">{p.title}</p>
                <div className="h-px w-8 bg-[#d4a843]/50 mb-4" />
                <p className="text-sm leading-relaxed text-[#5a5248]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Life at the Ashram</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2">A Glimpse Within</h2>
          </div>

          {/* ── TOP CAROUSEL, full-width banner ── */}
          <div className="relative overflow-hidden rounded-2xl mb-3" style={{ height: "360px" }}>
            <img
              key={topIdx}
              src={`${b}images/${GALLERY_TOP[topIdx].src}`}
              alt={GALLERY_TOP[topIdx].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
              style={{ filter: "brightness(1.06) saturate(1.18) contrast(1.02)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            <p className="absolute bottom-4 left-5 text-xs text-white/90 tracking-[0.2em] uppercase font-medium">
              {GALLERY_TOP[topIdx].caption}
            </p>
            <button onClick={prevTop} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-colors">
              <ChevronLeft className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>
            <button onClick={nextTop} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-colors">
              <ChevronRight className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>
            <div className="absolute bottom-4 right-5 flex gap-1.5">
              {GALLERY_TOP.map((_, i) => (
                <button key={i} onClick={() => setTopIdx(i)} className={`w-1.5 h-1.5 rounded-full transition-all ${i === topIdx ? "bg-white scale-125" : "bg-white/40"}`} />
              ))}
            </div>
          </div>

          {/* ── BOTTOM CAROUSEL, three tiles ── */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map((offset) => {
                const img = GALLERY_BOT[(botIdx + offset) % nb];
                return (
                  <div key={offset} className="relative overflow-hidden rounded-2xl" style={{ height: "240px" }}>
                    <img
                      src={`${b}images/${img.src}`}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-opacity duration-500"
                      style={{ filter: "brightness(1.06) saturate(1.15) contrast(1.02)", objectPosition: img.objectPosition ?? "center" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <p className="absolute bottom-3 left-3 text-[10px] text-white/85 tracking-[0.15em] uppercase">{img.caption}</p>
                  </div>
                );
              })}
            </div>
            <button onClick={prevBot} className="absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-[#e8dece] shadow-sm hover:border-[#b8892a] flex items-center justify-center transition-colors z-10">
              <ChevronLeft className="w-4 h-4 text-[#b8892a]" strokeWidth={1.5} />
            </button>
            <button onClick={nextBot} className="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-[#e8dece] shadow-sm hover:border-[#b8892a] flex items-center justify-center transition-colors z-10">
              <ChevronRight className="w-4 h-4 text-[#b8892a]" strokeWidth={1.5} />
            </button>
            <div className="flex justify-center gap-1.5 mt-4">
              {GALLERY_BOT.map((_, i) => (
                <button key={i} onClick={() => setBotIdx(i)} className={`w-1.5 h-1.5 rounded-full transition-all ${i === botIdx ? "bg-[#b8892a] scale-125" : "bg-[#d4a843]/30"}`} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── ASHRAM LIFE ── */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#fdf6ec] to-[#faf9f6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Community Living</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2">
              Ashram Life
            </h2>
            <p className="text-sm text-[#7a7068] mt-3 max-w-lg mx-auto">
              Experience the rhythm of spiritual community living.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {ASHRAM_LIFE.map((item, i) => (
              <div key={i} className="flex gap-0 bg-white rounded-2xl border border-[#e8dece] hover:shadow-lg hover:shadow-[#b8892a]/8 hover:border-[#d4a843]/40 transition-all duration-300 overflow-hidden">
                <div className="shrink-0 w-36 relative">
                  <img
                    src={`${b}images/${item.img}`}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                </div>
                <div className="flex-1 p-6">
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#3d3830] mb-2 leading-snug">{item.title}</h3>
                  <div className="h-px w-6 bg-[#d4a843]/50 mb-3" />
                  <p className="text-sm leading-relaxed text-[#5a5248]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DAILY SCHEDULE ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">The Rhythm of the Day</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#3d3830] mt-2">Daily Schedule</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
            {[SCHEDULE.slice(0, Math.ceil(SCHEDULE.length / 2)), SCHEDULE.slice(Math.ceil(SCHEDULE.length / 2))].map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col">
                {col.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-6 py-5 border-b border-[#e8dece]/60 last:border-b-0"
                  >
                    <span className="font-['Cormorant_Garamond'] text-xl text-[#b8892a] font-semibold min-w-[90px] tracking-wide shrink-0">
                      {s.time}
                    </span>
                    <div className="w-px h-6 bg-[#d4a843]/50 shrink-0" />
                    <span className="text-base text-[#5a5248]">{s.item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AKHANDA KIRTAN ── */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${b}images/akhanda-kirtan-bg.png`} alt="" aria-hidden className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#fdf6ec]/91" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8892a] font-semibold mb-3">Continuous since 2010</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#2e2820] leading-snug mb-6">
              Akhanda Kīrtan
            </h2>
            <div className="h-px w-10 bg-[#b8892a]/50 mb-6" />
            <p className="text-base text-[#4a4038] leading-relaxed mb-4">
              The Hanuman Temple at the ashram holds an unbroken stream of devotional chanting, the Ram mantra has been recited continuously, 24 hours a day, without interruption since 2010.
            </p>
            <p className="text-base text-[#4a4038] leading-relaxed">
              <span className="italic font-['Cormorant_Garamond'] text-[#2e2820]">Akhanda</span> means "unbroken", this living practice embodies the ideal of constant remembrance, filling the ashram with an ever-present current of sacred sound that supports all who enter.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-36 h-36 rounded-full border border-[#b8892a]/50 flex items-center justify-center mb-6 bg-white/60 backdrop-blur-sm">
              <div className="text-center">
                <p className="font-['Cormorant_Garamond'] text-5xl font-light text-[#b8892a] leading-none">24</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#6a6058] mt-1">hrs / day</p>
              </div>
            </div>
            <p className="font-['Cormorant_Garamond'] text-2xl italic text-[#2e2820] mb-2">Rām Nām</p>
            <p className="text-xs uppercase tracking-[0.3em] text-[#6a6058]">Unbroken · Continuous · Since 2010</p>
          </div>
        </div>
      </section>

      {/* ── SEVA + SATSANG ── */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#fdf6ec] to-[#faf9f6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Seva */}
          <div className="bg-white rounded-2xl border border-[#e8dece] overflow-hidden hover:shadow-lg hover:shadow-[#b8892a]/8 transition-all duration-300">
            <img
              src={`${b}images/ashram-seva.png`}
              alt="Seva at the ashram"
              className="w-full object-cover"
              style={{ height: "240px" }}
            />
            <div className="p-8">
              <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#b8892a] mb-1">Seva</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#9a8f84] font-medium mb-4">Selfless Service</p>
              <div className="h-px w-8 bg-[#d4a843]/50 mb-4" />
              <p className="text-sm leading-relaxed text-[#5a5248] mb-4">
                Seva plays a central role in spiritual growth, cultivating humility and reducing ego through selfless action. Seekers can offer seva according to their interests, skills, and professional experience.
              </p>
              <p className="text-sm leading-relaxed text-[#5a5248]">
                All forms of seva are valued equally, no service is considered superior or inferior.
              </p>
            </div>
          </div>

          {/* Satsang */}
          <div className="bg-white rounded-2xl border border-[#e8dece] overflow-hidden hover:shadow-lg hover:shadow-[#b8892a]/8 transition-all duration-300">
            <img
              src={`${b}images/ashram-satsang.png`}
              alt="Satsang with Gurudev"
              className="w-full object-cover"
              style={{ height: "240px" }}
            />
            <div className="p-8">
              <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#b8892a] mb-1">Satsang</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#9a8f84] font-medium mb-4">Spiritual Discourse & Guidance</p>
              <div className="h-px w-8 bg-[#d4a843]/50 mb-4" />
              <p className="text-sm leading-relaxed text-[#5a5248] mb-4">
                During Satsang, seekers gather to receive guidance and wisdom from Gurudev. This sacred space allows individuals to ask questions, reflect, and deepen understanding.
              </p>
              <p className="text-sm leading-relaxed text-[#5a5248]">
                Sitting in the presence of enlightened Jagadguru Mahayogi Siddhababa offers itself clarity and inner insight, an essential support for every sincere seeker.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ASHRAM SEVA CTA ── */}
      <section className="py-20 px-6 bg-[#f5ece0] border-t border-b border-[#e2d0b8]">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#b8892a]/60" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#b8892a] font-semibold">Offer Your Support</span>
              <div className="h-px w-10 bg-[#b8892a]/60" />
            </div>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#2e2820] leading-snug mb-5">
              Participate in Ashram Seva
            </h2>
            <p className="text-base md:text-lg text-[#5a5248] leading-relaxed max-w-2xl mx-auto">
              The ashram is sustained entirely through the generosity and devotion of seekers. By contributing, you become part of this sacred mission — supporting spiritual education, daily prasad, gau seva, and the care of this living spiritual home.
            </p>
          </div>

          {/* Seva options grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { name: "Gau Seva",        sub: "Care of Sacred Cows",  img: "seva-gau-seva.png" },
              { name: "Hanuman Pūjā",    sub: "Temple Worship",       img: "seva-hanuman-puja.png" },
              { name: "Akhanda Kīrtan",  sub: "Continuous Chanting",  img: "seva-akhanda-kirtan.png" },
              { name: "Brahmand Bhojan", sub: "Prasad Distribution",  img: "seva-brahmand-bhojan.png" },
            ].map((s) => (
              <div key={s.name} className="flex flex-col rounded-2xl bg-white border border-[#e2d0b8] shadow-sm hover:shadow-md hover:border-[#d4a843]/50 transition-all duration-300 overflow-hidden">
                <div className="w-full overflow-hidden" style={{ height: "160px" }}>
                  <img
                    src={`${b2}images/${s.img}`}
                    alt={s.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <span className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2e2820] leading-snug block mb-0.5">{s.name}</span>
                  <span className="text-sm text-[#9a8f84]">{s.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/donate">
              <button className="inline-flex items-center gap-3 bg-[#b8892a] hover:bg-[#9d7422] text-white text-base px-10 py-4 rounded-full tracking-wider transition-colors duration-200 shadow-lg shadow-[#b8892a]/25">
                Offer Seva
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* ── PLAN A VISIT CTA ── */}
      <section id="visit" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${b}images/ashram-hero.png`} alt="" aria-hidden className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-[#1a0f05]/75" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#e8c56a]/70" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/70" />
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-white mb-4">Plan a Visit</h2>
          <p className="text-[#f0e4c8] text-base leading-relaxed mb-8 max-w-lg mx-auto">
            The Guru Ashram welcomes sincere seekers from all backgrounds. Whether for a day visit, a weekend, or an extended stay, come and experience a place where ancient wisdom is lived.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-8 py-3.5 rounded-full tracking-wider transition-colors duration-200 cursor-pointer">
              Get in Touch
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </span>
          </Link>
        </div>
      </section>

      {/* ── RELATED READINGS ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Explore Further</span>
            <h2 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#3d3830] mt-2">Related Teachings</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {RELATED.map((a) => {
              const isExternal = a.href.startsWith("http");
              const cardContent = (
                <div className="group bg-white border border-[#e8dece] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#d4a843]/40 transition-all duration-300 cursor-pointer h-full flex flex-col">
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden" style={{ height: "180px" }}>
                    <img
                      src={a.thumbnail}
                      alt={a.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <span className={`absolute top-3 left-3 text-[10px] uppercase tracking-[0.15em] font-semibold px-2.5 py-1 rounded-full ${a.type === "interview" ? "bg-[#5a4a8a]/90 text-white" : "bg-[#b8892a]/90 text-white"}`}>
                      {a.tag}
                    </span>
                  </div>
                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#9a8f84] mb-2">{a.date}</p>
                    <h3 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#3d3830] mb-2 leading-snug group-hover:text-[#9d7422] transition-colors duration-200 flex-1">
                      {a.title}
                    </h3>
                    <p className="text-sm text-[#7a7068] leading-relaxed line-clamp-2 mb-4">{a.excerpt}</p>
                    <div className="flex items-center gap-1 text-[#b8892a] text-xs font-medium mt-auto">
                      {a.type === "interview" ? "Watch" : "Read"} <ArrowRight className="w-3 h-3" strokeWidth={2} />
                    </div>
                  </div>
                </div>
              );
              return isExternal ? (
                <a key={a.href} href={a.href} target="_blank" rel="noopener noreferrer" className="flex flex-col">
                  {cardContent}
                </a>
              ) : (
                <Link key={a.href} href={a.href}>
                  <div className="flex flex-col h-full">{cardContent}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CENTERS ── */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${b}images/centers-bg.png`} alt="" aria-hidden className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#1a0f05]/72" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="uppercase tracking-[0.25em] text-xs text-[#e8c56a] font-medium">A Growing Community</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-white mt-2">Centers & Ashrams</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/20">

            {/* ── Nepal ── */}
            <div className="md:pr-12 pb-10 md:pb-0">
              <p className="text-xs uppercase tracking-[0.25em] text-[#e8c56a] font-medium mb-7">Nepal</p>

              {/* Head Ashram */}
              <div className="mb-7 pb-7 border-b border-white/20">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white bg-[#b8892a] px-2.5 py-1 rounded font-medium inline-block mb-3">Head Ashram</span>
                <p className="font-['Cormorant_Garamond'] text-xl font-light text-white leading-snug">
                  Jagadguru Ramanadacharya Seva Peeth
                </p>
                <p className="text-sm text-[#d4c4a8] italic mt-1">Shree Ram Tarak Brahma Peeth</p>
                <p className="text-sm text-[#c8b89a] mt-1">Baharachettra, Sunsari, Nepal</p>
              </div>

              {/* Other Nepal centers */}
              <div className="space-y-5">
                {NEPAL_CENTERS.filter(c => !c.featured).map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-1 h-1 rounded-full bg-[#e8c56a] mt-2.5 shrink-0" />
                    <div>
                      <p className="font-['Cormorant_Garamond'] text-lg font-light text-white leading-snug">{c.city}</p>
                      {c.note
                        ? <p className="text-sm text-[#c8b89a] mt-0.5">{c.note}</p>
                        : <p className="text-sm text-[#a89880] italic mt-0.5">Details coming soon</p>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── International ── */}
            <div className="md:pl-12 pt-10 md:pt-0">
              <p className="text-xs uppercase tracking-[0.25em] text-[#e8c56a] font-medium mb-7">International</p>
              <div className="space-y-5">
                {INTERNATIONAL_CENTERS.map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-1 h-1 rounded-full bg-[#e8c56a] mt-2.5 shrink-0" />
                    <div>
                      <p className="font-['Cormorant_Garamond'] text-lg font-light text-white leading-snug">{c.country}</p>
                      {c.cities.length > 0
                        ? <p className="text-sm text-[#c8b89a] mt-0.5">{c.cities.join(" · ")}</p>
                        : <p className="text-sm text-[#a89880] italic mt-0.5">Details coming soon</p>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6 border-t border-[#e8dece] bg-[#f5ede0]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-['Cormorant_Garamond'] text-lg font-medium text-[#b8892a]">
            Mahayogi Siddhababa Spiritual Academy
          </span>
          <p className="text-xs text-[#9a8f84] text-center">A not-for-profit, volunteer-run organization, Nepal</p>
        </div>
      </footer>
    </div>
  );
}
