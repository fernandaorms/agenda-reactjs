import { Routes, Route } from 'react-router-dom';

import Contacts from '../pages/Contacts';
import SingleContact from '../pages/Contacts/single';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Photos from '../pages/Photos';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/Profile/edit';
import SignUp from '../pages/SignUp';
import Users from '../pages/Users';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contacts' element={<Contacts />}/>
            <Route path='/contacts/:id' element={<SingleContact />} />
            <Route path='/photos' element={<Photos />} />
            <Route path='/users' element={<Users />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />

            <Route element={<PrivateRoutes />}>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/profile/edit' element={<ProfileEdit />}/>
            </Route>

            <Route path='*' element={<Page404 />} />
        </Routes>
    )
}

export default AppRoutes;