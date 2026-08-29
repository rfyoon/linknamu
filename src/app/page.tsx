type LinkItem = {
  label: string;
  href: string;
};

const PROFILE = {
  name: "홍길동",
  bio: "세계 최강 바이브코더",
};

const LINKS: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Blog", href: "https://example.com/" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-8 px-6 py-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <div
            className="flex h-40 w-40 items-center justify-center rounded-full bg-zinc-200 text-6xl dark:bg-zinc-800"
            aria-hidden
          >
            🙂
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              {PROFILE.name}
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {PROFILE.bio}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-5">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-full items-center justify-center rounded-xl border border-zinc-200 bg-white text-base font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
            >
              {link.label}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
