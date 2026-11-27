import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  PenTool,
  Layers,
  Home,
  Wrench,
  Hammer,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Perencanaan DED & RAB, Arsitektural Design & Build, Interior Design & Build, Eksterior, Konstruksi, Renovasi, dan Furnitur Custom oleh Studio_ARP.",
};

const SERVICES = [
  {
    id: "perencanaan",
    icon: FileText,
    title: "Perencanaan & DED",
    headline: "Dokumen yang bisa dieksekusi, bukan sekadar gambar.",
    description:
      "Penyusunan Dokumen Rencana Detail (DED) mencakup gambar arsitektur (denah, tampak, potongan, detail), gambar struktur (pondasi, kolom, balok, plat lantai), dan gambar MEE (instalasi listrik, air bersih, air kotor, tangki septik). RAB disusun per item pekerjaan dengan spesifikasi bahan yang jelas.",
    items: [
      "Gambar denah, tampak, dan potongan skala 1:100 dan 1:50",
      "Gambar detail arsitektur skala 1:20 dan 1:10",
      "Gambar struktur pondasi, kolom, balok, dan plat",
      "Gambar instalasi listrik, air bersih, dan sanitasi",
      "RAB terinci per item pekerjaan",
      "Spesifikasi teknis bahan dan finishing",
      "Dokumen siap lelang atau eksekusi langsung",
    ],
  },
  {
    id: "arsitektur",
    icon: Home,
    title: "Arsitektural Design & Build",
    headline: "Dari konsep di kertas hingga bangunan berdiri.",
    description:
      "Layanan terintegrasi mulai dari desain konsep arsitektur, pengembangan rancangan, penyusunan gambar kerja, hingga pelaksanaan konstruksi. Satu kontrak, satu titik koordinasi, satu penanggung jawab. Cocok untuk hunian baru, perumahan cluster, gedung kantor, klinik, dan fasilitas komersial.",
    items: [
      "Desain konsep dan presentasi 3D render",
      "Pengembangan rancangan dan DED lengkap",
      "Konstruksi struktur beton bertulang K-250 hingga K-350",
      "Pekerjaan dinding, penutup lantai, dan plafon",
      "Pemasangan kusen, pintu, jendela, dan aksesori",
      "Fasad dengan material batu alam, GRC, ACP, panel kayu",
      "Pengawasan supervisor full-time di lapangan",
    ],
  },
  {
    id: "interior",
    icon: Layers,
    title: "Interior Design & Build",
    headline: "Ruang dalam yang rapi, fungsional, dan tahan lama.",
    description:
      "Desain dan pelaksanaan interior untuk hunian, kantor, klinik, kafe, dan ruang komersial. Tim kami merancang tata letak furnitur, memilih skema warna dan material, lalu mengeksekusinya sendiri termasuk pembuatan furnitur custom dan pemasangan seluruh elemen interior.",
    items: [
      "Desain tata letak interior dan mood board",
      "Render 3D detail per ruang",
      "Kitchen set custom (blokboard, multiplek, MDF)",
      "Finishing HPL, tacosheet, melamik, pelitur, duco",
      "Lemari tanam, cabinet, rak TV, meja counter",
      "Pemasangan wallpaper, panel dinding dekoratif",
      "Lighting design dan pemasangan titik lampu",
    ],
  },
  {
    id: "eksterior",
    icon: PenTool,
    title: "Eksterior & Lansekap",
    headline: "Tampak luar yang berbicara sebelum pintu terbuka.",
    description:
      "Desain dan pengerjaan fasad, pagar, carport, taman depan, dan lansekap. Material eksterior dipilih berdasarkan ketahanan terhadap cuaca lokal dan perawatan jangka panjang, bukan sekadar tren sesaat.",
    items: [
      "Desain fasad dan konsep warna eksterior",
      "Pekerjaan cat eksterior waterproof",
      "Pemasangan batu alam (andesit, palimanan, candi)",
      "Pagar besi hollow, beton cetak, atau kombinasi",
      "Carport dengan atap polycarbonate atau genteng metal",
      "Taman depan dengan tanaman pilihan dan drainase",
      "Penerangan eksterior dan taman",
    ],
  },
  {
    id: "konstruksi",
    icon: Hammer,
    title: "Konstruksi & Pembangunan",
    headline: "Pekerjaan sipil dengan pengawasan dan K3 ketat.",
    description:
      "Pelaksanaan konstruksi gedung baru untuk berbagai fungsi, dari skala kecil hingga multi-lantai. Pekerjaan dilaksanakan sesuai gambar kerja DED, dengan penerapan prosedur K3, pengawasan supervisor harian, dan laporan progres berkala.",
    items: [
      "Pekerjaan tanah, galian, dan urugan",
      "Pondasi telapak, bor, dan strauss pile",
      "Struktur beton bertulang dengan mutu beton terverifikasi",
      "Pasangan dinding bata dan hebel",
      "Pekerjaan atap rangka baja ringan dan konvensional",
      "Penerapan APD dan prosedur K3 wajib",
      "Laporan progres mingguan dengan foto dokumentasi",
    ],
  },
  {
    id: "renovasi",
    icon: Wrench,
    title: "Renovasi & Perbaikan",
    headline: "Ruang lama, kualitas baru, tanpa dibongkar semua.",
    description:
      "Renovasi hunian, ruko, kantor, dan fasilitas komersial. Kami melakukan survei kondisi eksisting terlebih dahulu untuk mengidentifikasi masalah struktural, kebocoran, kerusakan listrik, atau penurunan kualitas finishing sebelum menyusun rencana dan RAB perbaikan.",
    items: [
      "Survei dan inspeksi kondisi eksisting",
      "Perbaikan atap bocor dan plafon rusak",
      "Perbaikan struktural lokal (kolom, balok, dinding retak)",
      "Penggantian instalasi listrik dan sanitasi",
      "Pekerjaan cat ulang eksterior dan interior",
      "Perbaikan dan penggantian penutup lantai",
      "Renovasi parsial tanpa menghentikan operasional",
    ],
  },
];

const MATERIALS = [
  {
    category: "Bahan Utama Furnitur",
    items: ["Blokboard", "Multiplek", "Plywood", "MDF"],
  },
  {
    category: "Finishing Furnitur",
    items: ["HPL (High Pressure Laminate)", "Tacosheet", "Melamik", "Pelitur", "Duco"],
  },
  {
    category: "Material Dinding Eksterior",
    items: ["Batu Andesit", "Batu Palimanan", "Panel GRC", "ACP (Aluminium Composite)"],
  },
  {
    category: "Struktur Beton",
    items: ["K-175 (pondasi sederhana)", "K-250 (standar rumah tinggal)", "K-300 (komersial & instansi)", "K-350 (high-rise)"],
  },
];

export default function LayananPage() {
  return (
    <>
      {/* ━━ Hero ━━ */}
      <section className="bg-[#1e2b34] pt-28 pb-20">
        <div className="container-site">
          <div className="max-w-2xl">
            <Reveal direction="up">
              <p className="label-section">Apa yang kami kerjakan</p>
              <h1
                className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Semua yang dibutuhkan sebuah proyek, dalam satu studio.
              </h1>
              <p className="mt-5 text-white/60 text-lg leading-relaxed">
                Dari penyusunan gambar kerja hingga pengerjaan furnitur custom
                terakhir, Studio_ARP menyediakan layanan penuh tanpa perlu
                koordinasi ke pihak lain.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ Layanan Grid ━━ */}
      <section className="py-20 md:py-28">
        <div className="container-site space-y-20">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            const isEven = i % 2 === 0;
            return (
              <Reveal key={svc.id} direction="up" delay={80}>
                <div
                  id={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                    !isEven ? "lg:gap-16" : ""
                  }`}
                >
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 bg-[#1e2b34] rounded flex items-center justify-center">
                        <Icon size={18} className="text-[#e5a124]" />
                      </div>
                      <span className="label-section">{svc.title}</span>
                    </div>
                    <h2
                      className="text-2xl md:text-3xl font-bold text-[#1e2b34] mb-4"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {svc.headline}
                    </h2>
                    <p className="text-[#52606d] leading-relaxed mb-6">
                      {svc.description}
                    </p>
                    <Link
                      href="/kontak"
                      className="text-sm font-semibold text-[#1e2b34] hover:text-[#e5a124] transition-colors inline-flex items-center gap-1.5"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Konsultasikan proyek ini <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className={!isEven ? "lg:order-1" : ""}>
                    <div className="bg-[#f6f7f8] border border-[#dde3e8] p-6 rounded">
                      <p
                        className="text-xs font-semibold uppercase tracking-widest text-[#e5a124] mb-4"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        Lingkup pekerjaan
                      </p>
                      <ul className="space-y-2.5">
                        {svc.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-[#1e2b34]"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#e5a124] shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {i < SERVICES.length - 1 && (
                  <div className="mt-20 border-b border-[#dde3e8]" />
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ━━ Material & Finishing ━━ */}
      <section className="bg-[#f6f7f8] py-20 md:py-24">
        <div className="container-site">
          <Reveal direction="up">
            <p className="label-section">Bahan & finishing</p>
            <h2
              className="mt-3 text-3xl md:text-4xl font-bold text-[#1e2b34] mb-10"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Spesifikasi bahan, bukan sekadar nama.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MATERIALS.map((mat, i) => (
              <Reveal key={mat.category} delay={i * 70}>
                <div className="bg-white border border-[#dde3e8] p-5 h-full">
                  <p
                    className="text-xs font-semibold uppercase tracking-widest text-[#455662] mb-4"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {mat.category}
                  </p>
                  <ul className="space-y-2">
                    {mat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-[#1e2b34]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#e5a124]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <p className="mt-6 text-sm text-[#52606d] italic">
              Spesifikasi bahan pada setiap proyek tercantum secara tertulis
              dalam dokumen RAB dan kontrak kerja sebelum pekerjaan dimulai.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ━━ CTA ━━ */}
      <section className="bg-[#1e2b34] py-16">
        <div className="container-site">
          <Reveal direction="up">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold text-white"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Ada proyek yang ingin Anda diskusikan?
                </h2>
                <p className="mt-2 text-white/60">
                  Konsultasi awal dan survei lokasi tanpa biaya.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/kontak" className="btn-primary whitespace-nowrap">
                  Mulai Sekarang <ArrowRight size={15} />
                </Link>
                <Link href="/proyek" className="btn-ghost border-white/40 text-white hover:bg-white hover:text-[#1e2b34] whitespace-nowrap">
                  Lihat Portofolio
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

