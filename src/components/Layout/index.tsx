import { Outlet } from 'react-router-dom'
import { Navbar } from '../Navbar'
import { Sidebar } from '../Sidebar'
import { StyledBody, StyledRightContainer, StyledMain } from './styled'

export const Layout = () => {
  return (
    <StyledBody>
      <Sidebar />
      <StyledRightContainer>
        <Navbar />
        <StyledMain>
          <Outlet />
        </StyledMain>
      </StyledRightContainer>
    </StyledBody>
  )
}
