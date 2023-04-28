import { ChangeEvent, useContext } from 'react'
import { currencyContext } from '../../context/currency'
import { CurrencySymbol } from '../../context/currency'
import { StyledCurrency } from './styled'

const options: CurrencySymbol[] = ['EUR', 'USD', 'JPY', 'GBP']
export const CurrencySelect = () => {
  const { currency, setCurrency } = useContext(currencyContext)
  console.log('🚀 ~ file: index.tsx:9 ~ CurrencySelect ~ setCurrency:', setCurrency)
  console.log('🚀 ~ file: index.tsx:9 ~ CurrencySelect ~ currency:', currency)
  return (
    <StyledCurrency
      value={currency}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as CurrencySymbol
        setCurrency(value)
      }}
    >
      {options.map((item, index) => (
        <option value={item}>{item}</option>
      ))}
    </StyledCurrency>
  )
}
