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
        toggleLikePhoto: (state, action: PayloadAction<Image>) => {
            const imageToToggle = action.payload;
            const indexOfImage = state.images.findIndex(
                (likedImage) => likedImage.url === imageToToggle.url
            );

            if (indexOfImage < 0) {
                state.images.push(action.payload);
                return;
            }

            state.images.splice(indexOfImage, 1);
        },
    },
});
