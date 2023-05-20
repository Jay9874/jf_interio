import { useState } from 'react'
import './auth.css'

export default function Auth () {
  const [login, setLogin] = useState(true)
  return (
    <div className='auth-form-popup'>
      <div className='auth-form-container'>
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

        <form className='auth-form'>
          <h1>Sign In</h1>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='Enter your email' />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Enter your password'
          />
          <button type='submit'>Sign In</button>
        </form>
      </div>
    </div>
  )
}
