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

function persistRehydrate({ payload }) {
    const token = get(payload, 'auth.token', '');
    if(!token) return;

    axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate)
]);