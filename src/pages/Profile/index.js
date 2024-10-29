import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { FaCircleUser, FaArrowRight, FaClipboardUser, FaImages } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';
import Loader from '../../components/Loader';
import { Container, UserInfo, ProfilePicture, Menu } from './styled';
import { DangerButtonLight } from '../../styles/buttons';

const Profile = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            setIsLoading(true);

            const response = await axios.get('users');

            setUser(response.data);
            setIsLoading(false);
        }

        getData();
    }, []);

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
                                {get(user, 'profile_picture.url', false) ? (
                                    <img src={user.profile_picture.url}  alt={`${user.first_name} ${user.first_name} Profile Pic`} />
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