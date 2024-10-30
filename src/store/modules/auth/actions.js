import * as types from '../types'

export function loginRequest(payload) {
    return { 
        type: types.LOGIN_REQUEST,
        payload,
    };
};

export function loginSuccess(payload) {
    return { 
        type: types.LOGIN_SUCCESS,
        payload,
    };
};

export function loginFailure(payload) {
    return { 
        type: types.LOGIN_FAILURE,
        payload,
    };
};

export function userUpdateRequest(payload) {
    return { 
        type: types.USER_UPDATE_REQUEST,
        payload,
    };
};

export function userUpdateSuccess(payload) {
    return { 
        type: types.USER_UPDATE_SUCCESS,
        payload,
    };
};

export function userUpdateFailure(payload) {
    return {
        type: types.USER_UPDATE_FAILURE,
        payload,
    };
};
