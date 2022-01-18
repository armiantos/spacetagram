import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Image } from '../../data/Image';

export type LikedImagesState = {
    images: Image[];
};

const initialState: LikedImagesState = {
    images: [],
};

export const likedImagesSlice = createSlice({
    name: 'liked_images',
    initialState,
    reducers: {
        likePhoto: (state, action: PayloadAction<Image>) => {
            state.images.push(action.payload);
        },
    },
});
