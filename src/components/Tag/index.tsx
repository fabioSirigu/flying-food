import React, { PropsWithChildren } from 'react'
import { Text } from '../Text'
import { StyledTag, TagProps } from './styled'

type Props = PropsWithChildren<Partial<TagProps>>

export const Tag = ({
  background,
  colorText = 'text',
  font,
  title,

  ...rest
}: Props) => {
  return (
    <StyledTag background={background} font={font} title={title}>
      <Text color={colorText} variant={font} text={title || 'h6'} />
    </StyledTag>
  )
}
