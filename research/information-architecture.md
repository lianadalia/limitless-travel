# Information Architecture — Limitless Travel Platform

**Product:** Limitless ("No boundaries, just destinations")
**Date:** March 2026
**Prepared by:** UX Research Team

---

## 1. Design Principles

Derived from competitive analysis, personas, and journey maps:

1. **Inspiration before search** — The platform leads with discovery, not a search bar
2. **Context-adaptive** — UI adapts to user mode (solo, family, nomad, luxury)
3. **End-to-end** — One platform from dream to trip confirmation
4. **Trust by design** — Every piece of content signals recency, source, and quality
5. **Progressive disclosure** — Surface essentials; reveal complexity on demand

---

## 2. Global Navigation

### Primary Navigation (Bottom bar on mobile / Top nav on desktop)

| Tab / Item | Purpose |
|---|---|
| **Discover** | Editorial-led inspiration; mood and style filters |
| **Search** | Structured destination/date/party search |
| **My Trips** | Active trip planner + saved destinations |
| **Community** | Public itineraries, groups, meet-ups |
| **Profile** | Travel preferences, booking history, settings |

### Secondary / Contextual Nav
- **Mode switcher** (in profile or persistent pill): Weekend Escape · Family · Digital Nomad · Luxury — changes vocabulary, filters, and content surfaced across the whole app
- **Notifications bell** — trip reminders, collaborator edits, community activity

---

## 3. Site Map

```
Limitless
│
├── Discover (Home)
│   ├── Editorial Hero (rotating, seasonally updated)
│   ├── Mood Filters (Wilderness, City Break, Beach, Culture, Adventure, Slow Travel...)
│   ├── Trending Destinations
│   ├── Editors' Picks
│   ├── Based on Your Travel Style (personalised)
│   └── Community Highlights (recent public trips)
│
├── Search
│   ├── Quick Search (destination + dates + party)
│   ├── "Inspire Me" Search (mood + budget + time, no destination)
│   ├── Search Results
│   │   ├── List View
│   │   ├── Map View
│   │   └── Filters panel (price, family score, nomad score, vibe, duration)
│   └── Price Alerts (flight + accommodation combo)
│
├── Destination Detail
│   ├── Editorial Overview (hero image, editorial write-up, vibe tags)
│   ├── Practical Info (best time, avg budget, flights from, entry requirements)
│   ├── Itinerary Starters (curated day-by-day suggestions)
│   ├── Where to Stay (accommodation cards)
│   ├── What to Do (activities, experiences)
│   ├── Community Trips (public itineraries for this destination)
│   ├── Nomad Score (if nomad mode active)
│   └── Save / Start Planning CTA
│
├── Trip Planner
│   ├── Trip Setup (destination, dates, party, budget)
│   ├── Itinerary Builder
│   │   ├── Map view with drag-and-drop day blocks
│   │   ├── Day-by-day timeline
│   │   ├── Activity cards (add from suggestions or custom)
│   │   └── Travel time estimates between activities
│   ├── Accommodation Section
│   │   ├── Recommendations (filtered to trip context)
│   │   └── Add manually / link external
│   ├── Trip Checklist
│   │   ├── Auto-generated (passport, insurance, visa, family items...)
│   │   └── Custom items
│   ├── Budget Tracker
│   │   ├── Category breakdown (flights, accommodation, activities, food, misc)
│   │   └── Estimated vs actual spend
│   ├── Collaborators
│   │   ├── Invite by link / email
│   │   └── Comment / suggest mode
│   └── Share / Export (PDF, link, iCal)
│
├── My Trips
│   ├── Active Trips
│   ├── Past Trips
│   ├── Saved (Wishlist / Dream Destinations)
│   └── Shared With Me
│
├── Community
│   ├── Explore Public Trips (filter by destination, style, duration)
│   ├── Trip Detail (full public itinerary — clone / adapt CTA)
│   ├── Groups (Nomads in [City], Solo Female Travellers, Family Travel...)
│   │   ├── Group feed
│   │   ├── Meet-ups / events
│   │   └── Member directory (opt-in)
│   └── Submit Your Trip (publish a past trip)
│
└── Profile
    ├── Travel Preferences (mode, travel style, home airport, currency)
    ├── My Reviews
    ├── Booking History
    ├── Notifications Settings
    └── Account Settings
```

---

## 4. Key User Flows

### Flow A — Inspiration to Planned Trip (Maya / Sophie)
```
Discover (mood filter)
→ Destination Detail
→ Save to wishlist
→ "Start Planning"
→ Trip Setup
→ Itinerary Builder
→ Accommodation
→ Share / Export
```

### Flow B — Structured Family Planning (David)
```
Search (destination + dates + party size)
→ Search Results (family score filter)
→ Destination Detail
→ "Plan This Trip"
→ Trip Setup (family mode auto-applied)
→ Accommodation (family filters)
→ Itinerary Builder
→ Checklist
→ Invite collaborator (partner)
→ Share
```

### Flow C — Nomad Base Selection (Priya)
```
Search ("Inspire Me" + nomad mode)
→ Search Results (Nomad Score sort)
→ Destination Detail (nomad score breakdown, visa info)
→ Accommodation (30+ day filter)
→ Community (Nomads in [City] group)
→ RSVP meet-up
→ Save trip
```

### Flow D — Quick Luxury Weekend (Sophie)
```
Discover (Editors' Picks)
→ "Plan a weekend in [X]" (one-tap)
→ Trip Preview (curated 3-day itinerary)
→ Accept / customise
→ Accommodation (boutique, auto-filtered to style)
→ Book
```

---

## 5. Content Types

| Content Type | Source | Trust Signal |
|---|---|---|
| Editorial destination write-ups | In-house editorial team | Byline + last updated date |
| Accommodation listings | Partner APIs + direct | Partner-verified badge |
| Community itineraries | User-submitted | Date published + "Verified trip" badge |
| Nomad scores | Community data + Nomad List API | "Last updated" + methodology link |
| Visa / entry requirements | Official government APIs | "Source: [Gov]" + last confirmed date |
| Activity listings | Curated + partner APIs | Editorial or partner badge |
| Reviews | Community (moderated) | Reviewer context (travel style, party type) |

---

## 6. Navigation Patterns

| Pattern | Usage |
|---|---|
| Bottom tab bar | Primary navigation (mobile) |
| Persistent top nav | Primary navigation (desktop) |
| Mode pill (top of screen) | Switch travel context globally |
| Floating "Start Planning" CTA | Destination detail pages — always visible |
| Drawer / sheet | Filters, trip settings, collaborator panel |
| Full-screen map | Search results, itinerary builder |
| Card stack / horizontal scroll | Destination and activity discovery |
| Stepper | Trip setup, booking confirmation |

---

## 7. Page Inventory for Prototype

Priority pages for the functional demo:

| Priority | Page | Notes |
|---|---|---|
| P0 | Home / Discover | Editorial hero + mood filters + destination cards |
| P0 | Search Results | List + map view, filters |
| P0 | Destination Detail | Editorial + practical + CTA |
| P0 | Trip Planner | Itinerary builder (simplified for demo) |
| P1 | Accommodation Listings | Filtered results for trip context |
| P1 | Community — Public Trips | Browse and clone itineraries |
| P1 | Booking Confirmation | Trip saved / booked confirmation screen |
| P2 | Profile / Preferences | Mode switcher, travel style |
| P2 | Community Group | Nomad or family group page |

---

*This IA document drives the prototype structure. See journey-maps.md for flow context and personas.md for user needs.*
