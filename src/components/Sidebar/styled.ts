import styled from 'styled-components'
import { ThemeColor, FontVariant, ThemeSpacing } from '../../style/theme'

export type SidebarProps = {
  background?: ThemeColor
  colorText?: ThemeColor
  radius?: number
  border?: string
  font?: FontVariant
  padding?: ThemeSpacing
}

export const StyledSidebar = styled.div<SidebarProps>`
  margin-top: 20px;
  background-color: ${({ theme, background }) =>
    theme.colors[background || 'background']};
  width: 250px;
  height: 100vh;
  padding: ${({ theme, padding }) =>
    `${theme.spacings[padding || 'sm']}rem ${theme.spacings[padding || 'sm'] * 2}rem`};
  //border-radius: ${({ theme, radius }) => theme.radii[radius || 3]}rem;
  color: ${({ theme, colorText }) => theme.colors[colorText || 'text']};
  display: flex;
  justify-content: center;
`

export const TopSidebar = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
