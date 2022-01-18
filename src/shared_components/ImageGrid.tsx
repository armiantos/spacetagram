import React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import { Image } from '../data/Image';
import { MediaCard } from './MediaCard';

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

export function ImageGrid(props: ImageGridProps) {
    const COLUMNS_PER_PAGE = 3;
    const MAX_COLUMNS = 12;

    const columns = splitToColumns(props.images, COLUMNS_PER_PAGE);

    return (
        <Grid container spacing={2}>
            {columns.map((column, index) => (
                <Grid item key={index} xs={MAX_COLUMNS / COLUMNS_PER_PAGE}>
                    <Stack spacing={2}>
                        {column.map((image) => (
                            <MediaCard key={image.url} image={image} />
                        ))}
                    </Stack>
                </Grid>
            ))}
        </Grid>
    );
}
