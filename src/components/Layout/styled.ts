import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
// import { ThemeColor, FontVariant, ThemeSpacing } from '../../style/theme'

export const StyledRightContainer = styled.div`
  width: 100%;
  display: 'flex';
  flex-direction: 'column';
`

export const StyledBody = styled.div`
  display: flex;
`

export const StyledMain = styled.div`
  border-top-left-radius: ${({ theme }) => theme.radii[3]}rem;
  height: 100%;
  background: ${({ theme }) => theme.colors['backgroundDark']};
`
