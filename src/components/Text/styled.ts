import styled from 'styled-components'
import { ThemeColor, FontVariant, FontWeight } from '../../style/theme'

type Props = {
  as: FontVariant
  color: ThemeColor
  paddingRight?: boolean
  weight?: FontWeight
}

export const StyledText = styled.span<Props>`
  font-size: ${({ theme, as }) => {
    const textSize = theme.fonts[as].size
    return theme.fontSizes[textSize]
  }}rem;
  color: ${({ theme, color }) => theme.colors[color]};
  padding-right: ${({ paddingRight }) => (paddingRight ? '1rem' : null)};
  font-weight: ${({ theme, weight }) => (weight ? theme.fontWeight[weight] : null)};
`
