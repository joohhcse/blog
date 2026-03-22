"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { CategoryFilter, Category } from "@/components/CategoryFilter";
import { PostCard } from "@/components/PostCard";
import { Pagination } from "@/components/Pagination";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const supabase = createClient();

  useEffect(() => {
    async function getCategories() {
      const { data } = await supabase.from("categories").select("*").order("name");
      if (data) setCategories(data);
    }
    getCategories();
  }, [supabase]);

  useEffect(() => {
    async function getPosts() {
      setLoading(true);
      let query = supabase
        .from("posts")
        .select(`
          *,
          categories (
            name
          )
        `)
        .order("published_at", { ascending: false });

      if (activeCategoryId) {
        query = query.eq("category_id", activeCategoryId);
      }

      // Pagination logic (example: 6 items per page)
      const itemsPerPage = 6;
      const from = (page - 1) * itemsPerPage;
      const to = from + itemsPerPage - 1;
      query = query.range(from, to);

      const { data } = await query;
      if (data) setPosts(data);
      setLoading(false);
    }
    getPosts();
  }, [supabase, activeCategoryId, page]);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 max-w-[800px]">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Latest Writings
        </h1>
        <p className="mt-6 text-xl leading-8 text-zinc-400">
          Thoughts, tutorials, and deep dives into software development. Focused on
          modern web tech, systems programming, and cleaner code.
        </p>
      </div>

      {/* Category Filter */}
      <CategoryFilter
        categories={categories}
        activeCategoryId={activeCategoryId}
        onSelectCategory={(id) => {
          setActiveCategoryId(id);
          setPage(1); // Reset page on category change
        }}
      />

      {/* Post Grid */}
      {loading ? (
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
        </div>
      ) : posts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <Pagination />
        </>
      ) : (
        <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-zinc-500">
          <p>No posts found in this category.</p>
        </div>
      )}
    </div>
  );
}
