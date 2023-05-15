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

export type SelectedProps = {
  selected?: boolean
}

export const StyledCategoryCard = styled.div<CategoryCardProps>`
  padding: 0 0.5rem;
  width: 120px;
  background: ${({ theme, background }) => theme.colors[background || 'backgroundLight']};
  border-radius: ${({ theme }) => theme.radii[3]}rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    scale: 1.05;
  }
`

export const TextWrapper = styled.div`
  text-align: center;
  padding-bottom: 1rem;
  margin: auto;
`

export const SelectedCategory = styled.div<SelectedProps>`
  height: 5px;
  width: 60px;
  border-bottom: ${({ theme, selected }) =>
    selected ? `1px solid ${theme.colors.primary}` : 'none'};
`
