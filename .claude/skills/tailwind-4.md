---
name: tailwind-4
description: Tailwind CSS 4 patterns and best practices for brauliodeleon.com
license: Apache-2.0
metadata:
  author: brauliodeleon
  version: "1.0"
  keywords: tailwind, css, styling, utility classes, responsive
---

# Tailwind CSS 4 Patterns

## Critical Rules

### Never Use var() in className

```tsx
// ❌ BAD
<div className="bg-[var(--primary)]" />

// ✅ GOOD
<div className="bg-brand-primary" />
```

### Never Use Hex Colors

```tsx
// ❌ BAD
<div className="bg-[#2563eb]" />

// ✅ GOOD
<div className="bg-brand-primary" />  // or bg-blue-600
```

## The cn() Utility

```ts
// lib/utils.ts
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}
```

### When to Use cn()

```tsx
// ✅ GOOD - Conditional classes
<div className={cn(
  "base-class",
  isActive && "active-class",
  error && "error-class"
)} />

// ✅ GOOD - Merging prop classes
<Button className={cn("default-styles", className)} />
```

### When NOT to Use cn()

```tsx
// ❌ BAD - Static classes
<div className={cn("flex items-center")} />

// ✅ GOOD - Direct string
<div className="flex items-center" />
```

## Common Patterns

### Layout

```tsx
// Container
<div className="mx-auto max-w-5xl px-6">

// Flex
<div className="flex items-center justify-between gap-4">

// Grid
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

// Centered content
<div className="flex min-h-screen items-center justify-center">
```

### Spacing

```tsx
// Consistent spacing scale
<div className="space-y-4">  // Vertical spacing between children
<div className="gap-6">      // Gap in flex/grid
<div className="p-4">        // Padding
<div className="my-8">       // Margin vertical
```

### Typography

```tsx
// Headings
<h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
<h2 className="text-3xl font-bold sm:text-4xl">
<h3 className="text-2xl font-semibold">

// Body text
<p className="text-base leading-7">
<p className="text-sm text-foreground-secondary">
```

### Colors

Use semantic color tokens:

```tsx
// Background
<div className="bg-background">
<div className="bg-background-secondary">

// Text
<p className="text-foreground">
<p className="text-foreground-secondary">
<p className="text-foreground-tertiary">

// Brand colors
<button className="bg-brand-primary text-white">
<a className="text-brand-primary hover:text-blue-700">

// Borders
<div className="border border-border">
```

### Interactive States

```tsx
// Hover
<button className="hover:bg-gray-100 dark:hover:bg-gray-800">

// Focus
<input className="focus:ring-2 focus:ring-brand-primary focus:outline-none">

// Active
<button className="active:scale-95">

// Disabled
<button disabled className="disabled:opacity-50 disabled:cursor-not-allowed">
```

### Responsive Design

```tsx
// Mobile first approach
<div className="
  text-sm          // Base (mobile)
  sm:text-base     // Small devices
  md:text-lg       // Medium devices
  lg:text-xl       // Large devices
">

// Hide/show at breakpoints
<div className="hidden md:block">  // Hidden on mobile, visible on md+
<div className="block md:hidden">  // Visible on mobile, hidden on md+
```

### Dark Mode

```tsx
<div className="
  bg-white text-gray-900
  dark:bg-gray-900 dark:text-white
">

// Use semantic tokens when possible
<div className="bg-background text-foreground">
```

## Arbitrary Values (Escape Hatch)

Only use when absolutely necessary:

```tsx
// ✅ OK - Custom value not in scale
<div className="w-[347px]">

// ❌ BAD - Use scale instead
<div className="w-[400px]">  // Use w-96 or w-[32rem]
```

## Best Practices

1. **Use Design Tokens**: Prefer semantic color names (bg-background, text-foreground)
2. **Mobile First**: Write base styles for mobile, add larger breakpoints
3. **Consistent Spacing**: Use the spacing scale (4, 6, 8, 12, 16, 24)
4. **Dark Mode**: Test all components in dark mode
5. **cn() for Conditionals**: Use cn() only for conditional styling
6. **No Inline Styles**: Always use Tailwind classes, never style={{ }}
