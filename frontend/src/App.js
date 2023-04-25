import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import './App.css'

function App () {
  return (
    <div className='App'>
    <BrowserRouter>
      <Navbar
        navlinks={[
          { tag: 'Home', url: '' },
          { tag: 'About Us', url: '/about' },
          {tag: 'Categories', url: '/categories'},
          {tag: 'Cart', url: '/cart'},
          {tag: 'Profile', url: '/profile'}
        ]}
      />
        <Routes>
          <Route exact path='' element={<Home />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
