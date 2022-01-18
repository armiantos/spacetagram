import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Image } from '../data/Image';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { likedImagesSlice } from '../redux/slices/likedImagesSlice';
import CardActionArea from '@mui/material/CardActionArea';
import { focusSlice } from '../redux/slices/focusSlice';
import { makeStyles } from '@mui/styles';

export interface ImageCardProps {
    image: Image;
}

function isLiked(image: Image, likedImages: Image[]) {
    return likedImages.includes(image);
}

export const MediaCard: React.FC<ImageCardProps> = (props: ImageCardProps) => {
    const classes = useStyles();
    const { image } = props;
    const dispatch = useAppDispatch();
    const likedImages = useAppSelector((state) => state.likedImages.images);

    let favoriteIcon = <FavoriteIcon />;
    if (isLiked(image, likedImages)) {
        favoriteIcon = <FavoriteIcon sx={{ color: pink[500] }} />;
    }

    return (
        <Card title={image.title} key={image.url}>
            <CardActionArea
                onClick={() => dispatch(focusSlice.actions.focus(image))}
            >
                <CardHeader title={image.title} />
                <CardMedia
                    component="img"
                    image={image.url}
                    alt={image.title}
                />
                <CardContent>
                    <Typography variant="body1" gutterBottom>
                        {image.date}
                    </Typography>
                    <Typography
                        variant="body2"
                        className={classes.overflowText}
                    >
                        {image.explanation}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton
                    aria-label="like photo"
                    onClick={() => {
                        dispatch(
                            likedImagesSlice.actions.toggleLikePhoto(image)
                        );
                    }}
                    sx={{ marginLeft: 'auto' }}
                >
                    {favoriteIcon}
                </IconButton>
            </CardActions>
        </Card>
    );
};

// Ellipsis implementation taken from https://css-tricks.com/almanac/properties/l/line-clamp/
const useStyles = makeStyles({
    overflowText: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        display: '-webkit-box',
    },
});
