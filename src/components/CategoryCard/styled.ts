import { PropsWithChildren } from 'react'

import styled from 'styled-components'

import { ThemeColor } from '../../style/theme'
import { TagDto } from '../api/types'

export type CategoryCardProps = {
  background?: ThemeColor
  children?: PropsWithChildren
  category?: TagDto
  imageUrl?: string
}

export const StyledCategoryCard = styled.div<CategoryCardProps>`
  width: 120px;
  background: ${({ theme, background }) => theme.colors[background || 'backgroundLight']};
  border-radius: ${({ theme }) => theme.radii[3]}rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TextWrapper = styled.div`
  text-align: center;

  padding-bottom: 1rem;
  margin: auto;
`

export const SelectedCategory = styled.div`
  height: 5px;
  width: 60px;
  border-bottom: 1px solid red;
`
