import { Link } from "wouter";
import Nav from "@/components/Nav";
import { ArrowLeft } from "lucide-react";

const b = import.meta.env.BASE_URL;

const GALLERY = [
  {
    src: "bhu-samadhi-1.jpg",
    caption: "Jagadguru descends into the earth — the moment of entry",
    position: "center top",
    span: "col-span-2 row-span-2",
  },
  {
    src: "bhu-samadhi-2.jpg",
    caption: "The pit is sealed — disciples lower the wooden covering",
    position: "center center",
    span: "col-span-1 row-span-1",
  },
  {
    src: "bhu-samadhi-4.jpg",
    caption: "Sacred grain covers the samadhi mound; a deity watches over",
    position: "center center",
    span: "col-span-1 row-span-1",
  },
  {
    src: "bhu-samadhi-3.jpg",
    caption: "Devotees bow at the sealed mound during the vigil",
    position: "center center",
    span: "col-span-2 row-span-1",
  },
  {
    src: "bhu-samadhi-8.jpg",
    caption: "Thousands gathered to witness the sacred occasion",
    position: "center top",
    span: "col-span-2 row-span-1",
  },
  {
    src: "bhu-samadhi-6.jpg",
    caption: "After emergence — still absorbed in the infinite",
    position: "center top",
    span: "col-span-1 row-span-2",
  },
  {
    src: "bhu-samadhi-7.jpg",
    caption: "Receiving the community's reverence following emergence",
    position: "center center",
    span: "col-span-1 row-span-1",
  },
];

export default function BhuSamadhiDetail() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img
          src={`${b}images/bhu-samadhi-5.jpg`}
          alt="Jagadguru Mahayogi Siddhababa emerging from Bhu-Samadhi"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 25%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 max-w-5xl mx-auto w-full">
          <span className="text-xs uppercase tracking-[0.3em] text-[#e8c56a] font-medium block mb-3">
            2008 · 2015 · 2017
          </span>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-tight">
            <em>Bhu-Samadhi</em>
          </h1>
          <p className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-white/80 font-light mt-2 leading-snug">
            of Jagadguru Mahayogi Siddhababa
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="bg-[#faf9f6] pt-16 pb-10 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/events"
            className="inline-flex items-center gap-2 text-sm text-[#8a7860] hover:text-[#b8892a] transition-colors mb-10">
            <ArrowLeft size={14} />
            Back to Events
          </Link>

          <div className="h-px bg-[#e8dece] mb-10" />

          {/* Pull quote */}
          <blockquote className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-[#b8892a] font-light italic leading-relaxed mb-10 border-l-2 border-[#b8892a]/40 pl-6">
            "To enter the earth in full awareness and to return — this is the living proof that the yogi has become the master of life and death."
          </blockquote>

          <div className="space-y-6 font-['Inter'] text-[#4a3f32] text-base leading-[1.9]">
            <p>
              Bhu-Samadhi — literally "Earth Samadhi" — is among the rarest and most awe-inspiring demonstrations of yogic mastery known in the Himalayan tradition. A yogi who has attained complete mastery of prana, breath, and consciousness voluntarily enters a sealed underground chamber and remains there — without food, water, or air in the ordinary sense — for an extended duration. The physical body enters a state of suspended animation while the consciousness abides in the highest states of samadhi, untouched by the conditions of the material world.
            </p>
            <p>
              This practice is not a trick or a feat of endurance. It is a living demonstration of the state described in the Yoga Sutras — the total withdrawal of the senses and the transcendence of bodily identification. The Bhu-Samadhi is considered a direct proof of liberation: that the realised Guru is no longer subject to the laws that bind ordinary human experience.
            </p>
            <p>
              Jagadguru Mahayogi Siddhababa has performed Bhu-Samadhi on three distinct occasions — in 2008, 2015, and 2017 — each time witnessed by thousands of devotees, medical observers, and journalists. On each occasion, he descended into a sealed brick-lined pit, was interred beneath a wooden covering and earth, and emerged after a period of days in a state of profound stillness and radiant clarity.
            </p>
          </div>
        </div>
      </section>

      {/* ── THREE OCCASIONS ── */}
      <section className="bg-[#f4ede0] py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[#2e1f0e] font-light mb-2 text-center">
            Three Sacred Occasions
          </h2>
          <div className="h-px bg-[#c9a96e]/40 w-24 mx-auto mb-10" />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                year: "2008",
                heading: "The First Entry",
                body: "The first Bhu-Samadhi of Jagadguru Mahayogi Siddhababa astonished Nepal and drew pilgrims from across the subcontinent. He remained interred for several days, emerging with the serenity of one who had simply closed his eyes for a moment.",
              },
              {
                year: "2015",
                heading: "The Second Samadhi",
                body: "The 2015 Bhu-Samadhi took place during a period of collective upheaval — the same year as the devastating earthquake in Nepal. Many devotees regarded the ceremony as an act of collective grace and spiritual protection for the nation.",
              },
              {
                year: "2017",
                heading: "The Third Samadhi",
                body: "The third and most recent Bhu-Samadhi drew the largest gathering of witnesses. Thousands kept vigil through the days of the interment, chanting, praying, and meditating — their collective intention held within the field of the Guru's unwavering awareness.",
              },
            ].map(({ year, heading, body }) => (
              <div key={year} className="bg-[#faf9f6] rounded-2xl p-7 shadow-sm">
                <div className="text-[#b8892a] font-['Cormorant_Garamond'] text-4xl font-light mb-1">{year}</div>
                <div className="h-px bg-[#e8dece] mb-4" />
                <h3 className="font-['Cormorant_Garamond'] text-xl text-[#2e1f0e] font-semibold mb-3">{heading}</h3>
                <p className="font-['Inter'] text-[#5a4f40] text-sm leading-[1.85]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      <section className="bg-[#faf9f6] py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[#2e1f0e] font-light mb-2 text-center">
            The Ceremony in Images
          </h2>
          <div className="h-px bg-[#c9a96e]/40 w-24 mx-auto mb-10" />

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px]">
            {GALLERY.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl group ${img.span}`}
              >
                <img
                  src={`${b}images/${img.src}`}
                  alt={img.caption}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: img.position }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white text-xs font-['Inter'] leading-snug translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>

          {/* Emergence image — full width feature */}
          <div className="relative mt-3 rounded-xl overflow-hidden group" style={{ height: "360px" }}>
            <img
              src={`${b}images/bhu-samadhi-5.jpg`}
              alt="Jagadguru emerging from Bhu-Samadhi"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: "center 20%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-7">
              <p className="font-['Cormorant_Garamond'] text-white text-2xl font-light italic leading-snug">
                The emergence — returning from the depths of the infinite, still held in samadhi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING REFLECTION ── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <img
          src={`${b}images/bhu-samadhi-closing-bg.png`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="w-12 h-px bg-[#b8892a]/70 mx-auto mb-8" />
          <p className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-[#f0e8d8] font-light italic leading-relaxed mb-8">
            "What the Guru demonstrates in the pit of the earth, he demonstrates in every teaching — that you are not this body, not this breath, not this mind. You are That which remains when all these cease."
          </p>
          <div className="w-12 h-px bg-[#b8892a]/70 mx-auto" />
        </div>
      </section>

      {/* ── FOOTER NAV ── */}
      <section className="bg-[#faf9f6] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="h-px bg-[#e8dece] mb-10" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/events"
              className="inline-flex items-center gap-2 text-sm text-[#8a7860] hover:text-[#b8892a] transition-colors">
              <ArrowLeft size={14} />
              All Historic Events
            </Link>
            <Link href="/contact"
              className="sm:ml-auto text-sm bg-[#b8892a] hover:bg-[#9a6e1a] text-white px-5 py-2.5 rounded-full transition-colors">
              Contact the Academy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
