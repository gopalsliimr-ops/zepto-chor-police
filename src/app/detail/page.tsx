'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { loadState, saveState, cartCount, type Product } from '@/lib/state'

export default function DetailPage() {
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [intensity, setIntensity] = useState(0)
  const [qty, setQty] = useState(0)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    const state = loadState()
    if (!state.selectedProduct) {
      router.replace('/listing')
      return
    }
    setProduct(state.selectedProduct)
    const existing = state.cart.find(i => i.product.name === state.selectedProduct?.name)
    setQty(existing?.quantity ?? 0)
    setTotalCount(cartCount(state.cart))
    const val = 73 + Math.floor(Math.random() * 26)
    const timer = setTimeout(() => setIntensity(val), 150)
    return () => clearTimeout(timer)
  }, [router])

  function updateQty(delta: number) {
    if (!product) return
    const state = loadState()
    const cart = [...state.cart]
    const idx = cart.findIndex(i => i.product.name === product.name)
    const newQty = Math.max(0, qty + delta)
    if (newQty === 0) {
      if (idx >= 0) cart.splice(idx, 1)
    } else if (idx >= 0) {
      cart[idx] = { ...cart[idx], quantity: newQty }
    } else {
      cart.push({ product, quantity: newQty })
    }
    saveState({ cart })
    setQty(newQty)
    setTotalCount(cartCount(cart))
  }

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
      <div className="flex-1 flex flex-col px-6 pt-4 overflow-y-auto">

        {/* Product image */}
        <div className="flex items-center justify-center mb-6" style={{ height: '180px' }}>
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain animate-bounce"
          />
        </div>

        {/* Name, brand, price */}
        <div className="text-center mb-6">
          <div className="text-on-surface text-2xl font-black">{product.name}</div>
          <div className="text-on-surface-variant text-sm mt-1">{product.brand}</div>
          <div className="text-on-surface text-xl font-bold mt-2">{product.price}</div>
        </div>

        {/* Sub copy */}
        <div className="text-center mb-6">
          <span className="text-on-surface-variant text-sm font-mono italic">
            "Yeh craving zyada der nahi rukegi."
          </span>
        </div>

        {/* Craving intensity */}
        <div className="glass-panel rounded-2xl p-5 mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-on-surface text-sm font-bold">Craving Intensity</span>
            <span className="text-sm font-bold font-mono" style={{ color: '#FF2D55' }}>
              {intensity}%
            </span>
          </div>
          <div className="w-full bg-surface-container-high rounded-full h-3 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${intensity}%`, background: '#FF2D55' }}
            />
          </div>
          <div className="text-on-surface-variant text-xs mt-2.5 font-mono">
            {intensityLabel}
          </div>
        </div>
      </div>

      {/* CTA — quantity control + view cart */}
      <div className="px-4 pb-6 pt-3 space-y-3">
        {qty === 0 ? (
          <button
            type="button"
            onClick={() => updateQty(1)}
            className="btn-primary w-full text-on-primary-container font-black text-sm tracking-widest py-4 rounded-full"
            style={{ background: '#FF2D55' }}
          >
            ADD TO CART →
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <div
              className="flex items-center rounded-full overflow-hidden flex-1 justify-between"
              style={{ background: '#FF2D55' }}
            >
              <button
                type="button"
                className="text-white font-bold px-5 py-4 text-xl leading-none"
                onClick={() => updateQty(-1)}
              >
                −
              </button>
              <span className="text-white font-black text-base">{qty}</span>
              <button
                type="button"
                className="text-white font-bold px-5 py-4 text-xl leading-none"
                onClick={() => updateQty(1)}
              >
                +
              </button>
            </div>
          </div>
        )}

        {totalCount > 0 && (
          <button
            type="button"
            onClick={() => router.push('/cart')}
            className="w-full text-on-surface-variant text-sm font-mono py-2 text-center"
          >
            View Cart ({totalCount} item{totalCount > 1 ? 's' : ''}) →
          </button>
        )}
      </div>
    </div>
  )
}
