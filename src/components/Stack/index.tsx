import { PropsWithChildren } from 'react'
import { StackProps, StyledStack } from './styled'

type Props = PropsWithChildren<StackProps>

export const Stack = ({ direction, gap, children }: Props) => {
  return (
    <StyledStack direction={direction} gap={gap}>
      {children}
    </StyledStack>
  )
}
