import { PropsWithChildren, useEffect, useState } from 'react'
import { CurrencySymbol, currencyContext } from '../../context/currency'
import { getUSDRates } from '../api'

const Provider = currencyContext.Provider
export const CurrencyProvider = ({ children }: PropsWithChildren) => {
  const [currency, setCurrency] = useState<CurrencySymbol>('EUR')
  const [rates, setRates] = useState<Record<string, number>>()
  useEffect(() => {
    getUSDRates().then((data) => setRates(data.rates))
  }, [])
  return <Provider value={{ currency, setCurrency, rates }}>{children}</Provider>
}
