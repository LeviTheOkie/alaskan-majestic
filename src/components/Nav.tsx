"use client";

import { useEffect, useState } from "react";
import { Anchor, Phone, Menu, X } from "lucide-react";

const BOOK_URL = "https://alaskanmajesticfishing.com";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Trips", "Gallery", "About", "FAQ", "Contact"];

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={
          scrolled
            ? {
                backgroundColor: "rgba(3,11,20,0.96)",
                backdropFilter: "blur(16px)",
                borderBottom: "1px solid #0F2A47",
                boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
              }
            : { backgroundColor: "transparent" }
        }
      >
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ backgroundColor: "#C4952A" }}
            >
              <Anchor className="h-5 w-5" style={{ color: "#030B14" }} />
            </div>
            <div>
              <div className="font-display font-bold text-base leading-tight" style={{ color: "#F0F6FF" }}>
                Alaskan Majestic
              </div>
              <div className="text-[10px] uppercase tracking-widest" style={{ color: "#6B8BA8" }}>
                Fishing Charters · Homer, AK
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm font-medium transition-colors hover:text-[#C4952A]"
                style={{ color: "#6B8BA8" }}
              >
                {l}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+19077417408"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#C4952A]"
              style={{ color: "#6B8BA8" }}
            >
              <Phone className="h-3.5 w-3.5" />
              (907) 741-7408
            </a>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 animate-shimmer"
              style={{ backgroundColor: "#C4952A", color: "#030B14" }}
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            style={{ color: "#F0F6FF" }}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-20 pb-10 px-6 gap-6"
          style={{ backgroundColor: "rgba(3,11,20,0.98)", backdropFilter: "blur(16px)" }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-bold border-b pb-4 transition-colors hover:text-[#C4952A]"
              style={{ color: "#F0F6FF", borderColor: "#0F2A47" }}
            >
              {l}
            </a>
          ))}
          <a
            href="tel:+19077417408"
            className="flex items-center gap-2 font-medium mt-4"
            style={{ color: "#C4952A" }}
          >
            <Phone className="h-4 w-4" />
            (907) 741-7408
          </a>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center py-4 rounded-full font-bold text-lg mt-2"
            style={{ backgroundColor: "#C4952A", color: "#030B14" }}
          >
            Book Your Charter
          </a>
        </div>
      )}
    </>
  );
}
