export type ProjectCategory =
  | "residensial"
  | "komersial"
  | "kesehatan"
  | "instansi"
  | "wisata"
  | "fb";

export type ProjectPhase =
  | "perencanaan"
  | "desain"
  | "konstruksi"
  | "renovasi"
  | "interior"
  | "eksterior";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  type: "render" | "realisasi" | "detail" | "proses";
}

export interface ProjectBeforeAfter {
  before: string; // path to 3D render / before image
  after: string; // path to realisasi / after image
  beforeLabel?: string;
  afterLabel?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client?: string;
  location: string;
  city: string;
  year: number;
  category: ProjectCategory;
  phases: ProjectPhase[];
  coverImage: string;
  images: ProjectImage[];
  beforeAfter?: ProjectBeforeAfter;
  description: string;
  scope: string[];
  area?: number; // m²
  duration?: number; // minggu
  featured?: boolean;
  tags?: string[];
}

