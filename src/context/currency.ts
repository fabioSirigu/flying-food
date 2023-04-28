import { createContext } from 'react'

export type CurrencySymbol = 'USD' | 'EUR' | 'JPY' | 'GBP'

export type CurrencyContext = {
  currency: CurrencySymbol
  rates?: Record<string, number>
  setCurrency: (currency: CurrencySymbol) => void
}

export const currencyContext = createContext<CurrencyContext>({
  currency: 'EUR',
  setCurrency: () => {}
})
