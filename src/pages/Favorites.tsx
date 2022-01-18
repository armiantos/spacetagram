import Typography from '@mui/material/Typography';
import React from 'react';

import { useAppSelector } from '../redux/hooks';
import { MediaGrid } from '../shared_components/MediaGrid';

export function Favorites() {
    const apods = useAppSelector((state) => state.likedImages.images);

    return (
        <>
            <Typography variant="h3" component="h1" gutterBottom>
                Favorites
            </Typography>
            <MediaGrid images={apods} />
        </>
    );
}
