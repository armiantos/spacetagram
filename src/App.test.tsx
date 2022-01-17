import React from 'react';
import { render } from '@testing-library/react';
import LinearProgress from '@mui/material/LinearProgress';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';

import App from './App';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { mockRootState } from './test_constants';
import { fetchApod } from './redux/thunks/browse/fetchApod';

jest.mock('./redux/hooks');
export const mockUseAppDispatch = jest.mocked(useAppDispatch, true);
export const mockUseAppSelector = jest.mocked(useAppSelector, true);

const mockDispatch = jest.fn();

jest.mock('./redux/thunks/browse/fetchApod');
export const mockFetchApod = jest.mocked(fetchApod, true);

beforeEach(() => {
    mockUseAppDispatch.mockReturnValue(mockDispatch);
    mockUseAppSelector.mockImplementation((selector) =>
        selector(mockRootState)
    );
});

test("it fetches NASA's APOD API", () => {
    act(() => {
        render(<App />);
    });

    expect(mockDispatch).toBeCalledWith(fetchApod());
});

test('initially renders a loading screen', () => {
    const result = shallow(<App />);

    expect(result.find(LinearProgress)).not.toBeNull();
});
