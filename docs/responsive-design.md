# Responsive Design Guidelines

## Breakpoints

This project uses Tailwind CSS default breakpoints with a mobile-first approach:

| Breakpoint | Min Width | Target Devices        | Prefix |
| ---------- | --------- | --------------------- | ------ |
| xs         | 0px       | Small mobile (320px+) | (none) |
| sm         | 640px     | Mobile landscape      | `sm:`  |
| md         | 768px     | Tablets               | `md:`  |
| lg         | 1024px    | Desktop               | `lg:`  |
| xl         | 1280px    | Large desktop         | `xl:`  |
| 2xl        | 1536px    | Extra large desktop   | `2xl:` |

## Minimum Viewport Support

All components must support viewports **320px and above**.

## Responsive Patterns

### Container

Use consistent container patterns:

```tsx
// Standard container with responsive padding
<div className="mx-auto max-w-5xl px-4 sm:px-6">
```

### Typography

Scale typography from mobile to desktop:

```tsx
// Headings - Start smaller on mobile
<h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
<h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
<h3 className="text-2xl font-semibold sm:text-3xl">

// Body text
<p className="text-base sm:text-lg">
<p className="text-sm sm:text-base">
```

### Spacing

Reduce spacing on mobile:

```tsx
// Padding
<div className="px-4 py-16 sm:px-6 sm:py-24">

// Margin
<div className="mt-4 sm:mt-6">

// Gap
<div className="gap-2 sm:gap-4">
```

### Layout

Stack on mobile, row on larger screens:

```tsx
// Flex direction
<div className="flex flex-col sm:flex-row">

// Grid columns
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
```

### Navigation

Mobile-optimized navigation:

```tsx
// Smaller text and gaps on mobile
<nav className="flex items-center gap-2 sm:gap-4">
  <Link className="text-xs sm:text-sm">Link</Link>
</nav>
```

## Component Checklist

When creating a new component, ensure:

- [ ] Works at 320px viewport width
- [ ] Text is readable and not cramped on mobile
- [ ] Touch targets are at least 44x44px on mobile
- [ ] Images are responsive (use `w-full` or max-width)
- [ ] Layout stacks appropriately on mobile
- [ ] Spacing scales down on smaller screens
- [ ] No horizontal scrolling at any breakpoint
- [ ] Dark mode works on all screen sizes

## Testing

Test components at these viewport widths:

- **320px** - iPhone SE (smallest supported)
- **375px** - iPhone 12/13/14
- **768px** - iPad portrait
- **1024px** - iPad landscape / small desktop
- **1440px** - Standard desktop

## Common Responsive Utilities

### Show/Hide at Breakpoints

```tsx
// Hide on mobile, show on desktop
<div className="hidden md:block">

// Show on mobile, hide on desktop
<div className="block md:hidden">
```

### Responsive Flex/Grid

```tsx
// Flex
<div className="flex-col md:flex-row">

// Grid
<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### Responsive Width

```tsx
// Full width on mobile, constrained on desktop
<div className="w-full md:w-1/2 lg:w-1/3">
```

## Best Practices

1. **Mobile First**: Write base styles for mobile, then add larger breakpoints
2. **Touch Targets**: Ensure clickable elements are at least 44x44px on mobile
3. **Readable Text**: Minimum 16px font size for body text on mobile
4. **Generous Spacing**: Use adequate padding/margin on small screens
5. **Test Early**: Check mobile layout from the start, not as an afterthought
6. **Performance**: Optimize images for mobile bandwidth
7. **Consistency**: Use the same responsive patterns across all components

## Resources

- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [MDN Responsive Web Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Web.dev Responsive Design](https://web.dev/responsive-web-design-basics/)
