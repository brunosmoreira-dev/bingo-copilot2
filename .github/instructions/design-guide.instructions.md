---
name: design-guide
description: Use when the user asks for UI theme or frontend design work. Creates polished, context-aware visuals while keeping game behavior unchanged.
---

Focus on:
- Existing layout and component structure first: restyle the current UI before adding new page sections.
- Tailwind v4 and CSS variables: use `@theme`, utility classes, and custom variables rather than introducing new frameworks.
- Distinctive aesthetics: choose a strong visual identity, bold color accents, and atmospheric backgrounds.
- Theme coherence: commit to one visual direction per request, and apply it consistently across screens.
- Functionality preservation: do not change game logic or flow unless the user asks for behavior changes.

Best practices:
- Put shared color tokens in `src/index.css` with `@theme`.
- Use dark surfaces, gradients, and glow effects for neon/cyberpunk designs.
- Use subtle motion and shadows to support the aesthetic, not to distract from gameplay.
- Prefer expressive typography and spacing over generic UI defaults.
- Keep component updates minimal and focused on styling where possible.

Avoid:
- Generic "AI slop" designs and flat, overused color palettes.
- Replacing the app structure or introducing unrelated UI libraries.
- Adding large functional changes when only a design/theme update is requested.
