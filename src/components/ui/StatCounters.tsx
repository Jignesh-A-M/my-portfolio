"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const stats: Stat[] = [
  { value: 3,  suffix: "+", label: "Years",        sublabel: "of Experience"    },
  { value: 7,  suffix: "+", label: "Projects",     sublabel: "Delivered"        },
  { value: 3,  suffix: "",  label: "Specializations", sublabel: "Real-Time · IoT · Cloud" },
];

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
      else setCount(target);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [started, target, duration]);

  return count;
}

function StatItem({ stat, started }: { stat: Stat; started: boolean }) {
  const count = useCountUp(stat.value, 1400, started);

  return (
    <div className="flex flex-col items-center text-center px-4 py-6 border border-border/60 bg-background/60">
      <div className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-none mb-1">
        {count}<span className="text-accent text-3xl md:text-4xl">{stat.suffix}</span>
      </div>
      <div className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-foreground mt-3">{stat.label}</div>
      <div className="font-sans text-xs text-muted-foreground mt-1 tracking-wide">{stat.sublabel}</div>
    </div>
  );
}

export function StatCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) { setStarted(true); return; }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-3 gap-4 mt-12 mb-12">
      {stats.map((stat, i) => (
        <StatItem key={i} stat={stat} started={started} />
      ))}
    </div>
  );
}
