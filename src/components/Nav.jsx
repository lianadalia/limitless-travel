import { Link, useLocation } from 'react-router-dom'
import { Compass, Search, Map, Users, User } from 'lucide-react'

const links = [
  { to: '/', label: 'Discover', Icon: Compass },
  { to: '/search', label: 'Search', Icon: Search },
  { to: '/plan', label: 'My Trips', Icon: Map },
  { to: '/community', label: 'Community', Icon: Users },
]

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <>
      {/* Desktop top nav */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-8 h-16 bg-[#0A0A0F]/90 backdrop-blur border-b border-white/5">
        <Link to="/" className="text-xl font-bold tracking-tight text-white">
          limitless<span className="text-blue-400">.</span>
        </Link>
        <div className="flex gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors ${
                pathname === to ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Log in
          </button>
          <button className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-full transition-colors">
            Get started
          </button>
        </div>
      </nav>

      {/* Mobile bottom tab bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-white/5 bg-[#0A0A0F]/95 backdrop-blur">
        {links.map(({ to, label, Icon }) => (
          <Link
            key={to}
            to={to}
            className={`flex flex-col items-center justify-center flex-1 py-3 gap-1 text-xs transition-colors ${
              pathname === to ? 'text-blue-400' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <Icon size={20} />
            {label}
          </Link>
        ))}
        <Link
          to="/profile"
          className="flex flex-col items-center justify-center flex-1 py-3 gap-1 text-xs text-gray-500 hover:text-gray-300"
        >
          <User size={20} />
          Profile
        </Link>
      </nav>

      {/* Desktop spacer */}
      <div className="hidden md:block h-16" />
    </>
  )
}
