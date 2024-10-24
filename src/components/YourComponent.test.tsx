import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import YourComponent from './YourComponent';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('YourComponent', () => {
    it('renders correctly and dispatches action on button press', () => {
        const store = mockStore({});
        const { getByText } = render(
            <Provider store={store}>
                <YourComponent title="Test Title" />
            </Provider>
        );

        expect(getByText('Test Title')).toBeTruthy();

        fireEvent.press(getByText('Press me'));
        const actions = store.getActions();
        expect(actions).toEqual([{ type: 'YOUR_ACTION' }]);
    });
});
