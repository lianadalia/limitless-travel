import { useNavigate } from 'react-router-dom'
import { CheckCircle, Share2, Download, Home } from 'lucide-react'

export default function Confirmation() {
  const navigate = useNavigate()

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4 pb-24 md:pb-8">
      <div className="max-w-sm w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-500/15 rounded-full flex items-center justify-center">
            <CheckCircle size={40} className="text-green-400" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white mb-2">Trip saved!</h1>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
          Your trip is ready. Share it with travel companions or export it to keep things organised.
        </p>

        <div className="space-y-3 mb-8">
          <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-left">
            <p className="text-gray-500 text-xs mb-1">Trip name</p>
            <p className="text-white text-sm font-medium">My Limitless Trip</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-left">
              <p className="text-gray-500 text-xs mb-1">Duration</p>
              <p className="text-white text-sm font-medium">3 days</p>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-left">
              <p className="text-gray-500 text-xs mb-1">Est. budget</p>
              <p className="text-white text-sm font-medium">£420</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-2xl transition-colors">
            <Share2 size={16} />
            Share with travel companions
          </button>
          <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-2xl transition-colors">
            <Download size={16} />
            Export as PDF
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center justify-center gap-2 py-3 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <Home size={15} />
            Back to Discover
          </button>
        </div>
      </div>
    </main>
  )
}
