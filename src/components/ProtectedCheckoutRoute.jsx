import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedCheckoutRoute = ({children}) => {
     const currentUser = useSelector((state) => state.auth.currentUser);
    
  return(currentUser ? children : <Navigate to={'/login'}/> )
}

export default ProtectedCheckoutRoute


