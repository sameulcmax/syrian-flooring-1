import { images } from "./images";

export interface Industry {
  id: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  image: string;
  systems: { en: string[]; ar: string[] };
}

export const industries: Industry[] = [
  {
    id: "commercial",
    name: { en: "COMMERCIAL", ar: "تجاري" },
    description: {
      en: "High-traffic commercial environments requiring durable, professional flooring systems that perform under constant use.",
      ar: "بيئات تجارية ذات حركة كثيفة تتطلب أنظمة أرضيات متينة واحترافية تؤدي تحت الاستخدام المستمر.",
    },
    image: images.lobby,
    systems: {
      en: ["Epoxy", "Polished Concrete", "LVT", "Tile", "Carpet Tile"],
      ar: ["إيبوكسي", "خرسانة مصقولة", "LVT", "بلاط", "بلاط سجاد"],
    },
  },
  {
    id: "industrial",
    name: { en: "INDUSTRIAL", ar: "صناعي" },
    description: {
      en: "Heavy-duty floors engineered for abrasion, impact, chemicals, and continuous industrial operations.",
      ar: "أرضيات عالية التحمل مصممة للتآكل والصدمات والمواد الكيميائية والعمليات الصناعية المستمرة.",
    },
    image: images.warehouse,
    systems: {
      en: ["Industrial Epoxy", "Protective Coatings", "Polished Concrete", "Heavy-Duty Systems"],
      ar: ["إيبوكسي صناعي", "طلاءات واقية", "خرسانة مصقولة", "أنظمة عالية التحمل"],
    },
  },
  {
    id: "hospitality",
    name: { en: "HOSPITALITY", ar: "ضيافة" },
    description: {
      en: "Hotel lobbies, corridors, and guest-facing spaces where appearance and durability must coexist.",
      ar: "ردهات الفنادق والممرات والمساحات المواجهة للضيوف حيث يجب أن يجتمع المظهر والمتانة.",
    },
    image: images.hotel,
    systems: {
      en: ["Marble", "Terrazzo", "Tile", "LVT", "Carpet"],
      ar: ["رخام", "تيرازو", "بلاط", "LVT", "سجاد"],
    },
  },
  {
    id: "retail",
    name: { en: "RETAIL", ar: "تجزئة" },
    description: {
      en: "Showrooms and stores that demand visual impact, comfort underfoot, and surfaces built for foot traffic.",
      ar: "صالات عرض ومتاجر تتطلب تأثيرًا بصريًا وراحة تحت القدم وأسطحًا مبنية لحركة المشاة.",
    },
    image: images.mall,
    systems: {
      en: ["Polished Concrete", "LVT", "Tile", "Epoxy", "Stone"],
      ar: ["خرسانة مصقولة", "LVT", "بلاط", "إيبوكسي", "حجر"],
    },
  },
  {
    id: "healthcare",
    name: { en: "HEALTHCARE", ar: "رعاية صحية" },
    description: {
      en: "Hygienic, seamless, and easy-to-maintain flooring for clinics, hospitals, and care facilities.",
      ar: "أرضيات صحية وسلسة وسهلة الصيانة للعيادات والمستشفيات ومنشآت الرعاية.",
    },
    image: images.healthcare,
    systems: {
      en: ["Sheet Vinyl", "Rubber", "Epoxy", "Seamless Systems"],
      ar: ["فينيل لفائف", "مطاط", "إيبوكسي", "أنظمة سلسة"],
    },
  },
  {
    id: "education",
    name: { en: "EDUCATION", ar: "تعليم" },
    description: {
      en: "Institutional flooring for schools and campuses — resilient, safe, and built for daily intensity.",
      ar: "أرضيات مؤسسية للمدارس والحرم الجامعي — مرنة وآمنة ومبنية لكثافة الاستخدام اليومي.",
    },
    image: images.education,
    systems: {
      en: ["Rubber", "Vinyl", "Carpet Tile", "Terrazzo", "Tile"],
      ar: ["مطاط", "فينيل", "بلاط سجاد", "تيرازو", "بلاط"],
    },
  },
  {
    id: "corporate",
    name: { en: "CORPORATE", ar: "شركات" },
    description: {
      en: "Office towers and headquarters requiring professional presentation with practical performance.",
      ar: "أبراج مكاتب ومقار رئيسية تتطلب عرضًا احترافيًا مع أداء عملي.",
    },
    image: images.office,
    systems: {
      en: ["Carpet Tile", "LVT", "Polished Concrete", "Stone", "Epoxy"],
      ar: ["بلاط سجاد", "LVT", "خرسانة مصقولة", "حجر", "إيبوكسي"],
    },
  },
  {
    id: "residential",
    name: { en: "RESIDENTIAL", ar: "سكني" },
    description: {
      en: "Select residential projects with the same precision and material standards as our commercial work.",
      ar: "مشاريع سكنية مختارة بنفس الدقة ومعايير المواد لأعمالنا التجارية.",
    },
    image: images.residential,
    systems: {
      en: ["Tile", "Stone", "Marble", "Vinyl", "Custom Solutions"],
      ar: ["بلاط", "حجر", "رخام", "فينيل", "حلول مخصصة"],
    },
  },
];
