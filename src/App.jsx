import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './componentes/navbar'
import Footer from './componentes/footer'

 

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
