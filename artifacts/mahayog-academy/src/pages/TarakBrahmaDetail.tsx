import { Link } from "wouter";
import Nav from "@/components/Nav";
import { ArrowLeft, Download, BookOpen } from "lucide-react";

const b = import.meta.env.BASE_URL;

const GALLERY = [
  { src: "tbm-aerial-mandap-01.png",   caption: "The grand pyramid-shaped Yagya Mandap at Barahkshetra, Nepal — an architectural marvel built for the occasion" },
  { src: "tbm-aerial-mandap-02.png",   caption: "Aerial view of the Mandap complex with the golden Hanuman statue and thousands of participants filling the grounds" },
  { src: "tbm-aerial-mandap-03.png",   caption: "Bird's-eye view of the full ceremony grounds on the banks of the Koshi river" },
  { src: "tbm-havan-kund.png",         caption: "Jagadguru Mahayogi Siddhababa seated at the Havan Kund with Vedic pandits during the Tarak Brahma recitation" },
  { src: "tbm-night-fire.jpg",         caption: "Hundreds of sacred fires lit simultaneously across the grounds — a sight not seen in Nepal for over seven centuries" },
  { src: "tbm-night-crowd.jpg",        caption: "Thousands of devotees gathered through the night as the Mahayagya reached its most powerful phase" },
  { src: "tbm-saints-01.jpg",          caption: "Jagadguru Mahayogi Siddhababa with senior saints and monks from across the Vaishnava and Shaiva traditions" },
  { src: "tbm-ceremony-stage.jpg",     caption: "The inauguration ceremony stage with Vedic scholars, saints, and officiants assembled" },
  { src: "tbm-ceremony-stage-02.jpg",  caption: "Saints from multiple monastic lineages presided over the historic event together" },
  { src: "tbm-crowd-01.jpg",           caption: "Thousands of seekers in saffron and white gathered inside the Mandap complex" },
  { src: "tbm-crowd-02.jpg",           caption: "Senior disciples and Vedic pandits with Jagadguru during the ceremony" },
  { src: "tbm-bhumi-puja-01.jpg",      caption: "Bhumi Puja: Jagadguru Mahayogi Siddhababa performs the sacred ground-breaking ritual with government representatives" },
  { src: "tbm-bhumi-puja-02.jpg",      caption: "Government officials receive Gurudev's blessings during the foundation ceremony" },
  { src: "tbm-bhumi-puja-03.jpg",      caption: "The ritual placement of sacred bricks during the Bhumi Puja" },
  { src: "tbm-bhumi-puja-04.jpg",      caption: "A wide view of the Bhumi Puja gathering — officials, scholars, and disciples present at the historic occasion" },
];

export default function TarakBrahmaDetail() {
  return (
    <div className="min-h-screen bg-[#faf9f6] font-['Inter']">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img
          src={`${b}images/tbm-aerial-mandap-01.png`}
          alt="Shree Ram Tarak Brahma Mahayagya"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 max-w-5xl mx-auto w-full">
          <span className="text-xs uppercase tracking-[0.3em] text-[#e8c56a] font-medium block mb-3">
            Nepal · 2019 · Historic
          </span>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight mb-3">
            Shree Ram Tarak Brahma<br /><em className="font-extralight italic">Mahayagya</em>
          </h1>
          <p className="text-white/80 text-base md:text-lg font-light max-w-xl leading-relaxed">
            The second time in Nepal's recorded history — after 705 years — that this supreme Vedic fire ceremony was performed.
          </p>
        </div>
      </section>

      {/* ── HISTORIC SIGNIFICANCE BANNER ── */}
      <section className="bg-[#1e1208] py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          {[
            { num: "705", label: "Years Since Last Performed in Nepal" },
            { num: "9", label: "Days of Continuous Fire Ceremony" },
            { num: "100K+", label: "Devotees Participated" },
            { num: "1", label: "Living Siddha Who Made It Possible" },
          ].map(({ num, label }) => (
            <div key={label} className="flex-1 min-w-[120px]">
              <div className="font-['Cormorant_Garamond'] text-4xl font-light text-[#e8c56a] mb-1">{num}</div>
              <div className="text-[#c8b090] text-xs uppercase tracking-[0.2em] leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BACK LINK ── */}
      <div className="bg-[#faf9f6] border-b border-[#e8dece] px-6 py-3">
        <div className="max-w-5xl mx-auto">
          <Link href="/events"
            className="inline-flex items-center gap-2 text-sm text-[#8a7860] hover:text-[#b8892a] transition-colors">
            <ArrowLeft size={14} />
            Back to Events
          </Link>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="bg-[#faf9f6] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-[#e8dece]" />
            <p className="text-xs uppercase tracking-[0.3em] text-[#b8892a] font-medium whitespace-nowrap">The Mahayagya</p>
            <div className="h-px flex-1 bg-[#e8dece]" />
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#2c1a08] leading-snug mb-8">
            A ceremony of supreme liberation, revived after seven centuries
          </h2>
          <div className="space-y-5 text-[#4a3f32] text-base leading-[1.9]">
            <p>
              The <em>Tarak Brahma</em> — the liberating aspect of the Absolute — has been identified in the Vaishnava tradition, and specifically in the Shri Sampraday of Jagadguru Ramanandacharya, with the name of Bhagwan Shri Ram. The <em>Ram Tarak Brahma Mahayagya</em> is therefore not merely a fire ceremony; it is the supreme invocation of the liberating power of the Divine Name, offered through an unbroken stream of Vedic havan, collective mantra recitation, and sacred oblation.
            </p>
            <p>
              According to historical records and the scholarly tradition preserved in the text <em>Shree Ram Tarak Brahma Mahayagya</em>, this ceremony had not been performed in Nepal for 705 years before 2019. It was Jagadguru Mahayogi Siddhababa — a Siddha Yogi of the living Himalayan tradition and an initiated successor of Jagadguru Ramanandacharya — who revived this ancient rite for the benefit of all of Nepal and the world.
            </p>
            <p>
              The event was held at Barahkshetra, Sunsari — one of Nepal's most sacred dharmic sites, on the banks of the Koshi river. A grand pyramid-shaped Yagya Mandap was erected for the occasion, visible from miles away, a structure that itself became a landmark of the historic gathering.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT IS TARAK BRAHMA ── */}
      <section className="bg-[#f4ede0] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#b8892a] font-medium mb-4">The Sacred Science</p>
              <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#2c1a08] leading-snug mb-6">
                What is <em>Tarak Brahma</em>?
              </h2>
              <div className="space-y-4 text-[#4a3f32] text-base leading-[1.9]">
                <p>
                  In the Vedic and Vaishnava traditions, <em>Tarak</em> means that which carries one across — across the ocean of birth and death, across the cycle of karma, across the veil of illusion. <em>Tarak Brahma</em> is therefore the liberating absolute — the aspect of the Divine that, when invoked with sincerity and precision, dissolves the root of bondage.
                </p>
                <p>
                  The Shri Sampraday, founded by Jagadguru Ramanandacharya — the lineal tradition to which Jagadguru Mahayogi Siddhababa belongs — holds the six-syllable <em>Tarak Brahma</em> mantra of Shri Ram as the supreme vehicle of liberation. When offered collectively in a Mahayagya of this scale, its power is said to radiate beyond the individual practitioners to purify the environment, bless the land, and uplift all beings.
                </p>
                <p>
                  The Mahayagya involves continuous Vedic recitation by hundreds of trained pandits, unbroken sacred fire (havan), collective chanting, and an elaborate ceremonial structure governed by precise Vedic ordinance.
                </p>
              </div>

            </div>

            {/* Right column: photo + PDF download */}
            <div className="flex flex-col gap-5">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={`${b}images/tbm-havan-kund.png`}
                  alt="Jagadguru at the Havan Kund"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* PDF Download card */}
              <div className="rounded-xl border border-[#d8cebb] bg-white/70 overflow-hidden shadow-sm">
                {/* PDF cover preview */}
                <a
                  href={`${b}downloads/shree-ram-tarak-brahma-mahayagya-book.pdf`}
                  download="Shree-Ram-Tarak-Brahma-Mahayagya-Book.pdf"
                  className="block group"
                >
                  <div className="bg-[#f0ece4] border-b border-[#d8cebb] flex items-center justify-center py-3 px-4 overflow-hidden">
                    <img
                      src={`${b}images/tbm-pdf-cover.png`}
                      alt="Book cover: Shree Ram Tarak Brahma Mahayagya"
                      className="h-40 object-contain shadow-md rounded group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>
                </a>
                {/* Info + button */}
                <div className="p-4 flex items-start gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#f4ede0] border border-[#d8cebb] flex items-center justify-center mt-0.5">
                    <BookOpen size={14} className="text-[#b8892a]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#2c1a08] text-sm font-medium leading-snug mb-1">
                      Shree Ram Tarak Brahma Mahayagya
                    </p>
                    <p className="text-[#8a7860] text-xs leading-relaxed mb-3">
                      The original text documenting the ceremony, its history and sacred significance — published by Mahayogi Siddhababa Spiritual Academy. <span className="text-[#b8892a] font-medium">Language: Nepali</span>
                    </p>
                    <a
                      href={`${b}downloads/shree-ram-tarak-brahma-mahayagya-book.pdf`}
                      download="Shree-Ram-Tarak-Brahma-Mahayagya-Book.pdf"
                      className="inline-flex items-center gap-2 text-xs font-medium text-white bg-[#b8892a] hover:bg-[#9a6e1a] px-4 py-2 rounded-full transition-colors"
                    >
                      <Download size={13} />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE MANDAP — AERIAL VIEWS ── */}
      <section className="bg-[#faf9f6] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b8892a] font-medium mb-3">Barahkshetra, Nepal · 2019</p>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#2c1a08] leading-snug">
              The Grand Yagya Mandap
            </h2>
            <p className="text-[#6a5c48] text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              A pyramid-shaped sacred structure of nine tiers was constructed at Barahkshetra to house the ceremony — a form that echoes ancient Vedic yagya architecture, rarely seen at this scale in the modern era.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
              <img src={`${b}images/tbm-aerial-mandap-01.png`} alt="Aerial view of the Mandap"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
              <img src={`${b}images/tbm-aerial-mandap-02.png`} alt="Mandap with golden statue"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-video max-w-3xl mx-auto">
            <img src={`${b}images/tbm-aerial-mandap-03.png`} alt="Full aerial of ceremony grounds"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <p className="text-center text-sm text-[#8a7860] mt-4 italic">
            Aerial views of the Yagya grounds at Barahkshetra on the banks of the Koshi River
          </p>
        </div>
      </section>

      {/* ── BHUMI PUJA ── */}
      <section className="bg-[#f4ede0] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b8892a] font-medium mb-3">Before the Ceremony</p>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#2c1a08] leading-snug">
              The Bhumi Puja — Sacred Ground-Breaking
            </h2>
            <p className="text-[#6a5c48] text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              Before a Mahayagya of this scale, the ground itself must be consecrated. Jagadguru Mahayogi Siddhababa performed the Bhumi Puja (sacred ground-breaking rite) alongside representatives of the Nepali government, sanctifying the site for what was to come.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {["tbm-bhumi-puja-01.jpg","tbm-bhumi-puja-02.jpg","tbm-bhumi-puja-03.jpg","tbm-bhumi-puja-04.jpg"].map((src, i) => (
              <div key={src} className="rounded-2xl overflow-hidden shadow-lg group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={`${b}images/${src}`} alt={`Bhumi Puja ${i+1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="bg-white/70 px-4 py-3">
                  <p className="text-sm text-[#6a5c48] leading-relaxed">{GALLERY[11 + i].caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE CEREMONY ── */}
      <section className="bg-[#faf9f6] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b8892a] font-medium mb-3">Nine Days of Sacred Fire</p>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#2c1a08] leading-snug">
              The Ceremony
            </h2>
            <p className="text-[#6a5c48] text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              Over nine continuous days, Vedic pandits chanted the Tarak Brahma mantra without interruption. Saints from across the Vaishnava and Shaiva lineages gathered in unity. More than a hundred thousand seekers participated across the full duration of the event.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {["tbm-saints-01.jpg","tbm-ceremony-stage.jpg","tbm-ceremony-stage-02.jpg"].map((src, i) => (
              <div key={src} className="rounded-2xl overflow-hidden shadow-lg group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={`${b}images/${src}`} alt={`Ceremony ${i+1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {["tbm-crowd-01.jpg","tbm-crowd-02.jpg"].map((src, i) => (
              <div key={src} className="rounded-2xl overflow-hidden shadow-lg group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={`${b}images/${src}`} alt={`Crowd ${i+1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="bg-[#faf9f6] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b8892a] font-medium mb-3">Watch</p>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-[#2c1a08] leading-snug">
              The Mahayagya — in Film
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/tSXvL6qA-xQ"
              title="Shree Ram Tarak Brahma Mahayagya"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ── NIGHT CEREMONY ── */}
      <section className="bg-[#1a0c03] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#e8c56a]/30" />
              <p className="text-xs uppercase tracking-[0.3em] text-[#e8c56a] font-medium">The Night of Fires</p>
              <div className="h-px w-10 bg-[#e8c56a]/30" />
            </div>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-white leading-snug">
              A sight not seen in Nepal for seven centuries
            </h2>
            <p className="text-white/70 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              At the culmination of the Mahayagya, hundreds of sacred fires were lit simultaneously across the grounds in an ancient Vedic pattern. Thousands stood witness through the night, the sky alive with flame and the air resonant with mantra.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl overflow-hidden shadow-2xl group">
              <div className="aspect-video overflow-hidden">
                <img src={`${b}images/tbm-night-fire.jpg`} alt="Night of hundreds of fires"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl group">
              <div className="aspect-video overflow-hidden">
                <img src={`${b}images/tbm-night-crowd.jpg`} alt="Crowd by night at the Mahayagya"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING QUOTE ── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <img
          src={`${b}images/tbm-quote-bg.png`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="w-12 h-px bg-[#b8892a]/70 mx-auto mb-8" />
          <p className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-[#f0e8d8] font-light italic leading-relaxed mb-8">
            "The Yagya is not a ritual of the past. It is the living science of transformation — of self, of environment, of world. When performed with sincerity and knowledge, it carries the entire creation toward its highest destiny."
          </p>
          <cite className="text-xs uppercase tracking-[0.3em] text-[#e8c56a] not-italic font-medium">
            Jagadguru Mahayogi Siddhababa
          </cite>
          <div className="w-12 h-px bg-[#b8892a]/70 mx-auto mt-8" />
        </div>
      </section>

      {/* ── FOOTER NAV ── */}
      <section className="bg-[#faf9f6] py-12 px-6 border-t border-[#e8dece]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/events"
            className="inline-flex items-center gap-2 text-sm text-[#8a7860] hover:text-[#b8892a] transition-colors">
            <ArrowLeft size={14} />
            All Historic Events
          </Link>
          <Link href="/contact"
            className="text-sm bg-[#b8892a] hover:bg-[#9a6e1a] text-white px-6 py-2.5 rounded-full transition-colors">
            Contact the Academy
          </Link>
        </div>
      </section>
    </div>
  );
}
