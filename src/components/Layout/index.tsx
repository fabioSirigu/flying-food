import { Outlet } from 'react-router-dom'
import { Navbar } from '../Navbar'

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
}
