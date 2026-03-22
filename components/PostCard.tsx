import Image from "next/image";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  cover_image: string;
  read_time_minutes: number;
  published_at: string;
  author_name: string;
  author_avatar: string;
  categories?: { name: string } | null;
}

export function PostCard({ post }: { post: Post }) {
  const date = new Date(post.published_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/post/${post.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/5 bg-[#1c1f2e] transition-all hover:-translate-y-1 hover:border-white/10 hover:shadow-xl dark:bg-[#1e2336]"
    >
      <div className="relative h-48 w-full overflow-hidden">
        {post.categories && (
          <div className="absolute left-4 top-4 z-10 rounded-full bg-[#1c1f2e]/90 px-3 py-1 text-xs font-semibold text-blue-400 backdrop-blur-md">
            {post.categories.name}
          </div>
        )}
        {/* Use regular img for dummy data fetched from DB unless you configure unoptimized: true or remotePatterns */}
        <img
          src={post.cover_image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
          <time dateTime={post.published_at}>{date}</time>
          <span className="h-1 w-1 rounded-full bg-zinc-600"></span>
          <span>{post.read_time_minutes} min read</span>
        </div>
        <h3 className="mt-3 text-xl font-bold leading-tight text-white group-hover:text-blue-400 transition-colors">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm text-zinc-400 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
          {post.excerpt}
        </p>
        <div className="mt-6 flex items-center gap-3">
          <img
            src={post.author_avatar}
            alt={post.author_name}
            className="h-8 w-8 rounded-full bg-zinc-800 object-cover"
          />
          <span className="text-sm font-medium text-zinc-300">
            {post.author_name}
          </span>
        </div>
      </div>
    </Link>
  );
}
