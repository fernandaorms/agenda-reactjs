import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { FaEdit } from 'react-icons/fa';
import { FaCircleUser, FaTrashCan } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import axios from '../../services/axios';
import Loader from '../../components/Loader';
import { Container, Users, User, ProfilePicture, Empty } from './styled';

const Contacts = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const navigate = useNavigate();

    const [contacts, setContacts] = useState([
        {
            id: 1,
            profile_picture: [],
            first_name: 'First Name',
            last_name: 'Last Name',
            email: 'email@email.com'
        },
        {
            id: 2,
            profile_picture: [],
            first_name: 'First Name',
            last_name: 'Last Name',
            email: 'email@email.com'
        },
        {
            id: 3,
            profile_picture: [],
            first_name: 'First Name',
            last_name: 'Last Name',
            email: 'email@email.com'
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!isLoggedIn) return;

        async function getData() {
            setIsLoading(true);
            
            try {
                const response = await axios.get('contacts');

                setContacts(response.data);
                setIsLoading(false);
            } catch (err) {
                const errors = get(err, 'response.data.errors', []);

                if (errors.length > 0) errors.map((error) => toast.error(error));
                else toast.error(err.message);

                setIsLoading(false);
            }
        }

        getData();
    }, [isLoggedIn, navigate]);

    return (
        <main>
            <section className='main'>
                <div className='container'>
                    <Container className='loader-container'>
                        <Loader isLoading={isLoading} />

                        <div className='title'>
                            <h1>Contacts</h1>
                        </div>

                        <Users>
                            {contacts.length > 0 ? (
                                contacts.map(contact => (
                                    <User key={String(contact.id)}>
                                        <ProfilePicture>
                                            {get(contact, 'profile_picture.url', false) ? (
                                                <img src={contact.profile_picture.url} alt={`${contact.first_name} ${contact.last_name} Profile Pic`} />
                                            ) : (
                                                <FaCircleUser />
                                            )}
                                        </ProfilePicture>

                                        <div className='name'>
                                            <span>{contact.last_name} {contact.last_name}</span>
                                        </div>

                                        <div className='email'>
                                            <span>{contact.email}</span>
                                        </div>

                                        <div className='edit'>
                                            <FaEdit className='icon' />
                                        </div>

                                        <div className='delete'>
                                            <FaTrashCan className='icon' />
                                        </div>
                                    </User>
                                ))
                            ) : (
                                !isLoading && (<Empty><span>No Contacts found</span></Empty>)
                            )}
                        </Users>
                    </Container>
                </div>
            </section>
        </main>
    )
};

export default Contacts;