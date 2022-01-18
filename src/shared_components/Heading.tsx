import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ExploreIcon from '@mui/icons-material/Explore';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export function Heading() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    spacetagram
                </Typography>
                <nav>
                    <ul
                        style={{ listStyleType: 'none', margin: 0, padding: 0 }}
                    >
                        <li style={{ float: 'left' }}>
                            <IconButton component={Link} to="/">
                                <ExploreIcon />
                            </IconButton>
                        </li>
                        <li style={{ float: 'left' }}>
                            <IconButton component={Link} to="/favorites">
                                <FavoriteIcon />
                            </IconButton>
                        </li>
                    </ul>
                </nav>
            </Toolbar>
        </AppBar>
    );
}
