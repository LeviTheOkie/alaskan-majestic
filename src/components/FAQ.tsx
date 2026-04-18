"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What's included in the charter?",
    a: "Everything you need to fish: all rods, reels, tackle, bait, and fishing licenses. We also include fish cleaning and bagging at the end of your trip. Just bring yourself, your layers, and your appetite for adventure.",
  },
  {
    q: "What should I wear and bring?",
    a: "Alaska weather is unpredictable — layers are non-negotiable. Bring a waterproof outer layer, warm base layers, and rubber-soled shoes with grip. Sunscreen, sunglasses, seasickness medication (if prone), snacks, and plenty of water. We recommend leaving valuables at home.",
  },
  {
    q: "How far in advance should I book?",
    a: "As early as possible. Peak halibut season (May–August) fills up fast — often weeks or months out. If you have specific dates in mind, lock them in the moment you decide. We hate turning people away.",
  },
  {
    q: "Is this good for beginners?",
    a: "Absolutely. We welcome first-timers and seasoned anglers alike. Your captain will walk you through everything — casting, setting the hook, reeling in the big ones. The fish don't care if it's your first time.",
  },
  {
    q: "What happens to my fish after the trip?",
    a: "We clean and bag your catch on board. From there, Homer has excellent local fish processing facilities that can vacuum-seal and flash-freeze your haul for travel. You can bring your Alaska catch home anywhere in the world.",
  },
  {
    q: "What if I get seasick?",
    a: "It happens, and there's no shame in it. We recommend taking non-drowsy seasickness medication the night before and morning of your trip. Keep your eyes on the horizon and stay hydrated. Our captain has seen it all and will take care of you.",
  },
  {
    q: "Do you offer military or veteran discounts?",
    a: "Yes — active service members, veterans, and first responders receive a discounted rate. Contact us directly with proof of service and we'll take care of you. It's the least we can do.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {FAQS.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl border overflow-hidden transition-all"
          style={{ borderColor: open === i ? "#C4952A40" : "#0F2A47", backgroundColor: "#060F1F" }}
        >
          <button
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-base transition-colors"
            style={{ color: open === i ? "#C4952A" : "#F0F6FF" }}
            onClick={() => setOpen(open === i ? null : i)}
          >
            {faq.q}
            <ChevronDown
              className="h-5 w-5 shrink-0 transition-transform"
              style={{
                transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                color: "#C4952A",
              }}
            />
          </button>
          {open === i && (
            <div
              className="px-6 pb-5 text-sm leading-relaxed border-t"
              style={{ color: "#6B8BA8", borderColor: "#0F2A47" }}
            >
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
