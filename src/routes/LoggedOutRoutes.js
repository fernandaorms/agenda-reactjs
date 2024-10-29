import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';

const LoggedOutRoutes = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const location = useLocation();

    return (
        !isLoggedIn ? <Outlet /> : <Navigate to='/' state={{ from: location.pathname }} />
    )
}

export default LoggedOutRoutes;