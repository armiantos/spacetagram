import { CircularProgress } from '@mui/material';
import { shallow } from 'enzyme';
import React from 'react';

import { Loading } from './Loading';

test('it contains a circular progress component', () => {
    const result = shallow(<Loading />);

    expect(result.find(CircularProgress)).not.toBeNull();
});
