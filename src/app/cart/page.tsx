'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { loadState, type Product } from '@/lib/state'

export default function CartPage() {
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const state = loadState()
    if (!state.selectedProduct) {
      router.replace('/listing')
      return
    }
    setProduct(state.selectedProduct)
  }, [router])

  if (!product) return null

  return (
    <div className="mobile-container bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-5 pb-3">
        <button type="button" onClick={() => router.back()} className="text-on-surface p-1">
          ←
        </button>
        <div className="text-on-surface font-bold text-base">🗂️ Evidence Secured</div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 pt-2">
        {/* Receipt card */}
        <div className="rounded-2xl overflow-hidden mb-4">
          {/* Receipt header band */}
          <div className="bg-surface-container-high px-5 py-4">
            <div className="text-on-surface-variant text-xs font-mono tracking-widest uppercase mb-1">
              Case File
            </div>
            <div className="text-on-surface text-base font-black">Order Summary</div>
          </div>

          {/* Jagged top of cream area */}
          <div
            className="h-4 bg-surface-container-high"
            style={{
              borderBottom: '16px solid #F5F0E8',
              clipPath:
                'polygon(0% 0%,2% 100%,4% 0%,6% 100%,8% 0%,10% 100%,12% 0%,14% 100%,16% 0%,18% 100%,20% 0%,22% 100%,24% 0%,26% 100%,28% 0%,30% 100%,32% 0%,34% 100%,36% 0%,38% 100%,40% 0%,42% 100%,44% 0%,46% 100%,48% 0%,50% 100%,52% 0%,54% 100%,56% 0%,58% 100%,60% 0%,62% 100%,64% 0%,66% 100%,68% 0%,70% 100%,72% 0%,74% 100%,76% 0%,78% 100%,80% 0%,82% 100%,84% 0%,86% 100%,88% 0%,90% 100%,92% 0%,94% 100%,96% 0%,98% 100%,100% 0%,100% 0%,0% 0%)',
            }}
          />

          {/* Cream body */}
          <div className="px-5 py-5" style={{ background: '#F5F0E8' }}>
            {/* Product row */}
            <div className="flex items-center gap-3 mb-5">
              <div className="text-4xl">{product.emoji}</div>
              <div className="flex-1">
                <div className="font-bold text-sm" style={{ color: '#3b0900' }}>
                  {product.name}
                </div>
                <div className="text-xs mt-0.5" style={{ color: '#5d1900' }}>
                  {product.brand} · 1 unit
                </div>
              </div>
              <div className="font-bold" style={{ color: '#3b0900' }}>{product.price}</div>
            </div>

            {/* Totals */}
            <div className="border-t pt-4 space-y-2.5" style={{ borderColor: 'rgba(59,9,0,0.15)' }}>
              <div className="flex justify-between text-sm">
                <span style={{ color: '#5d1900' }}>Item total</span>
                <span className="font-semibold" style={{ color: '#3b0900' }}>{product.price}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span style={{ color: '#5d1900' }}>Delivery fee</span>
                <span className="font-bold text-success">FREE</span>
              </div>
              <div
                className="flex justify-between pt-3 font-black text-base border-t"
                style={{ borderColor: 'rgba(59,9,0,0.15)', color: '#3b0900' }}
              >
                <span>Total</span>
                <span>{product.price}</span>
              </div>
            </div>
          </div>

          {/* Jagged bottom */}
          <div
            style={{
              height: '16px',
              background: '#F5F0E8',
              clipPath:
                'polygon(0% 0%,2% 100%,4% 0%,6% 100%,8% 0%,10% 100%,12% 0%,14% 100%,16% 0%,18% 100%,20% 0%,22% 100%,24% 0%,26% 100%,28% 0%,30% 100%,32% 0%,34% 100%,36% 0%,38% 100%,40% 0%,42% 100%,44% 0%,46% 100%,48% 0%,50% 100%,52% 0%,54% 100%,56% 0%,58% 100%,60% 0%,62% 100%,64% 0%,66% 100%,68% 0%,70% 100%,72% 0%,74% 100%,76% 0%,78% 100%,80% 0%,82% 100%,84% 0%,86% 100%,88% 0%,90% 100%,92% 0%,94% 100%,96% 0%,98% 100%,100% 0%)',
            }}
          />
        </div>

        {/* Status badge */}
        <div className="glass-panel rounded-xl px-4 py-3">
          <div className="text-on-surface-variant text-xs font-mono text-center">
            Evidence secured. Dispatch ke liye tayaar.
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-6 pt-4">
        <button
          type="button"
          onClick={() => router.push('/payment')}
          className="btn-primary w-full text-on-primary-container font-black text-sm tracking-widest py-4 rounded-2xl"
          style={{ background: '#ff5167' }}
        >
          PROCEED KAR →
        </button>
      </div>
    </div>
  )
}
