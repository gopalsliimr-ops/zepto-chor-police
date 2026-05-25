'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { loadState, saveState, cartTotal, type CartItem } from '@/lib/state'

export default function CartPage() {
  const router = useRouter()
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const state = loadState()
    if (!state.cart || state.cart.length === 0) {
      router.replace('/listing')
      return
    }
    setCart(state.cart)
  }, [router])

  function updateQty(productName: string, delta: number) {
    setCart(prev => {
      const next = prev
        .map(item =>
          item.product.name === productName
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter(item => item.quantity > 0)
      saveState({ cart: next })
      return next
    })
  }

  if (cart.length === 0) return null

  const total = cartTotal(cart)

  function proceedToPay() {
    saveState({ selectedProduct: cart[0].product })
    router.push('/payment')
  }

  return (
    <div className="mobile-container bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-5 pb-3">
        <button type="button" onClick={() => router.back()} className="text-on-surface p-1">
          ←
        </button>
        <div className="text-on-surface font-bold text-base flex-1">Your Cart</div>
        <div className="text-on-surface-variant text-xs font-mono">
          {cart.reduce((s, i) => s + i.quantity, 0)} items
        </div>
      </div>

      {/* Items */}
      <div className="flex-1 px-4 pt-2 overflow-y-auto">
        <div className="space-y-3 mb-4">
          {cart.map((item) => (
            <div key={item.product.name} className="glass-panel rounded-2xl p-4 flex items-center gap-3">
              {/* Image */}
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="text-on-surface font-bold text-sm leading-tight">
                  {item.product.name}
                </div>
                <div className="text-on-surface-variant text-xs mt-0.5">{item.product.brand}</div>
                <div className="text-on-surface font-bold text-sm mt-1">{item.product.price}</div>
              </div>

              {/* Quantity control */}
              <div
                className="flex items-center rounded-xl overflow-hidden flex-shrink-0"
                style={{ background: '#FF2D55' }}
              >
                <button
                  type="button"
                  className="text-white font-bold px-3 py-2 text-lg leading-none"
                  onClick={() => updateQty(item.product.name, -1)}
                >
                  −
                </button>
                <span className="text-white font-black text-sm px-1 min-w-[24px] text-center">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  className="text-white font-bold px-3 py-2 text-lg leading-none"
                  onClick={() => updateQty(item.product.name, 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bill summary */}
        <div className="glass-panel rounded-2xl p-4 mb-4">
          <div className="text-on-surface font-bold text-sm mb-3">Bill Summary</div>
          {cart.map(item => (
            <div key={item.product.name} className="flex justify-between text-sm mb-2">
              <span className="text-on-surface-variant">
                {item.product.name} × {item.quantity}
              </span>
              <span className="text-on-surface font-medium">
                ₹{parseInt(item.product.price.replace('₹', '')) * item.quantity}
              </span>
            </div>
          ))}
          <div className="flex justify-between text-sm mb-3">
            <span className="text-on-surface-variant">Delivery fee</span>
            <span className="font-bold text-success">FREE</span>
          </div>
          <div
            className="flex justify-between font-black text-base pt-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            <span className="text-on-surface">Total</span>
            <span className="text-on-surface">₹{total}</span>
          </div>
        </div>

        {/* Status note */}
        <div className="glass-panel rounded-xl px-4 py-3 mb-2">
          <div className="text-on-surface-variant text-xs font-mono text-center">
            Evidence secured. Dispatch ke liye tayaar.
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-6 pt-4">
        <button
          type="button"
          onClick={proceedToPay}
          className="btn-primary w-full text-on-primary-container font-black text-sm tracking-widest py-4 rounded-full"
          style={{ background: '#FF2D55' }}
        >
          PROCEED TO PAY → ₹{total}
        </button>
      </div>
    </div>
  )
}
