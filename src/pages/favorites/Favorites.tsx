import Typography from '@mui/material/Typography';
import React from 'react';

import { MediaGrid } from '../../components/MediaGrid';
import { useAppSelector } from '../../redux/hooks';
import { FavoritesEmptyState } from './FavoritesEmptyState';

export function Favorites() {
    const apods = useAppSelector((state) => state.likedImages.images);

    let emptyState = null;

    if (apods.length === 0) {
        emptyState = <FavoritesEmptyState />;
    }

    return (
        <>
            <Typography variant="h3" component="h1" gutterBottom>
                Favorites
            </Typography>
            {emptyState}
            <MediaGrid images={apods} />
        </>
    );
}
