import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const createPersistedReducers = (reducers) => {
    const persistedReducers = persistReducer(
        {
            key: 'REACT-BASE',
            storage,
            whitelist: ['default']
        }, 
        reducers
    );

    return persistedReducers;
};


export default createPersistedReducers;