import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

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
