import { useState, useEffect, useRef } from 'react'
import './auth.css'

export default function Auth ({ hideAuthForm }) {
  const [login, setLogin] = useState(true)
  const [authHeading, setAuthHeading] = useState('Welcome Back')
  const [authButtonText, setAuthButtonText] = useState('Login')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [authFormLogin, setAuthFormLogin] = useState({
    email: '',
    password: ''
  })
  const [authFormSignup, setAuthFormSignup] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

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

  function switchToLogin () {
    setLogin(true)
    setLoading(false)
    setAuthHeading('Welcome Back')
    setAuthButtonText('Login')
  }

  function switchToSignup () {
    setLogin(false)
    setLoading(false)
    setAuthHeading("Let's start afresh")
    setAuthButtonText('Create')
  }

  function handleAuthSubmit (e) {
    e.preventDefault()
    setLoading(true)
    setError('')
  }
  return (
    <div
      className='auth-form-popup'
      ref={authFormRef}
      onSubmit={handleAuthSubmit}
    >
      <div className='auth-shadow-container'></div>
      <div className='auth-content-container'>
        <div className='auth-form-container' ref={wrapperRef}>
          <div className='auth-form-main'>
            <div className='auth-form-switcher'>
              <div
                className={`auth-form-switcher-btns form-switch-login ${
                  login ? 'colored' : 'active'
                }`}
                onClick={switchToLogin}
              >
                <button className='auth-form-switcher-btn'>Login</button>
              </div>
              <div
                className={`auth-form-switcher-btns form-switch-signup ${
                  login ? 'active' : 'colored'
                }`}
                onClick={switchToSignup}
              >
                <button className='auth-form-switcher-btn'>New Account</button>
              </div>
            </div>

            <form className='auth-form' autoComplete='off'>
              <div className='auth-form-heading-container'>
                <h1 className='auth-form-heading'>{authHeading}</h1>
              </div>
              <div className='auth-input-container'>
                {!login && (
                  <div className='auth-input-item auth-fullname-container'>
                    <label htmlFor='fullname'>Full Name</label>
                    <input
                      autoComplete='off'
                      className='auth-form-inputs'
                      type='text'
                      id='fullname'
                      placeholder='Ansh Sharma'
                      required
                    />
                  </div>
                )}
                {!login && (
                  <div className='auth-input-item auth-username-container'>
                    <label htmlFor='username'>User Name</label>
                    <input
                      autoComplete='off'
                      className='auth-form-inputs'
                      type='text'
                      id='username'
                      placeholder='anshsharma'
                      required
                    />
                  </div>
                )}
                <div className='auth-input-item auth-email-container'>
                  <label htmlFor='email'>Email</label>
                  <input
                    autoComplete='off'
                    className='auth-form-inputs'
                    type='email'
                    id='email'
                    placeholder='email@example.com'
                    required
                  />
                </div>
                {login && (
                  <div className='auth-input-item auth-password-container'>
                    <label htmlFor='password'>Password</label>
                    <input
                      className='auth-form-inputs'
                      type='password'
                      id='password'
                      placeholder='~N}ypepD6^5(U;~B'
                      required
                    />
                  </div>
                )}
                {!login && (
                  <div className='auth-input-item auth-password-container'>
                    <label htmlFor='password'>New Password</label>
                    <input
                      className='auth-form-inputs'
                      type='password'
                      id='password'
                      placeholder='~N}ypepD6^5(U;~B'
                      required
                    />
                  </div>
                )}
                {!login && (
                  <div className='auth-input-item auth-newpassword-container'>
                    <label htmlFor='new-password'>Repeat Password</label>
                    <input
                      className='auth-form-inputs'
                      type='password'
                      id='new-password'
                      placeholder='~N}ypepD6^5(U;~B'
                      required
                    />
                  </div>
                )}
              </div>
              <div className='auth-btn-container' >
                <button className='auth-form-btn' type='submit' disabled={loading}>
                  {loading ? (
                    <div className='auth-submit-loader'>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  ) : (
                    authButtonText
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
