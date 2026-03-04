import { useParams, useNavigate } from 'react-router-dom'
import { Star, Clock, Plane, Wifi, Users, ArrowLeft, Heart, ChevronRight } from 'lucide-react'
import { destinations } from '../data/destinations'

function ScoreDots({ score, max = 5, color = 'bg-blue-400' }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <div key={i} className={`w-2 h-2 rounded-full ${i < score ? color : 'bg-white/10'}`} />
      ))}
    </div>
  )
}

export default function Destination() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dest = destinations.find(d => d.id === id)

  if (!dest) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-500">
        <p>Destination not found.</p>
        <button onClick={() => navigate('/')} className="mt-3 text-blue-400">Back to Discover</button>
      </div>
    )
  }

  return (
    <main className="pb-32 md:pb-16">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[380px]">
        <img src={dest.hero} alt={dest.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/30 to-transparent" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 left-4 p-2 bg-black/40 backdrop-blur rounded-full text-white hover:bg-black/60 transition-colors"
        >
          <ArrowLeft size={18} />
        </button>
        <button className="absolute top-5 right-4 p-2 bg-black/40 backdrop-blur rounded-full text-white hover:bg-black/60 transition-colors">
          <Heart size={18} />
        </button>
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-8">
          <div className="flex gap-2 mb-2 flex-wrap">
            {dest.vibes.map(v => (
              <span key={v} className="px-2.5 py-1 bg-white/10 backdrop-blur text-xs text-white rounded-full">{v}</span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">{dest.name}</h1>
          <p className="text-gray-300 text-lg">{dest.country}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 mt-6 space-y-10">
        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: Star, label: 'Rating', value: `${dest.rating} (${(dest.reviewCount / 1000).toFixed(1)}k reviews)`, color: 'text-yellow-400' },
            { icon: Clock, label: 'Best time', value: dest.bestMonths, color: 'text-green-400' },
            { icon: Plane, label: 'Flights', value: dest.flightsFrom, color: 'text-blue-400' },
            { icon: Plane, label: 'Flight time', value: dest.flightTime, color: 'text-purple-400' },
          ].map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="bg-white/5 rounded-xl p-3 border border-white/5">
              <Icon size={14} className={`${color} mb-1.5`} />
              <p className="text-gray-500 text-xs">{label}</p>
              <p className="text-white text-sm font-medium mt-0.5">{value}</p>
            </div>
          ))}
        </div>

        {/* Editorial */}
        <section>
          <h2 className="text-xl font-bold text-white mb-3">About {dest.name}</h2>
          <p className="text-gray-300 leading-relaxed">{dest.editorial}</p>
        </section>

        {/* Scores (nomad + family) */}
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/5 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Wifi size={14} className="text-blue-400" />
              <span className="text-sm font-medium text-white">Nomad score</span>
            </div>
            <ScoreDots score={dest.nomadScore} color="bg-blue-400" />
            <p className="text-gray-500 text-xs mt-2">
              {dest.nomadScore >= 4 ? 'Excellent for remote work' : dest.nomadScore >= 3 ? 'Good for nomads' : 'Limited nomad infrastructure'}
            </p>
          </div>
          <div className="bg-white/5 border border-white/5 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users size={14} className="text-green-400" />
              <span className="text-sm font-medium text-white">Family score</span>
            </div>
            <ScoreDots score={dest.familyScore} color="bg-green-400" />
            <p className="text-gray-500 text-xs mt-2">
              {dest.familyScore >= 4 ? 'Great for families' : dest.familyScore >= 3 ? 'Good with older kids' : 'Best for adults'}
            </p>
          </div>
        </section>

        {/* Practical */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">Practical info</h2>
          <div className="space-y-2">
            {[
              ['Visa', dest.visa],
              ['Budget', `£${dest.budget.min}–£${dest.budget.max} per day`],
              ['Best months', dest.bestMonths],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-3 py-3 border-b border-white/5">
                <span className="text-gray-500 text-sm w-28 flex-shrink-0">{label}</span>
                <span className="text-white text-sm">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Activities */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">Things to do</h2>
          <div className="space-y-2">
            {dest.activities.map(a => (
              <div key={a.name} className="flex items-center justify-between py-3 border-b border-white/5">
                <div>
                  <p className="text-white text-sm">{a.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{a.type}</p>
                </div>
                <span className="text-gray-400 text-xs">{a.duration}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-4 z-40 px-4 pb-20 md:pb-0">
        <div className="max-w-sm mx-auto flex gap-3">
          <button
            onClick={() => navigate('/plan', { state: { destination: dest } })}
            className="flex-1 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-2xl transition-colors flex items-center justify-center gap-2"
          >
            Start planning
            <ChevronRight size={16} />
          </button>
          <button className="px-4 py-3.5 bg-white/10 hover:bg-white/15 rounded-2xl transition-colors">
            <Heart size={18} className="text-white" />
          </button>
        </div>
      </div>
    </main>
  )
}
