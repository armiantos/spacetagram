import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export function Heading() {
    return (
        <Container maxWidth="xl">
            <Typography variant="h1">spacetagram</Typography>
            <Typography variant="subtitle1">
                Brought to you by NASA&apos;s image api
            </Typography>
        </Container>
    );
}
