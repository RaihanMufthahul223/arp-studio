"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProjectImageBox from "@/components/ProjectImageBox";
import projectsData from "@/data/projects.json";
import { Project, ProjectCategory } from "@/types/project";

const projects = projectsData as Project[];

const CATEGORIES: { value: ProjectCategory | "semua"; label: string }[] = [
  { value: "semua", label: "Semua Proyek" },
  { value: "residensial", label: "Residensial" },
  { value: "komersial", label: "Komersial" },
  { value: "kesehatan", label: "Kesehatan" },
  { value: "instansi", label: "Instansi" },
  { value: "wisata", label: "Wisata" },
  { value: "fb", label: "F&B" },
];

const CITIES = ["Semua Kota", ...Array.from(new Set(projects.map((p) => p.city))).sort()];
const YEARS = ["Semua Tahun", ...Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a).map(String)];

const CATEGORY_LABELS: Record<string, string> = {
  residensial: "Residensial",
  komersial: "Komersial",
  kesehatan: "Kesehatan",
  instansi: "Instansi",
  wisata: "Wisata",
  fb: "F&B",
};

export default function ProyekClientPage() {
  const [category, setCategory] = useState<ProjectCategory | "semua">("semua");
  const [city, setCity] = useState("Semua Kota");
  const [year, setYear] = useState("Semua Tahun");
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (category !== "semua" && p.category !== category) return false;
      if (city !== "Semua Kota" && p.city !== city) return false;
      if (year !== "Semua Tahun" && String(p.year) !== year) return false;
      return true;
    });
  }, [category, city, year]);

  return (
    <>
      {/* Filter Bar */}
      <div className="bg-white border-b border-[#dde3e8] sticky top-16 z-30">
        <div className="container-site py-3">
          {/* Category tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`shrink-0 px-4 py-1.5 text-xs font-semibold rounded transition-all duration-200 ${
                  category === cat.value
                    ? "bg-[#1e2b34] text-white"
                    : "text-[#52606d] hover:text-[#1e2b34] hover:bg-[#f6f7f8]"
                }`}
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {cat.label}
              </button>
            ))}

            <div className="ml-auto shrink-0 pl-2">
              <button
                onClick={() => setFilterOpen((v) => !v)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border rounded transition-colors ${
                  filterOpen || city !== "Semua Kota" || year !== "Semua Tahun"
                    ? "border-[#e5a124] text-[#e5a124]"
                    : "border-[#dde3e8] text-[#52606d]"
                }`}
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                <SlidersHorizontal size={12} />
                Filter
              </button>
            </div>
          </div>

          {/* Extended filters */}
          {filterOpen && (
            <div className="pt-3 pb-1 flex flex-wrap gap-3 border-t border-[#f0f2f4] mt-2">
              <div>
                <label className="text-xs text-[#52606d] mr-1.5">Kota:</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="text-xs border border-[#dde3e8] rounded px-2 py-1 text-[#1e2b34] focus:outline-none focus:border-[#e5a124]"
                >
                  {CITIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-[#52606d] mr-1.5">Tahun:</label>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="text-xs border border-[#dde3e8] rounded px-2 py-1 text-[#1e2b34] focus:outline-none focus:border-[#e5a124]"
                >
                  {YEARS.map((y) => (
                    <option key={y}>{y}</option>
                  ))}
                </select>
              </div>
              {(city !== "Semua Kota" || year !== "Semua Tahun") && (
                <button
                  onClick={() => { setCity("Semua Kota"); setYear("Semua Tahun"); }}
                  className="text-xs text-[#e5a124] underline"
                >
                  Reset
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Count */}
      <div className="container-site pt-6 pb-2">
        <Reveal direction="none">
          <p className="text-sm text-[#52606d]">
            Menampilkan{" "}
            <span className="font-semibold text-[#1e2b34] tabular">{filtered.length}</span>{" "}
            proyek
          </p>
        </Reveal>
      </div>

      {/* Grid */}
      <div className="container-site pb-20">
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-[#52606d]">Tidak ada proyek yang sesuai filter.</p>
            <button
              onClick={() => { setCategory("semua"); setCity("Semua Kota"); setYear("Semua Tahun"); }}
              className="mt-4 btn-primary text-sm"
            >
              Reset semua filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <Reveal key={project.id} delay={i * 60}>
                <Link
                  href={`/proyek/${project.slug}`}
                  className="group block bg-white border border-[#dde3e8] overflow-hidden hover:shadow-md transition-all duration-300"
                >
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
                    <div className="absolute top-3 right-3 tabular text-xs text-white/50 bg-black/30 px-2 py-1 rounded">
                      {project.year}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <span className="text-xs text-white font-medium flex items-center gap-1" style={{ fontFamily: "var(--font-jakarta)" }}>
                        Lihat detail <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3
                      className="text-base font-semibold text-[#1e2b34] group-hover:text-[#e5a124] transition-colors mb-1"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#52606d]">
                      {project.location}, {project.city}
                    </p>
                    {(project.area || project.duration) && (
                      <p className="mt-1.5 text-xs text-[#52606d] tabular">
                        {project.area ? `${project.area} m²` : ""}
                        {project.area && project.duration ? " · " : ""}
                        {project.duration ? `${project.duration} minggu` : ""}
                      </p>
                    )}
                    <p className="mt-3 text-sm text-[#52606d] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    {project.tags && project.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-[10px] text-[#52606d] bg-[#f6f7f8] border border-[#dde3e8] px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

