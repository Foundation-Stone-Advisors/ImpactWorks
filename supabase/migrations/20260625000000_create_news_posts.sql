create table if not exists news_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  author text not null,
  content text not null,
  excerpt text,
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table news_posts enable row level security;

create policy "Public read published posts"
  on news_posts for select
  to anon
  using (published = true);
