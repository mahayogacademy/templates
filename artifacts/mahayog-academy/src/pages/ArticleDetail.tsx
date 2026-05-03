import { Link, useParams } from "wouter";
import Nav from "@/components/Nav";
import { ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { getArticleById, ARTICLES, type ArticleBlock } from "@/data/articles";

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-[#2c1a08] font-light mt-12 mb-4 leading-snug">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-['Cormorant_Garamond'] text-xl text-[#2c1a08] font-medium mt-8 mb-3">
          {block.text}
        </h3>
      );
    case "quote":
      return (
        <blockquote className="my-8 pl-6 border-l-2 border-[#b8892a]">
          <p className="font-['Cormorant_Garamond'] text-xl text-[#4a3728] italic leading-relaxed font-light">
            {block.text}
          </p>
        </blockquote>
      );
    case "list":
      return (
        <ul className="my-4 space-y-2 pl-2">
          {block.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#4a3728] text-base leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b8892a] flex-shrink-0 mt-2.5" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure className="my-10">
          <img
            src={block.src}
            alt={block.alt}
            className="w-full rounded-2xl object-cover shadow-md border border-[#e8dece]"
          />
          {block.caption && (
            <figcaption className="mt-3 text-center text-xs text-[#9a8070] italic leading-relaxed">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    default:
      return (
        <p className="text-[#4a3728] text-base leading-[1.85] mb-0">
          {block.text}
        </p>
      );
  }
}

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = getArticleById(id ?? "");

  const currentIndex = ARTICLES.findIndex(a => a.id === id);
  const prev = currentIndex > 0 ? ARTICLES[currentIndex - 1] : null;
  const next = currentIndex < ARTICLES.length - 1 ? ARTICLES[currentIndex + 1] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-[#faf9f6] font-['Inter']">
        <Nav />
        <div className="max-w-2xl mx-auto px-6 py-32 text-center">
          <p className="font-['Cormorant_Garamond'] text-3xl text-[#9a8070] font-light mb-4">Article not found</p>
          <Link href="/teachings">
            <span className="text-[#b8892a] text-sm hover:underline cursor-pointer">← Back to Teachings</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] font-['Inter']">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        {article.thumbnail ? (
          <div className="relative h-[45vh] min-h-[320px]">
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a0803]/70 via-[#1a0803]/50 to-[#faf9f6]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <span className="inline-flex items-center gap-1.5 bg-[#b8892a]/90 text-white text-sm uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-4">
                <Tag size={10} /> {article.tag}
              </span>
              <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-white font-light max-w-3xl leading-tight mb-2">
                {article.title}
              </h1>
              {article.subtitle && (
                <p className="text-white/70 text-sm tracking-wide">{article.subtitle}</p>
              )}
            </div>
          </div>
        ) : (
          <div className={`relative h-[40vh] min-h-[280px] bg-gradient-to-br ${article.thumbnailGradient ?? "from-[#2c1a08] to-[#1a0c03]"}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#faf9f6]/20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <span className="inline-flex items-center gap-1.5 bg-[#b8892a]/90 text-white text-sm uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-4">
                <Tag size={10} /> {article.tag}
              </span>
              <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-white font-light max-w-3xl leading-tight mb-2">
                {article.title}
              </h1>
              {article.subtitle && (
                <p className="text-white/60 text-sm tracking-wide">{article.subtitle}</p>
              )}
            </div>
          </div>
        )}
      </section>

      {/* ── BREADCRUMB ── */}
      <div className="max-w-3xl mx-auto px-6 pt-8">
        <Link href="/teachings">
          <span className="inline-flex items-center gap-1.5 text-[#b8892a] text-xs hover:underline cursor-pointer">
            <ArrowLeft size={13} /> Back to Teachings
          </span>
        </Link>
      </div>

      {/* ── ARTICLE BODY ── */}
      <article className="max-w-3xl mx-auto px-6 py-10">
        <div className="space-y-5">
          {article.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </article>

      {/* ── DIVIDER ── */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-4 py-8 border-t border-[#e8dece]">
          <div className="h-px flex-1 bg-[#e8dece]" />
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#b8892a" strokeWidth="1.5" fill="none"/>
          </svg>
          <div className="h-px flex-1 bg-[#e8dece]" />
        </div>
      </div>

      {/* ── PREV / NEXT ── */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-2 gap-4">
          {prev ? (
            <Link href={`/teachings/${prev.id}`}>
              <span className="flex flex-col gap-1 bg-white border border-[#e8dece] rounded-2xl p-5 hover:shadow-md transition-shadow cursor-pointer">
                <span className="text-[#9a8070] text-xs flex items-center gap-1"><ArrowLeft size={12} /> Previous</span>
                <span className="font-['Cormorant_Garamond'] text-[#2c1a08] text-lg font-medium leading-snug">{prev.title}</span>
              </span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/teachings/${next.id}`}>
              <span className="flex flex-col gap-1 bg-white border border-[#e8dece] rounded-2xl p-5 hover:shadow-md transition-shadow cursor-pointer text-right">
                <span className="text-[#9a8070] text-xs flex items-center gap-1 justify-end">Next <ArrowRight size={12} /></span>
                <span className="font-['Cormorant_Garamond'] text-[#2c1a08] text-lg font-medium leading-snug">{next.title}</span>
              </span>
            </Link>
          ) : <div />}
        </div>

        <div className="mt-8 text-center">
          <Link href="/teachings">
            <span className="inline-flex items-center gap-2 border border-[#b8892a]/40 text-[#b8892a] hover:bg-[#b8892a]/5 text-sm px-6 py-2.5 rounded-full transition-colors cursor-pointer">
              <ArrowLeft size={13} /> All Teachings & Updates
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
