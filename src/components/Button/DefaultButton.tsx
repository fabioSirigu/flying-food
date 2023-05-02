import React, { PropsWithChildren } from 'react'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { ButtonProps, IconWrapper, StyledButton, TextWrapper } from './styled'

type Props = PropsWithChildren<Partial<ButtonProps>>

export const DefaultButton = ({
  color,
  colorText,
  font,
  padding,
  iconColor,
  iconBackground,
  title,
  rounded,
  outline,
  children,
  iconName,
  paddingRight,

  ...rest
}: Props) => {
  return (
    <StyledButton
      color={color!}
      iconBackground={iconBackground}
      colorText={colorText}
      font={font}
      padding={padding!}
      rounded={rounded}
      outline={outline}
      {...rest}
    >
      {title && (
        <TextWrapper paddingRight={paddingRight}>
          <Text color={colorText} variant={font}>
            {title}
          </Text>
        </TextWrapper>
      )}
      {iconName && (
        <IconWrapper background={iconBackground}>
          <Icon color={color!} iconName={iconName} />
        </IconWrapper>
      )}
    </StyledButton>
  )
}
