import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { Loading } from '../../components/Loading';
import { MediaGrid } from '../../components/MediaGrid';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchApod } from '../../redux/thunks/explore/fetchApod';
import { theme } from '../../theme';

export function Explore() {
    const dispatch = useAppDispatch();
    const apods = useAppSelector((state) => state.explore.images);
    const isLoading = useAppSelector((state) => state.explore.isLoading);
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
                    onClick={() => {
                        dispatch(fetchApod());
                    }}
                >
                    Load more
                </LoadingButton>
            </Box>
        );
    }

    return (
        <>
            <Typography variant="h3" component="h1" gutterBottom>
                Explore
            </Typography>
            {loading}
            <MediaGrid images={apods} />
            {loadMore}
        </>
    );
}
