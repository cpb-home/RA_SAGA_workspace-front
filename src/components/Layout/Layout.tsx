import { Outlet } from 'react-router-dom'
import Header from '../../pages/Header'

const Layout = () => {
  return (
    <div className='container'>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
