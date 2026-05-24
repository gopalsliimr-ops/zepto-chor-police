'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { loadState, saveState, TRACKING_STATES } from '@/lib/state'

// SVG positions along path M 55 200 Q 175 160 295 45 for each of 5 states
const RIDER_POSITIONS = [
  { cx: 65, cy: 195 },
  { cx: 120, cy: 170 },
  { cx: 175, cy: 140 },
  { cx: 235, cy: 100 },
  { cx: 290, cy: 50 },
]

export default function TrackingPage() {
  const router = useRouter()
  const [trackingState, setTrackingState] = useState(0)
  const [riderName, setRiderName] = useState('Rider')

  useEffect(() => {
    const s = loadState()
    setTrackingState(s.trackingState ?? 0)
    setRiderName(s.riderName || 'Rider')
  }, [])

  function advance() {
    const current = TRACKING_STATES[trackingState]
    if (current?.final) {
      router.push('/fir')
      return
    }
    const next = trackingState + 1
    saveState({ trackingState: next })
    setTrackingState(next)
  }

  const current = TRACKING_STATES[trackingState]
  const riderPos = RIDER_POSITIONS[trackingState]

  return (
    <div className="mobile-container bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-5 pb-3">
        <button type="button" onClick={() => router.back()} className="text-on-surface p-1">
          ←
        </button>
        <div className="text-on-surface font-bold text-base flex-1">Live Tracking</div>
        <div className="flex items-center gap-1.5">
          <span className="text-success text-xs">●</span>
          <span className="text-success text-xs font-mono font-bold">LIVE</span>
        </div>
      </div>

      {/* Map */}
      <div className="mx-4 rounded-2xl overflow-hidden mb-4 relative" style={{ height: '220px' }}>
        {/* Dot grid background */}
        <div className="map-pattern absolute inset-0 bg-surface-container" />

        <svg
          className="absolute inset-0"
          width="100%"
          height="100%"
          viewBox="0 0 358 220"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Full route — dashed */}
          <path
            d="M 55 200 Q 175 155 295 45"
            fill="none"
            stroke="rgba(255,81,103,0.3)"
            strokeWidth="2"
            strokeDasharray="6 4"
          />

          {/* Completed portion — solid */}
          <path
            d={`M 55 200 L ${riderPos.cx} ${riderPos.cy}`}
            fill="none"
            stroke="#ff5167"
            strokeWidth="2.5"
          />

          {/* Home marker */}
          <circle cx="295" cy="45" r="14" fill="#22C55E" />
          <text x="295" y="50" textAnchor="middle" fontSize="14">🏠</text>

          {/* Rider dot */}
          <circle
            cx={riderPos.cx}
            cy={riderPos.cy}
            r="16"
            fill="#ff5167"
            style={{ transition: 'cx 0.7s ease-in-out, cy 0.7s ease-in-out' }}
          />
          <text
            x={riderPos.cx}
            y={riderPos.cy + 5}
            textAnchor="middle"
            fontSize="14"
            style={{ transition: 'x 0.7s ease-in-out, y 0.7s ease-in-out' }}
          >
            🛵
          </text>
        </svg>

        {/* Rider name label */}
        <div className="absolute bottom-3 left-3 bg-background/80 rounded-lg px-2 py-1 backdrop-blur-sm">
          <span className="text-on-surface text-xs font-mono">{riderName}</span>
        </div>
      </div>

      {/* Status card */}
      <div className="mx-4 glass-panel rounded-2xl p-5 mb-4">
        <div className="flex items-baseline justify-between mb-3">
          <div
            className="font-black text-3xl font-mono"
            style={{ color: current?.final ? '#22C55E' : '#ff5167' }}
          >
            {current?.distance}
          </div>
          {!current?.final && (
            <div className="text-on-surface-variant text-xs font-mono">away</div>
          )}
        </div>
        <div className="text-on-surface font-bold text-sm mb-1">{current?.copy}</div>
        <div className="text-on-surface-variant text-xs font-mono">{current?.sub}</div>

        {/* Progress bar */}
        <div className="flex items-center gap-1.5 mt-4">
          {TRACKING_STATES.map((_, i) => (
            <div
              key={i}
              className="h-1.5 flex-1 rounded-full transition-all duration-500"
              style={{
                background: i <= trackingState ? '#ff5167' : 'rgba(255,255,255,0.1)',
              }}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-6 pt-2 mt-auto">
        <button
          type="button"
          onClick={advance}
          className="btn-primary w-full text-on-primary-container font-black text-sm tracking-widest py-4 rounded-2xl"
          style={{ background: current?.final ? '#22C55E' : '#ff5167' }}
        >
          {current?.final ? 'FIR DEKHO →' : 'AAGE BADHAO →'}
        </button>
      </div>
    </div>
  )
}
