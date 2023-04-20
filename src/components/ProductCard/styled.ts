import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { ThemeColor } from '../../style/theme'

export type ProductCardProps = {
  background?: ThemeColor
  children?: PropsWithChildren
}
export const StyledCard = styled.div`
  margin-top: 4rem;
  border-radius: ${({ theme }) => theme.radii[3]}rem;
  width: 200px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  position: relative;
  padding: 2rem 0.8rem;
`

export const ImageWrapper = styled.div`
  position: absolute;
  top: -4.5rem;
  left: 50%;
  transform: translateX(-50%);
`

export const TextWrapper = styled.div`
  padding: 1rem;
`
export const FooterCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FooterRightWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`
