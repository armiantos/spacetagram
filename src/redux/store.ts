import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { browseSlice } from './slices/browseSlice';
import { focusSlice } from './slices/focusSlice';
import { likedImagesSlice } from './slices/likedImagesSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    likedImages: likedImagesSlice.reducer,
    browse: browseSlice.reducer,
    focus: focusSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: {
        persistedReducer,
    },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
