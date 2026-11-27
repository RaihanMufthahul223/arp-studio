import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Maximize2,
  Clock,
  ArrowRight,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProjectImageBox from "@/components/ProjectImageBox";
import projectsData from "@/data/projects.json";
import { Project } from "@/types/project";

const projects = projectsData as Project[];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Proyek tidak ditemukan" };
  return {
    title: project.title,
    description: project.description,
  };
}

const CATEGORY_LABELS: Record<string, string> = {
  residensial: "Residensial",
  komersial: "Komersial",
  kesehatan: "Kesehatan",
  instansi: "Instansi",
  wisata: "Wisata",
  fb: "F&B",
};

const PHASE_LABELS: Record<string, string> = {
  perencanaan: "Perencanaan",
  desain: "Desain",
  konstruksi: "Konstruksi",
  renovasi: "Renovasi",
  interior: "Interior",
  eksterior: "Eksterior",
};

function ProyekDetailSkeleton() {
  return (
    <div className="min-h-screen bg-[#f6f7f8] pt-20">
      <div className="bg-white border-b border-[#dde3e8]">
        <div className="container-site py-4">
          <div className="h-5 w-48 bg-[#dde3e8] rounded animate-pulse" />
        </div>
      </div>
      <div className="container-site py-12 md:py-16">
        <div className="h-10 w-2/3 bg-[#dde3e8] rounded animate-pulse mb-4" />
        <div className="h-5 w-1/3 bg-[#dde3e8] rounded animate-pulse" />
      </div>
    </div>
  );
}

export default function ProyekDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<ProyekDetailSkeleton />}>
      <ProyekDetailContent params={params} />
    </Suspense>
  );
}

async function ProyekDetailContent({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 2);

  return (
    <>
      {/* ━━ Breadcrumb ━━ */}
      <div className="bg-white border-b border-[#dde3e8] pt-20">
        <div className="container-site py-4">
          <nav className="flex items-center gap-2 text-sm text-[#52606d]">
            <Link href="/proyek" className="hover:text-[#1e2b34] transition-colors inline-flex items-center gap-1">
              <ArrowLeft size={14} /> Semua Proyek
            </Link>
            <span className="text-[#dde3e8]">/</span>
            <span className="text-[#1e2b34] font-medium">{project.title}</span>
          </nav>
        </div>
      </div>

      {/* ━━ Hero info ━━ */}
      <section className="bg-[#f6f7f8] py-12 md:py-16">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <Reveal direction="up">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge">
                    {CATEGORY_LABELS[project.category] ?? project.category}
                  </span>
                  {project.phases.map((ph) => (
                    <span key={ph} className="badge">
                      {PHASE_LABELS[ph] ?? ph}
                    </span>
                  ))}
                </div>
                <h1
                  className="text-3xl md:text-4xl font-bold text-[#1e2b34]"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {project.title}
                </h1>
                {project.client && (
                  <p className="mt-2 text-[#52606d]">Klien: {project.client}</p>
                )}
              </Reveal>
            </div>

            <Reveal direction="right" delay={100}>
              <div className="bg-white border border-[#dde3e8] p-5 rounded space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin size={15} className="text-[#e5a124] shrink-0" />
                  <div>
                    <p className="text-xs text-[#52606d]">Lokasi</p>
                    <p className="text-sm font-medium text-[#1e2b34]">
                      {project.location}, {project.city}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={15} className="text-[#e5a124] shrink-0" />
                  <div>
                    <p className="text-xs text-[#52606d]">Tahun</p>
                    <p className="tabular text-sm font-medium text-[#1e2b34]">{project.year}</p>
                  </div>
                </div>
                {project.area && (
                  <div className="flex items-center gap-3">
                    <Maximize2 size={15} className="text-[#e5a124] shrink-0" />
                    <div>
                      <p className="text-xs text-[#52606d]">Luas</p>
                      <p className="tabular text-sm font-medium text-[#1e2b34]">{project.area} m²</p>
                    </div>
                  </div>
                )}
                {project.duration && (
                  <div className="flex items-center gap-3">
                    <Clock size={15} className="text-[#e5a124] shrink-0" />
                    <div>
                      <p className="text-xs text-[#52606d]">Durasi pengerjaan</p>
                      <p className="tabular text-sm font-medium text-[#1e2b34]">{project.duration} minggu</p>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ Before/After Slider ━━ */}
      {project.beforeAfter && (
        <section className="py-12 md:py-16">
          <div className="container-site">
            <Reveal direction="up">
              <p className="label-section mb-4">Perbandingan desain dan realisasi</p>
              <p className="text-sm text-[#52606d] mb-6">
                Geser slider untuk membandingkan render 3D dengan hasil pembangunan sebenarnya.
              </p>
              <BeforeAfterSlider
                beforeSrc={project.beforeAfter.before}
                afterSrc={project.beforeAfter.after}
                beforeLabel={project.beforeAfter.beforeLabel}
                afterLabel={project.beforeAfter.afterLabel}
                alt={`Perbandingan desain dan realisasi ${project.title}`}
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* ━━ Deskripsi & Scope ━━ */}
      <section className="py-12 md:py-16 bg-[#f6f7f8]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Reveal direction="left">
              <p className="label-section mb-4">Tentang proyek</p>
              <p className="text-[#52606d] leading-relaxed">{project.description}</p>

              {project.tags && project.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-[#52606d] bg-white border border-[#dde3e8] px-3 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Reveal>

            <Reveal direction="right" delay={100}>
              <p className="label-section mb-4">Lingkup pekerjaan</p>
              <ul className="space-y-2.5">
                {project.scope.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#1e2b34]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#e5a124] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ Image Gallery ━━ */}
      {project.images && project.images.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container-site">
            <Reveal direction="up">
              <p className="label-section mb-6">Dokumentasi proyek</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((img, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div
                    className="bg-[#1e2b34] rounded overflow-hidden relative"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <ProjectImageBox
                      src={img.src}
                      alt={img.alt}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {img.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                        <p className="text-xs text-white/80">{img.caption || img.alt}</p>
                      </div>
                    )}
                    <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider text-white/50 bg-black/30 px-1.5 py-0.5 rounded">
                      {img.type}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ━━ Related Projects ━━ */}
      {related.length > 0 && (
        <section className="bg-[#f6f7f8] py-16">
          <div className="container-site">
            <Reveal direction="up">
              <p className="label-section mb-8">Proyek serupa</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/proyek/${rel.slug}`}
                    className="group bg-white border border-[#dde3e8] overflow-hidden hover:shadow-md transition-all duration-300 flex gap-4 p-4"
                  >
                    <div className="shrink-0 w-20 h-20 bg-[#1e2b34] rounded overflow-hidden relative">
                      <ProjectImageBox
                        src={rel.coverImage}
                        alt={rel.title}
                        sizes="80px"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="badge mb-2 inline-block">
                        {CATEGORY_LABELS[rel.category] ?? rel.category}
                      </span>
                      <h3
                        className="text-sm font-semibold text-[#1e2b34] group-hover:text-[#e5a124] transition-colors truncate"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {rel.title}
                      </h3>
                      <p className="text-xs text-[#52606d] mt-0.5">{rel.location}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ━━ CTA ━━ */}
      <section className="bg-[#1e2b34] py-14">
        <div className="container-site text-center">
          <Reveal direction="up">
            <h2
              className="text-2xl md:text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Tertarik mengerjakan proyek serupa?
            </h2>
            <p className="mt-3 text-white/60 max-w-md mx-auto">
              Konsultasi gratis, survei lokasi tanpa biaya. Hubungi kami sekarang.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link href="/kontak" className="btn-primary">
                Mulai Konsultasi <ArrowRight size={15} />
              </Link>
              <Link href="/proyek" className="btn-ghost border-white/40 text-white hover:bg-white hover:text-[#1e2b34]">
                Kembali ke Proyek
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

