import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { focusSlice } from '../redux/slices/focusSlice';
import { pink } from '@mui/material/colors';
import { likedImagesSlice } from '../redux/slices/likedImagesSlice';
import { Image } from '../data/Image';
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
