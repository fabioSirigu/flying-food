import React, { PropsWithChildren } from 'react'
import { Text } from '../Text'
import { StyledPrice, PriceProps } from './styled'

type Props = PropsWithChildren<Partial<PriceProps>>

export const Price = ({
  background,
  colorText = 'text',
  font,
  title,
  value,

  ...rest
}: Props) => {
  return (
    <StyledPrice background={background} font={font} title={title} value={value}>
      <Text color={colorText} variant={font}>
        {`${value || '$'}${title}` || '56'}
      </Text>
    </StyledPrice>
  )
}
