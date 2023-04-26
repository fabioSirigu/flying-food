import React, { PropsWithChildren } from 'react'
import { FontVariant, ThemeColor } from '../../style/theme'
import { Text } from '../Text'
import { StyledPrice, PriceProps } from './styled'

type Props = {
  font?: FontVariant
  background?: ThemeColor
  title?: number
  value?: string
} & PropsWithChildren<Partial<PriceProps>>

export const Price = ({
  background,
  colorText = 'text',
  font,
  title,
  value,

  ...rest
}: Props) => {
  return (
    <StyledPrice color={colorText} variant="h3">
      {`${value || '$'}${title}`}
    </StyledPrice>
  )
}
