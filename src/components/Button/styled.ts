import styled, { css } from 'styled-components'
import { FontVariant, ThemeColor, ThemeSpacing } from '../../style/theme'
import { NameIcon } from '../Icon/config'

export type ButtonProps = {
  onClick?: () => void
  color: ThemeColor
  colorText?: ThemeColor
  iconColor?: ThemeColor
  iconName?: NameIcon
  iconBackground?: ThemeColor
  font?: FontVariant
  padding: ThemeSpacing
  radius?: number
  border?: string
  rounded?: boolean
  outline?: boolean
  title?: string
  paddingRight?: boolean
}

export type WrapperProps = {
  background?: ThemeColor
  iconColor?: ThemeColor

  paddingRight?: boolean
}
export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, color, outline }) =>
    outline ? 'transparent' : theme.colors[color]};
  color: ${({ theme, color, outline }) => (outline ? 'black' : theme.colors[color])};
  padding: ${({ theme, padding, rounded }) =>
    rounded
      ? `${theme.spacings[padding] * 2}rem`
      : `${theme.spacings[padding] / 2}rem ${theme.spacings[padding] * 2}rem`};
  border-radius: ${({ theme, radius, rounded }) =>
    rounded ? `${50}%` : `${theme.radii[radius || 2]}rem`};
  border: ${({ theme, border, outline, colorText, iconBackground }) =>
    outline
      ? `${border}px solid ${theme.colors[colorText || 'secondary']}`
      : iconBackground
      ? `${border}px solid ${theme.colors['secondary']}`
      : 'none'};
  aspect-ratio: ${({ rounded }) => (rounded ? `${1}` : 'none')};
  position: relative;
  cursor: pointer;
`
export const TextWrapper = styled.div<WrapperProps>`
  padding-right: ${({ paddingRight }) => (paddingRight ? '1rem' : null)};
`
export const IconWrapper = styled.div<WrapperProps>`
  height: 100%;
  color: ${({ theme }) => theme.colors['text']};

  ${({ background }) =>
    background
      ? css`
          background-color: ${({ theme }) => theme.colors['secondary']};
          color: white;
          overflow: hidden;
          position: absolute;
          right: 0;
          top: 0;
          aspect-ratio: ${1};
          border-radius: 50%;
        `
      : 'none'}

  display: flex;
  justify-content: center;
  align-items: center;
`
