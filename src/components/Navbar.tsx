"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/layanan", label: "Layanan" },
  { href: "/proyek", label: "Proyek" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome || menuOpen
          ? "bg-white/97 backdrop-blur-sm border-b border-[#dde3e8]"
          : "bg-transparent"
      }`}
      style={{ willChange: "background-color" }}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo_studio_arp.png"
              alt="Studio ARP"
              width={40}
              height={40}
              className="rounded-full object-cover"
              priority
            />
            <div className="leading-none">
              <span
                className={`block font-jakarta font-700 text-sm tracking-tight transition-colors ${
                  scrolled || !isHome || menuOpen
                    ? "text-[#1e2b34]"
                    : "text-white"
                }`}
                style={{ fontFamily: "var(--font-jakarta)", fontWeight: 700 }}
              >
                Studio_ARP
              </span>
              <span
                className={`block text-[10px] tracking-widest uppercase transition-colors ${
                  scrolled || !isHome || menuOpen
                    ? "text-[#52606d]"
                    : "text-white/70"
                }`}
              >
                CV. Tiga Dimensi Indonesia
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-tight transition-colors duration-200 group ${
                    active
                      ? "text-[#e5a124]"
                      : scrolled || !isHome
                        ? "text-[#52606d] hover:text-[#1e2b34]"
                        : "text-white/85 hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#e5a124] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/kontak"
              className="hidden md:flex btn-primary text-sm py-2 px-5"
            >
              Konsultasi Gratis
            </Link>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={`md:hidden p-2 rounded transition-colors ${
                scrolled || !isHome || menuOpen
                  ? "text-[#1e2b34]"
                  : "text-white"
              }`}
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-[#dde3e8]`}
      >
        <nav className="container-site py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 px-2 text-sm font-medium border-b border-[#f0f2f4] transition-colors ${
                  active
                    ? "text-[#e5a124]"
                    : "text-[#52606d] hover:text-[#1e2b34]"
                }`}
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/kontak"
            onClick={() => setMenuOpen(false)}
            className="mt-3 btn-primary justify-center text-sm"
          >
            Konsultasi Gratis
          </Link>
        </nav>
      </div>
    </header>
  );
}

