import { useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

const qualifications = [
  { title: "B.Tech CSE", x: "15%", y: "24%" },
  { title: "AWS Certified", x: "50%", y: "14%" },
  { title: "React Expert", x: "82%", y: "26%" },
  { title: "System Design", x: "26%", y: "58%" },
  { title: "AI Workflows", x: "50%", y: "50%" },
  { title: "Node.js", x: "74%", y: "62%" },
];

const projects = [
  {
    title: "VoiceForge Studio",
    description: "AI-powered dubbing workflow with multilingual timeline sync.",
    stack: "React, Node.js, FFmpeg",
  },
  {
    title: "VisionOps Console",
    description: "Operational dashboard with live analytics and narrative reports.",
    stack: "Next.js, Postgres, Tailwind",
  },
  {
    title: "NeuralNotes",
    description: "Context-aware note assistant with semantic search and recall.",
    stack: "TypeScript, Python, Vector DB",
  },
];

function SectionShell({ children, className = "" }) {
  return (
    <section className={`relative min-h-screen ${className}`}>
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

function FloatingNode({ node, index }) {
  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-white/10 px-3 py-2 text-xs text-white/90 backdrop-blur"
      style={{ left: node.x, top: node.y }}
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 5 + index,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {node.title}
    </motion.div>
  );
}

export default function ScrollytellingSection() {
  const [profileOpen, setProfileOpen] = useState(false);
  const rootRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end end"],
  });

  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.08, 0.2], [0, 1, 0.3]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.14], [36, 0]);
  const taglineOpacity = useTransform(scrollYProgress, [0.05, 0.14], [0, 1]);

  const profileX = useTransform(
    scrollYProgress,
    [0, 0.22],
    ["0px", "calc(50vw - 58px)"],
  );
  const profileY = useTransform(
    scrollYProgress,
    [0, 0.22],
    ["0px", "calc(-50vh + 58px)"],
  );
  const profileScale = useTransform(scrollYProgress, [0, 0.22], [2.25, 1]);
  const profileGlow = useTransform(scrollYProgress, [0, 0.65, 1], [0.45, 0.7, 0.95]);
  const profileRingDeg = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const parallaxBack = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const parallaxMid = useTransform(scrollYProgress, [0, 1], [0, -220]);

  const section2Opacity = useTransform(scrollYProgress, [0.2, 0.32, 0.45], [0.2, 1, 0.35]);
  const section3Opacity = useTransform(scrollYProgress, [0.42, 0.55, 0.72], [0.2, 1, 0.35]);
  const section4Opacity = useTransform(scrollYProgress, [0.7, 0.86, 1], [0.2, 1, 1]);

  const ringBackground = useMotionTemplate`conic-gradient(rgba(99,102,241,0.95) ${profileRingDeg}deg, rgba(255,255,255,0.2) ${profileRingDeg}deg)`;

  const networkLines = useMemo(
    () => [
      ["15%", "24%", "50%", "14%"],
      ["50%", "14%", "82%", "26%"],
      ["15%", "24%", "26%", "58%"],
      ["50%", "50%", "26%", "58%"],
      ["50%", "50%", "74%", "62%"],
      ["82%", "26%", "74%", "62%"],
      ["26%", "58%", "74%", "62%"],
    ],
    [],
  );

  return (
    <div ref={rootRef} className="relative overflow-x-clip bg-zinc-950 text-white">
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-indigo-400 via-cyan-400 to-fuchsia-400"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ y: parallaxBack }}
      >
        <div className="absolute left-[8%] top-[14%] h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute right-[8%] top-[40%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ y: parallaxMid }}
      >
        <div className="absolute left-[24%] top-[64%] h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl" />
      </motion.div>

      <motion.div
        className="fixed left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2"
        style={{ x: profileX, y: profileY, scale: profileScale }}
      >
        <motion.button
          type="button"
          onClick={() => setProfileOpen((prev) => !prev)}
          whileHover={{ scale: 1.1 }}
          className="relative block rounded-full focus:outline-none"
          style={{
            boxShadow: `0 0 30px rgba(99, 102, 241, ${profileGlow.get()})`,
          }}
          aria-label="Toggle profile quick card"
        >
          <motion.div
            className="absolute inset-[-4px] rounded-full"
            style={{ background: ringBackground }}
          />
          <motion.img
            src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80"
            alt="Profile"
            className="relative h-[60px] w-[60px] rounded-full border border-white/40 object-cover"
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.button>

        <motion.div
          initial={false}
          animate={{
            opacity: profileOpen ? 1 : 0,
            y: profileOpen ? 10 : 0,
            pointerEvents: profileOpen ? "auto" : "none",
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute right-0 top-[78px] w-64 rounded-2xl border border-white/20 bg-zinc-900/95 p-4 shadow-2xl backdrop-blur"
        >
          <p className="text-sm font-semibold">Vishal Shakya</p>
          <p className="mt-1 text-xs text-zinc-300">
            Full Stack Developer / AI Enthusiast
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <a className="rounded-full border border-white/20 px-3 py-1 hover:bg-white/10" href="#">
              GitHub
            </a>
            <a className="rounded-full border border-white/20 px-3 py-1 hover:bg-white/10" href="#">
              LinkedIn
            </a>
            <a className="rounded-full border border-white/20 px-3 py-1 hover:bg-white/10" href="#">
              Portfolio
            </a>
          </div>
        </motion.div>
      </motion.div>

      <SectionShell>
        <motion.div style={{ opacity: heroTextOpacity, y: heroTextY }} className="max-w-4xl">
          <motion.p
            className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-zinc-300"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Cinematic Portfolio
          </motion.p>
          <motion.h1
            className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
              Vishal Shakya
            </span>
          </motion.h1>
          <motion.p
            style={{ opacity: taglineOpacity }}
            className="mt-5 max-w-2xl text-zinc-300 sm:text-lg"
          >
            Building thoughtful full-stack products with AI-assisted workflows,
            motion-first interfaces, and production-focused engineering.
          </motion.p>
        </motion.div>
      </SectionShell>

      <SectionShell className="border-y border-white/10">
        <motion.div style={{ opacity: section2Opacity }} className="w-full">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Education & Qualifications
          </h2>
          <div className="relative mt-10 h-[28rem] w-full overflow-hidden rounded-3xl border border-white/15 bg-white/5">
            <svg className="absolute inset-0 h-full w-full">
              {networkLines.map((line, index) => (
                <line
                  key={`line-${index}`}
                  x1={line[0]}
                  y1={line[1]}
                  x2={line[2]}
                  y2={line[3]}
                  stroke="rgba(255,255,255,0.24)"
                  strokeWidth="1"
                />
              ))}
            </svg>
            {qualifications.map((node, index) => (
              <FloatingNode key={node.title} node={node} index={index} />
            ))}
          </div>
        </motion.div>
      </SectionShell>

      <SectionShell>
        <motion.div style={{ opacity: section3Opacity }} className="w-full">
          <h2 className="text-3xl font-semibold sm:text-4xl">Dream & Vision</h2>
          <p className="mt-4 max-w-2xl text-zinc-300">
            My goal is to blend software craftsmanship and creative intelligence
            into products that feel human, fast, and future-ready.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {["AI", "Code", "Laptop"].map((label, index) => (
              <motion.div
                key={label}
                className="rounded-3xl border border-white/15 bg-white/5 p-6 text-center text-lg"
                animate={{ y: [0, -8, 0], rotate: [0, 1.6, 0] }}
                transition={{
                  duration: 4.8 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-4xl">{label === "AI" ? "🤖" : label === "Code" ? "💻" : "🧠"}</div>
                <p className="mt-4 text-zinc-200">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionShell>

      <SectionShell className="border-t border-white/10">
        <motion.div style={{ opacity: section4Opacity }} className="w-full">
          <h2 className="text-3xl font-semibold sm:text-4xl">Projects Showcase</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ rotateX: 4, rotateY: -5, y: -6 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="rounded-3xl border border-amber-100/20 bg-gradient-to-b from-zinc-800 to-zinc-900 p-5 shadow-xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <p className="text-sm text-amber-200/90">Vintage Card</p>
                <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm text-zinc-300">{project.description}</p>
                <p className="mt-4 text-xs text-zinc-400">{project.stack}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-full border border-white/10 bg-white/5 p-1">
            <motion.svg
              viewBox="0 0 1200 80"
              className="h-14 w-[200%]"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <path
                d="M0 42 Q60 12 120 42 T240 42 T360 42 T480 42 T600 42 T720 42 T840 42 T960 42 T1080 42 T1200 42"
                stroke="rgba(125,211,252,0.6)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M0 42 Q60 12 120 42 T240 42 T360 42 T480 42 T600 42 T720 42 T840 42 T960 42 T1080 42 T1200 42"
                stroke="rgba(125,211,252,0.6)"
                strokeWidth="2"
                fill="none"
                transform="translate(1200 0)"
              />
            </motion.svg>
          </div>
        </motion.div>
      </SectionShell>
    </div>
  );
}
