import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { UndrawStars } from '../assets/images';
import { useAppSelector } from '../redux/hooks';
import { MediaGrid } from '../shared_components/MediaGrid';
import { theme } from '../theme';

export function Favorites() {
    const apods = useAppSelector((state) => state.likedImages.images);

    let emptyState = null;

    if (apods.length === 0) {
        emptyState = (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src={UndrawStars}
                    alt="stars"
                    style={{ margin: theme.spacing(8), maxWidth: '100%' }}
                />
                <Typography variant="body1">
                    You haven&apos;t picked your favorites yet. Go visit{' '}
                    <Link component={RouterLink} to="/">
                        browse
                    </Link>{' '}
                    to get some inspiration.
                </Typography>
            </Box>
        );
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
