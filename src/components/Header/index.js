import React from 'react';
import { Nav, Buttons } from './styled.js'
import { FaAddressBook } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const Header = () => {
    const notify = () => toast("This is a toast notification !");
    const buttonClicked = useSelector(state => state.default.buttonClicked);

    return (
        <header>
            <div className='container'>
                <Nav>
                    <Link className='logo' to='/'>
                        <FaAddressBook />
                        <span>Agenda</span>
                    </Link>

                    { buttonClicked ?  'Logado' : 'Não Logado'}

                    <Buttons className='buttons'>
                        <button onClick={notify}>Notify !</button>

                        <Link className='sign-in' to='/login'>Login</Link>

                        <Link className='sign-up' to='/sign-up'>Sign Up</Link>
                    </Buttons>
                </Nav>
            </div>
        </header>
    );
};

export default Header;