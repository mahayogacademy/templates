import type { ArticleBlock } from "./articles";

const b = import.meta.env.BASE_URL;

export interface NewsArticle {
  id: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string;
  source: string;
  tags: string[];
  thumbnail: string;
  content: ArticleBlock[];
}

const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "n-tapovan",
    title: "Siddhababa Defends Tapovan — No Cement Jungle, No Encroachment",
    subtitle: "As reported in Loknaama and Punya Nagari · 6 December 2025",
    excerpt:
      "Jagadguru Mahayogi Siddhababa has issued two firm warnings ahead of Kumbhmela 2025: the sacred Tapovan in Nashik will not become a commercial zone, and any encroachment on its holy grounds will face strong resistance.",
    date: "6 December 2025",
    source: "Loknaama & Punya Nagari",
    tags: ["Kumbhmela", "Press"],
    thumbnail: `${b}images/news-tapovan-encroachment.png`,
    content: [
      {
        type: "p",
        text: "Nashik's Tapovan — the ancient forest sanctuary at Trimbakeshwar — has for centuries been home to saints, sages, and ascetics. It is a living tapas-bhumi: a land of intense spiritual practice, whose sacred character has endured through every era of Indian history. As preparations begin for Kumbhmela 2025, Jagadguru Mahayogi Siddhababa has made it unmistakably clear that this sacred heritage must not be compromised.",
      },
      {
        type: "quote",
        text: "Tapovan will not become a cement jungle. This is sacred land — the home of saints and the inheritance of every seeker. No commercial complex, no exhibition centre, no encroachment will be permitted here.",
      },
      {
        type: "h2",
        text: "A Warning Against Commercial Development",
      },
      {
        type: "p",
        text: "Speaking to the press at Nashik's Lakshminarayan Bada Mandir, Siddhababa addressed reports that authorities had considered establishing commercial exhibition centres and business complexes in the Tapovan area in connection with Kumbhmela planning. He warned that any such proposal would be met with firm resistance from the entire saint community and from millions of devoted pilgrims.",
      },
      {
        type: "p",
        text: "Siddhababa stated that Tapovan's spiritual atmosphere has been preserved for thousands of years precisely because it has been kept free from commercial activity. The presence of saints, the continuity of penance, and the unbroken current of devotion that flows through this land are its real wealth — and that wealth cannot be exchanged for short-term convenience or administrative ambition.",
      },
      {
        type: "h2",
        text: "No Encroachment on Sacred Grounds",
      },
      {
        type: "p",
        text: "In a separate address, Siddhababa also spoke about what he called the 'encroachment' of an urban, commercial mindset into sacred territory. He called upon the Maharashtra state government to begin immediate and careful planning — not for footfall management or infrastructure projects — but for the preservation of Tapovan's spiritual integrity.",
      },
      {
        type: "p",
        text: "He noted that Kumbhmela at Nashik-Trimbakeshwar is expected to draw over forty crore pilgrims. The organisation of such an event requires discipline, sensitivity, and deep respect for the sanctity of the place. Any decision that treats Tapovan as a commercial site, even temporarily, would be a betrayal of the pilgrimage's essential meaning.",
      },
      {
        type: "quote",
        text: "The government must understand: this is not merely land that can be allocated for temporary use. Tapovan is alive. It breathes. Every grain of soil here carries the penance of generations of sages.",
      },
      {
        type: "h2",
        text: "An Appeal to the Government and to Society",
      },
      {
        type: "p",
        text: "Siddhababa called on administrators to take seriously the voices of the saint community and to approach Kumbhmela planning with the gravity it deserves. He expressed confidence that, with proper planning and genuine respect for the sacred, Kumbhmela 2025 could be a landmark moment — but only if the spiritual foundation of the event is placed above commercial convenience.",
      },
      {
        type: "p",
        text: "He also asked devotees and members of the public to remain vigilant and to raise their voices wherever the sacred character of Tapovan or any pilgrimage site is at risk. The protection of sacred space, he said, is not merely a religious matter — it is a civilisational one.",
      },
      {
        type: "h2",
        text: "Press Coverage",
      },
      {
        type: "p",
        text: "This statement was covered across Nashik's leading Marathi-language newspapers on 6 December 2025, including Loknaama and Punya Nagari. The following are scans of the original press coverage:",
      },
      {
        type: "image",
        src: `${b}images/news-tapovan-cement.jpg`,
        alt: "Loknaama newspaper coverage — Tapovan statement",
        caption: "Loknaama, Nashik Edition · 6 December 2025",
      },
      {
        type: "image",
        src: `${b}images/news-tapovan-encroachment.jpg`,
        alt: "Punya Nagari newspaper coverage — Tapovan statement",
        caption: "Punya Nagari, Nashik Edition · 6 December 2025 · Page 02",
      },
    ],
  },
  {
    id: "n-goda-parikrama",
    title: "Godavari Parikrama Begins — 500+ Saints from Across India and the World",
    subtitle: "As reported in Punya Nagari · 6 December 2025",
    excerpt:
      "The sacred circumambulation of the Godavari River has commenced at Trimbakeshwar, with over 500 saints, mahantas, and mahavishvas from India and abroad taking part.",
    date: "6 December 2025",
    source: "Punya Nagari",
    tags: ["Events", "Press"],
    thumbnail: `${b}images/news-goda-parikrama.png`,
    content: [
      {
        type: "p",
        text: "The sacred Godavari Parikrama — a pilgrimage in circumambulation of the holy Godavari River from its source at Trimbakeshwar — has formally commenced. Over five hundred saints, mahantas, and mahavishvas from across India and beyond have gathered to participate in what is being described as a rare and historic pilgrimage of its scale.",
      },
      {
        type: "quote",
        text: "This parikrama is not simply a ritual journey. It is a moving satsang — a collective invocation of the divine grace that flows through the Godavari, and a symbol of the unity of our sacred tradition.",
      },
      {
        type: "h2",
        text: "Beginning at Trimbakeshwar",
      },
      {
        type: "p",
        text: "The parikrama began at Trimbakeshwar — the ancient seat of one of the twelve Jyotirlingas — on 6 December 2025, Saturday. The gathering of saints from four directions of India under a single banner of devotion is, organisers note, itself an extraordinary event: prior Godavari parikramas of this scale and participation are rare in recent memory.",
      },
      {
        type: "p",
        text: "The event is taking place in the context of preparations for Kumbhmela at Nashik-Trimbakeshwar, and is seen as an opening invocation for the broader pilgrimage season that follows. Saints and religious leaders from Maharashtra, Karnataka, Andhra Pradesh, and Tamil Nadu, as well as representatives from Nepal and other countries, have joined the procession.",
      },
      {
        type: "h2",
        text: "Purpose and Significance",
      },
      {
        type: "p",
        text: "Peethadhishwar Siddhababa clearly outlined three objectives of the parikrama: the promotion of cultural exchange, the strengthening of national unity, and the fostering of spiritual consciousness throughout society. He expressed that the parikrama, through its movement across the Godavari's course, would inspire spiritual awareness in all who witness it — whether they join on foot or simply watch from the banks.",
      },
      {
        type: "list",
        items: [
          "Cultural exchange among saint communities from across India",
          "Strengthening of national and spiritual unity",
          "Raising spiritual awareness in society ahead of Kumbhmela",
          "Honouring the sacred river Godavari and its civilisational significance",
        ],
      },
      {
        type: "h2",
        text: "Conclusion at Trimbak — 21 December",
      },
      {
        type: "p",
        text: "The parikrama is scheduled to conclude on 21 December 2025 with a grand ceremony at Trimbakeshwar. The closing event will include a reception for the saints, a programme of honour and recognition, and a bhajan-kirtan gathering open to all devotees. The final day will mark not only the end of the circumambulation but a moment of collective spiritual celebration.",
      },
      {
        type: "p",
        text: "Among the key figures present at the commencement were the Mahant of Lakshminarayan Bada Mandir Ramsnehdas Maharaj, Shankardasji Maharaj of Hanuman Mandir (Karanjali), and the Chairman of Jagadguru Ramanandacharya Sevapeeth Nepal — Babu Raja — along with many other distinguished saints and scholars.",
      },
      {
        type: "h2",
        text: "Press Coverage",
      },
      {
        type: "p",
        text: "The commencement of the Godavari Parikrama was reported in Punya Nagari's Nashik edition on 6 December 2025. The original coverage is reproduced below:",
      },
      {
        type: "image",
        src: `${b}images/news-goda-parikrama.jpg`,
        alt: "Punya Nagari newspaper coverage — Godavari Parikrama",
        caption: "Punya Nagari, Nashik Edition · 6 December 2025 · Page 08",
      },
    ],
  },
];

export function getNewsArticleById(id: string): NewsArticle | undefined {
  return NEWS_ARTICLES.find(a => a.id === id);
}

export { NEWS_ARTICLES };
