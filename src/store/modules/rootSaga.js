import { all } from 'redux-saga/effects';

import defaultSaga from './default/sagas'

export default function* rootSaga() {
    return yield all([
        defaultSaga,
    ]);
}