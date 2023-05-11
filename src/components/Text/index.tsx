import React, { PropsWithChildren } from 'react'
import { ThemeColor, FontVariant, FontWeight } from '../../style/theme'
import { StyledText } from './styled'

type Props = PropsWithChildren<{
  variant?: FontVariant
  color?: ThemeColor
  weight?: FontWeight
}>

export const Text = ({
  variant = 'span',
  color = 'primaryDark',
  weight = 'mediumBold',
  children
}: Props) => {
  return (
    <StyledText weight={weight} as={variant} color={color}>
      {children}
    </StyledText>
  )
}
