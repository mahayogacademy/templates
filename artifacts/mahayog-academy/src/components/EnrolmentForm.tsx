import { useState, useRef, useEffect } from "react";

type Program = "vedanta" | "meditation";

function CountryCombobox({ value, onChange, selectClass, inputClass }: {
  value: string; onChange: (v: string) => void; selectClass: string; inputClass: string;
}) {
  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const filtered = query.trim()
    ? COUNTRIES.filter(c => c.toLowerCase().startsWith(query.toLowerCase())).slice(0, 8)
    : [];

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function select(country: string) {
    onChange(country);
    setQuery(country);
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <input
        className={inputClass}
        placeholder="Type to search country…"
        value={query}
        onFocus={() => setOpen(true)}
        onChange={e => { setQuery(e.target.value); onChange(""); setOpen(true); }}
        autoComplete="off"
      />
      {open && filtered.length > 0 && (
        <ul className="absolute z-50 w-full bg-white border border-[#c8a050]/40 rounded-xl shadow-lg mt-1 overflow-auto max-h-52">
          {filtered.map(c => (
            <li
              key={c}
              onMouseDown={() => select(c)}
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-[#b8892a]/10 text-[#3d2008] ${c === value ? "font-medium text-[#7a4a08]" : ""}`}
            >
              {c}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const NEPAL_CENTERS_LIST = [
  { id: "kathmandu", name: "Kathmandu Center",    loc: "Nanakmath, Balaju" },
  { id: "chitwan",   name: "Chitwan Center",      loc: "Bharatpur, Chitwan" },
  { id: "pokhara",   name: "Pokhara Center",      loc: "Nadipur, Pokhara" },
  { id: "surkhet",   name: "Surkhet Center",      loc: "Ganesh Chowk, Surkhet" },
  { id: "chatara",   name: "Chatara Guru Ashram", loc: "Hanuman Mandir, Chatara" },
];

const INTL_CENTERS_LIST = [
  { id: "canada",    name: "Canada Center",      loc: "" },
  { id: "uk",        name: "UK Center",           loc: "" },
  { id: "usa",       name: "USA Center",          loc: "" },
  { id: "australia", name: "Australia Center",    loc: "" },
];

const GOAL_OPTIONS = ["Stress reduction", "Mental clarity", "Spiritual growth", "Emotional healing"];
const LANGUAGE_OPTIONS = ["English", "Nepali", "Hindi"];

const NEPAL_CENTER_IDS = new Set(["chitwan", "pokhara", "surkhet", "kathmandu", "chatara"]);

const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan",
  "Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi",
  "Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo (DRC)","Congo (Republic)","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic",
  "Denmark","Djibouti","Dominica","Dominican Republic",
  "Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia",
  "Fiji","Finland","France",
  "Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana",
  "Haiti","Honduras","Hungary",
  "Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
  "Jamaica","Japan","Jordan",
  "Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan",
  "Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
  "Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar",
  "Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway",
  "Oman",
  "Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
  "Qatar",
  "Romania","Russia","Rwanda",
  "Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","São Tomé and Príncipe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria",
  "Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu",
  "Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan",
  "Vanuatu","Vatican City","Venezuela","Vietnam",
  "Yemen",
  "Zambia","Zimbabwe",
];

function getFirstSaturdayOfMonth(year: number, month: number): Date {
  const d = new Date(year, month, 1);
  const daysUntilSat = (6 - d.getDay() + 7) % 7;
  return new Date(year, month, 1 + daysUntilSat);
}

function getUpcomingWorkshops(count = 3) {
  const now = new Date();
  return Array.from({ length: count }, (_, i) => {
    const target = new Date(now.getFullYear(), now.getMonth() + i + 1, 1);
    const start = getFirstSaturdayOfMonth(target.getFullYear(), target.getMonth());
    const end = new Date(start);
    end.setDate(start.getDate() + 4);
    const fmtDay = (d: Date) => d.toLocaleString("en-GB", { weekday: "short" });
    const fmtDate = (d: Date) => d.toLocaleString("en-GB", { day: "numeric", month: "long" });
    const year = start.getFullYear();
    return {
      key: `${year}-${start.getMonth() + 1}`,
      label: `${fmtDay(start)} ${fmtDate(start)} – ${fmtDay(end)} ${fmtDate(end)} ${year}`,
    };
  });
}

const VEDANTA_STEPS = [
  { num: 1, label: "Personal",   slot: "personal" },
  { num: 2, label: "Education",  slot: "v-education" },
  { num: 3, label: "Center",     slot: "center" },
  { num: 4, label: "Reference",  slot: "reference" },
  { num: 5, label: "Login",      slot: "login" },
];

const MEDITATION_STEPS = [
  { num: 1, label: "Personal",    slot: "personal" },
  { num: 2, label: "Experience",  slot: "m-experience" },
  { num: 3, label: "Health",      slot: "m-health" },
  { num: 4, label: "Center",      slot: "center" },
  { num: 5, label: "Workshop",    slot: "m-workshop" },
  { num: 6, label: "Reference",   slot: "reference" },
  { num: 7, label: "Login",       slot: "login" },
];

const ic = "w-full bg-white/70 border border-[#c8a050]/40 text-[#3d3830] placeholder-[#b0956a] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#b8892a] transition-colors";
const sc = `${ic} appearance-none`;
const lc = "block font-['Cormorant_Garamond'] text-base font-semibold text-[#7a4a08] mb-2 leading-snug";
const plc = "block text-[10px] uppercase tracking-[0.2em] text-[#7a4a08] mb-1.5 font-medium";
const hc = "font-['Cormorant_Garamond'] text-xl font-light text-[#3d2008] mb-2";
const hint = "text-xs text-[#7a5a30]";

export default function EnrolmentForm({ program }: { program: Program }) {
  const STEPS = program === "vedanta" ? VEDANTA_STEPS : MEDITATION_STEPS;
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setFormState] = useState({
    firstName: "", lastName: "", gender: "", dob: "", mobile: "", placeOfBirth: "",
    education: "", educationMajor: "", profession: "",
    occupation: "",
    meditatedBefore: "", meditationTypes: "",
    goals: [] as string[], goalsOther: "",
    hasInjuries: "", injuriesDesc: "", instructorAwareness: "",
    country: "", center: "", workshopDate: "", languages: [] as string[], languagesOther: "",
    refererName: "", refererRelation: "", refererMobile: "",
    email: "", password: "",
  });

  const set = (k: string, v: string) => setFormState(f => ({ ...f, [k]: v }));
  const toggleGoal = (g: string) => setFormState(f => ({
    ...f,
    goals: f.goals.includes(g) ? f.goals.filter(x => x !== g) : [...f.goals, g],
  }));
  const toggleLanguage = (l: string) => setFormState(f => ({
    ...f,
    languages: f.languages.includes(l) ? f.languages.filter(x => x !== l) : [...f.languages, l],
  }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const slot = STEPS[step - 1]?.slot;

  if (submitted) {
    return (
      <div className="max-w-md mx-auto text-center bg-white border border-[#b8892a]/30 rounded-2xl p-10 shadow-sm">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-10 bg-[#b8892a]" />
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#b8892a" strokeWidth="1.2" fill="none"/>
          </svg>
          <div className="h-px w-10 bg-[#b8892a]" />
        </div>
        <p className="font-['Cormorant_Garamond'] text-2xl font-light text-[#3d3830]">Registration Submitted</p>
        <p className="text-sm text-[#7a7068] mt-3">Your registration has been received. We will be in touch soon with your access details.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">

      {/* Step progress bar */}
      <div className="flex items-center mb-10">
        {STEPS.map((s, i) => (
          <div key={s.num} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors duration-200 ${
                step > s.num ? "bg-[#2e1405] text-white" : step === s.num ? "bg-[#2e1405] text-white ring-2 ring-[#2e1405]/30" : "bg-white text-[#a09080] border border-[#ddd0b8]"
              }`}>
                {step > s.num ? "✓" : s.num}
              </div>
              <span className={`text-[9px] uppercase tracking-wider hidden sm:block ${step === s.num ? "text-[#2e1405]" : "text-[#5a3010]"}`}>{s.label}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-px mx-1 mb-4 transition-colors duration-200 ${step > s.num ? "bg-[#7a4a08]" : "bg-[#2e1405]/25"}`} />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-[#fdf6ec]/90 backdrop-blur-sm border border-[#c8a050]/30 rounded-2xl p-7 space-y-5">

          {/* ── SHARED: Personal ── */}
          {slot === "personal" && <>
            <p className={hc}>Personal Details</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={plc}>First Name *</label>
                <input required className={ic} value={form.firstName} onChange={e => set("firstName", e.target.value)} />
              </div>
              <div>
                <label className={plc}>Last Name *</label>
                <input required className={ic} value={form.lastName} onChange={e => set("lastName", e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={plc}>Gender *</label>
                <select required className={sc} value={form.gender} onChange={e => set("gender", e.target.value)}>
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className={plc}>Date of Birth *</label>
                <input required type="date" className={ic} value={form.dob} onChange={e => set("dob", e.target.value)} />
              </div>
            </div>
            <div>
              <label className={plc}>Mobile Number *</label>
              <input required className={ic} placeholder="+1 555 000 0000" value={form.mobile} onChange={e => set("mobile", e.target.value)} />
            </div>
            {program === "meditation" && (
              <div>
                <label className={plc}>Occupation</label>
                <input className={ic} placeholder="e.g. Teacher, Engineer, Student…" value={form.occupation} onChange={e => set("occupation", e.target.value)} />
              </div>
            )}
            <div>
              <label className={plc}>Country You Live In</label>
              <CountryCombobox value={form.country} onChange={v => set("country", v)} selectClass={sc} inputClass={ic} />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <label className={plc}>Languages Spoken</label>
                <span className="text-[11px] text-[#a07840] italic">Select all that apply</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                {LANGUAGE_OPTIONS.map(l => (
                  <label key={l} className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-xl border transition-colors ${
                    form.languages.includes(l) ? "border-[#b8892a] bg-[#b8892a]/10" : "border-[#c8a050]/40 bg-white/40 hover:border-[#b8892a]/50"
                  }`}>
                    <input type="checkbox" checked={form.languages.includes(l)} onChange={() => toggleLanguage(l)} className="accent-[#b8892a] w-4 h-4 shrink-0" />
                    <span className="text-sm text-[#3d2008]">{l}</span>
                  </label>
                ))}
                <label className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-xl border transition-colors ${
                  form.languages.includes("Other") ? "border-[#b8892a] bg-[#b8892a]/10" : "border-[#c8a050]/40 bg-white/40 hover:border-[#b8892a]/50"
                }`}>
                  <input type="checkbox" checked={form.languages.includes("Other")} onChange={() => toggleLanguage("Other")} className="accent-[#b8892a] w-4 h-4 shrink-0" />
                  <span className="text-sm text-[#3d2008]">Other</span>
                </label>
              </div>
              {form.languages.includes("Other") && (
                <input className={`${ic} mt-2`} placeholder="Please specify… e.g. Swahili, Bengali" value={form.languagesOther} onChange={e => set("languagesOther", e.target.value)} />
              )}
            </div>
          </>}

          {/* ── VEDANTA: Education & Background ── */}
          {slot === "v-education" && <>
            <p className={hc}>Education & Background</p>
            <div>
              <label className={lc}>Highest Education *</label>
              <select required className={sc} value={form.education} onChange={e => set("education", e.target.value)}>
                <option value="">Select level</option>
                {["None","Primary","Secondary (1–10 Class)","Higher Secondary (11–12 Class)","Bachelor","Masters","PhD"].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className={lc}>Education Major</label>
              <input className={ic} placeholder="e.g. Philosophy, Engineering…" value={form.educationMajor} onChange={e => set("educationMajor", e.target.value)} />
              <p className={`${hint} mt-1`}>Please be as specific as possible.</p>
            </div>
            <div>
              <label className={lc}>Occupation</label>
              <input className={ic} placeholder="e.g. Teacher, Engineer, Student…" value={form.profession} onChange={e => set("profession", e.target.value)} />
            </div>
          </>}

          {/* ── MEDITATION: Experience & Goals ── */}
          {slot === "m-experience" && <>
            <p className={hc}>Meditation Experience & Goals</p>
            <div>
              <label className={lc}>Have you practiced meditation before? *</label>
              <div className="flex gap-6 mt-2">
                {["Yes", "No"].map(v => (
                  <label key={v} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" required name="meditatedBefore" value={v} checked={form.meditatedBefore === v} onChange={() => set("meditatedBefore", v)} className="accent-[#b8892a] w-4 h-4" />
                    <span className="text-sm text-[#3d2008]">{v}</span>
                  </label>
                ))}
              </div>
            </div>
            {form.meditatedBefore === "Yes" && (
              <div>
                <label className={lc}>Which traditions have you practiced? <span className="normal-case tracking-normal font-normal text-[#7a5a30]">(Optional)</span></label>
                <textarea rows={2} className={`${ic} resize-none`} placeholder="e.g. Vipassana, Zen, Transcendental Meditation…" value={form.meditationTypes} onChange={e => set("meditationTypes", e.target.value)} />
              </div>
            )}
            <div>
              <label className={lc}>Goals for joining</label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {GOAL_OPTIONS.map(g => (
                  <label key={g} className={`flex items-center gap-2.5 cursor-pointer px-3 py-2.5 rounded-xl border transition-colors ${
                    form.goals.includes(g) ? "border-[#b8892a] bg-[#b8892a]/10" : "border-[#c8a050]/40 bg-white/40 hover:border-[#b8892a]/50"
                  }`}>
                    <input type="checkbox" checked={form.goals.includes(g)} onChange={() => toggleGoal(g)} className="accent-[#b8892a] w-4 h-4 shrink-0" />
                    <span className="text-sm text-[#3d2008]">{g}</span>
                  </label>
                ))}
              </div>
              <div className="mt-3">
                <label className={lc}>Other</label>
                <input className={ic} placeholder="Please describe…" value={form.goalsOther} onChange={e => set("goalsOther", e.target.value)} />
              </div>
            </div>
          </>}

          {/* ── MEDITATION: Health Information ── */}
          {slot === "m-health" && <>
            <p className={hc}>Voluntary Health Information</p>
            <div>
              <label className="block font-['Cormorant_Garamond'] text-base font-semibold text-[#7a4a08] mb-2 leading-snug">Do you have any injuries or limitations that may affect sitting, movement, or breathwork? *</label>
              <div className="flex gap-6 mt-2">
                {["Yes", "No"].map(v => (
                  <label key={v} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" required name="hasInjuries" value={v} checked={form.hasInjuries === v} onChange={() => set("hasInjuries", v)} className="accent-[#b8892a] w-4 h-4" />
                    <span className="text-sm text-[#3d2008]">{v}</span>
                  </label>
                ))}
              </div>
            </div>
            {form.hasInjuries === "Yes" && (
              <div>
                <label className={lc}>Please describe</label>
                <textarea rows={2} className={`${ic} resize-none`} value={form.injuriesDesc} onChange={e => set("injuriesDesc", e.target.value)} />
              </div>
            )}
            <div>
              <label className="block font-['Cormorant_Garamond'] text-base font-semibold text-[#7a4a08] mb-2 leading-snug">Is there anything about your physical or mental well-being the instructor should be aware of?</label>
              <textarea rows={3} className={`${ic} resize-none`} placeholder="This helps the instructor better support your practice…" value={form.instructorAwareness} onChange={e => set("instructorAwareness", e.target.value)} />
            </div>
            <div className="bg-[#f5ece0]/70 border border-[#c8a050]/20 rounded-xl p-4 space-y-2.5">
              <p className="text-[11px] text-[#7a5a30] leading-relaxed">
                This information is shared voluntarily and will only be used to support your comfort and safety during meditation sessions.
              </p>
              <p className="text-[11px] text-[#7a5a30] leading-relaxed">
                The practices shared in this programme are intended to support general well-being and inner growth. They are not a substitute for medical or psychological care and are not intended to diagnose, treat, or cure any condition. If you have health concerns, we encourage you to seek guidance from a qualified healthcare professional. By participating, you acknowledge that you do so voluntarily and assume responsibility for your own health and well-being.
              </p>
            </div>
          </>}

          {/* ── SHARED: Center ── */}
          {slot === "center" && <>
            <p className={hc}>Preferred Center</p>
            <p className={`${hint} mb-4`}>Select the center closest to you.</p>
            <div className="space-y-4">
              {[{ label: "Nepal", list: NEPAL_CENTERS_LIST }, { label: "International", list: INTL_CENTERS_LIST }].map(group => (
                <div key={group.label}>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#b8892a] font-medium mb-2">{group.label}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {group.list.map(c => (
                      <button
                        type="button"
                        key={c.id}
                        onClick={() => set("center", c.id)}
                        className={`text-left px-4 py-3 rounded-xl border transition-colors duration-150 ${
                          form.center === c.id
                            ? "border-[#b8892a] bg-[#b8892a]/10"
                            : "border-[#c8a050]/40 bg-white/50 hover:border-[#b8892a]/60"
                        }`}
                      >
                        <p className={`text-sm font-medium ${form.center === c.id ? "text-[#7a4a08]" : "text-[#3d2008]"}`}>{c.name}</p>
                        {c.loc && <p className="text-[11px] text-[#7a5a30] mt-0.5">{c.loc}</p>}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>}

          {/* ── MEDITATION: Workshop Dates ── */}
          {slot === "m-workshop" && (() => {
            const isNepal = NEPAL_CENTER_IDS.has(form.center);
            const workshops = getUpcomingWorkshops(3);
            return <>
              <p className={hc}>Workshop Dates</p>
              <p className={`${hint} mb-1`}>
                {isNepal
                  ? "5-day in-person workshops begin on the first Saturday of each month at your chosen center. Select your preferred intake below."
                  : "5-day online workshops begin on the first Saturday of each month. Select your preferred intake below."}
              </p>

              <div className="flex flex-col gap-3 mt-3">
                {workshops.map(w => (
                  <button
                    type="button"
                    key={w.key}
                    onClick={() => set("workshopDate", w.key)}
                    className={`text-left px-5 py-4 rounded-xl border transition-colors duration-150 flex items-center justify-between ${
                      form.workshopDate === w.key
                        ? "border-[#b8892a] bg-[#b8892a]/10"
                        : "border-[#c8a050]/40 bg-white/50 hover:border-[#b8892a]/60"
                    }`}
                  >
                    <div>
                      <p className={`font-['Cormorant_Garamond'] text-base font-semibold ${form.workshopDate === w.key ? "text-[#7a4a08]" : "text-[#3d2008]"}`}>{w.label}</p>
                      <p className="text-[11px] text-[#7a5a30] mt-0.5">{isNepal ? "In Person · 5 Days" : "Online · 5 Days"}</p>
                    </div>
                    {form.workshopDate === w.key && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#b8892a" strokeWidth="1.5" fill="#b8892a" fillOpacity="0.3"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>

              <div className="bg-[#fdf6ec] border border-[#c8a050]/40 rounded-xl overflow-hidden mt-1">
                <div className="bg-[#b8892a]/10 border-b border-[#c8a050]/30 px-4 py-3 flex gap-2.5 items-start">
                  <span className="text-[#b8892a] text-xs mt-0.5 shrink-0">◆</span>
                  <p className="text-xs font-semibold text-[#5a3005] leading-relaxed">
                    Full attendance across all 5 days is required for completion of the meditation program and to receive initiation.
                  </p>
                </div>
                <div className="px-4 py-3 space-y-2">
                  {isNepal ? <>
                    <p className="text-xs text-[#5a3c10] leading-relaxed">
                      There is no fixed fee for initiation. Donations (<span className="font-semibold">Guru dakshina</span>) are welcome.
                    </p>
                    <p className="text-xs text-[#5a3c10] leading-relaxed">
                      A <span className="font-semibold">physical registration form</span> is also available at your center for those who prefer not to register online.
                    </p>
                  </> : (
                    <p className="text-xs text-[#5a3c10] leading-relaxed">
                      A <span className="font-semibold">Zoom link</span> will be shared with you by email before the workshop begins. There is no fixed fee for initiation. Donations (<span className="font-semibold">Guru dakshina</span>) are welcome.
                    </p>
                  )}
                </div>
              </div>
            </>;
          })()}

          {/* ── SHARED: Reference ── */}
          {slot === "reference" && <>
            <p className={hc}>Reference <span className="text-sm text-[#7a5a30] font-sans font-normal">(Optional)</span></p>
            <p className={`${hint} mb-4`}>If someone referred you, please share their details.</p>
            <div>
              <label className={lc}>Referrer's Name</label>
              <input className={ic} value={form.refererName} onChange={e => set("refererName", e.target.value)} />
            </div>
            <div>
              <label className={lc}>Relation to Referrer</label>
              <input className={ic} placeholder="e.g. Friend, Sister…" value={form.refererRelation} onChange={e => set("refererRelation", e.target.value)} />
            </div>
            <div>
              <label className={lc}>Referrer's Mobile</label>
              <input className={ic} value={form.refererMobile} onChange={e => set("refererMobile", e.target.value)} />
            </div>
          </>}

          {/* ── SHARED: Login ── */}
          {slot === "login" && <>
            <p className={hc}>Login Details</p>
            <p className={`${hint} mb-1`}>These credentials give you access to your student portal. Please save them carefully.</p>
            <div>
              <label className={lc}>Email Address *</label>
              <input required type="email" className={ic} value={form.email} onChange={e => set("email", e.target.value)} />
            </div>
            <div>
              <label className={lc}>Password *</label>
              <input required type="password" className={ic} placeholder="Minimum 8 characters" minLength={8} value={form.password} onChange={e => set("password", e.target.value)} />
            </div>
          </>}

        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(s => s - 1)}
              className="px-6 py-3 rounded-full border border-[#c8a050]/50 text-[#7a4a08] text-sm hover:border-[#b8892a] transition-colors bg-white/40"
            >
              ← Back
            </button>
          ) : <div />}

          {step < STEPS.length ? (
            <button
              type="button"
              onClick={() => setStep(s => s + 1)}
              className="px-8 py-3 rounded-full bg-[#2e1405] hover:bg-[#1a0c03] text-white text-sm tracking-wider transition-colors"
            >
              Continue →
            </button>
          ) : (
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-[#2e1405] hover:bg-[#1a0c03] text-white text-sm tracking-wider transition-colors font-medium"
            >
              Complete Registration
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
