'use client'
import { useRouter } from 'next/navigation'

export default function AppHomePage() {
  const router = useRouter()

  return (
    <div className="mobile-container bg-background flex flex-col">
      {/* Top nav */}
      <div className="flex items-center justify-between px-4 pt-5 pb-3">
        <div className="text-on-surface font-black text-xl tracking-tight">zepto</div>
        <div className="flex items-center gap-1 bg-surface-container rounded-full px-3 py-1.5">
          <span className="text-on-surface-variant text-xs">📍</span>
          <span className="text-on-surface-variant text-xs font-medium">Bandra, Mumbai</span>
          <span className="text-on-surface-variant text-xs">▾</span>
        </div>
        <div className="w-8 h-8 bg-surface-container rounded-full flex items-center justify-center">
          <span className="text-base">🔔</span>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 mb-4">
        <div className="bg-surface-container rounded-2xl px-4 py-3 flex items-center gap-2">
          <span className="text-on-surface-variant">🔍</span>
          <span className="text-on-surface-variant text-sm">Search ice creams, snacks...</span>
        </div>
      </div>

      {/* ⬇ Campaign Banner — PRIMARY ENTRY POINT */}
      <div
        className="mx-4 mb-4 rounded-2xl p-5 cursor-pointer active:scale-95 transition-transform overflow-hidden relative"
        style={{ background: 'linear-gradient(135deg, #ff5167 0%, #8B2FC9 100%)' }}
        onClick={() => router.push('/listing')}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="text-white/80 text-xs font-mono tracking-widest uppercase mb-2">
              🚨 ACTIVE OPERATION
            </div>
            <div className="text-white text-2xl font-black leading-tight mb-1">
              Chor Police<br />active hai.
            </div>
            <div className="text-white/80 text-sm">
              Pakad lo pehle bhaag jaaye →
            </div>
          </div>
          <div className="text-6xl ml-4 -mt-1">👮</div>
        </div>
      </div>

      {/* Delivery promise strip */}
      <div className="mx-4 mb-4 flex items-center gap-3 bg-surface-container rounded-2xl px-4 py-3">
        <span className="text-xl">⚡</span>
        <div>
          <div className="text-on-surface text-sm font-bold">10-minute delivery</div>
          <div className="text-on-surface-variant text-xs">Craving se pehle pohonchta hai</div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mb-4">
        <div className="text-on-surface font-bold text-sm mb-3">Categories</div>
        <div className="grid grid-cols-4 gap-2">
          {[
            { emoji: '🍦', label: 'Ice Cream' },
            { emoji: '🍕', label: 'Snacks' },
            { emoji: '🥤', label: 'Drinks' },
            { emoji: '🍫', label: 'Sweets' },
          ].map((cat) => (
            <div
              key={cat.label}
              className="bg-surface-container rounded-2xl p-3 text-center cursor-pointer"
              onClick={() => router.push('/listing')}
            >
              <div className="text-2xl mb-1">{cat.emoji}</div>
              <div className="text-on-surface-variant text-xs">{cat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom nav */}
      <div className="border-t border-outline-variant bg-background">
        <div className="flex items-center justify-around py-3 px-4">
          {[
            { icon: '🏠', label: 'Home', active: true },
            { icon: '🔍', label: 'Search', active: false },
            { icon: '🛒', label: 'Cart', active: false },
            { icon: '👤', label: 'Profile', active: false },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1 opacity-60">
              <span className="text-xl">{item.icon}</span>
              <span className="text-on-surface-variant text-xs">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
