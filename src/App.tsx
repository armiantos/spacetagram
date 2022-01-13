import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

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
        return <div>Loading</div>;
    }

    return (
        <div>
            {apods
                .filter((apod) => apod.media_type === 'image')
                .map((apod) => (
                    <img key={apod.url} alt={apod.title} src={apod.url} />
                ))}
        </div>
    );
}

export default App;
