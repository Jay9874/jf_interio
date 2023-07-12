import './profile.css'

export default function Profile () {
  const isAuth = false
  return (
    <>
      {isAuth ? (
        <div>
          <h1>Welcome to Profile section</h1>
          <p>We are working on it.</p>
        </div>
      ) : (
        <div className='auth-form'>
          <h1>Profile</h1>
          <form>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='Enter your name' />
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Enter your email' />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              placeholder='Enter your password'
            />
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type='password'
              id='confirmPassword'
              placeholder='Confirm your password'
            />
            <button type='submit'>Update</button>
          </form>
        </div>
      )}
    </>
  )
}
