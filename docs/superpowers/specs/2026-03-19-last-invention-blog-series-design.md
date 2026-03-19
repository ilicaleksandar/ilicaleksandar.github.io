# The Last Invention Blog Series Design

**Date:** 2026-03-19
**Author:** Aleksandar Ilic
**Status:** Draft

## Overview

Convert a 5-part creative writing series about Nick Bostrom's *Superintelligence* into blog posts for the Jekyll-based GitHub Pages site.

## Source Materials

### Documents
- `Blog Series Part 1 When Curve Goes Vertical.docx`
- `Creative Writing Part 2 Three Roads Mar 19 2026.docx`
- `Intelligence Explosion Creative Writing Mar 19 2026.docx`
- `Blog Series Part 4 How to Contain a God.docx`
- `Blog Series Part 5 The Gamble Creative Writing Mar 19 2026.docx`

### Images (to be optimized)
- `Gemini_Generated_Image_tms5hitms5hitms5.png` → `last-invention-1.png`
- `Gemini_Generated_Image_tms5hitms5hitms5 (1).png` → `last-invention-2.png`
- `Gemini_Generated_Image_tms5hitms5hitms5 (2).png` → `last-invention-3.png`
- `Gemini_Generated_Image_tms5hitms5hitms5 (3).png` → `last-invention-4.png`
- `Gemini_Generated_Image_tms5hitms5hitms5 (4).png` → `last-invention-5.png`

## Output Structure

### Posts

| # | Filename | Title | Description |
|---|----------|-------|-------------|
| 1 | `2026-03-19-last-invention-part1-curve-goes-vertical.md` | When the Curve Goes Vertical | Economic curves, GDP history, superintelligence introduction |
| 2 | `2026-03-19-last-invention-part2-three-roads.md` | Three Roads to the Same Destination | AI, Whole Brain Emulation, Biological Cognition paths |
| 3 | `2026-03-19-last-invention-part3-intelligence-explosion.md` | The Intelligence Explosion | Recursive self-improvement, takeoff speeds, cognitive superpowers |
| 4 | `2026-03-19-last-invention-part4-contain-a-god.md` | How to Contain a God | Control problem, capability control, motivation selection |
| 5 | `2026-03-19-last-invention-part5-the-gamble.md` | The Gamble of Our Lifetime | Objections, counterarguments, conclusions |

### Front Matter Template

```yaml
---
layout: single
title: "🧠 The Last Invention Part N: [Subtitle]"
date: 2026-03-19
categories: ai
tags: [AI, superintelligence, Nick Bostrom, book review]
author: Aleksandar Ilic
description: "[Part-specific description]"
header:
  overlay_image: /assets/images/last-invention-N.png
  overlay_filter: rgba(0, 0, 0, 0.5)
  caption: "[Part-specific caption]"
  teaser: /assets/images/last-invention-N.png
og_image: /assets/images/last-invention-N.png
related_posts:
  - last-invention-part1-curve-goes-vertical
  - last-invention-part2-three-roads
  - last-invention-part3-intelligence-explosion
  - last-invention-part4-contain-a-god
  - last-invention-part5-the-gamble
excerpt: "[Part-specific excerpt]"
---
```

### Cross-linking Strategy

Each post's `related_posts` lists the **other 4 parts** (excludes itself). Posts are ordered by series sequence.

## Image Handling

1. **Move** images from repo root to `assets/images/`
2. **Rename** to semantic filenames (`last-invention-1.png` through `last-invention-5.png`)
3. **Optimize** for web delivery using `sips` or ImageMagick (current sizes: 7-8MB each, target: <500KB each)
4. **Configure** as hero/overlay images with dark filter for text readability

## Content Processing

- Extract text from DOCX files
- Convert to Markdown formatting
- Preserve section headings (## syntax)
- Handle any inline illustrations as image references
- Add captions where appropriate

## Success Criteria

- [ ] 5 blog posts created with correct front matter
- [ ] Images moved, renamed, and optimized
- [ ] All posts cross-linked
- [ ] Content renders correctly on GitHub Pages
- [ ] Hero images display properly with overlay text
