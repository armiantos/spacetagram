import React, { useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Container from '@mui/material/Container';

import { ImageGrid } from './ImageGrid';
import { Heading } from './Heading';
import { theme } from './theme';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchApod } from './redux/thunks/browse/fetchApod';

function App() {
    const dispatch = useAppDispatch();
    const apods = useAppSelector((state) => state.browse.images);
    const isLoading = useAppSelector((state) => state.browse.isLoading);

    useEffect(() => {
        dispatch(fetchApod());
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
