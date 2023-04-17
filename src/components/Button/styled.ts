// import { Icon } from '@fortawesome/fontawesome-svg-core'
import styled from 'styled-components'
import { FontVariant, ThemeColor, ThemeSpacing } from '../../style/theme'

export type ButtonProps = {
  color: ThemeColor
  colorText: ThemeColor
  font?: FontVariant
  padding: ThemeSpacing
  radius?: number
  border?: string
  rounded?: boolean
  bordered?: boolean
}
export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme, color }) => theme.colors[color]};
  padding: ${({ theme, padding, rounded }) =>
    rounded
      ? `${theme.spacings[padding]}rem`
      : `${theme.spacings[padding] / 2}rem ${theme.spacings[padding] * 2}rem`};
  border-radius: ${({ theme, radius, rounded }) =>
    rounded ? `${50}%` : `${theme.radii[radius || 2]}rem`};
  border: ${({ border, bordered }) => (bordered ? `${border}rem` : 'none')};
  aspect-ratio: ${({ rounded }) => (rounded ? `${1}` : 'none')};
`
