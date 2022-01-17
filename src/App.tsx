import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ImageGrid } from './ImageGrid';
import LinearProgress from '@mui/material/LinearProgress';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

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

    if (isLoading) {
        return <LinearProgress />;
    }

    const mappedImages = apods.map((apod) => ({
        title: apod.title,
        url: apod.url,
        alt: apod.title,
        description: apod.explanation,
        date: apod.date,
    }));
    const content = <ImageGrid images={mappedImages} />;

    return (
        <Container maxWidth="lg">
            <Typography variant="h1">spacetagram</Typography>
            <Typography variant="subtitle1">
                Brought to you by NASA&apos;s image api
            </Typography>
            {content}
        </Container>
    );
}

export default App;
