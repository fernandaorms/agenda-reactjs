import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { FaCircleUser, FaArrowRight, FaClipboardUser, FaImages } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';
import Loader from '../../components/Loader';
import { Container, UserInfo, ProfilePicture, Menu } from './styled';
import { DangerButtonLight } from '../../styles/buttons';

const Profile = () => {
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const user = useSelector(state => get(state, 'auth.user', null));
    const isLoading = useSelector(state => state.auth.isLoading);
    
    const [firstName, setfirstName] = useState(get(user, 'first_name', ''));
    const [lastName, setlastName] = useState(get(user, 'last_name', ''));
    const [email, setEmail] = useState(get(user, 'email', ''));
    const [profilePicture, setProfilePicture] = useState(get(user, 'profile_picture', {}));
    const [profilePictureId, setProfilePictureId] = useState(get(user, 'profile_picture.id', null));

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
                                {profilePictureId ? (
                                    <img src={profilePicture.url}  alt={`${firstName} ${lastName} Profile Pic`} />
                                ) : (
                                    <FaCircleUser />
                                )}
                            </ProfilePicture>

                            <div className='name'>
                                <span>{firstName} {lastName}</span>
                            </div>

                            <div className='email'>
                                <span>{email}</span>
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