import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, ChevronRight } from 'lucide-react'
import DestinationCard from '../components/DestinationCard'
import { destinations, moods, moodDestinationMap } from '../data/destinations'

const editors = destinations.filter(d => ['faroe-islands', 'seville', 'penang'].includes(d.id))

export default function Discover() {
  const [activeMood, setActiveMood] = useState(null)
  const navigate = useNavigate()

  const filtered = activeMood
    ? destinations.filter(d => (moodDestinationMap[activeMood] || []).includes(d.id))
    : destinations

  return (
    <main className="pb-24 md:pb-8">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400&q=80"
          alt="Limitless travel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-12 w-full">
          <p className="text-blue-400 text-sm font-medium mb-3 tracking-wide uppercase">No boundaries, just destinations</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-4">
            Where will<br />you go next?
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg">
            Discover places that inspire you. Plan the trip. Live it — no limits.
          </p>
          {/* Quick search */}
          <div
            onClick={() => navigate('/search')}
            className="flex items-center gap-3 bg-white/10 backdrop-blur border border-white/15 rounded-2xl px-5 py-4 cursor-pointer hover:bg-white/15 transition-colors max-w-lg"
          >
            <Search size={18} className="text-gray-400" />
            <span className="text-gray-400 text-sm">Destination, vibe, or "surprise me"…</span>
          </div>
        </div>
      </section>

      {/* Mood filters */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mt-10">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setActiveMood(null)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeMood === null
                ? 'bg-blue-600 text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            All
          </button>
          {moods.map(m => (
            <button
              key={m.id}
              onClick={() => setActiveMood(activeMood === m.id ? null : m.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeMood === m.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>{m.icon}</span>
              {m.label}
            </button>
          ))}
        </div>
      </section>

      {/* Editors' Picks */}
      {!activeMood && (
        <section className="px-4 md:px-8 max-w-7xl mx-auto mt-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-white">Editors' Picks</h2>
              <p className="text-gray-500 text-sm">Curated by our travel team, updated monthly</p>
            </div>
            <button className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300">
              See all <ChevronRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {editors.map(d => (
              <DestinationCard key={d.id} destination={d} size="lg" />
            ))}
          </div>
        </section>
      )}

      {/* All / filtered destinations */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">
            {activeMood
              ? `${moods.find(m => m.id === activeMood)?.icon} ${moods.find(m => m.id === activeMood)?.label}`
              : 'All Destinations'}
          </h2>
          <span className="text-gray-500 text-sm">{filtered.length} places</span>
        </div>
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <p>No destinations match this vibe yet.</p>
            <button onClick={() => setActiveMood(null)} className="mt-3 text-blue-400 hover:text-blue-300 text-sm">
              Clear filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map(d => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
        )}
      </section>

      {/* Community Highlights teaser */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mt-14">
        <div className="rounded-2xl bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/15 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">See where other travellers went</h3>
            <p className="text-gray-400 text-sm">Thousands of real itineraries from the Limitless community — clone any trip and make it yours.</p>
          </div>
          <button
            onClick={() => navigate('/community')}
            className="flex-shrink-0 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-full transition-colors"
          >
            Browse trips
          </button>
        </div>
      </section>
    </main>
  )
}
