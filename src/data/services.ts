import { images } from "./images";

export interface ServiceDetail {
  id: string;
  slug: string;
  number: string;
  name: { en: string; ar: string };
  shortName: { en: string; ar: string };
  tagline: { en: string; ar: string };
  description: { en: string; ar: string };
  image: string;
  benefits: { en: string[]; ar: string[] };
  applications: { en: string[]; ar: string[] };
  process: { en: string[]; ar: string[] };
  related: string[];
}

export interface MaterialIndexItem {
  id: string;
  number: string;
  name: { en: string; ar: string };
  image: string;
  slug?: string;
}

export const materialIndex: MaterialIndexItem[] = [
  { id: "epoxy", number: "01", name: { en: "EPOXY", ar: "إيبوكسي" }, image: images.epoxy, slug: "epoxy-flooring" },
  { id: "terrazzo", number: "02", name: { en: "TERRAZZO", ar: "تيرازو" }, image: images.terrazzo, slug: "terrazzo-flooring" },
  { id: "polished", number: "03", name: { en: "POLISHED CONCRETE", ar: "خرسانة مصقولة" }, image: images.concrete, slug: "polished-concrete" },
  { id: "vinyl", number: "04", name: { en: "VINYL / LVT", ar: "فينيل / LVT" }, image: images.vinyl, slug: "vinyl-flooring" },
  { id: "rubber", number: "05", name: { en: "RUBBER", ar: "مطاط" }, image: images.rubber },
  { id: "carpet", number: "06", name: { en: "CARPET", ar: "سجاد" }, image: images.carpet },
  { id: "tile", number: "07", name: { en: "TILE", ar: "بلاط" }, image: images.tile, slug: "tile-stone" },
  { id: "stone", number: "08", name: { en: "STONE", ar: "حجر" }, image: images.stone, slug: "tile-stone" },
  { id: "marble", number: "09", name: { en: "MARBLE", ar: "رخام" }, image: images.marbleFloor, slug: "tile-stone" },
  { id: "granite", number: "10", name: { en: "GRANITE", ar: "جرانيت" }, image: images.granite, slug: "tile-stone" },
  { id: "industrial", number: "11", name: { en: "INDUSTRIAL SYSTEMS", ar: "أنظمة صناعية" }, image: images.industrialSys, slug: "industrial-flooring" },
  { id: "coatings", number: "12", name: { en: "PROTECTIVE COATINGS", ar: "طلاءات واقية" }, image: images.coatings, slug: "industrial-flooring" },
];

export const serviceCategories = [
  {
    id: "epoxy-flooring",
    name: { en: "Epoxy Flooring", ar: "أرضيات إيبوكسي" },
  },
  {
    id: "terrazzo-flooring",
    name: { en: "Terrazzo Flooring", ar: "أرضيات تيرازو" },
  },
  {
    id: "polished-concrete",
    name: { en: "Polished Concrete", ar: "خرسانة مصقولة" },
  },
  {
    id: "vinyl-flooring",
    name: { en: "Vinyl / LVT", ar: "فينيل / LVT" },
  },
  {
    id: "tile-stone",
    name: { en: "Tile & Stone", ar: "بلاط وحجر" },
  },
  {
    id: "industrial-flooring",
    name: { en: "Industrial Flooring", ar: "أرضيات صناعية" },
  },
] as const;

export const allCapabilities = {
  en: [
    "Epoxy Flooring",
    "Terrazzo Flooring",
    "Polished Concrete",
    "Concrete Flooring",
    "Commercial Vinyl Flooring",
    "Luxury Vinyl Tile",
    "Vinyl Flooring",
    "Rubber Flooring",
    "Carpet Tile",
    "Commercial Carpet",
    "Ceramic Tile",
    "Porcelain Tile",
    "Stone Flooring",
    "Marble Flooring",
    "Granite Flooring",
    "Industrial Flooring",
    "Warehouse Flooring",
    "Retail Flooring",
    "Office Flooring",
    "Hospitality Flooring",
    "Healthcare Flooring",
    "Educational / Institutional Flooring",
    "Custom Flooring Solutions",
    "Floor Preparation",
    "Floor Repair",
    "Floor Restoration",
    "Floor Refinishing",
    "Surface Preparation",
    "Protective Floor Coatings",
  ],
  ar: [
    "أرضيات إيبوكسي",
    "أرضيات تيرازو",
    "خرسانة مصقولة",
    "أرضيات خرسانية",
    "أرضيات فينيل تجارية",
    "بلاط فينيل فاخر",
    "أرضيات فينيل",
    "أرضيات مطاطية",
    "بلاط سجاد",
    "سجاد تجاري",
    "بلاط سيراميك",
    "بلاط بورسلين",
    "أرضيات حجرية",
    "أرضيات رخامية",
    "أرضيات جرانيت",
    "أرضيات صناعية",
    "أرضيات مستودعات",
    "أرضيات تجزئة",
    "أرضيات مكاتب",
    "أرضيات ضيافة",
    "أرضيات رعاية صحية",
    "أرضيات تعليمية / مؤسسية",
    "حلول أرضيات مخصصة",
    "تحضير الأرضيات",
    "إصلاح الأرضيات",
    "ترميم الأرضيات",
    "إعادة تشطيب الأرضيات",
    "تحضير الأسطح",
    "طلاءات أرضيات واقية",
  ],
};

export const services: ServiceDetail[] = [
  {
    id: "epoxy",
    slug: "epoxy-flooring",
    number: "01",
    name: { en: "Epoxy Flooring", ar: "أرضيات إيبوكسي" },
    shortName: { en: "EPOXY", ar: "إيبوكسي" },
    tagline: {
      en: "Heavy-duty seamless systems for demanding commercial and industrial environments.",
      ar: "أنظمة سلسة عالية التحمل للبيئات التجارية والصناعية القاسية.",
    },
    description: {
      en: "Epoxy flooring delivers exceptional durability, chemical resistance, and a seamless finish engineered for warehouses, factories, showrooms, and high-traffic commercial facilities. Syrian Flooring installs complete epoxy systems from surface preparation through final coat.",
      ar: "توفر أرضيات الإيبوكسي متانة استثنائية ومقاومة كيميائية وتشطيبًا سلسًا مصممًا للمستودعات والمصانع وصالات العرض والمنشآت التجارية ذات الحركة الكثيفة. تقوم Syrian Flooring بتركيب أنظمة إيبوكسي كاملة من تحضير السطح حتى الطبقة النهائية.",
    },
    image: images.epoxy,
    benefits: {
      en: ["Durability", "Chemical Resistance", "Easy Maintenance", "Seamless Finish", "Heavy-Duty Performance"],
      ar: ["المتانة", "مقاومة كيميائية", "صيانة سهلة", "تشطيب سلس", "أداء عالي التحمل"],
    },
    applications: {
      en: ["Warehouses", "Factories", "Garages", "Commercial Facilities", "Showrooms"],
      ar: ["مستودعات", "مصانع", "مواقف", "منشآت تجارية", "صالات عرض"],
    },
    process: {
      en: ["Surface assessment & moisture testing", "Mechanical preparation & repair", "Primer application", "Epoxy body coat & optional flakes", "Topcoat seal & cure"],
      ar: ["تقييم السطح واختبار الرطوبة", "التحضير الميكانيكي والإصلاح", "تطبيق الطبقة التمهيدية", "طبقة الإيبوكسي الأساسية ورقائق اختيارية", "طبقة الحماية والتجفيف"],
    },
    related: ["polished-concrete", "industrial-flooring", "vinyl-flooring"],
  },
  {
    id: "terrazzo",
    slug: "terrazzo-flooring",
    number: "02",
    name: { en: "Terrazzo Flooring", ar: "أرضيات تيرازو" },
    shortName: { en: "TERRAZZO", ar: "تيرازو" },
    tagline: {
      en: "Timeless poured surfaces combining aggregate beauty with commercial durability.",
      ar: "أسطح مصبوبة خالدة تجمع جمال الركام مع المتانة التجارية.",
    },
    description: {
      en: "Terrazzo flooring offers a refined, long-lasting surface for lobbies, corridors, and institutional spaces. We deliver epoxy and cementitious terrazzo systems with precise aggregate selection, grinding, and polishing for a polished architectural finish.",
      ar: "توفر أرضيات التيرازو سطحًا راقيًا وطويل الأمد للردهات والممرات والمساحات المؤسسية. نقدم أنظمة تيرازو إيبوكسي وأسمنتية مع اختيار دقيق للركام والطحن والصقل للحصول على تشطيب معماري مصقول.",
    },
    image: images.terrazzo,
    benefits: {
      en: ["Architectural Finish", "Exceptional Longevity", "Design Flexibility", "Low Lifecycle Cost", "Seamless Appearance"],
      ar: ["تشطيب معماري", "عمر استثنائي", "مرونة تصميمية", "تكلفة دورة حياة منخفضة", "مظهر سلس"],
    },
    applications: {
      en: ["Corporate Lobbies", "Hotels", "Airports", "Educational Facilities", "Public Buildings"],
      ar: ["ردهات الشركات", "فنادق", "مطارات", "منشآت تعليمية", "مبانٍ عامة"],
    },
    process: {
      en: ["Design & aggregate selection", "Substrate preparation", "Divider strip layout", "Pour & cure", "Grind, hone & polish"],
      ar: ["التصميم واختيار الركام", "تحضير القاعدة", "تخطيط شرائط التقسيم", "الصب والتجفيف", "الطحن والتنعيم والصقل"],
    },
    related: ["tile-stone", "polished-concrete", "epoxy-flooring"],
  },
  {
    id: "polished",
    slug: "polished-concrete",
    number: "03",
    name: { en: "Polished Concrete", ar: "خرسانة مصقولة" },
    shortName: { en: "POLISHED CONCRETE", ar: "خرسانة مصقولة" },
    tagline: {
      en: "Refined concrete surfaces with industrial strength and contemporary clarity.",
      ar: "أسطح خرسانية مصقولة بقوة صناعية ووضوح معاصر.",
    },
    description: {
      en: "Polished concrete transforms existing or new slabs into high-performance floors with controlled sheen, densified surfaces, and minimal maintenance. Ideal for retail, offices, warehouses, and modern commercial interiors.",
      ar: "تحوّل الخرسانة المصقولة البلاطات القائمة أو الجديدة إلى أرضيات عالية الأداء بلمعان متحكم به وأسطح مكثّفة وصيانة منخفضة. مثالية للتجزئة والمكاتب والمستودعات والديكورات التجارية الحديثة.",
    },
    image: images.concrete,
    benefits: {
      en: ["High Durability", "Dust-Free Surface", "Reflective Clarity", "Sustainable Option", "Minimal Maintenance"],
      ar: ["متانة عالية", "سطح خالٍ من الغبار", "وضوح عاكس", "خيار مستدام", "صيانة ضئيلة"],
    },
    applications: {
      en: ["Retail Spaces", "Offices", "Warehouses", "Showrooms", "Industrial Facilities"],
      ar: ["مساحات تجزئة", "مكاتب", "مستودعات", "صالات عرض", "منشآت صناعية"],
    },
    process: {
      en: ["Slab evaluation", "Grinding sequence", "Densifier application", "Progressive polishing", "Guard seal & finish"],
      ar: ["تقييم البلاطة", "تسلسل الطحن", "تطبيق المكثّف", "الصقل التدريجي", "الحماية والتشطيب"],
    },
    related: ["epoxy-flooring", "industrial-flooring", "terrazzo-flooring"],
  },
  {
    id: "vinyl",
    slug: "vinyl-flooring",
    number: "04",
    name: { en: "Vinyl / LVT Flooring", ar: "أرضيات فينيل / LVT" },
    shortName: { en: "VINYL / LVT", ar: "فينيل / LVT" },
    tagline: {
      en: "Commercial vinyl systems engineered for comfort, hygiene, and design range.",
      ar: "أنظمة فينيل تجارية مصممة للراحة والنظافة ونطاق تصميمي واسع.",
    },
    description: {
      en: "From luxury vinyl tile to commercial sheet vinyl, we install resilient flooring systems suited to healthcare, education, retail, and office environments — with proper moisture control, adhesives, and welding where required.",
      ar: "من بلاط الفينيل الفاخر إلى لفائف الفينيل التجارية، نركّب أنظمة أرضيات مرنة تناسب الرعاية الصحية والتعليم والتجزئة والمكاتب — مع التحكم بالرطوبة والمواد اللاصقة واللحام عند الحاجة.",
    },
    image: images.vinyl,
    benefits: {
      en: ["Comfort Underfoot", "Design Versatility", "Hygienic Surfaces", "Cost Efficiency", "Quick Installation"],
      ar: ["راحة تحت القدم", "تنوع تصميمي", "أسطح صحية", "كفاءة التكلفة", "تركيب سريع"],
    },
    applications: {
      en: ["Healthcare", "Education", "Retail", "Offices", "Hospitality"],
      ar: ["رعاية صحية", "تعليم", "تجزئة", "مكاتب", "ضيافة"],
    },
    process: {
      en: ["Subfloor moisture check", "Levelling & prep", "Layout & acclimation", "Adhesive & install", "Welding / finishing"],
      ar: ["فحص رطوبة الأرضية", "التسوية والتحضير", "التخطيط والتأقلم", "اللاصق والتركيب", "اللحام / التشطيب"],
    },
    related: ["tile-stone", "epoxy-flooring", "industrial-flooring"],
  },
  {
    id: "tile-stone",
    slug: "tile-stone",
    number: "05",
    name: { en: "Tile & Stone Flooring", ar: "بلاط وحجر" },
    shortName: { en: "TILE & STONE", ar: "بلاط وحجر" },
    tagline: {
      en: "Ceramic, porcelain, marble, granite, and natural stone installed with precision.",
      ar: "سيراميك وبورسلين ورخام وجرانيت وحجر طبيعي بتركيب دقيق.",
    },
    description: {
      en: "Tile and stone flooring for commercial lobbies, wet areas, façades transitions, and high-visibility spaces. We handle ceramic, porcelain, marble, granite, and natural stone with professional substrate preparation and finishing.",
      ar: "أرضيات بلاط وحجر لردهات التجارية والمناطق الرطبة وانتقالات الواجهات والمساحات عالية الظهور. نتعامل مع السيراميك والبورسلين والرخام والجرانيت والحجر الطبيعي مع تحضير احترافي للقاعدة والتشطيب.",
    },
    image: images.tile,
    benefits: {
      en: ["Premium Appearance", "Water Resistance", "Thermal Stability", "Long Service Life", "Wide Material Range"],
      ar: ["مظهر فاخر", "مقاومة للماء", "ثبات حراري", "عمر خدمة طويل", "نطاق مواد واسع"],
    },
    applications: {
      en: ["Lobbies", "Bathrooms", "Kitchens", "Hotels", "Retail Entrances"],
      ar: ["ردهات", "حمامات", "مطابخ", "فنادق", "مداخل تجزئة"],
    },
    process: {
      en: ["Design & material selection", "Substrate prep & waterproofing", "Layout & cutting", "Setting & grouting", "Sealing & protection"],
      ar: ["التصميم واختيار المواد", "تحضير القاعدة والعزل", "التخطيط والقص", "التركيب والحشو", "الختم والحماية"],
    },
    related: ["terrazzo-flooring", "vinyl-flooring", "epoxy-flooring"],
  },
  {
    id: "industrial",
    slug: "industrial-flooring",
    number: "06",
    name: { en: "Industrial Flooring", ar: "أرضيات صناعية" },
    shortName: { en: "INDUSTRIAL", ar: "صناعي" },
    tagline: {
      en: "Performance systems for warehouses, plants, and heavy-use facilities.",
      ar: "أنظمة أداء للمستودعات والمصانع والمنشآت ذات الاستخدام الثقيل.",
    },
    description: {
      en: "Industrial flooring systems built for abrasion, impact, chemical exposure, and continuous operations. From protective coatings to heavy-duty epoxy and specialized warehouse floors, we engineer surfaces that keep facilities running.",
      ar: "أنظمة أرضيات صناعية مصممة للتآكل والصدمات والتعرض الكيميائي والعمليات المستمرة. من الطلاءات الواقية إلى الإيبوكسي عالي التحمل وأرضيات المستودعات المتخصصة، نصمم أسطحًا تُبقي المنشآت قيد التشغيل.",
    },
    image: images.industrialSys,
    benefits: {
      en: ["Abrasion Resistance", "Impact Strength", "Chemical Protection", "Operational Continuity", "Safety Options"],
      ar: ["مقاومة التآكل", "قوة الصدمات", "حماية كيميائية", "استمرارية تشغيلية", "خيارات أمان"],
    },
    applications: {
      en: ["Warehouses", "Manufacturing Plants", "Logistics Hubs", "Workshops", "Processing Facilities"],
      ar: ["مستودعات", "مصانع تصنيع", "مراكز لوجستية", "ورش", "منشآت معالجة"],
    },
    process: {
      en: ["Facility & load assessment", "Surface prep & repair", "System specification", "Coating / overlay install", "Cure, mark & handoff"],
      ar: ["تقييم المنشأة والأحمال", "تحضير السطح والإصلاح", "تحديد النظام", "تركيب الطلاء / الطبقة", "التجفيف والعلامات والتسليم"],
    },
    related: ["epoxy-flooring", "polished-concrete", "vinyl-flooring"],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug);
}
