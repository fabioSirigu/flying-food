// import { Icon } from '@fortawesome/fontawesome-svg-core'

import styled from 'styled-components'
import { ThemeColor } from '../../style/theme'

export type SearchBoxProps = {
  background?: ThemeColor
  colorText?: ThemeColor
  radius?: number
  border?: string
  placeholder?: string
}

export const StyledSearchBox = styled.div<SearchBoxProps>`
  background-color: ${({ theme, background }) =>
    theme.colors[background || 'background']};
  width: max-content;
  padding: 0.25rem 1rem;
  border-radius: ${({ theme, radius }) => theme.radii[radius || 1]}rem;
  color: ${({ theme, colorText }) => theme.colors[colorText || 'text']};
`
