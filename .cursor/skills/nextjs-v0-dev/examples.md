# Examples

## Example 1: Landing Page Import

**User request**
Convert this v0 landing page into our Next.js app-router project and keep the design close to the original.

**Expected approach**
- Create/adjust route file under `app/.../page.tsx`
- Extract sections into reusable components under `components/...`
- Keep only required client components interactive
- Replace placeholder copy/images with project-safe defaults

**Expected response shape**
1. Updated route and components
2. Notes on server/client split
3. Validation outcome and follow-up tasks

## Example 2: Dashboard Widget Refactor

**User request**
I pasted a large v0 dashboard component. Split it so it is maintainable and typed.

**Expected approach**
- Identify repeated cards/rows and convert to typed child components
- Move static configs outside render
- Tighten prop types and remove dead imports
- Preserve rendered layout and behavior

## Example 3: v0 Prompt Drafting

**User request**
Help me write a v0 prompt for a pricing page.

**Expected output**

```md
Create a Next.js-compatible pricing page UI.
Audience: SMB founders evaluating SaaS plans.
Include sections: hero, plan comparison, FAQ, final CTA.
Interactions: monthly/yearly toggle and highlighted recommended tier.
Style: modern and clean, medium information density, strong contrast.
Responsive behavior: stacked cards on mobile, 3-column layout on desktop.
Accessibility: semantic headings, labeled toggle, keyboard-visible focus.
```
