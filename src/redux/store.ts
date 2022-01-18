import { configureStore } from '@reduxjs/toolkit';
import { browseSlice } from './slices/browseSlice';
import { focusSlice } from './slices/focusSlice';
import { likedImagesSlice } from './slices/likedImagesSlice';

export const store = configureStore({
    reducer: {
        likedImages: likedImagesSlice.reducer,
        browse: browseSlice.reducer,
        focus: focusSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
