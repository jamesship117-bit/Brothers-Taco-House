---
name: nextjs-v0-dev
description: Build and integrate UI created with v0.dev into Next.js apps with clean component boundaries, app-router conventions, and production-ready polish. Use when the user mentions v0.dev, v0 prompts, generated Next.js UI, shadcn-style components, or asks to turn AI-generated UI into maintainable code.
---

# Next.js v0.dev

## When To Use This Skill

Use this skill when the user wants to:
- generate UI ideas with v0.dev
- bring v0 output into a Next.js project
- refactor generated JSX into reusable components
- align v0-style code with app-router patterns

## Core Rules

1. Preserve user-facing behavior and visual intent from the v0 output.
2. Prefer small, reusable components over a single large page file.
3. Keep server/client boundaries explicit (`"use client"` only where needed).
4. Use project tokens, spacing scale, and typography styles when available.
5. Keep accessibility intact: semantic HTML, labels, keyboard focus, and alt text.

## Workflow

Copy this checklist and track progress:

```md
v0 Integration Progress
- [ ] Step 1: Identify target route and component boundaries
- [ ] Step 2: Normalize dependencies and imports
- [ ] Step 3: Refactor generated JSX into maintainable components
- [ ] Step 4: Wire data/state and loading/error states
- [ ] Step 5: Verify responsive layout and accessibility
- [ ] Step 6: Run lint/typecheck and fix issues
```

### Step 1: Identify target route and component boundaries

- Place route files in `app/.../page.tsx` and extract large sections into local components.
- Keep route files focused on composition and data flow.
- If code is purely presentational, place it in reusable UI components.

### Step 2: Normalize dependencies and imports

- Resolve every generated import to project-approved packages and paths.
- Remove unused icon/component imports.
- If v0 output references unavailable primitives, map them to existing design-system components.

### Step 3: Refactor generated JSX into maintainable components

- Break repeated blocks into typed components with clear props.
- Replace hard-coded content with props/config where reuse is expected.
- Move constants/mock data outside render functions when static.

### Step 4: Wire data/state and loading/error states

- Keep data fetching on the server when possible.
- Use client components for interactivity only (tabs, dialogs, local state).
- Add empty/loading/error UI when data may be missing or delayed.

### Step 5: Verify responsive layout and accessibility

- Validate mobile-first layout behavior and wrapping at common breakpoints.
- Confirm headings hierarchy and landmark semantics.
- Ensure buttons/links have clear accessible labels and visible focus states.

### Step 6: Run lint/typecheck and fix issues

- Run project validation commands after edits.
- Resolve type errors introduced by generated code (especially prop typing and nullable data).

## Default Integration Pattern

Use this structure unless project conventions differ:

```txt
app/
  (marketing)/
    page.tsx
components/
  marketing/
    hero.tsx
    feature-grid.tsx
    cta.tsx
```

## Prompting Guidance For v0

When asked to help draft a v0 prompt, include:
- product/page goal
- target users
- required sections
- interaction expectations
- visual direction (tone, density, spacing)
- responsive behavior
- accessibility requirements

Use this starter template:

```md
Create a Next.js-compatible UI for [page/feature].
Audience: [who uses it].
Include sections: [A, B, C].
Interactions: [filters, tabs, dialogs, etc].
Style: [minimal/modern/editorial], with [color/spacing tone].
Responsive behavior: [mobile stack, desktop grid].
Accessibility: semantic headings, labeled controls, keyboard friendly.
```

## Output Format For Agent Responses

When completing v0 integration work, respond with:
1. What was changed (routes/components/dependencies)
2. Why the structure was chosen
3. Any follow-up needed (assets, data wiring, tests)

## Additional Resources

- For concrete examples, see [examples.md](examples.md)
