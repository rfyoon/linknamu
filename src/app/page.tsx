import Image from "next/image";

type LinkItem = {
  label: string;
  href: string;
};

const PROFILE = {
  name: "J.YOON",
  bio: "우주꿈돌이 | 요즘에는 AI 개발에 관심이 많아요",
  avatarUrl: "/profile.png",
};

const LINKS: LinkItem[] = [
  { label: "🪶 GitHub", href: "https://github.com/" },
  { label: "🏠 블로그", href: "https://linkedin.com/" },
  { label: "📤 이메일", href: "https://example.com/" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-[#FFF8F0] via-[#FFEFDD] to-[#FFE3CC] dark:from-[#221c19] dark:via-[#241d19] dark:to-[#2a2019]">
      <main className="flex w-full max-w-sm flex-col items-center gap-10 px-8 py-20">
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

        <div className="flex w-full flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-full items-center justify-center rounded-2xl border border-white/60 bg-white/40 text-base font-medium text-stone-800 shadow-[0_4px_20px_-4px_rgba(120,70,30,0.12)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/55 dark:border-white/10 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
