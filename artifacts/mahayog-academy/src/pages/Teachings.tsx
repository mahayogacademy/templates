import { useState, useMemo } from "react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Search, Play, ArrowRight, BookOpen, Newspaper, Video, ChevronRight, Mic2 } from "lucide-react";
import { ARTICLES } from "@/data/articles";

const b = import.meta.env.BASE_URL;

type ContentType = "all" | "article" | "video" | "news" | "interview";

interface Item {
  id: string;
  type: "article" | "video" | "news" | "interview";
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  thumbnail?: string;
  thumbnailGradient?: string;
  duration?: string;
  href: string;
  featured?: boolean;
}

/* ── Build article items from real data ── */
const ARTICLE_ITEMS: Item[] = ARTICLES.map((a, i) => ({
  id: a.id,
  type: "article",
  title: a.title,
  excerpt: a.excerpt,
  date: a.date,
  tags: [a.tag],
  thumbnail: a.thumbnail,
  thumbnailGradient: a.thumbnailGradient,
  href: `/teachings/${a.id}`,
  featured: i === 0,
}));

/* ── Videos ── */
const VIDEO_ITEMS: Item[] = [
  {
    id: "v0",
    type: "video",
    title: "What Is Himalayan Siddha Mahayog?",
    excerpt: "Jagadguru Mahayogi Siddhababa gives a direct and clear description of the Himalayan Siddha Mahayog meditation practice — what it is, how it works, and why it is unique among yogic paths.",
    date: "Himalayan Siddha Mahayog",
    tags: ["Meditation & Yoga"],
    thumbnail: `${b}images/video-mahayog-sadhana.jpg`,
    duration: "34 min",
    href: "https://www.youtube.com/watch?v=U2kbxV0zy-E&t=49s",
  },
  {
    id: "v0b",
    type: "video",
    title: "Where Is Happiness?",
    excerpt: "In this satsang, Jagadguru Mahayogi Siddhababa addresses one of the most universal human questions: where does true happiness lie, and why do we keep searching in the wrong places?",
    date: "Himalayan Siddha Mahayog",
    tags: ["Meditation & Yoga"],
    thumbnail: `${b}images/video-mahayog-2.jpg`,
    duration: "1h 19min",
    href: "https://youtu.be/VUwmSwis2aE?si=j1_LgHC2tUg1veKu",
  },
  {
    id: "v-dharma-1",
    type: "video",
    title: "Can Women Worship Śālagrāma? Dispelling a Common Misconception",
    excerpt: "In this discourse, Jagadguru Mahayogi Siddhababa directly addresses the widespread misconception that women cannot worship the sacred Śālagrāma stone — and sets the record straight from authentic Vedic teaching.",
    date: "Himalayan Siddha Mahayog",
    tags: ["Dharma & Wisdom"],
    thumbnail: `${b}images/video-dharma-1.png`,
    duration: "7 min",
    href: "https://youtu.be/sMu69n7cZ4A?si=L6gW8V4hjufnusV4",
  },
  {
    id: "v-dharma-2",
    type: "video",
    title: "There Is No Untouchability in Sanātana Dharma",
    excerpt: "Jagadguru Mahayogi Siddhababa explains clearly and directly that untouchability has no basis whatsoever in Sanātana Dharma — and that such practices are a social distortion, not a teaching of the Vedas.",
    date: "Himalayan Siddha Mahayog",
    tags: ["Dharma & Wisdom"],
    thumbnail: `${b}images/video-dharma-2.png`,
    duration: "6 min",
    href: "https://youtu.be/-z1Gex5-x5A?si=xYXVKdLabV2FhvY4",
  },
];

/* ── News ── */
const NEWS_ITEMS: Item[] = [
  {
    id: "n-tapovan",
    type: "news",
    title: "Siddhababa Defends Tapovan — No Cement Jungle, No Encroachment",
    excerpt: "Jagadguru Mahayogi Siddhababa has issued two clear warnings ahead of Kumbhmela: Tapovan — the timeless sanctuary of saints and rishis in Nashik — will not become a concrete commercial zone, and any encroachment on its sacred grounds will face strong resistance. He called on the Maharashtra government to ensure the spiritual character of the event is fully preserved.",
    date: "6 December 2025",
    tags: ["Events & Press"],
    thumbnail: `${b}images/news-tapovan-encroachment.png`,
    href: "/news/n-tapovan",
  },
  {
    id: "n-goda-parikrama",
    type: "news",
    title: "Godavari Parikrama Begins — 500+ Saints from Across India and the World",
    excerpt: "The sacred circumambulation of the Godavari River has commenced at Trimbakeshwar, with over 500 saints, mahantas, and mahavishvas from India and abroad taking part. Concluding on 21 December with a grand celebration, the pilgrimage is seen as a landmark moment for national spiritual unity.",
    date: "6 December 2025",
    tags: ["Events & Press"],
    thumbnail: `${b}images/news-goda-parikrama.png`,
    href: "/news/n-goda-parikrama",
  },
];

/* ── Interviews ── */
const INTERVIEW_PLAYLIST = "https://youtube.com/playlist?list=PLVoaXKRxO25oYufjJ_Cbr7b1axcIV3TJR";

const INTERVIEW_ITEMS: Item[] = [
  {
    id: "i-prime-tv",
    type: "interview",
    title: "The Future of Nepal, Sanātana Dharma & Global Spirituality",
    excerpt: "A wide-ranging Prime TV conversation on Nepal's spiritual heritage, the global future of Sanātana Dharma, and the role of yoga and meditation in transforming the world.",
    date: "Prime TV",
    tags: ["Dharma & Wisdom", "Sacred Places"],
    thumbnail: "https://i.ytimg.com/vi/rtuBBVxlXF4/hqdefault.jpg",
    duration: "47 min",
    href: "https://www.youtube.com/watch?v=rtuBBVxlXF4",
  },
  {
    id: "i-kumbh-press",
    type: "interview",
    title: "Address to the Kumbh Mela Press Media — Prayagraj 2025",
    excerpt: "Jagadguru Mahayogi Siddhababa speaks to the assembled press media at Prayagraj Kumbhmela 2025, sharing his vision for Sanātana Dharma, the role of saints in society, and the significance of the world's largest human gathering.",
    date: "Prayagraj Kumbhmela 2025",
    tags: ["Events & Press"],
    thumbnail: "https://i.ytimg.com/vi/xeJyAmLJxRk/hqdefault.jpg",
    duration: "51 min",
    href: "https://www.youtube.com/watch?v=xeJyAmLJxRk",
  },
  {
    id: "i-v4u-radio",
    type: "interview",
    title: "From the Himalayas to the World",
    excerpt: "A long-form V4U Radio conversation tracing the teachings of Jagadguru Mahayogi Siddhababa — from his Himalayan origins to his worldwide mission of sharing Siddha Mahayog with sincere seekers.",
    date: "V4U Radio",
    tags: ["Meditation & Yoga", "Dharma & Wisdom"],
    thumbnail: "https://i.ytimg.com/vi/_06JDLOz3ow/hqdefault.jpg",
    duration: "1h 17min",
    href: "https://www.youtube.com/watch?v=_06JDLOz3ow",
  },
  {
    id: "i-himalaya-tv",
    type: "interview",
    title: "A Great Yogi's Journey",
    excerpt: "Journalist Narayan Poudel speaks with Jagadguru Mahayogi Siddhababa on Himalaya TV about his extraordinary life — his early calling, years of Himalayan tapasyā, and the mission that unfolded from it.",
    date: "Himalaya TV",
    tags: ["The Guru"],
    thumbnail: "https://i.ytimg.com/vi/DxnTrk8PuB8/hqdefault.jpg",
    duration: "44 min",
    href: "https://www.youtube.com/watch?v=DxnTrk8PuB8",
  },
  {
    id: "i-deshsanchar",
    type: "interview",
    title: "How Ancient Vedic Rituals Heal People & Planet",
    excerpt: "An in-depth Deshsanchar interview on the science behind Vedic yajña and ritual — their healing power for individuals, for society, and for the natural world, as understood in the Sanātana tradition.",
    date: "Deshsanchar",
    tags: ["Dharma & Wisdom"],
    thumbnail: "https://i.ytimg.com/vi/2vGZov4l6Vk/hqdefault.jpg",
    duration: "49 min",
    href: "https://www.youtube.com/watch?v=2vGZov4l6Vk",
  },
  {
    id: "i-bhakti-darshan-samadhi",
    type: "interview",
    title: "The Miraculous Life & Samādhis of a Himalayan Yogi",
    excerpt: "BhaktiDarshan TV speaks with Siddhababa about the extraordinary events of his life — including his bhū-samādhis (underground meditations), witnessed by tens of thousands across Nepal and India.",
    date: "BhaktiDarshan TV",
    tags: ["The Guru"],
    thumbnail: "https://i.ytimg.com/vi/RXuRAGTCMc4/hqdefault.jpg",
    duration: "25 min",
    href: "https://www.youtube.com/watch?v=RXuRAGTCMc4",
  },
  {
    id: "i-bhakti-darshan-religion",
    type: "interview",
    title: "Religion vs. Spirituality",
    excerpt: "In this BhaktiDarshan TV conversation, Siddhababa draws a clear and penetrating distinction between organised religion and living spirituality — and explains what it truly means to be a seeker on the path.",
    date: "BhaktiDarshan TV",
    tags: ["Dharma & Wisdom"],
    thumbnail: "https://i.ytimg.com/vi/lH2OPyOwNNQ/hqdefault.jpg",
    duration: "34 min",
    href: "https://www.youtube.com/watch?v=lH2OPyOwNNQ",
  },
  {
    id: "i-malaku-tv",
    type: "interview",
    title: "Reviving Nepal's Ancient Wisdom: Yoga, Āyurveda & Nāḍī Science",
    excerpt: "A rich Malaku TV conversation on Nepal's ancient knowledge systems — the science of yoga, the healing arts of Āyurveda, and the profound diagnostic tradition of Nāḍī Science, and how they can serve the modern world.",
    date: "Malaku TV",
    tags: ["Sacred Places"],
    thumbnail: "https://i.ytimg.com/vi/-L3KEFytQ9I/hqdefault.jpg",
    duration: "49 min",
    href: "https://www.youtube.com/watch?v=-L3KEFytQ9I",
  },
];

const ITEMS: Item[] = [...ARTICLE_ITEMS, ...VIDEO_ITEMS, ...NEWS_ITEMS, ...INTERVIEW_ITEMS];

/* ── UI helpers ── */

const TYPE_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  article:   { label: "Article",   color: "text-[#b8892a]", bg: "bg-[#b8892a]/10" },
  video:     { label: "Video",     color: "text-[#8b5a2a]", bg: "bg-[#8b5a2a]/10" },
  news:      { label: "News",      color: "text-[#4a7a5a]", bg: "bg-[#4a7a5a]/10" },
  interview: { label: "Interview", color: "text-[#5a4a8a]", bg: "bg-[#5a4a8a]/10" },
};

const TYPE_ICONS = {
  article:   BookOpen,
  video:     Video,
  news:      Newspaper,
  interview: Mic2,
};

const FILTERS: { key: ContentType; label: string }[] = [
  { key: "all",       label: "All"        },
  { key: "article",   label: "Articles"   },
  { key: "video",     label: "Videos"     },
  { key: "interview", label: "Interviews" },
  { key: "news",      label: "News"       },
];

function TypeBadge({ type }: { type: Item["type"] }) {
  const { label, color, bg } = TYPE_LABELS[type];
  return (
    <span className={`text-sm font-semibold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full ${bg} ${color}`}>
      {label}
    </span>
  );
}

function CardThumbnail({ item }: { item: Item }) {
  return (
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
        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-0.5 rounded-full">
          {item.duration}
        </span>
      )}
    </div>
  );
}

function ContentCard({ item }: { item: Item }) {
  const isExternal = item.href.startsWith("http");

  const inner = (
    <div className="bg-white rounded-2xl border border-[#e8dece] p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col h-[420px] overflow-hidden cursor-pointer">
      <CardThumbnail item={item} />
      <div className="flex flex-col flex-1 min-h-0">
        <div className="flex items-center gap-2 mb-2.5 flex-shrink-0">
          <TypeBadge type={item.type} />
          <span className="text-[#9a8070] text-xs">{item.tags.join(" · ")}</span>
        </div>
        <h3 className="font-['Cormorant_Garamond'] text-xl text-[#2c1a08] font-medium leading-snug mb-2 line-clamp-2 flex-shrink-0">
          {item.title}
        </h3>
        <p className="text-[#6a5c48] text-sm leading-relaxed line-clamp-3 flex-1">
          {item.excerpt}
        </p>
        <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#e8dece] flex-shrink-0">
          <span className="text-[#9a8070] text-xs">{item.date}</span>
          <span className={`text-xs font-medium flex items-center gap-1 ${TYPE_LABELS[item.type].color}`}>
            {item.type === "video" || item.type === "interview" ? "Watch" : "Read"}
            <ChevronRight size={13} />
          </span>
        </div>
      </div>
    </div>
  );

  if (isExternal) {
    return <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex">{inner}</a>;
  }
  return <Link href={item.href}><span className="flex">{inner}</span></Link>;
}

function FeaturedCard({ item }: { item: Item }) {
  const isExternal = item.href.startsWith("http");
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    isExternal
      ? <a href={item.href} target="_blank" rel="noopener noreferrer">{children}</a>
      : <Link href={item.href}><span className="cursor-pointer">{children}</span></Link>;

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
            <span className="bg-[#b8892a] text-white text-sm font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
              Featured
            </span>
          </div>
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <TypeBadge type={item.type} />
            <span className="text-[#9a8070] text-xs">{item.tags.join(" · ")}</span>
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[#2c1a08] font-light leading-snug mb-4">
            {item.title}
          </h2>
          <p className="text-[#6a5c48] text-sm leading-relaxed mb-6">
            {item.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-[#9a8070] text-xs">{item.date}</span>
            <Wrapper>
              <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-xs px-5 py-2.5 rounded-full transition-colors cursor-pointer">
                Read Article <ArrowRight size={13} />
              </span>
            </Wrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Page ── */
/* ── Derive sorted unique tags across all items ── */
const ALL_TAGS = Array.from(new Set(ITEMS.flatMap(i => i.tags))).sort();

export default function Teachings() {
  const [activeFilter, setActiveFilter] = useState<ContentType>("all");
  const [activeTag, setActiveTag] = useState<string>("");
  const [search, setSearch] = useState("");

  const featured = ITEMS.find(i => i.featured);
  const nonFeatured = ITEMS.filter(i => !i.featured);

  const filtered = useMemo(() => {
    return nonFeatured.filter(item => {
      const matchesType = activeFilter === "all" || item.type === activeFilter;
      const matchesTag  = !activeTag || item.tags.includes(activeTag);
      const q = search.toLowerCase();
      const matchesSearch = !q ||
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.tags.join(" ").toLowerCase().includes(q);
      return matchesType && matchesTag && matchesSearch;
    });
  }, [activeFilter, activeTag, search]);

  return (
    <div className="min-h-screen bg-[#faf9f6] font-['Inter']">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative py-20 px-6 text-center bg-[#1a0c03] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
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
        {/* Row 1: type + search */}
        <div className="max-w-6xl mx-auto px-6 pt-3 pb-2 flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-1 flex-wrap">
            {FILTERS.map(({ key, label }) => {
              const Icon = key === "all" ? null : TYPE_ICONS[key];
              return (
                <button
                  key={key}
                  onClick={() => { setActiveFilter(key); setActiveTag(""); }}
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
        {/* Row 2: tag filters */}
        <div className="max-w-6xl mx-auto px-6 pb-2.5 overflow-x-auto">
          <div className="flex items-center gap-1.5 min-w-max">
            <span className="text-sm uppercase tracking-[0.2em] text-[#9a8070] mr-1 shrink-0">Topic</span>
            <button
              onClick={() => setActiveTag("")}
              className={`px-3 py-1 rounded-full text-xs transition-all duration-150 ${
                !activeTag
                  ? "bg-[#e8dece] text-[#5a4a38] font-semibold"
                  : "text-[#8a7a6a] hover:bg-[#f0e8d8] hover:text-[#6a5040]"
              }`}
            >
              All Topics
            </button>
            {ALL_TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? "" : tag)}
                className={`px-3 py-1 rounded-full text-xs transition-all duration-150 ${
                  activeTag === tag
                    ? "bg-[#b8892a]/15 text-[#7a5a18] font-semibold border border-[#b8892a]/40"
                    : "text-[#8a7a6a] hover:bg-[#f0e8d8] hover:text-[#6a5040]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto">

          {activeFilter === "all" && !search && featured && (!activeTag || featured.tags.includes(activeTag)) && (
            <FeaturedCard item={featured} />
          )}

          <div className="flex items-center justify-between mb-6">
            <p className="text-[#9a8070] text-sm">
              {filtered.length} {filtered.length === 1 ? "result" : "results"}
              {activeTag && <span> in <span className="text-[#b8892a]">{activeTag}</span></span>}
              {search && <span> for "<span className="text-[#b8892a]">{search}</span>"</span>}
            </p>
            {(search || activeTag) && (
              <button onClick={() => { setSearch(""); setActiveTag(""); }} className="text-xs text-[#b8892a] hover:underline">
                Clear filters
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(item => (
                  <ContentCard key={item.id} item={item} />
                ))}
              </div>

              {(activeFilter === "interview" || (activeFilter === "all" && !search && !activeTag)) && (
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#5a4a8a]/6 border border-[#5a4a8a]/20 rounded-2xl px-6 py-5">
                  <div className="flex items-start gap-3">
                    <Mic2 size={18} className="text-[#5a4a8a] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#2c1a08] text-sm font-medium leading-snug">More interviews available on the playlist</p>
                      <p className="text-[#8a7a6a] text-xs mt-0.5">Additional interviews will appear here as they become publicly available on YouTube.</p>
                    </div>
                  </div>
                  <a
                    href={INTERVIEW_PLAYLIST}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 border border-[#5a4a8a]/40 text-[#5a4a8a] hover:bg-[#5a4a8a]/8 text-xs px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
                  >
                    <Play size={12} fill="currentColor" /> View Full Playlist
                  </a>
                </div>
              )}
            </>
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
      <section id="yt-cta" className="relative py-28 px-6 overflow-hidden">
        {/* Photo background */}
        <img
          src={`${b}images/yt-cta-bg.png`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0d0603]/80" aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-[#b8892a] text-xs uppercase tracking-[0.3em] font-medium mb-4">Watch & Subscribe</p>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-white font-light mb-5 leading-tight">
            Explore More Videos
          </h2>
          <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Hundreds of satsangs (wisdom talks), ceremony recordings, and discourses by Jagadguru Mahayogi Siddhababa are available on the Academy's YouTube channel.
          </p>

          {/* Channel preview card */}
          <a
            href="https://www.youtube.com/@siddhamahayog"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-5 bg-white/8 hover:bg-white/12 border border-white/15 hover:border-[#b8892a]/50 rounded-2xl px-6 py-5 transition-all duration-200 cursor-pointer mb-8"
          >
            <img
              src="https://yt3.googleusercontent.com/rVWRzjMusF6yCxNFnjmIvm4S1s2TmLLwHkFhM44rQksxGt26ipPdoEVAvT8R78mXJnc5ugEWPgg=s900-c-k-c0x00ffffff-no-rj"
              alt="Himalayan Siddha Mahayog"
              className="w-14 h-14 rounded-full object-cover ring-2 ring-[#b8892a]/40 shrink-0"
            />
            <div className="text-left">
              <p className="text-white font-medium text-sm leading-snug">Himalayan Siddha Mahayog</p>
              <p className="text-white/50 text-xs mt-0.5">@siddhamahayog · YouTube</p>
            </div>
            <div className="ml-auto shrink-0">
              {/* YouTube icon */}
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#FF0000] opacity-80 group-hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
          </a>

          <div className="block">
            <a href="https://www.youtube.com/@siddhamahayog" target="_blank" rel="noopener noreferrer">
              <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-8 py-3.5 rounded-full tracking-wide transition-colors cursor-pointer shadow-md">
                <Play size={15} fill="white" /> Visit YouTube Channel
              </span>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
