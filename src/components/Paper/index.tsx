import { memo, PropsWithChildren } from 'react'
import { ThemeColor } from '../../style/theme'
import { StyledPaper } from './styled'

type Props = PropsWithChildren<{
  background?: ThemeColor
}>

export const Paper = memo(({ children }: Props) => {
  return <StyledPaper>{children}</StyledPaper>
})
