import React from 'react';
import Typography from '@mui/material/Typography';

import { ImageGrid } from '../shared_components/ImageGrid';
import { useAppSelector } from '../redux/hooks';

export function Favorites() {
    const apods = useAppSelector((state) => state.likedImages.images);

    return (
        <>
            <Typography variant="h1">Favorites</Typography>
            <ImageGrid images={apods} />
        </>
    );
}
