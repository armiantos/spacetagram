import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { UndrawStars } from '../../assets/images';
import { theme } from '../../theme';

export function FavoritesEmptyState() {
    return (
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
                    explore
                </Link>{' '}
                to get some inspiration.
            </Typography>
        </Box>
    );
}
