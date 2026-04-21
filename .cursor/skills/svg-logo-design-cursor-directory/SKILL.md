---
name: svg-logo-design-cursor-directory
description: Creates production-ready SVG logos with strong visual hierarchy, clean geometry, and brand-safe constraints. Use when the user requests logo design, SVG assets, icon marks, wordmarks, brand exploration, or mentions cursor.directory-style graphic design.
---

# SVG Logo Design (cursor.directory style)

## When to use this skill

Use this workflow when the user asks for:
- SVG logos, logo marks, or brand icons
- Multiple visual directions for a brand
- Cursor.directory-style minimalist graphic design
- A clean, editable vector deliverable

## Core rules

1. Deliver SVG-first assets. Keep vectors clean and scalable.
2. Prefer simple geometry over decorative complexity.
3. Ensure strong silhouette and readability at small sizes (16-48 px).
4. Use limited palettes (1-3 colors unless user asks otherwise).
5. Keep typography optional in SVG unless the user specifically requests a wordmark.
6. Include a monochrome variant for flexibility.

## Design process

Follow this sequence:

1. Clarify brand inputs:
   - Brand name
   - Industry and audience
   - Desired tone (playful, premium, technical, etc.)
   - Color preferences or restrictions
   - Symbol ideas or motifs to include/avoid
2. Generate 3 distinct logo directions:
   - Direction A: geometric/minimal
   - Direction B: symbolic/conceptual
   - Direction C: typographic hybrid (if text is allowed)
3. Select one direction and refine spacing, stroke balance, and contrast.
4. Produce final SVG with clean grouping and naming.
5. Provide quick usage notes and color variants.

## SVG implementation standards

- Use a sensible `viewBox` (typically square, e.g. `0 0 512 512`).
- Keep paths grouped with semantic IDs/classes when useful.
- Remove unnecessary transforms and excessive decimal precision.
- Avoid raster effects, embedded images, and filter-heavy output by default.
- Ensure shapes render crisply at small sizes.

## Output format

When delivering a logo concept, include:

1. Concept name and one-sentence rationale
2. Palette (hex values)
3. SVG code block
4. Optional alternates:
   - monochrome
   - reversed (for dark backgrounds)

Use this template:

```markdown
### [Concept Name]
Rationale: [Short explanation tied to brand attributes]

Palette: `#XXXXXX`, `#XXXXXX`

```svg
[SVG markup]
```

Monochrome variant: [included or not included]
Best use case: [app icon, storefront, social avatar, packaging, etc.]
```

## Quality checklist

Before final delivery, verify:
- [ ] Distinct silhouette, recognizable at favicon size
- [ ] Balanced negative space
- [ ] Consistent corner style and stroke logic
- [ ] Accessible contrast in primary color pairings
- [ ] Valid SVG markup with no obvious bloat
- [ ] At least one monochrome-safe version

## Constraints and defaults

- Default to original vector work; avoid copying known brand marks.
- If user references an existing brand, create inspired-but-distinct directions.
- Keep explanations concise and design-focused.
- If requirements are ambiguous, ask 3-5 targeted questions before finalizing.
