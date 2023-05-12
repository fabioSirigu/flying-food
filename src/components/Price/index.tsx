import React, { memo, PropsWithChildren } from 'react'
import { useCurrency } from '../../hooks/useCurrency'
import { FontVariant, ThemeColor } from '../../style/theme'
import { ValueType } from '../api/types'

import { StyledPrice, PriceProps } from './styled'

type Props = {
  font?: FontVariant
  background?: ThemeColor
  title: ValueType
  value?: string
} & PropsWithChildren<Partial<PriceProps>>

export const Price = memo(
  ({
    background,
    colorText = 'text',
    font,
    title,
    value,

    ...rest
  }: Props) => {
    const priceRate = useCurrency()
    return (
      <StyledPrice color={colorText} variant={font}>
        {priceRate(title)}
      </StyledPrice>
    )
  }
)
