"use client";

import { useState, useCallback } from "react";
import { Send, CheckCircle } from "lucide-react";

type RoomType =
  | ""
  | "rumah-tinggal"
  | "renovasi"
  | "ruko-kantor"
  | "klinik"
  | "kafe-resto"
  | "lainnya";

interface FormState {
  nama: string;
  phone: string;
  jenis: RoomType;
  lokasi: string;
  luas: string;
  anggaran: string;
  catatan: string;
}

const INITIAL: FormState = {
  nama: "",
  phone: "",
  jenis: "",
  lokasi: "",
  luas: "",
  anggaran: "",
  catatan: "",
};

const JENIS_OPTIONS: { value: RoomType; label: string }[] = [
  { value: "rumah-tinggal", label: "Rumah Tinggal Baru" },
  { value: "renovasi", label: "Renovasi / Perbaikan" },
  { value: "ruko-kantor", label: "Ruko / Kantor" },
  { value: "klinik", label: "Klinik / Fasilitas Kesehatan" },
  { value: "kafe-resto", label: "Kafe / Restoran" },
  { value: "lainnya", label: "Lainnya" },
];

const ANGGARAN_OPTIONS = [
  "Di bawah Rp 100 juta",
  "Rp 100 - 300 juta",
  "Rp 300 - 600 juta",
  "Rp 600 juta - 1 miliar",
  "Di atas Rp 1 miliar",
  "Belum ada gambaran",
];

export default function ProjectBriefForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const update = useCallback(
    (field: keyof FormState, value: string) =>
      setForm((prev) => ({ ...prev, [field]: value })),
    []
  );

  const buildWAMessage = () => {
    const lines = [
      `Halo Studio_ARP, saya ingin berkonsultasi mengenai proyek.`,
      ``,
      `*Nama:* ${form.nama}`,
      `*No. HP:* ${form.phone}`,
      `*Jenis Proyek:* ${JENIS_OPTIONS.find((o) => o.value === form.jenis)?.label || form.jenis}`,
      `*Lokasi:* ${form.lokasi}`,
      `*Luas (estimasi):* ${form.luas ? form.luas + " m²" : "-"}`,
      `*Anggaran:* ${form.anggaran || "-"}`,
      `*Catatan:* ${form.catatan || "-"}`,
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nama || !form.phone || !form.jenis) return;
    setSubmitted(true);
    const msg = buildWAMessage();
    setTimeout(() => {
      window.open(`https://wa.me/6282114000297?text=${msg}`, "_blank");
    }, 400);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={48} className="text-[#e5a124] mb-4" />
        <h3
          className="text-xl font-bold text-[#1e2b34] mb-2"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Pesan terkirim ke WhatsApp
        </h3>
        <p className="text-sm text-[#52606d] max-w-sm">
          Anda akan diarahkan ke WhatsApp. Jika tidak terbuka otomatis, klik
          tombol di bawah.
        </p>
        <a
          href={`https://wa.me/6282114000297?text=${buildWAMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 btn-primary"
        >
          Buka WhatsApp
        </a>
        <button
          onClick={() => {
            setForm(INITIAL);
            setSubmitted(false);
          }}
          className="mt-3 text-sm text-[#52606d] underline"
        >
          Isi ulang formulir
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="nama"
            className="block text-xs font-semibold text-[#1e2b34] mb-1.5 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Nama Lengkap *
          </label>
          <input
            id="nama"
            type="text"
            required
            value={form.nama}
            onChange={(e) => update("nama", e.target.value)}
            placeholder="Budi Santoso"
            className="w-full border border-[#dde3e8] rounded px-4 py-3 text-sm text-[#12181d] placeholder-[#c0c8d0] focus:outline-none focus:border-[#e5a124] transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold text-[#1e2b34] mb-1.5 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Nomor WhatsApp *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="08xx-xxxx-xxxx"
            className="w-full border border-[#dde3e8] rounded px-4 py-3 text-sm text-[#12181d] placeholder-[#c0c8d0] focus:outline-none focus:border-[#e5a124] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="jenis"
            className="block text-xs font-semibold text-[#1e2b34] mb-1.5 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Jenis Proyek *
          </label>
          <select
            id="jenis"
            required
            value={form.jenis}
            onChange={(e) => update("jenis", e.target.value)}
            className="w-full border border-[#dde3e8] rounded px-4 py-3 text-sm text-[#12181d] focus:outline-none focus:border-[#e5a124] transition-colors bg-white appearance-none"
          >
            <option value="">Pilih jenis proyek</option>
            {JENIS_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="lokasi"
            className="block text-xs font-semibold text-[#1e2b34] mb-1.5 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Lokasi Proyek
          </label>
          <input
            id="lokasi"
            type="text"
            value={form.lokasi}
            onChange={(e) => update("lokasi", e.target.value)}
            placeholder="Kota / Kecamatan"
            className="w-full border border-[#dde3e8] rounded px-4 py-3 text-sm text-[#12181d] placeholder-[#c0c8d0] focus:outline-none focus:border-[#e5a124] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="luas"
            className="block text-xs font-semibold text-[#1e2b34] mb-1.5 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Luas Bangunan (m²)
          </label>
          <input
            id="luas"
            type="number"
            min="0"
            value={form.luas}
            onChange={(e) => update("luas", e.target.value)}
            placeholder="mis. 120"
            className="w-full border border-[#dde3e8] rounded px-4 py-3 text-sm text-[#12181d] placeholder-[#c0c8d0] focus:outline-none focus:border-[#e5a124] transition-colors tabular"
          />
        </div>
        <div>
          <label
            htmlFor="anggaran"
            className="block text-xs font-semibold text-[#1e2b34] mb-1.5 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Anggaran Estimasi
          </label>
          <select
            id="anggaran"
            value={form.anggaran}
            onChange={(e) => update("anggaran", e.target.value)}
            className="w-full border border-[#dde3e8] rounded px-4 py-3 text-sm text-[#12181d] focus:outline-none focus:border-[#e5a124] transition-colors bg-white appearance-none"
          >
            <option value="">Pilih rentang anggaran</option>
            {ANGGARAN_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="catatan"
          className="block text-xs font-semibold text-[#1e2b34] mb-1.5 uppercase tracking-wide"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Catatan Tambahan
        </label>
        <textarea
          id="catatan"
          rows={4}
          value={form.catatan}
          onChange={(e) => update("catatan", e.target.value)}
          placeholder="Ceritakan kebutuhan khusus, referensi gaya, atau pertanyaan spesifik Anda..."
          className="w-full border border-[#dde3e8] rounded px-4 py-3 text-sm text-[#12181d] placeholder-[#c0c8d0] focus:outline-none focus:border-[#e5a124] transition-colors resize-none"
        />
      </div>

      <div className="flex items-center justify-between pt-1">
        <p className="text-xs text-[#52606d]">
          Pesan akan dikirim langsung ke WhatsApp kami
        </p>
        <button type="submit" className="btn-primary gap-2">
          <Send size={15} />
          Kirim Brief
        </button>
      </div>
    </form>
  );
}

