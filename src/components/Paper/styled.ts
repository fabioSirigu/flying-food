import styled from 'styled-components'
import { ThemeColor } from '../../style/theme'

export type PaperProps = {
  background?: ThemeColor
  colorText?: ThemeColor
  radius?: number
}
export const StyledPaper = styled.div<PaperProps>`
  width: max-content;
`
