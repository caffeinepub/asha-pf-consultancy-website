# Specification

## Summary
**Goal:** Remove ASHA PF CONSULTANCY logo graphics from the hero area and stop using the logo-based favicon.

**Planned changes:**
- Update the Hero section UI to no longer render the logo image and adjust spacing/layout so the hero still looks intentional on mobile and desktop.
- Update `frontend/index.html` to remove the favicon reference to `/assets/generated/asha-pf-favicon-transparent.dim_64x64.png` (allowing the browser default favicon behavior if no replacement is set).

**User-visible outcome:** The hero section shows no logo graphic, and the browser tab icon is no longer the ASHA PF CONSULTANCY logo.
