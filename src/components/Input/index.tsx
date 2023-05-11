import { type } from 'os'
import React, { PropsWithChildren } from 'react'
import { InputProps, StyledInput } from './styled'

type Props = PropsWithChildren<Partial<InputProps>>

export const Input = ({
  background,
  colorText,
  placeholder,
  onChange,
  type,

  ...rest
}: Props) => {
  return (
    <StyledInput
      onChange={onChange}
      {...rest}
      placeholder={placeholder}
      colorText={colorText}
      type={type}
    />
  )
}
