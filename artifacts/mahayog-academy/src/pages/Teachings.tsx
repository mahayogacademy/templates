import { useState, useMemo } from "react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import { Search, Play, ArrowRight, BookOpen, Newspaper, Video, ChevronRight } from "lucide-react";

const b = import.meta.env.BASE_URL;

type ContentType = "all" | "article" | "video" | "news";

interface Item {
  id: string;
  type: "article" | "video" | "news";
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  thumbnail?: string;
  thumbnailGradient?: string;
  duration?: string;
  href: string;
  featured?: boolean;
}

const ITEMS: Item[] = [
  /* ── FEATURED ── */
  {
    id: "f1",
    type: "article",
    title: "The Science of Shaktipat: Gateway to the Mahayog Path",
    excerpt: "Shaktipat — the transmission of spiritual energy from Guru to disciple — is the foundational act that awakens the dormant Kundalini and sets the Mahayog journey in motion. Jagadguru Mahayogi Siddhababa explains what it is, why it is necessary, and how it works.",
    date: "12 April 2025",
    tag: "Mahayog",
    thumbnail: `${b}images/teachings-article-1.png`,
    href: "#",
    featured: true,
  },

  /* ── ARTICLES ── */
  {
    id: "a1",
    type: "article",
    title: "Dharma in the Modern Age: Living with Awareness",
    excerpt: "Rather than encouraging withdrawal from the world, Mahayog teaches us to engage with life more fully — with clarity, compassion, and purpose. This is the essence of Dharma in daily living.",
    date: "3 March 2025",
    tag: "Dharma",
    thumbnail: `${b}images/teachings-article-2.png`,
    href: "#",
  },
  {
    id: "a2",
    type: "article",
    title: "What is Brahmavidya? The Vedic Knowledge of Ultimate Reality",
    excerpt: "Brahmavidya — the knowledge of Brahman — is the highest teaching of the Vedic tradition. Jagadguru explains how Mahayog is fundamentally a Brahmavidya, a complete path to Self-realisation.",
    date: "14 February 2025",
    tag: "Vedanta",
    thumbnail: `${b}images/teachings-article-3.png`,
    href: "#",
  },
  {
    id: "a3",
    type: "article",
    title: "Kundalini: Myths, Realities, and the Mahayog Approach",
    excerpt: "Kundalini has been widely misunderstood in popular culture. This article clarifies its true nature from the Vedic perspective and explains how Mahayog offers a safe, grace-based awakening.",
    date: "28 January 2025",
    tag: "Kundalini",
    thumbnailGradient: "from-[#7c4a1a] to-[#2c1a08]",
    href: "#",
  },
  {
    id: "a4",
    type: "article",
    title: "Ayurveda and Mahayog: An Integrated Approach to Wellbeing",
    excerpt: "The ancient sciences of Ayurveda and Yoga are two branches of the same Vedic tree. Together they address body, energy, mind, and spirit — offering a complete path to health and liberation.",
    date: "9 January 2025",
    tag: "Ayurveda",
    thumbnailGradient: "from-[#4a6b3a] to-[#1a3010]",
    href: "#",
  },
  {
    id: "a5",
    type: "article",
    title: "The Guru-Disciple Relationship in the Vedic Tradition",
    excerpt: "Few concepts are more central — or more misunderstood — in Hindu spirituality than that of the Guru. Jagadguru Mahayogi Siddhababa offers a clear and compassionate explanation of this sacred relationship.",
    date: "20 December 2024",
    tag: "Gurudev",
    thumbnailGradient: "from-[#5a3a1a] to-[#1a0c03]",
    href: "#",
  },

  /* ── VIDEOS ── */
  {
    id: "v1",
    type: "video",
    title: "Guided Mahayog Meditation — Morning Practice with Siddhababa",
    excerpt: "A complete guided Mahayog meditation session with Jagadguru Mahayogi Siddhababa — suitable for practitioners at all levels. Begin your day in stillness and awareness.",
    date: "1 May 2025",
    tag: "Meditation",
    thumbnailGradient: "from-[#1a0c03] to-[#3d2008]",
    duration: "1 hr 22 min",
    href: "https://www.youtube.com/@siddhamahayog",
  },
  {
    id: "v2",
    type: "video",
    title: "Satsang: The Meaning of Surrender in Spiritual Life",
    excerpt: "In this satsang recording, Jagadguru addresses the question of surrender — what it truly means, why it is essential on the path, and how to cultivate it in everyday life.",
    date: "15 April 2025",
    tag: "Satsang",
    thumbnailGradient: "from-[#2c1a08] to-[#0e0703]",
    duration: "58 min",
    href: "https://www.youtube.com/@siddhamahayog",
  },
  {
    id: "v3",
    type: "video",
    title: "108 Ramarchan Mahayagya — Full Ceremony Recording",
    excerpt: "Watch the complete recording of the 108 Ramarchan Mahayagya — a profound collective ritual honouring Bhagwan Shri Ram, held at Chataradham Ashram, Nepal.",
    date: "22 March 2025",
    tag: "Ceremony",
    thumbnailGradient: "from-[#6b3a0a] to-[#2c1205]",
    duration: "4 hr 10 min",
    href: "https://www.youtube.com/@siddhamahayog",
  },
  {
    id: "v4",
    type: "video",
    title: "Vedanta Discourse: Who Am I? The Vedic Answer",
    excerpt: "One of the most fundamental questions of human life: Who am I? Jagadguru Mahayogi Siddhababa offers the Vedantic answer with rare clarity, depth, and accessibility.",
    date: "5 March 2025",
    tag: "Vedanta",
    thumbnailGradient: "from-[#1a1008] to-[#0a0804]",
    duration: "1 hr 5 min",
    href: "https://www.youtube.com/@siddhamahayog",
  },

  /* ── NEWS ── */
  {
    id: "n1",
    type: "news",
    title: "Online Mahayog Initiation Workshop — Registrations Now Open",
    excerpt: "The next online 5-day Mahayog Shaktipat Initiation Workshop is now open for registration. Participants from all countries are welcome. Places are limited — apply early.",
    date: "28 April 2025",
    tag: "Workshop",
    thumbnailGradient: "from-[#b8892a] to-[#7a5a18]",
    href: "/register",
  },
  {
    id: "n2",
    type: "news",
    title: "Gurukul Scholarship Programme 2025 — Applications Open",
    excerpt: "The Mahayogi Siddhababa Gurukul is now accepting scholarship applications for the 2025–26 academic year. Full sponsorships are available for children from underprivileged backgrounds.",
    date: "10 April 2025",
    tag: "Gurukul",
    thumbnailGradient: "from-[#2a5a3a] to-[#142a1c]",
    href: "/gurukul",
  },
  {
    id: "n3",
    type: "news",
    title: "International Satsang & Darshan Programme 2025 Announced",
    excerpt: "Jagadguru Mahayogi Siddhababa will be visiting select international locations for satsang and darshan in 2025. Details on dates and venues are now available.",
    date: "1 April 2025",
    tag: "Events",
    thumbnailGradient: "from-[#3a2a5a] to-[#1a1030]",
    href: "/events",
  },
  {
    id: "n4",
    type: "news",
    title: "New Vedanta Darshan Course Cohort — Enrolment Open",
    excerpt: "A new cohort of the 300-hour Vedanta Darshan Course with Jagadguru Mahayogi Siddhababa begins this autumn. This revolving daily programme is offered online via Zoom.",
    date: "20 March 2025",
    tag: "Vedanta",
    thumbnailGradient: "from-[#5a2a0a] to-[#2c1205]",
    href: "/vedanta",
  },
];

const TYPE_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  article: { label: "Article",  color: "text-[#b8892a]",  bg: "bg-[#b8892a]/10"  },
  video:   { label: "Video",    color: "text-[#8b5a2a]",  bg: "bg-[#8b5a2a]/10"  },
  news:    { label: "News",     color: "text-[#4a7a5a]",  bg: "bg-[#4a7a5a]/10"  },
};

const TYPE_ICONS = {
  article: BookOpen,
  video:   Video,
  news:    Newspaper,
};

const FILTERS: { key: ContentType; label: string }[] = [
  { key: "all",     label: "All"      },
  { key: "article", label: "Articles" },
  { key: "video",   label: "Videos"   },
  { key: "news",    label: "News"     },
];

function TypeBadge({ type }: { type: Item["type"] }) {
  const { label, color, bg } = TYPE_LABELS[type];
  return (
    <span className={`text-[10px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full ${bg} ${color}`}>
      {label}
    </span>
  );
}

function ContentCard({ item }: { item: Item }) {
  const isExternal = item.href.startsWith("http");

  const thumbnail = (
    <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-4">
      {item.thumbnail ? (
        <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${item.thumbnailGradient}`} />
      )}
      {item.type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-md">
            <Play size={18} className="text-[#b8892a] ml-0.5" fill="#b8892a" />
          </div>
        </div>
      )}
      {item.duration && (
        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded-full">
          {item.duration}
        </span>
      )}
    </div>
  );

  const body = (
    <div className="flex flex-col flex-1">
      <div className="flex items-center gap-2 mb-2.5">
        <TypeBadge type={item.type} />
        <span className="text-[#9a8070] text-xs">{item.tag}</span>
      </div>
      <h3 className="font-['Cormorant_Garamond'] text-xl text-[#2c1a08] font-medium leading-snug mb-2 flex-1">
        {item.title}
      </h3>
      <p className="text-[#6a5c48] text-sm leading-relaxed mb-4 line-clamp-3">
        {item.excerpt}
      </p>
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#e8dece]">
        <span className="text-[#9a8070] text-xs">{item.date}</span>
        <span className={`text-xs font-medium flex items-center gap-1 ${TYPE_LABELS[item.type].color}`}>
          {item.type === "video" ? "Watch" : item.type === "news" ? "Read" : "Read"}
          <ChevronRight size={13} />
        </span>
      </div>
    </div>
  );

  const inner = (
    <div className="bg-white rounded-2xl border border-[#e8dece] p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 h-full flex flex-col cursor-pointer">
      {thumbnail}
      {body}
    </div>
  );

  if (isExternal) {
    return <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex">{inner}</a>;
  }
  return <Link href={item.href}><span className="flex">{inner}</span></Link>;
}

function FeaturedCard({ item }: { item: Item }) {
  return (
    <div className="bg-white rounded-3xl border border-[#e8dece] shadow-md overflow-hidden mb-12">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-[16/9] md:aspect-auto overflow-hidden min-h-[260px]">
          {item.thumbnail ? (
            <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${item.thumbnailGradient}`} />
          )}
          <div className="absolute top-4 left-4">
            <span className="bg-[#b8892a] text-white text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
              Featured
            </span>
          </div>
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <TypeBadge type={item.type} />
            <span className="text-[#9a8070] text-xs">{item.tag}</span>
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[#2c1a08] font-light leading-snug mb-4">
            {item.title}
          </h2>
          <p className="text-[#6a5c48] text-sm leading-relaxed mb-6">
            {item.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-[#9a8070] text-xs">{item.date}</span>
            <a href={item.href}>
              <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-xs px-5 py-2.5 rounded-full transition-colors cursor-pointer">
                Read Article <ArrowRight size={13} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Teachings() {
  const [activeFilter, setActiveFilter] = useState<ContentType>("all");
  const [search, setSearch] = useState("");

  const featured = ITEMS.find(i => i.featured);
  const nonFeatured = ITEMS.filter(i => !i.featured);

  const filtered = useMemo(() => {
    return nonFeatured.filter(item => {
      const matchesType = activeFilter === "all" || item.type === activeFilter;
      const q = search.toLowerCase();
      const matchesSearch = !q ||
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q);
      return matchesType && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <div className="min-h-screen bg-[#faf9f6] font-['Inter']">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative py-20 px-6 text-center bg-[#1a0c03] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #b8892a 0%, transparent 60%), radial-gradient(circle at 70% 50%, #e8c56a 0%, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#e8c56a]/50" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/50" />
          </div>
          <p className="text-[#e8c56a] text-xs uppercase tracking-[0.3em] font-medium mb-4">Jagadguru Mahayogi Siddhababa</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight mb-4">
            Teachings &amp; <span className="text-[#e8c56a]">Updates</span>
          </h1>
          <p className="text-white/70 text-base leading-relaxed max-w-xl mx-auto">
            Articles, discourses, ceremony recordings, and Academy news — a living archive of Vedic wisdom for seekers everywhere.
          </p>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <section className="sticky top-16 z-40 bg-[#faf9f6]/97 backdrop-blur-sm border-b border-[#e8dece]">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-center gap-3">
          {/* Type filters */}
          <div className="flex items-center gap-1 flex-wrap">
            {FILTERS.map(({ key, label }) => {
              const Icon = key === "all" ? null : TYPE_ICONS[key];
              return (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
                    activeFilter === key
                      ? "bg-[#b8892a] text-white shadow-sm"
                      : "text-[#6a5c48] hover:bg-[#f0e8d8] hover:text-[#b8892a]"
                  }`}
                >
                  {Icon && <Icon size={13} />}
                  {label}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative sm:ml-auto w-full sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9a8070]" />
            <input
              type="text"
              placeholder="Search teachings…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-[#e8dece] rounded-full text-[#4a3728] placeholder-[#9a8070] focus:outline-none focus:border-[#b8892a] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Featured — only show when not filtering */}
          {activeFilter === "all" && !search && featured && (
            <FeaturedCard item={featured} />
          )}

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-[#9a8070] text-sm">
              {filtered.length} {filtered.length === 1 ? "result" : "results"}
              {search && <span> for "<span className="text-[#b8892a]">{search}</span>"</span>}
            </p>
            {search && (
              <button onClick={() => setSearch("")} className="text-xs text-[#b8892a] hover:underline">
                Clear search
              </button>
            )}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(item => (
                <ContentCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-['Cormorant_Garamond'] text-2xl text-[#9a8070] font-light mb-2">Nothing found</p>
              <p className="text-sm text-[#9a8070]">Try a different search term or filter.</p>
              <button
                onClick={() => { setSearch(""); setActiveFilter("all"); }}
                className="mt-5 text-sm text-[#b8892a] border border-[#b8892a]/30 px-5 py-2 rounded-full hover:bg-[#b8892a]/5 transition-colors"
              >
                Reset filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ── YOUTUBE CTA ── */}
      <section className="py-16 px-6 bg-[#f4ede0]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-3">Watch & Subscribe</p>
          <h2 className="font-['Cormorant_Garamond'] text-3xl text-[#2c1a08] font-light mb-4">
            Explore the Full Video Archive
          </h2>
          <p className="text-[#6a5c48] text-sm leading-relaxed max-w-lg mx-auto mb-8">
            Hundreds of satsangs, guided meditations, ceremony recordings, and discourses by Jagadguru Mahayogi Siddhababa are available on the Academy's YouTube channel.
          </p>
          <a href="https://www.youtube.com/@siddhamahayog" target="_blank" rel="noopener noreferrer">
            <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-8 py-3.5 rounded-full tracking-wide transition-colors cursor-pointer shadow-md">
              <Play size={15} fill="white" /> Visit YouTube Channel
            </span>
          </a>
        </div>
      </section>

    </div>
  );
}
