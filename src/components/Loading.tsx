import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/system/Box';
import React from 'react';

import { theme } from '../theme';

export function Loading() {
    return (
        <Box
            sx={{
                maxWidth: '100%',
                display: 'grid',
                placeItems: 'center',
                margin: theme.spacing(3),
            }}
        >
            <CircularProgress />
        </Box>
    );
}
