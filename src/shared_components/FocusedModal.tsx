import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { focusSlice } from '../redux/slices/focusSlice';
import { DetailedMediaCard } from './DetailedMediaCard';

export function FocusedModal() {
    const dispatch = useAppDispatch();
    const focusedImage = useAppSelector((state) => state.focus.image);

    return (
        <Modal
            open={focusedImage !== undefined}
            onClose={() => {
                dispatch(focusSlice.actions.defocus());
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <DetailedMediaCard image={focusedImage} />
            </Box>
        </Modal>
    );
}
