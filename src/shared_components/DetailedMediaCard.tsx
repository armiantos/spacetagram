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

export interface DetailedMediaCardProps {
    image?: Image;
}

function isLiked(image: Image, likedImages: Image[]) {
    return likedImages.includes(image);
}

export const DetailedMediaCard: React.FC<DetailedMediaCardProps> = (
    props: DetailedMediaCardProps
) => {
    const { image } = props;
    if (image === undefined) {
        return <></>;
    }

    const dispatch = useAppDispatch();
    const likedImages = useAppSelector((state) => state.likedImages.images);

    let favoriteIcon = <FavoriteIcon />;
    if (isLiked(image, likedImages)) {
        favoriteIcon = <FavoriteIcon sx={{ color: pink[500] }} />;
    }

    return (
        <Card title={image.title} key={image.url}>
            <CardHeader title={image.title} />
            <CardMedia component="img" image={image.hdurl} alt={image.title} />
            <CardContent>
                <Typography variant="body1" gutterBottom>
                    {image.date}
                </Typography>
                <Typography variant="body2">{image.explanation}</Typography>
            </CardContent>
            <CardActions>
                <IconButton
                    aria-label="like photo"
                    onClick={() => {
                        dispatch(
                            likedImagesSlice.actions.toggleLikePhoto(image)
                        );
                    }}
                >
                    {favoriteIcon}
                </IconButton>
            </CardActions>
        </Card>
    );
};
