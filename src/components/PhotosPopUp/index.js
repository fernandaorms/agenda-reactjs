import React, {useEffect, useState, useCallback} from 'react';

import { toast } from 'react-toastify';
import { get } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { FaX } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

import * as actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';
import Loader from '../../components/Loader';
import { Overlay, PopUp, Buttons, Container, Gallery, Photo, LinkButton, NoPhotos } from './styled';
import { PrimaryButton, DangerButtonLight } from '../../styles/buttons';

const PhotosPopUp = ({onConfirm, onCancel, defaultPhoto}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(defaultPhoto);
    const [selectedPhotoId, setSelectedPhotoId] = useState(get(defaultPhoto, 'id', null));

    const fetchPhotos = useCallback(async () => {
        setIsLoading(true);

        try {
            const response = await axios.get('photos');

            setPhotos(response.data);
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

        fetchPhotos();
    }, [isLoggedIn, fetchPhotos]);

    const handleSelect = (photo) => {
        setSelectedPhoto(photo);
        setSelectedPhotoId(get(photo, 'id', null));
    }

    return (
        <Overlay>
            <PopUp>
                <Container className='loader-container'>
                    <Loader isLoading={isLoading} />

                    <span>Select your Profile Picture</span>
                    
                    <div className='scroll'>
                        {!isLoading && (
                            photos.length > 0 ? (
                                <Gallery>
                                    <Photo className={selectedPhotoId == null ? 'selected' : '' } onClick={(e) => handleSelect({})}>
                                        <FaX className='empty'/>
                                    </Photo>

                                    {photos.map((photo) => (
                                        <Photo key={photo.id} className={photo.id === selectedPhotoId ? 'selected' : '' } onClick={(e) => handleSelect(photo)}>
                                            <img src={photo.url} alt={photo.filename} />
                                        </Photo>
                                    ))}
                                </Gallery>
                            ): (
                                <NoPhotos>
                                    <span>Sorry, no photos found.</span>
                                    <span>Click the button bellow to upload your photos!</span>
                                </NoPhotos>
                            )
                        )}
                    </div>
                    
                    
                    <Buttons>
                        {!isLoading && (
                            <>
                            {photos.length > 0 ? (
                                <PrimaryButton onClick={() => onConfirm(selectedPhoto)}>Confirm</PrimaryButton>
                            ): (
                                <LinkButton to='/photos'>Upload photos</LinkButton>
                            )}

                            <DangerButtonLight onClick={onCancel}>Cancel</DangerButtonLight>
                            </>
                        )}
                    </Buttons>
                </Container>
            </PopUp>
        </Overlay>
    )
}

export default PhotosPopUp;