import React, { useEffect, useState, useRef  } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { FaFileImage, FaTrashCan } from 'react-icons/fa6';
import { useSelector } from 'react-redux';

import axios from '../../services/axios';
import Loader from '../../components/Loader';
import ConfirmationPopUp from '../../components/ConfirmationPopUp';
import { Container, Gallery, Form, LoadPhoto, Photo, Buttons } from './styled';
import { DangerButtonLight, PrimaryButton } from '../../styles/buttons';

const Photos = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const [photos, setPhotos] = useState([]);
    const [deletePhotoId, setDeletePhotoId] = useState(null);
    const [files, setFiles] = useState([]);
    const [errors, setErrors] = useState([]);
    const [showPopUp, setShowPopUp] = useState(false);
    const fileInputRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchPhotos = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get('photos');

            setPhotos(response.data);
            setIsLoading(false);
        } catch (err) {
            const errors = get(err, 'response.data.errors', []);

            if (errors.length > 0) errors.map((error) => toast.error(error));
            else toast.error(err.message);

            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!isLoggedIn) return;

        fetchPhotos();
    }, [isLoggedIn]);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles);

        setErrors([]);
    };

    const resetFiles = (e) => {
        if(fileInputRef.current) {
            fileInputRef.current.value = null;
            setFiles([]);
        }
    }

    const validateFormClient = () => {
        let hasErrors = false;

        const newErrors = [];

        if(files.length < 1 || files.length > 10) {
            hasErrors = true;
            newErrors.push('You must upload between 1 and 5 files.');
        }

        setErrors(newErrors);

        return hasErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if( validateFormClient()) return;

        const formData = new FormData();

        files.forEach((file) => {
            formData.append('photos', file);
        });

        setIsLoading(true);

        try {
            await axios.post('photos', formData);

            toast.dismiss();
            toast.success('Upload successful!');

            setIsLoading(false);
            await fetchPhotos();
            resetFiles();
        } catch (err) {
            const errors = get(err, 'response.data.errors', []);

            if (errors.length > 0) errors.map((error) => toast.error(error));
            else toast.error(err.message);

            setIsLoading(false);
        }
    }

    const handleDeleteAsk = async (e, photoId) => {
        e.preventDefault();
        setDeletePhotoId(photoId);
        setShowPopUp(true);
    }

    const handleConfirm = async () => {
        setShowPopUp(false);
        setIsLoading(true);
        
        try {
            await axios.delete(`photos/${deletePhotoId}`);

            setIsLoading(false);

            toast.dismiss();
            toast.success('Delete successful!');

            await fetchPhotos();
            resetFiles();
        } catch(err) {
            const errors = get(err, 'response.data.errors', []);

            if (errors.length > 0) errors.map((error) => toast.error(error));
            else toast.error(err.message);

            setIsLoading(false);
        }

        setDeletePhotoId(null);
    };

    const handleCancel = () => {
        setShowPopUp(false);
    };

    return (
        <main>
            { showPopUp && (
                <ConfirmationPopUp
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                    actionName='Delete Photo'
                />
            )}

            <section className='main'>
                <div className='container'>
                    <Container className='loader-container'>
                        <Loader isLoading={isLoading} />

                        <div className='title'>
                            <h1>Photos</h1>
                        </div>

                        <Form onSubmit={handleSubmit}>
                            {errors.length > 0 && (
                                <div className='errors'>
                                    {errors.map((error, index) => (
                                        <span key={index} className='error'>{error}</span>
                                    ))}
                                </div>
                            )}

                            {files.length > 0 && (
                                <>
                                    <div className='files-list'>
                                        <div className='files'>
                                            <span>Uploaded {files.length} files:</span>
                                        </div>

                                        <div className='list'>
                                            {files.map((file, index) => (
                                                <span key={index}>
                                                    {file.name}{index < files.length - 1 && (';')}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <Buttons>
                                        <PrimaryButton type='submit'>Save</PrimaryButton>
                                        <DangerButtonLight onClick={resetFiles}>Cancel</DangerButtonLight>
                                    </Buttons>
                                </>
                            )}
                            
                            <Gallery>
                                <div className='field line'>
                                    <LoadPhoto htmlFor='files'>
                                        <FaFileImage />
                                        <span>Click here to upload</span>
                                    </LoadPhoto>

                                    <input type='file' id='files' ref={fileInputRef} multiple accept='image/*' onChange={handleFileChange} />
                                </div>


                                {photos.map((photo) => (
                                    <Photo key={photo.id} className={photo.id} onClick={(e) => handleDeleteAsk(e, photo.id)}>
                                        <img src={photo.url} alt={photo.filename} />
                                        
                                        <FaTrashCan className='delete' />
                                    </Photo>
                                ))}
                            </Gallery>
                        </Form>
                    </Container>
                </div>
            </section>
        </main>
    )
};

export default Photos;