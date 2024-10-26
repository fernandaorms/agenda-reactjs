import * as types from '../types'

const initialState = {
    buttonClicked: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.BUTTON_CLICK_REQUEST: {
            console.log('Requesting...');
            return state;
        }
            
        case types.BUTTON_CLICK_SUCCESS: {
            console.log('Success :)');
            const newState = {...state};
            newState.buttonClicked = !newState.buttonClicked;

            return newState;
        }
            
        case types.BUTTON_CLICK_FAILURE: {
            console.log('Error :(');
            return state;
        }
            

        default:
            return state;
    }
};

export default reducer;