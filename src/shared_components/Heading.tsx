import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

export function Heading() {
    return (
        <Container maxWidth="xl" component="header">
            <Typography variant="h1">spacetagram</Typography>
            <Typography variant="subtitle1">
                Brought to you by NASA&apos;s image api
            </Typography>

            <nav>
                <ul>
                    <li>
                        <Link component={RouterLink} to="/">
                            Browse
                        </Link>
                    </li>
                    <li>
                        <Link component={RouterLink} to="/favorites">
                            Favorites
                        </Link>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}
