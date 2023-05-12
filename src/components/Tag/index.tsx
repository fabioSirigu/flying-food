import React, { memo, PropsWithChildren } from 'react'
import { Text } from '../Text'
import { StyledTag, TagProps } from './styled'

type Props = PropsWithChildren<Partial<TagProps>>

export const Tag = memo(
  ({
    background,
    colorText = 'text',
    font,
    quantity,
    value,

    ...rest
  }: Props) => {
    return (
      <StyledTag
        background={background}
        font={font}
        quantity={quantity || 32}
        value={value}
      >
        <Text color={colorText} variant={font}>
          {`${value} ${quantity}`}
        </Text>
      </StyledTag>
    )
  }
)
