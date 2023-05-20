import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Brand from '../Brand/Brand'
import './navbar.css'
import Auth from '../Auth/Auth'

export default function Navbar ({ navlinks }) {
  const { pathname } = useLocation()
  const [isAuth, setIsAuth] = useState(false)
  const [authVisible, setAuthVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const [toggleMenu, setToggleMenu] = useState('')
  const [displayDropdown, setDisplayDropdown] = useState('none')
  const [linkFade, setLinkFade] = useState('')

  const updateDimensions = () => {
    setWidth(window.innerWidth)
    if (width > 1082) {
      setMenuOpen(false)
      setToggleMenu('')
      setDisplayDropdown('none')
    }
  }
  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [width])

  const handleMenuClick = e => {
    if (!menuOpen) {
      setMenuOpen(true)
      setToggleMenu('active')
      setDisplayDropdown('block')
      setLinkFade('fadein')
    } else {
      setMenuOpen(false)
      if (toggleMenu === 'active') {
        setToggleMenu('out')
      }
      setLinkFade('fadeout')
      setTimeout(() => {
        setDisplayDropdown('none')
      }, 400)
    }
  }

  const handleLinkClick = e => {
    setMenuOpen(false)
    if (toggleMenu === 'active') {
      setToggleMenu('out')
    }
    setLinkFade('fadeout')
    setTimeout(() => {
      setDisplayDropdown('none')
    }, 400)
  }

  const handleNavIconClick = e => {
    handleLinkClick()
    if (!isAuth) {
      setAuthVisible(true)
    }
  }
  function hideAuthForm () {
    setAuthVisible(false)
  }

  return (
    <div className='navbar'>
      <div className='navbar-flex-container'>
        <div className='navbar-flex-item brand'>
          <Brand brandClick={handleLinkClick} />
        </div>
        <div className='navbar-flex-item links'>
          {navlinks.map((item, index) => {
            return item.type === 'text' ? (
              <div
                className='navlink-item navlink-text'
                key={index}
                onClick={handleLinkClick}
              >
                <Link to={item.url} name={item.tag}>
                  {item.tag}
                </Link>
              </div>
            ) : (
              <div
                className='navlink-item'
                key={index}
                onClick={handleNavIconClick}
              >
                <Link to={isAuth ? item.url : pathname} name={item.tag}>
                  <ion-icon name={item.name}></ion-icon>
                </Link>
              </div>
            )
          })}
          {/* Structure for menu button */}
          <div className='navlink-item menu-btn'>
            <div
              className={`btn-span-container ${toggleMenu}`}
              onClick={handleMenuClick}
            >
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`navbar-dropdown ${menuOpen ? 'active' : 'out'}`}
        style={{ display: displayDropdown }}
      >
        <div className='navbar-dropdown-container'>
          <div className='navbar-dropdown-items'>
            {navlinks.map((item, index) => {
              return (
                item.type === 'text' && (
                  <div
                    className={`dropdown-link ${linkFade}`}
                    onClick={handleLinkClick}
                    key={index}
                  >
                    <Link to={item.url} name={item.tag}>
                      {item.tag}
                    </Link>
                  </div>
                )
              )
            })}
          </div>
        </div>
      </div>
      {authVisible && <Auth hideAuthForm={hideAuthForm} />}
    </div>
  )
}
