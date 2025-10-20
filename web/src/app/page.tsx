"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Code2, Rocket, Crown } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[92svh] w-full">
      {/* Cinematic background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/poster.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-balance text-4xl sm:text-6xl md:text-7xl tracking-tight text-white drop-shadow-[0_3px_35px_rgba(0,0,0,0.6)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Elegant. Premium. Unforgettable.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="mt-5 max-w-2xl text-lg sm:text-xl text-[rgba(233,233,243,0.88)]"
          >
            I create standout digital experiences — websites, software and more —
            crafted with modern tech, smooth motion, and absolute trustworthiness.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#about"
              className="btn-premium rounded-full px-6 py-3 text-base font-medium"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="rounded-full px-6 py-3 text-base font-medium border card-border backdrop-blur-sm bg-white/5 text-white hover:bg-white/10"
            >
              Get in Touch
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.6 }}
            className="mt-10 flex items-center gap-6 text-sm text-[rgba(229,229,245,0.8)]"
          >
            <div className="flex items-center gap-2">
              <Crown className="h-4 w-4 text-gold" /> Premium quality
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand" /> Trusted delivery
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" /> Smooth animations
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="pointer-events-none mx-auto h-64 w-[80%] rounded-full blur-[120px] bg-brand/30" />
      </div>
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-5 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <div className="relative aspect-square overflow-hidden rounded-3xl card-border">
            <Image
              src="/me.jpg"
              alt="Portrait"
              fill
              sizes="(max-width: 768px) 80vw, 40vw"
              className="object-cover scale-[1.02]"
              priority
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="md:col-span-3"
        >
          <h2
            className="text-3xl sm:text-4xl tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            I build anything in tech — with taste.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            From visionary websites to robust software, I turn ideas into premium,
            elegant experiences. I obsess over detail, performance, and trust —
            so your product not only looks beautiful but feels effortless.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-foreground/90">
            <li className="flex items-center gap-2 card-border rounded-xl px-4 py-3 bg-white/[0.02]">
              <Code2 className="h-4 w-4 text-brand" /> Full‑stack Web & Apps
            </li>
            <li className="flex items-center gap-2 card-border rounded-xl px-4 py-3 bg-white/[0.02]">
              <Rocket className="h-4 w-4 text-accent" /> Performance & SEO
            </li>
            <li className="flex items-center gap-2 card-border rounded-xl px-4 py-3 bg-white/[0.02]">
              <ShieldCheck className="h-4 w-4 text-gold" /> Reliability & Security
            </li>
            <li className="flex items-center gap-2 card-border rounded-xl px-4 py-3 bg-white/[0.02]">
              <Sparkles className="h-4 w-4 text-brand" /> Motion & Micro‑interactions
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  const items = [
    {
      title: "Web Experiences",
      desc: "Modern, elegant sites with premium visuals and smooth flows.",
      icon: <Sparkles className="h-5 w-5 text-brand" />,
    },
    {
      title: "Product Engineering",
      desc: "From idea to launch with rock‑solid full‑stack craft.",
      icon: <Code2 className="h-5 w-5 text-accent" />,
    },
    {
      title: "Trusted Delivery",
      desc: "Transparent process, clear communication, on‑time results.",
      icon: <ShieldCheck className="h-5 w-5 text-gold" />,
    },
  ];

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h3
          className="text-2xl sm:text-3xl text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Capabilities
        </h3>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="card-border rounded-2xl p-6 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
            >
              <div className="flex items-center gap-3">
                {it.icon}
                <div className="text-lg font-semibold text-white">{it.title}</div>
              </div>
              <p className="mt-3 text-sm text-muted">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="card-border rounded-3xl p-8 bg-white/[0.03]"
          >
            <h3
              className="text-2xl text-white flex items-center gap-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <ShieldCheck className="h-5 w-5 text-gold" /> Trust & Craft
            </h3>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              I value integrity and clarity. Expect thoughtful scopes, proactive
              updates, and dependable execution. Excellence is the baseline —
              polish is the promise.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-3xl overflow-hidden card-border"
          >
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/poster2.jpg"
            >
              <source src="/detail.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.h4
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Let’s build something remarkable together.
        </motion.h4>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-6 flex items-center justify-center"
        >
          <a
            href="mailto:hello@example.com"
            className="btn-premium rounded-full px-7 py-3 text-base font-semibold"
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t card-border">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between text-sm text-muted">
        <span>© {new Date().getFullYear()} Your Name</span>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1"><Crown className="h-3.5 w-3.5 text-gold" /> Premium</span>
          <span className="inline-flex items-center gap-1"><Sparkles className="h-3.5 w-3.5 text-accent" /> Motion</span>
        </div>
      </div>
    </footer>
  );
}
