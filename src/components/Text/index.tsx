import React, { PropsWithChildren } from 'react'
import { ThemeColor, FontVariant } from '../../style/theme'
import { StyledText } from './styled'

type Props = PropsWithChildren<{
  variant?: FontVariant
  color?: ThemeColor
}>

export const Text = ({ variant = 'span', color = 'primaryDark', children }: Props) => {
  return (
    <StyledText as={variant} color={color}>
      {children}
    </StyledText>
  )
}
