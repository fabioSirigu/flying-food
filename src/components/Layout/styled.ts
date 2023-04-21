import styled from 'styled-components'

export const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const StyledBody = styled.div`
  display: flex;
  height: 100vh;
`

export const StyledMain = styled.div`
  border-top-left-radius: ${({ theme }) => theme.radii[3]}rem;
  padding-bottom: 2rem;
  width: 100%;
  height: 100%;
  flex: 1;
  overflow-y: scroll;
  background: ${({ theme }) => theme.colors['backgroundDark']};
`
