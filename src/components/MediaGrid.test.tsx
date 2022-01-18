import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { shallow } from 'enzyme';
import React from 'react';

import { mockImages } from '../testConstants';
import { MediaCard } from './MediaCard';
import { MediaGrid } from './MediaGrid';

jest.mock('@mui/material/useMediaQuery');
const mockUseMediaQuery = jest.mocked(useMediaQuery, true);

test('renders images as MediaCards', () => {
    const result = shallow(<MediaGrid images={mockImages} />);

    const cards = result.find(MediaCard);
    expect(cards).toHaveLength(mockImages.length);
});

test('renders the 3 columns for large screens', () => {
    mockUseMediaQuery.mockReturnValueOnce(false);
    mockUseMediaQuery.mockReturnValueOnce(true);

    const result = shallow(<MediaGrid images={mockImages} />);

    const columns = result.findWhere((wrapper) => wrapper.type() === Grid && wrapper.prop('item'));
    expect(columns).toHaveLength(3);
});

test('renders the 2 columns for medium screens', () => {
    mockUseMediaQuery.mockReturnValueOnce(true);

    const result = shallow(<MediaGrid images={mockImages} />);

    const columns = result.findWhere((wrapper) => wrapper.type() === Grid && wrapper.prop('item'));
    expect(columns).toHaveLength(2);
});

test('renders the 1 column for small screens', () => {
    mockUseMediaQuery.mockReturnValue(false);

    const result = shallow(<MediaGrid images={mockImages} />);

    const columns = result.findWhere((wrapper) => wrapper.type() === Grid && wrapper.prop('item'));
    expect(columns).toHaveLength(1);
});
