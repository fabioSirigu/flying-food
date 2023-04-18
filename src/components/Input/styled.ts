// import { Icon } from '@fortawesome/fontawesome-svg-core'

import styled from 'styled-components'
import { ThemeColor } from '../../style/theme'

export type InputProps = {
  background?: ThemeColor
  colorText?: ThemeColor
  placeholder?: string
  radius?: number
  border?: string
}

export const StyledInput = styled.input<InputProps>`
  width: 150px;
  background-color: transparent;
  color: ${({ theme, colorText }) => theme.colors[colorText || 'text']};
  font-style: italic;
  border: none;
  :focus {
    outline: none;
  }
`
