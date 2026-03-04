import { Link } from 'react-router-dom'
import { Star, Clock } from 'lucide-react'

export default function DestinationCard({ destination, size = 'md' }) {
  const { id, name, country, thumb, tagline, vibes, budget, rating, reviewCount, bestMonths } = destination

  if (size === 'lg') {
    return (
      <Link to={`/destination/${id}`} className="group relative block rounded-2xl overflow-hidden aspect-[4/3]">
        <img src={thumb} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex gap-1.5 mb-2 flex-wrap">
            {vibes.slice(0, 2).map(v => (
              <span key={v} className="px-2 py-0.5 bg-white/10 backdrop-blur text-xs text-white rounded-full">{v}</span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-gray-300 text-sm">{country}</p>
          <p className="text-gray-400 text-xs mt-1 line-clamp-2">{tagline}</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="flex items-center gap-1 text-yellow-400 text-xs">
              <Star size={11} fill="currentColor" />
              {rating}
              <span className="text-gray-400">({reviewCount.toLocaleString()})</span>
            </span>
            <span className="text-gray-400 text-xs">From £{budget.min}/{budget.unit}</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/destination/${id}`} className="group block rounded-xl overflow-hidden bg-white/5 hover:bg-white/8 transition-colors border border-white/5">
      <div className="relative aspect-[3/2] overflow-hidden">
        <img src={thumb} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-2 left-3 flex gap-1">
          {vibes.slice(0, 2).map(v => (
            <span key={v} className="px-1.5 py-0.5 bg-black/40 backdrop-blur text-[10px] text-white rounded-full">{v}</span>
          ))}
        </div>
      </div>
      <div className="p-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-white text-sm">{name}</h3>
            <p className="text-gray-400 text-xs">{country}</p>
          </div>
          <span className="flex items-center gap-0.5 text-yellow-400 text-xs">
            <Star size={10} fill="currentColor" />
            {rating}
          </span>
        </div>
        <p className="text-gray-500 text-xs mt-1.5 line-clamp-1">{tagline}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-blue-400 text-xs font-medium">From £{budget.min}/{budget.unit}</span>
          <span className="flex items-center gap-1 text-gray-500 text-xs">
            <Clock size={10} />
            {bestMonths.split('–')[0].trim()}
          </span>
        </div>
      </div>
    </Link>
  )
}
