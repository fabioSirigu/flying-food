import React, { PropsWithChildren } from 'react'
import { ThemeColor, FontVariant } from '../../style/theme'
import { StyledText } from './styled'

type Props = {
  variant?: FontVariant
  color?: ThemeColor
} & PropsWithChildren

export const Text = ({ variant = 'span', color = 'primaryDark', children }: Props) => {
  return (
    <StyledText as={variant} color={color}>
      {children}
    </StyledText>
  )
}
