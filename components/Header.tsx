import Link from "next/link";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-white/5 bg-[#12141d]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-md bg-blue-600 p-1">
            <svg
              className="h-4 w-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">{`{ DevBlog }`}</span>
        </Link>

        {/* Search Bar */}
        <div className="hidden max-w-md flex-1 px-8 lg:block relative">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              type="search"
              placeholder="Search posts, tags, authors..."
              className="w-full rounded-md border border-white/10 bg-[#1c1f2e] py-2 pl-9 pr-4 text-sm text-zinc-200 placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Auth Navigation */}
        <nav className="flex items-center gap-6">
          <Link href="/login" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Log in
          </Link>
        </nav>
      </div>
    </header>
  );
}
