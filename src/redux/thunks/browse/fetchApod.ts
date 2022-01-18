import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Image } from '../../../data/Image';

export const fetchApod = createAsyncThunk('browse/fetchApod', async () => {
    const APOD_ENDPOINT = 'https://api.nasa.gov/planetary/apod';
    const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;

    const response = await axios.get<Image[]>(APOD_ENDPOINT, {
        params: {
            count: 20,
            api_key: NASA_API_KEY,
        },
    });

    const images = response.data.filter(
        (media) => media.media_type === 'image'
    );

    return images;
});
