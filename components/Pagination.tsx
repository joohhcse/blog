import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
  return (
    <div className="flex items-center justify-center gap-2 pt-12 pb-8">
      <button className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/5 disabled:opacity-50">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 font-medium text-white transition-colors hover:bg-blue-700">
        1
      </button>
      <button className="flex h-10 w-10 items-center justify-center rounded-lg font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white">
        2
      </button>
      <button className="flex h-10 w-10 items-center justify-center rounded-lg font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white">
        3
      </button>
      <span className="flex h-10 w-10 items-center justify-center text-zinc-500">
        ...
      </span>
      <button className="flex h-10 w-10 items-center justify-center rounded-lg font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white">
        8
      </button>
      <button className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/5 hover:text-white">
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
