import * as types from '../types'
import axios from '../../../services/axios';
import { loginFailure } from './actions';

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
            const { token, user } = action.payload;

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

        case types.USER_UPDATE_REQUEST: {
            const newState = {
                ...state,
                isLoading: true,
            };
            return newState;
        }

        case types.USER_UPDATE_SUCCESS: {
            const { user } = action.payload;
            
            const newState = {
                ...state,
                isLoading: false,
                user: user,
            }

            return newState;
        }

        case types.USER_UPDATE_FAILURE: {
            const newState = {
                ...state,
                isLoading: false,
            };

            return newState;
        }

        default:
            return state;
    }
};

export default reducer;