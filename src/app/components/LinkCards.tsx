"use client";

import { useEffect, useState } from "react";
import { LINKS } from "@/lib/links";

export default function LinkCards() {
  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(LINKS.map((link) => [link.id, 0]))
  );

  useEffect(() => {
    let cancelled = false;

    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: Record<string, number>) => {
        if (!cancelled) {
          setCounts((prev) => ({ ...prev, ...data }));
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  const handleClick = (id: string) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    fetch(`/api/clicks/${id}`, { method: "POST" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { count: number } | null) => {
        if (data) {
          setCounts((prev) => ({ ...prev, [id]: data.count }));
        }
      })
      .catch(() => {});
  };

  return (
    <div className="flex w-full flex-col gap-4">
      {LINKS.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClick(link.id)}
          className="flex h-14 w-full items-center gap-3 rounded-2xl border border-white/60 bg-white/40 px-5 text-base font-medium text-stone-800 shadow-[0_4px_20px_-4px_rgba(120,70,30,0.12)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/55 dark:border-white/10 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
        >
          <span className="w-10 shrink-0" aria-hidden />
          <span className="flex-1 text-center">{link.label}</span>
          <span className="w-10 shrink-0 text-right text-xs font-normal text-stone-500 dark:text-stone-400">
            {counts[link.id]}회
          </span>
        </a>
      ))}
    </div>
  );
}
