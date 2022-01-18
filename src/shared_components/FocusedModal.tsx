import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React from 'react';

import { Image } from '../data/Image';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { focusSlice } from '../redux/slices/focusSlice';
import { likedImagesSlice } from '../redux/slices/likedImagesSlice';
import { theme } from '../theme';

function isLiked(image: Image, likedImages: Image[]) {
    return likedImages.includes(image);
}

export function FocusedModal() {
    const dispatch = useAppDispatch();
    const likedImages = useAppSelector((state) => state.likedImages.images);
    const focusedImage = useAppSelector((state) => state.focus.image);

    const open = focusedImage !== undefined;
    const handleClose = () => {
        dispatch(focusSlice.actions.defocus());
    };

    if (!open) {
        return null;
    }

    let favoriteIcon = <FavoriteIcon />;
    if (isLiked(focusedImage, likedImages)) {
        favoriteIcon = <FavoriteIcon sx={{ color: pink[500] }} />;
    }

    return (
        <Dialog onClose={handleClose} open={open} maxWidth="md" scroll="body">
            <DialogTitle>{focusedImage.title}</DialogTitle>
            <Box sx={{ overflowY: 'auto' }}>
                <img
                    src={focusedImage.url}
                    alt={focusedImage.title}
                    width="100%"
                />
                <Box
                    sx={{
                        padding: theme.spacing(2),
                    }}
                >
                    <Typography variant="body1" gutterBottom>
                        {focusedImage.date}
                    </Typography>
                    <Typography variant="body2">
                        {focusedImage.explanation}
                    </Typography>
                </Box>
            </Box>
            <DialogActions>
                <IconButton
                    aria-label="like photo"
                    onClick={() => {
                        dispatch(
                            likedImagesSlice.actions.toggleLikePhoto(
                                focusedImage
                            )
                        );
                    }}
                >
                    {favoriteIcon}
                </IconButton>
            </DialogActions>
        </Dialog>
    );
}
