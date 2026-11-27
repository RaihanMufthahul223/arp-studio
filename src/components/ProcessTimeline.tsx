"use client";

import { useState } from "react";
import Reveal from "./Reveal";

interface Step {
  number: string;
  title: string;
  description: string;
  outputs: string[];
  duration: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Konsultasi & Survei Lokasi",
    description:
      "Pertemuan awal untuk memahami kebutuhan ruang, anggaran, dan gaya yang diinginkan. Tim kami melakukan survei kondisi eksisting, pengukuran site, dan dokumentasi foto untuk dasar perencanaan.",
    outputs: [
      "Laporan survei kondisi eksisting",
      "Sketsa awal konsep tata letak",
      "Estimasi anggaran awal",
    ],
    duration: "1-3 hari kerja",
  },
  {
    number: "02",
    title: "DED & RAB",
    description:
      "Penyusunan Dokumen Rencana Detail (DED) mencakup gambar arsitektur, struktur, dan MEE. RAB disusun per item pekerjaan dengan spesifikasi bahan yang jelas sehingga tidak ada biaya kejutan di tengah proyek.",
    outputs: [
      "Gambar kerja arsitektur (denah, tampak, potongan)",
      "Gambar struktur (pondasi, kolom, balok, plat)",
      "Gambar MEE (listrik, air bersih, sanitasi)",
      "RAB detail per item pekerjaan",
      "Spesifikasi teknis bahan dan finishing",
    ],
    duration: "5-14 hari kerja",
  },
  {
    number: "03",
    title: "Kontrak & Pelaksanaan",
    description:
      "Penandatanganan kontrak kerja dengan jadwal terperinci dan klausul garansi. Pekerjaan lapangan dilaksanakan dengan penerapan prosedur K3, pengawasan supervisor, dan laporan progres berkala kepada klien.",
    outputs: [
      "Kontrak kerja bermaterai",
      "Jadwal pekerjaan (time schedule)",
      "Laporan progres mingguan",
      "Dokumentasi foto tiap tahap",
      "Penerapan APD dan prosedur K3",
    ],
    duration: "Sesuai scope proyek",
  },
  {
    number: "04",
    title: "Serah Terima & Garansi",
    description:
      "Pemeriksaan bersama klien sebelum serah terima. Perbaikan punch list diselesaikan sebelum kunci diserahkan. Garansi pekerjaan 3 bulan berlaku untuk perbaikan kerusakan akibat kualitas pengerjaan.",
    outputs: [
      "Berita acara serah terima",
      "Dokumentasi as-built drawing",
      "Manual perawatan material",
      "Garansi pekerjaan 3 bulan",
    ],
    duration: "3-5 hari pemeriksaan",
  },
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {STEPS.map((step, i) => {
        const isOpen = activeStep === i;
        return (
          <Reveal key={step.number} delay={i * 80}>
            <div
              className={`border rounded transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "border-[#e5a124] bg-[#fdfaf4]"
                  : "border-[#dde3e8] bg-white hover:border-[#455662]"
              }`}
            >
              <button
                className="w-full flex items-center gap-5 p-5 md:p-6 text-left"
                onClick={() => setActiveStep(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span
                  className="tabular text-3xl font-bold leading-none shrink-0 transition-colors"
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    color: isOpen ? "#e5a124" : "#dde3e8",
                  }}
                >
                  {step.number}
                </span>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-semibold text-[#1e2b34]"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {step.title}
                  </p>
                  <p className="mt-0.5 text-xs text-[#52606d]">
                    {step.duration}
                  </p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                  className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="#52606d"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                style={{
                  maxHeight: isOpen ? "600px" : "0",
                  transition: "max-height 350ms cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <div className="px-5 md:px-6 pb-6 pl-[72px] md:pl-[80px]">
                  <p className="text-sm text-[#52606d] leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest text-[#e5a124] mb-2"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Keluaran Tahap Ini
                  </p>
                  <ul className="space-y-1.5">
                    {step.outputs.map((output) => (
                      <li
                        key={output}
                        className="flex items-start gap-2 text-sm text-[#1e2b34]"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#e5a124] shrink-0" />
                        {output}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

