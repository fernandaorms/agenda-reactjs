import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Title, Alternative } from './styled';
import { FormContainer, Form } from '../../styles/forms';
import { PrimaryButton } from '../../styles/buttons';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <main>
            <section className='main'>
                <div className='container'>
                    <FormContainer>
                        <Title>
                            <h1 className='title'>Login</h1>
                        </Title>

                        <Form onSubmit={handleSubmit} noValidate>
                            <div className='field line'>
                                <label htmlFor='email'>Email</label>
                                <input type='email' id='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Type your email...' />

                                {/*errors.email.map((error, index) => (
                                    <span key={index} className='error'>{error}</span>
                                ))*/}
                            </div>

                            <div className='field line'>
                                <label htmlFor='password'>Password</label>
                                <input type='password' id='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Type your password...' />

                                {/*errors.password.map((error, index) => (
                                    <span key={index} className='error'>{error}</span>
                                ))*/}
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