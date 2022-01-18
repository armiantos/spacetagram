import { RootState } from './redux/store';

export const mockRootState: RootState = {
    browse: {
        images: [],
        isLoading: false,
    },
    likedImages: {
        images: [],
    },
    focus: {},
    _persist: {
        version: 1,
        rehydrated: false,
    },
};
