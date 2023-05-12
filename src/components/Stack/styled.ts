import styled from 'styled-components'

export type StackProps = {
  direction?: string
  gap?: number
}

export const StyledStack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'vertical' ? 'column' : 'row')};
  gap: ${({ gap }) => (gap ? gap : 1)}rem;
`
