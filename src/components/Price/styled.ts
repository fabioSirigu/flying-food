import styled from 'styled-components'
import { ThemeColor, FontVariant, ThemeSpacing } from '../../style/theme'

export type PriceProps = {
  background?: ThemeColor
  colorText?: ThemeColor
  radius?: number
  font?: FontVariant
  title?: string
  padding?: ThemeSpacing
  value?: string
}

export const StyledPrice = styled.span<PriceProps>`
  padding: ${({ theme, padding }) =>
    `${theme.spacings[padding || 'sm']}rem ${theme.spacings[padding || 'sm'] * 2}rem`};
  color: ${({ theme, colorText }) => theme.colors[colorText || 'text']};
`
