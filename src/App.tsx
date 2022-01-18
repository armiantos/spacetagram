import Container from '@mui/material/Container';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { FocusedModal } from './components/FocusedModal';
import { Heading } from './components/Heading';
import { Explore, Favorites } from './pages';
import { theme } from './theme';

function App() {
    return (
        <BrowserRouter>
            <Heading />
            <FocusedModal />
            <Container maxWidth="xl" sx={{ marginTop: theme.spacing(12) }}>
                <Routes>
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/" element={<Explore />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
