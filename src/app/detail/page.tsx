'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { loadState, type Product } from '@/lib/state'

export default function DetailPage() {
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [intensity, setIntensity] = useState(0)

  useEffect(() => {
    const state = loadState()
    if (!state.selectedProduct) {
      router.replace('/listing')
      return
    }
    setProduct(state.selectedProduct)
    const val = 73 + Math.floor(Math.random() * 26)
    const timer = setTimeout(() => setIntensity(val), 150)
    return () => clearTimeout(timer)
  }, [router])

  if (!product) return null

  const intensityLabel =
    intensity > 90 ? 'CRITICAL. Aage zyada mat socho.' :
    intensity > 80 ? 'HIGH. Jaldi karo.' :
    'ELEVATED. Time chal raha hai.'

  return (
    <div className="mobile-container bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-5 pb-3">
        <button type="button" onClick={() => router.back()} className="text-on-surface p-1">
          ←
        </button>
        <div className="text-on-surface font-bold text-base flex-1 truncate">{product.name}</div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-6 pt-6 overflow-y-auto">
        {/* Product emoji */}
        <div className="text-center mb-6">
          <span className="text-9xl inline-block animate-bounce">{product.emoji}</span>
        </div>

        {/* Name, brand, price */}
        <div className="text-center mb-8">
          <div className="text-on-surface text-2xl font-black">{product.name}</div>
          <div className="text-on-surface-variant text-sm mt-1">{product.brand}</div>
          <div className="text-on-surface text-xl font-bold mt-2">{product.price}</div>
        </div>

        {/* Sub copy */}
        <div className="text-center mb-8">
          <span className="text-on-surface-variant text-sm font-mono italic">
            "Yeh craving zyada der nahi rukegi."
          </span>
        </div>

        {/* Craving intensity card */}
        <div className="glass-panel rounded-2xl p-5 mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-on-surface text-sm font-bold">Craving Intensity</span>
            <span className="text-sm font-bold font-mono" style={{ color: '#ff5167' }}>
              {intensity}%
            </span>
          </div>
          <div className="w-full bg-surface-container-high rounded-full h-3 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${intensity}%`, background: '#ff5167' }}
            />
          </div>
          <div className="text-on-surface-variant text-xs mt-2.5 font-mono">
            {intensityLabel}
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="px-4 pb-6 pt-3">
        <button
          type="button"
          onClick={() => router.push('/cart')}
          className="btn-primary w-full text-on-primary-container font-black text-sm tracking-widest py-4 rounded-2xl"
          style={{ background: '#ff5167' }}
        >
          CART MEIN DAALO →
        </button>
      </div>
    </div>
  )
}
