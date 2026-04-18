import Image from "next/image";
import { Fish, MapPin, Phone, Star, Shield, Clock, Users, ChevronRight, Wind } from "lucide-react";
import { Nav } from "@/components/Nav";
import { FAQ } from "@/components/FAQ";

const BOOK_URL = "https://alaskanmajesticfishing.com";

const TRIPS = [
  {
    key: "halibut",
    tag: "The Alaska Classic",
    name: "Halibut Only",
    description:
      "Pure halibut. The fish Homer was built around. Drop down into the cold dark and feel the weight of something prehistoric pull back.",
    perSeat: "$375",
    wholeBoat: "$2,200",
    img: "https://img1.wsimg.com/isteam/ip/bfcb096d-6713-4f3d-b3c9-e28e7dfa857b/IMG_9698.JPG",
    note: "Not available Tue / Wed · Federal regulation",
    includes: ["All tackle & bait", "Fishing license", "Fish cleaning & bagging", "Up to 6 guests"],
  },
  {
    key: "combo",
    tag: "The Smart Play",
    name: "Captain's Choice",
    description:
      "Halibut plus rockfish or salmon — your captain reads the water and puts you where the bite is. Highest variety. Best odds. Most stories told at dinner.",
    perSeat: "$395",
    wholeBoat: "$2,300",
    img: "https://img1.wsimg.com/isteam/ip/bfcb096d-6713-4f3d-b3c9-e28e7dfa857b/fb_188919400835884_1536x2048.jpg",
    note: "Most popular · Captain selects species daily",
    includes: ["Halibut + bonus species", "Captain reads conditions", "Fish cleaning & bagging", "Up to 6 guests"],
    featured: true,
  },
  {
    key: "longrange",
    tag: "The Expedition",
    name: "Long Range Multi-Species",
    description:
      "Deep into the Gulf of Alaska. Further than the rest go. This is the premium Alaska fishing experience — the kind people plan their entire trips around.",
    perSeat: "$455",
    wholeBoat: "$2,600",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
    note: "Available Tue / Wed · Extended range · Book early",
    includes: ["Gulf of Alaska waters", "Maximum species variety", "Extended trip duration", "Up to 6 guests"],
  },
];

const TESTIMONIALS = [
  {
    name: "Marcus T.",
    location: "Dallas, TX",
    stars: 5,
    quote:
      "I've fished all over the world. Alaska is different. The captain knew exactly where to go and within an hour we had limits on halibut. My hands still feel the weight of that first fish. Book this trip.",
  },
  {
    name: "Sarah & Jim K.",
    location: "Bozeman, MT",
    stars: 5,
    quote:
      "We took our teenage sons for a bucket-list trip. The captain was patient, hilarious, and put us on fish all day. We came home with 80 lbs of halibut and memories that'll outlast anything else we've ever done as a family.",
  },
  {
    name: "Derek R.",
    location: "Portland, OR",
    stars: 5,
    quote:
      "I was a complete beginner. Showed up nervous, left with a giant halibut and a story I've told at least 50 times since. The crew made it effortless. Homer itself is stunning. Already planning year two.",
  },
];

const GALLERY = [
  { src: "https://img1.wsimg.com/isteam/ip/bfcb096d-6713-4f3d-b3c9-e28e7dfa857b/IMG_9698.JPG", alt: "Trophy halibut catch" },
  { src: "https://img1.wsimg.com/isteam/ip/bfcb096d-6713-4f3d-b3c9-e28e7dfa857b/fb_188919400835884_1536x2048.jpg", alt: "Happy anglers on charter" },
  { src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900&q=80", alt: "Alaska wilderness" },
  { src: "https://img1.wsimg.com/isteam/ip/bfcb096d-6713-4f3d-b3c9-e28e7dfa857b/IMG_0734.JPG", alt: "Charter fishing Homer Alaska" },
  { src: "https://img1.wsimg.com/isteam/ip/bfcb096d-6713-4f3d-b3c9-e28e7dfa857b/blob-40dab2b.png", alt: "Fishing the Gulf of Alaska" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80", alt: "Homer Alaska scenery" },
];

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#030B14", color: "#F0F6FF" }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt="Homer Alaska Gulf of Alaska"
            fill
            priority
            unoptimized
            className="object-cover animate-slow-zoom"
          />
        </div>
        {/* Gradient overlays */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #030B14 0%, rgba(3,11,20,0.6) 50%, rgba(3,11,20,0.2) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(3,11,20,0.5) 0%, transparent 60%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 pb-24 pt-40 w-full">
          <div className="max-w-3xl">
            {/* Logo stamp in hero */}
            <div className="mb-8 animate-fade-in">
              <div className="w-36 h-36 rounded-full overflow-hidden animate-logo-glow ring-4 ring-[#C4952A]/60">
                <Image
                  src="https://img1.wsimg.com/isteam/ip/bfcb096d-6713-4f3d-b3c9-e28e7dfa857b/MSPI5630-430a950.JPG"
                  alt="Alaskan Majestic Fishing Charters"
                  width={144}
                  height={144}
                  unoptimized
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </div>
            <div className="section-label animate-fade-in">Homer, Alaska · Halibut Capital of the World</div>
            <h1
              className="font-display font-black leading-none mb-6 animate-fade-in-up delay-100"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", color: "#F0F6FF" }}
            >
              The Weight You
              <br />
              <span style={{ color: "#C4952A" }}>Feel Changes</span>
              <br />
              Everything.
            </h1>
            <p
              className="text-lg sm:text-xl leading-relaxed mb-10 max-w-xl animate-fade-in-up delay-200"
              style={{ color: "rgba(240,246,255,0.75)" }}
            >
              Deep-water halibut. Wild salmon. The raw Gulf of Alaska.
              Come fish Homer the way it was meant to be fished — with a
              captain who knows every current, every drop, every bite.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 flex items-center gap-2 animate-shimmer"
                style={{ backgroundColor: "#C4952A", color: "#030B14" }}
              >
                Book Your Charter <ChevronRight className="h-5 w-5" />
              </a>
              <a
                href="tel:+19077417408"
                className="px-8 py-4 rounded-full font-bold text-lg border-2 transition-all hover:border-[#C4952A] hover:text-[#C4952A] flex items-center gap-2"
                style={{ borderColor: "rgba(240,246,255,0.25)", color: "#F0F6FF" }}
              >
                <Phone className="h-4 w-4" /> (907) 741-7408
              </a>
            </div>
          </div>

          {/* Quick stats bottom bar */}
          <div
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border animate-fade-in delay-500"
            style={{ borderColor: "#0F2A47" }}
          >
            {[
              { value: "Homer, AK", label: "Halibut Capital of the World" },
              { value: "Up to 6", label: "Guests per charter" },
              { value: "3 Trips", label: "From $375 per seat" },
              { value: "10%+", label: "Military & veteran discount" },
            ].map((s) => (
              <div
                key={s.label}
                className="px-5 py-4 text-center"
                style={{ backgroundColor: "rgba(6,15,31,0.85)", backdropFilter: "blur(8px)" }}
              >
                <div className="font-display font-bold text-xl" style={{ color: "#C4952A" }}>{s.value}</div>
                <div className="text-xs mt-0.5" style={{ color: "#6B8BA8" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY HOMER ── */}
      <section className="py-24 border-b" style={{ borderColor: "#0F2A47" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">The Location</span>
              <h2 className="font-display font-black text-4xl sm:text-5xl leading-tight mb-6" style={{ color: "#F0F6FF" }}>
                There&apos;s a Reason They
                <br />
                Call It the{" "}
                <span style={{ color: "#C4952A" }}>Halibut Capital</span>
                <br />
                of the World.
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#6B8BA8" }}>
                Homer, Alaska sits on the edge of Kachemak Bay on the Kenai Peninsula — gateway to some of the richest fishing grounds on the planet. The Gulf of Alaska churns with cold, nutrient-dense water that produces halibut the size of barn doors and salmon that fight like their lives depend on it.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#6B8BA8" }}>
                Add snow-capped volcanoes on the horizon, sea otters floating past your boat, and the occasional humpback whale breaching fifty yards away — and you start to understand why people fly here from every corner of the world, year after year.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Halibut · Salmon · Rockfish · Cod", "Kenai Peninsula waters", "Wildlife on every trip"].map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 rounded-full text-xs font-semibold border"
                    style={{ borderColor: "#0F2A47", color: "#6B8BA8" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900&q=80"
                  alt="Alaska wilderness Kenai Peninsula"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div
                className="absolute -bottom-5 -right-5 rounded-2xl p-5 border"
                style={{ backgroundColor: "#060F1F", borderColor: "#0F2A47" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" style={{ color: "#C4952A" }} />
                  ))}
                </div>
                <div className="font-bold text-sm" style={{ color: "#F0F6FF" }}>5-Star Experience</div>
                <div className="text-xs" style={{ color: "#6B8BA8" }}>Every. Single. Trip.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRIPS ── */}
      <section id="trips" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">2025 Season</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl" style={{ color: "#F0F6FF" }}>
              Choose Your Battle
            </h2>
            <span className="gold-rule" />
            <p className="text-base max-w-xl mx-auto" style={{ color: "#6B8BA8" }}>
              Public seats for solo travelers and small groups. Whole boat for a private charter. Either way — you&apos;re fishing the best waters on earth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRIPS.map((trip) => (
              <div
                key={trip.key}
                className="relative rounded-2xl overflow-hidden flex flex-col group"
                style={{
                  border: trip.featured ? "2px solid #C4952A" : "1px solid #0F2A47",
                  boxShadow: trip.featured ? "0 0 50px rgba(196,149,42,0.15)" : "none",
                }}
              >
                {/* Image header */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={trip.img}
                    alt={trip.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, #060F1F 100%)" }} />
                  {trip.featured && (
                    <div
                      className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                      style={{ backgroundColor: "#C4952A", color: "#030B14" }}
                    >
                      Most Popular
                    </div>
                  )}
                  <div
                    className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest"
                    style={{ color: "#C4952A" }}
                  >
                    {trip.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6" style={{ backgroundColor: "#060F1F" }}>
                  <h3 className="font-display font-bold text-2xl mb-3" style={{ color: "#F0F6FF" }}>
                    {trip.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#6B8BA8" }}>
                    {trip.description}
                  </p>

                  {/* Pricing */}
                  <div
                    className="rounded-xl p-4 mb-5 space-y-2"
                    style={{ backgroundColor: "#030B14", border: "1px solid #0F2A47" }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs" style={{ color: "#6B8BA8" }}>Per seat (public)</span>
                      <span className="font-display font-bold text-2xl" style={{ color: "#C4952A" }}>{trip.perSeat}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2" style={{ borderTop: "1px solid #0F2A47" }}>
                      <span className="text-xs" style={{ color: "#6B8BA8" }}>Whole boat (private, up to 6)</span>
                      <span className="font-display font-bold text-xl" style={{ color: "#E8B84B" }}>{trip.wholeBoat}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {trip.includes.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs" style={{ color: "#6B8BA8" }}>
                        <span style={{ color: "#C4952A" }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs italic mb-5" style={{ color: "#6B8BA8" }}>
                    {trip.note}
                  </p>

                  <a
                    href={BOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105"
                    style={
                      trip.featured
                        ? { backgroundColor: "#C4952A", color: "#030B14" }
                        : { border: "1px solid #0F2A47", color: "#F0F6FF" }
                    }
                  >
                    Book This Trip
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-center text-xs mt-8"
            style={{ color: "#6B8BA8" }}
          >
            Pricing subject to federal and Alaska Fish &amp; Game regulation changes. ·{" "}
            <span style={{ color: "#C4952A" }}>Military, Veterans &amp; First Responders</span> receive discounted rates — contact us with proof of service.
          </p>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-24 border-t" style={{ borderColor: "#0F2A47", backgroundColor: "#060F1F" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">The Proof</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl" style={{ color: "#F0F6FF" }}>
              The Catch of a Lifetime
            </h2>
            <span className="gold-rule" />
          </div>

          {/* Bento gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3" style={{ gridTemplateRows: "auto" }}>
            {GALLERY.map((photo, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden group ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "rgba(196,149,42,0.15)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 border-t" style={{ borderColor: "#0F2A47" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">Don&apos;t Take Our Word For It</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl" style={{ color: "#F0F6FF" }}>
              Stories From the Water
            </h2>
            <span className="gold-rule" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-7 border flex flex-col"
                style={{ backgroundColor: "#060F1F", borderColor: "#0F2A47" }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" style={{ color: "#C4952A" }} />
                  ))}
                </div>
                <p className="font-display text-xl font-bold leading-snug mb-6 flex-1" style={{ color: "#F0F6FF" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#C4952A" }}>{t.name}</div>
                  <div className="text-xs flex items-center gap-1 mt-0.5" style={{ color: "#6B8BA8" }}>
                    <MapPin className="h-3 w-3" /> {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 border-t" style={{ borderColor: "#0F2A47", backgroundColor: "#060F1F" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="https://img1.wsimg.com/isteam/ip/bfcb096d-6713-4f3d-b3c9-e28e7dfa857b/IMG_0734.JPG"
                  alt="Alaskan Majestic Fishing Charter boat"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -top-5 -left-5 rounded-2xl p-5 border"
                style={{ backgroundColor: "#030B14", borderColor: "#0F2A47" }}
              >
                <div className="font-display font-black text-3xl" style={{ color: "#C4952A" }}>Homer, AK</div>
                <div className="text-xs mt-1" style={{ color: "#6B8BA8" }}>Kenai Peninsula · Gulf of Alaska</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="section-label">Our Mission</span>
              <h2 className="font-display font-black text-4xl sm:text-5xl leading-tight mb-6" style={{ color: "#F0F6FF" }}>
                Built on These
                <br />
                <span style={{ color: "#C4952A" }}>Waters.</span>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#6B8BA8" }}>
                At Alaskan Majestic Fishing Charters, we exist for one reason: to put you on fish and give you a trip you&apos;ll spend the rest of your life talking about. We fish the waters off Homer with the respect they demand — sustainably, safely, and with full commitment to your experience.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#6B8BA8" }}>
                We believe the best fishing trip is the one where you leave the water different than when you got on it. Tired in the best way. Grinning wider than you planned. Already thinking about next season.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Fish className="h-4 w-4" />, label: "Halibut · Salmon · Rockfish" },
                  { icon: <Users className="h-4 w-4" />, label: "Private & public charters" },
                  { icon: <Shield className="h-4 w-4" />, label: "Military & vet discount" },
                  { icon: <Wind className="h-4 w-4" />, label: "Sustainable practices" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(196,149,42,0.12)", color: "#C4952A" }}
                    >
                      {item.icon}
                    </div>
                    <span className="text-sm" style={{ color: "#6B8BA8" }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 border-t" style={{ borderColor: "#0F2A47" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">Before You Cast Off</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl" style={{ color: "#F0F6FF" }}>
              Good Questions.
            </h2>
            <span className="gold-rule" />
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="relative py-32 overflow-hidden"
        style={{ backgroundColor: "#060F1F" }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(ellipse at center, rgba(196,149,42,0.3) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="section-label">Your Story Starts Here</span>
          <h2
            className="font-display font-black leading-none mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", color: "#F0F6FF" }}
          >
            Don&apos;t Let This
            <br />
            <span style={{ color: "#C4952A" }}>Season Pass.</span>
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#6B8BA8" }}>
            Peak season fills up fast. The halibut don&apos;t wait, and neither should you.
            Lock in your date and start counting down to Alaska.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full font-bold text-xl transition-all hover:scale-105 animate-shimmer flex items-center gap-2"
              style={{ backgroundColor: "#C4952A", color: "#030B14" }}
            >
              Book Your Charter <ChevronRight className="h-5 w-5" />
            </a>
            <a
              href="tel:+19077417408"
              className="px-10 py-4 rounded-full font-bold text-xl border-2 transition-all hover:border-[#C4952A] hover:text-[#C4952A] flex items-center gap-2"
              style={{ borderColor: "#0F2A47", color: "#F0F6FF" }}
            >
              <Phone className="h-5 w-5" /> Call Us First
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 border-t" style={{ borderColor: "#0F2A47" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">Get In Touch</span>
            <h2 className="font-display font-black text-4xl" style={{ color: "#F0F6FF" }}>
              We&apos;re Here to Help.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              { icon: <Phone className="h-6 w-6" />, label: "Phone", value: "(907) 741-7408", href: "tel:+19077417408" },
              { icon: <MapPin className="h-6 w-6" />, label: "Location", value: "Homer, Alaska\nKenai Peninsula", href: "https://maps.google.com/?q=Homer,Alaska" },
              { icon: <Clock className="h-6 w-6" />, label: "Hours", value: "Mon–Fri 9am–5pm\nSat–Sun by appointment", href: null },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-7 text-center border"
                style={{ backgroundColor: "#060F1F", borderColor: "#0F2A47" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(196,149,42,0.12)", color: "#C4952A" }}
                >
                  {item.icon}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#6B8BA8" }}>
                  {item.label}
                </div>
                {item.href ? (
                  <a href={item.href} className="font-bold whitespace-pre-line hover:underline" style={{ color: "#C4952A" }}>
                    {item.value}
                  </a>
                ) : (
                  <p className="font-bold whitespace-pre-line" style={{ color: "#C4952A" }}>{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t py-10" style={{ backgroundColor: "#030B14", borderColor: "#0F2A47" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#C4952A]/40 shrink-0">
              <Image
                src="https://img1.wsimg.com/isteam/ip/bfcb096d-6713-4f3d-b3c9-e28e7dfa857b/MSPI5630-430a950.JPG"
                alt="Alaskan Majestic"
                width={40}
                height={40}
                unoptimized
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <span className="text-sm font-medium" style={{ color: "#6B8BA8" }}>
              © {new Date().getFullYear()} Alaskan Majestic Fishing Charters · Homer, AK
            </span>
          </div>
          <div className="flex items-center gap-5 text-sm" style={{ color: "#6B8BA8" }}>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#C4952A] transition-colors">Book Now</a>
            <a href="tel:+19077417408" className="hover:text-[#C4952A] transition-colors">(907) 741-7408</a>
            <a href="https://www.facebook.com/profile.php?id=100091534743947" target="_blank" rel="noopener noreferrer" className="hover:text-[#C4952A] transition-colors">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
