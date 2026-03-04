# Limitless — Travel Discovery & Planning Demo

> "No boundaries, just destinations."

A functional front-end prototype for the Limitless travel platform, built for UX team discussions with the technical team.

## link to live demo: https://lianadalia.github.io/limitless-travel/

Link to Figma 

Search flow: https://www.figma.com/board/aDATzrPyKDCyvFBVz7avtJ/Limitless-%E2%80%94-Nomad-Base-Search-Flow?node-id=0-1&t=5HByYr39ZFt3JwrE-1

Site Map & Navigation Flow: https://www.figma.com/board/bmjmy5AreT8bf810C55DS1/Limitless-%E2%80%94-Site-Map---Navigation-Flow?node-id=0-1&t=Qmqh7xKELZNXgTD1-1

User Flow: https://www.figma.com/board/Gin9gCbYen7fz8iWzvwsge/Limitless-%E2%80%94-Discover-to-Plan-User-Flow?node-id=0-1&t=y05psgeZWIpuZW3m-1

## Live prototype

```bash
npm install
npm run dev
# → http://localhost:5173
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

## UX Research

All research artefacts live in `/research/`:

- `competitive-analysis.md` — Analysis of Airbnb, Booking.com, Expedia, TripAdvisor, Wanderlog, Google Travel
- `personas.md` — 4 user personas: Solo Adventurer, Family Planner, Digital Nomad, Luxury Tripper
- `journey-maps.md` — 3 user journey maps: Discover & Inspire, Plan a Trip, Nomad Base Search
- `information-architecture.md` — Site map, key flows, content types, navigation patterns

## Figma

FigJam flow diagrams (linked from Figma):
- Site Map & Navigation Flow
- Discover → Plan user flow
- Nomad Base Search flow

## Stack

- React + Vite
- Tailwind CSS v4
- react-router-dom
- lucide-react
