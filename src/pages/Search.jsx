import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { SlidersHorizontal, MapPin, Star, Wifi } from 'lucide-react'
import { destinations } from '../data/destinations'

const VIBES = ['Wilderness', 'City Break', 'Beach', 'Food', 'Adventure', 'Luxury', 'Nomad-friendly', 'Family', 'Culture']

export default function Search() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [budget, setBudget] = useState(400)
  const [selectedVibes, setSelectedVibes] = useState([])
  const [mode, setMode] = useState('all') // all | nomad | family | luxury
  const [showFilters, setShowFilters] = useState(false)

  const results = useMemo(() => {
    return destinations.filter(d => {
      const matchQuery = !query || d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.country.toLowerCase().includes(query.toLowerCase()) ||
        d.region.toLowerCase().includes(query.toLowerCase()) ||
        d.vibes.some(v => v.toLowerCase().includes(query.toLowerCase()))
      const matchBudget = d.budget.max <= budget
      const matchVibes = selectedVibes.length === 0 || selectedVibes.some(v => d.vibes.includes(v))
      const matchMode = mode === 'all' ||
        (mode === 'nomad' && d.nomadScore >= 4) ||
        (mode === 'family' && d.familyScore >= 4) ||
        (mode === 'luxury' && d.budget.min >= 80)
      return matchQuery && matchBudget && matchVibes && matchMode
    })
  }, [query, budget, selectedVibes, mode])

  function toggleVibe(v) {
    setSelectedVibes(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v])
  }

  return (
    <main className="pb-24 md:pb-8 pt-4 md:pt-8 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Search bar */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder='Try "cold and dramatic" or "Faroe Islands"'
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm outline-none focus:border-blue-500 transition-colors"
        />
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
            showFilters ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
          }`}
        >
          <SlidersHorizontal size={16} />
          <span className="hidden sm:inline">Filters</span>
        </button>
      </div>

      {/* Mode switcher */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
        {[
          { id: 'all', label: 'All trips' },
          { id: 'family', label: '👨‍👩‍👧 Family' },
          { id: 'nomad', label: '💻 Nomad' },
          { id: 'luxury', label: '✨ Luxury' },
        ].map(m => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              mode === m.id ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Filters panel */}
      {showFilters && (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Max daily budget: <span className="text-blue-400">£{budget}</span>
            </label>
            <input
              type="range"
              min={30}
              max={500}
              step={10}
              value={budget}
              onChange={e => setBudget(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>£30</span><span>£500+</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-white mb-2">Vibes</p>
            <div className="flex flex-wrap gap-2">
              {VIBES.map(v => (
                <button
                  key={v}
                  onClick={() => toggleVibe(v)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedVibes.includes(v) ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Results header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-400 text-sm">
          <span className="text-white font-medium">{results.length}</span> destinations
        </p>
        <button className="text-gray-500 text-xs hover:text-gray-300">Sort: Recommended</button>
      </div>

      {/* Results */}
      {results.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <MapPin size={32} className="mx-auto mb-3 opacity-30" />
          <p>No destinations match. Try adjusting your filters.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {results.map(d => (
            <div
              key={d.id}
              onClick={() => navigate(`/destination/${d.id}`)}
              className="flex gap-4 bg-white/5 hover:bg-white/8 border border-white/5 rounded-xl overflow-hidden cursor-pointer transition-colors group"
            >
              <img
                src={d.thumb}
                alt={d.name}
                className="w-28 md:w-44 object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex-1 py-4 pr-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-white">{d.name}</h3>
                    <p className="text-gray-500 text-sm">{d.country} · {d.region}</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="text-white font-semibold text-sm">From £{d.budget.min}</p>
                    <p className="text-gray-500 text-xs">/{d.budget.unit}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mt-2 line-clamp-2 hidden sm:block">{d.tagline}</p>
                <div className="flex items-center gap-3 mt-3 flex-wrap">
                  <span className="flex items-center gap-1 text-yellow-400 text-xs">
                    <Star size={11} fill="currentColor" />
                    {d.rating} ({d.reviewCount.toLocaleString()})
                  </span>
                  {mode === 'nomad' && (
                    <span className="flex items-center gap-1 text-blue-400 text-xs">
                      <Wifi size={11} />
                      Nomad score: {d.nomadScore}/5
                    </span>
                  )}
                  {d.vibes.slice(0, 3).map(v => (
                    <span key={v} className="px-2 py-0.5 bg-white/5 text-gray-400 text-xs rounded-full">{v}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
