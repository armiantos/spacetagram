import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Frame, Loading, Page } from '@shopify/polaris';
import { ImageGrid } from './ImageGrid';

export interface ApodResponse {
    copyright: string;
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}

function App() {
    const [apods, setApods] = useState<ApodResponse[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const APOD_ENDPOINT = 'https://api.nasa.gov/planetary/apod';
            const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
            setIsLoading(true);
            const response = await axios.get<ApodResponse[]>(APOD_ENDPOINT, {
                params: {
                    count: 20,
                    api_key: NASA_API_KEY,
                },
            });
            setIsLoading(false);
            setApods(response.data);
        })();
    }, []);

    let content = (
        <Frame>
            <Loading />
        </Frame>
    );

    if (!isLoading) {
        const mappedImages = apods.map((apod) => ({
            title: apod.title,
            url: apod.url,
            alt: apod.title,
            description: apod.explanation,
            date: apod.date,
        }));
        content = <ImageGrid images={mappedImages} />;
    }

    return <Page title="spacestagram">{content}</Page>;
}

export default App;
