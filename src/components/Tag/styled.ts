import styled from 'styled-components'
import { ThemeColor, FontVariant, ThemeSpacing } from '../../style/theme'

export type TagProps = {
  background?: ThemeColor
  colorText?: ThemeColor
  radius?: number
  border?: string
  font?: FontVariant
  title?: string
  padding?: ThemeSpacing
}

export const StyledTag = styled.div<TagProps>`
  background-color: ${({ theme, background }) =>
    theme.colors[background || 'background']};
  width: max-content;
  padding: ${({ theme, padding }) =>
    `${theme.spacings[padding || 'sm']}rem ${theme.spacings[padding || 'sm'] * 2}rem`};
  border-radius: ${({ theme, radius }) => theme.radii[radius || 3]}rem;
  color: ${({ theme, colorText }) => theme.colors[colorText || 'text']};
`
