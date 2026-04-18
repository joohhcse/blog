"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { PostCard } from "@/components/PostCard";
import { Pagination } from "@/components/Pagination";

function SearchContent() {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const supabase = createClient();

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

      if (queryParam) {
        // Simple search in title or content
        query = query.or(`title.ilike.%${queryParam}%,content.ilike.%${queryParam}%`);
      } else {
        // If no query parameter, you could either clear posts or still fetch
        // Let's clear if you only want to show results for actual searches
        // Or fetch all. Using fetch all for now to match behavior when empty.
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
  }, [supabase, queryParam, page]);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-16 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mb-12 max-w-[800px]">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Search Results
        </h1>
        <p className="mt-6 text-xl leading-8 text-zinc-400">
          Showing results for <span className="text-white font-semibold">"{queryParam}"</span>
        </p>
      </div>

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
          <p>No posts found matching your search.</p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
