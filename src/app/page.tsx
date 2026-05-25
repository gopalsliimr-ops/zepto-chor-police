'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { saveState } from '@/lib/state'

export default function NameEntryPage() {
  const router = useRouter()
  const [name, setName] = useState('')

  function handleSubmit() {
    const trimmed = name.trim()
    if (!trimmed) return
    saveState({ userName: trimmed })
    router.push('/notification')
  }

  return (
    <div className="mobile-container bg-background flex flex-col px-6 py-12">
      <div className="flex-1 flex flex-col justify-center">
        {/* Badge */}
        <div className="mb-8">
          <span className="inline-block bg-surface-container border border-outline-variant rounded-full px-3 py-1 text-xs font-mono text-on-surface-variant tracking-widest uppercase">
            🚨 Zepto × Chor Police
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl font-black text-on-surface leading-tight mb-1">
          Pehle batao<br />kaun hai
        </h1>
        <p className="text-4xl font-black leading-tight mb-10" style={{ color: '#FF2D55' }}>
          craving pakdne<br />se pehle.
        </p>

        {/* Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Apna naam likho..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            autoFocus
            className="w-full bg-surface-container border border-outline-variant rounded-2xl px-4 py-4 text-on-surface text-base placeholder:text-on-surface-variant outline-none focus:border-primary-container transition-colors font-sans"
          />
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!name.trim()}
          className="btn-primary w-full bg-primary-container text-on-primary-container font-black text-sm tracking-widest py-4 rounded-full disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
        >
          LET'S GO →
        </button>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-on-surface-variant font-mono pt-8">
        Mumbai · Zepto Police · 24×7
      </div>
    </div>
  )
}
