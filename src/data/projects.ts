import { images } from "./images";

export interface Project {
  id: string;
  slug: string;
  title: { en: string; ar: string };
  system: { en: string; ar: string };
  sector: { en: string; ar: string };
  location: { en: string; ar: string };
  image: string;
  size: "large" | "small" | "wide" | "tall";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "p1",
    slug: "corporate-headquarters",
    title: { en: "Corporate Headquarters", ar: "المقر الرئيسي للشركات" },
    system: { en: "EPOXY / COMMERCIAL", ar: "إيبوكسي / تجاري" },
    sector: { en: "CORPORATE", ar: "شركات" },
    location: { en: "Syria", ar: "سوريا" },
    image: images.corporate,
    size: "large",
    featured: true,
  },
  {
    id: "p2",
    slug: "retail-showroom",
    title: { en: "Retail Showroom", ar: "صالة عرض تجزئة" },
    system: { en: "POLISHED CONCRETE", ar: "خرسانة مصقولة" },
    sector: { en: "RETAIL", ar: "تجزئة" },
    location: { en: "Syria", ar: "سوريا" },
    image: images.retail,
    size: "small",
    featured: true,
  },
  {
    id: "p3",
    slug: "hotel-lobby",
    title: { en: "Hotel Lobby", ar: "ردهة فندق" },
    system: { en: "MARBLE / STONE", ar: "رخام / حجر" },
    sector: { en: "HOSPITALITY", ar: "ضيافة" },
    location: { en: "Syria", ar: "سوريا" },
    image: images.hotel,
    size: "tall",
    featured: true,
  },
  {
    id: "p4",
    slug: "industrial-facility",
    title: { en: "Industrial Facility", ar: "منشأة صناعية" },
    system: { en: "INDUSTRIAL EPOXY", ar: "إيبوكسي صناعي" },
    sector: { en: "INDUSTRIAL", ar: "صناعي" },
    location: { en: "Syria", ar: "سوريا" },
    image: images.warehouse,
    size: "wide",
    featured: true,
  },
  {
    id: "p5",
    slug: "healthcare-facility",
    title: { en: "Healthcare Facility", ar: "منشأة رعاية صحية" },
    system: { en: "VINYL / HYGIENIC", ar: "فينيل / صحي" },
    sector: { en: "HEALTHCARE", ar: "رعاية صحية" },
    location: { en: "Syria", ar: "سوريا" },
    image: images.healthcare,
    size: "small",
    featured: true,
  },
  {
    id: "p6",
    slug: "restaurant-interior",
    title: { en: "Restaurant Interior", ar: "داخلية مطعم" },
    system: { en: "TILE / COMMERCIAL", ar: "بلاط / تجاري" },
    sector: { en: "HOSPITALITY", ar: "ضيافة" },
    location: { en: "Syria", ar: "سوريا" },
    image: images.restaurant,
    size: "large",
  },
  {
    id: "p7",
    slug: "education-campus",
    title: { en: "Education Campus", ar: "حرم تعليمي" },
    system: { en: "RUBBER / VINYL", ar: "مطاط / فينيل" },
    sector: { en: "EDUCATION", ar: "تعليم" },
    location: { en: "Syria", ar: "سوريا" },
    image: images.education,
    size: "wide",
  },
  {
    id: "p8",
    slug: "warehouse-complex",
    title: { en: "Warehouse Complex", ar: "مجمع مستودعات" },
    system: { en: "PROTECTIVE COATING", ar: "طلاء واقٍ" },
    sector: { en: "INDUSTRIAL", ar: "صناعي" },
    location: { en: "Syria", ar: "سوريا" },
    image: images.industrial,
    size: "large",
  },
  {
    id: "p9",
    slug: "shopping-mall",
    title: { en: "Shopping Corridor", ar: "ممر تسوق" },
    system: { en: "TERRAZZO / STONE", ar: "تيرازو / حجر" },
    sector: { en: "RETAIL", ar: "تجزئة" },
    location: { en: "Syria", ar: "سوريا" },
    image: images.mall2,
    size: "small",
  },
  {
    id: "p10",
    slug: "office-tower",
    title: { en: "Office Tower Floors", ar: "طوابق برج مكاتب" },
    system: { en: "LVT / CARPET TILE", ar: "LVT / بلاط سجاد" },
    sector: { en: "CORPORATE", ar: "شركات" },
    location: { en: "Syria", ar: "سوريا" },
    image: images.office,
    size: "tall",
  },
];

export const commercialSectors = [
  { id: "corporate", name: { en: "CORPORATE", ar: "شركات" }, image: images.corporate },
  { id: "retail", name: { en: "RETAIL", ar: "تجزئة" }, image: images.retail },
  { id: "hotels", name: { en: "HOTELS", ar: "فنادق" }, image: images.hotel },
  { id: "restaurants", name: { en: "RESTAURANTS", ar: "مطاعم" }, image: images.restaurant },
  { id: "healthcare", name: { en: "HEALTHCARE", ar: "رعاية صحية" }, image: images.healthcare },
  { id: "education", name: { en: "EDUCATION", ar: "تعليم" }, image: images.education },
  { id: "warehouses", name: { en: "WAREHOUSES", ar: "مستودعات" }, image: images.warehouse },
  { id: "industrial", name: { en: "INDUSTRIAL", ar: "صناعي" }, image: images.factory },
];
