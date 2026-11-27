import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const LAYANAN_LINKS = [
  "Perencanaan & DED",
  "Arsitektural Design & Build",
  "Interior Design & Build",
  "Eksterior & Lansekap",
  "Konstruksi & Renovasi",
  "Perbaikan & Perawatan",
];

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/proyek", label: "Proyek" },
  { href: "/kontak", label: "Kontak" },
];

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-[#1e2b34] text-white/80">
      {/* Top CTA strip */}
      <div className="border-b border-white/10">
        <div className="container-site py-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="label-section text-[#e5a124]">Siap Memulai?</p>
            <h2
              className="mt-2 text-2xl md:text-3xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Ceritakan proyek Anda kepada kami.
            </h2>
            <p className="mt-1.5 text-sm text-white/60 max-w-md">
              Konsultasi awal dan survei lokasi tanpa biaya. Tim kami siap
              menyiapkan gambar konsep dalam 3 hari kerja.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kontak"
              className="btn-primary"
            >
              Konsultasi Sekarang
            </Link>
            <a
              href="https://wa.me/6282114000297?text=Halo%20Studio_ARP%2C%20saya%20ingin%20berkonsultasi%20mengenai%20proyek."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost border-white/40 text-white hover:bg-white hover:text-[#1e2b34]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-site py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5 mb-5">
            <Image
              src="/logo_studio_arp.png"
              alt="Studio ARP"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div className="leading-none">
              <span
                className="block text-sm font-bold text-white tracking-tight"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Studio_ARP
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-white/50">
                CV. Tiga Dimensi Indonesia
              </span>
            </div>
          </Link>
          <p className="text-sm text-white/55 leading-relaxed max-w-xs">
            Berdiri sejak 2019. Perencanaan, desain, dan pembangunan ruang
            dengan standar teknis nyata dan legalitas resmi.
          </p>

          <div className="mt-5 flex gap-3">
            <a
              href="https://instagram.com/studio_arp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded border border-white/15 flex items-center justify-center hover:border-[#e5a124] hover:text-[#e5a124] transition-colors"
              aria-label="Instagram Studio_ARP"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Layanan */}
        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-widest text-[#e5a124] mb-5"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Layanan
          </h3>
          <ul className="space-y-2.5">
            {LAYANAN_LINKS.map((item) => (
              <li key={item}>
                <Link
                  href="/layanan"
                  className="text-sm text-white/55 hover:text-white transition-colors duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigasi */}
        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-widest text-[#e5a124] mb-5"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Navigasi
          </h3>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/55 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-widest text-[#e5a124] mb-5"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Hubungi Kami
          </h3>
          <address className="not-italic space-y-4">
            <div className="flex gap-3">
              <MapPin size={15} className="mt-0.5 shrink-0 text-[#e5a124]" />
              <p className="text-sm text-white/55 leading-relaxed">
                Jl. Bratayudha No. 38
                <br />
                Regol, Garut Kota 44115
              </p>
            </div>
            <div className="flex gap-3">
              <Phone size={15} className="mt-0.5 shrink-0 text-[#e5a124]" />
              <a
                href="tel:+6282114000297"
                className="text-sm text-white/55 hover:text-white transition-colors"
              >
                +62 821-1400-0297
              </a>
            </div>
            <div className="flex gap-3">
              <Mail size={15} className="mt-0.5 shrink-0 text-[#e5a124]" />
              <a
                href="mailto:studioarp97@gmail.com"
                className="text-sm text-white/55 hover:text-white transition-colors"
              >
                studioarp97@gmail.com
              </a>
            </div>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>
            &copy; {year} CV. Tiga Dimensi Indonesia. Semua hak dilindungi.
          </p>
          <div className="flex gap-4 tabular">
            <span>NIB: 9120107280312</span>
            <span className="text-white/20">|</span>
            <span>NPWP: 90.350.608.7-443.000</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

