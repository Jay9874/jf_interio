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
          { tag: 'Home', url: '' , type: 'text', icon:'none'},
          {tag: 'Categories', url: '/categories', type: 'text', icon: 'none'},
          {tag: 'Cart', url: '/cart', type: 'icon', icon: 'shopping_bag'},          
          {tag: 'Profile', url: '/profile', type: 'icon', icon: 'account_circle'},
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
