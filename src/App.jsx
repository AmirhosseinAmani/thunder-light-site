import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Sun, Wind, ShieldCheck, Globe2, Factory, Building2, BatteryCharging, Network, HardHat, Mail, MapPin, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Factory,
    title: "Industrial Electrical Construction",
    items: ["HV / MV / LV Systems", "Distribution Systems", "Switchgear", "Substations", "Underground Infrastructure", "Wind Power Deployment"],
  },
  {
    icon: Sun,
    title: "Renewable Energy Infrastructure",
    items: ["Solar Farms", "Rooftop Solar", "Battery Systems", "Grid Integration", "Smart Energy Systems"],
  },
  {
    icon: Building2,
    title: "Commercial Electrical",
    items: ["Commercial Complexes", "Smart Buildings", "Energy Optimization", "Power Distribution"],
  },
  {
    icon: Network,
    title: "Public & Utility Infrastructure",
    items: ["Municipal Projects", "Utility Projects", "Transportation Infrastructure", "Grid Systems"],
  },
];

const metrics = [
  ["30+", "Years of Experience"],
  ["40+", "Engineers"],
  ["150+ MW", "Renewable Capacity Deployed"],
  ["California", "Primary Region Served"],
];

const advantages = [
  "Precision Planning",
  "High-Quality Solutions",
  "International Procurement Network",
  "Experienced Engineering Teams",
  "Scalable Workforce",
  "Renewable Energy Expertise",
  "Safety & Compliance Focus",
  "EPC-Grade Execution",
];

const projects = [
  {
    title: "Solar EPC Projects",
    desc: "Scalable renewable deployment for commercial and utility-scale environments.",
    image: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/b85a02ff-02e9-40d0-bd87-8be3d3e2d8de.png",
  },
  {
    title: "Wind Infrastructure",
    desc: "Electrical deployment support for wind power and renewable generation systems.",
    image: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/ChatGPT%20Image%20May%2019,%202026,%2002_19_41%20PM.png",
  },
  {
    title: "Utility Systems",
    desc: "Grid-grade electrical infrastructure for public and private energy networks.",
    image: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/ChatGPT%20Image%20May%2019,%202026,%2002_13_37%20PM.png",
  },
  {
    title: "Industrial Facilities",
    desc: "High-performance electrical systems for complex industrial environments.",
    image: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/017a108f-36cf-4609-9ca6-44b0f87c015c.png",
  },
  {
    title: "Executive Leadership",
    desc: "Engineering-driven leadership focused on scalable infrastructure execution.",
    image: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/ChatGPT%20Image%20May%2019,%202026,%2002_12_36%20PM.png",
  },
  {
    title: "Renewable & EPC Operations",
    desc: "Integrated renewable infrastructure and cross-border EPC deployment systems.",
    image: "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/ChatGPT%20Image%20May%2019,%202026,%2002_18_18%20PM.png",
  },
];

const lightningFrames = [
  "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/ss/1.png",
  "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/ss/2.png",
  "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/ss/3.png",
  "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/ss/4.png",
  "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/ss/5.png",
  "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/ss/6.png",
  "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/ss/7.png",
  "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/ss/8.png",
  "https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/ss/9.png",
];

function LightningFrame({ src, index, progress }) {
  const start = index * 0.022;
  const peak = start + 0.016;
  const end = start + 0.036;
  const opacity = useTransform(progress, [Math.max(0, start - 0.01), peak, end], [0, 0.72, 0]);

  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden="true"
      style={{ opacity }}
      className="absolute left-1/2 top-[-7vh] h-[120vh] w-auto max-w-none -translate-x-1/2 object-contain mix-blend-screen brightness-90 contrast-110 saturate-50"
    />
  );
}

function LightningScrollBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.22], [0, 90]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.08, 0.18, 0.28], [0.18, 0.34, 0.22, 0]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(148,163,184,0.10),transparent_36%),linear-gradient(to_bottom,#020617_0%,#050b14_35%,#08111c_72%,#050b14_100%)]" />
      <motion.div style={{ opacity: glowOpacity }} className="absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(circle_at_50%_12%,rgba(226,232,240,0.18),transparent_42%)]" />
      <div className="absolute inset-0 opacity-[0.055] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      <motion.div style={{ y }} className="absolute inset-0">
        {lightningFrames.map((src, index) => (
          <LightningFrame key={src} src={src} index={index} progress={scrollYProgress} />
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.28)_58%,rgba(2,6,23,0.78)_100%)]" />
    </div>
  );
}

export default function ThunderLightLandingPage() {
  return (
    <main className="min-h-screen bg-[#050b14] text-white overflow-hidden relative">
      <LightningScrollBackground />
      <section className="relative z-10 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(180,120,60,0.07),transparent_24%),radial-gradient(circle_at_75%_0%,rgba(71,85,105,0.08),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0.76)_0%,rgba(5,11,20,0.72)_36%,rgba(8,17,28,0.68)_70%,rgba(11,23,40,0.72)_100%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-copper-500/20 blur-3xl" />

        <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/Asset%204.png"
              alt="Thunder Light Electrical"
              className="h-12 w-auto object-contain"
            />
          </div>
        </nav>

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 pt-28 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-white/5 px-4 py-2 text-sm text-amber-200 backdrop-blur">
              <ShieldCheck className="h-4 w-4" /> California-Based EPC-Oriented Infrastructure Partner
            </div>
            <h1 className="mt-7 text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
              Engineering High-Performance Electrical Infrastructure
            </h1>
            <p className="mt-7 max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed">
              Industrial, commercial, residential and renewable energy solutions across public and private sectors.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 relative z-20">
              <Button className="rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 h-13 px-7 text-base shadow-xl shadow-amber-900/20">
                Request Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 hover:bg-white/10 h-13 px-7 text-base text-white">
                Submit Project Inquiry
              </Button>
              <Button variant="ghost" className="rounded-2xl border border-cyan-400/20 bg-[#0b1728]/80 backdrop-blur-md hover:bg-slate-500/10 hover:border-slate-300/20 h-13 px-7 text-base text-slate-200 shadow-[0_0_30px_rgba(15,23,42,0.45)] relative z-30">
                Become a Partner
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative lg:pl-8">
            <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-slate-400/10 blur-3xl" />
            <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
            <div className="rounded-[2rem] border border-white/10 bg-[#091426]/70 p-4 shadow-[0_0_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02),transparent_35%,rgba(148,163,184,0.04))]" />
              <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden relative border border-white/10">
                <img
                  src="https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/ChatGPT%20Image%20May%2019,%202026,%2002_12_36%20PM.png"
                  alt="Thunder Light Electrical"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent" />
                <div className="absolute top-6 left-6 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl px-4 py-3">
                  <img
                    src="https://qysluhfrjpcguhneqsuz.supabase.co/storage/v1/object/public/Thunder%20Light/Asset%207.png"
                    alt="Thunder Light"
                    className="h-10 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/10 bg-black/35 p-5 backdrop-blur">
                  <p className="text-sm text-slate-300">Modern electrical, utility and renewable infrastructure deployment.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 mt-10 md:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map(([value, label]) => (
          <Card key={label} className="rounded-3xl border-white/10 bg-white/[0.06] backdrop-blur-xl text-white shadow-2xl shadow-black/20">
            <CardContent className="p-6">
              <p className="text-3xl md:text-4xl font-semibold text-amber-300">{value}</p>
              <p className="mt-2 text-sm text-slate-300">{label}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 pt-24 pb-28">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <div>
            <p className="text-amber-300 font-medium">Company Overview</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">A scalable infrastructure contractor built for modern energy demands.</h2>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed">
            Thunder Light Electrical is a high-performance electrical and renewable infrastructure contractor specializing in industrial, commercial, residential, utility-scale and public-sector projects across the United States and international markets. The company combines American engineering standards, international procurement networks, renewable expertise and scalable execution systems to support complex energy infrastructure deployment.
          </p>
        </div>
      </section>

      <section id="services" className="relative z-10 bg-[#08111f] border-y border-white/10 py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="text-amber-300 font-medium">Core Services</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">Electrical, renewable and public infrastructure capabilities.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {services.map(({ icon: Icon, title, items }) => (
              <Card key={title} className="rounded-[2rem] border-white/10 bg-[#0b1728] text-white overflow-hidden">
                <CardContent className="p-8">
                  <Icon className="h-10 w-10 text-amber-300" />
                  <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {items.map((item) => (
                      <div key={item} className="rounded-2xl bg-white/[0.04] px-4 py-3 text-sm text-slate-300 border border-white/5">
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 py-28 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-amber-300 font-medium">Why Choose Us</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">Technical execution with international scalability.</h2>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Thunder Light Electrical is positioned to support developers, EPC firms, contractors, renewable investors and public-sector stakeholders with cost-efficient, compliance-focused electrical infrastructure delivery.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {advantages.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-amber-300 shrink-0" />
              <span className="text-slate-200">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="relative z-10 py-28 bg-[#040912]">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-amber-300 font-medium">Project Showcase</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">Built for utility, industrial and renewable environments.</h2>
            </div>
            <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 hover:bg-white/10 text-white">
              View Capabilities <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <Card key={project.title} className="rounded-[2rem] border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] text-white overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-transparent" />
                </div>
                <CardContent className="p-7">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">{project.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 py-28">
        <div className="rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.18),transparent_30%),linear-gradient(135deg,rgba(13,27,46,1),rgba(5,11,20,1))] p-8 md:p-14">
          <Globe2 className="h-12 w-12 text-amber-300" />
          <h2 className="mt-7 text-4xl md:text-5xl font-semibold tracking-tight max-w-4xl">International partnerships for emerging energy and infrastructure markets.</h2>
          <p className="mt-7 max-w-4xl text-lg text-slate-300 leading-relaxed">
            We collaborate with developers, EPC firms, contractors, renewable investors and public-sector stakeholders across international markets to deliver scalable electrical and renewable infrastructure solutions. Our target markets include the United States, California, Turkey, GCC countries, Azerbaijan, Central Asia and emerging renewable energy markets.
          </p>
        </div>
      </section>

      <section id="contact" className="relative z-10 border-t border-white/10 bg-[#08111c] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12 grid lg:grid-cols-[1fr_0.8fr] gap-12 items-start">
          <div>
            <p className="text-amber-300 font-medium">Contact</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">Ready to discuss your next electrical or renewable infrastructure project?</h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 h-13 px-7 text-base">
                Request Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 hover:bg-white/10 text-white h-13 px-7 text-base">
                Become a Partner
              </Button>
            </div>
          </div>
          <Card className="rounded-[2rem] border-white/10 bg-[#0b1728] text-white">
            <CardContent className="p-8 space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 text-amber-300 shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Thunder Light Electrical, Inc.</p>
                  <p className="text-slate-300">24336 Crestlawn Street<br />Woodland Hills, CA 91367<br />United States</p>
                </div>
              </div>
              <div className="flex gap-4">
                <UserRound className="h-5 w-5 text-amber-300 shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Founder</p>
                  <p className="text-slate-300">Ira Bakhtiary</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="h-5 w-5 text-amber-300 shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-slate-300">trustiraelectric@yahoo.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
