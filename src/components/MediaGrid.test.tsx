import { useMediaQuery } from '@mui/material';
import { shallow } from 'enzyme';
import React from 'react';

import { mockImages } from '../testConstants';
import { MediaCard } from './MediaCard';
import { MediaGrid } from './MediaGrid';

jest.mocked(useMediaQuery);

test('renders images as MediaCards', () => {
    const result = shallow(<MediaGrid images={mockImages} />);

    const cards = result.find(MediaCard);
    expect(cards).toHaveLength(mockImages.length);
});
