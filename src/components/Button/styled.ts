// import { Icon } from '@fortawesome/fontawesome-svg-core'

import styled from 'styled-components'
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
  review?: boolean
}
export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme, color, outline }) =>
    outline ? 'transparent' : theme.colors[color]};
  color: ${({ theme, color, outline, review, colorText }) =>
    !review
      ? outline
        ? 'black'
        : theme.colors[color]
      : `${theme.colors[colorText || 'text']}`};
  padding: ${({ theme, padding, rounded }) =>
    rounded
      ? `${theme.spacings[padding]}rem`
      : `${theme.spacings[padding] / 2}rem ${theme.spacings[padding] * 2}rem`};
  border-radius: ${({ theme, radius, rounded }) =>
    rounded ? `${50}%` : `${theme.radii[radius || 2]}rem`};
  border: ${({ theme, border, outline, colorText, review }) =>
    !review
      ? outline
        ? `${border}px solid ${theme.colors[colorText || 'secondary']}`
        : 'none'
      : `${border}px solid ${theme.colors['secondary']}`};
  aspect-ratio: ${({ rounded }) => (rounded ? `${1}` : 'none')};
  margin: 1rem;
`

export const IconWrapper = styled.div`
  width: ${({ theme }) => theme.sizes['sm']}px;
  height: ${({ theme }) => theme.sizes['sm']}px;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: ${1};
  color: white;
`
