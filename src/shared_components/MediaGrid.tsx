import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

import { Image } from '../data/Image';
import { theme } from '../theme';
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

export function MediaGrid(props: ImageGridProps) {
    let column_count = 1;
    if (useMediaQuery(theme.breakpoints.up('md'))) {
        column_count = 2;
    }
    if (useMediaQuery(theme.breakpoints.up('lg'))) {
        column_count = 3;
    }

    const columns = splitToColumns(props.images, column_count);

    return (
        <Grid container spacing={2}>
            {columns.map((column, index) => (
                <Grid item key={index} xs={12} md={6} lg={4}>
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
