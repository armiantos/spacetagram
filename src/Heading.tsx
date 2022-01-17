import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export function Heading() {
    return (
        <Container maxWidth="lg">
            <Typography variant="h1">spacetagram</Typography>
            <Typography variant="subtitle1">
                Brought to you by NASA&apos;s image api
            </Typography>
        </Container>
    );
}
