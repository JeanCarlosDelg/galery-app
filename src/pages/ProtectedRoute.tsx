import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {

  const verifyPassword = localStorage.getItem('password')
  
  if (verifyPassword) {
    return <Outlet />
  } else {
    return <Navigate to='/' />
  }
}

export default ProtectedRoute