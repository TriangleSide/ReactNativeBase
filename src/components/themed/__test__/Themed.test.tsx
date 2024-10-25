import React from 'react';
import { Provider } from 'react-redux';
import { Text, useColorScheme } from 'react-native';
import { render } from '@testing-library/react-native';
import { configureStore } from '@reduxjs/toolkit';
import { themeReducer, setTheme } from '@/state/slices/theme';
import Themed from '../Themed';

const renderWithProviders = (ui: React.ReactNode, { store }: { store: any }) => {
    return render(<Provider store={store}>{ui}</Provider>);
}

describe('Themed Component', () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                theme: themeReducer,
            },
            preloadedState: {
                theme: { theme: 'light' },
            },
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('sets theme based on light system theme and null state theme', () => {
        store.dispatch(setTheme(null));
        const dispatch = jest.spyOn(store, 'dispatch');
        (useColorScheme as jest.Mock).mockReturnValue('light');
        renderWithProviders(<Themed><Text>Test Child</Text></Themed>, { store });
        expect(store.getState().theme.theme).toBe('light');
        expect(dispatch).toHaveBeenCalledWith(setTheme('light'));
    });

    it('sets theme based on dark system theme and null state theme', () => {
        store.dispatch(setTheme(null));
        const dispatch = jest.spyOn(store, 'dispatch');
        (useColorScheme as jest.Mock).mockReturnValue('dark');
        renderWithProviders(<Themed><Text>Test Child</Text></Themed>, { store });
        expect(store.getState().theme.theme).toBe('dark');
        expect(dispatch).toHaveBeenCalledWith(setTheme('dark'));
    });

    it('does not dispatch if theme matches light system theme', () => {
        (useColorScheme as jest.Mock).mockReturnValue('light');
        store.dispatch(setTheme('light'));
        expect(store.getState().theme.theme).toBe('light');
        const dispatch = jest.spyOn(store, 'dispatch');
        renderWithProviders(<Themed><Text>Test Child</Text></Themed>, { store });
        expect(dispatch).not.toHaveBeenCalledWith(setTheme('light'));
    });

    it('does not dispatch if theme matches dark system theme', () => {
        (useColorScheme as jest.Mock).mockReturnValue('dark');
        store.dispatch(setTheme('dark'));
        expect(store.getState().theme.theme).toBe('dark');
        const dispatch = jest.spyOn(store, 'dispatch');
        renderWithProviders(<Themed><Text>Test Child</Text></Themed>, { store });
        expect(dispatch).not.toHaveBeenCalledWith(setTheme('dark'));
    });

    it('dispatches if theme does not match light system theme', () => {
        (useColorScheme as jest.Mock).mockReturnValue('light');
        store.dispatch(setTheme('dark'));
        expect(store.getState().theme.theme).toBe('dark');
        const dispatch = jest.spyOn(store, 'dispatch');
        renderWithProviders(<Themed><Text>Test Child</Text></Themed>, { store });
        expect(dispatch).toHaveBeenCalledWith(setTheme('light'));
    });

    it('dispatches if theme does not match dark system theme', () => {
        (useColorScheme as jest.Mock).mockReturnValue('dark');
        store.dispatch(setTheme('light'));
        expect(store.getState().theme.theme).toBe('light');
        const dispatch = jest.spyOn(store, 'dispatch');
        renderWithProviders(<Themed><Text>Test Child</Text></Themed>, { store });
        expect(dispatch).toHaveBeenCalledWith(setTheme('dark'));
    });
});
