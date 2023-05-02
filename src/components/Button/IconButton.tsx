import React, { PropsWithChildren } from 'react'
import { Icon } from '../Icon'
import { ButtonProps, IconWrapper, StyledButton } from './styled'

type Props = PropsWithChildren<Partial<ButtonProps>>
type IconProps = {
  onClick?: () => void
}
export const IconButton = ({
  color,
  iconColor,
  iconName = 'check',
  padding = 'md',
  rounded,
  outline,
  children,
  onClick,

  ...rest
}: Props & IconProps) => {
  return (
    <StyledButton
      color={color!}
      iconColor={iconColor}
      iconName={iconName}
      padding={padding}
      rounded={rounded}
      outline={outline}
      onClick={onClick}
      {...rest}
    >
      <IconWrapper>
        <Icon iconName={iconName} color={iconColor!} />
      </IconWrapper>
    </StyledButton>
  )
}
