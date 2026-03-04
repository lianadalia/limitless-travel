import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Plus, Trash2, GripVertical, CheckSquare, Square, ChevronRight, Users, CalendarDays } from 'lucide-react'

const defaultActivities = [
  { id: 1, day: 1, time: '10:00', name: 'Arrive & check in', type: 'Logistics', done: false },
  { id: 2, day: 1, time: '14:00', name: 'Old Town walk', type: 'Culture', done: false },
  { id: 3, day: 1, time: '19:00', name: 'Dinner at local restaurant', type: 'Food', done: false },
  { id: 4, day: 2, time: '09:00', name: 'Morning hike / landmark', type: 'Hiking', done: false },
  { id: 5, day: 2, time: '15:00', name: 'Local market explore', type: 'Culture', done: false },
  { id: 6, day: 3, time: '10:00', name: 'Day trip to nearby site', type: 'Excursion', done: false },
]

const checklistItems = [
  { id: 1, label: 'Check passport expiry (6 months required)', done: false },
  { id: 2, label: 'Get travel insurance', done: false },
  { id: 3, label: 'Check visa requirements', done: true },
  { id: 4, label: 'Book airport transfers', done: false },
  { id: 5, label: 'Download offline maps', done: false },
  { id: 6, label: 'Notify bank of travel dates', done: false },
]

export default function TripPlanner() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const destination = state?.destination

  const [tripName, setTripName] = useState(destination ? `${destination.name} Trip` : 'My Trip')
  const [days, setDays] = useState(3)
  const [activities, setActivities] = useState(defaultActivities)
  const [checklist, setChecklist] = useState(checklistItems)
  const [activeDay, setActiveDay] = useState(1)
  const [tab, setTab] = useState('itinerary') // itinerary | checklist | budget
  const [newActivity, setNewActivity] = useState('')

  const dayActivities = activities.filter(a => a.day === activeDay)

  function addActivity() {
    if (!newActivity.trim()) return
    setActivities(prev => [...prev, {
      id: Date.now(),
      day: activeDay,
      time: '12:00',
      name: newActivity,
      type: 'Custom',
      done: false,
    }])
    setNewActivity('')
  }

  function removeActivity(id) {
    setActivities(prev => prev.filter(a => a.id !== id))
  }

  function toggleChecklist(id) {
    setChecklist(prev => prev.map(c => c.id === id ? { ...c, done: !c.done } : c))
  }

  const budget = destination ? {
    flights: destination.budget.min * 0.4 * days,
    accommodation: destination.budget.min * 0.35 * days,
    activities: destination.budget.min * 0.15 * days,
    food: destination.budget.min * 0.10 * days,
  } : { flights: 180, accommodation: 140, activities: 60, food: 40 }

  const totalBudget = Object.values(budget).reduce((a, b) => a + b, 0)

  return (
    <main className="pb-28 md:pb-10 max-w-3xl mx-auto px-4 pt-4 md:pt-8">
      {/* Header */}
      <div className="mb-6">
        <input
          value={tripName}
          onChange={e => setTripName(e.target.value)}
          className="text-2xl font-bold text-white bg-transparent border-none outline-none w-full"
        />
        {destination && (
          <p className="text-gray-400 text-sm mt-1 flex items-center gap-2">
            <span>📍 {destination.name}, {destination.country}</span>
          </p>
        )}
        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <CalendarDays size={14} />
            <span>{days} days</span>
            <button onClick={() => setDays(d => Math.max(1, d - 1))} className="ml-1 px-2 py-0.5 bg-white/5 rounded text-xs">−</button>
            <button onClick={() => setDays(d => d + 1)} className="px-2 py-0.5 bg-white/5 rounded text-xs">+</button>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Users size={14} />
            <button
              onClick={() => navigate('/confirmation')}
              className="text-blue-400 hover:text-blue-300 text-xs"
            >
              Invite collaborator
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10 mb-5">
        {['itinerary', 'checklist', 'budget'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2.5 text-sm font-medium capitalize transition-colors border-b-2 -mb-px ${
              tab === t ? 'border-blue-500 text-white' : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Itinerary tab */}
      {tab === 'itinerary' && (
        <>
          {/* Day selector */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-5">
            {Array.from({ length: days }, (_, i) => i + 1).map(d => (
              <button
                key={d}
                onClick={() => setActiveDay(d)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeDay === d ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                Day {d}
              </button>
            ))}
          </div>

          {/* Activities list */}
          <div className="space-y-2 mb-4">
            {dayActivities.length === 0 && (
              <p className="text-center text-gray-600 py-8 text-sm">No activities yet for Day {activeDay}.</p>
            )}
            {dayActivities.map(a => (
              <div key={a.id} className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl px-4 py-3 group">
                <GripVertical size={14} className="text-gray-600 cursor-grab flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium">{a.name}</p>
                  <p className="text-gray-500 text-xs">{a.time} · {a.type}</p>
                </div>
                <button
                  onClick={() => removeActivity(a.id)}
                  className="opacity-0 group-hover:opacity-100 p-1 text-gray-600 hover:text-red-400 transition-all"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            ))}
          </div>

          {/* Add activity */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add an activity…"
              value={newActivity}
              onChange={e => setNewActivity(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addActivity()}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 text-sm outline-none focus:border-blue-500"
            />
            <button
              onClick={addActivity}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-white transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        </>
      )}

      {/* Checklist tab */}
      {tab === 'checklist' && (
        <div className="space-y-2">
          {checklist.map(item => (
            <button
              key={item.id}
              onClick={() => toggleChecklist(item.id)}
              className="flex items-center gap-3 w-full text-left bg-white/5 hover:bg-white/8 border border-white/5 rounded-xl px-4 py-3 transition-colors"
            >
              {item.done ? (
                <CheckSquare size={16} className="text-green-400 flex-shrink-0" />
              ) : (
                <Square size={16} className="text-gray-600 flex-shrink-0" />
              )}
              <span className={`text-sm ${item.done ? 'line-through text-gray-600' : 'text-white'}`}>
                {item.label}
              </span>
            </button>
          ))}
          <p className="text-gray-600 text-xs text-center pt-2">
            {checklist.filter(c => c.done).length}/{checklist.length} complete
          </p>
        </div>
      )}

      {/* Budget tab */}
      {tab === 'budget' && (
        <div className="space-y-4">
          <div className="bg-white/5 border border-white/5 rounded-2xl p-5">
            <p className="text-gray-400 text-sm mb-1">Estimated total ({days} days)</p>
            <p className="text-3xl font-bold text-white">£{Math.round(totalBudget)}</p>
          </div>
          <div className="space-y-2">
            {Object.entries(budget).map(([key, val]) => (
              <div key={key} className="flex items-center justify-between py-3 border-b border-white/5">
                <span className="text-gray-400 text-sm capitalize">{key}</span>
                <span className="text-white text-sm font-medium">£{Math.round(val)}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-xs">Estimates based on mid-range travel style. Tap any category to adjust.</p>
        </div>
      )}

      {/* Confirm CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 pb-20 md:pb-4 max-w-3xl mx-auto">
        <button
          onClick={() => navigate('/confirmation')}
          className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-2xl transition-colors flex items-center justify-center gap-2"
        >
          Confirm trip <ChevronRight size={16} />
        </button>
      </div>
    </main>
  )
}
