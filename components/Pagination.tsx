import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // Generate array of page numbers based on totalPages
  const pages = Array.from({ length: Math.max(1, totalPages) }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 pt-12 pb-8">
      <button 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/5 disabled:opacity-50"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg font-medium transition-colors ${
            currentPage === p
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "text-zinc-400 hover:bg-white/5 hover:text-white"
          }`}
        >
          {p}
        </button>
      ))}

      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/5 hover:text-white disabled:opacity-50"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
