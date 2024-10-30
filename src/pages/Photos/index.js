import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { FaFileImage } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import axios from '../../services/axios';
import Loader from '../../components/Loader';
import { Container, Gallery, LoadPhoto, Photo } from './styled';

const Photos = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const navigate = useNavigate();

    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(!isLoggedIn) return;

        async function getData() {
            try {
                setIsLoading(true);

                const response = await axios.get('photos');

                setPhotos(response.data);
                setIsLoading(false);
            } catch (err) {
                const errors = get(err, 'response.data.errors', []);

                if (errors.lenght) errors.map((error) => toast.error(error));
                else toast.error(err.message);

                setIsLoading(false);

                navigate('/');
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
                            <h1>Photos</h1>
                        </div>

                        <Gallery>
                            <LoadPhoto>
                                <FaFileImage />
                            </LoadPhoto>

                            {photos.map((photo) => (
                                <Photo key={photo.id}>
                                    <img src={photo.url} alt={photo.originalname} />
                                </Photo>
                            ))}
                        </Gallery>
                    </Container>
                </div>
            </section>
        </main>
    )
};

export default Photos;