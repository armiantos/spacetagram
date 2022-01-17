import { Layout } from '@shopify/polaris';
import React from 'react';

export interface Image {
    title: string;
    url: string;
    alt: string;
    description?: string;
}

export interface ImageGridProps {
    images: Image[];
}

export function ImageGrid(props: ImageGridProps) {
    const images = props.images;

    const [even, odd] = images.reduce<Image[][]>(
        (acc, image, index) => {
            const target_array = index % 2;
            acc[target_array].push(image);
            return acc;
        },
        [[], []]
    );

    return (
        <Layout>
            <Layout.Section oneHalf>
                {even.map((image) => (
                    <img key={image.url} src={image.url} alt={image.alt} />
                ))}
            </Layout.Section>
            <Layout.Section oneHalf>
                {odd.map((image) => (
                    <img key={image.url} src={image.url} alt={image.alt} />
                ))}
            </Layout.Section>
        </Layout>
    );
}
