import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Discover from './pages/Discover'
import Search from './pages/Search'
import Destination from './pages/Destination'
import TripPlanner from './pages/TripPlanner'
import Community from './pages/Community'
import Confirmation from './pages/Confirmation'
import Nav from './components/Nav'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0A0A0F] text-gray-100">
        <Nav />
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/search" element={<Search />} />
          <Route path="/destination/:id" element={<Destination />} />
          <Route path="/plan" element={<TripPlanner />} />
          <Route path="/community" element={<Community />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
