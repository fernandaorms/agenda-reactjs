import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { FaEdit } from 'react-icons/fa';
import { FaCircleUser, FaTrashCan } from 'react-icons/fa6';

import axios from '../../services/axios';
import Loader from '../../components/Loader';
import { Container, Users, User, ProfilePicture } from './styled';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true);

                const response = await axios.get('contacts');

                setContacts(response.data);
                setIsLoading(false);
            } catch (err) {
                toast.error(get(err, 'response.data.errors[0]', err.message));
            }
        }

        getData();
    }, []);

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
                            {contacts.map(contact => (
                                <User key={String(contact.id)}>
                                    <ProfilePicture>
                                        {get(contact, 'profile_picture.url', false) ? (
                                            <img src={contact.profile_picture.url} alt={`${contact.first_name} ${contact.first_name} Profile Pic`} />
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
                            ))}
                        </Users>
                    </Container>
                </div>
            </section>
        </main>
    )
};

export default Contacts;