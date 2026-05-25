'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { loadState } from '@/lib/state'

export default function NotificationPage() {
  const router = useRouter()
  const [userName, setUserName] = useState('Tum')
  const [timeStr, setTimeStr] = useState('9:41')
  const [dateStr, setDateStr] = useState('Monday, 25 May')

  useEffect(() => {
    const state = loadState()
    if (state.userName) setUserName(state.userName)
    const now = new Date()
    setTimeStr(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false }))
    setDateStr(now.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' }))
  }, [])

  return (
    <div
      className="mobile-container flex flex-col cursor-pointer select-none"
      style={{ background: '#0A0A14' }}
      onClick={() => router.push('/home')}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-6 pt-5 pb-2">
        <span className="text-white text-sm font-semibold">{timeStr}</span>
        <div className="flex items-center gap-1.5">
          <span className="text-white text-xs">●●●</span>
          <span className="text-white text-xs">WiFi</span>
          <span className="text-white text-xs">🔋</span>
        </div>
      </div>

      {/* Lock screen clock */}
      <div className="text-center pt-16 pb-14">
        <div className="text-white font-thin leading-none mb-3" style={{ fontSize: '5rem' }}>
          {timeStr}
        </div>
        <div className="text-white/50 text-base">{dateStr}</div>
      </div>

      {/* Notification card */}
      <div className="mx-4 glass-panel rounded-2xl p-4 mb-4">
        <div className="flex items-start gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            style={{ background: '#ff5167' }}
          >
            🚨
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-white font-bold text-sm">Zepto</span>
              <span className="text-white/40 text-xs font-mono">now</span>
            </div>
            <div className="text-white font-bold text-sm leading-snug mb-1">
              Hey {userName}, teri craving bhaag rahi hai.
            </div>
            <div className="text-white/70 text-xs">
              Zepto Police tayaar hai. 🚨 Tap karo.
            </div>
          </div>
        </div>
      </div>

      {/* Tap hint */}
      <div className="text-center mt-6 text-white/25 text-xs font-mono tracking-widest">
        SCREEN TAP KARO
      </div>
    </div>
  )
}
