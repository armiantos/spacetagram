import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';

import { Image } from '../data/Image';

export interface ImageGridProps {
    images: Image[];
}

function splitToColumns(items: Image[], num_columns: number) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const columns = [...Array(num_columns)].map((_) => []);
    return items.reduce<Image[][]>((acc, image, index) => {
        const target_array = index % num_columns;
        acc[target_array].push(image);
        return acc;
    }, columns);
}

// TODO: Use later to display short description
// function ellipsis(text: string, num_words: number) {
//     const split_text = text.split(' ');
//     const suffix = split_text.length > num_words ? '...' : '';
//     const display_text = split_text.slice(0, num_words).join(' ');
//     return [display_text, suffix].join(' ');
// }

export function ImageGrid(props: ImageGridProps) {
    const COLUMNS_PER_PAGE = 3;
    const MAX_COLUMNS = 12;

    const columns = splitToColumns(props.images, COLUMNS_PER_PAGE);

    return (
        <Grid container spacing={2}>
            {columns.map((column, index) => (
                <Grid item key={index} xs={MAX_COLUMNS / COLUMNS_PER_PAGE}>
                    <Stack spacing={3}>
                        {column.map((image) => (
                            <Card title={image.title} key={image.url}>
                                <CardHeader title={image.title} />
                                <CardMedia
                                    component="img"
                                    image={image.url}
                                    alt={image.title}
                                />
                                <CardContent>
                                    <Typography variant="body2">
                                        {image.date}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton aria-label="like photo">
                                        <FavoriteIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        ))}
                    </Stack>
                </Grid>
            ))}
        </Grid>
    );
}
