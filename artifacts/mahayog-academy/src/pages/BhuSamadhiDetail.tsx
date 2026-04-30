import { Link } from "wouter";
import Nav from "@/components/Nav";
import { ArrowLeft } from "lucide-react";

const b = import.meta.env.BASE_URL;

// Each step in the 2008 Chataradham Bhu-Samadhi sequence
const SEQUENCE_2008 = [
  {
    src: "bs2008-01-pit-prepared.jpg",
    step: "1",
    label: "Preparation",
    caption: "The brick-lined samadhi pit is prepared and consecrated inside the decorated hall at Chataradham.",
  },
  {
    src: "bs2008-02-media-meeting.jpg",
    step: "2",
    label: "Press Briefing",
    caption: "Gurudev meets with journalists and observers before entering — the public samadhi is an open, transparent act.",
  },
  {
    src: "bs2008-03-entering-pit.jpg",
    step: "3",
    label: "The Descent",
    caption: "Gurudev sits in the pit and begins withdrawing from outer awareness, entering the state of samadhi.",
  },
  {
    src: "bs2008-04-lying-in-pit.jpg",
    step: "4",
    label: "Into the Earth",
    caption: "He reclines within the pit — the body fully at rest, consciousness turning entirely inward.",
  },
  {
    src: "bs2008-05-last-seen.jpg",
    step: "5",
    label: "Last Seen",
    caption: "The final moment before sealing. Disciples witness his entry with reverence and silence.",
  },
  {
    src: "bs2008-06-covering.jpg",
    step: "6",
    label: "Sealed",
    caption: "The pit is covered with plastic sheet and a heavy wooden board, then sealed with earth.",
  },
  {
    src: "bs2008-07-sand-spread.jpg",
    step: "7",
    label: "Four Tonnes of Sand",
    caption: "Observers and disciples spread four tonnes of sand over the covering, watched by local officials and press.",
  },
  {
    src: "bs2008-08-barley-sowed.jpg",
    step: "8",
    label: "Barley Sowed",
    caption: "21 kg of barley is sowed on the sealed mound — a traditional sacred measure of time and life-force.",
  },
  {
    src: "bs2008-09-barley-mound.jpg",
    step: "9",
    label: "The Mound",
    caption: "The sealed mound at rest. A picture of the Divine Mother is placed over it. The vigil begins.",
  },
  {
    src: "bs2008-10-barley-grown.jpg",
    step: "10",
    label: "Nine Days Later",
    caption: "The barley has grown into a lush golden carpet — a sign of the life-force radiating through the earth.",
  },
  {
    src: "bs2008-11-barley-inspected.jpg",
    step: "11",
    label: "Inspected",
    caption: "Disciples inspect and tend to the barley growth, maintaining vigil with prayer and kirtan throughout.",
  },
  {
    src: "bs2008-12-cutting-straw.jpg",
    step: "12",
    label: "The Opening Begins",
    caption: "The grown straw is carefully cut and removed. The mound is opened layer by layer.",
  },
  {
    src: "bs2008-13-removing-sand.jpg",
    step: "13",
    label: "Sand Removed",
    caption: "Officials and disciples clear the sand by hand, with care and ceremony.",
  },
  {
    src: "bs2008-14-lid-removed.jpg",
    step: "14",
    label: "Lid Lifted",
    caption: "The wooden covering is raised. The pit is open after nine days.",
  },
  {
    src: "bs2008-15-pit-open.jpg",
    step: "15",
    label: "He is There",
    caption: "Gurudev lies motionless, exactly as he was placed — body undisturbed, consciousness returning from the depths.",
  },
  {
    src: "bs2008-16-lamp-offering.jpg",
    step: "16",
    label: "Lamp Offered",
    caption: "A devotee offers a lit lamp over the open pit, welcoming Gurudev's consciousness back into the world.",
  },
  {
    src: "bs2008-17-emerging.jpg",
    step: "17",
    label: "Emerging",
    caption: "Disciples gently help Gurudev sit. His eyes remain closed, still held in the stillness of samadhi.",
  },
  {
    src: "bs2008-18-after-care.jpg",
    step: "18",
    label: "Tended To",
    caption: "Water is offered and the body is gently cleansed after nine days within the earth.",
  },
  {
    src: "bs2008-19-crowd.jpg",
    step: "19",
    label: "Thousands Gathered",
    caption: "Thousands of devotees and onlookers have gathered at Chataradham to receive darshan after the emergence.",
  },
  {
    src: "bs2008-20-blessings.jpg",
    step: "20",
    label: "Blessings Given",
    caption: "Gurudev addresses the assembly and gives blessings — still serene, absorbed, radiating grace.",
  },
  {
    src: "bs2008-21-vigil-prayers.jpg",
    step: "·",
    label: "The Vigil — Inside",
    caption: "Throughout the nine days, devotees gathered inside the hall — praying, chanting, and keeping continuous presence around the sealed samadhi.",
  },
  {
    src: "bs2008-22-crowd-outside.jpg",
    step: "·",
    label: "The Vigil — Outside",
    caption: "Word spread quickly across the region. People came in continuous streams from nearby villages and towns to pay respect during the vigil.",
  },
  {
    src: "bs2008-23-recognition-1.jpg",
    step: "·",
    label: "Community Recognition",
    caption: "Following the emergence, disciples and community leaders offered formal written tributes and recognitions to Gurudev.",
  },
  {
    src: "bs2008-24-recognition-2.jpg",
    step: "·",
    label: "Recognition by Elders",
    caption: "An elder dignitary presents a formal document — acknowledgement from the wider community of what they had witnessed.",
  },
  {
    src: "bs2008-25-recognition-3.jpg",
    step: "·",
    label: "Official Acknowledgement",
    caption: "Local officials and public figures formally recognised the event — an extraordinary occurrence in the living tradition of Himalayan yoga.",
  },
];

export default function BhuSamadhiDetail() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img
          src={`${b}images/bs2008-17-emerging.jpg`}
          alt="Jagadguru Mahayogi Siddhababa emerging from Bhu-Samadhi"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 25%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 max-w-5xl mx-auto w-full">
          <span className="text-xs uppercase tracking-[0.3em] text-[#e8c56a] font-medium block mb-3">
            Public Samadhis · 2008 · 2015 · 2017
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

          <blockquote className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-[#b8892a] font-light italic leading-relaxed mb-10 border-l-2 border-[#b8892a]/40 pl-6">
            "To enter the earth in full awareness and to return — this is the living proof that the yogi has become the master of life and death."
          </blockquote>

          <div className="space-y-6 font-['Inter'] text-[#4a3f32] text-base leading-[1.9]">
            <p>
              Bhu-Samadhi — literally "Earth Samadhi" — is a state of profound meditative absorption in which a realised yogi voluntarily enters a sealed underground chamber and remains there, without food, water, or ordinary breath, for an extended duration. The physical body enters a state of suspended animation while consciousness abides in the deepest states of samadhi — untouched by the conditions of the material world.
            </p>
            <p>
              For Jagadguru Mahayogi Siddhababa, Bhu-Samadhi is not a performance. It is part of his ordinary inner life — a state he has entered since the early years of his sadhana. The practice belongs to the living Himalayan Siddha tradition, in which the fully realised yogi moves freely between states of consciousness that most beings can only encounter in death.
            </p>
            <p>
              At the sincere and repeated request of his students — who wished to bear witness to this dimension of their Guru's reality — Gurudev consented to perform Bhu-Samadhi publicly on three occasions: in 2008 at Chataradham, Nepal; in 2015; and again in 2017. Each was conducted with complete transparency: media were present, officials observed, and the entire sequence from preparation to emergence was documented and witnessed by thousands.
            </p>
            <p>
              What those thousands witnessed was not a feat of endurance or a display of will. It was the quiet, undeniable demonstration of a consciousness that has transcended the body — a yogi who can lay down the breath as simply as one lays down a burden, and take it up again when the time comes.
            </p>
          </div>
        </div>
      </section>

      {/* ── THREE OCCASIONS ── */}
      <section className="bg-[#f4ede0] py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[#2e1f0e] font-light mb-2 text-center">
            Three Public Samadhis
          </h2>
          <p className="text-center font-['Inter'] text-sm text-[#7a6a55] mb-2">
            Each performed at the request of devotees — as a gift of grace and a living teaching
          </p>
          <div className="h-px bg-[#c9a96e]/40 w-24 mx-auto mb-10" />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                year: "2008",
                place: "Chataradham, Nepal",
                heading: "The First Public Samadhi",
                body: "The first time Gurudev agreed to perform Bhu-Samadhi publicly, students and disciples gathered at Chataradham to witness what their Guru had told them of only in teachings. He remained within the sealed earth for nine days, beneath four tonnes of sand and 21 kg of sown barley — which grew and blossomed above him.",
              },
              {
                year: "2015",
                place: "Nepal",
                heading: "The Second Public Samadhi",
                body: "The 2015 Bhu-Samadhi took place during a year of great turbulence for Nepal — the same year as the devastating earthquake. Many disciples received it as an act of grace offered to the land itself. Thousands gathered to keep vigil, pray, and hold the occasion as a collective ceremony of protection and healing.",
              },
              {
                year: "2017",
                place: "Nepal",
                heading: "The Third Public Samadhi",
                body: "The third and most recent public Bhu-Samadhi was the largest in scale — the gathering of witnesses exceeded those of the previous occasions. Once again Gurudev accepted the request of his students, entering and returning in full clarity, offering blessings and teachings to the assembled thousands upon his emergence.",
              },
            ].map(({ year, place, heading, body }) => (
              <div key={year} className="bg-[#faf9f6] rounded-2xl p-7 shadow-sm">
                <div className="text-[#b8892a] font-['Cormorant_Garamond'] text-4xl font-light mb-0.5">{year}</div>
                <div className="text-[#8a7860] font-['Inter'] text-xs uppercase tracking-widest mb-3">{place}</div>
                <div className="h-px bg-[#e8dece] mb-4" />
                <h3 className="font-['Cormorant_Garamond'] text-xl text-[#2e1f0e] font-semibold mb-3">{heading}</h3>
                <p className="font-['Inter'] text-[#5a4f40] text-sm leading-[1.85]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2008 PHOTO SEQUENCE ── */}
      <section className="bg-[#faf9f6] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[#2e1f0e] font-light mb-2 text-center">
            2008 Chataradham — The Full Record
          </h2>
          <p className="text-center font-['Inter'] text-sm text-[#7a6a55] mb-2">
            Twenty-five photographs documenting the complete sequence: from preparation to emergence, vigil, and official recognition
          </p>
          <div className="h-px bg-[#c9a96e]/40 w-24 mx-auto mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEQUENCE_2008.map((item) => (
              <div key={item.src} className="group">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                  <img
                    src={`${b}images/${item.src}`}
                    alt={item.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Step badge */}
                  <div className="absolute top-3 left-3 bg-[#b8892a]/90 text-white text-xs font-['Inter'] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {item.step}
                  </div>
                </div>
                <div className="pt-3 px-1">
                  <p className="font-['Cormorant_Garamond'] text-lg text-[#2e1f0e] font-semibold leading-snug mb-1">
                    {item.label}
                  </p>
                  <p className="font-['Inter'] text-sm text-[#6a5c48] leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2015 PHOTO SECTION ── */}
      <section className="bg-[#f4ede0] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[#2e1f0e] font-light mb-1 text-center">
            2015 Chatara — Selected Photographs
          </h2>
          <p className="text-center font-['Inter'] text-xs uppercase tracking-widest text-[#8a7860] mb-3">
            Chatara, Nepal
          </p>
          <p className="text-center font-['Inter'] text-sm text-[#7a6a55] max-w-2xl mx-auto mb-2">
            The second public Bhu-Samadhi took place at Chatara in 2015 — the same year Nepal was struck by a devastating earthquake. The chamber was lined with fabric; officials and pandits conducted a formal inspection mid-way through the sealed period. As in 2008, barley was sowed and grew above him during the nine days.
          </p>
          <div className="h-px bg-[#c9a96e]/40 w-24 mx-auto mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                src: "bs2015-01-in-chamber.jpg",
                label: "In the Chamber",
                caption: "Gurudev lies in the fabric-lined wooden chamber, draped in saffron, eyes closed — the body at complete rest, consciousness withdrawn.",
              },
              {
                src: "bs2015-02-inspection.jpg",
                label: "Official Inspection",
                caption: "An official observer examines the sealed chamber mid-samadhi — part of the transparent, verifiable nature of the public demonstration.",
              },
              {
                src: "bs2015-03-barley-harvest.jpg",
                label: "Harvesting the Barley",
                caption: "Pandits remove the lush barley growth from the mound before the final opening — the grown grain a sign of the life-force held within.",
              },
            ].map((item) => (
              <div key={item.src} className="group">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                  <img
                    src={`${b}images/${item.src}`}
                    alt={item.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pt-3 px-1">
                  <p className="font-['Cormorant_Garamond'] text-lg text-[#2e1f0e] font-semibold leading-snug mb-1">
                    {item.label}
                  </p>
                  <p className="font-['Inter'] text-sm text-[#6a5c48] leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
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
