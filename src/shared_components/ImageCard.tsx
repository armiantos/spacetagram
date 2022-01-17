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

export interface ImageCardProps {
    image: Image;
}

// TODO: Use later to display short description
// function ellipsis(text: string, num_words: number) {
//     const split_text = text.split(' ');
//     const suffix = split_text.length > num_words ? '...' : '';
//     const display_text = split_text.slice(0, num_words).join(' ');
//     return [display_text, suffix].join(' ');
// }

export const ImageCard: React.FC<ImageCardProps> = (props: ImageCardProps) => {
    const { image } = props;

    return (
        <Card title={image.title} key={image.url}>
            <CardHeader title={image.title} />
            <CardMedia component="img" image={image.url} alt={image.title} />
            <CardContent>
                <Typography variant="body2">{image.date}</Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="like photo">
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};
