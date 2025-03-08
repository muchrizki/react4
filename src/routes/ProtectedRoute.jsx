import { Navigate, Outlet } from "react-router-dom"
export default function ProtectedRoute ({children}) {

    const token = localStorage.getItem('accessToken')

    if (!token) return <Navigate to='/login' />
   
    return (<>{children || <Outlet /> }</>)
}