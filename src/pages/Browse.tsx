import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchApod } from '../redux/thunks/browse/fetchApod';
import { Loading } from '../shared_components/Loading';
import { MediaGrid } from '../shared_components/MediaGrid';

export function Browse() {
    const dispatch = useAppDispatch();
    const apods = useAppSelector((state) => state.browse.images);
    const isLoading = useAppSelector((state) => state.browse.isLoading);

    const loading = isLoading ? <Loading /> : null;

    useEffect(() => {
        dispatch(fetchApod());
    }, []);

    return (
        <>
            <Typography variant="h3" component="h1" gutterBottom>
                Browse
            </Typography>
            {loading}
            <MediaGrid images={apods} />
        </>
    );
}
