const initialState = {
    buttonClicked: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BUTTON_CLICK':
            const newState = {...state};
            
            newState.buttonClicked = !newState.buttonClicked;

            return newState;

        default:
            return state;
    }
};

export default reducer;