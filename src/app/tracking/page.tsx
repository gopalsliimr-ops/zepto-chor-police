'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { loadState, saveState, resetJourney, TRACKING_STATES, type AppState } from '@/lib/state'

const RIDER_POSITIONS = [
  { cx: 65,  cy: 165 },
  { cx: 120, cy: 140 },
  { cx: 175, cy: 110 },
  { cx: 235, cy: 75  },
  { cx: 290, cy: 28  },
]

// How far right the cop has moved (% from left of chase strip)
const COP_LEFT = ['2%', '20%', '38%', '56%', '72%']

const FIR_PROGRESS = [
  { label: 'Case file: Filing report...', pct: 15  },
  { label: 'Case file: 40% complete',     pct: 40  },
  { label: 'Case file: 70% complete',     pct: 70  },
  { label: 'Case file: 90% complete',     pct: 90  },
  { label: 'Case file: READY ✓',          pct: 100 },
]

const AUTO_ADVANCE_MS = 3500

export default function TrackingPage() {
  const router = useRouter()
  const [trackingState, setTrackingState] = useState(0)
  const [appState, setAppState] = useState<AppState | null>(null)
  const [today, setToday] = useState('')
  const [downloading, setDownloading] = useState(false)
  const firRef = useRef<HTMLDivElement>(null)
  const firSectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const s = loadState()
    setTrackingState(s.trackingState ?? 0)
    setAppState(s)
    setToday(new Date().toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' }))
  }, [])

  // Auto-advance
  useEffect(() => {
    const current = TRACKING_STATES[trackingState]
    if (current?.final) {
      setTimeout(() => {
        firSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 400)
      return
    }
    const timer = setTimeout(() => {
      const next = trackingState + 1
      saveState({ trackingState: next })
      setTrackingState(next)
    }, AUTO_ADVANCE_MS)
    return () => clearTimeout(timer)
  }, [trackingState])

  function skip() {
    const current = TRACKING_STATES[trackingState]
    if (current?.final) return
    const next = trackingState + 1
    saveState({ trackingState: next })
    setTrackingState(next)
  }

  async function downloadFIR() {
    if (!firRef.current || downloading || !appState) return
    setDownloading(true)
    const el = firRef.current
    const prevTransform = el.style.transform
    el.style.transform = 'none'
    try {
      const { default: html2canvas } = await import('html2canvas')
      await document.fonts.ready
      const canvas = await html2canvas(el, { scale: 3, useCORS: true, backgroundColor: '#F5F0E8', logging: false })
      el.style.transform = prevTransform
      const url = canvas.toDataURL('image/png')
      const a = document.createElement('a')
      a.href = url
      a.download = `zepto-fir-${appState.firNumber ?? 'card'}.png`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    } catch {
      el.style.transform = prevTransform
      alert('Screenshot karo aur share karo! 📸')
    } finally {
      setDownloading(false)
    }
  }

  const current = TRACKING_STATES[trackingState]
  const riderPos = RIDER_POSITIONS[trackingState]
  const fir = FIR_PROGRESS[trackingState]
  const isFinal = current?.final ?? false
  const product = appState?.selectedProduct

  return (
    <div ref={containerRef} className="mobile-container bg-background flex flex-col overflow-y-auto">

      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-5 pb-3 sticky top-0 bg-background z-10">
        <button type="button" onClick={() => router.back()} className="text-on-surface p-1">←</button>
        <div className="text-on-surface font-bold text-base flex-1">Live Tracking</div>
        <div className="flex items-center gap-1.5">
          <span className={`text-xs ${isFinal ? 'text-success' : 'text-success blink-dot'}`}>●</span>
          <span className="text-success text-xs font-mono font-bold">{isFinal ? 'ARRIVED' : 'LIVE'}</span>
        </div>
      </div>

      {/* Map */}
      <div className="mx-4 rounded-2xl overflow-hidden mb-3 relative" style={{ height: '170px' }}>
        <div className="map-pattern absolute inset-0 bg-surface-container" />
        <svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 358 170" preserveAspectRatio="xMidYMid meet">
          <path d="M 55 158 Q 175 120 295 18" fill="none" stroke="rgba(255,81,103,0.25)" strokeWidth="2" strokeDasharray="6 4" />
          <path d={`M 55 158 L ${riderPos.cx} ${riderPos.cy}`} fill="none" stroke="#FF2D55" strokeWidth="2.5" />
          <circle cx="295" cy="18" r="13" fill="#22C55E" />
          <text x="295" y="23" textAnchor="middle" fontSize="13">🏠</text>
          <circle cx={riderPos.cx} cy={riderPos.cy} r="15" fill="#FF2D55"
            style={{ transition: 'cx 0.8s ease-in-out, cy 0.8s ease-in-out' }} />
          <text x={riderPos.cx} y={riderPos.cy + 5} textAnchor="middle" fontSize="13"
            style={{ transition: 'x 0.8s ease-in-out, y 0.8s ease-in-out' }}>🛵</text>
        </svg>
        <div className="absolute bottom-3 left-3 bg-background/80 rounded-lg px-2 py-1 backdrop-blur-sm">
          <span className="text-on-surface text-xs font-mono">{appState?.riderName || 'Rider'}</span>
        </div>
      </div>

      {/* Chase strip */}
      <div
        className="mx-4 mb-3 glass-panel rounded-2xl overflow-hidden relative"
        style={{ height: '58px' }}
      >
        {!isFinal ? (
          <>
            {/* Track */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-px h-px"
              style={{ background: 'rgba(255,255,255,0.06)' }} />
            {/* Ice cream — fixed right, running away */}
            <span className="absolute top-1/2 -translate-y-1/2 text-2xl select-none"
              style={{ right: '16px' }}>🍦</span>
            {/* Cop — moves right */}
            <span
              className="absolute top-1/2 -translate-y-1/2 text-xl select-none transition-all duration-[800ms] ease-in-out"
              style={{ left: COP_LEFT[trackingState] }}
            >👮🛵</span>
            {/* Distance label */}
            <span className="absolute bottom-1.5 right-4 text-on-surface-variant text-xs font-mono opacity-50">
              {current?.distance} to go
            </span>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center gap-3"
            style={{ background: 'rgba(34,197,94,0.08)' }}>
            <span className="text-2xl">👮</span>
            <span className="text-success font-black text-sm font-mono animate-pulse tracking-wider">
              PAKAD LIYA! 🚨
            </span>
            <span className="text-2xl">🍦</span>
          </div>
        )}
      </div>

      {/* Status card */}
      <div className="mx-4 glass-panel rounded-2xl p-5 mb-3">
        <div className="flex items-baseline justify-between mb-3">
          <div className="font-black text-3xl font-mono"
            style={{ color: isFinal ? '#22C55E' : '#FF2D55' }}>
            {current?.distance}
          </div>
          {!isFinal && <div className="text-on-surface-variant text-xs font-mono">away</div>}
        </div>
        <div className="text-on-surface font-bold text-sm mb-1">{current?.copy}</div>
        <div className="text-on-surface-variant text-xs font-mono">{current?.sub}</div>

        {/* Progress dots */}
        <div className="flex items-center gap-1.5 mt-4 mb-4">
          {TRACKING_STATES.map((_, i) => (
            <div key={i} className="h-1.5 flex-1 rounded-full transition-all duration-500"
              style={{ background: i <= trackingState ? '#FF2D55' : 'rgba(255,255,255,0.1)' }} />
          ))}
        </div>

        {/* FIR progress */}
        <div className="pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-on-surface-variant">📋 {fir.label}</span>
            <span className="text-xs font-mono font-bold"
              style={{ color: isFinal ? '#22C55E' : '#FF2D55' }}>{fir.pct}%</span>
          </div>
          <div className="w-full rounded-full h-1.5" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <div className="h-full rounded-full transition-all duration-700"
              style={{ width: `${fir.pct}%`, background: isFinal ? '#22C55E' : '#FF2D55' }} />
          </div>
        </div>
      </div>

      {/* Skip — shown during auto-advance */}
      {!isFinal && (
        <div className="text-center pb-4">
          <button type="button" onClick={skip}
            className="text-on-surface-variant text-xs font-mono underline underline-offset-2">
            Skip →
          </button>
        </div>
      )}

      {/* ── FIR SECTION — revealed when rider arrives ── */}
      {isFinal && (
        <div ref={firSectionRef} className="px-4 pb-10 fade-in-up">

          {/* Unlock banner */}
          <div className="mb-4 rounded-2xl p-4 flex items-center gap-3"
            style={{ background: 'rgba(34,197,94,0.12)', border: '1.5px solid #22C55E' }}>
            <span className="text-3xl">🔓</span>
            <div>
              <div className="text-success font-black text-sm">FIR Card Unlocked!</div>
              <div className="text-on-surface-variant text-xs font-mono mt-0.5">
                Tera case file tayyar hai. Download karo.
              </div>
            </div>
          </div>

          {/* FIR Card */}
          <div
            ref={firRef}
            className="rounded-2xl overflow-hidden mb-4"
            style={{ background: '#F5F0E8', fontFamily: "'Courier Prime', 'Courier New', monospace" }}
          >
            {/* Header band */}
            <div className="px-5 py-4 flex items-center justify-between" style={{ background: '#3b0900' }}>
              <div>
                <div className="text-xs tracking-widest uppercase font-bold" style={{ color: '#F5F0E8' }}>
                  First Information Report
                </div>
                <div className="text-xs opacity-50" style={{ color: '#F5F0E8' }}>Zepto Chor Police Dept.</div>
              </div>
              <span className="text-2xl">🚨</span>
            </div>

            {/* Body */}
            <div className="px-5 py-5">
              {/* FIR number */}
              <div className="flex justify-between mb-4 pb-3"
                style={{ borderBottom: '1px solid rgba(59,9,0,0.15)' }}>
                <span className="text-xs uppercase tracking-wider" style={{ color: '#5d1900' }}>FIR No.</span>
                <span className="font-bold text-sm" style={{ color: '#3b0900' }}>
                  {appState?.firNumber || 'ZPT-2026-MUM-0000'}
                </span>
              </div>

              {/* Complainant */}
              <div className="mb-4">
                <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#5d1900' }}>Complainant</div>
                <div className="font-black text-xl" style={{ color: '#3b0900' }}>
                  {appState?.userName || 'Anonymous'}
                </div>
              </div>

              {/* Accused */}
              <div className="mb-4 pb-4" style={{ borderBottom: '1px solid rgba(59,9,0,0.15)' }}>
                <div className="text-xs uppercase tracking-wider mb-2" style={{ color: '#5d1900' }}>
                  Accused (Fugitive Craving)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{product?.emoji ?? '🍦'}</span>
                  <div>
                    <div className="font-bold text-sm" style={{ color: '#3b0900' }}>
                      {product?.name ?? 'Unknown Craving'}
                    </div>
                    <div className="text-xs" style={{ color: '#5d1900' }}>
                      {product?.brand}
                    </div>
                  </div>
                </div>
              </div>

              {/* Charge */}
              <div className="mb-4 pb-4" style={{ borderBottom: '1px solid rgba(59,9,0,0.15)' }}>
                <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#5d1900' }}>Charge</div>
                <div className="font-bold text-sm italic" style={{ color: '#3b0900' }}>
                  {appState?.charge || 'Section 420-IC: Unauthorized Craving'}
                </div>
              </div>

              {/* Details grid */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-4 pb-4"
                style={{ borderBottom: '1px solid rgba(59,9,0,0.15)' }}>
                {[
                  { label: 'Arresting Officer', value: appState?.riderName || '-' },
                  { label: 'Time of Crime',      value: appState?.orderTime || '-' },
                  { label: 'Craving Intensity',  value: `${appState?.cravingIntensity || 0}%` },
                  { label: 'Date',               value: today },
                ].map(row => (
                  <div key={row.label}>
                    <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: '#5d1900' }}>
                      {row.label}
                    </div>
                    <div className="font-bold text-sm" style={{ color: '#3b0900' }}>{row.value}</div>
                  </div>
                ))}
              </div>

              {/* Verdict */}
              <div className="mb-5">
                <div className="text-xs uppercase tracking-wider mb-2" style={{ color: '#5d1900' }}>Verdict</div>
                <div className="text-sm italic leading-relaxed" style={{ color: '#3b0900' }}>
                  &ldquo;{appState?.verdict || 'Justified. No further questions.'}&rdquo;
                </div>
              </div>

              {/* Stamp + footer */}
              <div className="flex items-end justify-between mb-3">
                <div className="text-xs opacity-40" style={{ color: '#3b0900' }}>Issued by: zepto.app</div>
                <div className="px-4 py-2 rounded-lg"
                  style={{ border: '3px solid #8B2FC9', color: '#8B2FC9', transform: 'rotate(-5deg)', opacity: 0.85 }}>
                  <div className="font-black text-base tracking-widest text-center">ZEPTO</div>
                  <div className="font-bold text-xs tracking-widest text-center">POLICE</div>
                </div>
              </div>
              <div className="text-center text-xs italic opacity-30" style={{ color: '#3b0900' }}>
                100% unofficial. No actual police involved.
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={downloadFIR}
              disabled={downloading}
              className="btn-primary w-full text-white font-black text-sm tracking-widest py-4 rounded-full disabled:opacity-60"
              style={{ background: '#FF2D55' }}
            >
              {downloading ? 'GENERATING...' : 'DOWNLOAD FIR →'}
            </button>
            <button
              type="button"
              onClick={() => { resetJourney(); router.push('/') }}
              className="w-full text-on-surface-variant text-sm font-mono py-2 text-center"
            >
              Catch Another Craving →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
