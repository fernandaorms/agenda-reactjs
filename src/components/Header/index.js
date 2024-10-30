import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaAddressBook, FaCircleUser } from 'react-icons/fa6';

import * as actions from '../../store/modules/auth/actions';
import { Nav, Logo, Buttons, Menu, Profile } from './styled'

const Header = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const user = useSelector(state => get(state, 'auth.user', null));
    
    const [firstName, setfirstName] = useState(get(user, 'first_name', ''));
    const [lastName, setlastName] = useState(get(user, 'last_name', ''));
    const [profilePicture, setProfilePicture] = useState(get(user, 'profile_picture', {}));
    const [profilePictureId, setProfilePictureId] = useState(get(user, 'profile_picture.id', null));

    return (
        <header>
            <div className='container'>
                <Nav>
                    <div className='left'>
                        <Logo to='/'>
                            <FaAddressBook />
                            <span>Agenda</span>
                        </Logo>

                        <Menu>
                            {isLoggedIn && (
                                <li>
                                    <Link className='photos' to='/photos'>Photos</Link>
                                </li>
                            )}
                        </Menu>
                    </div>

                    <div className='right'>
                        {isLoggedIn ? (
                            <Profile>
                                <Link to='/profile'>
                                    {profilePictureId ? (
                                        <img src={profilePicture.url} alt={`${firstName} ${lastName} Profile Pic`} />
                                    ) : (
                                        <FaCircleUser className='icon' />
                                    )}
                                </Link>
                            </Profile>
                        ) : (
                            <Buttons>
                                <Link className='sign-in' to='/login'>Login</Link>

                                <Link className='sign-up' to='/sign-up'>Sign Up</Link>
                            </Buttons>
                        )}
                    </div>
                </Nav>
            </div>
        </header>
    );
};

export default Header;