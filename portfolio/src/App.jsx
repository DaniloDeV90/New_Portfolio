import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route,Routes, BrowserRouter} from "react-router-dom"
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Skills from './Pages/Skills/Skills'
import Footer from './Components/Footer/Footer'
import Projetos from './Pages/Projetos/Projetos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/Projetos' element={<Projetos/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
