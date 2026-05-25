'use client'
import { useRouter } from 'next/navigation'

export default function AppHomePage() {
  const router = useRouter()

  return (
    <div className="mobile-container bg-background flex flex-col">
      {/* Top nav */}
      <div className="flex items-center justify-between px-4 pt-5 pb-3">
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => router.back()} className="text-on-surface p-1">
            ←
          </button>
          <div className="text-on-surface font-black text-xl tracking-tight">zepto</div>
        </div>
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
        className="mx-4 mb-4 rounded-2xl overflow-hidden cursor-pointer active:scale-[0.97] transition-transform banner-glow"
        onClick={() => router.push('/listing')}
      >
        {/* Top alert band */}
        <div
          className="flex items-center justify-between px-4 py-2"
          style={{ background: 'rgba(0,0,0,0.35)' }}
        >
          <div className="flex items-center gap-2">
            <span className="blink-dot w-2 h-2 rounded-full bg-green-400 inline-block" />
            <span className="text-white text-xs font-mono tracking-widest">LIVE ALERT</span>
          </div>
          <span className="text-white/60 text-xs font-mono tracking-widest">CASE #ZPT-2026</span>
        </div>

        {/* Main content */}
        <div
          className="px-5 pt-4 pb-4 flex items-end justify-between"
          style={{ background: 'linear-gradient(135deg, #FF2D55 0%, #8B2FC9 100%)' }}
        >
          <div className="flex-1">
            <div className="text-white text-2xl font-black leading-tight mb-2">
              Teri craving<br />bhaag rahi hai.
            </div>
            <div className="text-white/80 text-sm font-mono">
              Zepto Police dispatch ho gayi. →
            </div>
          </div>

          {/* Chase visual */}
          <div className="flex flex-col items-center gap-0.5 ml-4">
            <span className="text-4xl animate-bounce">🍦</span>
            <span className="text-white/50 text-xs font-mono leading-none">·  ·  ·</span>
            <span className="text-4xl">👮</span>
          </div>
        </div>

        {/* Ticker */}
        <div
          className="overflow-hidden py-2"
          style={{ background: 'rgba(0,0,0,0.3)' }}
        >
          <span className="ticker-track text-white/70 text-xs font-mono">
            🚨 Craving spotted in your area &nbsp;·&nbsp; Zepto Police dispatched &nbsp;·&nbsp; 10 min window closing &nbsp;·&nbsp; Pakad lo pehle bhaag jaaye &nbsp;·&nbsp; 🚨 Craving spotted in your area &nbsp;·&nbsp; Zepto Police dispatched &nbsp;·&nbsp; 10 min window closing &nbsp;·&nbsp; Pakad lo pehle bhaag jaaye &nbsp;·&nbsp;
          </span>
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
