# brauliodeleon.com

Personal website and blog built with Next.js 14.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/       # React components
├── lib/              # Utility functions
└── public/           # Static assets
```

## Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

This project is configured for deployment on Vercel.

See [docs/deployment.md](docs/deployment.md) for detailed deployment instructions.

**Quick Deploy:**
1. Push to `main` branch for production deployment
2. Create PR for preview deployments

## Documentation

- [Brand Strategy](docs/brand-strategy.md) - Brand messaging and positioning
- [Deployment Guide](docs/deployment.md) - Vercel deployment instructions
