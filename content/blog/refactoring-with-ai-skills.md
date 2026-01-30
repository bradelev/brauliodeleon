# Refactoring a Next.js Project with AI Skills: A Living Document

**Status:** In Progress
**Issue:** [BDW-33](https://brauliodeleon.atlassian.net/browse/BDW-33)
**Branch:** `feat/BDW-33-refactor-skills-best-practices`
**Date Started:** 2026-01-30

## Introduction

This document chronicles the process of refactoring an entire Next.js codebase to follow best practices defined in AI skills. These skills act as a knowledge base that guides development patterns for Next.js 15, React 19, Tailwind CSS 4, and TypeScript.

## The AI Skills Framework

Before starting the refactor, we established a `.claude/skills/` directory containing pattern guides:

- **nextjs-15.md** - App Router conventions, server components, metadata patterns
- **react-19.md** - No manual memoization, React Compiler optimization, hooks usage
- **tailwind-4.md** - Semantic tokens, cn() utility, no var()/hex in className
- **typescript.md** - Explicit types, no any, utility types, React-specific patterns
- **github-pr.md** - PR best practices, conventional commits, GitHub CLI workflows

## Refactoring Goals

1. Apply TypeScript strict patterns with explicit return types
2. Use cn() utility for conditional className composition
3. Extract repeated data into typed constants
4. Follow React 19 component organization patterns
5. Add transition animations to interactive elements
6. Improve code maintainability and type safety

## Changes Applied

### 1. ThemeToggle Component

**File:** `components/ThemeToggle.tsx`

**Issues Identified:**
- Duplicated className strings
- Missing explicit types on useState
- No transition animations on hover states
- Handler logic inline instead of extracted

**Improvements:**
```tsx
// Before: Duplicated className
<button className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800">

// After: cn() utility + transition
const buttonClassName = cn(
  "rounded-lg p-2",
  "hover:bg-gray-100 dark:hover:bg-gray-800",
  "transition-colors"
);

// Before: Implicit boolean type
const [mounted, setMounted] = useState(false);

// After: Explicit type
const [mounted, setMounted] = useState<boolean>(false);

// Before: Inline handler
onClick={() => setTheme(theme === "dark" ? "light" : "dark")}

// After: Extracted handler with explicit type
const handleToggle = (): void => {
  setTheme(theme === "dark" ? "light" : "dark");
};
```

**Benefits:**
- Single source of truth for button styles
- Better TypeScript inference and error checking
- Smoother user experience with transitions
- More testable code with extracted handlers

### 2. Header Component

**File:** `components/Header.tsx`

**Issues Identified:**
- Repeated Link components with same className
- No data structure for navigation links
- Missing explicit return type
- No transition on hover states

**Improvements:**
```tsx
// Before: Repeated Link components
<Link href="/" className="...">Home</Link>
<Link href="/blog" className="...">Blog</Link>

// After: Data-driven with type
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
] as const;

{navLinks.map(({ href, label }) => (
  <Link key={href} href={href} className="...">
    {label}
  </Link>
))}

// Added: Explicit return type
export function Header(): JSX.Element {
```

**Benefits:**
- Easy to add/remove navigation links
- Single source of truth for nav structure
- Type-safe readonly array with const assertion
- DRY principle applied effectively

### 3. Footer Component

**File:** `components/Footer.tsx`

**Issues Identified:**
- Repeated Link components with identical styling
- External link attributes duplicated
- Missing type definitions for link structure
- No transition animations

**Improvements:**
```tsx
// Before: Repeated external link attributes
<Link
  href="https://github.com/bradelev"
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>

// After: Conditional spread with typed data
type SocialLink = {
  href: string;
  label: string;
  external?: boolean;
};

const socialLinks: SocialLink[] = [
  { href: "https://github.com/bradelev", label: "GitHub", external: true },
  { href: "https://linkedin.com/in/brauliodeleon", label: "LinkedIn", external: true },
  { href: "mailto:hi@brauliodeleon.com", label: "Email" },
];

{socialLinks.map(({ href, label, external }) => (
  <Link
    key={href}
    href={href}
    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    className="..."
  >
    {label}
  </Link>
))}
```

**Benefits:**
- Type-safe social links structure
- Automatic external link handling
- Easy to maintain and extend
- Consistent security attributes

### 4. Home Page

**File:** `app/page.tsx`

**Improvements:**
```tsx
// Before: Implicit return type
export default function Home() {

// After: Explicit return type
export default function Home(): JSX.Element {
```

**Benefits:**
- Explicit contract for component return type
- Better IDE autocomplete and error detection
- Follows TypeScript skill patterns

### 5. Root Layout

**File:** `app/layout.tsx`

**Improvements:**
```tsx
// Before: Inline type definition
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

// After: Extracted type with explicit return
type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
```

**Benefits:**
- Reusable type definition
- Cleaner function signature
- Better type organization

### 6. ThemeProvider Component

**File:** `components/ThemeProvider.tsx`

**Improvements:**
```tsx
// Before: Inline type from ComponentProps
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {

// After: Named type with explicit return
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps): JSX.Element {
```

**Benefits:**
- Named type for better documentation
- Explicit return type for consistency
- Easier to extend in the future

## Patterns Applied

### TypeScript Patterns
- ✅ Explicit return types on all functions
- ✅ Type definitions extracted and named
- ✅ Readonly arrays with `as const`
- ✅ No implicit any types
- ✅ Proper React type usage (JSX.Element, React.ReactNode)

### React 19 Patterns
- ✅ Named imports from 'react'
- ✅ No unnecessary forwardRef
- ✅ Clean component organization (types → component → handlers → render)
- ✅ Server components by default (client components only when needed)

### Tailwind Patterns
- ✅ cn() utility for conditional classes
- ✅ transition-colors for smooth animations
- ✅ Consistent spacing and sizing
- ✅ No inline style objects
- ✅ No arbitrary hex values in className

### Code Organization
- ✅ Data structures extracted to constants
- ✅ DRY principle applied
- ✅ Single source of truth for repeated elements
- ✅ Type-safe data structures

## Next Steps

- [x] Run linting and type checking
- [x] Test all changes locally
- [x] Verify responsive design still works
- [ ] Create Pull Request following github-pr skill
- [ ] Merge and close issue

## Testing Results

### Linting
```bash
npm run lint
✔ No ESLint warnings or errors
```

**Result:** ✅ PASSED

### Type Checking & Build
```bash
npm run build
  ▲ Next.js 14.2.35
   Creating an optimized production build ...
 ✓ Compiled successfully
   Linting and checking validity of types ...
 ✓ Generating static pages (4/4)
```

**Result:** ✅ PASSED

### Code Statistics
```
Files Modified: 6
Lines Added: 62
Lines Removed: 54
Net Change: +8 lines
```

### Modified Files
- `app/layout.tsx` - Added RootLayoutProps type, explicit return type
- `app/page.tsx` - Added explicit return type
- `components/Footer.tsx` - Type-safe social links, data-driven rendering
- `components/Header.tsx` - Type-safe nav links, data-driven rendering
- `components/ThemeProvider.tsx` - Named type, explicit return type
- `components/ThemeToggle.tsx` - cn() utility, explicit types, extracted handler

### Responsive Design Verification
All components maintain responsive design patterns:
- ✅ Mobile-first approach preserved
- ✅ Breakpoints working correctly (320px+)
- ✅ Touch targets remain accessible
- ✅ Dark mode functionality intact

## Pull Request

_To be created following github-pr.md patterns..._

## Lessons Learned

_To be updated as we progress..._

## Conclusion

_To be written after PR is merged..._

---

**Last Updated:** 2026-01-30
**Changes Made:** Initial refactoring of 6 component files
**Lines Changed:** TBD
**Files Modified:** TBD
