import { useState } from "react";
import Nav from "@/components/Nav";
import { ArrowRight, MapPin, Mail, Clock, CheckCircle } from "lucide-react";

const b = import.meta.env.BASE_URL;

const PURPOSES = [
  "Plan a Visit to the Ashram",
  "Enrol in a Course or Programme",
  "Volunteer Enquiry",
  "Meditation Guidance",
  "Retreat Information",
  "Talks & Workshops",
  "Media & Press",
  "General Enquiry",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    purpose: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.purpose) e.purpose = "Please select a purpose.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Please write a short message (at least 10 characters).";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  }

  function handleChange(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  }

  return (
    <div className="bg-[#faf9f6] text-[#3d3830] min-h-screen" style={{ scrollBehavior: "smooth" }}>
      <Nav />

      {/* ── HEADER ── */}
      <section className="relative overflow-hidden py-20 px-6">
        <img
          src={`${b}images/ashram-hero.png`}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/70 via-[#2c1a08]/55 to-[#faf9f6]" />
        <div className="relative z-10 text-center max-w-2xl mx-auto pt-8 pb-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#e8c56a]/80" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#e8c56a" strokeWidth="1.4" fill="none"/>
            </svg>
            <div className="h-px w-10 bg-[#e8c56a]/80" />
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white mb-4 leading-tight">
            Get in Touch
          </h1>
          <p className="text-[#f0e4c8] text-base tracking-widest uppercase font-light">
            We Welcome All Sincere Seekers
          </p>
        </div>
      </section>

      {/* ── INTRO + FORM ── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-start">

          {/* LEFT — Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <span className="uppercase tracking-[0.25em] text-xs text-[#b8892a] font-medium">Reach Out</span>
              <h2 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#3d3830] mt-2 mb-4 leading-snug">
                How Can We Help?
              </h2>
              <p className="text-sm leading-relaxed text-[#5a5248]">
                Whether you are planning a visit, exploring our programmes, or simply seeking guidance on the spiritual path, we would be glad to hear from you. Our team — a dedicated group of volunteers — will respond as soon as they can.
              </p>
            </div>

            <div className="h-px bg-[#e8dece]" />

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-9 h-9 rounded-full bg-[#fdf6ec] border border-[#e8c56a]/50 flex items-center justify-center mt-0.5">
                  <MapPin className="w-4 h-4 text-[#b8892a]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#b8892a] font-medium mb-1">Address</p>
                  <p className="text-sm text-[#5a5248] leading-relaxed">
                    Shree Ram Tarak Brahma Peeth<br />
                    Chataradham, Barahachetra<br />
                    Sunsari, Nepal
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-9 h-9 rounded-full bg-[#fdf6ec] border border-[#e8c56a]/50 flex items-center justify-center mt-0.5">
                  <Mail className="w-4 h-4 text-[#b8892a]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#b8892a] font-medium mb-1">Email</p>
                  <a href="mailto:info@mahayogisiddhababa.org" className="text-sm text-[#5a5248] hover:text-[#b8892a] transition-colors">
                    info@mahayogisiddhababa.org
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-9 h-9 rounded-full bg-[#fdf6ec] border border-[#e8c56a]/50 flex items-center justify-center mt-0.5">
                  <Clock className="w-4 h-4 text-[#b8892a]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#b8892a] font-medium mb-1">Response Time</p>
                  <p className="text-sm text-[#5a5248]">
                    We aim to respond within 3–5 working days. The Academy is run entirely by volunteers.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-[#e8dece]" />

            <div className="bg-[#fdf6ec] rounded-2xl border border-[#e8d5b0] p-6">
              <p className="font-['Cormorant_Garamond'] text-xl font-light text-[#3d3830] leading-relaxed italic">
                "The door of the Ashram is open to all who come with sincerity and an open heart."
              </p>
              <p className="text-xs text-[#b8892a] mt-3 uppercase tracking-widest font-medium">Jagadguru Mahayogi Siddhababa</p>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-white rounded-2xl border border-[#e8dece] shadow-sm">
                <div className="w-16 h-16 rounded-full bg-[#fdf6ec] border border-[#e8c56a]/60 flex items-center justify-center mb-5">
                  <CheckCircle className="w-7 h-7 text-[#b8892a]" strokeWidth={1.5} />
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#3d3830] mb-3">
                  Thank You, {form.name.split(" ")[0]}
                </h3>
                <p className="text-sm text-[#5a5248] leading-relaxed max-w-sm">
                  Your message has been received. A member of our team will be in touch with you soon. We appreciate your interest in the Academy.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", purpose: "", message: "" }); }}
                  className="mt-8 text-sm text-[#b8892a] hover:text-[#9d7422] transition-colors underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-2xl border border-[#e8dece] shadow-sm p-8 md:p-10 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#7a7068] font-medium mb-2">
                      Full Name <span className="text-[#b8892a]">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 text-sm rounded-xl border bg-[#faf9f6] text-[#3d3830] placeholder-[#b8ad9e] outline-none transition-colors duration-200 focus:border-[#b8892a] focus:bg-white ${errors.name ? "border-red-300" : "border-[#e8dece]"}`}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#7a7068] font-medium mb-2">
                      Email Address <span className="text-[#b8892a]">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="you@email.com"
                      className={`w-full px-4 py-3 text-sm rounded-xl border bg-[#faf9f6] text-[#3d3830] placeholder-[#b8ad9e] outline-none transition-colors duration-200 focus:border-[#b8892a] focus:bg-white ${errors.email ? "border-red-300" : "border-[#e8dece]"}`}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                {/* Purpose */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#7a7068] font-medium mb-2">
                    Purpose of Enquiry <span className="text-[#b8892a]">*</span>
                  </label>
                  <select
                    value={form.purpose}
                    onChange={(e) => handleChange("purpose", e.target.value)}
                    className={`w-full px-4 py-3 text-sm rounded-xl border bg-[#faf9f6] text-[#3d3830] outline-none transition-colors duration-200 focus:border-[#b8892a] focus:bg-white appearance-none cursor-pointer ${!form.purpose ? "text-[#b8ad9e]" : ""} ${errors.purpose ? "border-red-300" : "border-[#e8dece]"}`}
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23b8892a' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                  >
                    <option value="" disabled>Select a purpose…</option>
                    {PURPOSES.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  {errors.purpose && <p className="mt-1.5 text-xs text-red-500">{errors.purpose}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#7a7068] font-medium mb-2">
                    Your Message <span className="text-[#b8892a]">*</span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={6}
                    placeholder="Share what brings you here — we would love to hear from you…"
                    className={`w-full px-4 py-3 text-sm rounded-xl border bg-[#faf9f6] text-[#3d3830] placeholder-[#b8ad9e] outline-none transition-colors duration-200 focus:border-[#b8892a] focus:bg-white resize-none ${errors.message ? "border-red-300" : "border-[#e8dece]"}`}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                </div>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-[#9a8f84] leading-relaxed max-w-xs">
                    All fields marked <span className="text-[#b8892a]">*</span> are required. Your details are kept private.
                  </p>
                  <button
                    type="submit"
                    className="shrink-0 inline-flex items-center gap-2 bg-[#b8892a] hover:bg-[#9d7422] text-white text-sm px-7 py-3 rounded-full tracking-wider transition-colors duration-200"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6 border-t border-[#e8dece] bg-[#f5ede0] mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-['Cormorant_Garamond'] text-lg font-medium text-[#b8892a]">
            Mahayogi Siddhababa Spiritual Academy
          </span>
          <p className="text-xs text-[#9a8f84]">A not-for-profit, volunteer-run organization — Nepal</p>
        </div>
      </footer>
    </div>
  );
}
