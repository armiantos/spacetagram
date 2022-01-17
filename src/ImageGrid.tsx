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

    return (
        <>
            {images.map((image) => (
                <img key={image.url} src={image.url} alt={image.alt} />
            ))}
        </>
    );
}
