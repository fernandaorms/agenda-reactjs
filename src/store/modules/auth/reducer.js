import * as types from '../types'
import axios from '../../../services/axios';

const initialState = {
    isLoggedIn: false,
    token: false,
    user: {},
    isLoading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST: {
            const newState = { 
                ...state,
                isLoading: true,
            };
            return newState;
        }

        case types.LOGIN_SUCCESS: {
            const {token, user } = action.payload;

            const newState = {
                ...state,
                isLoggedIn: true,
                token: token,
                user: user,
                isLoading: false,
            }

            return newState;
        }

        case types.LOGIN_FAILURE: {
            delete axios.defaults.headers.Authorization;
            const newState = { ...initialState };
            return newState;
        }

        default:
            return state;
    }
};

export default reducer;