import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Award, Users } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "CV. Tiga Dimensi Indonesia: badan usaha resmi di balik Studio_ARP. Profil perusahaan, visi misi, standar mutu, K3, dan legalitas lengkap.",
};

const TIMELINE = [
  {
    year: "2019",
    title: "Pendirian CV. Tiga Dimensi Indonesia",
    desc: "Akta Notaris Hearny Annisa, S.H., M.Kn. No. 008/2019. Kemenkumham AHU-0003235-AH.01.14 Tahun 2019.",
  },
  {
    year: "2019",
    title: "Proyek perdana di Garut Kota",
    desc: "Renovasi dan desain interior hunian di lingkungan Regol, menjadi portofolio awal pembentuk reputasi.",
  },
  {
    year: "2020",
    title: "Ekspansi ke Bandung dan Sumedang",
    desc: "Mendapat kepercayaan proyek rumah tinggal dan fasilitas komersial di wilayah Bandung Raya.",
  },
  {
    year: "2021",
    title: "Proyek fasilitas kesehatan",
    desc: "Menyelesaikan pembangunan klinik rawat inap pertama, memperluas kompetensi ke sektor kesehatan.",
  },
  {
    year: "2022",
    title: "Jangkauan Karawang dan sektor F&B",
    desc: "Proyek kafe wisata dan renovasi ruko komersial memperkuat portofolio lintas sektor.",
  },
  {
    year: "2023",
    title: "Proyek instansi di Malang",
    desc: "Gedung layanan publik instansi pemerintah di Kabupaten Malang menjadi pencapaian baru.",
  },
];

const VALUES = [
  {
    title: "Gambar kerja yang bisa dipegang",
    desc: "DED kami mencakup arsitektur, struktur, dan MEE dalam satu paket dokumen yang bisa langsung dieksekusi di lapangan, bukan sekadar render cantik.",
  },
  {
    title: "Harga yang tidak berubah di tengah jalan",
    desc: "RAB kami susun per item pekerjaan dengan spesifikasi bahan yang jelas. Tidak ada biaya tambahan mendadak kecuali ada perubahan scope atas permintaan klien.",
  },
  {
    title: "Tim tetap, bukan subkon anonim",
    desc: "Supervisor kami hadir di lapangan setiap hari. Anda tahu siapa yang bertanggung jawab dan bisa dihubungi kapan saja.",
  },
  {
    title: "Garansi bukan sekadar janji lisan",
    desc: "Garansi pekerjaan 3 bulan tercantum dalam kontrak. Perbaikan kerusakan akibat kualitas pengerjaan kami tangani tanpa biaya tambahan.",
  },
];

export default function TentangPage() {
  return (
    <>
      {/* ━━ Hero ━━ */}
      <section className="bg-[#1e2b34] pt-28 pb-20">
        <div className="container-site">
          <div className="max-w-2xl">
            <Reveal direction="up">
              <p className="label-section">Tentang kami</p>
              <h1
                className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Studio yang tahu cara membangun, bukan hanya menggambar.
              </h1>
              <p className="mt-5 text-white/60 text-lg leading-relaxed">
                Studio_ARP adalah nama operasional desain dan build di bawah
                naungan CV. Tiga Dimensi Indonesia, badan usaha resmi yang
                berdiri sejak 2019 di Garut dengan rekam jejak proyek dari
                rumah tinggal hingga gedung instansi pemerintah.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ Tentang CV. Tiga Dimensi ━━ */}
      <section className="py-20 md:py-24">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Reveal direction="left">
              <div className="relative">
                <div className="bg-[#f6f7f8] border border-[#dde3e8] rounded aspect-square flex items-center justify-center">
                  <Image
                    src="/logo_studio_arp.png"
                    alt="Studio_ARP Logo"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                {/* Accent line */}
                <div className="absolute -left-4 top-8 bottom-8 w-[3px] bg-[#e5a124]" />
              </div>
            </Reveal>

            <Reveal direction="right">
              <p className="label-section">CV. Tiga Dimensi Indonesia</p>
              <h2
                className="mt-3 text-2xl md:text-3xl font-bold text-[#1e2b34]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Badan usaha dengan legalitas lengkap dan rekam jejak terverifikasi.
              </h2>
              <p className="mt-4 text-[#52606d] leading-relaxed">
                Kami bukan perorangan yang bekerja informal. Setiap proyek
                dikerjakan atas nama badan usaha berbadan hukum yang terdaftar
                di Kemenkumham, memiliki NIB aktif, dan NPWP perusahaan. Ini
                berarti klien dilindungi oleh kontrak yang dapat ditegakkan
                secara hukum.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Akta Notaris", value: "No. 008/2019" },
                  { label: "Kemenkumham", value: "AHU-0003235-AH.01.14/2019" },
                  { label: "NIB", value: "9120107280312" },
                  { label: "NPWP", value: "90.350.608.7-443.000" },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-[#e5a124] pl-3">
                    <p className="text-xs text-[#52606d] mb-0.5">{item.label}</p>
                    <p className="tabular text-sm font-semibold text-[#1e2b34]" style={{ fontFamily: "var(--font-jakarta)" }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-[#e5a124] shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[#1e2b34]" style={{ fontFamily: "var(--font-jakarta)" }}>
                    Kantor Utama
                  </p>
                  <p className="text-sm text-[#52606d]">
                    Jl. Bratayudha No. 38, Regol, Garut Kota 44115
                  </p>
                  <p className="text-xs text-[#52606d] mt-1">
                    Area layanan: Garut, Bandung, Sumedang, Karawang, Malang
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ Visi & Misi ━━ */}
      <section className="bg-[#f6f7f8] py-20 md:py-24">
        <div className="container-site">
          <Reveal direction="up">
            <div className="max-w-xl mb-12">
              <p className="label-section">Arah dan tujuan</p>
              <h2
                className="mt-3 text-3xl md:text-4xl font-bold text-[#1e2b34]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Visi dan Misi
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal direction="left">
              <div className="bg-[#1e2b34] text-white p-8 h-full">
                <div className="w-8 h-[2px] bg-[#e5a124] mb-6" />
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Visi
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Menjadi studio arsitektur dan kontraktor terpercaya yang
                  menghasilkan ruang berkualitas teknis tinggi, estetis, dan
                  tepat fungsi bagi pengguna dari berbagai segmen, dari hunian
                  pribadi hingga fasilitas publik, dengan standar pengerjaan
                  yang konsisten dan terukur.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="bg-white border border-[#dde3e8] p-8 h-full">
                <div className="w-8 h-[2px] bg-[#e5a124] mb-6" />
                <h3
                  className="text-xl font-bold text-[#1e2b34] mb-4"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Misi
                </h3>
                <ul className="space-y-3">
                  {[
                    "Menyusun dokumen perencanaan yang dapat dieksekusi langsung di lapangan tanpa ambigu",
                    "Melaksanakan pekerjaan konstruksi dengan disiplin jadwal, standar K3, dan pengawasan supervisor",
                    "Memberikan transparansi biaya melalui RAB terinci sebelum kontrak ditandatangani",
                    "Menjamin kualitas pekerjaan dengan garansi tertulis pasca serah terima",
                    "Terus memperluas kapasitas teknis tim untuk menangani proyek dari skala kecil hingga bangunan komersial",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#52606d]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#e5a124] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ Nilai-nilai kerja ━━ */}
      <section className="py-20 md:py-24">
        <div className="container-site">
          <Reveal direction="up">
            <p className="label-section">Standar mutu</p>
            <h2
              className="mt-3 text-3xl md:text-4xl font-bold text-[#1e2b34] max-w-xl"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Yang membedakan cara kami bekerja.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="border border-[#dde3e8] p-6 hover:border-[#e5a124] transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <Award size={18} className="text-[#e5a124] shrink-0" />
                    <h3
                      className="text-base font-semibold text-[#1e2b34]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {v.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#52606d] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ Timeline ━━ */}
      <section className="bg-[#f6f7f8] py-20 md:py-24">
        <div className="container-site">
          <Reveal direction="up">
            <p className="label-section">Perjalanan</p>
            <h2
              className="mt-3 text-3xl md:text-4xl font-bold text-[#1e2b34]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Lima tahun membangun rekam jejak.
            </h2>
          </Reveal>

          <div className="mt-12 relative">
            {/* Vertical line */}
            <div className="absolute left-[42px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#dde3e8] hidden md:block" />

            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <Reveal key={i} delay={i * 70}>
                  <div className={`flex gap-6 md:gap-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`hidden md:flex flex-1 ${i % 2 === 0 ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-xs ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                        <p
                          className="tabular text-sm font-semibold text-[#1e2b34]"
                          style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                          {item.title}
                        </p>
                        <p className="text-sm text-[#52606d] mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Year bubble */}
                    <div className="shrink-0 flex flex-col items-center gap-2 relative">
                      <div className="w-16 h-8 rounded-full bg-[#1e2b34] flex items-center justify-center tabular text-sm font-bold text-[#e5a124]"
                        style={{ fontFamily: "var(--font-jakarta)" }}>
                        {item.year}
                      </div>
                    </div>

                    {/* Mobile + right-side content */}
                    <div className="flex-1 md:hidden">
                      <p className="text-sm font-semibold text-[#1e2b34]" style={{ fontFamily: "var(--font-jakarta)" }}>
                        {item.title}
                      </p>
                      <p className="text-sm text-[#52606d] mt-1 leading-relaxed">{item.desc}</p>
                    </div>

                    <div className={`hidden md:flex flex-1 ${i % 2 === 0 ? "justify-start" : "justify-end"}`} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━ Tim ━━ */}
      <section className="py-16 md:py-20">
        <div className="container-site">
          <Reveal direction="up">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-14 h-14 rounded bg-[#f6f7f8] border border-[#dde3e8] flex items-center justify-center shrink-0">
                <Users size={24} className="text-[#455662]" />
              </div>
              <div>
                <h3
                  className="text-lg font-bold text-[#1e2b34]"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Tim lintas disiplin
                </h3>
                <p className="text-sm text-[#52606d] mt-1 max-w-xl">
                  Studio_ARP diisi oleh arsitek, drafter, desainer interior,
                  surveyor, supervisor lapangan, dan tim tukang spesialis. Semua
                  bekerja dalam satu koordinasi proyek agar tidak ada informasi
                  yang hilang di antara pihak yang berbeda.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━ CTA ━━ */}
      <section className="bg-[#1e2b34] py-16">
        <div className="container-site text-center">
          <Reveal direction="up">
            <h2
              className="text-2xl md:text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Ingin tahu lebih lanjut cara kami bekerja?
            </h2>
            <p className="mt-3 text-white/60 max-w-md mx-auto">
              Jadwalkan pertemuan dengan tim kami. Tanpa komitmen, tanpa biaya konsultasi awal.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link href="/kontak" className="btn-primary">
                Hubungi Kami <ArrowRight size={16} />
              </Link>
              <Link href="/proyek" className="btn-ghost border-white/40 text-white hover:bg-white hover:text-[#1e2b34]">
                Lihat Portofolio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

