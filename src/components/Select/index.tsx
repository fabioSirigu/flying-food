// import { PropsWithChildren } from 'react'
// import { PropsWithChildren } from 'react'
// import { ChangeEvent } from 'react'
import { memo } from 'react'
import { OptionsType } from '../api/types'
import { StyledSelect } from './styled'

type Props = {
  options: OptionsType[]
}

export const Select = memo(({ options }: Props) => {
  return (
    <StyledSelect>
      {options.map((item, index) => (
        <option key={index} value={index}>
          {item.label}
        </option>
      ))}
    </StyledSelect>
  )
})
