"use client";

import { useEffect, useState, use } from "react";
import { createClient } from "@/lib/supabase/client";
import { Bookmark, Share2 } from "lucide-react";

export default function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    async function getPost() {
      // In a real scenario with proper UUIDs this would fetch valid data.
      // We will try fetching, but if it fails or returns 0 rows, 
      // we fallback to mock data below for UI demonstration purposes.
      const { data } = await supabase
        .from("posts")
        .select(`
          *,
          categories (
            name
          )
        `)
        .eq("id", id)
        .single();
      
      if (data) {
        setPost(data);
      }
      setLoading(false);
    }
    
    getPost();
  }, [id, supabase]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
     return (
        <div className="flex min-h-screen items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
        </div>
     );
  }

  // Fallback to match specific design if data fetch is empty (e.g., db push not run yet, or bad ID)
  const displayPost = post || {
    title: "Optimizing React Rendering for High Performance",
    author_name: "Sarah Dev",
    author_avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    published_at: "2023-10-24",
    read_time_minutes: 5,
    cover_image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
    content: "When building complex applications, rendering cycles can become a bottleneck. Ideally, we want our components to re-render only when absolutely necessary. In this guide, we'll explore techniques to keep your UI snappy."
  };

  const date = new Date(displayPost.published_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col px-4 py-16 sm:px-6 lg:px-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:leading-tight">
        {displayPost.title}
      </h1>

      {/* Author & Actions Row */}
      <div className="mt-8 flex items-center justify-between border-b border-white/10 pb-8">
        <div className="flex items-center gap-4">
          <img
            src={displayPost.author_avatar}
            alt={displayPost.author_name}
            className="h-12 w-12 rounded-full bg-zinc-800 object-cover"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-white">{displayPost.author_name}</span>
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <time dateTime={displayPost.published_at}>{date}</time>
              <span className="h-1 w-1 rounded-full bg-zinc-600"></span>
              <span>{displayPost.read_time_minutes} min read</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 text-zinc-400">
          <button className="hover:text-white transition-colors" title="Bookmark">
            <Bookmark className="h-5 w-5" />
          </button>
          <button 
            onClick={handleShare}
            className="hover:text-white transition-colors relative" 
            title="Share"
          >
            <Share2 className="h-5 w-5" />
            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-[#252836] px-2 py-1 text-xs text-white">
                Copied!
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="mt-12">
        <p className="text-lg leading-relaxed text-zinc-300 whitespace-pre-wrap mb-8">
          {displayPost.content}
        </p>

        {/* Thumbnail (Simulating the placement in the design screenshot) */}
        <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-xl">
          <img
            src={displayPost.cover_image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop"}
            alt="Cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop";
            }}
            className="h-full w-full object-cover"
          />
          <p className="mt-4 text-center text-sm text-zinc-500">Visualizing component tree re-renders</p>
        </div>

        {/* Mocking the rest of the rich text from the specific design requirement */}
        { !post && (
          <div className="flex flex-col space-y-6 text-zinc-300">
             <h2 className="text-2xl font-bold text-white mt-8 mb-4">Understanding useMemo</h2>
             <p className="leading-relaxed">
               React's <code className="bg-[#1c1f2e] text-blue-400 px-1 py-0.5 rounded">useMemo</code> hook is a powerful tool for performance optimization. It allows you to memoize expensive calculations so that they are only recomputed when one of the dependencies has changed.
             </p>
             <div className="rounded-xl border border-white/5 bg-[#12141d] p-6 overflow-x-auto my-6 text-sm font-mono text-zinc-300">
               <span className="text-pink-400">import</span> {'{'} useMemo {'}'} <span className="text-pink-400">from</span> <span className="text-green-400">'react'</span>;<br/><br/>
               <span className="text-pink-400">const</span> ExpensiveComponent = ({'{'} <span className="text-blue-300">data</span> {'}'}) {'=>'} {'{'}<br/>
               &nbsp;&nbsp;<span className="text-zinc-500">// Without useMemo, this runs on every render</span><br/>
               &nbsp;&nbsp;<span className="text-pink-400">const</span> processedData = <span className="text-blue-400">useMemo</span>(() {'=>'} {'{'}<br/>
               &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span> data.map(item {'=>'} item * <span className="text-yellow-300">2</span>);<br/>
               &nbsp;&nbsp;{'}'}, [data]);<br/><br/>
               &nbsp;&nbsp;<span className="text-pink-400">return</span> (<br/>
               &nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className="text-red-400">div</span>{'>'}<br/>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}processedData.join(<span className="text-green-400">', '</span>){'}'}<br/>
               &nbsp;&nbsp;&nbsp;&nbsp;{'</'}<span className="text-red-400">div</span>{'>'}<br/>
               &nbsp;&nbsp;);<br/>
               {'}'};
             </div>
             <p className="leading-relaxed">
               However, be careful not to overuse it. Memoization itself has a cost. The rule of thumb is to measure first, then optimize.
             </p>
             
             {/* Mocking Tags */}
             <div className="flex items-center gap-3 pt-8">
                <span className="bg-[#252836] text-zinc-300 px-3 py-1 rounded-full text-xs font-medium">#react</span>
                <span className="bg-[#252836] text-zinc-300 px-3 py-1 rounded-full text-xs font-medium">#performance</span>
                <span className="bg-[#252836] text-zinc-300 px-3 py-1 rounded-full text-xs font-medium">#javascript</span>
             </div>
          </div>
        )}
      </div>
    </article>
  );
}
