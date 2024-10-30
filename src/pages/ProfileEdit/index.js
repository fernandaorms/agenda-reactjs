import React, { useState, useEffect, useCallback } from 'react';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { FaEdit } from 'react-icons/fa';
import { FaCircleUser } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';
import Loader from '../../components/Loader';
import PhotosPopUp from '../../components/PhotosPopUp';
import { Title, ProfilePicture, Buttons } from './styled';
import { FormContainer, Form } from '../../styles/forms';
import { PrimaryButton, DangerButtonLight } from '../../styles/buttons';

const ProfileEdit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const stateLoading = useSelector(state => state.auth.isLoading);
    const initialState = useSelector(state => state.auth.user);

    const [firstName, setfirstName] = useState(get(initialState, 'first_name'), '');
    const [lastName, setlastName] = useState(get(initialState, 'last_name'), '');
    const [email, setEmail] = useState(get(initialState, 'email'), '');
    const [profilePicture, setProfilePicture] = useState(get(initialState, 'profile_picture'), {});
    const [profilePictureId, setProfilePictureId] = useState(get(initialState, 'profile_picture_id'), null);
    const [isLoading, setIsLoading] = useState(false);
    const [showPhotosPopUp, setShowPhotosPopUp] = useState(false);

    const [errors, setErrors] = useState({
        firstName: [],
        lastName: [],
        email: [],
    });

    const fetchUsers = useCallback(async () => {
        setIsLoading(true);

        try {
            const response = await axios.get('users');
            
            const { first_name,  last_name, email, profile_picture, profile_picture_id } = response.data;
            setfirstName(first_name);
            setlastName(last_name);
            setEmail(email);
            setProfilePicture(profile_picture);
            setProfilePictureId(profile_picture_id);
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            const errors = get(err, 'response.data.errors', []);
            const status = get(err, 'response.status', 0);

            if(status === 401) {
                toast.error('Please login to access this page.');

                dispatch(actions.loginFailure());

                navigate('/login');
            }
            else if (errors.length > 0) errors.map((error) => toast.error(error));
            else toast.error(err.message);
        }
    }, [dispatch, navigate]);

    useEffect(() => {
        if (!isLoggedIn) return;

        fetchUsers();
    }, [isLoggedIn, fetchUsers]);

    const resetForm = async (e) => {
        e.preventDefault();

        await fetchUsers();
    }

    const validateFormClient = () => {
        let hasErrors = false;

        const newErrors = {
            firstName: [],
            lastName: [],
            email: [],
        };

        if (firstName.length < 3 || firstName.length > 255) {
            hasErrors = true;
            newErrors.firstName.push('First Name must be between 3 and 255 characters.');
        }

        if (lastName.length < 3 || lastName.length > 255) {
            hasErrors = true;
            newErrors.lastName.push('Last Name must be between 3 and 255 characters.');
        }

        if (!isEmail(email)) {
            hasErrors = true;
            newErrors.email.push('Plase enter a valide email address.');
        }

        setErrors(newErrors);

        return hasErrors;
    }

    const handleConfirmPhotosPopUp = (photo) => {
        setShowPhotosPopUp(false);
        setProfilePicture(photo);
        setProfilePictureId(photo.id);
    };

    const handleCancelPhotosPopUp = () => {
        setShowPhotosPopUp(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateFormClient()) return;

        dispatch(actions.userUpdateRequest({ firstName, lastName, email, profilePictureId, navigate }));
    }

    return (
        <main>
            <section className='main'>
                {showPhotosPopUp && (
                    <PhotosPopUp
                        onConfirm={handleConfirmPhotosPopUp}
                        onCancel={handleCancelPhotosPopUp}
                        defaultPhoto={profilePicture}
                    />
                )}

                <div className='container'>
                    <FormContainer className='loader-container'>
                        <Loader isLoading={isLoading} />
                        <Loader isLoading={stateLoading} />

                        <Title>
                            <h1>Edit Profile</h1>
                        </Title>

                        <Form onSubmit={handleSubmit} noValidate>
                            <ProfilePicture onClick={() => setShowPhotosPopUp(true)}>
                                {get(profilePicture, 'url', null) ? (
                                    <>
                                        <img src={profilePicture.url} alt={`${firstName} ${lastName} Profile Pic`} className='picture' />
                                        <FaEdit className='edit' />
                                    </>
                                ) : (
                                    <>
                                        <FaCircleUser className='picture' />
                                        <FaEdit className='edit' />
                                    </>
                                )}
                            </ProfilePicture>

                            <div className='field-group line'>
                                <div className='field'>
                                    <label htmlFor='first_name'>First Name</label>
                                    <input type='text' id='first_name' value={firstName} onChange={e => setfirstName(e.target.value)} placeholder='Type your first name...' />

                                    {errors.firstName.map((error, index) => (
                                        <span key={index} className='error'>{error}</span>
                                    ))}
                                </div>

                                <div className='field'>
                                    <label htmlFor='last_name'>Last Name</label>
                                    <input type='text' id='last_name' value={lastName} onChange={e => setlastName(e.target.value)} placeholder='Type your last name...' />

                                    {errors.lastName.map((error, index) => (
                                        <span key={index} className='error'>{error}</span>
                                    ))}
                                </div>
                            </div>

                            <div className='field line'>
                                <label htmlFor='email'>Email</label>
                                <input type='email' id='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Type your email...' />

                                {errors.email.map((error, index) => (
                                    <span key={index} className='error'>{error}</span>
                                ))}
                            </div>

                            <Buttons>
                                <PrimaryButton type='submit'>Update</PrimaryButton>
                                <DangerButtonLight onClick={resetForm}>Reset</DangerButtonLight>
                            </Buttons>
                        </Form>
                    </FormContainer>
                </div>
            </section>
        </main>
    )
}

export default ProfileEdit;