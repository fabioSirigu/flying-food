import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { ThemeColor } from '../../style/theme'

export type ProductCardProps = {
  background?: ThemeColor
  children?: PropsWithChildren
}
export const StyledCard = styled.div`
  border-radius: ${({ theme }) => theme.radii[3]}rem;
  width: 240px;
  height: 380px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  position: relative;
  padding: 2rem 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
`
export const LinkWrapper = styled.div`
  cursor: pointer;
  flex: 1;
`
export const ImageWrapper = styled.div`
  position: absolute;
  width: 120px;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
`

export const TextWrapper = styled.div`
  padding: 3rem 1rem 1rem 1rem;
  flex-grow: 1;
`
export const FooterCardWrapper = styled.div`
  display: flex;
  padding: 0 1rem;
  align-items: center;
  justify-content: space-between;
`

export const FooterRightWrapper = styled.div`
  display: flex;
  gap: 0.2rem;
`
export const StyledVariant = styled.div`
  display: flex;
  gap: 1rem;
  width: 340px;
  height: 220px;
  padding: 1rem;
`

export const FooterVariant = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: left;
  justify-content: space-between;
`

export const FooterVariantRight = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
`
