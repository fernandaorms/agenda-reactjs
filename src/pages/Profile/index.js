import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { FaCircleUser, FaArrowRight, FaClipboardUser, FaImages } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';
import Loader from '../../components/Loader';
import { Container, UserInfo, ProfilePicture, Menu } from './styled';
import { DangerButtonLight } from '../../styles/buttons';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!isLoggedIn) return;

        const fetchUsers = async () => {
            setIsLoading(true);

            try {
                const response = await axios.get('users');
    
                setUser(response.data);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
                const errors = get(err, 'response.data.errors', []);
                const status = get(err, 'response.status', 0);
    
                if(status === 401) {
                    toast.error('Please login to access this page.');
    
                    dispatch(actions.loginFailure());
    
                    navigate('/login');
                }
                else if (errors.length > 0) errors.map((error) => toast.error(error));
                else toast.error(err.message);
            }
        }

        fetchUsers();
    }, [isLoggedIn, dispatch, navigate]);

    const handleClick = (e) => {
        e.preventDefault();

        dispatch(actions.loginFailure());
    }

    return (
        <main>
            <section className='main'>
                <div className='container'>
                    <Container className='loader-container'>
                        <UserInfo>
                            <Loader isLoading={isLoading} />

                            <ProfilePicture>
                                {user.profile_picture_id ? (
                                    <img src={user.profile_picture.url}  alt={`${user.first_name} ${user.last_name} Profile Pic`} />
                                ) : (
                                    <FaCircleUser />
                                )}
                            </ProfilePicture>

                            <div className='name'>
                                <span>{user.first_name} {user.last_name}</span>
                            </div>

                            <div className='email'>
                                <span>{user.email}</span>
                            </div>
                        </UserInfo>

                        <Menu>
                            <Link to='/profile/edit'>
                                <FaClipboardUser />
                                <span>My Account</span>
                                <FaArrowRight />
                            </Link>

                            <Link to='/photos'>
                                <FaImages />
                                <span>Photos</span>
                                <FaArrowRight />
                            </Link>
                        </Menu>

                        <DangerButtonLight onClick={handleClick}>Logout</DangerButtonLight>
                    </Container>
                </div>
            </section>
        </main>
    )
};

export default Profile;