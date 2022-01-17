import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';

import App from './App';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import LinearProgress from '@mui/material/LinearProgress';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

beforeEach(() => {
    mockedAxios.get.mockResolvedValue({
        data: [],
    });
});

test("it fetches NASA's APOD API", () => {
    const expected_endpoint = 'https://api.nasa.gov/planetary/apod';
    const expected_params = {
        count: 20,
        api_key: process.env.REACT_APP_NASA_API_KEY,
    };

    act(() => {
        render(<App />);
    });

    expect(mockedAxios.get).toBeCalledWith(expected_endpoint, {
        params: expected_params,
    });
});

test('initially renders a loading screen', () => {
    const result = shallow(<App />);

    expect(result.find(LinearProgress)).not.toBeNull();
});
