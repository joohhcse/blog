import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#12141d] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <span className="font-mono text-xs">{`<>`}</span>
          <p>© 2024 DevBlog Platform. Open source content.</p>
        </div>
        <nav className="flex gap-6 text-sm text-zinc-400">
          <Link href="#" className="hover:text-white transition-colors">
            RSS
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Twitter
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            GitHub
          </Link>
        </nav>
      </div>
    </footer>
  );
}
