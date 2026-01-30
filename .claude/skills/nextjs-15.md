---
name: nextjs-15
description: Next.js 15 App Router patterns for brauliodeleon.com
license: Apache-2.0
metadata:
  author: brauliodeleon
  version: "1.0"
  keywords: nextjs, next.js, app router, server components, server actions
---

# Next.js 15 Patterns

## File Conventions

```
app/
├── layout.tsx          # Root layout
├── page.tsx            # Home page
├── blog/
│   ├── page.tsx        # Blog list
│   └── [slug]/
│       └── page.tsx    # Blog post
└── api/
    └── route.ts        # API routes
```

## Server Components (Default)

```tsx
// app/blog/page.tsx
export default async function BlogPage() {
  const posts = await getPosts(); // Direct async data fetching

  return (
    <div>
      {posts.map((post) => (
        <article key={post.id}>{post.title}</article>
      ))}
    </div>
  );
}
```

## Client Components

Only use `"use client"` when you need:
- Event handlers (onClick, onChange, etc.)
- React hooks (useState, useEffect, etc.)
- Browser APIs (localStorage, window, etc.)
- Third-party libraries that use client features

```tsx
"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## Data Fetching

```tsx
// Parallel data fetching
async function getData() {
  const [posts, categories] = await Promise.all([
    fetch('/api/posts').then(r => r.json()),
    fetch('/api/categories').then(r => r.json()),
  ]);

  return { posts, categories };
}
```

## Metadata

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
  },
};
```

## Dynamic Metadata

```tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}
```

## Loading States

```tsx
// app/blog/loading.tsx
export default function Loading() {
  return <div>Loading posts...</div>;
}
```

## Error Handling

```tsx
// app/blog/error.tsx
'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

## Route Handlers (API Routes)

```tsx
// app/api/posts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = await getPosts();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();
  // Process POST
  return NextResponse.json({ success: true });
}
```

## Best Practices

1. **Server Components by Default**: Start with server components, only use client when needed
2. **Async Components**: Use async/await directly in server components
3. **Streaming**: Use Suspense boundaries for progressive rendering
4. **Image Optimization**: Always use next/image
5. **Font Optimization**: Use next/font for Google Fonts
6. **Metadata**: Define metadata for SEO in every page
