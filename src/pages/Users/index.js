import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { FaCircleUser } from 'react-icons/fa6';

import axios from '../../services/axios';
import { ProfilePicture } from './styled'

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await axios.get('users');
            setUsers(response.data);
        }

        getData();
    }, []);

    console.log(users);

    return (
        <main>
            <section className='main'>
                <div className='container'>
                    <div className='title'>
                        <h1>Users</h1>

                        <div>
                            {users.map(user => (
                                <div key={String(user.id)}>
                                    <h4>User {user.id}</h4>

                                    <ProfilePicture className='profile'>
                                        {get(user, 'profile_picture.url', false) ? (
                                            <img src={user.profile_picture.url}  alt={`${user.first_name} ${user.first_name} Profile Pic`} />
                                        ) : (
                                            <FaCircleUser />
                                        )}
                                    </ProfilePicture>

                                    <div className='name'>
                                        <span>Nome: {user.first_name} {user.last_name}</span>
                                    </div>

                                    <div className='email'>
                                        <span>Email: {user.email}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default Users;