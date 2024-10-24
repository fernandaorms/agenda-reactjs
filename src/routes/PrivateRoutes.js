import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const isLoggedIn = false;

    return (
        isLoggedIn ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoutes;