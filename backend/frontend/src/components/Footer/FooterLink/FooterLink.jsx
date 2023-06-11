import { useState, useEffect } from 'react'
import './footerlink.css'

export default function FooterLink ({ title, links }) {
  const [containerExpanded, setContainerExpanded] = useState(false)
  const [footerSmall, setFooterSmall] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const [toggleMenu, setToggleMenu] = useState('')

  const updateLayout = () => {
    if (width <= 1024) {
      if (toggleMenu === 'active') {
        setContainerExpanded(true)
      } else {
        setContainerExpanded(false)
      }
      setFooterSmall(true)
    } else {
      setToggleMenu('')
      setFooterSmall(false)
      setContainerExpanded(true)
    }
  }
  useEffect(() => {
    const updateDimensions = () => {
      setWidth(window.innerWidth)
      updateLayout()
    }
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [width])

  function handleFooterHeadClick (e) {
    if (toggleMenu === 'active') {
      setToggleMenu('out')
    } else {
      setToggleMenu('active')
    }
    if (footerSmall) {
      setContainerExpanded(prev => !prev)
    }
  }

  return (
    <>
      <div className='column company-column'>
        <div className='company-head-container' onClick={handleFooterHeadClick}>
          <div className='footer-link-title'>
            <p>{title}</p>
          </div>
          {footerSmall && (
            <div className={`footer-company-expander ${toggleMenu}`}>
              <ion-icon name='add-outline' size='small'></ion-icon>
            </div>
          )}
        </div>
        <div
          className='company-list-container'
          style={{ display: containerExpanded ? 'block' : 'none' }}
        >
          <ul className='footer-list-items'>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.tag}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {footerSmall && <hr />}
    </>
  )
}
