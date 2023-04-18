import React, { PropsWithChildren } from 'react'
import { InputProps, StyledInput } from './styled'

type Props = PropsWithChildren<Partial<InputProps>>

export const Input = ({
  background,
  colorText,
  placeholder,

  ...rest
}: Props) => {
  return <StyledInput {...rest} placeholder={placeholder} colorText={colorText} />
}
