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
  height: 50px;
  padding: ${({ theme, padding }) =>
    `${theme.spacings[padding || 'md']}rem ${theme.spacings[padding || 'md'] * 3}rem`};
  //border-radius: ${({ theme, radius }) => theme.radii[radius || 3]}rem;
  color: ${({ theme, colorText }) => theme.colors[colorText || 'text']};
  display: flex;
  justify-content: space-between;
`
export const IconWrapper = styled.div`
  display: flex;
  gap: 5px;
`

export const CartQty = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  font-size: 0.6rem;
  display: flex;
  width: 15px;
  height: 15px;
  position: absolute;
  right: 5.7rem;
  top: 1.6rem;
  justify-content: center;
  align-items: center;
`
