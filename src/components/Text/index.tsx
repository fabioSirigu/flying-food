import React, { PropsWithChildren } from 'react'
import { ThemeColor, FontVariant } from '../../style/theme'
import { StyledText } from './styled'

type Props = {
  variant?: FontVariant
  text: string
  color?: ThemeColor
} & PropsWithChildren

export const Text = ({ variant = 'span', color = 'primaryDark', text }: Props) => {
  return (
    <StyledText as={variant} color={color}>
      {text}
    </StyledText>
  )
}
