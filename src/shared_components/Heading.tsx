import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { TextLogo } from '../assets/images';

export function Heading() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Link
                    to="/"
                    component={RouterLink}
                    sx={{ height: '2.5rem', flexGrow: 1 }}
                >
                    <img src={TextLogo} alt="spacetagram" height="100%" />
                </Link>
                <nav>
                    <ul
                        style={{ listStyleType: 'none', margin: 0, padding: 0 }}
                    >
                        <li style={{ float: 'left' }}>
                            <IconButton component={RouterLink} to="/">
                                <ExploreIcon />
                            </IconButton>
                        </li>
                        <li style={{ float: 'left' }}>
                            <IconButton component={RouterLink} to="/favorites">
                                <FavoriteIcon />
                            </IconButton>
                        </li>
                    </ul>
                </nav>
            </Toolbar>
        </AppBar>
    );
}
