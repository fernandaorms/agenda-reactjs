import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import Loader from '../../components/Loader';
import { Title, Alternative } from './styled';
import { FormContainer, Form } from '../../styles/forms';
import { PrimaryButton } from '../../styles/buttons';
import * as actions from '../../store/modules/auth/actions';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const prevPath = get(location, 'state.from', '/');

    const isLoading = useSelector(state => state.auth.isLoading);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({
        email: [],
        password: [],
    });

    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])/;

    const validateFormClient = () => {
        let hasErrors = false;

        const newErrors = {
            email: [],
            password: [],
        };

        if (!isEmail(email)) {
            hasErrors = true;
            newErrors.email.push('Plase enter a valide email address.');
        }

        if (password.length < 6 || password.length > 50 || !passwordRegex.test(password)) {
            hasErrors = true;
            newErrors.password.push('Invalid Password.');
        }

        setErrors(newErrors);

        return hasErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateFormClient()) return;
        
        dispatch(actions.loginRequest({ email, password, prevPath, navigate }));
    }

    return (
        <main>
            <section className='main'>
                <div className='container'>
                    <FormContainer className='loader-container'>
                        <Loader isLoading={isLoading} />

                        <Title>
                            <h1 className='title'>Login</h1>
                        </Title>

                        <Form onSubmit={handleSubmit} noValidate>
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

                            <div className='button'>
                                <PrimaryButton type='submit'>Login</PrimaryButton>
                            </div>
                        </Form>

                        <Alternative>
                            <p>Don't have an account? <Link to='/sign-up'>Sign Up</Link> to start using Agenda!</p>
                        </Alternative>
                    </FormContainer>
                </div>
            </section>
        </main>
    )
};

export default Login;