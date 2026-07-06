import { useEffect, useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  Cable,
  ClipboardCheck,
  Download,
  Factory,
  FileCheck2,
  Globe2,
  Handshake,
  Home,
  Languages,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Phone,
  ShieldCheck,
  Sun,
  UserRound,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const thunderAssets = {
  fieldTeam: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/1.jpg",
  smartSolarHome: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/2.jpg",
  aep: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/3.png",
  rooftopSolar: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/4.jpg",
  ira: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/5.jpg",
  substation: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/6.jpg",
  windCrew: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/7.jpg",
  egc: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/8.png",
  globalSolarCouncil: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/9.png",
  gsec: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/10.png",
  arshia: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/11.jpg",
  cslb: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/12.png",
  gec: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/13.png",
  gsc: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/14.png",
  premiumDevelopment: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/15.jpg",
  windFarm: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/16.jpg",
  nfpa: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/17.png",
};

const catalogUrl = "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/Thunder_Light_Electrical_Corporate_Catalog.pdf";
const heroDoubleExposureImage = "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/01.jpg";
const usMapImage = "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/detailed-textured-map-united-states-highlighting-geographical-features.jpg";
const whatsappNumber = "18186427292";

// Icons / images are language-independent and zipped with the translated text by index.
const serviceIcons = [Factory, Sun, Building2, Network, Home, BatteryCharging];
const renewableIcons = [Sun, Network, Factory, BatteryCharging, Cable, Building2];
const projectImages = [
  thunderAssets.fieldTeam,
  thunderAssets.smartSolarHome,
  thunderAssets.rooftopSolar,
  thunderAssets.substation,
  thunderAssets.windCrew,
  thunderAssets.premiumDevelopment,
  thunderAssets.windFarm,
];
const credentialImages = [
  thunderAssets.cslb,
  thunderAssets.nfpa,
  thunderAssets.aep,
  thunderAssets.egc,
  thunderAssets.globalSolarCouncil,
  thunderAssets.gsec,
  thunderAssets.gec,
  thunderAssets.gsc,
];
const navHrefs = ["#overview", "#services", "#renewables", "#workflow", "#credentials"];

const lightningFrames = [
  "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/01.jpg",
  "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/02.jpg",
  "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/03.jpg",
  "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/04.jpg",
  "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/05.jpg",
  "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/06.jpg",
  "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/07.jpg",
  "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/08.jpg",
  "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/09.jpg",
];

const content = {
  en: {
    dir: "ltr",
    langToggleLabel: "فارسی",
    whatsappMessage: "Hello Thunder Light Electrical, I would like to discuss a project, consultation, or partnership inquiry.",
    nav: {
      home: "Thunder Light Electrical home",
      links: ["Overview", "Services", "Renewables", "Workflow", "Credentials"],
      contact: "Contact",
    },
    hero: {
      badge: "California-based electrical infrastructure contractor",
      title: "Thunder Light Electrical",
      subtitle: "Industrial, utility and renewable power systems engineered for demanding sites.",
      description:
        "We deliver electrical construction, power distribution, solar EPC support and grid-ready infrastructure for public and private-sector projects.",
      requestConsultation: "Request Consultation",
      viewServices: "View Services",
      partnerWithUs: "Partner With Us",
      signals: [
        ["30+", "Years of electrical delivery"],
        ["150+ MW", "Renewable project capacity"],
        ["CA", "Primary operating region"],
      ],
      presidentLabel: "President",
      presidentName: "Ira Bakhtiary",
      presidentBio:
        "Founder leadership focused on quality, technical credibility, long-term partnerships and practical infrastructure execution.",
    },
    metrics: [
      ["30+", "Years of Experience"],
      ["40+", "Engineering Capacity / Network"],
      ["150+ MW", "Renewable Project Capacity"],
      ["California", "Primary Region Served"],
    ],
    catalog: {
      eyebrow: "Corporate Catalog",
      title: "Thunder Light Electrical company profile",
      description:
        "Download the corporate catalog for service scope, renewable infrastructure capabilities, leadership profile and company positioning.",
      button: "Download Catalog",
    },
    overview: {
      eyebrow: "Company Overview",
      title: "A scalable infrastructure contractor built for modern energy demands.",
      body1:
        "Thunder Light Electrical is a high-performance electrical and renewable infrastructure contractor specializing in industrial, commercial, residential, utility-scale and public-sector projects across the United States and international markets. The company combines American engineering standards, international procurement networks, renewable expertise and scalable execution systems to support complex energy infrastructure deployment.",
      body2:
        "Thunder Light Electrical supports scalable renewable infrastructure projects, from residential and commercial solar systems to large-scale solar and wind developments exceeding 150 MW, depending on project scope, site conditions, procurement structure, and investment scale.",
    },
    services: {
      eyebrow: "Core Services",
      title: "Electrical, renewable and public infrastructure capabilities.",
      items: [
        {
          title: "Industrial Electrical Construction",
          items: ["HV / MV / LV Systems", "Distribution Systems", "Switchgear", "Substations", "Underground Infrastructure", "Wind Power Deployment"],
        },
        {
          title: "Renewable Energy Infrastructure",
          items: ["Solar EPC", "Rooftop Solar", "Solar Farms", "Wind Support", "Battery Storage", "Grid Integration"],
        },
        {
          title: "Commercial Electrical",
          items: ["Commercial Complexes", "Smart Buildings", "EV Charging", "Energy Optimization", "Power Distribution"],
        },
        {
          title: "Public & Utility Infrastructure",
          items: ["Municipal Projects", "Utility Systems", "Transportation Infrastructure", "Water / Wastewater", "Grid Systems"],
        },
        {
          title: "Premium Development Systems",
          items: ["Selective Residential", "Gated Communities", "Smart Home Controls", "Security & Surveillance", "Low-Voltage Systems"],
        },
        {
          title: "Backup Power & Resilience",
          items: ["Generator Systems", "Emergency Power", "Battery Resilience", "Service Support", "Troubleshooting"],
        },
      ],
    },
    renewables: {
      eyebrow: "Renewable Energy Solutions",
      title: "Scalable new-energy infrastructure from homes to utility environments.",
      body:
        "Thunder Light supports renewable infrastructure from residential and commercial solar systems to large-scale solar and wind developments. Capacity depends on project scope, site conditions, procurement structure, engineering design and investment scale.",
      capabilities: [
        "Solar EPC and rooftop solar systems",
        "Solar farms and distributed generation",
        "Wind power deployment support",
        "Battery storage and energy resilience",
        "Grid integration and smart energy systems",
        "EV charging infrastructure",
      ],
    },
    utility: {
      eyebrow: "Electrical Infrastructure & Utility Systems",
      title: "Utility-grade execution for complex electrical environments.",
      body:
        "Built for projects where safety, compliance, schedule and engineering discipline matter: HV/MV/LV systems, distribution, switchgear, substations, underground utilities, commercial power and public infrastructure.",
      items: ["HV / MV / LV Systems", "Substations & Switchgear", "Underground Utilities", "Public & Municipal Systems"],
    },
    advantages: {
      eyebrow: "Why Choose Us",
      title: "Technical execution with international scalability.",
      body:
        "Thunder Light Electrical is positioned to support developers, EPC firms, contractors, renewable investors and public-sector stakeholders with cost-efficient, compliance-focused electrical infrastructure delivery.",
      items: [
        "Precision Planning",
        "High-Quality Solutions",
        "International Procurement Network",
        "Experienced Engineering Teams",
        "Scalable Workforce",
        "Renewable Energy Expertise",
        "Safety & Compliance Focus",
        "EPC-Grade Execution",
      ],
    },
    workflow: {
      eyebrow: "EPC-Oriented Execution Workflow",
      title: "From inquiry to commissioning with disciplined project controls.",
      steps: [
        ["01", "Project Inquiry & Qualification", "Scope review, client needs, location, budget, delivery timeline and stakeholder alignment."],
        ["02", "Site Assessment & Feasibility", "Technical site review, load needs, renewable potential, constraints and permitting path."],
        ["03", "Engineering & Estimating", "Concept design, BOQ, cost model, schedule, materials, labor and risk assumptions."],
        ["04", "Procurement & Mobilization", "Vendor sourcing, equipment selection, logistics, workforce planning and safety preparation."],
        ["05", "Construction & QA/QC", "Field execution, inspections, testing, quality control and schedule coordination."],
        ["06", "Commissioning & Handover", "Final testing, documentation, warranties, as-builts, manuals and post-project support."],
      ],
    },
    leadership: {
      eyebrow: "Leadership & International Representation",
      title: "Leadership built around execution and cross-border opportunity.",
      iraLabel: "Founder / President",
      iraName: "Ira Bakhtiary",
      iraBio:
        "Experienced infrastructure executive with a professional, engineering-oriented leadership profile. Founder philosophy emphasizes honest business, execution quality, technical credibility, long-term partnerships and practical infrastructure development.",
      arshiaLabel: "Turkey Region",
      arshiaName: "Arshia Sharifi",
      arshiaRole: "RMO / International Brand Expander",
      arshiaBio:
        "Turkey-based representative supporting international public relations, business development, agency coordination and cross-border partnership expansion.",
      arshiaAddress: "NAMIK KEMAL MAH. 68. SK. TERRACE LOTUS NO:110 Kat:25 ESENYURT / ISTANBUL",
    },
    projects: {
      eyebrow: "Project Showcase",
      title: "Built for utility, industrial and renewable environments.",
      viewCapabilities: "View Capabilities",
      items: [
        ["Field Team & Safety Culture", "Professional site teams, PPE discipline and execution-focused project presence."],
        ["Residential & Smart Solar", "Integrated solar, backup power, EV charging and smart energy systems for built environments."],
        ["Rooftop Solar Deployment", "Commercial and residential rooftop solar execution with grid and resilience planning."],
        ["Substation & HV Systems", "Utility-grade environments including switchgear, substations and power distribution systems."],
        ["Wind Power Support", "Electrical coordination and deployment support for wind and renewable generation contexts."],
        ["Premium Development Power", "Selective residential, commercial and premium development electrical systems."],
        ["Utility-Scale Renewable Context", "Solar and wind project environments with scalable engineering, procurement and site planning."],
      ],
    },
    partners: {
      title: "International partnerships for emerging energy and infrastructure markets.",
      body:
        "We collaborate with developers, EPC firms, contractors, renewable investors, procurement networks and public-sector stakeholders across the United States, Turkey, GCC countries, Azerbaijan, Central Asia and emerging new-energy markets.",
      callout:
        "American engineering standards, utility-grade execution and international procurement awareness for cross-border opportunity.",
      types: [
        ["Developers", "Renewable and infrastructure project owners seeking execution partners."],
        ["EPC Firms", "Collaboration, subcontracting, engineering coordination and project delivery support."],
        ["Procurement Networks", "Solar modules, batteries, inverters, switchgear, transformers, cables and logistics."],
        ["Investors", "Renewable project development, power infrastructure and energy transition opportunities."],
        ["Public Sector", "Municipal, utility, campus, water/wastewater and transportation infrastructure projects."],
        ["International Markets", "Turkey, GCC, Azerbaijan, Central Asia and emerging new-energy markets."],
      ],
    },
    credentials: {
      eyebrow: "Licensing, Compliance & Credential Assets",
      title: "Credibility signals for safety, licensing and energy-market readiness.",
      body:
        "Thunder Light should lead with verifiable licensing, safety discipline, insured/bonded status, project documentation and professional compliance evidence.",
      callout:
        "Verification required before public tender use: license classifications, active status, insurance COI, bond capacity, OSHA/safety records, certificate validity and authorization to display third-party marks must be confirmed.",
      labels: [
        "CSLB License Reference",
        "Electrical Safety / NFPA Reference",
        "AEP Credential Asset",
        "Energy Geoscience Conference",
        "Global Solar Council",
        "GIAC Security Essentials",
        "Global Energy Certification",
        "Global Solar Certification",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Ready to discuss your next electrical or renewable infrastructure project?",
      requestConsultation: "Request Consultation",
      becomePartner: "Become a Partner",
      company: "Thunder Light Electrical, Inc.",
      address: ["24336 Crestlawn Street", "Woodland Hills, CA 91367", "United States"],
      founderLabel: "Founder",
      founderName: "Ira Bakhtiary",
      phoneLabel: "Phone",
      emailLabel: "Email",
      email: "trustiraelectric@yahoo.com",
      turkeyLabel: "Turkey Region / International Expansion",
      turkeyLines: ["Arshia Sharifi", "RMO / International Brand Expander", "NAMIK KEMAL MAH. 68. SK. TERRACE LOTUS NO:110 Kat:25 ESENYURT / ISTANBUL"],
    },
  },
  fa: {
    dir: "rtl",
    langToggleLabel: "EN",
    whatsappMessage: "سلام، مایل به گفت‌وگو درباره‌ی پروژه، مشاوره یا همکاری با Thunder Light Electrical هستم.",
    nav: {
      home: "صفحه اصلی Thunder Light Electrical",
      links: ["مرور کلی", "خدمات", "انرژی تجدیدپذیر", "روند اجرا", "مجوزها"],
      contact: "تماس",
    },
    hero: {
      badge: "پیمانکار زیرساخت‌های برق، مستقر در کالیفرنیا",
      title: "Thunder Light Electrical",
      subtitle: "سیستم‌های برق صنعتی، تأسیساتی و تجدیدپذیر، مهندسی‌شده برای پروژه‌های دشوار.",
      description:
        "ما ساخت‌وساز برق، توزیع نیرو، پشتیبانی EPC خورشیدی و زیرساخت آماده اتصال به شبکه را برای پروژه‌های بخش عمومی و خصوصی ارائه می‌دهیم.",
      requestConsultation: "درخواست مشاوره",
      viewServices: "مشاهده خدمات",
      partnerWithUs: "همکاری با ما",
      signals: [
        ["30+", "سال اجرای پروژه‌های برق"],
        ["150+ MW", "ظرفیت پروژه‌های تجدیدپذیر"],
        ["CA", "منطقه اصلی فعالیت"],
      ],
      presidentLabel: "رئیس",
      presidentName: "ایرا بختیاری",
      presidentBio:
        "رهبری بنیان‌گذار با تمرکز بر کیفیت، اعتبار فنی، مشارکت‌های بلندمدت و اجرای عملی زیرساخت.",
    },
    metrics: [
      ["30+", "سال تجربه"],
      ["40+", "ظرفیت مهندسی / شبکه"],
      ["150+ MW", "ظرفیت پروژه‌های تجدیدپذیر"],
      ["کالیفرنیا", "منطقه اصلی خدمات"],
    ],
    catalog: {
      eyebrow: "کاتالوگ شرکتی",
      title: "پروفایل شرکت Thunder Light Electrical",
      description:
        "کاتالوگ شرکتی را برای مشاهده دامنه خدمات، توانمندی‌های زیرساخت تجدیدپذیر، پروفایل مدیریت و جایگاه شرکت دانلود کنید.",
      button: "دانلود کاتالوگ",
    },
    overview: {
      eyebrow: "درباره شرکت",
      title: "پیمانکار زیرساختی مقیاس‌پذیر، ساخته‌شده برای نیازهای انرژی مدرن.",
      body1:
        "Thunder Light Electrical یک پیمانکار زیرساخت‌های برق و تجدیدپذیر با عملکرد بالاست که در پروژه‌های صنعتی، تجاری، مسکونی، تأسیساتی و بخش عمومی در سراسر ایالات متحده و بازارهای بین‌المللی تخصص دارد. این شرکت استانداردهای مهندسی آمریکایی، شبکه‌های تأمین بین‌المللی، تخصص در انرژی تجدیدپذیر و سیستم‌های اجرایی مقیاس‌پذیر را برای پشتیبانی از استقرار زیرساخت‌های پیچیده انرژی ترکیب می‌کند.",
      body2:
        "Thunder Light Electrical از پروژه‌های زیرساخت تجدیدپذیر مقیاس‌پذیر پشتیبانی می‌کند؛ از سیستم‌های خورشیدی مسکونی و تجاری تا توسعه‌های بزرگ‌مقیاس خورشیدی و بادی با ظرفیت بیش از ۱۵۰ مگاوات، بسته به دامنه پروژه، شرایط سایت، ساختار تأمین و مقیاس سرمایه‌گذاری.",
    },
    services: {
      eyebrow: "خدمات اصلی",
      title: "توانمندی‌های زیرساخت برق، تجدیدپذیر و عمومی.",
      items: [
        {
          title: "ساخت‌وساز برق صنعتی",
          items: ["سیستم‌های HV / MV / LV", "سیستم‌های توزیع", "تابلوهای برق (سوئیچ‌گیر)", "پست‌های برق", "زیرساخت زیرزمینی", "استقرار نیروی بادی"],
        },
        {
          title: "زیرساخت انرژی تجدیدپذیر",
          items: ["EPC خورشیدی", "خورشیدی پشت‌بامی", "مزارع خورشیدی", "پشتیبانی بادی", "ذخیره‌سازی باتری", "یکپارچه‌سازی شبکه"],
        },
        {
          title: "برق تجاری",
          items: ["مجتمع‌های تجاری", "ساختمان‌های هوشمند", "شارژ خودروی برقی", "بهینه‌سازی انرژی", "توزیع نیرو"],
        },
        {
          title: "زیرساخت عمومی و تأسیساتی",
          items: ["پروژه‌های شهرداری", "سیستم‌های تأسیساتی", "زیرساخت حمل‌ونقل", "آب / فاضلاب", "سیستم‌های شبکه"],
        },
        {
          title: "سیستم‌های توسعه‌ی لوکس",
          items: ["مسکونی منتخب", "مجتمع‌های محصور", "کنترل‌های خانه هوشمند", "امنیت و نظارت", "سیستم‌های ولتاژ پایین"],
        },
        {
          title: "برق پشتیبان و تاب‌آوری",
          items: ["سیستم‌های ژنراتور", "برق اضطراری", "تاب‌آوری باتری", "پشتیبانی خدمات", "عیب‌یابی"],
        },
      ],
    },
    renewables: {
      eyebrow: "راهکارهای انرژی تجدیدپذیر",
      title: "زیرساخت انرژی نوین مقیاس‌پذیر، از خانه‌ها تا محیط‌های تأسیساتی.",
      body:
        "Thunder Light از زیرساخت‌های تجدیدپذیر پشتیبانی می‌کند؛ از سیستم‌های خورشیدی مسکونی و تجاری تا توسعه‌های بزرگ‌مقیاس خورشیدی و بادی. ظرفیت به دامنه پروژه، شرایط سایت، ساختار تأمین، طراحی مهندسی و مقیاس سرمایه‌گذاری بستگی دارد.",
      capabilities: [
        "EPC خورشیدی و سیستم‌های خورشیدی پشت‌بامی",
        "مزارع خورشیدی و تولید پراکنده",
        "پشتیبانی از استقرار نیروی بادی",
        "ذخیره‌سازی باتری و تاب‌آوری انرژی",
        "یکپارچه‌سازی شبکه و سیستم‌های انرژی هوشمند",
        "زیرساخت شارژ خودروی برقی",
      ],
    },
    utility: {
      eyebrow: "زیرساخت برق و سیستم‌های تأسیساتی",
      title: "اجرای در سطح تأسیساتی برای محیط‌های پیچیده برق.",
      body:
        "ساخته‌شده برای پروژه‌هایی که ایمنی، انطباق، زمان‌بندی و انضباط مهندسی در آن‌ها اهمیت دارد: سیستم‌های HV/MV/LV، توزیع، تابلوهای برق، پست‌ها، تأسیسات زیرزمینی، برق تجاری و زیرساخت عمومی.",
      items: ["سیستم‌های HV / MV / LV", "پست‌ها و تابلوهای برق", "تأسیسات زیرزمینی", "سیستم‌های عمومی و شهری"],
    },
    advantages: {
      eyebrow: "چرا ما",
      title: "اجرای فنی با مقیاس‌پذیری بین‌المللی.",
      body:
        "Thunder Light Electrical در جایگاهی است که می‌تواند از توسعه‌دهندگان، شرکت‌های EPC، پیمانکاران، سرمایه‌گذاران تجدیدپذیر و ذی‌نفعان بخش عمومی با ارائه‌ی زیرساخت برق مقرون‌به‌صرفه و منطبق با استانداردها پشتیبانی کند.",
      items: [
        "برنامه‌ریزی دقیق",
        "راهکارهای باکیفیت",
        "شبکه تأمین بین‌المللی",
        "تیم‌های مهندسی باتجربه",
        "نیروی کار مقیاس‌پذیر",
        "تخصص در انرژی تجدیدپذیر",
        "تمرکز بر ایمنی و انطباق",
        "اجرا در سطح EPC",
      ],
    },
    workflow: {
      eyebrow: "روند اجرای مبتنی بر EPC",
      title: "از استعلام تا راه‌اندازی، با کنترل‌های پروژه‌ی منظم.",
      steps: [
        ["01", "استعلام و ارزیابی پروژه", "بررسی دامنه، نیاز مشتری، موقعیت، بودجه، زمان‌بندی تحویل و هماهنگی ذی‌نفعان."],
        ["02", "ارزیابی سایت و امکان‌سنجی", "بررسی فنی سایت، نیاز بار، پتانسیل تجدیدپذیر، محدودیت‌ها و مسیر اخذ مجوز."],
        ["03", "مهندسی و برآورد", "طراحی مفهومی، برآورد مصالح (BOQ)، مدل هزینه، زمان‌بندی، مواد، نیروی کار و فرضیات ریسک."],
        ["04", "تأمین و بسیج منابع", "تأمین از فروشندگان، انتخاب تجهیزات، لجستیک، برنامه‌ریزی نیروی کار و آماده‌سازی ایمنی."],
        ["05", "ساخت و کنترل کیفیت", "اجرای میدانی، بازرسی‌ها، آزمایش، کنترل کیفیت و هماهنگی زمان‌بندی."],
        ["06", "راه‌اندازی و تحویل", "آزمایش نهایی، مستندسازی، گارانتی‌ها، نقشه‌های ازبیلت، دفترچه‌ها و پشتیبانی پس از پروژه."],
      ],
    },
    leadership: {
      eyebrow: "مدیریت و نمایندگی بین‌المللی",
      title: "مدیریتی بنا‌شده بر اجرا و فرصت‌های فرامرزی.",
      iraLabel: "بنیان‌گذار / رئیس",
      iraName: "ایرا بختیاری",
      iraBio:
        "مدیر باتجربه‌ی زیرساخت با پروفایل رهبری حرفه‌ای و مهندسی‌محور. فلسفه‌ی بنیان‌گذار بر کسب‌وکار صادقانه، کیفیت اجرا، اعتبار فنی، مشارکت‌های بلندمدت و توسعه‌ی عملی زیرساخت تأکید دارد.",
      arshiaLabel: "منطقه ترکیه",
      arshiaName: "آرشیا شریفی",
      arshiaRole: "RMO / توسعه‌دهنده برند بین‌المللی",
      arshiaBio:
        "نماینده‌ی مستقر در ترکیه که از روابط عمومی بین‌المللی، توسعه‌ی کسب‌وکار، هماهنگی نمایندگی‌ها و گسترش مشارکت‌های فرامرزی پشتیبانی می‌کند.",
      arshiaAddress: "NAMIK KEMAL MAH. 68. SK. TERRACE LOTUS NO:110 Kat:25 ESENYURT / ISTANBUL",
    },
    projects: {
      eyebrow: "نمونه پروژه‌ها",
      title: "ساخته‌شده برای محیط‌های تأسیساتی، صنعتی و تجدیدپذیر.",
      viewCapabilities: "مشاهده توانمندی‌ها",
      items: [
        ["تیم میدانی و فرهنگ ایمنی", "تیم‌های حرفه‌ای سایت، انضباط در استفاده از تجهیزات ایمنی و حضور اجرامحور در پروژه."],
        ["خورشیدی مسکونی و هوشمند", "سیستم‌های یکپارچه‌ی خورشیدی، برق پشتیبان، شارژ خودروی برقی و انرژی هوشمند برای محیط‌های ساخته‌شده."],
        ["استقرار خورشیدی پشت‌بامی", "اجرای خورشیدی پشت‌بامی تجاری و مسکونی همراه با برنامه‌ریزی شبکه و تاب‌آوری."],
        ["پست‌ها و سیستم‌های فشار قوی", "محیط‌های در سطح تأسیساتی شامل تابلوهای برق، پست‌ها و سیستم‌های توزیع نیرو."],
        ["پشتیبانی نیروی بادی", "هماهنگی برق و پشتیبانی استقرار برای بسترهای تولید بادی و تجدیدپذیر."],
        ["برق توسعه‌های لوکس", "سیستم‌های برق مسکونی منتخب، تجاری و توسعه‌های لوکس."],
        ["بستر تجدیدپذیر در مقیاس تأسیساتی", "محیط‌های پروژه‌ی خورشیدی و بادی با مهندسی، تأمین و برنامه‌ریزی سایت مقیاس‌پذیر."],
      ],
    },
    partners: {
      title: "مشارکت‌های بین‌المللی برای بازارهای نوظهور انرژی و زیرساخت.",
      body:
        "ما با توسعه‌دهندگان، شرکت‌های EPC، پیمانکاران، سرمایه‌گذاران تجدیدپذیر، شبکه‌های تأمین و ذی‌نفعان بخش عمومی در سراسر ایالات متحده، ترکیه، کشورهای حوزه خلیج فارس، آذربایجان، آسیای مرکزی و بازارهای نوظهور انرژی نوین همکاری می‌کنیم.",
      callout:
        "استانداردهای مهندسی آمریکایی، اجرای در سطح تأسیساتی و آگاهی از تأمین بین‌المللی برای فرصت‌های فرامرزی.",
      types: [
        ["توسعه‌دهندگان", "مالکان پروژه‌های تجدیدپذیر و زیرساختی در جست‌وجوی شرکای اجرایی."],
        ["شرکت‌های EPC", "همکاری، پیمانکاری فرعی، هماهنگی مهندسی و پشتیبانی از تحویل پروژه."],
        ["شبکه‌های تأمین", "پنل‌های خورشیدی، باتری‌ها، اینورترها، تابلوهای برق، ترانسفورماتورها، کابل‌ها و لجستیک."],
        ["سرمایه‌گذاران", "توسعه‌ی پروژه‌های تجدیدپذیر، زیرساخت نیرو و فرصت‌های گذار انرژی."],
        ["بخش عمومی", "پروژه‌های شهرداری، تأسیساتی، دانشگاهی، آب/فاضلاب و زیرساخت حمل‌ونقل."],
        ["بازارهای بین‌المللی", "ترکیه، حوزه خلیج فارس، آذربایجان، آسیای مرکزی و بازارهای نوظهور انرژی نوین."],
      ],
    },
    credentials: {
      eyebrow: "مجوزها، انطباق و اسناد اعتباری",
      title: "نشانه‌های اعتبار برای ایمنی، مجوز و آمادگی در بازار انرژی.",
      body:
        "Thunder Light باید با مجوزهای قابل‌تأیید، انضباط ایمنی، وضعیت بیمه/ضمانت، مستندات پروژه و شواهد انطباق حرفه‌ای پیشرو باشد.",
      callout:
        "تأیید پیش از استفاده در مناقصه‌های عمومی الزامی است: طبقه‌بندی مجوزها، وضعیت فعال، بیمه‌نامه COI، ظرفیت ضمانت، سوابق ایمنی/OSHA، اعتبار گواهی‌ها و مجوز نمایش نشان‌های شخص ثالث باید تأیید شوند.",
      labels: [
        "مرجع مجوز CSLB",
        "مرجع ایمنی برق / NFPA",
        "سند اعتباری AEP",
        "کنفرانس علوم زمین انرژی",
        "شورای جهانی خورشیدی",
        "مبانی امنیت GIAC",
        "گواهی جهانی انرژی",
        "گواهی جهانی خورشیدی",
      ],
    },
    contact: {
      eyebrow: "تماس",
      title: "آماده‌ی گفت‌وگو درباره‌ی پروژه‌ی بعدی برق یا زیرساخت تجدیدپذیر خود هستید؟",
      requestConsultation: "درخواست مشاوره",
      becomePartner: "همکار ما شوید",
      company: "Thunder Light Electrical, Inc.",
      address: ["24336 Crestlawn Street", "Woodland Hills, CA 91367", "United States"],
      founderLabel: "بنیان‌گذار",
      founderName: "ایرا بختیاری",
      phoneLabel: "تلفن",
      emailLabel: "ایمیل",
      email: "trustiraelectric@yahoo.com",
      turkeyLabel: "منطقه ترکیه / توسعه بین‌المللی",
      turkeyLines: ["آرشیا شریفی", "RMO / توسعه‌دهنده برند بین‌المللی", "NAMIK KEMAL MAH. 68. SK. TERRACE LOTUS NO:110 Kat:25 ESENYURT / ISTANBUL"],
    },
  },
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function interpolate(value, points, values) {
  if (value <= points[0]) return values[0];

  for (let index = 1; index < points.length; index += 1) {
    if (value <= points[index]) {
      const range = points[index] - points[index - 1];
      const progress = range === 0 ? 1 : (value - points[index - 1]) / range;
      return values[index - 1] + progress * (values[index] - values[index - 1]);
    }
  }

  return values[values.length - 1];
}

function useScrollYValue() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrollY(window.scrollY || document.documentElement.scrollTop || 0);
    };
    const requestUpdate = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return scrollY;
}

function getFrameOpacity(scrollY, index) {
  if (index === 0) {
    return clamp(interpolate(scrollY, [0, 90, 260], [0.9, 0.9, 0]), 0, 0.9);
  }

  const center = index * 130;
  const fade = index >= 6 ? 185 : 150;
  const peak = index >= 6 ? 1 : 0.9;

  return clamp((1 - Math.abs(scrollY - center) / fade) * peak, 0, peak);
}

function LightningFrame({ src, index, scrollY }) {
  const opacity = getFrameOpacity(scrollY, index);
  const scale = interpolate(scrollY, [0, 1160], [1.025, 1]);

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      draggable="false"
      loading={index < 2 ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={index === 0 ? "high" : "auto"}
      style={{ opacity, transform: `scale(${scale})` }}
      className="absolute inset-0 h-full w-full object-cover object-center brightness-95 contrast-105 saturate-90 will-change-[opacity,transform]"
    />
  );
}

function LightningScrollStory() {
  const scrollY = useScrollYValue();
  const storyOpacity = clamp(interpolate(scrollY, [0, 1180, 1330], [1, 1, 0]), 0, 1);
  const veilOpacity = clamp(interpolate(scrollY, [0, 360, 900, 1180], [0.52, 0.44, 0.18, 0.06]), 0, 0.56);
  const visibleFrames = lightningFrames
    .map((src, index) => ({ src, index, opacity: getFrameOpacity(scrollY, index) }))
    .filter(({ index, opacity }) => {
      const center = index * 130;
      return opacity > 0.01 || Math.abs(scrollY - center) < 220 || (scrollY < 120 && index === 0);
    });

  return (
    <div style={{ opacity: storyOpacity }} className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {visibleFrames.map(({ src, index }) => (
          <LightningFrame key={src} src={src} index={index} scrollY={scrollY} />
        ))}
        <div style={{ opacity: veilOpacity }} className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(2,6,23,0.62)_46%,rgba(2,6,23,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.18)_0%,rgba(2,6,23,0.16)_48%,rgba(2,6,23,0.78)_100%)]" />
    </div>
  );
}

function getInitialLang() {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("tl-lang");
  if (stored === "en" || stored === "fa") return stored;
  return "en";
}

export default function ThunderLightLandingPage() {
  const [lang, setLang] = useState(getInitialLang);
  const t = content[lang];
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.whatsappMessage)}`;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    try {
      window.localStorage.setItem("tl-lang", lang);
    } catch {
      // ignore storage errors (e.g. private mode)
    }
  }, [lang, t.dir]);

  const toggleLang = () => setLang((current) => (current === "en" ? "fa" : "en"));

  return (
    <main dir={t.dir} className="relative isolate min-h-screen overflow-hidden bg-[#050b14] text-white">
      <LightningScrollStory />
      <div className="relative z-10 overflow-hidden">
        <section className="relative z-10 min-h-[92vh] overflow-hidden">
          <div className="absolute inset-0 bg-[#050b14]" />
          <img
            src={heroDoubleExposureImage}
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-45 brightness-110 contrast-125 saturate-75"
            style={{ mixBlendMode: "screen" }}
          />
          <img
            src={heroDoubleExposureImage}
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
            className="absolute -right-[10%] bottom-[-18%] h-[92%] w-[78%] object-cover object-center opacity-60 brightness-125 contrast-125 saturate-90"
            style={{
              mixBlendMode: "lighten",
              WebkitMaskImage: "radial-gradient(ellipse at 58% 54%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.78) 38%, rgba(0,0,0,0) 72%)",
              maskImage: "radial-gradient(ellipse at 58% 54%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.78) 38%, rgba(0,0,0,0) 72%)",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.96)_0%,rgba(2,6,23,0.86)_43%,rgba(2,6,23,0.34)_100%),linear-gradient(180deg,rgba(2,6,23,0.38)_0%,rgba(5,11,20,0.38)_48%,rgba(5,11,20,0.12)_78%,rgba(5,11,20,0.02)_100%)]" />
          <div className="absolute inset-0 opacity-18 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />
          <div className="absolute inset-x-0 bottom-0 h-80 bg-[linear-gradient(180deg,rgba(226,232,240,0)_0%,rgba(148,163,184,0.08)_45%,rgba(5,11,20,0.02)_100%)]" />

          <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between gap-6 px-6 py-5 md:px-12">
            <a href="#top" aria-label={t.nav.home} className="shrink-0">
              <img
                src="https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/Asset%204.png"
                alt="Thunder Light Electrical"
                width="132"
                height="44"
                decoding="async"
                className="h-11 w-auto object-contain"
              />
            </a>
            <div className="hidden items-center gap-7 text-sm text-slate-200 md:flex">
              {navHrefs.map((href, index) => (
                <a key={href} href={href} className="transition-colors hover:text-amber-200">
                  {t.nav.links[index]}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleLang}
                aria-label={lang === "en" ? "تغییر زبان به فارسی" : "Switch language to English"}
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-4 text-sm text-slate-100 backdrop-blur transition-colors hover:bg-white/10 hover:text-amber-200"
              >
                <Languages className="h-4 w-4" /> {t.langToggleLabel}
              </button>
              <Button as="a" href={whatsappUrl} target="_blank" rel="noreferrer" className="h-11 rounded-lg px-5 text-sm shadow-lg shadow-amber-900/20">
                {t.nav.contact} <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </nav>

          <div id="top" className="relative z-10 mx-auto grid min-h-[92vh] max-w-7xl items-center gap-10 px-6 pb-20 pt-28 md:px-12 lg:grid-cols-[1fr_360px]">
            <div className="hero-enter max-w-5xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-black/30 px-4 py-2 text-sm text-amber-100 backdrop-blur">
                <ShieldCheck className="h-4 w-4" /> {t.hero.badge}
              </div>
              <h1 className="mt-7 text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                {t.hero.title}
              </h1>
              <p className="mt-6 max-w-4xl text-2xl font-medium leading-tight text-white md:text-4xl">
                {t.hero.subtitle}
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
                {t.hero.description}
              </p>
              <div className="relative z-20 mt-9 flex flex-col gap-3 sm:flex-row">
                <Button as="a" href={whatsappUrl} target="_blank" rel="noreferrer" className="h-12 rounded-lg px-7 text-base shadow-xl shadow-amber-900/20">
                  {t.hero.requestConsultation} <MessageCircle className="h-4 w-4" />
                </Button>
                <Button as="a" href="#services" variant="outline" className="h-12 rounded-lg px-7 text-base">
                  {t.hero.viewServices}
                </Button>
                <Button as="a" href={whatsappUrl} target="_blank" rel="noreferrer" variant="ghost" className="h-12 rounded-lg border border-white/15 bg-white/[0.06] px-7 text-base text-slate-100 backdrop-blur">
                  {t.hero.partnerWithUs} <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
                {t.hero.signals.map(([value, label]) => (
                  <div key={label} className="rounded-lg border border-white/10 bg-black/30 p-4 backdrop-blur">
                    <p className="text-2xl font-semibold text-amber-200">{value}</p>
                    <p className="mt-1 text-sm text-slate-300">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <aside className="hero-enter-delayed hidden self-end lg:block">
              <div className="overflow-hidden rounded-lg border border-white/12 bg-black/35 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={thunderAssets.ira}
                    alt={t.hero.presidentName}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="border-t border-white/10 p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-amber-200">{t.hero.presidentLabel}</p>
                  <h2 className="mt-2 text-2xl font-semibold">{t.hero.presidentName}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {t.hero.presidentBio}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="relative z-10 min-h-[68vh] overflow-hidden md:min-h-[72vh]" aria-label="Lightning transition">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,20,0.08)_0%,rgba(5,11,20,0.02)_42%,rgba(5,11,20,0.70)_100%)]" />
          <div className="relative z-20 mx-auto flex min-h-[68vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-28 md:min-h-[72vh] md:px-12 md:pb-20">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {t.metrics.map(([value, label]) => (
                <Card key={label} className="rounded-lg border-white/10 bg-white/[0.07] text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
                  <CardContent className="p-6">
                    <p className="text-3xl md:text-4xl font-semibold text-amber-300">{value}</p>
                    <p className="mt-2 text-sm text-slate-300">{label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-5 rounded-lg border border-white/10 bg-[#07101c]/90 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:flex-row md:items-center md:justify-between md:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-amber-300/25 bg-amber-300/10 text-amber-200">
                  <FileCheck2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-200">{t.catalog.eyebrow}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">{t.catalog.title}</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
                    {t.catalog.description}
                  </p>
                </div>
              </div>
              <Button as="a" href={catalogUrl} target="_blank" rel="noreferrer" download className="h-12 shrink-0 rounded-lg bg-amber-400 px-6 text-base text-slate-950 hover:bg-amber-300">
                {t.catalog.button} <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>

      <section id="overview" className="relative z-10 bg-[#050b14]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-28 pt-20 md:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-amber-300 font-medium">{t.overview.eyebrow}</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">{t.overview.title}</h2>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed">
            {t.overview.body1}
            <span className="mt-5 block">
              {t.overview.body2}
            </span>
          </p>
        </div>
      </section>

      <section id="services" className="relative z-10 bg-[#08111f] border-y border-white/10 py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="text-amber-300 font-medium">{t.services.eyebrow}</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">{t.services.title}</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {t.services.items.map(({ title, items }, index) => {
              const Icon = serviceIcons[index];
              return (
                <Card key={title} className="overflow-hidden rounded-lg border-white/10 bg-[#0b1728] text-white">
                  <CardContent className="p-8">
                    <Icon className="h-10 w-10 text-amber-300" />
                    <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
                    <div className="mt-6 grid sm:grid-cols-2 gap-3">
                      {items.map((item) => (
                        <div key={item} className="rounded-md border border-white/5 bg-white/[0.04] px-4 py-3 text-sm text-slate-300">
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="renewables" className="relative z-10 bg-[#050b14] py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-amber-300 font-medium">{t.renewables.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{t.renewables.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              {t.renewables.body}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.renewables.capabilities.map((item, index) => {
                const Icon = renewableIcons[index];
                return (
                  <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4">
                    <Icon className="h-5 w-5 shrink-0 text-amber-300" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
              <img src={thunderAssets.smartSolarHome} alt={t.renewables.capabilities[0]} loading="lazy" decoding="async" className="h-[320px] w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
                <img src={thunderAssets.rooftopSolar} alt={t.renewables.capabilities[0]} loading="lazy" decoding="async" className="h-40 w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
                <img src={thunderAssets.windFarm} alt={t.renewables.capabilities[2]} loading="lazy" decoding="async" className="h-40 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-[#08111f] py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={thunderAssets.substation} alt={t.utility.items[1]} loading="lazy" decoding="async" className="h-72 w-full rounded-lg border border-white/10 object-cover" />
            <img src={thunderAssets.windCrew} alt={t.projects.items[4][0]} loading="lazy" decoding="async" className="mt-10 h-72 w-full rounded-lg border border-white/10 object-cover" />
          </div>
          <div>
            <p className="text-amber-300 font-medium">{t.utility.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{t.utility.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              {t.utility.body}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {t.utility.items.map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.05] p-5">
                  <Cable className="h-6 w-6 text-amber-300" />
                  <p className="mt-4 font-medium text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 py-28 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-amber-300 font-medium">{t.advantages.eyebrow}</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">{t.advantages.title}</h2>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            {t.advantages.body}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {t.advantages.items.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.05] p-5">
              <ShieldCheck className="h-5 w-5 text-amber-300 shrink-0" />
              <span className="text-slate-200">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="workflow" className="relative z-10 border-y border-white/10 bg-[#07101d] py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-amber-300 font-medium">{t.workflow.eyebrow}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{t.workflow.title}</h2>
            </div>
            <ClipboardCheck className="h-12 w-12 text-amber-300" />
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.workflow.steps.map(([number, title, desc]) => (
              <div key={number} className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
                <p className="text-sm font-semibold text-amber-300">{number}</p>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#050b14] py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="max-w-3xl">
            <UsersRound className="mb-6 h-10 w-10 text-amber-300" />
            <p className="text-amber-300 font-medium">{t.leadership.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{t.leadership.title}</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Card className="overflow-hidden rounded-lg border-white/10 bg-[#0b1728] text-white">
              <div className="grid md:grid-cols-[0.86fr_1fr]">
                <img src={thunderAssets.ira} alt={t.leadership.iraName} loading="lazy" decoding="async" className="h-full min-h-80 w-full object-cover" />
                <CardContent className="p-8">
                  <UserRound className="h-8 w-8 text-amber-300" />
                  <p className="mt-6 text-sm uppercase tracking-[0.18em] text-amber-200">{t.leadership.iraLabel}</p>
                  <h3 className="mt-2 text-3xl font-semibold">{t.leadership.iraName}</h3>
                  <p className="mt-5 leading-relaxed text-slate-300">
                    {t.leadership.iraBio}
                  </p>
                </CardContent>
              </div>
            </Card>
            <Card className="overflow-hidden rounded-lg border-white/10 bg-[#0b1728] text-white">
              <div className="grid md:grid-cols-[0.74fr_1fr]">
                <img src={thunderAssets.arshia} alt={t.leadership.arshiaName} loading="lazy" decoding="async" className="h-full min-h-80 w-full object-cover" />
                <CardContent className="p-8">
                  <Globe2 className="h-8 w-8 text-amber-300" />
                  <p className="mt-6 text-sm uppercase tracking-[0.18em] text-amber-200">{t.leadership.arshiaLabel}</p>
                  <h3 className="mt-2 text-3xl font-semibold">{t.leadership.arshiaName}</h3>
                  <p className="mt-2 text-slate-300">{t.leadership.arshiaRole}</p>
                  <p className="mt-5 leading-relaxed text-slate-300">
                    {t.leadership.arshiaBio}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-slate-400">
                    {t.leadership.arshiaAddress}
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 py-28 bg-[#040912]">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-amber-300 font-medium">{t.projects.eyebrow}</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">{t.projects.title}</h2>
            </div>
            <Button as="a" href="#services" variant="outline" className="rounded-lg border-white/20 bg-white/5 text-white hover:bg-white/10">
              {t.projects.viewCapabilities} <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" />
            </Button>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.projects.items.map(([title, desc], index) => (
              <Card key={title} className="group overflow-hidden rounded-lg border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] text-white">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={projectImages[index]}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-transparent" />
                </div>
                <CardContent className="p-7">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 py-28">
        <div className="rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(13,27,46,1),rgba(5,11,20,1))] p-8 md:p-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-4xl">
              <Handshake className="h-12 w-12 text-amber-300" />
              <h2 className="mt-7 text-4xl md:text-5xl font-semibold tracking-tight">{t.partners.title}</h2>
              <p className="mt-7 text-lg text-slate-300 leading-relaxed">
                {t.partners.body}
              </p>
            </div>
            <div className="rounded-lg border border-amber-300/20 bg-amber-300/10 p-5 text-sm leading-relaxed text-amber-100 lg:max-w-sm">
              {t.partners.callout}
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.partners.types.map(([title, desc]) => (
              <div key={title} className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="credentials" className="relative z-10 border-y border-white/10 bg-[#08111c] py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <FileCheck2 className="mb-6 h-10 w-10 text-amber-300" />
              <p className="text-amber-300 font-medium">{t.credentials.eyebrow}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{t.credentials.title}</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                {t.credentials.body}
              </p>
              <div className="mt-7 rounded-lg border border-amber-300/20 bg-amber-300/10 p-5 text-sm leading-relaxed text-amber-100">
                {t.credentials.callout}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {t.credentials.labels.map((label, index) => (
                <div key={label} className="rounded-lg border border-white/10 bg-[#050b14] p-4">
                  <div className="grid h-28 place-items-center">
                    <img src={credentialImages[index]} alt={label} loading="lazy" decoding="async" className="max-h-24 max-w-full object-contain" />
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 overflow-hidden border-t border-white/10 bg-[#08111c] py-20">
        <img
          src={usMapImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-50 brightness-90 contrast-125 saturate-90"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,20,0.90)_0%,rgba(5,11,20,0.68)_44%,rgba(5,11,20,0.46)_100%),linear-gradient(180deg,#08111c_0%,rgba(8,17,28,0.24)_24%,rgba(8,17,28,0.30)_72%,#08111c_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(251,191,36,0.18),transparent_32%),radial-gradient(circle_at_18%_86%,rgba(59,130,246,0.14),transparent_36%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 grid lg:grid-cols-[1fr_0.8fr] gap-12 items-start">
          <div>
            <p className="text-amber-300 font-medium">{t.contact.eyebrow}</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">{t.contact.title}</h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button as="a" href={whatsappUrl} target="_blank" rel="noreferrer" className="h-12 rounded-lg bg-amber-500 px-7 text-base text-slate-950 hover:bg-amber-400">
                {t.contact.requestConsultation} <MessageCircle className="h-4 w-4" />
              </Button>
              <Button as="a" href={whatsappUrl} target="_blank" rel="noreferrer" variant="outline" className="h-12 rounded-lg border-white/20 bg-white/5 px-7 text-base text-white hover:bg-white/10">
                {t.contact.becomePartner} <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Card className="rounded-lg border-white/10 bg-[#0b1728]/88 text-white shadow-2xl shadow-black/25 backdrop-blur-md">
            <CardContent className="p-8 space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 text-amber-300 shrink-0 mt-1" />
                <div>
                  <p className="font-medium">{t.contact.company}</p>
                  <p className="text-slate-300">
                    {t.contact.address.map((line, index) => (
                      <span key={line}>
                        {line}
                        {index < t.contact.address.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <UserRound className="h-5 w-5 text-amber-300 shrink-0 mt-1" />
                <div>
                  <p className="font-medium">{t.contact.founderLabel}</p>
                  <p className="text-slate-300">{t.contact.founderName}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="h-5 w-5 text-amber-300 shrink-0 mt-1" />
                <div>
                  <p className="font-medium">{t.contact.phoneLabel}</p>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-slate-300 transition-colors hover:text-amber-200" dir="ltr">
                    +1 (818) 642-7292
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="h-5 w-5 text-amber-300 shrink-0 mt-1" />
                <div>
                  <p className="font-medium">{t.contact.emailLabel}</p>
                  <p className="text-slate-300" dir="ltr">{t.contact.email}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Globe2 className="h-5 w-5 text-amber-300 shrink-0 mt-1" />
                <div>
                  <p className="font-medium">{t.contact.turkeyLabel}</p>
                  <p className="text-slate-300">
                    {t.contact.turkeyLines.map((line, index) => (
                      <span key={line}>
                        {line}
                        {index < t.contact.turkeyLines.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
