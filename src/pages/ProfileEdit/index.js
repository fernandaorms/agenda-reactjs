import React, { useState } from 'react';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { FaEdit } from 'react-icons/fa';
import { FaCircleUser } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

import * as actions from '../../store/modules/auth/actions';
import Loader from '../../components/Loader';
import PhotosPopUp from '../../components/PhotosPopUp';
import { Title, ProfilePicture, Buttons } from './styled';
import { FormContainer, Form } from '../../styles/forms';
import { PrimaryButton, DangerButtonLight } from '../../styles/buttons';

const ProfileEdit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const isLoading = useSelector(state => state.auth.isLoading);
    const user = useSelector(state => get(state, 'auth.user', null));

    const [firstName, setfirstName] = useState(get(user, 'first_name', ''));
    const [lastName, setlastName] = useState(get(user, 'last_name', ''));
    const [email, setEmail] = useState(get(user, 'email', ''));
    const [profilePicture, setProfilePicture] = useState(get(user, 'profile_picture', {}));
    const [profilePictureId, setProfilePictureId] = useState(get(user, 'profile_picture.id', null));

    const [showPhotosPopUp, setShowPhotosPopUp] = useState(false);

    const [errors, setErrors] = useState({
        firstName: [],
        lastName: [],
        email: [],
    });

    const resetForm = (e) => {
        e.preventDefault();

        setfirstName(get(user, 'first_name', ''));
        setlastName(get(user, 'last_name', ''));
        setEmail(get(user, 'email', ''));
        setProfilePicture(get(user, 'profile_picture', {}));
        setProfilePictureId(get(user, 'profile_picture.id', null));
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

                        <Title>
                            <h1>Edit Profile</h1>
                        </Title>

                        <Form onSubmit={handleSubmit} noValidate>
                            <ProfilePicture onClick={() => setShowPhotosPopUp(true)}>
                                {profilePictureId ? (
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