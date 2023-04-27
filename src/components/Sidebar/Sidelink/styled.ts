import styled from 'styled-components'
import { ThemeColor } from '../../../style/theme'
import { IconButton } from '../../Button'
import { DefaultButton } from '../../Button/DefaultButton'
import { NameIcon } from '../../Icon/config'

export type SidelinkProps = {
  background?: ThemeColor
  backgroundIcon?: ThemeColor
  colorText?: ThemeColor
  iconTitle?: NameIcon
  className?: string
  text?: string
}

export const SidelinkWrapper = styled.div<SidelinkProps>`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors['background']};
  :hover {
    background: ${({ theme }) => theme.colors['primary']};
  }

  border-radius: ${({ theme }) => theme.radii[3]}rem;
  padding-right: 2rem;
`

export const IconLink = styled(IconButton)`
  border: none;
`
export const DefaultLink = styled(DefaultButton)`
  border: none;
`
