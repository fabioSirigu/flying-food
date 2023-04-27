import styled from 'styled-components'
import { ThemeColor, ThemeSpacing } from '../../style/theme'
import { Text } from '../Text'

export type PriceProps = {
  colorText?: ThemeColor
  radius?: number
  padding?: ThemeSpacing
}

export const StyledPrice = styled(Text)<PriceProps>`
  padding: ${({ theme, padding }) =>
    `${theme.spacings[padding || 'sm']}rem ${theme.spacings[padding || 'sm'] * 2}rem`};
  color: ${({ theme, colorText }) => theme.colors[colorText || 'text']};
`
// export const StyledPricexxx = styled(Text)
