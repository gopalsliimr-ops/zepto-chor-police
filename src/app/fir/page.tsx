'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { loadState, type AppState } from '@/lib/state'

export default function FIRPage() {
  const router = useRouter()
  const firRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<AppState | null>(null)
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    setState(loadState())
  }, [])

  async function downloadPNG() {
    if (!firRef.current || downloading || !state) return
    setDownloading(true)
    const el = firRef.current
    const prevTransform = el.style.transform
    el.style.transform = 'none'
    try {
      const { default: html2canvas } = await import('html2canvas')
      await document.fonts.ready
      const canvas = await html2canvas(el, {
        scale: 3,
        useCORS: true,
        backgroundColor: '#F5F0E8',
        logging: false,
      })
      el.style.transform = prevTransform
      const url = canvas.toDataURL('image/png')
      const a = document.createElement('a')
      a.href = url
      a.download = `zepto-fir-${state.firNumber ?? 'card'}.png`
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

  if (!state) return null

  const product = state.selectedProduct
  const today = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  return (
    <div className="mobile-container bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-5 pb-2">
        <button
          type="button"
          onClick={() => router.push('/')}
          className="text-on-surface p-1 text-xl"
        >
          🏠
        </button>
        <div className="text-on-surface font-black text-base flex-1 text-center pr-8">
          PAKAD LIYA. 🚨
        </div>
      </div>

      <p className="text-center text-on-surface-variant text-sm font-mono px-4 mb-5">
        Tera FIR card tayyar hai. Share karo.
      </p>

      {/* FIR Card — captured by html2canvas */}
      <div className="px-4 mb-6">
        <div
          ref={firRef}
          className="rounded-2xl overflow-hidden font-mono"
          style={{
            background: '#F5F0E8',
            transform: 'rotate(1deg)',
            fontFamily: "'Courier Prime', 'Courier New', monospace",
          }}
        >
          {/* Dark header band */}
          <div
            className="px-5 py-4 flex items-center justify-between"
            style={{ background: '#3b0900' }}
          >
            <div>
              <div className="text-xs tracking-widest uppercase font-bold" style={{ color: '#F5F0E8' }}>
                First Information Report
              </div>
              <div className="text-xs opacity-50" style={{ color: '#F5F0E8' }}>
                Zepto Chor Police Dept.
              </div>
            </div>
            <div className="text-2xl">🚨</div>
          </div>

          {/* Body */}
          <div className="px-5 py-5">
            {/* FIR number */}
            <div
              className="flex items-center justify-between mb-4 pb-3"
              style={{ borderBottom: '1px solid rgba(59,9,0,0.15)' }}
            >
              <span className="text-xs uppercase tracking-wider" style={{ color: '#5d1900' }}>
                FIR No.
              </span>
              <span className="font-bold text-sm" style={{ color: '#3b0900' }}>
                {state.firNumber || 'ZPT-2026-MUM-0000'}
              </span>
            </div>

            {/* Complainant */}
            <div className="mb-4">
              <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#5d1900' }}>
                Complainant
              </div>
              <div className="font-black text-xl" style={{ color: '#3b0900' }}>
                {state.userName || 'Anonymous'}
              </div>
            </div>

            {/* Accused */}
            <div
              className="mb-4 pb-4"
              style={{ borderBottom: '1px solid rgba(59,9,0,0.15)' }}
            >
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
                    {product?.brand} · {product?.price}
                  </div>
                </div>
              </div>
            </div>

            {/* Details grid */}
            <div
              className="grid grid-cols-2 gap-x-4 gap-y-3 mb-4 pb-4"
              style={{ borderBottom: '1px solid rgba(59,9,0,0.15)' }}
            >
              {[
                { label: 'Officer', value: state.riderName || '-' },
                { label: 'Response Time', value: state.deliveryTime || '-' },
                { label: 'Craving Intensity', value: `${state.cravingIntensity || 0}%` },
                { label: 'Date', value: today },
              ].map((row) => (
                <div key={row.label}>
                  <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: '#5d1900' }}>
                    {row.label}
                  </div>
                  <div className="font-bold text-sm" style={{ color: '#3b0900' }}>
                    {row.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Verdict */}
            <div className="mb-5">
              <div className="text-xs uppercase tracking-wider mb-2" style={{ color: '#5d1900' }}>
                Verdict
              </div>
              <div className="text-sm italic leading-relaxed" style={{ color: '#3b0900' }}>
                &ldquo;{state.verdict || 'Justified. No further questions.'}&rdquo;
              </div>
            </div>

            {/* ZEPTO stamp + footer */}
            <div className="flex items-end justify-between">
              <div className="text-xs opacity-40" style={{ color: '#3b0900' }}>
                Issued by: zepto.app
              </div>
              <div
                className="px-4 py-2 rounded-lg"
                style={{
                  border: '3px solid #8B2FC9',
                  color: '#8B2FC9',
                  transform: 'rotate(-5deg)',
                  opacity: 0.85,
                }}
              >
                <div className="font-black text-base tracking-widest text-center">ZEPTO</div>
                <div className="font-bold text-xs tracking-widest text-center">POLICE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="px-4 pb-6 mt-auto space-y-3">
        <button
          type="button"
          onClick={downloadPNG}
          disabled={downloading}
          className="btn-primary w-full text-on-primary-container font-black text-sm tracking-widest py-4 rounded-2xl disabled:opacity-60"
          style={{ background: '#ff5167' }}
        >
          {downloading ? 'GENERATING...' : 'DOWNLOAD PNG →'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/')}
          className="w-full text-on-surface-variant text-sm font-mono py-2 text-center"
        >
          Naya case file karo
        </button>
      </div>
    </div>
  )
}
