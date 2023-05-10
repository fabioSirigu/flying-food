import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { ThemeColor } from '../../style/theme'

export type ProductCardProps = {
  background?: ThemeColor
  children?: PropsWithChildren
}
export const StyledCard = styled.div`
  border-radius: ${({ theme }) => theme.radii[3]}rem;
  height: 320px;
  position: relative;
  padding: 2rem 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  transition: 0.5s;
  :hover {
    box-shadow: 0px 0px 15px 2px #ffffff;
    cursor: pointer;
  }
`
export const LinkWrapper = styled.div`
  cursor: pointer;
  flex: 1;
`
export const ImageWrapper = styled.div`
  position: absolute;
  width: 120px;
  top: -3rem;
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
export const LeftCard = styled.div`
  width: 60%;
  cursor: pointer;
`

export const RightCard = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const MainText = styled.div`
  flex-grow: 1;
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
