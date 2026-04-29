import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function FloatingRegisterButton({ label = "Register", href = "/register" }: { label?: string; href?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href={href}
      aria-label="Go to registration form"
      className={`fixed bottom-[72px] right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-[#2e1405] text-white text-sm font-medium shadow-lg shadow-[#2e1405]/30 hover:bg-[#1a0c03] transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path d="M12 2C12 2 15 9 22 12C22 12 15 15 12 22C12 22 9 15 2 12C2 12 9 9 12 2Z" stroke="#b8892a" strokeWidth="1.5" fill="none"/>
      </svg>
      {label}
    </Link>
  );
}
