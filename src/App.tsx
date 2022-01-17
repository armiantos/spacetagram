import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LinearProgress from '@mui/material/LinearProgress';
import Container from '@mui/material/Container';

import { ImageGrid } from './ImageGrid';
import { Heading } from './Heading';
import { theme } from './theme';
import { Image } from './data/Image';

function App() {
    const [apods, setApods] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const APOD_ENDPOINT = 'https://api.nasa.gov/planetary/apod';
            const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
            setIsLoading(true);
            const response = await axios.get<Image[]>(APOD_ENDPOINT, {
                params: {
                    count: 20,
                    api_key: NASA_API_KEY,
                },
            });
            setIsLoading(false);
            setApods(response.data);
        })();
    }, []);

    const loading = isLoading ? <LinearProgress /> : null;

    const content = <ImageGrid images={apods} />;

    return (
        <>
            {loading}
            <Heading />
            <Container maxWidth="xl" sx={{ marginTop: theme.spacing(12) }}>
                {content}
            </Container>
        </>
    );
}

export default App;
