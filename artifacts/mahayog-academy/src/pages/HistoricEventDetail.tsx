import { Link, useParams } from "wouter";
import Nav from "@/components/Nav";
import { ArrowLeft } from "lucide-react";

const b = import.meta.env.BASE_URL;

const EVENTS = [
  {
    slug: "bhu-samadhi",
    year: "2008 · 2015 · 2016",
    titleHtml: "<em>Bhu-Samadhi</em> of Jagadguru Mahayogi Siddhababa's Revered Guru",
    img: "bhu-samadhi-1.jpg",
    body: [
      "The Bhu-Samadhi — the sacred passing of a realised saint into the eternal — of Pujya Nritya Gopal Das Ji Maharaj, the revered Guru of Jagadguru Mahayogi Siddhababa, stands as one of the most profound moments in the history of this spiritual lineage.",
      "Observed across multiple sacred occasions spanning 2008, 2015, and 2016, the ceremonies were conducted with full Vedic rites, collective prayer, and deep reverence. Thousands of disciples and seekers gathered at the ashram to pay homage to a Mahatma of the highest order, whose presence had shaped the spiritual destiny of countless souls.",
      "For Jagadguru Mahayogi Siddhababa, this was not simply a moment of grief but a sacred transition — a divine teaching in itself. The Guru does not die; the Guru merges. His Holiness has since carried forward the mission of his own Guru with unwavering dedication, continuing to guide seekers on the path of liberation.",
      "The Bhu-Samadhi ceremonies included Vedic chanting, collective meditation, Bhandara (sacred food distribution), and extended periods of silence and prayer. They remain an enduring point of collective memory for the Academy's community worldwide.",
    ],
  },
  {
    slug: "tarak-brahma-mahayagya",
    year: "2019",
    titleHtml: "Shree Tarak Brahma Mahayagya",
    img: "tarak-brahma-mahayagya.jpg",
    body: [
      "The Shree Tarak Brahma Mahayagya of 2019 was among the most powerful and large-scale fire ceremonies ever conducted under the direct guidance of Jagadguru Mahayogi Siddhababa. Tarak Brahma, the liberating aspect of the Divine, was invoked through an unbroken stream of Vedic havan, mantra recitation, and devotional offering.",
      "Thousands of seekers gathered over multiple days at the Guru Ashram in Nepal, participating in the collective yagya. Vedic pandits chanted continuously, while disciples from across Nepal, India, and international centres joined in person and online.",
      "The Mahayagya is considered among the most potent forms of collective spiritual practice, believed to purify the environment, invoke divine grace, and uplift the consciousness of all who participate — and indeed, of all beings whose welfare is held in intention during the rites.",
      "His Holiness presided over the ceremony throughout, offering teachings on the significance of Tarak Brahma, the science of havan, and the deeper purpose of collective spiritual effort. The event is remembered as a milestone of grace in the Academy's history.",
    ],
  },
  {
    slug: "covid-anusthan",
    year: "2021",
    titleHtml: "Himalayan Siddha Mahayog Anuṣṭhān (COVID-19)",
    img: "covid-anusthan.png",
    body: [
      "When the COVID-19 pandemic swept across the world in 2020 and 2021, Jagadguru Mahayogi Siddhababa responded not with silence, but with sustained spiritual action. He led an extended collective anuṣṭhān — a rigorous, time-bound observance of prayer, mantra japa, havan, and meditation — invoking healing, protection, and peace for the world.",
      "Seekers from across continents participated online, joining their intention and practice to the collective field of the ceremony. The anuṣṭhān ran across multiple weeks, with His Holiness personally guiding each session and holding the group in his presence even across digital distance.",
      "The anuṣṭhān brought together practitioners of Himalayan Siddha Mahayog in a shared experience of spiritual solidarity — a reminder that the path of yoga is not merely personal, but is offered in service to all beings. Many participants reported profound experiences of inner stillness, healing, and connection during the practice.",
      "This event stands as a testament to the living relevance of the ancient tradition in the modern world, and to the compassion of a Guru who turns every crisis into an invitation for deeper practice.",
    ],
  },
  {
    slug: "atirudri-mahayagya",
    year: "2022",
    titleHtml: "Atirudri Mahayagya",
    img: "atirudri-mahayagya.jpg",
    body: [
      "The Atirudri Mahayagya is considered one of the most exalted and demanding of all Vedic fire ceremonies. It involves the complete recitation of the Shri Rudram — a hymn of immense power dedicated to Lord Shiva — one thousand, one hundred and forty-four times in full. Combined with the corresponding Vedic havan offerings at each stage, it is a ceremony of extraordinary scope and spiritual potency.",
      "In 2022, Jagadguru Mahayogi Siddhababa presided over the Atirudri Mahayagya at the Guru Ashram, with a team of highly trained Vedic pandits conducting the recitation across multiple continuous days. The ceremony was accompanied by devotional kirtan, communal satsang, and the constant fragrance of sacred offerings.",
      "Seekers and disciples who attended described the atmosphere as electric with divine presence — the accumulated power of mantra, fire, and collective intention creating an environment of tangible grace. Many reported deep experiences of stillness, clarity, and inner purification.",
      "The Atirudri is conducted for the welfare of all — for individual liberation, collective healing, and the protection of the world. His Holiness offered teachings throughout the ceremony on the nature of Shiva, the science of sound, and the transformative power of Vedic fire ritual.",
    ],
  },
  {
    slug: "ramarchan-mahayagya",
    year: "2023",
    titleHtml: "108 Ramarchan Mahayagya",
    img: "ramarchan-mahayagya.jpg",
    body: [
      "The 108 Ramarchan Mahayagya of 2023 was a monumental collective offering to Bhagwan Shri Ram, performed under the direct guidance of Jagadguru Mahayogi Siddhababa. Ramarchan refers to the complete worship of Lord Ram, encompassing the recitation of his names, the narration of his story, offerings of flowers, ghee, and sacred items, and continuous devotional singing.",
      "To perform 108 complete Ramarchans is considered a feat of extraordinary devotion, requiring continuous practice across multiple days and nights. The ceremony drew Vedic scholars, devoted seekers, and community members from across Nepal, India, and international centres.",
      "The timing of the 2023 Mahayagya coincided with a period of collective renewal and rededication for the Academy's community. His Holiness framed the ceremony as an offering for peace, for liberation, and for the welfare of all living beings — a reflection of the Bhagwan Shri Ram himself, whose life was entirely given in service.",
      "Participants carried home not merely memories, but a tangible shift in their inner state — the fruit of days spent in the current of sacred intention, mantra, and the Guru's grace.",
    ],
  },
  {
    slug: "hanumad-mahayagya",
    year: "2024",
    titleHtml: "Sankat Mochan Shree Hanumad Mahayagya",
    img: "hanumad-mahayagya.jpg",
    overlayImg: "hanuman-ghost-bg.png",
    body: [
      "Dedicated to Lord Hanuman, the Sankat Mochan — the Remover of Obstacles — the Shree Hanumad Mahayagya of 2024 was a powerful invocation of strength, protection, and devotion. Under the guidance of Jagadguru Mahayogi Siddhababa, seekers gathered at the ashram for an extended ceremony of havan, Sundarkanda path, Hanuman Chalisa, and kirtan.",
      "Lord Hanuman holds a central place in the devotional life of the Academy's community. As the supreme devotee of Bhagwan Shri Ram and the embodiment of selfless service, Hanuman ji represents the ideal of the spiritual aspirant, one whose strength, intelligence, and will are entirely placed in service of the Divine.",
      "The Mahayagya was attended by thousands, with the entire ashram grounds alive with the sound of Hanuman's names throughout the day and night. His Holiness offered teachings on the nature of Bhakti, the grace of Hanuman, and the power of surrender as a spiritual practice.",
      "Many who attended described a feeling of lightness and courage that remained with them long after the ceremony ended — a gift, perhaps, of the Sankat Mochan himself, who is said to dissolve all obstacles from the path of sincere devotees.",
    ],
  },
];

export default function HistoricEventDetail() {
  const params = useParams<{ slug: string }>();
  const event = EVENTS.find(e => e.slug === params.slug);

  if (!event) {
    return (
      <>
        <Nav />
        <div className="min-h-screen flex items-center justify-center bg-[#faf9f6]">
          <div className="text-center">
            <p className="text-[#6a5c48] mb-4">Event not found.</p>
            <Link href="/events" className="text-[#b8892a] underline">Back to Events</Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[55vh] min-h-[360px] overflow-hidden">
        <img
          src={`${b}images/${event.img}`}
          alt={event.titleHtml.replace(/<[^>]+>/g, "")}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {event.overlayImg && (
          <img
            src={`${b}images/${event.overlayImg}`}
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none opacity-60"
            style={{ mixBlendMode: "screen", objectPosition: "85% center" }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-4xl mx-auto w-full">
          <span className="text-xs uppercase tracking-[0.25em] text-[#e8c56a] font-medium">{event.year}</span>
          <h1
            className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-white leading-snug mt-2"
            dangerouslySetInnerHTML={{ __html: event.titleHtml }}
          />
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="bg-[#faf9f6] py-16 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Back link */}
          <Link href="/events"
            className="inline-flex items-center gap-2 text-sm text-[#8a7860] hover:text-[#b8892a] transition-colors mb-10">
            <ArrowLeft size={14} />
            Back to Events
          </Link>

          {/* Divider */}
          <div className="h-px bg-[#e8dece] mb-10" />

          {/* Body paragraphs */}
          <div className="space-y-6">
            {event.body.map((para, i) => (
              <p key={i} className="font-['Inter'] text-[#4a3f32] text-base leading-[1.9]">
                {para}
              </p>
            ))}
          </div>

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
          <Link href="/contact"
            className="sm:ml-auto text-sm bg-[#b8892a] hover:bg-[#9a6e1a] text-white px-5 py-2.5 rounded-full transition-colors">
            Contact the Academy
          </Link>
        </div>
      </section>
    </>
  );
}
