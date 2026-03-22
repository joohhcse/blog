"use client";

export interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Props {
  categories: Category[];
  activeCategoryId: string | null;
  onSelectCategory: (id: string | null) => void;
}

export function CategoryFilter({ categories, activeCategoryId, onSelectCategory }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3 pb-8">
      <button
        onClick={() => onSelectCategory(null)}
        className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
          activeCategoryId === null
            ? "bg-blue-600 text-white"
            : "bg-[#252836] text-zinc-300 hover:bg-white/10 hover:text-white"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            activeCategoryId === cat.id
              ? "bg-blue-600 text-white"
              : "bg-[#252836] text-zinc-300 hover:bg-white/10 hover:text-white"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
