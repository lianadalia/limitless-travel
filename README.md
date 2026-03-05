# Limitless — Travel Discovery & Planning Demo

> "No boundaries, just destinations."

**Live demo:** https://lianadalia.github.io/limitless-travel/

---

## Overview

Limitless is an AI-assisted travel discovery and trip planning platform concept designed to fix the biggest frustration in travel UX: the journey is fragmented. You browse on one app, plan on another, and book on a third — none of them talk to each other and none of them actually inspire you.

Limitless brings inspiration, planning, and booking into a single, editorially-led experience. Rather than leading with a search bar and a wall of listings, it leads with *feeling* — destinations are surfaced through mood, editorial curation, and community, not just price and availability. Once a traveller is inspired, the platform stays with them all the way to a fully planned, shareable itinerary.

This repository contains a functional front-end prototype built for UX team discussions with the technical team, alongside the full UX research that informed it.

---

## Key Features

### Discover
- **Editorial-led home screen** — a hero with seasonally updated featured destinations, not a search box
- **Mood filters** — browse by feeling (Wilderness & Solitude, City Break, Food & Culture, Nomad-Friendly, Family, Luxury Escape) rather than just destination name
- **Editors' Picks** — a curated selection updated monthly, clearly attributed and dated to build trust
- **Community highlights** — real itineraries from other travellers surfaced on the home screen

### Search
- **Flexible query** — search by destination name, country, region, or vibe keyword
- **Mode switcher** — toggle between All, Family, Nomad, and Luxury modes; the UI vocabulary and filtered results adapt accordingly
- **Budget slider + vibe filters** — narrow results without leaving the page
- **Nomad score** — visible in search results when Nomad mode is active

### Destination Detail
- **Editorial write-up** — a short, human-written piece about each destination, not just aggregated data
- **Practical info woven in** — best months, budget range, flights, visa requirements presented alongside the editorial, not separated into a different tab
- **Nomad score & family score** — at-a-glance ratings for the two most context-specific user needs, with a plain-English explanation of each score
- **Community trips** — public itineraries from travellers who've been there, filtered to the destination

### Trip Planner
- **Itinerary builder** — day-by-day activity timeline with add/remove and drag-to-reorder controls
- **Smart checklist** — pre-populated with trip-relevant items (passport, insurance, visa, transfers); user can tick off as they go
- **Budget tracker** — estimated spend broken down by category (flights, accommodation, activities, food)
- **Collaborative** — share trip with a link; collaborators can view, add, and suggest changes

### Community
- **Public trip gallery** — filter by travel style; each trip shows the author's context (solo, family, nomad) so users find socially relevant content
- **Clone a trip** — one tap to copy any public itinerary into your own trip planner
- **Groups** — interest-based groups (Nomads in Chiang Mai, Family Travel Europe) with member counts and activity indicators

---

## UX Research

All research artefacts are in `/research/`. The prototype was built from these documents, not the other way around.

| File | Contents |
|---|---|
| `competitive-analysis.md` | Analysis of 6 platforms: Airbnb, Booking.com, Expedia, TripAdvisor, Wanderlog, Google Travel — value propositions, UX strengths, gaps, and a feature comparison matrix |
| `personas.md` | 4 user personas: Maya (Solo Adventurer, 28), David (Family Planner, 42), Priya (Digital Nomad, 34), Sophie (Luxury Tripper, 47) — each with goals, pain points, scenarios, and success metrics |
| `journey-maps.md` | 3 end-to-end journey maps: Discover & Inspire (Maya), Plan a Trip (David), Nomad Base Search (Priya) — with touchpoints, emotions, pain points, and design opportunities at every stage |
| `information-architecture.md` | Full site map, 4 primary user flows, content type inventory with trust signals, navigation patterns, and prototype page priority list |

### Figma flow diagrams

Three FigJam diagrams were produced alongside the prototype:

- [Site Map & Navigation Flow](https://www.figma.com/board/bmjmy5AreT8bf810C55DS1/Limitless-%E2%80%94-Site-Map---Navigation-Flow?node-id=0-1&t=Qmqh7xKELZNXgTD1-1)
- [Discover → Plan User Flow](https://www.figma.com/board/Gin9gCbYen7fz8iWzvwsge/Limitless-%E2%80%94-Discover-to-Plan-User-Flow?node-id=0-1&t=y05psgeZWIpuZW3m-1)
- [Nomad Base Search Flow](https://www.figma.com/board/aDATzrPyKDCyvFBVz7avtJ/Limitless-%E2%80%94-Nomad-Base-Search-Flow?node-id=0-1&t=5HByYr39ZFt3JwrE-1)

---

## Key UX Decisions

### 1. Inspiration before search
Every competitor defaults to a search bar as the entry point. Our research found that all four personas described wanting to feel inspired before they committed to a destination. The home screen leads with an editorial hero and mood filters — the search bar is one tap away but not the first thing you see.

### 2. Context-adaptive modes
A family planner and a digital nomad have almost nothing in common in terms of what they need from a travel platform. Rather than forcing both through a generic interface, Limitless uses a mode switcher (Family / Nomad / Luxury / All) that adjusts the vocabulary, filters, and scored attributes shown throughout the app. This was directly informed by the persona work — the pain point of "this app doesn't understand my situation" appeared in three out of four personas.

### 3. Editorial and practical info together
Competitors either do editorial inspiration (Airbnb, TripAdvisor lists) or practical data (Booking.com, Google Travel) — rarely both, and almost never in the same view. On the Destination Detail page, the write-up and the practical details (visa, budget, best months) share the screen deliberately. The research showed that users lose trust and context when they have to leave an inspiring page to find out whether a destination is actually feasible.

### 4. Trust signals over star ratings
Across all four personas, distrust of aggregated star ratings was a consistent theme. The prototype addresses this with: editorially attributed content (bylined, dated), reviewer context on community trips (travel style, party type, recency), and plain-English explanations of composite scores (nomad score, family score) rather than a single unexplained number.

### 5. Friction-free discover → plan handoff
The journey maps identified the transition from "I want to go here" to "I'm actually planning this trip" as a high drop-off moment across all competitor platforms. In Limitless, the "Start planning" CTA on the Destination Detail page carries the destination directly into the Trip Planner — no re-entering details, no new search, no login wall.

### 6. Community as a trust layer, not a marketing feature
Community itineraries appear at three points: the home screen, the destination detail page, and the dedicated Community section. This placement mirrors how users actually use social proof — not as a separate "reviews" tab they seek out, but as ambient reassurance woven into the browsing experience. The "clone a trip" mechanic also directly addresses the pain point of planning being fragmented across apps.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite` plugin) |
| Routing | react-router-dom v7 (HashRouter for static hosting) |
| Icons | lucide-react |
| Deployment | GitHub Pages via `gh-pages` |

---

## Running locally

```bash
npm install
npm run dev       # → http://localhost:5173
```

```bash
npm run deploy    # build and push to GitHub Pages
```

## Pages

| Route | Page |
|---|---|
| `/` | Discover — editorial hero, mood filters, destination cards |
| `/search` | Search — query, budget slider, vibe filters, mode switcher |
| `/destination/:id` | Destination detail — editorial, scores, activities, planning CTA |
| `/plan` | Trip Planner — itinerary builder, checklist, budget tracker |
| `/community` | Community — public trips, clone CTA, groups |
| `/confirmation` | Confirmation — trip saved, share & export |
