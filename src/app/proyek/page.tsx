import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProyekClientPage from "./ProyekClientPage";

export const metadata: Metadata = {
  title: "Proyek",
  description:
    "Portofolio Studio_ARP: hunian, perumahan cluster, klinik, kafe, kantor, dan instansi di Garut, Bandung, Sumedang, Karawang, dan Malang.",
};

export default function ProyekPage() {
  return (
    <>
      {/* ━━ Hero ━━ */}
      <section className="bg-[#1e2b34] pt-28 pb-16">
        <div className="container-site">
          <div className="max-w-2xl">
            <Reveal direction="up">
              <p className="label-section">Portofolio</p>
              <h1
                className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Proyek nyata, bukan mock-up.
              </h1>
              <p className="mt-4 text-white/60 text-lg leading-relaxed">
                Setiap proyek di halaman ini dikerjakan langsung oleh tim
                Studio_ARP, dari survei awal hingga serah terima kunci.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ Catalog with filter ━━ */}
      <div className="bg-[#f6f7f8] min-h-screen">
        <ProyekClientPage />
      </div>
    </>
  );
}

