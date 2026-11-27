import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  FileText,
  HardHat,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import ProcessTimeline from "@/components/ProcessTimeline";
import ProjectBriefForm from "@/components/ProjectBriefForm";
import ProjectImageBox from "@/components/ProjectImageBox";
import projects from "@/data/projects.json";
import { Project } from "@/types/project";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "Studio_ARP menangani perencanaan, desain & build arsitektur, interior, eksterior, konstruksi, dan renovasi di Garut, Bandung, Sumedang, Karawang, dan Malang.",
};

const FEATURED = (projects as Project[]).filter((p) => p.featured).slice(0, 3);

const STATS = [
  { value: "2019", label: "Tahun berdiri" },
  { value: "50+", label: "Proyek selesai" },
  { value: "5", label: "Kota jangkauan" },
  { value: "3 bln", label: "Garansi pekerjaan" },
];

const SERVICES_PREVIEW = [
  {
    title: "Perencanaan & DED",
    desc: "Gambar kerja arsitektur, struktur, dan MEE lengkap dengan RAB terinci, siap tender atau eksekusi.",
    icon: FileText,
  },
  {
    title: "Design & Build",
    desc: "Satu kontrak dari gambar konsep hingga kunci di tangan. Arsitektural, interior, dan eksterior.",
    icon: HardHat,
  },
  {
    title: "Konstruksi & Renovasi",
    desc: "Pelaksanaan pekerjaan sipil dengan pengawasan ketat, penerapan K3, dan laporan progres berkala.",
    icon: ShieldCheck,
  },
  {
    title: "Furnitur Custom",
    desc: "Kitchen set, lemari tanam, cabinet, dan rak TV dari bahan pilihan (blokboard, multiplek, MDF) finishing HPL, duco, atau melamik.",
    icon: Clock,
  },
];

const CATEGORY_LABELS: Record<string, string> = {
  residensial: "Residensial",
  komersial: "Komersial",
  kesehatan: "Kesehatan",
  instansi: "Instansi",
  wisata: "Wisata",
  fb: "F&B",
};

export default function BerandaPage() {
  return (
    <>
      {/* ━━ HERO (Attention) ━━ */}
      <section className="relative min-h-screen flex flex-col justify-end bg-[#1e2b34] overflow-hidden">
        {/* Background texture layer */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 79px,
                rgba(255,255,255,0.03) 79px,
                rgba(255,255,255,0.03) 80px
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 79px,
                rgba(255,255,255,0.03) 79px,
                rgba(255,255,255,0.03) 80px
              )
            `,
          }}
        />

        {/* Amber accent bar */}
        <div className="absolute top-0 left-0 w-[3px] h-full bg-[#e5a124]" />

        <div className="container-site relative pb-20 pt-32">
          <div className="max-w-3xl">
            <Reveal direction="up" delay={100}>
              <p className="label-section mb-5">Studio_ARP oleh CV. Tiga Dimensi Indonesia</p>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-[-0.03em]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Ruang yang{" "}
                <span className="text-[#e5a124]">dirancang serius</span>
                <br />
                dibangun tanpa kompromi.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
                Dari penyusunan DED dan RAB hingga serah terima kunci, kami
                menangani setiap tahap dengan tim terlatih, gambar kerja
                presisi, dan kontrak garansi 3 bulan.
              </p>
            </Reveal>

            <Reveal direction="up" delay={420}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/kontak" className="btn-primary">
                  Konsultasi Gratis
                  <ArrowRight size={16} />
                </Link>
                <Link href="/proyek" className="btn-ghost border-white/40 text-white hover:bg-white hover:text-[#1e2b34]">
                  Lihat Portofolio
                </Link>
              </div>
            </Reveal>

            {/* Stats strip */}
            <Reveal direction="up" delay={550}>
              <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p
                      className="tabular text-2xl md:text-3xl font-bold text-[#e5a124]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {s.value}
                    </p>
                    <p className="mt-0.5 text-xs text-white/50 uppercase tracking-widest">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ INTEREST: Layanan Sekilas ━━ */}
      <section className="bg-[#f6f7f8] py-20 md:py-24">
        <div className="container-site">
          <Reveal direction="up">
            <p className="label-section">Apa yang kami kerjakan</p>
            <h2
              className="mt-3 text-3xl md:text-4xl font-bold text-[#1e2b34] max-w-xl"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Satu studio, seluruh rantai pekerjaan.
            </h2>
            <p className="mt-3 text-[#52606d] max-w-lg">
              Tidak perlu koordinasi antara arsitek, kontraktor, dan vendor
              furnitur yang berbeda. Kami tangani dari konsep hingga pemasangan
              terakhir.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES_PREVIEW.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Reveal key={svc.title} delay={i * 80}>
                  <div className="bg-white border border-[#dde3e8] p-6 h-full hover:border-[#e5a124] hover:shadow-sm transition-all duration-300 group">
                    <div className="w-10 h-10 rounded bg-[#1e2b34] flex items-center justify-center mb-5 group-hover:bg-[#e5a124] transition-colors duration-300">
                      <Icon size={18} className="text-white" />
                    </div>
                    <h3
                      className="text-base font-semibold text-[#1e2b34] mb-2"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-sm text-[#52606d] leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={400}>
            <div className="mt-8 text-center">
              <Link href="/layanan" className="btn-ghost">
                Selengkapnya tentang Layanan
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━ INTEREST: Alur Kerja 4 Tahap ━━ */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Reveal direction="up">
                <p className="label-section">Alur kerja</p>
                <h2
                  className="mt-3 text-3xl md:text-4xl font-bold text-[#1e2b34]"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Sistematis dari survei hingga garansi.
                </h2>
                <p className="mt-3 text-[#52606d] leading-relaxed">
                  Banyak proyek molor bukan karena masalah teknis, tapi karena
                  tidak ada dokumen kerja yang jelas di awal. Kami mulai setiap
                  proyek dengan DED dan RAB yang terinci sebelum pekerjaan fisik
                  dimulai.
                </p>
              </Reveal>

              <Reveal delay={150}>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={18} className="mt-0.5 text-[#e5a124] shrink-0" />
                    <p className="text-sm text-[#52606d]">
                      Kontrak bermaterai dengan jadwal dan spesifikasi bahan
                      tertulis
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={18} className="mt-0.5 text-[#e5a124] shrink-0" />
                    <p className="text-sm text-[#52606d]">
                      Penerapan prosedur K3 wajib di seluruh area pekerjaan
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={18} className="mt-0.5 text-[#e5a124] shrink-0" />
                    <p className="text-sm text-[#52606d]">
                      Laporan progres mingguan dengan dokumentasi foto
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={18} className="mt-0.5 text-[#e5a124] shrink-0" />
                    <p className="text-sm text-[#52606d]">
                      Garansi pekerjaan 3 bulan setelah serah terima
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div>
              <ProcessTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* ━━ DESIRE: Portofolio Unggulan ━━ */}
      <section className="bg-[#f6f7f8] py-20 md:py-24">
        <div className="container-site">
          <Reveal direction="up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <p className="label-section">Portofolio pilihan</p>
                <h2
                  className="mt-3 text-3xl md:text-4xl font-bold text-[#1e2b34]"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Ruang yang sudah jadi bukti.
                </h2>
              </div>
              <Link
                href="/proyek"
                className="text-sm font-semibold text-[#1e2b34] hover:text-[#e5a124] transition-colors flex items-center gap-1.5"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Semua proyek <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FEATURED.map((project, i) => (
              <Reveal key={project.id} delay={i * 100}>
                <Link
                  href={`/proyek/${project.slug}`}
                  className="group block bg-white border border-[#dde3e8] overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  {/* Image with fallback */}
                  <div
                    className="relative overflow-hidden bg-[#1e2b34]"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <ProjectImageBox
                      src={project.coverImage}
                      alt={project.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="badge">
                        {CATEGORY_LABELS[project.category] ?? project.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 tabular text-xs font-mono text-white/50 bg-black/30 px-2 py-1 rounded">
                      {project.year}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3
                      className="text-base font-semibold text-[#1e2b34] group-hover:text-[#e5a124] transition-colors"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#52606d]">
                      {project.location}, {project.city}
                    </p>
                    {project.area && (
                      <p className="mt-2 text-xs text-[#52606d] tabular">
                        {project.area} m²
                        {project.duration ? ` · ${project.duration} minggu` : ""}
                      </p>
                    )}
                    <p className="mt-3 text-sm text-[#52606d] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ INTEREST: Legalitas ━━ */}
      <section className="py-16 md:py-20 border-b border-[#dde3e8]">
        <div className="container-site">
          <Reveal direction="up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="label-section">Legalitas & kepercayaan</p>
                <h2
                  className="mt-3 text-2xl md:text-3xl font-bold text-[#1e2b34]"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Badan usaha resmi, bukan kontraktor tanpa alamat.
                </h2>
                <p className="mt-3 text-[#52606d] leading-relaxed">
                  CV. Tiga Dimensi Indonesia didirikan tahun 2019 dengan akta
                  notaris resmi. Setiap kontrak kami tandatangani atas nama
                  badan usaha yang terdaftar dan bertanggung jawab secara hukum.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Akta Notaris",
                    value: "No. 008/2019",
                    sub: "Hearny Annisa, S.H., M.Kn.",
                  },
                  {
                    label: "Kemenkumham",
                    value: "AHU-0003235",
                    sub: "AH.01.14 Tahun 2019",
                  },
                  { label: "NIB", value: "9120107280312", sub: "OSS Terintegrasi" },
                  {
                    label: "NPWP",
                    value: "90.350.608.7",
                    sub: "443.000",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-[#f6f7f8] border border-[#dde3e8] p-4 rounded"
                  >
                    <p className="text-xs text-[#52606d] uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p
                      className="tabular text-sm font-bold text-[#1e2b34]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {item.value}
                    </p>
                    <p className="text-xs text-[#52606d] mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━ ACTION: Project Brief Form ━━ */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <div className="max-w-2xl mx-auto">
            <Reveal direction="up">
              <p className="label-section text-center">Mulai proyek Anda</p>
              <h2
                className="mt-3 text-3xl md:text-4xl font-bold text-[#1e2b34] text-center"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Ceritakan kebutuhan ruang Anda.
              </h2>
              <p className="mt-3 text-[#52606d] text-center max-w-md mx-auto">
                Isi formulir singkat ini dan tim kami akan menghubungi Anda
                dalam 1 hari kerja untuk jadwal konsultasi atau survei lokasi.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-10 bg-[#f6f7f8] border border-[#dde3e8] p-6 md:p-8 rounded">
                <ProjectBriefForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
