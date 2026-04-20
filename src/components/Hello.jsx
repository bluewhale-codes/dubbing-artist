import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AudioLines, Mic2, Volume2, VolumeX } from "lucide-react";

const testimonials = [
  {
    name: "Ava Thompson",
    role: "Founder, OrbitalHQ",
    quote:
      "This platform helped us ship faster and cut our onboarding time in half. The UI is clean, intuitive, and our team adopted it immediately.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Ethan Brooks",
    role: "Product Manager, ScaleForge",
    quote:
      "We replaced three legacy tools with one workflow. Performance is excellent and the support team has been phenomenal from day one.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Mia Chen",
    role: "Head of Ops, NovaStack",
    quote:
      "Everything feels thoughtfully designed. We now have better visibility across teams and fewer handoff errors every sprint.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Noah Patel",
    role: "CTO, LaunchPilot",
    quote:
      "Implementation took less than a day. Security controls, analytics, and automation are exactly what a modern SaaS team needs.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sophia Rivera",
    role: "Growth Lead, BrightMetric",
    quote:
      "The component quality and polish made a strong first impression with our users. Engagement has increased significantly since launch.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Liam Walker",
    role: "Engineering Manager, CoreCloud",
    quote:
      "This solved both design consistency and speed of delivery. It feels premium out of the box and scales beautifully with our product.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
];

const columns = [
  testimonials.slice(0, 2),
  testimonials.slice(2, 4),
  testimonials.slice(4, 6),
];

const columnDurations = [20, 24, 22];
const ambientAudioUrl =
  "https://assets.mixkit.co/active_storage/sfx/212/212-preview.mp3";

const blobConfigs = [
  {
    className:
      "left-[6%] top-[12%] h-48 w-48 bg-violet-500/15 md:h-64 md:w-64",
    x: [0, 32, -20, 0],
    y: [0, -28, 20, 0],
    duration: 34,
  },
  {
    className:
      "right-[8%] top-[18%] h-44 w-44 bg-blue-500/15 md:h-56 md:w-56",
    x: [0, -24, 18, 0],
    y: [0, 22, -16, 0],
    duration: 30,
  },
  {
    className:
      "left-[22%] bottom-[6%] h-40 w-40 bg-pink-500/15 md:h-52 md:w-52",
    x: [0, 20, -12, 0],
    y: [0, -22, 14, 0],
    duration: 28,
  },
];

const waveConfigs = [
  {
    className: "left-[14%] top-[42%] w-28 md:w-36",
    rotate: [-4, 6, -4],
    duration: 18,
  },
  {
    className: "right-[16%] bottom-[24%] w-24 md:w-32",
    rotate: [5, -5, 5],
    duration: 20,
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <article className="rounded-2xl border border-border/60 bg-card/90 p-6 shadow-sm backdrop-blur">
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          loading="lazy"
          className="h-12 w-12 rounded-full object-cover ring-1 ring-border/70"
        />
        <div>
          <h3 className="text-sm font-semibold text-card-foreground">
            {testimonial.name}
          </h3>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-card-foreground/90">
        "{testimonial.quote}"
      </p>
    </article>
  );
}

function InfiniteColumn({ items, duration, reverse = false }) {
  const loopItems = [...items, ...items];

  return (
    <div className="relative h-[460px] overflow-hidden">
      <motion.div
        className="flex flex-col gap-6 will-change-transform"
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {loopItems.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

function BackgroundAudioLayer() {
  const audioRef = useRef(null);
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.12;
    audioRef.current.loop = true;
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (audioEnabled) {
      audioRef.current.play().catch(() => {});
      return;
    }

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }, [audioEnabled]);

  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {blobConfigs.map((blob, index) => (
          <motion.div
            key={`blob-${index}`}
            className={`absolute rounded-full blur-3xl ${blob.className}`}
            animate={{ x: blob.x, y: blob.y }}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}

        {waveConfigs.map((wave, index) => (
          <motion.div
            key={`wave-${index}`}
            className={`absolute opacity-[0.14] ${wave.className}`}
            animate={{ y: [0, -10, 0], rotate: wave.rotate }}
            transition={{
              duration: wave.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <AudioLines className="h-10 w-full text-violet-400 md:h-12" />
          </motion.div>
        ))}

        <motion.div
          className="absolute right-[10%] top-[56%] opacity-[0.13] md:right-[14%]"
          animate={{ y: [0, -14, 0], x: [0, 10, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mic2 className="h-10 w-10 text-pink-400 md:h-12 md:w-12" />
        </motion.div>
      </div>

      <div className="absolute bottom-4 right-4 z-20">
        <button
          type="button"
          onClick={() => setAudioEnabled((prev) => !prev)}
          className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-2 text-xs text-muted-foreground shadow-sm backdrop-blur transition hover:text-foreground"
          aria-label={audioEnabled ? "Turn off ambient audio" : "Turn on ambient audio"}
        >
          {audioEnabled ? (
            <Volume2 className="h-3.5 w-3.5" />
          ) : (
            <VolumeX className="h-3.5 w-3.5" />
          )}
          {audioEnabled ? "Ambient on" : "Ambient off"}
        </button>
      </div>

      <audio ref={audioRef} src={ambientAudioUrl} preload="none" />
    </>
  );
}

export default function Hello() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.1),transparent_35%)]" />
      <BackgroundAudioLayer />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="inline-flex rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Loved by high-performing SaaS teams
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Real stories from teams improving collaboration, speed, and product
            quality with our platform.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {columns.map((columnItems, index) => (
            <div key={index} className={index === 2 ? "hidden lg:block" : ""}>
              <InfiniteColumn
                items={columnItems}
                duration={columnDurations[index]}
                reverse={index === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
