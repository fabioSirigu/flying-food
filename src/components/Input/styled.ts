// import { Icon } from '@fortawesome/fontawesome-svg-core'

import styled from 'styled-components'
import { ThemeColor, ThemeWidth } from '../../style/theme'

export type InputProps = {
  background?: ThemeColor
  colorText?: ThemeColor
  inputWidth?: ThemeWidth
  placeholder?: string
  radius?: number
  border?: string
}

export const StyledInput = styled.input<InputProps>`
  width: ${({ theme, inputWidth }) => theme.sizes[inputWidth || 'lg'] * 4}px;
  background-color: transparent;
  color: ${({ theme, colorText }) => theme.colors[colorText || 'text']};
  font-style: italic;
  border: none;
  :focus {
    outline: none;
  }
`
