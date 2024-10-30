import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
    try {
        const { email, password, prevPath, navigate } = payload;

        const response = yield call(axios.post, '/tokens', { email, password });
        yield put(actions.loginSuccess({ ...response.data }));

        toast.dismiss();
        toast.success('Login successful!');

        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        navigate(prevPath);

    } catch (err) {
        toast.error('Invalid email or password.');

        yield put(actions.loginFailure());
    }
}

function* userUpdateRequest({ payload }) {
    const { firstName, lastName, email, profilePictureId, navigate } = payload;

    try {
        const response = yield call(axios.put, '/users', { 
            first_name: firstName,
            last_name: lastName,
            email,
            profile_picture_id:  profilePictureId
        });

        yield put(actions.userUpdateSuccess({ ...response.data }));

        toast.dismiss();
        toast.success('Update successful!');
    } catch (err) {
        const errors = get(err, 'response.data.errors', []);
        const status = get(err, 'response.status', 0);

        if(status === 401) {
            toast.error('You must log in.');

            yield put(actions.loginFailure());

            navigate('/login');
        }
        else if (errors.length > 0) errors.map((error) => toast.error(error));
        else toast.error(err.message);

        yield put(actions.userUpdateFailure());
    }
}

function persistRehydrate({ payload }) {
    const token = get(payload, 'auth.token', '');
    if(!token) return;

    axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.USER_UPDATE_REQUEST, userUpdateRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate)
]);