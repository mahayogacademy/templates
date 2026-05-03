import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Copy, CheckCheck, Heart } from "lucide-react";

const b = import.meta.env.BASE_URL;

const SEVA_OPTIONS = [
  {
    name: "Gau Seva",
    sub: "Care of Sacred Cows",
    img: "seva-gau-seva.png",
    description:
      "The ashram's goshala shelters and tends to sacred cows, which are revered as an embodiment of divine grace. Your contribution provides fodder, care, and shelter for these gentle beings.",
  },
  {
    name: "Hanuman Pūjā",
    sub: "Temple Worship",
    img: "seva-hanuman-puja.png",
    description:
      "Daily pūjā, oil lamps, flowers, and offerings sustain the Hanuman Temple. Your donation keeps the sacred flame burning and the atmosphere of devotion alive.",
  },
  {
    name: "Akhanda Kīrtan",
    sub: "Continuous Chanting",
    img: "seva-akhanda-kirtan.png",
    description:
      "Since 2010, the Ram mantra has been chanted without interruption, 24 hours a day. Supporting this seva ensures this unbroken stream of sacred sound continues.",
  },
  {
    name: "Brahmand Bhojan",
    sub: "Prasad Distribution",
    img: "seva-brahmand-bhojan.png",
    description:
      "Every day, pilgrims, seekers, and the local community receive prasad at the ashram. Your offering feeds hundreds and embodies the spirit of selfless giving.",
  },
];

const PROJECTS = [
  {
    name: "108 Hanuman Temple",
    sub: "Sacred Construction",
    img: "project-hanuman-temple.png",
    description:
      "A landmark temple dedicated to Lord Hanuman is being built at the ashram. Your support helps fund the construction, carving, and consecration of this enduring centre of devotion.",
  },
  {
    name: "Ram Mandir",
    sub: "Temple of Lord Rāma",
    img: "project-ram-mandir.png",
    description:
      "A dedicated Ram Mandir will serve as a permanent place of worship and pilgrimage. Donations contribute to the building, ornamentation, and daily maintenance of this sacred space.",
  },
  {
    name: "Gurukul",
    sub: "Vedic Education",
    img: "project-gurukul.png",
    description:
      "The Gurukul provides children with a traditional Vedic education rooted in Sanskrit, dharma, and inner discipline. Your gift helps fund teachers, materials, food, and the future of this living tradition.",
  },
  {
    name: "Global Spiritual Teaching",
    sub: "Vedanta · Mahayog · Yoga",
    img: "project-global-teaching.png",
    description:
      "Reaching seekers worldwide through teachings in Vedanta, Himalayan Siddha Mahayog, yoga, and meditation. Your support enables retreats, online programmes, and outreach across continents.",
  },
];

const PURPOSES = [
  "Guru Seva",
  "Full Day Ashram Seva",
  "Gau Seva",
  "Hanuman Pūjā",
  "Akhanda Kīrtan",
  "Brahmand Bhojan",
  "108 Hanuman Temple",
  "Ram Mandir",
  "Gurukul",
  "Global Spiritual Teaching",
  "General Ashram Support",
  "Other",
];

const NEPAL_ACCOUNT = {
  bankName: "Nepal SBI Bank Ltd.",
  accountName: "Jagadguru Ramanadacharya Seva Peeth",
  accountNumber: "XXXXXXXXXXXXXXXX",
  branch: "Itahari Branch, Sunsari",
  swiftCode: "NSBINPKA",
};

const INTL_ACCOUNT = {
  bankName: "Nepal SBI Bank Ltd.",
  accountName: "Jagadguru Ramanadacharya Seva Peeth",
  accountNumber: "XXXXXXXXXXXXXXXX",
  swiftCode: "NSBINPKA",
  iban: "—",
  address: "Baharachettra, Sunsari, Nepal",
};

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  return (
    <div className="flex items-center justify-between py-3 border-b border-[#e8dece] last:border-b-0 gap-4">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-[#9a8f84] font-medium mb-0.5">{label}</p>
        <p className="text-base text-[#2e2820] font-medium">{value}</p>
      </div>
      <button
        onClick={copy}
        className="shrink-0 flex items-center gap-1.5 text-xs text-[#b8892a] hover:text-[#9d7422] transition-colors px-3 py-1.5 rounded-full border border-[#e2d0b8] hover:border-[#d4a843] bg-white"
      >
        {copied ? <CheckCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function ReferenceBuilder() {
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState(PURPOSES[0]);
  const [otherText, setOtherText] = useState("");
  const [comments, setComments] = useState("");
  const [copied, setCopied] = useState(false);

  const isOther = purpose === "Other";
  const purposeLabel = isOther ? (otherText.trim() || "") : purpose;
  const isReady = name.trim().length > 0 && (!isOther || otherText.trim().length > 0);

  function buildRef(fallbackName = "[Your Name]", fallbackPurpose?: string) {
    const n = name.trim() || fallbackName;
    const p = purposeLabel || fallbackPurpose || "Please specify";
    const c = comments.trim();
    return c ? `${n} | ${p} | ${c}` : `${n} | ${p}`;
  }

  const displayReference = buildRef(name.trim() ? undefined : "[Your Name]");

  function copy() {
    if (!isReady) return;
    navigator.clipboard.writeText(buildRef()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <div className="bg-white rounded-2xl border border-[#e8dece] shadow-sm p-8 mb-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-full bg-[#b8892a] flex items-center justify-center text-white text-sm font-semibold shrink-0">1</div>
        <div>
          <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2e2820]">Build Your Payment Reference</p>
          <p className="text-sm text-[#9a8f84]">Generate the reference text to paste into your bank transfer</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {/* Name */}
        <div>
          <label className="block text-xs uppercase tracking-[0.2em] text-[#9a8f84] font-medium mb-2">Your Full Name</label>
          <input
            type="text"
            placeholder="e.g. Jane Smith"
            value={name}
            onChange={(e) => { setName(e.target.value); setCopied(false); }}
            className="w-full px-4 py-3 rounded-xl border border-[#e2d0b8] bg-[#faf9f6] text-[#2e2820] text-base placeholder:text-[#b8a898] focus:outline-none focus:border-[#b8892a] focus:ring-2 focus:ring-[#b8892a]/15 transition"
          />
        </div>

        {/* Purpose */}
        <div>
          <label className="block text-xs uppercase tracking-[0.2em] text-[#9a8f84] font-medium mb-2">Purpose of Donation</label>
          <select
            value={purpose}
            onChange={(e) => { setPurpose(e.target.value); setCopied(false); }}
            className="w-full px-4 py-3 rounded-xl border border-[#e2d0b8] bg-[#faf9f6] text-[#2e2820] text-base focus:outline-none focus:border-[#b8892a] focus:ring-2 focus:ring-[#b8892a]/15 transition appearance-none cursor-pointer"
          >
            {PURPOSES.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Other — custom text input */}
      {isOther && (
        <div className="mb-4">
          <label className="block text-xs uppercase tracking-[0.2em] text-[#9a8f84] font-medium mb-2">Please Specify</label>
          <input
            type="text"
            placeholder="e.g. Ashram renovation fund"
            value={otherText}
            onChange={(e) => { setOtherText(e.target.value); setCopied(false); }}
            className="w-full px-4 py-3 rounded-xl border border-[#e2d0b8] bg-[#faf9f6] text-[#2e2820] text-base placeholder:text-[#b8a898] focus:outline-none focus:border-[#b8892a] focus:ring-2 focus:ring-[#b8892a]/15 transition"
          />
        </div>
      )}

      {/* Comments — optional, always visible */}
      <div className="mb-6">
        <label className="block text-xs uppercase tracking-[0.2em] text-[#9a8f84] font-medium mb-2">
          Comments <span className="normal-case tracking-normal text-[#b8a898]">(optional)</span>
        </label>
        <input
          type="text"
          placeholder="e.g. In memory of my grandfather"
          value={comments}
          onChange={(e) => { setComments(e.target.value); setCopied(false); }}
          className="w-full px-4 py-3 rounded-xl border border-[#e2d0b8] bg-[#faf9f6] text-[#2e2820] text-base placeholder:text-[#b8a898] focus:outline-none focus:border-[#b8892a] focus:ring-2 focus:ring-[#b8892a]/15 transition"
        />
      </div>

      {/* Generated reference */}
      <div className="rounded-xl border border-[#e2d0b8] bg-[#fdf6ec] p-4 flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm uppercase tracking-[0.2em] text-[#9a8f84] font-medium mb-1">Your Payment Reference</p>
          <p className={`text-lg font-semibold font-['Cormorant_Garamond'] truncate ${isReady ? "text-[#2e2820]" : "text-[#b8a898] italic"}`}>
            {displayReference}
          </p>
        </div>
        <button
          onClick={copy}
          disabled={!isReady}
          className={`shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
            isReady
              ? copied
                ? "bg-green-600 text-white"
                : "bg-[#b8892a] hover:bg-[#9d7422] text-white shadow-md shadow-[#b8892a]/20"
              : "bg-[#e8dece] text-[#b8a898] cursor-not-allowed"
          }`}
        >
          {copied ? <CheckCheck className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? "Copied!" : "Copy Reference"}
        </button>
      </div>
      {!isReady && (
        <p className="text-xs text-[#b8a898] mt-2 text-center">
          {!name.trim() && isOther && !otherText.trim()
            ? "Enter your name and specify your purpose above"
            : !name.trim()
              ? "Enter your name above to generate and copy your reference"
              : "Please specify your purpose above"}
        </p>
      )}
    </div>
  );
}

export default function Donate() {
  return (
    <div className="bg-[#faf9f6] text-[#3d3830] min-h-screen">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end justify-center overflow-hidden pb-0">
        <img
          src={`${b}images/donate-hero.png`}
          alt="Offering a diya — a lamp of devotion"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* top-to-bottom cream fade for seamless transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/55 via-[#1a0f05]/20 to-[#faf9f6]" />
        {/* bottom-to-mid dark layer so text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/80 via-[#1a0f05]/50 to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#e8c56a]" />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.2" fill="none"/>
            </svg>
            <div className="h-px w-12 bg-[#e8c56a]" />
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light text-white leading-tight mb-4">
            Offer Your Support
          </h1>
          <p className="text-lg text-[#f0e4c8] tracking-widest uppercase font-light">
            Every gift sustains a living place of wisdom &amp; grace
          </p>
        </div>
      </section>

      {/* ── WHY DONATE ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">The Sacred Mission</span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#2e2820] mt-3 mb-8 leading-snug">
            Why Your Gift Matters
          </h2>
          <div className="h-px w-12 bg-[#b8892a]/50 mx-auto mb-8" />
          <p className="text-lg text-[#5a5248] leading-relaxed mb-6">
            Mahayogi Siddhababa Spiritual Academy is a not-for-profit, volunteer-run centre and holds no commercial interests.
          </p>
          <p className="text-lg text-[#5a5248] leading-relaxed">
            Its services — gau seva, prasad distribution, spiritual education, and the welcoming of seekers from every corner of the world — is sustained entirely by the generosity of devotees and well-wishers.
          </p>
          <p className="font-['Cormorant_Garamond'] text-2xl font-light italic text-[#b8892a] mt-10">
            "Your kindness keeps the lamp of service burning."
          </p>
        </div>
      </section>

      {/* ── SEVA OPTIONS ── */}
      <section className="py-16 px-6 bg-[#f5ece0] border-t border-b border-[#e2d0b8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Choose Your Offering</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#2e2820] mt-2">Where Your Gift Goes</h2>
          </div>

          {/* Daily Seva */}
          <p className="text-xs uppercase tracking-[0.25em] text-[#9a8f84] font-medium mb-5">Daily Ashram Seva</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {SEVA_OPTIONS.map((s) => (
              <div
                key={s.name}
                className="flex flex-col rounded-2xl bg-white border border-[#e2d0b8] shadow-sm hover:shadow-md hover:border-[#d4a843]/50 transition-all duration-300 overflow-hidden"
              >
                <div className="overflow-hidden" style={{ height: "160px" }}>
                  <img
                    src={`${b}images/${s.img}`}
                    alt={s.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2e2820] mb-0.5">{s.name}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#b8892a] font-medium mb-3">{s.sub}</p>
                  <p className="text-sm text-[#6a6058] leading-relaxed flex-1">{s.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-[#e2d0b8]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#b8892a]/50" />
            <div className="flex-1 h-px bg-[#e2d0b8]" />
          </div>

          {/* Ongoing Projects */}
          <p className="text-xs uppercase tracking-[0.25em] text-[#9a8f84] font-medium mb-5">Ongoing Projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROJECTS.map((s) => (
              <div
                key={s.name}
                className="flex flex-col rounded-2xl bg-white border border-[#e2d0b8] shadow-sm hover:shadow-md hover:border-[#d4a843]/50 transition-all duration-300 overflow-hidden"
              >
                <div className="overflow-hidden" style={{ height: "160px" }}>
                  <img
                    src={`${b}images/${s.img}`}
                    alt={s.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2e2820] mb-0.5">{s.name}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#b8892a] font-medium mb-3">{s.sub}</p>
                  <p className="text-sm text-[#6a6058] leading-relaxed flex-1">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO DONATE ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Bank Transfer</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#2e2820] mt-2">How to Donate</h2>
            <p className="text-base text-[#6a6058] mt-4 max-w-xl mx-auto leading-relaxed">
              Follow the two steps below — build your reference first, then use the bank details to complete your transfer.
            </p>
          </div>

          {/* Step 1 — Reference Builder */}
          <ReferenceBuilder />

          {/* Step 2 — Bank Details */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-[#b8892a] flex items-center justify-center text-white text-sm font-semibold shrink-0">2</div>
            <div>
              <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2e2820]">Transfer to the Ashram Account</p>
              <p className="text-sm text-[#9a8f84]">Use the bank details below and paste your reference into the payment notes</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Nepal / Domestic */}
            <div className="bg-white rounded-2xl border border-[#e8dece] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#b8892a]/10 flex items-center justify-center shrink-0">
                  <span className="text-sm">🇳🇵</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9a8f84] font-medium">Domestic Transfer</p>
                  <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2e2820]">Nepal</p>
                </div>
              </div>
              <CopyField label="Bank Name" value={NEPAL_ACCOUNT.bankName} />
              <CopyField label="Account Name" value={NEPAL_ACCOUNT.accountName} />
              <CopyField label="Account Number" value={NEPAL_ACCOUNT.accountNumber} />
              <CopyField label="Branch" value={NEPAL_ACCOUNT.branch} />
              <CopyField label="SWIFT / BIC" value={NEPAL_ACCOUNT.swiftCode} />
            </div>

            {/* International */}
            <div className="bg-white rounded-2xl border border-[#e8dece] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#b8892a]/10 flex items-center justify-center shrink-0">
                  <span className="text-sm">🌍</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9a8f84] font-medium">International Wire</p>
                  <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2e2820]">Worldwide</p>
                </div>
              </div>
              <CopyField label="Bank Name" value={INTL_ACCOUNT.bankName} />
              <CopyField label="Account Name" value={INTL_ACCOUNT.accountName} />
              <CopyField label="Account Number" value={INTL_ACCOUNT.accountNumber} />
              <CopyField label="SWIFT / BIC" value={INTL_ACCOUNT.swiftCode} />
              <CopyField label="Bank Address" value={INTL_ACCOUNT.address} />
            </div>

          </div>

          {/* Note */}
          <div className="mt-8 p-5 bg-[#fdf6ec] border border-[#e8d8b8] rounded-2xl text-center">
            <p className="text-sm text-[#5a5248] leading-relaxed">
              For large donations or to receive a receipt, please{" "}
              <Link href="/contact">
                <span className="text-[#b8892a] hover:text-[#9d7422] underline underline-offset-2 cursor-pointer transition-colors">contact us</span>
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── QUOTE / CLOSING ── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${b}images/donate-hero.png`}
            alt=""
            aria-hidden
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1a0f05]/78" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#e8c56a]/60" />
            <Heart className="w-4 h-4 text-[#e8c56a]" strokeWidth={1.5} />
            <div className="h-px w-10 bg-[#e8c56a]/60" />
          </div>
          <p className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-white italic leading-relaxed mb-8">
            "When the hand opens in giving, the heart opens to grace."
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-8 py-3.5 rounded-full tracking-wider transition-colors duration-200 cursor-pointer">
                Get in Touch
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
