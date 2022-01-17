import React from 'react';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

beforeEach(() => {
    mockedAxios.get.mockResolvedValue({
        data: [],
    });
});

test.todo("it fetches NASA's APOD API");

test.todo('initially renders a loading screen');
