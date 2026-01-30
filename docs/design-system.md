# Design System

This document outlines the design system used in brauliodeleon.com, including typography, colors, spacing, and component guidelines.

## Typography

### Font Family

**Primary Font:** Inter (Google Fonts)
- Clean, modern sans-serif typeface
- Excellent readability across all sizes
- Wide range of weights available
- Optimized for digital interfaces

```tsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
```

### Type Scale

| Size | CSS Class | Size (rem) | Line Height | Usage |
|------|-----------|------------|-------------|-------|
| xs | `text-xs` | 0.75rem | 1rem | Small labels, captions |
| sm | `text-sm` | 0.875rem | 1.25rem | Body text (small) |
| base | `text-base` | 1rem | 1.5rem | Body text (default) |
| lg | `text-lg` | 1.125rem | 1.75rem | Large body text |
| xl | `text-xl` | 1.25rem | 1.75rem | Small headings |
| 2xl | `text-2xl` | 1.5rem | 2rem | Section headings |
| 3xl | `text-3xl` | 1.875rem | 2.25rem | Page headings |
| 4xl | `text-4xl` | 2.25rem | 2.5rem | Large headings |
| 5xl | `text-5xl` | 3rem | 1 | Hero headings |
| 6xl | `text-6xl` | 3.75rem | 1 | Display headings |

### Font Weights

- `font-normal` (400): Body text
- `font-medium` (500): Emphasized text
- `font-semibold` (600): Subheadings
- `font-bold` (700): Headings

## Colors

### Brand Colors

```tsx
brand: {
  primary: "#2563eb",   // blue-600 - Primary actions, links
  secondary: "#7c3aed",  // violet-600 - Secondary actions, accents
  accent: "#0891b2",     // cyan-600 - Highlights, special elements
}
```

### Background Colors

```tsx
background: {
  DEFAULT: "#ffffff",    // Main background
  secondary: "#f9fafb",  // gray-50 - Secondary surfaces
  tertiary: "#f3f4f6",   // gray-100 - Tertiary surfaces, hover states
}
```

### Foreground Colors

```tsx
foreground: {
  DEFAULT: "#0f172a",    // slate-900 - Primary text
  secondary: "#475569",  // slate-600 - Secondary text
  tertiary: "#94a3b8",   // slate-400 - Muted text, placeholders
}
```

### Border Colors

```tsx
border: {
  DEFAULT: "#e2e8f0",    // slate-200 - Default borders
  secondary: "#cbd5e1",  // slate-300 - Emphasized borders
}
```

### Usage Guidelines

**Primary Brand Color (`brand.primary`):**
- Primary call-to-action buttons
- Important links
- Active navigation items
- Focus states

**Secondary Brand Color (`brand.secondary`):**
- Secondary actions
- Tags and badges
- Decorative elements

**Accent Color (`brand.accent`):**
- Special highlights
- Success states
- Interactive elements

## Spacing

Based on Tailwind's default 4px scale with custom additions:

- Base unit: `0.25rem` (4px)
- Custom: `spacing.18` (4.5rem / 72px)
- Custom: `spacing.112` (28rem / 448px)
- Custom: `spacing.128` (32rem / 512px)

### Common Spacing Patterns

- **Component padding:** `p-4` to `p-8`
- **Section spacing:** `py-12` to `py-24`
- **Element gaps:** `gap-4` to `gap-8`
- **Container max-width:** `max-w-5xl` (64rem / 1024px)

## Layout

### Container

```tsx
<div className="mx-auto max-w-5xl px-6">
  {/* Content */}
</div>
```

### Responsive Breakpoints

Using Tailwind's default breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Components

### Buttons

**Primary Button:**
```tsx
<button className="bg-brand-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
  Click me
</button>
```

**Secondary Button:**
```tsx
<button className="bg-background-tertiary text-foreground px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
  Click me
</button>
```

### Links

```tsx
<Link className="text-brand-primary hover:text-blue-700 font-medium transition-colors">
  Learn more
</Link>
```

### Cards

```tsx
<div className="bg-background-secondary border border-border rounded-xl p-6">
  {/* Card content */}
</div>
```

## Accessibility

- Minimum contrast ratio: 4.5:1 for body text
- Minimum contrast ratio: 3:1 for large text (18pt+)
- Focus indicators on all interactive elements
- Semantic HTML elements
- ARIA labels where appropriate

## Dark Mode

Dark mode support is built-in using CSS custom properties and `prefers-color-scheme`. Colors automatically adjust based on system preferences.

To implement dark mode variants:

```tsx
<div className="bg-white dark:bg-slate-900">
  <p className="text-gray-900 dark:text-gray-100">Content</p>
</div>
```

## Best Practices

1. **Consistency:** Always use design tokens (Tailwind classes) instead of arbitrary values
2. **Spacing:** Use consistent spacing scale across all components
3. **Typography:** Limit to 2-3 font sizes per section
4. **Colors:** Stick to defined color palette; avoid one-off colors
5. **Responsive:** Design mobile-first, enhance for larger screens
6. **Performance:** Use `next/font` for optimal font loading
7. **Accessibility:** Test with screen readers and keyboard navigation

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Font Optimization](https://nextjs.org/docs/basic-features/font-optimization)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
