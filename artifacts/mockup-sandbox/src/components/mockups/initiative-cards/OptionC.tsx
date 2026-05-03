const BASE = "https://2b3d15cf-9158-4234-a9a3-b1b8d901a0fe-00-ahgkkruh79v5.spock.replit.dev/mahayog-academy/images/";

const CARDS = [
  { label: "Himalayan Siddha Mahayog Meditation", note: "Inner Awakening", img: "initiative-meditation.png" },
  { label: "Restoration of the Cow as Nepal's National Animal", note: "Cultural & Ecological", img: "ashram-cows-sunset.jpg" },
  { label: "Jagadguru Shriramanandacharya Gurukul", note: "Education", img: "initiative-gurukul.png" },
];

export function OptionC() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }} className="min-h-screen bg-[#faf9f6] p-6 flex flex-col gap-4">
      <p className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-semibold mb-1">Option C — Warm Overlay</p>
      <div className="grid grid-cols-1 gap-4">
        {CARDS.map((card, i) => (
          <div key={i} className="relative h-44 rounded-2xl overflow-hidden cursor-pointer group">
            <img src={`${BASE}${card.img}`} alt="" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(250,242,228,0.55) 0%, rgba(250,242,228,0.82) 100%)" }} />
            <div className="absolute inset-0 flex flex-col justify-end p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#b8892a] font-semibold mb-1">{card.note}</p>
              <p className="text-base font-semibold text-[#2c1a08] leading-snug mb-2">{card.label}</p>
              <span className="text-xs text-[#b8892a] font-medium">Learn more →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
