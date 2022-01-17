import React from 'react';
import { Layout, MediaCard } from '@shopify/polaris';

export interface Image {
    title: string;
    url: string;
    alt: string;
    description?: string;
}

export interface ImageGridProps {
    images: Image[];
}

function splitToColumns(items: Image[], num_columns: number) {
    const columns = [...Array(num_columns)].map((_) => []);
    return items.reduce<Image[][]>((acc, image, index) => {
        const target_array = index % num_columns;
        acc[target_array].push(image);
        return acc;
    }, columns);
}

function ellipsis(text: string, num_words: number) {
    const split_text = text.split(' ');
    const suffix = split_text.length > num_words ? '...' : '';
    const display_text = split_text.slice(0, num_words).join(' ');
    return display_text + suffix;
}

export function ImageGrid(props: ImageGridProps) {
    const COLUMNS_PER_PAGE = 3;
    const MAX_WORDS_IN_DESCRIPTION = 20;

    const columns = splitToColumns(props.images, COLUMNS_PER_PAGE);

    return (
        <Layout>
            {columns.map((column, index) => (
                <Layout.Section oneThird key={index}>
                    {column.map((image) => (
                        <MediaCard
                            title={image.title}
                            description={ellipsis(
                                image.description || '',
                                MAX_WORDS_IN_DESCRIPTION
                            )}
                            key={image.url}
                            portrait
                        >
                            <img
                                alt={image.title}
                                width="100%"
                                height="100%"
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                }}
                                src={image.url}
                            />
                        </MediaCard>
                    ))}
                </Layout.Section>
            ))}
        </Layout>
    );
}