'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { loadState, saveState, type AppState } from '@/lib/state'

export default function ConfirmedPage() {
  const router = useRouter()
  const [state, setState] = useState<AppState | null>(null)

  useEffect(() => {
    const s = loadState()
    if (!s.riderName) {
      router.replace('/')
      return
    }
    saveState({ trackingState: 0 })
    setState(s)
  }, [router])

  if (!state) return null

  return (
    <div className="mobile-container bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-5 pb-3">
        <button type="button" onClick={() => router.back()} className="text-on-surface p-1">
          ←
        </button>
        <div className="text-on-surface font-bold text-base">Dispatch ho gaya.</div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-6 pb-4">

        {/* Siren */}
        <div className="flex flex-col items-center text-center pt-4 mb-6">
          <div
            className="pulse-glow w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4"
            style={{ background: '#FF2D55' }}
          >
            🚨
          </div>
          <h1 className="text-on-surface text-2xl font-black mb-1">Dispatch ho gaya.</h1>
          <p className="text-on-surface-variant text-base">Rider nikal pada.</p>
        </div>

        {/* Rider card */}
        <div className="glass-panel rounded-2xl p-5 mb-3 text-left">
          <div className="text-on-surface-variant text-xs font-mono uppercase tracking-widest mb-4">
            Assigned Officer
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-2xl">
              👮
            </div>
            <div>
              <div className="text-on-surface font-black text-lg">{state.riderName}</div>
              <div className="text-on-surface-variant text-xs">Inspector · Zepto Police</div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-success text-sm">●</span>
            <span className="text-on-surface-variant text-xs font-mono">On duty · Case active</span>
          </div>
        </div>

        {/* ETA */}
        <div className="glass-panel rounded-2xl px-5 py-4 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-on-surface-variant text-xs font-mono uppercase tracking-widest mb-1">
                Est. Delivery
              </div>
              <div className="text-on-surface font-black text-2xl">{state.deliveryTime}</div>
            </div>
            <span className="text-3xl">⚡</span>
          </div>
        </div>

        {/* FIR teaser — locked */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Blurred FIR skeleton */}
          <div style={{ filter: 'blur(3px)', userSelect: 'none', pointerEvents: 'none' }}>
            <div className="px-4 py-3 flex items-center justify-between" style={{ background: '#3b0900' }}>
              <div>
                <div className="text-xs tracking-widest uppercase font-bold" style={{ color: '#F5F0E8' }}>
                  First Information Report
                </div>
                <div className="text-xs opacity-50" style={{ color: '#F5F0E8' }}>
                  Zepto Chor Police Dept.
                </div>
              </div>
              <span className="text-xl">🚨</span>
            </div>
            <div className="px-5 py-5 space-y-3" style={{ background: '#F5F0E8' }}>
              <div className="h-2.5 rounded-full w-3/4" style={{ background: 'rgba(59,9,0,0.15)' }} />
              <div className="h-2.5 rounded-full w-1/2" style={{ background: 'rgba(59,9,0,0.15)' }} />
              <div className="h-2.5 rounded-full w-5/6" style={{ background: 'rgba(59,9,0,0.15)' }} />
              <div className="h-6 rounded w-1/3 mt-2" style={{ background: 'rgba(59,9,0,0.1)' }} />
            </div>
          </div>

          {/* Lock overlay */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2"
            style={{ background: 'rgba(26,10,46,0.78)' }}
          >
            <span className="text-4xl">🔒</span>
            <p className="text-white font-black text-sm tracking-wide">Your FIR is being prepared.</p>
            <p className="text-white/55 text-xs font-mono">Track the arrest to unlock.</p>
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="px-4 pb-6 pt-3">
        <button
          type="button"
          onClick={() => router.push('/tracking')}
          className="btn-primary w-full text-on-primary-container font-black text-sm tracking-widest py-4 rounded-full"
          style={{ background: '#FF2D55' }}
        >
          TRACK THE ARREST →
        </button>
      </div>
    </div>
  )
}
