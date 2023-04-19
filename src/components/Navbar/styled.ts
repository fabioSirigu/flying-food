import styled from 'styled-components'
import { ThemeColor, FontVariant, ThemeSpacing } from '../../style/theme'

export type NavbarProps = {
  background?: ThemeColor
  colorText?: ThemeColor
  radius?: number
  border?: string
  font?: FontVariant
  padding?: ThemeSpacing
}

export const StyledNavbar = styled.div<NavbarProps>`
  background-color: ${({ theme, background }) =>
    theme.colors[background || 'background']};
  width: 100%;
  padding: ${({ theme, padding }) =>
    `${theme.spacings[padding || 'sm']}rem ${theme.spacings[padding || 'sm'] * 2}rem`};
  //border-radius: ${({ theme, radius }) => theme.radii[radius || 3]}rem;
  color: ${({ theme, colorText }) => theme.colors[colorText || 'text']};
  display: flex;
  justify-content: space-between;
`
export const IconWrapper = styled.div`
  display: flex;
  gap: 5px;
`
