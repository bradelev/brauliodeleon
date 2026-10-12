# brauliodeleon.com

Personal website and blog of **Braulio De Leon**, Staff Frontend Engineer focused on payments, auth and checkout (React · TypeScript).

**Live:** [brauliodeleon.com](https://brauliodeleon.com) · **CV:** [PDF](https://brauliodeleon.com/braulio-de-leon-cv.pdf) · **LinkedIn:** [in/brauliodeleon](https://linkedin.com/in/brauliodeleon)

> Looking for my main side project? See [vaig-scheduling](https://github.com/bradelev/vaig-scheduling): scheduling and WhatsApp reminders for a local clinic, built with an agent-driven workflow (Next.js, Supabase, Claude Code).

## What this repo shows

A small site, kept deliberately simple. The parts worth looking at:

- **Fully static output.** Every route, including each blog post, is prerendered at build time (`generateStaticParams`). There is no client-side JavaScript beyond what Next.js ships by default, and no runtime data fetching.
- **Markdown content with drafts.** Posts live in [`content/blog`](content/blog) as Markdown with front matter. Setting `draft: true` removes a post from the index and from the build. Its URL returns 404 because of `dynamicParams = false` ([`app/blog/[slug]/page.tsx`](app/blog/%5Bslug%5D/page.tsx)).
- **Content as typed data.** Experience, skills and contact links are typed arrays rendered by small components, so updating the CV content doesn't mean editing markup ([`components/Experience.tsx`](components/Experience.tsx)).
- **Built with AI agents, reviewed by me.** The site was built with Claude Code. [`.claude/skills`](.claude/skills) holds the conventions the agent was asked to follow. Every change goes through a PR with a Vercel preview before merging to `master`.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 14 (App Router, React Server Components) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Content | Markdown + `gray-matter`, rendered with `react-markdown` and `remark-gfm` |
| Hosting | Vercel (preview deploy per PR, production on merge) |
| Quality | ESLint, Prettier, Dependabot |

## Running locally

Requires Node.js 20+.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (prerenders every page)
npm run lint
```

## Project structure

```
app/
  layout.tsx            # Root layout and site metadata
  page.tsx              # Home: Hero, About, Experience, Writing, Contact
  blog/page.tsx         # Blog index (published posts only)
  blog/[slug]/page.tsx  # Statically generated post pages
components/             # Server components for each section
content/blog/           # Markdown posts
public/                 # Static assets, including the CV PDF
docs/                   # Deployment, design system and responsive notes
```

## Writing a post

Add `content/blog/<slug>.md`:

```markdown
---
title: "Post title"
date: "2026-10-12"
excerpt: "One-sentence summary shown in the index."
author: "Braulio De Leon"
tags: ["react", "typescript"]
draft: true # remove to publish
---
```

## Contact

[hi@brauliodeleon.com](mailto:hi@brauliodeleon.com)
