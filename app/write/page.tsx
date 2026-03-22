"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { ArrowLeft, Bell, Bold, Italic, Type, Code, Quote, Link as LinkIcon, Image as ImageIcon, Eye, Send } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("## Introduction\n\nWelcome to the new developer blog platform. This editor is designed to be minimal and distraction-free.\n\nHere is a quick code example:\n");
  const [isPublishing, setIsPublishing] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handlePublish = async () => {
    if (!title || !content) {
      alert("Please enter a title and content.");
      return;
    }

    setIsPublishing(true);
    
    // Fetch a default category for the mock insertion
    const { data: category } = await supabase.from("categories").select("id").limit(1).single();

    const newPost = {
      title,
      content,
      excerpt: content.substring(0, 100) + "...",
      read_time_minutes: Math.max(1, Math.floor(content.split(" ").length / 200)),
      cover_image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop", // placeholder
      author_name: "Admin User", 
      author_avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
      category_id: category?.id || null,
      published_at: new Date().toISOString()
    };

    const { data, error } = await supabase.from("posts").insert([newPost]).select().single();

    if (error) {
      console.error("Error publishing post:", error);
      alert("Failed to publish post.");
      setIsPublishing(false);
    } else {
      router.push(`/post/${data.id}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#12141d] text-white overflow-hidden">
      {/* Top Bar */}
      <header className="flex h-16 items-center justify-between border-b border-white/5 px-6">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
        <div className="flex items-center gap-6">
          <span className="text-sm font-medium text-zinc-500">Saved to drafts</span>
          <div className="flex items-center gap-3">
            <button className="rounded-md bg-[#1c1f2e] border border-white/5 px-4 py-2 text-sm font-medium text-zinc-300 hover:bg-white/10 transition-colors">
              Save Draft
            </button>
            <button 
              onClick={handlePublish}
              disabled={isPublishing}
              className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {isPublishing ? "Publishing..." : "Publish"}
              <Send className="h-4 w-4" />
            </button>
          </div>
          <div className="h-6 w-px bg-white/10" />
          <button className="text-zinc-400 hover:text-white transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <button className="h-8 w-8 overflow-hidden rounded-full bg-zinc-800">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="User" className="h-full w-full object-cover" />
          </button>
        </div>
      </header>

      {/* Editor Main Area */}
      <main className="flex flex-1 flex-col mx-auto w-full max-w-[900px] px-8 py-12">
        <input 
          type="text"
          placeholder="Enter post title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-transparent text-5xl font-extrabold tracking-tight font-sans text-white placeholder:text-zinc-700 focus:outline-none"
        />

        {/* Toolbar */}
        <div className="mt-8 flex items-center gap-6 border-b border-white/5 pb-6">
          <button className="text-zinc-400 hover:text-white transition-colors"><Bold className="h-5 w-5" /></button>
          <button className="text-zinc-400 hover:text-white transition-colors"><Italic className="h-5 w-5" /></button>
          <button className="text-zinc-400 hover:text-white transition-colors"><Type className="h-5 w-5" /></button>
          <div className="h-5 w-px bg-white/10" />
          <button className="text-zinc-400 hover:text-white transition-colors"><Code className="h-5 w-5" /></button>
          <button className="text-zinc-400 hover:text-white transition-colors"><Quote className="h-5 w-5" /></button>
          <button className="text-zinc-400 hover:text-white transition-colors"><LinkIcon className="h-5 w-5" /></button>
          <button className="text-zinc-400 hover:text-white transition-colors"><ImageIcon className="h-5 w-5" /></button>
          <div className="h-5 w-px bg-white/10" />
          <button className="text-zinc-400 hover:text-white transition-colors"><Eye className="h-5 w-5" /></button>
        </div>

        {/* Text Area */}
        <textarea
          placeholder="Start writing..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-8 flex-1 w-full resize-none bg-transparent font-mono text-[15px] pt-4 text-zinc-300 placeholder:text-zinc-700 focus:outline-none leading-[1.8]"
        />
      </main>
    </div>
  );
}
