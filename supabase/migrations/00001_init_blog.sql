-- Create categories table
CREATE TABLE public.categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE
);

-- Create posts table
CREATE TABLE public.posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    cover_image TEXT NOT NULL,
    category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    read_time_minutes INTEGER NOT NULL DEFAULT 0,
    published_at DATE NOT NULL DEFAULT CURRENT_DATE,
    author_name TEXT NOT NULL,
    author_avatar TEXT NOT NULL,
    content TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Setup Row Level Security (RLS)
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access to categories"
    ON public.categories FOR SELECT
    USING (true);

CREATE POLICY "Allow public read access to posts"
    ON public.posts FOR SELECT
    USING (true);

-- Allow authenticated users to insert/update/delete (optional for now, but good practice)
CREATE POLICY "Allow authenticated insert to categories"
    ON public.categories FOR INSERT
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update to categories"
    ON public.categories FOR UPDATE
    USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated delete to categories"
    ON public.categories FOR DELETE
    USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated insert to posts"
    ON public.posts FOR INSERT
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update to posts"
    ON public.posts FOR UPDATE
    USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated delete to posts"
    ON public.posts FOR DELETE
    USING (auth.role() = 'authenticated');
