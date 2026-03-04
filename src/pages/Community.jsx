import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Star, Copy, Users, Calendar } from 'lucide-react'
import { destinations } from '../data/destinations'

const communityTrips = [
  {
    id: 1,
    title: '5 days in the Faroe Islands — solo, October',
    author: 'Yasmin K.',
    avatar: 'YK',
    destination: 'faroe-islands',
    days: 5,
    style: 'Solo · Wilderness',
    rating: 4.9,
    clones: 241,
    summary: 'A proper off-season trip through Gásadalur, Sørvágsvatn, and Tórshavn. Rented a car. Stayed in guesthouses. Worth every rainy moment.',
    months: 'October 2025',
  },
  {
    id: 2,
    title: 'Penang for digital nomads — 6-week base',
    author: 'Marcus T.',
    avatar: 'MT',
    destination: 'penang',
    days: 42,
    style: 'Nomad · Long-stay',
    rating: 4.8,
    clones: 318,
    summary: 'George Town co-working rundown, best cafés for wifi, monthly apartment areas, and how to extend your stay. Everything I wish I\'d known before I arrived.',
    months: 'Jan–Feb 2026',
  },
  {
    id: 3,
    title: 'Mallorca with kids aged 7 & 10 — 10 days',
    author: 'Sarah & David O.',
    avatar: 'SO',
    destination: 'mallorca',
    days: 10,
    style: 'Family · Beach',
    rating: 4.7,
    clones: 503,
    summary: 'North Mallorca is incredible with kids — less crowded, better beaches, amazing food. We hired a car from day 1 and never looked back. Full breakdown of kid-tested activities.',
    months: 'July 2025',
  },
  {
    id: 4,
    title: 'Seville weekend — luxury 3 days',
    author: 'Sophie L.',
    avatar: 'SL',
    destination: 'seville',
    days: 3,
    style: 'Luxury · Solo',
    rating: 5.0,
    clones: 189,
    summary: 'Boutique hotel in Triana, private flamenco, the best tapas bars you won\'t find on Google. A perfect autumn weekend. Every booking link included.',
    months: 'October 2025',
  },
  {
    id: 5,
    title: 'Svalbard: Northern lights expedition — 5 days',
    author: 'Aiden R.',
    avatar: 'AR',
    destination: 'svalbard',
    days: 5,
    style: 'Adventure · Couples',
    rating: 4.9,
    clones: 97,
    summary: 'Dog-sled by day, aurora by night. Visited in January — coldest and most beautiful thing I\'ve ever done. Full gear list and guide recommendations.',
    months: 'January 2026',
  },
]

const groups = [
  { id: 1, name: 'Nomads in Chiang Mai', icon: '💻', members: 2841, active: true },
  { id: 2, name: 'Solo Female Travellers', icon: '✈️', members: 9203, active: true },
  { id: 3, name: 'Family Travel Europe', icon: '👨‍👩‍👧', members: 4512, active: true },
  { id: 4, name: 'Nomads in Penang', icon: '🌏', members: 1204, active: false },
]

export default function Community() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('trips') // trips | groups
  const [filter, setFilter] = useState('all')

  const styleFilters = ['all', 'Solo', 'Family', 'Nomad', 'Luxury', 'Adventure']

  const filtered = communityTrips.filter(t =>
    filter === 'all' || t.style.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <main className="pb-24 md:pb-8 max-w-4xl mx-auto px-4 pt-4 md:pt-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Community</h1>
        <p className="text-gray-500 text-sm mt-1">Real trips from real travellers — clone any itinerary and make it yours</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10 mb-5">
        {['trips', 'groups'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2.5 text-sm font-medium capitalize transition-colors border-b-2 -mb-px ${
              tab === t ? 'border-blue-500 text-white' : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            {t === 'trips' ? `Public Trips (${communityTrips.length})` : `Groups (${groups.length})`}
          </button>
        ))}
      </div>

      {tab === 'trips' && (
        <>
          {/* Style filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-5">
            {styleFilters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  filter === f ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {f === 'all' ? 'All' : f}
              </button>
            ))}
          </div>

          {/* Trip cards */}
          <div className="space-y-4">
            {filtered.map(trip => {
              const dest = destinations.find(d => d.id === trip.destination)
              return (
                <div key={trip.id} className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                  {dest && (
                    <div className="relative h-32 overflow-hidden">
                      <img src={dest.thumb} alt={dest.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-2 left-3 text-xs text-white font-medium">{dest.name}, {dest.country}</div>
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-white font-semibold text-sm leading-snug">{trip.title}</h3>
                      <div className="flex items-center gap-1 text-yellow-400 text-xs flex-shrink-0">
                        <Star size={11} fill="currentColor" />
                        {trip.rating}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-7 h-7 rounded-full bg-blue-700 flex items-center justify-center text-xs font-bold text-white">
                        {trip.avatar}
                      </div>
                      <div>
                        <p className="text-gray-300 text-xs font-medium">{trip.author}</p>
                        <p className="text-gray-600 text-xs">{trip.style} · {trip.days} days · {trip.months}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">{trip.summary}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-gray-600 text-xs">
                        <Copy size={11} />
                        {trip.clones} people cloned this
                      </span>
                      <button
                        onClick={() => navigate('/plan', { state: { destination: dest } })}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded-lg transition-colors"
                      >
                        Clone trip
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}

      {tab === 'groups' && (
        <div className="space-y-3">
          {groups.map(g => (
            <div key={g.id} className="flex items-center justify-between bg-white/5 border border-white/5 rounded-xl px-4 py-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{g.icon}</span>
                <div>
                  <p className="text-white text-sm font-medium">{g.name}</p>
                  <p className="text-gray-500 text-xs flex items-center gap-1.5">
                    <Users size={10} />
                    {g.members.toLocaleString()} members
                    {g.active && <span className="text-green-400">· Active now</span>}
                  </p>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-white/10 hover:bg-white/15 text-white text-xs font-medium rounded-lg transition-colors">
                Join
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
