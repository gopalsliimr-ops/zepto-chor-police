'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { PRODUCTS, saveState, loadState, cartTotal, cartCount, type CartItem, type Product } from '@/lib/state'

export default function ListingPage() {
  const router = useRouter()
  const [quantities, setQuantities] = useState<Record<string, number>>({})

  useEffect(() => {
    const existing = loadState().cart
    const map: Record<string, number> = {}
    existing.forEach(item => { map[item.product.name] = item.quantity })
    setQuantities(map)
  }, [])

  function updateQty(product: Product, delta: number) {
    setQuantities(prev => {
      const next = { ...prev }
      const updated = Math.max(0, (prev[product.name] ?? 0) + delta)
      if (updated === 0) delete next[product.name]
      else next[product.name] = updated
      const cart: CartItem[] = PRODUCTS
        .filter(p => next[p.name])
        .map(p => ({ product: p, quantity: next[p.name] }))
      saveState({ cart })
      return next
    })
  }

  const cart: CartItem[] = PRODUCTS
    .filter(p => quantities[p.name])
    .map(p => ({ product: p, quantity: quantities[p.name] }))
  const total = cartTotal(cart)
  const count = cartCount(cart)

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
      <div className="px-4 py-2.5 mb-1 flex items-center gap-2" style={{ background: '#FF2D55' }}>
        <span className="text-white text-sm font-bold">🚨 Kaun si craving pakdni hai?</span>
        <span className="ml-auto text-white/80 text-xs font-mono">⚡ 10 min</span>
      </div>

      {/* Delivery strip */}
      <div className="px-4 py-3 flex items-center gap-2 border-b border-outline-variant bg-background">
        <span className="text-base">⚡</span>
        <span className="text-on-surface-variant text-xs">10-minute delivery · Mumbai</span>
      </div>

      {/* Product grid — extra bottom padding for sticky bar */}
      <div className="p-4 grid grid-cols-2 gap-3" style={{ paddingBottom: count > 0 ? '96px' : '16px' }}>
        {PRODUCTS.map((product) => {
          const qty = quantities[product.name] ?? 0
          return (
            <div
              key={product.name}
              className="glass-panel rounded-2xl p-4 flex flex-col cursor-pointer active:scale-95 transition-transform"
              onClick={() => {
                saveState({ selectedProduct: product })
                router.push('/detail')
              }}
            >
              {/* Product image */}
              <div className="flex items-center justify-center py-2 mb-2" style={{ height: '96px' }}>
                <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
              </div>

              {/* Info */}
              <div className="text-on-surface font-bold text-sm leading-tight mb-1">{product.name}</div>
              <div className="text-on-surface-variant text-xs mb-3">{product.brand}</div>

              {/* Price + quantity control */}
              <div
                className="flex items-center justify-between mt-auto"
                onClick={e => e.stopPropagation()}
              >
                <span className="text-on-surface font-bold text-sm">{product.price}</span>

                {qty === 0 ? (
                  <button
                    type="button"
                    className="text-white text-xs font-bold px-3 py-1.5 rounded-lg"
                    style={{ background: '#FF2D55' }}
                    onClick={() => updateQty(product, 1)}
                  >
                    GRAB IT
                  </button>
                ) : (
                  <div
                    className="flex items-center rounded-lg overflow-hidden"
                    style={{ background: '#FF2D55' }}
                  >
                    <button
                      type="button"
                      className="text-white font-bold px-2.5 py-1.5 text-base leading-none"
                      onClick={() => updateQty(product, -1)}
                    >
                      −
                    </button>
                    <span className="text-white font-black text-sm px-1 min-w-[20px] text-center">
                      {qty}
                    </span>
                    <button
                      type="button"
                      className="text-white font-bold px-2.5 py-1.5 text-base leading-none"
                      onClick={() => updateQty(product, 1)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Sticky View Cart bar */}
      {count > 0 && (
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] px-4 pb-5 pt-3 bg-background border-t border-outline-variant z-20">
          <button
            type="button"
            onClick={() => router.push('/cart')}
            className="w-full flex items-center justify-between text-white font-black text-sm tracking-wide py-4 px-5 rounded-full"
            style={{ background: '#FF2D55' }}
          >
            <span className="bg-white/20 rounded-full px-2 py-0.5 text-xs font-bold">
              {count} item{count > 1 ? 's' : ''}
            </span>
            <span>VIEW CART</span>
            <span className="font-bold">₹{total} →</span>
          </button>
        </div>
      )}
    </div>
  )
}
