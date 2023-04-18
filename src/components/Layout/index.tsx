import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
}
