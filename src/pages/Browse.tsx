import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';

import { ImageGrid } from '../shared_components/ImageGrid';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchApod } from '../redux/thunks/browse/fetchApod';
import { Loading } from '../shared_components/Loading';

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
            <Typography variant="h1">Browse</Typography>
            {loading}
            <ImageGrid images={apods} />
        </>
    );
}
