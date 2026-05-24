'use client'
import { useRouter } from 'next/navigation'
import { PRODUCTS, saveState, type Product } from '@/lib/state'

export default function ListingPage() {
  const router = useRouter()

  function selectProduct(product: Product) {
    saveState({ selectedProduct: product })
    router.push('/detail')
  }

  return (
    <div className="mobile-container bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-5 pb-3 sticky top-0 bg-background z-10">
        <button type="button" onClick={() => router.back()} className="text-on-surface p-1">
          ←
        </button>
        <div className="text-on-surface font-bold text-base flex-1">Ice Cream</div>
        <div className="text-on-surface-variant text-xs">{PRODUCTS.length} items</div>
      </div>

      {/* Urgency bar */}
      <div className="px-4 py-2.5 mb-1 flex items-center gap-2" style={{ background: '#ff5167' }}>
        <span className="text-white text-sm font-bold">🚨 Pakad lo pehle bhaag jaaye</span>
        <span className="ml-auto text-white/80 text-xs font-mono">⚡ 10 min</span>
      </div>

      {/* Delivery strip */}
      <div className="px-4 py-3 flex items-center gap-2 border-b border-outline-variant bg-background">
        <span className="text-base">⚡</span>
        <span className="text-on-surface-variant text-xs">10-minute delivery · Mumbai</span>
      </div>

      {/* Product grid */}
      <div className="p-4 grid grid-cols-2 gap-3">
        {PRODUCTS.map((product) => (
          <div
            key={product.name}
            className="glass-panel rounded-2xl p-4 flex flex-col cursor-pointer active:scale-95 transition-transform"
            onClick={() => selectProduct(product)}
          >
            {/* Product emoji */}
            <div className="text-6xl text-center py-3 mb-2">{product.emoji}</div>

            {/* Info */}
            <div className="text-on-surface font-bold text-sm leading-tight mb-1">
              {product.name}
            </div>
            <div className="text-on-surface-variant text-xs mb-3">{product.brand}</div>

            {/* Price + ADD */}
            <div className="flex items-center justify-between mt-auto">
              <span className="text-on-surface font-bold text-sm">{product.price}</span>
              <button
                type="button"
                className="text-on-primary-container text-xs font-bold px-3 py-1.5 rounded-lg"
                style={{ background: '#ff5167' }}
                onClick={(e) => { e.stopPropagation(); selectProduct(product) }}
              >
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
