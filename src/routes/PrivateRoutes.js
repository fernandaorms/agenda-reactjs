import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const location = useLocation();

    return (
        isLoggedIn ? <Outlet /> : <Navigate to='/login' state={{ from: location.pathname }} />
    )
}

export default PrivateRoutes;