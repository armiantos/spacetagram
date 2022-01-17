import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/system/Box';

export function Loading() {
    return (
        <Box sx={{ maxWidth: '100%', display: 'grid', placeItems: 'center' }}>
            <CircularProgress />
        </Box>
    );
}
