import { useState } from "react";

type Program = "vedanta" | "meditation";

const CENTERS = [
  { id: "canada",    name: "Canada Center",      loc: "" },
  { id: "uk",        name: "UK Center",           loc: "" },
  { id: "chitwan",   name: "Chitwan Center",      loc: "Bharatpur, Chitwan" },
  { id: "pokhara",   name: "Pokhara Center",      loc: "Nadipur, Pokhara" },
  { id: "surkhet",   name: "Surkhet Center",      loc: "Ganesh Chowk, Surkhet" },
  { id: "kathmandu", name: "Kathmandu Center",    loc: "Nanakmath, Balaju" },
  { id: "chatara",   name: "Chatara Main Center", loc: "Hanuman Mandir, Chatara" },
  { id: "usa",       name: "USA Center",          loc: "Texas" },
  { id: "australia", name: "Australia Center",    loc: "Sydney" },
];

const GOAL_OPTIONS = ["Stress reduction", "Mental clarity", "Spiritual growth", "Emotional healing"];

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
  { num: 5, label: "Reference",   slot: "reference" },
  { num: 6, label: "Login",       slot: "login" },
];

const ic = "w-full bg-white/70 border border-[#c8a050]/40 text-[#3d3830] placeholder-[#b0956a] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#b8892a] transition-colors";
const sc = `${ic} appearance-none`;
const lc = "block text-[10px] uppercase tracking-[0.2em] text-[#7a4a08] mb-1.5 font-medium";
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
    center: "",
    refererName: "", refererRelation: "", refererMobile: "",
    email: "", password: "",
  });

  const set = (k: string, v: string) => setFormState(f => ({ ...f, [k]: v }));
  const toggleGoal = (g: string) => setFormState(f => ({
    ...f,
    goals: f.goals.includes(g) ? f.goals.filter(x => x !== g) : [...f.goals, g],
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
                <label className={lc}>First Name *</label>
                <input required className={ic} value={form.firstName} onChange={e => set("firstName", e.target.value)} />
              </div>
              <div>
                <label className={lc}>Last Name *</label>
                <input required className={ic} value={form.lastName} onChange={e => set("lastName", e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={lc}>Gender *</label>
                <select required className={sc} value={form.gender} onChange={e => set("gender", e.target.value)}>
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className={lc}>Date of Birth *</label>
                <input required type="date" className={ic} value={form.dob} onChange={e => set("dob", e.target.value)} />
              </div>
            </div>
            <div>
              <label className={lc}>Mobile Number *</label>
              <input required className={ic} placeholder="+1 555 000 0000" value={form.mobile} onChange={e => set("mobile", e.target.value)} />
            </div>
            <div>
              <label className={lc}>Place of Birth</label>
              <input className={ic} value={form.placeOfBirth} onChange={e => set("placeOfBirth", e.target.value)} />
            </div>
            {program === "meditation" && (
              <div>
                <label className={lc}>Occupation</label>
                <input className={ic} placeholder="e.g. Teacher, Engineer, Student…" value={form.occupation} onChange={e => set("occupation", e.target.value)} />
              </div>
            )}
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
              <label className={lc}>Profession</label>
              <input className={ic} value={form.profession} onChange={e => set("profession", e.target.value)} />
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
            <p className={hc}>Health Information <span className="text-sm text-[#7a5a30] font-sans font-normal">(Voluntary)</span></p>
            <div>
              <label className="block text-sm text-[#7a4a08] font-medium mb-2 leading-snug">Do you have any injuries or limitations that may affect sitting, movement, or breathwork? *</label>
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
              <label className="block text-sm text-[#7a4a08] font-medium mb-2 leading-snug">Is there anything about your physical or mental well-being the instructor should be aware of?</label>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CENTERS.map(c => (
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
          </>}

          {/* ── SHARED: Reference ── */}
          {slot === "reference" && <>
            <p className={hc}>Reference <span className="text-sm text-[#7a5a30] font-sans font-normal">(Optional)</span></p>
            <p className={`${hint} mb-1`}>If someone referred you, please share their details.</p>
            <div>
              <label className={lc}>Referrer's Name</label>
              <input className={ic} value={form.refererName} onChange={e => set("refererName", e.target.value)} />
            </div>
            <div>
              <label className={lc}>Relation to Referrer</label>
              <input className={ic} placeholder="e.g. Friend, Guru, Family…" value={form.refererRelation} onChange={e => set("refererRelation", e.target.value)} />
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
