import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProjectBriefForm from "@/components/ProjectBriefForm";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Studio_ARP untuk konsultasi desain, survei lokasi, atau pengiriman project brief. WhatsApp, email, atau kunjungi kantor kami di Garut.",
};

export default function KontakPage() {
  return (
    <>
      {/* ━━ Hero ━━ */}
      <section className="bg-[#1e2b34] pt-28 pb-16">
        <div className="container-site">
          <div className="max-w-2xl">
            <Reveal direction="up">
              <p className="label-section">Hubungi kami</p>
              <h1
                className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Proyek dimulai dari percakapan pertama.
              </h1>
              <p className="mt-5 text-white/60 text-lg leading-relaxed">
                Tidak perlu mempersiapkan dokumen lengkap dulu. Ceritakan apa
                yang Anda butuhkan, tim kami yang akan memandu langkah
                selanjutnya.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ Kontak Info + Form ━━ */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Info panel */}
            <Reveal direction="left" className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <p className="label-section mb-5">Cara menghubungi kami</p>

                  <div className="space-y-5">
                    <div className="flex gap-4">
                      <div className="w-9 h-9 rounded bg-[#f6f7f8] border border-[#dde3e8] flex items-center justify-center shrink-0">
                        <MessageSquare size={15} className="text-[#e5a124]" />
                      </div>
                      <div>
                        <p
                          className="text-sm font-semibold text-[#1e2b34] mb-1"
                          style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                          WhatsApp
                        </p>
                        <a
                          href="https://wa.me/6282114000297?text=Halo%20Studio_ARP%2C%20saya%20ingin%20berkonsultasi."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#52606d] hover:text-[#e5a124] transition-colors tabular"
                        >
                          +62 821-1400-0297
                        </a>
                        <p className="text-xs text-[#52606d] mt-0.5">
                          Respons biasanya dalam 2 jam kerja
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-9 h-9 rounded bg-[#f6f7f8] border border-[#dde3e8] flex items-center justify-center shrink-0">
                        <Mail size={15} className="text-[#e5a124]" />
                      </div>
                      <div>
                        <p
                          className="text-sm font-semibold text-[#1e2b34] mb-1"
                          style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                          Email
                        </p>
                        <a
                          href="mailto:studioarp97@gmail.com"
                          className="text-sm text-[#52606d] hover:text-[#e5a124] transition-colors"
                        >
                          studioarp97@gmail.com
                        </a>
                        <p className="text-xs text-[#52606d] mt-0.5">
                          Untuk kebutuhan penawaran formal atau dokumen
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-9 h-9 rounded bg-[#f6f7f8] border border-[#dde3e8] flex items-center justify-center shrink-0">
                        <Phone size={15} className="text-[#e5a124]" />
                      </div>
                      <div>
                        <p
                          className="text-sm font-semibold text-[#1e2b34] mb-1"
                          style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                          Telepon langsung
                        </p>
                        <a
                          href="tel:+6282114000297"
                          className="text-sm text-[#52606d] hover:text-[#e5a124] transition-colors tabular"
                        >
                          +62 821-1400-0297
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#dde3e8] pt-6">
                  <div className="flex gap-4">
                    <div className="w-9 h-9 rounded bg-[#f6f7f8] border border-[#dde3e8] flex items-center justify-center shrink-0">
                      <MapPin size={15} className="text-[#e5a124]" />
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold text-[#1e2b34] mb-1"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        Kantor Studio_ARP
                      </p>
                      <p className="text-sm text-[#52606d] leading-relaxed">
                        Jl. Bratayudha No. 38
                        <br />
                        Regol, Garut Kota
                        <br />
                        Jawa Barat 44115
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-4">
                    <div className="w-9 h-9 rounded bg-[#f6f7f8] border border-[#dde3e8] flex items-center justify-center shrink-0">
                      <Clock size={15} className="text-[#e5a124]" />
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold text-[#1e2b34] mb-1"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        Jam operasional
                      </p>
                      <p className="text-sm text-[#52606d]">
                        Senin s.d. Jumat: 08.00 - 17.00 WIB
                        <br />
                        Sabtu: 08.00 - 13.00 WIB
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f6f7f8] border border-[#dde3e8] p-4 rounded">
                  <p
                    className="text-xs font-semibold text-[#1e2b34] mb-2"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Area Layanan
                  </p>
                  <p className="text-xs text-[#52606d] leading-relaxed">
                    Garut, Bandung, Sumedang, Karawang, Malang, dan daerah
                    sekitarnya. Untuk proyek di luar area tersebut, hubungi kami
                    terlebih dahulu untuk pembahasan biaya mobilisasi.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal direction="right" delay={100} className="lg:col-span-3">
              <div className="bg-[#f6f7f8] border border-[#dde3e8] p-6 md:p-8 rounded">
                <p
                  className="text-xs font-semibold uppercase tracking-widest text-[#e5a124] mb-2"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Project brief
                </p>
                <h2
                  className="text-xl font-bold text-[#1e2b34] mb-1"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Kirim ringkasan kebutuhan proyek Anda
                </h2>
                <p className="text-sm text-[#52606d] mb-6">
                  Formulir ini akan merangkai pesan terstruktur dan mengirimnya
                  langsung ke WhatsApp kami. Tanpa akun, tanpa daftar.
                </p>
                <ProjectBriefForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ Map placeholder ━━ */}
      <section className="border-t border-[#dde3e8]">
        <div className="container-site py-10">
          <Reveal direction="up">
            <p className="label-section mb-4">Lokasi kantor</p>
            <div
              className="w-full bg-[#f6f7f8] border border-[#dde3e8] rounded flex flex-col items-center justify-center gap-3 text-[#52606d]"
              style={{ height: "280px" }}
            >
              <MapPin size={32} className="text-[#455662]" />
              <div className="text-center">
                <p className="font-semibold text-[#1e2b34] text-sm" style={{ fontFamily: "var(--font-jakarta)" }}>
                  Jl. Bratayudha No. 38, Regol, Garut Kota
                </p>
                <a
                  href="https://maps.google.com/?q=Jl.+Bratayudha+No.+38,+Regol,+Garut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-[#e5a124] hover:underline"
                >
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━ FAQ ━━ */}
      <section className="py-16 md:py-20 bg-[#f6f7f8]">
        <div className="container-site">
          <Reveal direction="up">
            <p className="label-section mb-8">Pertanyaan umum</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
              {[
                {
                  q: "Apakah konsultasi awal berbayar?",
                  a: "Tidak. Konsultasi awal dan survei lokasi (dalam area layanan) kami lakukan secara gratis sebelum ada kesepakatan kontrak.",
                },
                {
                  q: "Berapa lama proses penyusunan DED dan RAB?",
                  a: "Tergantung kompleksitas proyek. Untuk rumah tinggal sederhana, biasanya 5-7 hari kerja. Proyek komersial bisa 10-14 hari.",
                },
                {
                  q: "Apakah bisa hanya minta jasa desain tanpa konstruksi?",
                  a: "Bisa. Kami menyediakan layanan desain dan penyusunan DED sebagai produk terpisah dari pelaksanaan konstruksi.",
                },
                {
                  q: "Bagaimana sistem pembayaran proyek?",
                  a: "Pembayaran dilakukan bertahap sesuai progres pekerjaan, biasanya dibagi menjadi 3-4 termin yang tercantum dalam kontrak.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="bg-white border border-[#dde3e8] p-5 rounded"
                >
                  <p
                    className="text-sm font-semibold text-[#1e2b34] mb-2"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {faq.q}
                  </p>
                  <p className="text-sm text-[#52606d] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

