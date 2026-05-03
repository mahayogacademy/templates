const BASE = "https://2b3d15cf-9158-4234-a9a3-b1b8d901a0fe-00-ahgkkruh79v5.spock.replit.dev/mahayog-academy/images/";

const CARDS = [
  { label: "Himalayan Siddha Mahayog Meditation", note: "Inner Awakening", img: "initiative-meditation.png" },
  { label: "Restoration of the Cow as Nepal's National Animal", note: "Cultural & Ecological", img: "ashram-cows-sunset.jpg" },
  { label: "Jagadguru Shriramanandacharya Gurukul", note: "Education", img: "initiative-gurukul.png" },
  { label: "A historic Ram Temple in Nepal", note: "Sacred Infrastructure", img: "ram-mandir-1.jpg" },
];

export function OptionB() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }} className="min-h-screen bg-[#faf9f6] p-6 flex flex-col gap-3">
      <p className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-1">Option B — Row List</p>
      {CARDS.map((card, i) => (
        <div key={i} className="flex items-center gap-5 bg-white border border-[#e8dece] rounded-2xl p-4 hover:border-[#b8892a]/40 hover:shadow-sm transition-all duration-300 cursor-pointer">
          <div className="shrink-0 w-20 h-20 rounded-xl overflow-hidden border border-[#e8dece]">
            <img src={`${BASE}${card.img}`} alt="" className="w-full h-full object-cover object-center" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs uppercase tracking-[0.2em] text-[#b8892a] font-semibold mb-1">{card.note}</p>
            <p className="text-sm font-semibold text-[#3d3830] leading-snug mb-2">{card.label}</p>
            <span className="text-xs text-[#b8892a] font-medium">Learn more →</span>
          </div>
        </div>
      ))}
    </div>
  );
}
