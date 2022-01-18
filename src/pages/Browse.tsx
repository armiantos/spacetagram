import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchApod } from '../redux/thunks/browse/fetchApod';
import { Loading } from '../shared_components/Loading';
import { MediaGrid } from '../shared_components/MediaGrid';
import { theme } from '../theme';

export function Browse() {
    const dispatch = useAppDispatch();
    const apods = useAppSelector((state) => state.browse.images);
    const isLoading = useAppSelector((state) => state.browse.isLoading);
    const { ref, inView } = useInView();

    const loading = isLoading && apods.length === 0 ? <Loading /> : null;

    useEffect(() => {
        if (apods.length == 0 || inView) {
            dispatch(fetchApod());
        }
    }, [apods, inView]);

    let loadMore = null;
    if (apods.length > 0) {
        loadMore = (
            <Box
                sx={{
                    display: 'grid',
                    placeItems: 'center',
                    paddingTop: theme.spacing(4),
                    paddingBottom: theme.spacing(2),
                }}
            >
                <LoadingButton
                    variant="contained"
                    ref={ref}
                    loading={isLoading}
                >
                    Load more
                </LoadingButton>
            </Box>
        );
    }

    return (
        <>
            <Typography variant="h3" component="h1" gutterBottom>
                Browse
            </Typography>
            {loading}
            <MediaGrid images={apods} />
            {loadMore}
        </>
    );
}
