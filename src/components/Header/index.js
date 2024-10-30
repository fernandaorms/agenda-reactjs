import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaAddressBook, FaCircleUser } from 'react-icons/fa6';

import axios from '../../services/axios';
import { Nav, Logo, Buttons, Menu, Profile } from './styled'

const Header = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const [user, setUser] = useState([]);

    useEffect(() => {
        if (!isLoggedIn) return;

        async function getData() {
            try {
                const response = await axios.get('users');

                setUser(response.data);
            } catch (err) {
                const errors = get(err, 'response.data.errors', []);

                if (errors.length > 0) errors.map((error) => toast.error(error));
                else toast.error(err.message);
            }
        }

        getData();
    }, [isLoggedIn]);

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
                                    {get(user, 'profile_picture.url', false) ? (
                                        <img src={user.profile_picture.url} alt={`${user.first_name} ${user.last_name} Profile Pic`} />
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