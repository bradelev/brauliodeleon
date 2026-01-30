---
name: react-19
description: React 19 patterns with React Compiler - no manual memoization needed
license: Apache-2.0
metadata:
  author: brauliodeleon
  version: "1.0"
  keywords: react, react 19, compiler, server components
---

# React 19 Patterns

## No Manual Memoization

React 19 Compiler automatically optimizes. **Don't use useMemo or useCallback**:

```tsx
// ✅ GOOD - React Compiler handles this
function TodoList({ todos, filter }) {
  const filteredTodos = todos.filter(todo => todo.status === filter);

  return (
    <ul>
      {filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </ul>
  );
}

// ❌ BAD - Unnecessary with React Compiler
function TodoList({ todos, filter }) {
  const filteredTodos = useMemo(
    () => todos.filter(todo => todo.status === filter),
    [todos, filter]
  );
  // ...
}
```

## Imports

```tsx
// ✅ GOOD - Named imports
import { useState, useEffect } from 'react';

// ❌ BAD - Default import
import React from 'react';
const { useState } = React;
```

## Server Components First

```tsx
// ✅ GOOD - Server component (default)
export default async function Page() {
  const data = await getData();
  return <div>{data.title}</div>;
}

// Client component only when needed
"use client";
export function InteractiveWidget() {
  const [open, setOpen] = useState(false);
  return <button onClick={() => setOpen(!open)}>Toggle</button>;
}
```

## When to use "use client"

Only use when you need:
- ✓ Event handlers (onClick, onChange, etc.)
- ✓ Hooks (useState, useEffect, useContext, etc.)
- ✓ Browser APIs (window, localStorage, etc.)
- ✓ Custom hooks
- ✓ Class components

## use() Hook

Read promises and context conditionally:

```tsx
import { use } from 'react';

function Component({ dataPromise }) {
  const data = use(dataPromise);  // Suspends until resolved
  return <div>{data.title}</div>;
}

// Conditional context usage
function Button({ theme }) {
  const value = theme !== null ? use(ThemeContext) : null;
  // ...
}
```

## ref as Prop

No more forwardRef needed:

```tsx
// ✅ GOOD - React 19
function Input({ ref, ...props }) {
  return <input ref={ref} {...props} />;
}

// ❌ BAD - Old pattern
const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});
```

## Component Organization

```tsx
// 1. Imports
import { useState } from 'react';
import type { User } from '@/types';

// 2. Types
type ProfileProps = {
  user: User;
  onUpdate?: (user: User) => void;
};

// 3. Component
export function Profile({ user, onUpdate }: ProfileProps) {
  // 4. Hooks
  const [editing, setEditing] = useState(false);

  // 5. Event handlers
  const handleSave = () => {
    // logic
  };

  // 6. Render
  return <div>...</div>;
}
```

## Best Practices

1. **Server Components**: Use server components by default
2. **No Manual Memoization**: Let React Compiler optimize
3. **Named Imports**: Always use named imports from 'react'
4. **TypeScript**: Define prop types for all components
5. **Clean JSX**: Keep JSX simple, extract complex logic to variables
6. **Composition**: Break down large components into smaller ones
