// import { Icon } from '@fortawesome/fontawesome-svg-core'

import styled, { css } from 'styled-components'
import { FontVariant, ThemeColor, ThemeSpacing } from '../../style/theme'
import { NameIcon } from '../Icon/config'

export type ButtonProps = {
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
}

export type WrapperProps = {
  background?: ThemeColor
  iconColor?: ThemeColor
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
      ? `${theme.spacings[padding]}rem`
      : `${theme.spacings[padding] / 2}rem ${theme.spacings[padding] * 4}rem`};
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
`

export const IconWrapper = styled.div<WrapperProps>`
  width: 100%;
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
/* export const IconWrapperTwo = styled.div`
  color: ${({ theme }) => theme.colors['text']};
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgreen;
  border-radius: 50%;
  height: 100%;
  width: auto;
  aspect-ratio: 1/1;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
` */
