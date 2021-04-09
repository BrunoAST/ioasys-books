import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers: any) => {
    const persistedReducer: any = persistReducer({
        key: 'root',
        storage,
        whitelist: ['auth', 'user']
    },
    reducers);

    return persistedReducer;
};
