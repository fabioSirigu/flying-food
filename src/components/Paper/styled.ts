import styled from 'styled-components'
import { ThemeColor } from '../../style/theme'

export type PaperProps = {
  background?: ThemeColor
  colorText?: ThemeColor
  radius?: number
}
export const StyledPaper = styled.div<PaperProps>`
  width: max-content;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.radii[3]}rem;
  transition: 0.4s;
`
