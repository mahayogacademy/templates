const BASE = "https://2b3d15cf-9158-4234-a9a3-b1b8d901a0fe-00-ahgkkruh79v5.spock.replit.dev/mahayog-academy/images/";

const CARDS = [
  { label: "Himalayan Siddha Mahayog Meditation", note: "Inner Awakening", img: "initiative-meditation.png" },
  { label: "Restoration of the Cow as Nepal's National Animal", note: "Cultural & Ecological", img: "ashram-cows-sunset.jpg" },
  { label: "Jagadguru Shriramanandacharya Gurukul", note: "Education", img: "initiative-gurukul.png" },
];

export function OptionA() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }} className="min-h-screen bg-[#faf9f6] p-6 flex flex-col gap-4">
      <p className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-1">Option A — Light Cards</p>
      <div className="grid grid-cols-1 gap-4">
        {CARDS.map((card, i) => (
          <div key={i} className="bg-white border border-[#e8dece] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#b8892a]/40 transition-all duration-300 cursor-pointer">
            <div className="h-36 overflow-hidden">
              <img src={`${BASE}${card.img}`} alt="" className="w-full h-full object-cover object-center" />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#b8892a] font-semibold mb-2">{card.note}</p>
              <p className="text-base font-semibold text-[#3d3830] leading-snug mb-3">{card.label}</p>
              <span className="inline-flex items-center gap-1.5 text-sm text-[#b8892a] font-medium">
                Learn more →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
