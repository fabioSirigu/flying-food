import { useContext } from 'react'
import { ValueType } from '../components/api/types'
import { currencyContext } from '../context/currency'

const currenciesMap: Record<string, string> = {
  EUR: '€',
  USD: '$',
  GBP: '£',
  JPY: '¥'
}
export const formatPrice = ({ type, value }: ValueType) => {
  return `${currenciesMap[type]}${value.toFixed(2)}`
}
export const useCurrency = () => {
  const { currency, rates } = useContext(currencyContext)
  const format = ({ value, type }: ValueType) => {
    if (!rates) return '...'
    if (type === currency) return formatPrice({ type, value })
    const currentRate = rates[type] // 0.91
    const currencyRate = rates[currency] // 1
    const valToUSD = type === 'USD' ? value : value / currentRate
    const newVal = currency === 'USD' ? valToUSD : valToUSD * currencyRate
    return formatPrice({ type: currency, value: newVal })
  }
  return format
}
