import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Footer, About, Home, Navbar, Repair} from './components/index'

function App () {
  return (
    <div className='App'>
    <BrowserRouter>
      <Navbar
        navlinks={[
          { tag: 'Home', url: '' , type: 'text', icon:'none'},
          { tag: 'Repairing', url: '/repair' , type: 'text', icon:'none'},
          {tag: 'Categories', url: '/categories', type: 'text', icon: 'none'},
          {tag: 'Cart', url: '/cart', type: 'icon', icon: 'shopping_bag'},          
          {tag: 'Profile', url: '/profile', type: 'icon', icon: 'account_circle'},
        ]}
      />
        <Routes>
          <Route exact path='' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/repair' element={<Repair />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
