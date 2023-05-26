import { useState, useEffect, useRef } from 'react'
import './auth.css'
import axios from 'axios'

export default function Auth ({ hideAuthForm, changeAuthState }) {
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
    setError('')
  }

  function switchToSignup () {
    setLogin(false)
    setLoading(false)
    setAuthHeading("Let's start afresh")
    setAuthButtonText('Create')
    setError('')
  }

  function handleAuthSubmit (e) {
    const body = login ? authFormLogin : authFormSignup
    const endPoint = login ? 'login' : 'signup'
    e.preventDefault()
    if ( !login && authFormSignup.password !== authFormSignup.confirmPassword) {
      setError("Passwords don't match")
      return
    }
    setLoading(true)
    axios
      .post(`http://localhost:8080/api/auth/${endPoint}`, body)
      .then(res => {
        setLoading(false)
        console.log(res.data)
        localStorage.setItem('authToken', res.data.token)
        changeAuthState(true)
        hideAuthForm()
      })
      .catch(err => {
        setLoading(false)
        changeAuthState(false)
        if (err.response) {
          setError(err.response.data.error)
        } else {
          setError('Server is busy. Please try again later.')
        }
      })
  }
  function handleSignupChange (e) {
    const { name, value } = e.target
    setAuthFormSignup({ ...authFormSignup, [name]: value })
  }
  function handleLoginChange (e) {
    const { name, value } = e.target
    setAuthFormLogin({ ...authFormLogin, [name]: value })
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
                      name='fullname'
                      className='auth-form-inputs'
                      type='text'
                      id='fullname'
                      placeholder='Ansh Sharma'
                      value={authFormSignup.fullname}
                      onChange={handleSignupChange}
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
                      name='username'
                      value={authFormSignup.username}
                      onChange={handleSignupChange}
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
                    name='email'
                    value={login ? authFormLogin.email : authFormSignup.email}
                    onChange={login ? handleLoginChange : handleSignupChange}
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
                      name='password'
                      value={authFormLogin.password}
                      onChange={handleLoginChange}
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
                      name='password'
                      value={authFormSignup.password}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                )}
                {!login && (
                  <div className='auth-input-item auth-newpassword-container'>
                    <label htmlFor='new-password'>Confirm Password</label>
                    <input
                      className='auth-form-inputs'
                      type='password'
                      id='new-password'
                      placeholder='~N}ypepD6^5(U;~B'
                      name='confirmPassword'
                      value={authFormSignup.confirmPassword}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                )}
              </div>
              <div className='auth-btn-container'>
                <button
                  className='auth-form-btn'
                  type='submit'
                  disabled={loading}
                >
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
              {error && (
                <div className='auth-error-container'>
                  <span className='auth-error-icon'>
                    <ion-icon name='alert-circle-outline'></ion-icon>
                  </span>
                  <span className='auth-error-text'>
                    <p className='auth-error'>{error}</p>
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
