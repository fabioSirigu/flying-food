import React, { PropsWithChildren } from 'react'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { ButtonProps, StyledButton } from './styled'

type Props = PropsWithChildren<Partial<ButtonProps>>

export const DefaultButton = ({
  color = 'primary',
  colorText = 'text',
  font = 'span',
  padding = 'lg',
  title,
  rounded,
  outline,
  children,
  iconName,
  review,

  ...rest
}: Props) => {
  return (
    <StyledButton
      color={color}
      colorText={colorText}
      font={font}
      padding={padding}
      rounded={rounded}
      outline={outline}
      review={review}
      {...rest}
    >
      {title && <Text color={colorText} variant={font} text={title} />}
      {iconName && <Icon color="text" iconName={iconName} />}
    </StyledButton>
  )
}
