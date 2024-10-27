import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import axios from '../../services/axios';
import { Intro } from './styled';
import { FormContainer, Form } from '../../styles/forms';
import { PrimaryButton } from '../../styles/buttons';

const SignUp = () => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        firstName: [],
        lastName: [],
        email: [],
        password: [],
        passwordConfirm: [],
    });

    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])/;

    const validateFormClient = () => {
        let hasErrors = false;

        const newErrors = {
            firstName: [],
            lastName: [],
            email: [],
            password: [],
            passwordConfirm: [],
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

        if (password.length < 6 || password.length > 50) {
            hasErrors = true;
            newErrors.password.push('Password must be between 6 and 50 characters.');
        }

        if (!passwordRegex.test(password)) {
            hasErrors = true;
            newErrors.password.push('Password must contain at least one number and one uppercase letter.');
        }

        if (password !== passwordConfirm) {
            hasErrors = true;
            newErrors.password.push('Passwords don\'t match.');
            newErrors.passwordConfirm.push('Passwords don\'t match.');
        }

        setErrors(newErrors);

        return hasErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateFormClient()) return;

        try {
            await axios.post('users', {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password
            });

            toast.dismiss();
            toast.success('Registration successful! Please log in to continue.');
            navigate('/login');
        } catch (err) {
            const errors = get(err, 'response.data.errors', []);
            errors.map((error) => toast.error(error));
        }
    }

    return (
        <main>
            <section className='main'>
                <div className='container'>
                    <FormContainer>
                        <Intro>
                            <h1>Sign Up</h1>

                            <p>Already have an account? <Link to='/login'>Login</Link> to start using Agenda!</p>
                        </Intro>

                        <Form onSubmit={handleSubmit} noValidate>
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

                            <div className='field line'>
                                <label htmlFor='password'>Password</label>
                                <input type='password' id='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Type your password...' />

                                {errors.password.map((error, index) => (
                                    <span key={index} className='error'>{error}</span>
                                ))}
                            </div>

                            <div className='field line'>
                                <label htmlFor='passwordConfirm'>Confirm Password</label>
                                <input type='password' id='passwordConfirm' value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} placeholder='Type your password again...' />

                                {errors.passwordConfirm.map((error, index) => (
                                    <span key={index} className='error'>{error}</span>
                                ))}
                            </div>

                            <div className='button'>
                                <PrimaryButton type='submit'>Create Account</PrimaryButton>
                            </div>
                        </Form>
                    </FormContainer>
                </div>
            </section>
        </main>
    )
};

export default SignUp;