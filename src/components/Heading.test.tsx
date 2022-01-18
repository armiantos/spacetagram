import { IconButton } from '@mui/material';
import { shallow } from 'enzyme';
import React from 'react';

import { TextLogo } from '../assets/images';
import { Heading } from './Heading';

test('it contains the spacetagram logo', () => {
    const result = shallow(<Heading />);

    const logo = result.find('img');
    expect(logo).not.toBeNull();
    expect(logo.prop('src')).toBe(TextLogo);
});

test('it contains links to /favorites and /', () => {
    const result = shallow(<Heading />);

    const links = result.find('nav').find('ul').find('li');
    expect(links).toHaveLength(2);

    const exploreLink = links.at(0);
    const favoritesLink = links.at(1);

    expect(exploreLink.find(IconButton).prop('to')).toEqual('/');
    expect(favoritesLink.find(IconButton).prop('to')).toEqual('/favorites');
});
