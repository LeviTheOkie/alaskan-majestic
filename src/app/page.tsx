import Image from "next/image";
import {
  Anchor,
  Fish,
  MapPin,
  Phone,
  Star,
  Shield,
  Clock,
  Users,
  ChevronDown,
} from "lucide-react";

const FAREHARBOR_URL =
  "https://fareharbor.com/embeds/book/alaskanmajesticfishing/items/?full-items=yes";

const PHOTOS = [
  "https://img1.wsimg.com/isteam/ip/bfcb096d-6713-4f3d-b3c9-e28e7dfa857b/IMG_9698.JPG",
  "https://img1.wsimg.com/isteam/ip/bfcb096d-6713-4f3d-b3c9-e28e7dfa857b/fb_188919400835884_1536x2048.jpg",
  "https://img1.wsimg.com/isteam/ip/bfcb096d-6713-4f3d-b3c9-e28e7dfa857b/IMG_0734.JPG",
  "https://img1.wsimg.com/isteam/ip/bfcb096d-6713-4f3d-b3c9-e28e7dfa857b/blob-40dab2b.png",
  "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
];

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#060D1A", color: "#F0F4F8" }}>

      {/* ── NAV ── */}
      <header
        className="fixed top-0 inset-x-0 z-50 border-b"
        style={{
          backgroundColor: "rgba(6,13,26,0.85)",
          backdropFilter: "blur(12px)",
          borderColor: "#1E3A5F",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#C9A84C" }}
            >
              <Anchor className="h-4 w-4" style={{ color: "#060D1A" }} />
            </div>
            <div>
              <div className="font-bold text-sm tracking-wide" style={{ color: "#F0F4F8" }}>
                Alaskan Majestic
              </div>
              <div className="text-xs" style={{ color: "#7A8FA6" }}>
                Fishing Charters
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {["Trips", "Pricing", "Gallery", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors"
                style={{ color: "#7A8FA6" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#C9A84C")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#7A8FA6")
                }
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="tel:+19077417408"
            className="flex items-center gap-2 font-semibold text-sm px-4 py-2 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#C9A84C", color: "#060D1A" }}
          >
            <Phone className="h-3.5 w-3.5" />
            (907) 741-7408
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Homer Alaska mountains and ocean"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(6,13,26,0.5) 0%, rgba(6,13,26,0.3) 40%, rgba(6,13,26,0.8) 100%)",
          }}
        />

        <div className="relative text-center px-6 max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 border"
            style={{
              backgroundColor: "rgba(201,168,76,0.15)",
              borderColor: "rgba(201,168,76,0.4)",
              color: "#E8C97A",
            }}
          >
            <MapPin className="h-3 w-3" />
            Homer, Alaska · Kenai Peninsula
          </div>

          <h1
            className="font-extrabold leading-none tracking-tight mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "#F0F4F8" }}
          >
            Where the Fish
            <br />
            <span style={{ color: "#C9A84C" }}>Are Legendary.</span>
          </h1>

          <p
            className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: "rgba(240,244,248,0.8)" }}
          >
            World-class halibut and multi-species charters on the wild waters of
            the Gulf of Alaska. This isn&apos;t a fishing trip — it&apos;s the
            trip you&apos;ll talk about for the rest of your life.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={FAREHARBOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "#C9A84C", color: "#060D1A" }}
            >
              Book Your Charter
            </a>
            <a
              href="#trips"
              className="px-8 py-4 rounded-full font-bold text-lg border-2 transition-all hover:scale-105"
              style={{ borderColor: "rgba(240,244,248,0.4)", color: "#F0F4F8" }}
            >
              See Trips & Pricing
            </a>
          </div>

          <div
            className="flex justify-center gap-8 mt-12 text-sm"
            style={{ color: "rgba(240,244,248,0.6)" }}
          >
            <span className="flex items-center gap-1.5">
              <Fish className="h-4 w-4" style={{ color: "#C9A84C" }} />
              Halibut · Salmon · Rockfish
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4" style={{ color: "#C9A84C" }} />
              Up to 6 per charter
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4" style={{ color: "#C9A84C" }} />
              Military discount
            </span>
          </div>
        </div>

        <a
          href="#trips"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          style={{ color: "rgba(240,244,248,0.4)" }}
        >
          <ChevronDown className="h-8 w-8" />
        </a>
      </section>

      {/* ── WHY US ── */}
      <section
        className="py-20 border-b"
        style={{ backgroundColor: "#0D1F3C", borderColor: "#1E3A5F" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Fish className="h-6 w-6" />,
                title: "Prime Alaska Waters",
                body: "We fish the same prolific grounds that have made Homer the Halibut Capital of the World.",
              },
              {
                icon: <Anchor className="h-6 w-6" />,
                title: "Experienced Captain",
                body: "Your safety and success on the water is our top priority — every single trip.",
              },
              {
                icon: <Star className="h-6 w-6" />,
                title: "Sustainable Practices",
                body: "We fish responsibly so future generations can experience the same epic Alaska fishing.",
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Military & Veteran Discount",
                body: "Active service members, veterans, and first responders receive a discounted rate — thank you for your service.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#C9A84C" }}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: "#F0F4F8" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7A8FA6" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRIPS & PRICING ── */}
      <section id="trips" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#C9A84C" }}
            >
              2025 Season
            </div>
            <h2
              className="font-extrabold text-4xl sm:text-5xl tracking-tight mb-4"
              style={{ color: "#F0F4F8" }}
            >
              Choose Your Adventure
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "#7A8FA6" }}>
              Public seats available for solo travelers and small groups. Book
              the whole boat for a private experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                name: "Halibut Only",
                tagline: "The Alaska Classic",
                perSeat: "$375",
                wholeBoat: "$2,200",
                description:
                  "Pure halibut fishing in the rich waters off Homer. Target the flat giants that made this coast famous.",
                features: [
                  "Full-day charter",
                  "Up to 6 passengers",
                  "All tackle provided",
                  "Fish cleaning included",
                ],
                note: "Not available Tues / Wed per federal regulation",
                featured: false,
              },
              {
                name: "Captain's Choice",
                tagline: "Best Odds on the Water",
                perSeat: "$395",
                wholeBoat: "$2,300",
                description:
                  "Halibut plus rockfish or salmon — the Captain picks based on where the fish are biting that day.",
                features: [
                  "Halibut + bonus species",
                  "Captain reads conditions",
                  "Up to 6 passengers",
                  "All tackle provided",
                ],
                note: "Most popular — highest variety",
                featured: true,
              },
              {
                name: "Long Range Multi-Species",
                tagline: "The Premium Expedition",
                perSeat: "$455",
                wholeBoat: "$2,600",
                description:
                  "Deep into the Gulf of Alaska targeting as many species as conditions allow. The ultimate Alaska experience.",
                features: [
                  "Extended range trip",
                  "Maximum species variety",
                  "Gulf of Alaska waters",
                  "Available Tues / Wed",
                ],
                note: "Premium trip — book early",
                featured: false,
              },
            ].map((trip) => (
              <div
                key={trip.name}
                className="rounded-2xl border flex flex-col overflow-hidden transition-transform hover:-translate-y-1"
                style={{
                  backgroundColor: trip.featured ? "#132847" : "#0D1F3C",
                  borderColor: trip.featured ? "#C9A84C" : "#1E3A5F",
                  boxShadow: trip.featured
                    ? "0 0 40px rgba(201,168,76,0.15)"
                    : "none",
                }}
              >
                {trip.featured && (
                  <div
                    className="text-center text-xs font-bold uppercase tracking-widest py-2"
                    style={{ backgroundColor: "#C9A84C", color: "#060D1A" }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="p-7 flex flex-col flex-1">
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "#C9A84C" }}
                  >
                    {trip.tagline}
                  </div>
                  <h3
                    className="text-xl font-extrabold mb-3"
                    style={{ color: "#F0F4F8" }}
                  >
                    {trip.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "#7A8FA6" }}
                  >
                    {trip.description}
                  </p>

                  <div
                    className="rounded-xl p-4 mb-6 space-y-2"
                    style={{ backgroundColor: "rgba(6,13,26,0.5)" }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm" style={{ color: "#7A8FA6" }}>
                        Per seat (public)
                      </span>
                      <span
                        className="font-extrabold text-xl"
                        style={{ color: "#E8C97A" }}
                      >
                        {trip.perSeat}
                      </span>
                    </div>
                    <div
                      className="border-t pt-2 flex justify-between items-center"
                      style={{ borderColor: "#1E3A5F" }}
                    >
                      <span className="text-sm" style={{ color: "#7A8FA6" }}>
                        Whole boat (private)
                      </span>
                      <span
                        className="font-extrabold text-xl"
                        style={{ color: "#E8C97A" }}
                      >
                        {trip.wholeBoat}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6 flex-1">
                    {trip.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: "#7A8FA6" }}
                      >
                        <span style={{ color: "#C9A84C" }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <p
                    className="text-xs mb-5 italic"
                    style={{ color: "#7A8FA6" }}
                  >
                    {trip.note}
                  </p>

                  <a
                    href={FAREHARBOR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3 rounded-full font-bold text-sm transition-all hover:opacity-90 hover:scale-105"
                    style={
                      trip.featured
                        ? { backgroundColor: "#C9A84C", color: "#060D1A" }
                        : {
                            border: "2px solid #1E3A5F",
                            color: "#F0F4F8",
                            backgroundColor: "transparent",
                          }
                    }
                  >
                    Book This Trip
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div
            className="rounded-xl border p-5 text-center text-sm"
            style={{ borderColor: "#1E3A5F", color: "#7A8FA6" }}
          >
            Pricing subject to federal and Alaska Fish &amp; Game regulation changes. ·{" "}
            <strong style={{ color: "#E8C97A" }}>
              Military, Veterans &amp; First Responders
            </strong>{" "}
            receive a discounted rate — contact us with proof of service. ·
            Questions?{" "}
            <a
              href="tel:+19077417408"
              className="underline"
              style={{ color: "#C9A84C" }}
            >
              (907) 741-7408
            </a>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section
        id="gallery"
        className="py-24 border-t"
        style={{ backgroundColor: "#0D1F3C", borderColor: "#1E3A5F" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#C9A84C" }}
            >
              On the Water
            </div>
            <h2
              className="font-extrabold text-4xl sm:text-5xl tracking-tight"
              style={{ color: "#F0F4F8" }}
            >
              Reel in the Memories
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {PHOTOS.map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl aspect-square"
              >
                <Image
                  src={src}
                  alt={`Alaskan Majestic Fishing photo ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 border-t" style={{ borderColor: "#1E3A5F" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#C9A84C" }}
              >
                Our Mission
              </div>
              <h2
                className="font-extrabold text-4xl sm:text-5xl tracking-tight mb-6 leading-tight"
                style={{ color: "#F0F4F8" }}
              >
                A Trip of a Lifetime.
                <br />
                <span style={{ color: "#C9A84C" }}>Every Time.</span>
              </h2>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "#7A8FA6" }}
              >
                At Alaskan Majestic Fishing Charters, we set out to give you
                more than just a fishing trip. We want you to feel the raw power
                of Alaska — the icy spray, the weight of a halibut on the line,
                the mountains watching from the shore.
              </p>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "#7A8FA6" }}
              >
                We&apos;re committed to sustainable fishing practices so these
                waters stay wild and abundant for generations to come. Your
                adventure doesn&apos;t come at the expense of Alaska&apos;s
                future.
              </p>
              <div className="flex flex-wrap gap-4">
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
                  style={{ borderColor: "#1E3A5F", color: "#7A8FA6" }}
                >
                  <Clock className="h-4 w-4" style={{ color: "#C9A84C" }} />
                  Full-day charters
                </div>
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
                  style={{ borderColor: "#1E3A5F", color: "#7A8FA6" }}
                >
                  <Users className="h-4 w-4" style={{ color: "#C9A84C" }} />
                  Max 6 guests
                </div>
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
                  style={{ borderColor: "#1E3A5F", color: "#7A8FA6" }}
                >
                  <Shield className="h-4 w-4" style={{ color: "#C9A84C" }} />
                  Military discount
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900&q=80"
                  alt="Alaska wilderness"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div
                className="absolute -bottom-5 -left-5 rounded-2xl p-5 border"
                style={{
                  backgroundColor: "#0D1F3C",
                  borderColor: "#1E3A5F",
                }}
              >
                <div
                  className="text-3xl font-extrabold"
                  style={{ color: "#C9A84C" }}
                >
                  Homer, AK
                </div>
                <div className="text-sm mt-1" style={{ color: "#7A8FA6" }}>
                  Halibut Capital of the World
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-20 border-t border-b"
        style={{
          borderColor: "#1E3A5F",
          background:
            "linear-gradient(135deg, #0D1F3C 0%, #132847 50%, #0D1F3C 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="font-extrabold text-4xl sm:text-5xl tracking-tight mb-4"
            style={{ color: "#F0F4F8" }}
          >
            Ready to Get on the Water?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#7A8FA6" }}>
            Spots fill fast — especially in peak season. Lock in your date now
            and start counting down the days.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={FAREHARBOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:opacity-90"
              style={{ backgroundColor: "#C9A84C", color: "#060D1A" }}
            >
              Book Your Trip Now
            </a>
            <a
              href="tel:+19077417408"
              className="px-8 py-4 rounded-full font-bold text-lg border-2 flex items-center gap-2 transition-all hover:scale-105"
              style={{ borderColor: "#1E3A5F", color: "#F0F4F8" }}
            >
              <Phone className="h-4 w-4" />
              (907) 741-7408
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24" style={{ backgroundColor: "#0D1F3C" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#C9A84C" }}
            >
              Get in Touch
            </div>
            <h2
              className="font-extrabold text-4xl tracking-tight"
              style={{ color: "#F0F4F8" }}
            >
              Questions? We&apos;re Here.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Phone className="h-6 w-6" />,
                label: "Call Us",
                value: "(907) 741-7408",
                href: "tel:+19077417408",
              },
              {
                icon: <MapPin className="h-6 w-6" />,
                label: "Location",
                value: "Homer, Alaska",
                href: "https://maps.google.com/?q=Homer,Alaska",
              },
              {
                icon: <Clock className="h-6 w-6" />,
                label: "Office Hours",
                value: "Mon–Fri 9am–5pm\nSat–Sun by appt.",
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border p-6 text-center"
                style={{ backgroundColor: "#132847", borderColor: "#1E3A5F" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#C9A84C" }}
                >
                  {item.icon}
                </div>
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: "#7A8FA6" }}
                >
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-bold whitespace-pre-line hover:underline"
                    style={{ color: "#E8C97A" }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p
                    className="font-bold whitespace-pre-line"
                    style={{ color: "#E8C97A" }}
                  >
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="border-t py-10"
        style={{ backgroundColor: "#060D1A", borderColor: "#1E3A5F" }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#C9A84C" }}
            >
              <Anchor className="h-3.5 w-3.5" style={{ color: "#060D1A" }} />
            </div>
            <span className="font-bold text-sm" style={{ color: "#7A8FA6" }}>
              © {new Date().getFullYear()} Alaskan Majestic Fishing Charters · Homer, AK
            </span>
          </div>
          <div className="flex items-center gap-5 text-sm" style={{ color: "#7A8FA6" }}>
            <a
              href={FAREHARBOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "#C9A84C" }}
            >
              Book Now
            </a>
            <a href="tel:+19077417408" className="hover:underline">
              (907) 741-7408
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100091534743947"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
