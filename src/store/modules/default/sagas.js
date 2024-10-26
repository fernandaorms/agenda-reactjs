import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';

const request = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
        // reject();
    }, 600);
});

function* defaultRequest() {
    try {
        yield call(request);
        yield put(actions.clickButtonSuccess());
    } catch {
        yield put(actions.clickButtonFailure());
        toast.error('Error :(');
    }
}

export default all([
    takeLatest(types.BUTTON_CLICK_REQUEST, defaultRequest),
]);