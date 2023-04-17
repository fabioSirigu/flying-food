import React, { PropsWithChildren } from 'react'
import { Text } from '../Text'
import { ButtonProps, StyledButton } from './styled'

type Props = PropsWithChildren<Partial<ButtonProps>>

export const DefaultButton = ({
  color = 'primary',
  colorText = 'text',
  font = 'span',
  padding = 'md',
  rounded,
  bordered,
  children,

  ...rest
}: Props) => {
  return (
    <StyledButton
      color={color}
      colorText={colorText}
      font={font}
      padding={padding}
      rounded={rounded}
      bordered={bordered}
      {...rest}
    >
      <Text color={colorText} variant={font}>
        {children}
      </Text>
    </StyledButton>
  )
}
