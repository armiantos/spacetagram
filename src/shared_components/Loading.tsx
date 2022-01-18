import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/system/Box';
import React from 'react';

export function Loading() {
    return (
        <Box sx={{ maxWidth: '100%', display: 'grid', placeItems: 'center' }}>
            <CircularProgress />
        </Box>
    );
}
