import './App.css'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import HIstory from './Pages/HIstory'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route element={<Landing/>} path='/'/>
          <Route element={<Home/>} path='/home'/>
          <Route element={<HIstory/>} path='/history'/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
