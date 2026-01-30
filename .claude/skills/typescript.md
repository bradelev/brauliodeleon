---
name: typescript
description: TypeScript strict patterns for brauliodeleon.com
license: Apache-2.0
metadata:
  author: brauliodeleon
  version: "1.0"
  keywords: typescript, types, type-safety, strict
---

# TypeScript Patterns

## Strict Mode

Always use strict TypeScript configuration (already enabled in project).

## Type Definitions

### Component Props

```tsx
// ✅ GOOD - Explicit type
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

export function Button({ children, onClick, variant = "primary", disabled }: ButtonProps) {
  // ...
}

// ❌ BAD - Implicit any
export function Button({ children, onClick, variant, disabled }) {
  // ...
}
```

### Function Types

```tsx
// ✅ GOOD - Explicit return type
function calculateTotal(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// ✅ GOOD - Arrow function
const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};
```

### API Responses

```tsx
// Define response types
type Post = {
  id: string;
  title: string;
  content: string;
  publishedAt: Date;
  author: {
    name: string;
    email: string;
  };
};

type ApiResponse<T> = {
  data: T;
  error?: string;
};

// Use in functions
async function getPosts(): Promise<ApiResponse<Post[]>> {
  const response = await fetch('/api/posts');
  return response.json();
}
```

## Type vs Interface

### Use `type` for:

```tsx
// Unions
type Status = "pending" | "approved" | "rejected";

// Intersections
type User = Person & { role: Role };

// Utility types
type Optional<T> = {
  [K in keyof T]?: T[K];
};

// Simple object shapes
type Point = {
  x: number;
  y: number;
};
```

### Use `interface` for:

```tsx
// When you need to extend
interface User {
  id: string;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}

// Declaration merging (rare in Next.js apps)
interface Window {
  myCustomProperty: string;
}
```

## Avoid `any`

```tsx
// ❌ BAD
function processData(data: any) {
  return data.value;
}

// ✅ GOOD - Use unknown and type guard
function processData(data: unknown) {
  if (isDataValid(data)) {
    return data.value;
  }
  throw new Error('Invalid data');
}

function isDataValid(data: unknown): data is { value: string } {
  return typeof data === 'object' &&
         data !== null &&
         'value' in data;
}
```

## Generics

```tsx
// ✅ GOOD - Reusable type-safe function
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

const num = first([1, 2, 3]);     // number | undefined
const str = first(['a', 'b']);     // string | undefined
```

## Type Guards

```tsx
// ✅ GOOD - Custom type guard
function isPost(obj: unknown): obj is Post {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'title' in obj &&
    'content' in obj
  );
}

// Usage
function processPost(data: unknown) {
  if (isPost(data)) {
    console.log(data.title); // TypeScript knows data is Post
  }
}
```

## Utility Types

```tsx
// Partial - Make all properties optional
type PartialUser = Partial<User>;

// Required - Make all properties required
type RequiredConfig = Required<Config>;

// Pick - Select specific properties
type UserPreview = Pick<User, 'id' | 'name'>;

// Omit - Exclude specific properties
type UserWithoutPassword = Omit<User, 'password'>;

// Record - Create object type with specific keys
type ErrorMessages = Record<'email' | 'password', string>;
```

## React-Specific Types

```tsx
// Event handlers
function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
  // ...
}

function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  // ...
}

// Ref types
const inputRef = useRef<HTMLInputElement>(null);
const divRef = useRef<HTMLDivElement>(null);

// Children
type Props = {
  children: React.ReactNode;  // Any valid React child
};
```

## Best Practices

1. **Explicit Types**: Always define types for props, function returns, and API responses
2. **Avoid `any`**: Use `unknown` and type guards instead
3. **Type Reusability**: Extract common types to separate files in `/types`
4. **Strict Null Checks**: Handle `null` and `undefined` explicitly
5. **Type Inference**: Let TypeScript infer when types are obvious
6. **Generic Constraints**: Use constraints to make generics more specific

## File Organization

```
types/
├── index.ts        # Re-export all types
├── api.ts          # API response types
├── components.ts   # Component prop types
└── models.ts       # Domain models
```

```ts
// types/models.ts
export type Post = {
  id: string;
  title: string;
  content: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
};

// types/index.ts
export * from './api';
export * from './components';
export * from './models';
```
