import Container from '@mui/material/Container';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Browse } from './pages/Browse';
import { Favorites } from './pages/Favorites';
import { FocusedModal } from './shared_components/FocusedModal';
import { Heading } from './shared_components/Heading';
import { theme } from './theme';

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
