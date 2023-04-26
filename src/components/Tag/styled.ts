import styled from 'styled-components'
import { ThemeColor, FontVariant, ThemeSpacing } from '../../style/theme'

export type TagProps = {
  background?: ThemeColor
  colorText?: ThemeColor
  radius?: number
  border?: string
  font?: FontVariant
  quantity: number | string
  value?: string
  padding?: ThemeSpacing
}

export const StyledTag = styled.div<TagProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, background }) =>
    theme.colors[background || 'background']};
  width: max-content;
  padding: ${({ theme, padding }) =>
    `${theme.spacings[padding || 'sm'] / 2}rem ${
      theme.spacings[padding || 'sm'] * 2
    }rem`};
  border-radius: ${({ theme, radius }) => theme.radii[radius || 2]}rem;
  color: ${({ theme, colorText }) => theme.colors[colorText || 'text']};
`
