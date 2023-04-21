import { PropsWithChildren } from 'react'

import styled from 'styled-components'

import { ThemeColor } from '../../style/theme'

export type CategoryCardProps = {
  background?: ThemeColor
  children?: PropsWithChildren
  title?: string
}

export const StyledCategoryCard = styled.div<CategoryCardProps>`
  background: ${({ theme, background }) => theme.colors[background || 'backgroundLight']};
  border-radius: ${({ theme }) => theme.radii[3]}rem;
`

export const TextWrapper = styled.div`
  text-align: center;
  width: 60px;
  border-bottom: 1px solid red;
  padding-bottom: 1rem;
  margin: auto;
`

export const ImageWrapper = styled.div``
