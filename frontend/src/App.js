import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Footer, About, Navbar } from './components/index'
import {
  Home,
  Repair,
  Kitchen,
  Bedroom,
  Livingroom,
  Profile,
  Cart
} from './Pages/index'
import { navlinks } from './constants'
import MyRoutes from './routes/MyRoutes'
import Protected from './utils/Protected'

function App () {
  const isAuth = false;
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

          <Route
            exact
            path='/profile'
            element={
              <Protected isAuth={isAuth}>
                <Profile />
              </Protected>
            }
          />

          <Route
            exact
            path='/cart'
            element={
              <Protected isAuth={isAuth}>
                <Cart />
              </Protected>
            }
          />

          <Route exact path='/:categorie' element={<MyRoutes />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
