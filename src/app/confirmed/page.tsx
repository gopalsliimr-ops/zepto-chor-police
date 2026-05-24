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

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center pb-4">
        {/* Siren pulse */}
        <div className="relative mb-8">
          <div
            className="pulse-glow w-24 h-24 rounded-full flex items-center justify-center text-5xl"
            style={{ background: '#ff5167' }}
          >
            🚨
          </div>
        </div>

        <h1 className="text-on-surface text-3xl font-black mb-2">Dispatch ho gaya.</h1>
        <p className="text-on-surface-variant text-lg mb-10">Rider nikal pada.</p>

        {/* Rider card */}
        <div className="w-full glass-panel rounded-2xl p-5 mb-4 text-left">
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
            <span className="text-on-surface-variant text-xs font-mono">
              On duty · Case active
            </span>
          </div>
        </div>

        {/* Delivery ETA */}
        <div className="w-full glass-panel rounded-2xl px-5 py-4">
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
      </div>

      {/* CTA */}
      <div className="px-4 pb-6 pt-3">
        <button
          type="button"
          onClick={() => router.push('/tracking')}
          className="btn-primary w-full text-on-primary-container font-black text-sm tracking-widest py-4 rounded-2xl"
          style={{ background: '#ff5167' }}
        >
          TRACK KARO →
        </button>
      </div>
    </div>
  )
}
