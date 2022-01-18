import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Image } from '../../data/Image';

export type FocusState = {
    image?: Image;
};

const initialState: FocusState = {};

export const focusSlice = createSlice({
    name: 'focus',
    initialState,
    reducers: {
        focus: (state, action: PayloadAction<Image>) => {
            state.image = action.payload;
        },
        defocus: () => initialState,
    },
});
