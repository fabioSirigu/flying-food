// import { PropsWithChildren } from 'react'
// import { PropsWithChildren } from 'react'
import { StyledSelect } from './styled'

const options = [
  { value: 'sushi', label: 'Sushi' },
  { value: 'burger', label: 'Burger' },
  { value: 'pizza', label: 'Pizza' }
]
export const Select = () => {
  return (
    <StyledSelect>
      $
      {options.map((item, index) => (
        <option value={index}>{item.label}</option>
      ))}
    </StyledSelect>
  )
}
