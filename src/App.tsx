import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Main from './pages/Main'
import Service from './pages/Service'

function App() {

  return (
    <Routes>
      <Route path="/RA_SAGA_workspace-front" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='item/:id' element={<Service />} />
      </Route>
    </Routes>
  )
}

export default App
