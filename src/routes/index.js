import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Page404 from '../pages/Page404';
import PrivateRoutes from './PrivateRoutes';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route element={<PrivateRoutes />}></Route>
            <Route path='*' element={<Page404 />} />
        </Routes>
    )
}

export default AppRoutes;