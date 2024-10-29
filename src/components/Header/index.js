import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaAddressBook, FaCircleUser } from 'react-icons/fa6';

import axios from '../../services/axios';
import { Nav, Buttons, Menu, Profile } from './styled'

const Header = () => {
    

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const [user, setUser] = useState([]);

    useEffect(() => {
        if (isLoggedIn) {
            async function getData() {
                const response = await axios.get('users');

                setUser(response.data);

                console.log(user);
            }

            getData();
        }
    }, [isLoggedIn]);

    return (
        <header>
            <div className='container'>
                <Nav>
                    <Link className='logo' to='/'>
                        <FaAddressBook />
                        <span>Agenda</span>
                    </Link>

                    <div className='menu'>
                        <Menu>
                            <li>
                                <Link className='users' to='/users'>Users</Link>
                            </li>

                            <li>
                                <Link className='contacts' to='/contacts'>Contacts</Link>
                            </li>

                            <li>
                                <Link className='photos' to='/photos'>Photos</Link>
                            </li>
                        </Menu>
                    </div>

                    {isLoggedIn ? (
                        <Profile>
                            <Link to='/profile'>
                                <span>{user.email}</span>

                                {get(user, 'profile_picture.url', false) ? (
                                    <img src={user.profile_picture.url} alt={`${user.first_name} ${user.last_name} Profile Pic`} />
                                ) : (
                                    <FaCircleUser className='icon' />
                                )}
                            </Link>
                        </Profile>
                    ) : (
                        <Buttons className='buttons'>
                            <Link className='sign-in' to='/login'>Login</Link>

                            <Link className='sign-up' to='/sign-up'>Sign Up</Link>
                        </Buttons>
                    )}
                </Nav>
            </div>
        </header>
    );
};

export default Header;