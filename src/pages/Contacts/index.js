import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { FaEdit } from 'react-icons/fa';
import { FaCircleUser, FaTrashCan } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';
import Loader from '../../components/Loader';
import ConfirmationPopUp from '../../components/ConfirmationPopUp';
import { Container, Users, User, ProfilePicture, Empty } from './styled';

const Contacts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

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
    const [showPopUp, setShowPopUp] = useState(false);
    const [deleteContactId, setDeleteContactId] = useState(null);

    const fetchContacts = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get('contacts');

            setContacts(response.data);
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);

            const errors = get(err, 'response.data.errors', []);
            const status = get(err, 'response.status', 0);

            if(status === 401) {
                toast.error('You must log in.');

                dispatch(actions.loginFailure());

                navigate('/login');
            }
            else if (errors.length > 0) errors.map((error) => toast.error(error));
            else toast.error(err.message);
        }
    }

    useEffect(() => {
        if (!isLoggedIn) return;

        fetchContacts();
    }, [isLoggedIn, navigate]);

    const handleDeleteAsk = async (e, contactId) => {
        e.preventDefault();
        setDeleteContactId(contactId);
        setShowPopUp(true);
    }

    const handleConfirm = async () => {
        setShowPopUp(false);
        setIsLoading(true);

        try {
            await axios.delete(`contacts/${deleteContactId}`);

            setIsLoading(false);

            toast.dismiss();
            toast.success('Delete successful!');

            await fetchContacts();
        } catch (err) {
            const errors = get(err, 'response.data.errors', []);

            if (errors.length > 0) errors.map((error) => toast.error(error));
            else toast.error(err.message);

            setIsLoading(false);
        }

        setDeleteContactId(null);
    };

    const handleCancel = () => {
        setShowPopUp(false);
    };

    return (
        <main>
            {showPopUp && (
                <ConfirmationPopUp
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                    actionName='Delete Contact'
                />
            )}

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

                                        <div className='phone'>
                                            <span>{contact.phone && (contact.phone)}</span>
                                        </div>

                                        <div className='edit'>
                                            <FaEdit className='icon' />
                                        </div>

                                        <div className='delete'>
                                            <FaTrashCan className='icon' onClick={(e) => handleDeleteAsk(e, contact.id)} />
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