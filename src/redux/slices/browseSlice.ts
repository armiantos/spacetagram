import { createSlice } from '@reduxjs/toolkit';

import { Image } from '../../data/Image';
import { fetchApod } from '../thunks/browse/fetchApod';

export type BrowseState = {
    images: Image[];
    isLoading: boolean;
    errorMessage?: string;
};

const initialState: BrowseState = {
    images: [],
    isLoading: false,
};

export const browseSlice = createSlice({
    name: 'browse',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchApod.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchApod.fulfilled, (state, action) => {
            state.isLoading = false;
            state.images = action.payload;
        });
        builder.addCase(fetchApod.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.error.message;
        });
    },
});
