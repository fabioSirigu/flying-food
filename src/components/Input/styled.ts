import styled from 'styled-components'
import { ThemeColor, ThemeWidth } from '../../style/theme'
import { AnyCallbackFunction } from '../api/types'

export type InputProps = {
  background?: ThemeColor
  colorText?: ThemeColor
  inputWidth?: ThemeWidth
  placeholder?: string
  radius?: number
  border?: string
  onChange?: AnyCallbackFunction
  value?: string
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
