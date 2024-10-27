import React from 'react';
import { Nav, Buttons, Menu } from './styled.js'
import { FaAddressBook } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Header = () => {
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

                            <li>
                                <Link className='profile' to='/profile'>Profile</Link>
                            </li>
                        </Menu>      
                    </div>

                    <Buttons className='buttons'>
                        <Link className='sign-in' to='/login'>Login</Link>

                        <Link className='sign-up' to='/sign-up'>Sign Up</Link>
                    </Buttons>
                </Nav>
            </div>
        </header>
    );
};

export default Header;