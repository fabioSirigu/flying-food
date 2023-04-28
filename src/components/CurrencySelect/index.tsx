import { StyledCurrency } from './styled'

const options = ['EUR', 'USD', 'JPY', 'GBP']
export const CurrencySelect = () => {
  return (
    <StyledCurrency>
      {options.map((item, index) => (
        <option value={index}>{item}</option>
      ))}
    </StyledCurrency>
  )
}
