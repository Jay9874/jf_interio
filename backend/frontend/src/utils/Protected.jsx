import { Navigate } from 'react-router-dom'
const Protected = ({ isAuth, children }) => {
  console.log(isAuth)
  if (isAuth) {
    return children
  } else {
    return <Navigate to='/login' />
  }
}

export default Protected
