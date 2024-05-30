import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='container'>
      <main className='main'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
