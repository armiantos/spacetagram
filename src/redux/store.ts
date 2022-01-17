import { configureStore } from '@reduxjs/toolkit';
import { likedImagesSlice } from './slices/likedImagesSlice';

export const store = configureStore({
    reducer: {
        likedImages: likedImagesSlice.reducer,
    },
});
