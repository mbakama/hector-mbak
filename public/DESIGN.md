---
name: Obsidian Terminal
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#c8c6c8'
  on-secondary: '#313032'
  secondary-container: '#474649'
  on-secondary-container: '#b7b4b7'
  tertiary: '#c4c7c9'
  on-tertiary: '#2d3133'
  tertiary-container: '#8e9193'
  on-tertiary-container: '#272a2c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e5e1e4'
  secondary-fixed-dim: '#c8c6c8'
  on-secondary-fixed: '#1b1b1d'
  on-secondary-fixed-variant: '#474649'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display:
    fontFamily: Geist
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.6'
  tech-label:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

This design system is built for a developer portfolio that merges high-end editorial layouts with a raw, technical aesthetic. The brand personality is precise, authoritative, and unapologetically digital. It draws from **Minimalism** and **Modern Brutalism**, prioritizing functional clarity over decorative fluff. 

The emotional response should be one of "sophisticated engineering"—the feeling of looking at a high-performance code editor or a luxury technical manual. The UI utilizes heavy whitespace to create a sense of scale, allowing technical details like monospaced labels and terminal cursors to act as the primary decorative elements. All layout decisions follow a strict, asymmetric logic that breaks the traditional "centered" web flow in favor of a more dynamic, editorial structure.

## Colors

The palette is rooted in deep blacks and high-contrast typography to ensure maximum legibility and a focused "dark mode" experience.

- **Primary Background (#0d0d0f):** A rich, deep black that serves as the canvas, eliminating distractions and providing depth.
- **Accent (#3b82f6):** An electric blue used sparingly for interactive states, terminal-style cursors, and technical highlights.
- **Primary Text (#f8fafc):** An off-white used for headings and body copy to reduce eye strain compared to pure white.
- **Secondary Text (#94a3b8):** A muted gray for metadata, labels, and descriptions, creating a clear visual hierarchy.
- **Surface Tints:** Use `rgba(148, 163, 184, 0.1)` for subtle dividers and code block backgrounds.

## Typography

The system utilizes two distinct type families to balance editorial grace with technical precision.

**Geist** is the workhorse for all narrative content. Its wide apertures and modern geometric structure feel clean and premium. Use the "Display" style for large hero statements and the "Body" styles for project descriptions.

**JetBrains Mono** is used for all "meta" information. This includes section numbers (e.g., 01, 02), breadcrumbs, tech stack tags, and actual code snippets. It should always be used for UI elements that suggest a "technical interface" rather than a reading experience.

## Layout & Spacing

This design system uses an **asymmetric fluid grid** to create visual interest and a sense of movement.

- **Grid Model:** A 12-column grid for desktop. Content should rarely span the full width. Instead, stagger content across columns (e.g., a headline spanning columns 1-6 while body text starts at column 5 and spans to 10).
- **Margins:** Generous 64px margins on desktop to frame the content like a page in a high-end magazine.
- **Rhythm:** Spacing follows a 4px baseline, but the primary rhythm is dictated by "Section Gaps" (120px+) to ensure the "Editorial Minimalism" isn't compromised by overcrowding.
- **Adaptive Rules:** On mobile, the layout collapses to a single-column, 20px margin view. Large display typography should scale down to 32px to ensure accessibility while maintaining impact.

## Elevation & Depth

To maintain the "Obsidian" feel, the system avoids traditional shadows or blurred layers. 

1. **Flat Tonal Layers:** Hierarchy is established through background color shifts rather than Z-axis elevation. Use the primary background for the page and a slightly lighter tint (`#161618`) for card backgrounds or code blocks.
2. **Ghost Borders:** Elements are defined by ultra-thin (1px) solid borders using the Secondary Text color at 20% opacity. 
3. **Accent Highlights:** Use the Electric Blue for high-importance focus states. This mimics the behavior of a cursor or a selected line in an IDE.
4. **No Glassmorphism:** Transparency is used purely for overlays (like navigation bars), but without the frost/blur effect, keeping the interface sharp and performant.

## Shapes

The design language favors **Sharp Edges**. All primary containers, buttons, and sections should have 0px or very subtle 4px corner radii. 

- **Primary Elements:** 4px (Soft) is the maximum radius allowed, used only to prevent the UI from feeling "hostile."
- **Interactive Elements:** Buttons and tags should remain strictly rectangular or use the 4px radius consistently.
- **Terminal Elements:** Any terminal-like window should have sharp 90-degree corners to emphasize the technical aesthetic.

## Components

### Navigation
A minimal top-docked bar. The left side features the developer's name in `tech-label` styling; the right side features a monospaced "Menu" trigger or a horizontal list of links. On hover, links should show a terminal-style underscore cursor (`_`).

### Project Cards
Large, impactful blocks. They should not use shadows. Instead, use a large image with a 4px radius, followed by a `headline-md` title and `tech-label` metadata. The "view project" action should be a simple text link with an arrow (`->`) that turns Electric Blue on hover.

### Experience Timeline
A vertical line (1px width, `#94a3b8` at 30% opacity) with monospaced years (e.g., 2021 — 2023) acting as nodes. The content is offset to the right, creating a clean, asymmetric vertical flow.

### Tech Stack Tags
Small, monospaced text elements with a 1px border. No background fill. On hover, the background fills with a faint blue tint and the text color shifts to the Primary Accent.

### Terminal Cursor
A 2px wide vertical bar or a block underscore that blinks at 1s intervals. Use this as a decoration next to headlines or as the active state indicator in input fields.

### Input Fields
Strictly bottom-bordered lines. No full boxes. When focused, the bottom border color transitions from Gray to Electric Blue. Labels should stay above the line in `tech-label` typography.