import styled, { css } from 'styled-components'
import { ThemeColor } from '../../../style/theme'
import { NameIcon } from '../../Icon/config'

export type SidelinkProps = {
  background?: ThemeColor
  backgroundIcon?: ThemeColor
  colorText?: ThemeColor
  iconTitle?: NameIcon

  text?: string
}

export const SidelinkWrapper = styled.div<SidelinkProps>`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ background }) =>
    background
      ? css`
          background: ${({ theme }) => theme.colors['primary']};
        `
      : css`
          background: ${({ theme }) => theme.colors['background']};
        `}

  border-radius: ${({ theme }) => theme.radii[3]}rem;
  padding-right: 2rem;
`
