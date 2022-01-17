import React from 'react';
import Container from '@mui/material/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Heading } from './Heading';
import { Browse } from './pages/Browse';
import { theme } from './theme';

function App() {
    return (
        <>
            <Heading />
            <Container maxWidth="xl" sx={{ marginTop: theme.spacing(12) }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Browse />} />
                    </Routes>
                </BrowserRouter>
            </Container>
        </>
    );
}

export default App;
