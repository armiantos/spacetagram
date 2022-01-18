import { createSlice } from '@reduxjs/toolkit';

import { Image } from '../../data/Image';
import { fetchApod } from '../thunks/explore/fetchApod';

export type ExploreState = {
    images: Image[];
    isLoading: boolean;
    errorMessage?: string;
};

const initialState: ExploreState = {
    images: [],
    isLoading: false,
};

export const exploreSlice = createSlice({
    name: 'explore',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchApod.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchApod.fulfilled, (state, action) => {
            state.isLoading = false;
            state.images = [...state.images, ...action.payload];
        });
        builder.addCase(fetchApod.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.error.message;
        });
    },
});
