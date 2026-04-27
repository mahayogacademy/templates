import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-7 right-7 z-50 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#faf9f6]/90 border border-[#d4b896] text-[#b8892a] text-xs tracking-wider backdrop-blur-sm shadow-sm hover:bg-white hover:border-[#b8892a] transition-all duration-200"
    >
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
      Top
    </button>
  );
}
