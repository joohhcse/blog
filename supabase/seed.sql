-- Insert Categories
INSERT INTO public.categories (id, name, slug) VALUES
  ('11111111-1111-1111-1111-111111111111', 'Rust', 'rust'),
  ('22222222-2222-2222-2222-222222222222', 'React', 'react'),
  ('33333333-3333-3333-3333-333333333333', 'DevOps', 'devops'),
  ('44444444-4444-4444-4444-444444444444', 'System Design', 'system-design'),
  ('55555555-5555-5555-5555-555555555555', 'Tutorials', 'tutorials'),
  ('66666666-6666-6666-6666-666666666666', 'Career', 'career'),
  ('77777777-7777-7777-7777-777777777777', 'CSS', 'css'),
  ('88888888-8888-8888-8888-888888888888', 'Web', 'web'),
  ('99999999-9999-9999-9999-999999999999', 'A11y', 'a11y')
ON CONFLICT (slug) DO NOTHING;

-- Insert Posts
INSERT INTO public.posts (title, excerpt, cover_image, category_id, read_time_minutes, published_at, author_name, author_avatar) VALUES
  (
    'Understanding Async/Await in Rust',
    'A deep dive into Rust''s async primitives, how the reactor/executor model works, and how to write non-blocking code...',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop',
    '11111111-1111-1111-1111-111111111111',
    5,
    '2023-10-24',
    'Alex Chen',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
  ),
  (
    'CSS Grid vs Flexbox: The Guide',
    'Flexbox is great for 1D layouts, but Grid is superior for 2D. We explore real-world examples of when to switch strategies for...',
    'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2670&auto=format&fit=crop',
    '77777777-7777-7777-7777-777777777777',
    8,
    '2023-10-22',
    'Sarah Jones',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  ),
  (
    'Deploying Docker containers to AWS ECS',
    'A complete step-by-step guide to container orchestration on AWS. From ECR setup to Fargate task definitions.',
    'https://images.unsplash.com/photo-1542484307-e50e9bfcf674?q=80&w=2574&auto=format&fit=crop',
    '33333333-3333-3333-3333-333333333333',
    12,
    '2023-10-18',
    'Mike Ross',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike'
  ),
  (
    'State Management Patterns in 2024',
    'Comparing Redux Toolkit, Context API, and Zustand. Which one should you choose for your next enterprise...',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop',
    '22222222-2222-2222-2222-222222222222',
    6,
    '2023-10-15',
    'Emma Watson',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
  ),
  (
    'The Future of WebAssembly',
    'Why Wasm matters for the backend and how it enables high-performance computing in the browser environment.',
    'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2574&auto=format&fit=crop',
    '88888888-8888-8888-8888-888888888888',
    7,
    '2023-10-12',
    'David Kim',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=David'
  ),
  (
    'Building Accessible Forms',
    'Ensuring your inputs are usable by everyone. A checklist for ARIA labels, focus states, and keyboard navigation.',
    'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2688&auto=format&fit=crop',
    '99999999-9999-9999-9999-999999999999',
    4,
    '2023-10-10',
    'Lisa Wong',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa'
  );
