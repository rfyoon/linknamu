import Image from "next/image";
import type { CSSProperties } from "react";
import LinkCards from "./components/LinkCards";

type ShootingStarVars = CSSProperties & {
  "--star-left"?: string;
  "--star-angle"?: string;
  "--star-dx"?: string;
  "--star-dy"?: string;
  "--star-delay"?: string;
};

const SHOOTING_STARS: ShootingStarVars[] = [
  {
    "--star-left": "10%",
    "--star-angle": "-45deg",
    "--star-dx": "380px",
    "--star-dy": "380px",
    "--star-delay": "0s",
  },
  {
    "--star-left": "85%",
    "--star-angle": "45deg",
    "--star-dx": "-380px",
    "--star-dy": "380px",
    "--star-delay": "0.5s",
  },
];

const PROFILE = {
  name: "J.YOON",
  bio: "우주꿈돌이 | 요즘에는 AI 개발에 관심이 많아요",
  avatarUrl: "/profile.png",
};

export default function Home() {
  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-[#FFEFDD] to-[#FFE3CC] dark:from-[#221c19] dark:via-[#241d19] dark:to-[#2a2019]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="stars-field stars-field--near" />
        <div className="stars-field stars-field--mid" />
        <div className="stars-field stars-field--far" />
        {SHOOTING_STARS.map((vars, i) => (
          <div key={i} className="shooting-star" style={vars} />
        ))}
      </div>
      <main className="relative z-10 flex w-full max-w-sm flex-col items-center gap-10 px-8 py-20">
        <div className="flex flex-col items-center gap-5 text-center">
          <Image
            src={PROFILE.avatarUrl}
            alt={PROFILE.name}
            width={150}
            height={150}
            className="h-36 w-36 rounded-full object-cover ring-4 ring-white/70 shadow-[0_12px_30px_-8px_rgba(120,70,30,0.35)] dark:ring-white/10"
          />
          <div className="flex flex-col gap-1.5">
            <h1 className="text-xl font-bold tracking-tight text-stone-800 dark:text-stone-100">
              {PROFILE.name}
            </h1>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              {PROFILE.bio}
            </p>
          </div>
        </div>

        <LinkCards />
      </main>
    </div>
  );
}
