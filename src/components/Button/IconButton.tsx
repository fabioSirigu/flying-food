import React, { PropsWithChildren } from 'react'
import { Icon } from '../Icon'
import { ButtonProps, IconWrapper, StyledButton } from './styled'

type Props = PropsWithChildren<Partial<ButtonProps>>

export const IconButton = ({
  color,
  iconColor,
  iconName = 'check',
  padding = 'md',
  rounded,
  outline,
  children,

  ...rest
}: Props) => {
  return (
    <StyledButton
      color={color!}
      iconColor={iconColor}
      iconName={iconName}
      padding={padding}
      rounded={rounded}
      outline={outline}
      {...rest}
    >
      <IconWrapper>
        <Icon iconName={iconName} color={iconColor!} />
      </IconWrapper>
    </StyledButton>
  )
}
