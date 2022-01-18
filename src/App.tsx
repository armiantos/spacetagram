import React from 'react';
import Container from '@mui/material/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Heading } from './shared_components/Heading';
import { Browse } from './pages/Browse';
import { theme } from './theme';
import { Favorites } from './pages/Favorites';
import { FocusedModal } from './shared_components/FocusedModal';

function App() {
    return (
        <BrowserRouter>
            <Heading />
            <FocusedModal />
            <Container maxWidth="xl" sx={{ marginTop: theme.spacing(12) }}>
                <Routes>
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/" element={<Browse />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
