import { memo, PropsWithChildren } from 'react'
import { ThemeColor } from '../../style/theme'
import { PaperProps, StyledPaper } from './styled'

type Props = PropsWithChildren<{
  background?: ThemeColor
  onClick?: () => void
}>

export const Paper = memo(({ radius, children }: Props & PaperProps) => {
  return <StyledPaper radius={radius}>{children}</StyledPaper>
})
