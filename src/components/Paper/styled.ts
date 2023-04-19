import styled from 'styled-components'
import { ThemeColor } from '../../style/theme'

export type PaperProps = {
  background?: ThemeColor
  colorText?: ThemeColor
  radius?: number
}
export const StyledPaper = styled.div<PaperProps>`
  /* background: ${({ theme, background }) =>
    theme.colors[background || 'backgroundLight']}; */
  //border-radius: ${({ theme, radius }) => theme.radii[radius || 3]};
  width: max-content;
`
