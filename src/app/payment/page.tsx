'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { initDynamicValues, saveState } from '@/lib/state'

const PAYMENT_METHODS = [
  { id: 'upi', label: 'UPI', sub: 'GPay · PhonePe · Paytm', icon: '📲' },
  { id: 'card', label: 'Card', sub: 'Debit / Credit', icon: '💳' },
  { id: 'cash', label: 'Cash', sub: 'Pay on delivery', icon: '💵' },
] as const

type MethodId = typeof PAYMENT_METHODS[number]['id']

export default function PaymentPage() {
  const router = useRouter()
  const [selected, setSelected] = useState<MethodId>('upi')

  function confirmPayment() {
    const dynamicVals = initDynamicValues()
    saveState(dynamicVals)
    router.push('/confirmed')
  }

  return (
    <div className="mobile-container bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-5 pb-3">
        <button type="button" onClick={() => router.back()} className="text-on-surface p-1">
          ←
        </button>
        <div className="text-on-surface font-bold text-base">Operation authorize karo.</div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 pt-4">
        <p className="text-on-surface-variant text-sm font-mono mb-6">
          Craving pakadne ke liye payment authorize karo.
        </p>

        {/* Payment options */}
        <div className="space-y-3 mb-6">
          {PAYMENT_METHODS.map((method) => (
            <button
              key={method.id}
              type="button"
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-left ${
                selected === method.id
                  ? 'border-2 border-primary-container bg-surface-container'
                  : 'border border-outline-variant bg-surface-container'
              }`}
              onClick={() => setSelected(method.id)}
            >
              <span className="text-2xl">{method.icon}</span>
              <div className="flex-1">
                <div className="text-on-surface font-bold text-sm">{method.label}</div>
                <div className="text-on-surface-variant text-xs mt-0.5">{method.sub}</div>
              </div>
              {/* Radio indicator */}
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  selected === method.id ? 'border-primary-container' : 'border-outline'
                }`}
              >
                {selected === method.id && (
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: '#ff5167' }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Security note */}
        <div className="flex items-center gap-2">
          <span className="text-sm">🔒</span>
          <span className="text-on-surface-variant text-xs">
            100% secure. Zepto Police ki guarantee.
          </span>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-6 pt-4">
        <button
          type="button"
          onClick={confirmPayment}
          className="btn-primary w-full text-on-primary-container font-black text-sm tracking-widest py-4 rounded-2xl"
          style={{ background: '#ff5167' }}
        >
          OPERATION CONFIRM KARO →
        </button>
      </div>
    </div>
  )
}
