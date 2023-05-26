import { useState, useEffect, useRef } from 'react'
import './auth.css'

export default function Auth ({ hideAuthForm }) {
  const [login, setLogin] = useState(true)
  const [authHeading, setAuthHeading] = useState('Welcome Back')
  const [authButtonText, setAuthButtonText] = useState('Login')
  const authFormRef = useRef(null)
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  function useOutsideAlerter (ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside (event) {
        if (ref.current && !ref.current.contains(event.target)) {
          hideAuthForm()
        }
      }
      // Bind the event listener
      authFormRef.current.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  return (
    <div className='auth-form-popup' ref={authFormRef}>
      <div className='auth-shadow-container'>
        <div className='auth-content-container'>
          <div className='auth-form-container' ref={wrapperRef}>
            <div className='auth-form-main'>
              <div className='auth-form-switcher'>
                <div className='auth-form-switcher-btns form-switch-login'>
                  <button
                    className={
                      login
                        ? 'auth-form-switcher-btn active'
                        : 'auth-form-switcher-btn'
                    }
                    onClick={() => setLogin(true)}
                  >
                    Login
                  </button>
                </div>
                <div className='auth-form-switcher-btns form-switch-signup'>
                  <button
                    className={
                      !login
                        ? 'auth-form-switcher-btn active'
                        : 'auth-form-switcher-btn'
                    }
                    onClick={() => setLogin(false)}
                  >
                    New Account
                  </button>
                </div>
              </div>

              <form className='auth-form' autoComplete='off'>
                <div className='auth-form-heading-container'>
                  <h1 className='auth-form-heading'>{authHeading}</h1>
                </div>
                <div className='auth-input-container'>
                  <div className='auth-input-item auth-email-container'>
                    <label htmlFor='email'>Email</label>
                    <input
                      autoComplete='off'
                      className='auth-form-inputs'
                      type='email'
                      id='email'
                      placeholder='email@example.com'
                    />
                  </div>
                  <div className='auth-input-item auth-password-container'>
                    <label htmlFor='password'>Password</label>
                    <input
                      className='auth-form-inputs'
                      type='password'
                      id='password'
                      placeholder='~N}ypepD6^5(U;~B'
                    />
                  </div>
                </div>
                <div className='auth-btn-container'>
                  <button className='auth-form-btn' type='submit'>
                    {authButtonText}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
