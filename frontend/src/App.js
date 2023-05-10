import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Footer, About, Navbar } from './components/index'
import { Home, Repair, Kitchen, Bedroom, Livingroom, Profile, Cart } from './Pages/index'
import { navlinks } from './constants'

function App () {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar navlinks={navlinks} />
        <Routes>
          <Route exact path='' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/repair' element={<Repair />} />
          <Route exact path='/kitchen' element={<Kitchen />} />
          <Route exact path='/bedroom' element={<Bedroom />} />
          <Route exact path='/livingroom' element={<Livingroom />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
