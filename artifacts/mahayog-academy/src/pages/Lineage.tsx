import Nav from "@/components/Nav";

const b = import.meta.env.BASE_URL;

const GURUS = [
  {
    name: "Jagadguru Ramanandacharya",
    img: "lineage-01-ramanandacharya.jpg",
  },
  {
    name: "Shree Maniramdas Ji Maharaj",
    img: "lineage-02-maniramdas.jpg",
  },
  {
    name: "Shree Vaishnavdas Ji Maharaj",
    img: "lineage-03-vaishnavdas.jpg",
  },
  {
    name: "Shree Ramcharandas Ji Maharaj",
    img: "lineage-04-ramcharandas.jpg",
  },
  {
    name: "Shree Ramsobhadas Ji Maharaj",
    img: "lineage-05-ramsobhadas.jpg",
  },
  {
    name: "Shree Rammanohar Das Ji Maharaj",
    img: "lineage-06-rammanohar.jpg",
  },
  {
    name: "Shree Nritya Gopal Das Ji Maharaj",
    img: "lineage-07-nrityagopal.jpg",
  },
  {
    name: "Shree Narayandas Ji Maharaj",
    img: "lineage-08-narayandas.jpg",
  },
  {
    name: "Shree Vaishnav Bhagawandas Ji Maharaj",
    img: "lineage-09-bhagawandas.jpg",
  },
  {
    name: "Jagadguru Shree Ramanandacharya Swami Ramakrishnacharya Ji Maharaj",
    sub: "Mahayogi Siddhababa",
    img: "lineage-10-siddhababa.jpg",
    current: true,
  },
];

export default function Lineage() {
  return (
    <div className="bg-[#faf9f6] text-[#3d3830]">
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#b8892a] font-semibold mb-6">
            Guru Paramparā
          </p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-[#3d3830] leading-tight mb-8">
            A Living Himalayan Lineage
          </h1>
          <div className="h-px w-16 bg-[#b8892a]/40 mx-auto mb-8" />
          <p className="text-base text-[#5a5248] leading-relaxed mb-6">
            Himalayan Siddha Mahayog arises from a living lineage of Himalayan Siddha Yogis who refined a precise science of meditation and inner awakening through direct experience.
          </p>
          <p className="text-base text-[#5a5248] leading-relaxed">
            For thousands of years, this knowledge has been transmitted from realized teacher to prepared student, preserving wisdom with clarity, responsibility, and depth of practice. This lineage is currently entrusted to His Holiness Jagadguru Ramanandacharya Swami Ramakrishnacharya Ji Maharaj (Mahayogi Siddhababa), as the present Āchārya.
          </p>
        </div>
      </section>

      {/* ── PARAMPARA SECTION ── */}
      <section className="pb-32 px-6">
        <div className="max-w-xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#b8892a] font-semibold mb-2">The Disciplic Succession</p>
            <h2 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#3d3830]">Guru Paramparā</h2>
          </div>

          <div className="relative">
            {/* Vertical spine line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-[#e8dece]" />

            <div className="space-y-0">
              {GURUS.map((guru, i) => {
                const isLast = i === GURUS.length - 1;
                return (
                  <div key={i} className="relative flex flex-col items-center">
                    {/* Portrait */}
                    <div className={`relative z-10 ${isLast ? "mt-4" : ""}`}>
                      <div
                        className={`rounded-full overflow-hidden border-2 shadow-sm ${
                          isLast
                            ? "w-32 h-32 border-[#b8892a] shadow-[0_0_0_4px_#faf9f6,0_0_0_6px_#b8892a33]"
                            : "w-20 h-20 border-[#e8dece]"
                        }`}
                      >
                        <img
                          src={`${b}images/${guru.img}`}
                          alt={guru.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      {isLast && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#b8892a] flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" fill="#fff"/>
                          </svg>
                        </span>
                      )}
                    </div>

                    {/* Name */}
                    <div className={`text-center px-4 ${isLast ? "mt-4 mb-0" : "mt-3 mb-2"}`}>
                      <p
                        className={`font-['Cormorant_Garamond'] leading-snug ${
                          isLast
                            ? "text-xl font-semibold text-[#3d3830]"
                            : "text-base font-medium text-[#5a5248]"
                        }`}
                      >
                        {guru.name}
                      </p>
                      {guru.sub && (
                        <p className="text-xs text-[#b8892a] font-semibold uppercase tracking-[0.2em] mt-1">{guru.sub}</p>
                      )}
                      {isLast && (
                        <p className="text-xs text-[#a89880] mt-1 italic">Present Āchārya</p>
                      )}
                    </div>

                    {/* Connector arrow (except after last) */}
                    {!isLast && (
                      <div className="relative z-10 flex flex-col items-center my-1">
                        <div className="w-px h-5 bg-[#e8dece]" />
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                          <path d="M5 6L0 0h10L5 6z" fill="#d4c4a8"/>
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Closing note */}
          <div className="mt-20 text-center border-t border-[#e8dece] pt-10">
            <p className="text-sm italic text-[#7a7068] font-['Cormorant_Garamond'] text-lg leading-relaxed max-w-md mx-auto">
              "The Guru is not a person. The Guru is the grace that flows through an unbroken chain of awakening."
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
