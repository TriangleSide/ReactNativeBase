import React from 'react';
import { Text, useColorScheme } from 'react-native';
import { setTheme } from '@/state';
import { Themed } from '@/components';
import {configureStoreWithTheme, renderWithStoreProvider} from "./common";

describe('Themed', () => {
    let store;

    beforeEach(() => {
        store = configureStoreWithTheme();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('sets theme based on light system theme and null state theme', () => {
        store.dispatch(setTheme(null));
        const dispatch = jest.spyOn(store, 'dispatch');
        (useColorScheme as jest.Mock).mockReturnValue('light');
        renderWithStoreProvider(<Themed><Text>Test Child</Text></Themed>, { store });
        expect(store.getState().theme.theme).toBe('light');
        expect(dispatch).toHaveBeenCalledWith(setTheme('light'));
    });

    it('sets theme based on dark system theme and null state theme', () => {
        store.dispatch(setTheme(null));
        const dispatch = jest.spyOn(store, 'dispatch');
        (useColorScheme as jest.Mock).mockReturnValue('dark');
        renderWithStoreProvider(<Themed><Text>Test Child</Text></Themed>, { store });
        expect(store.getState().theme.theme).toBe('dark');
        expect(dispatch).toHaveBeenCalledWith(setTheme('dark'));
    });

    it('does not dispatch if theme matches light system theme', () => {
        (useColorScheme as jest.Mock).mockReturnValue('light');
        store.dispatch(setTheme('light'));
        expect(store.getState().theme.theme).toBe('light');
        const dispatch = jest.spyOn(store, 'dispatch');
        renderWithStoreProvider(<Themed><Text>Test Child</Text></Themed>, { store });
        expect(dispatch).not.toHaveBeenCalledWith(setTheme('light'));
    });

    it('does not dispatch if theme matches dark system theme', () => {
        (useColorScheme as jest.Mock).mockReturnValue('dark');
        store.dispatch(setTheme('dark'));
        expect(store.getState().theme.theme).toBe('dark');
        const dispatch = jest.spyOn(store, 'dispatch');
        renderWithStoreProvider(<Themed><Text>Test Child</Text></Themed>, { store });
        expect(dispatch).not.toHaveBeenCalledWith(setTheme('dark'));
    });

    it('dispatches if theme does not match light system theme', () => {
        (useColorScheme as jest.Mock).mockReturnValue('light');
        store.dispatch(setTheme('dark'));
        expect(store.getState().theme.theme).toBe('dark');
        const dispatch = jest.spyOn(store, 'dispatch');
        renderWithStoreProvider(<Themed><Text>Test Child</Text></Themed>, { store });
        expect(dispatch).toHaveBeenCalledWith(setTheme('light'));
    });

    it('dispatches if theme does not match dark system theme', () => {
        (useColorScheme as jest.Mock).mockReturnValue('dark');
        store.dispatch(setTheme('light'));
        expect(store.getState().theme.theme).toBe('light');
        const dispatch = jest.spyOn(store, 'dispatch');
        renderWithStoreProvider(<Themed><Text>Test Child</Text></Themed>, { store });
        expect(dispatch).toHaveBeenCalledWith(setTheme('dark'));
    });

    it('default to light if useColorScheme returns undefined', () => {
        (useColorScheme as jest.Mock).mockReturnValue(undefined);
        store.dispatch(setTheme(undefined));
        const dispatch = jest.spyOn(store, 'dispatch');
        renderWithStoreProvider(<Themed><Text>Test Child</Text></Themed>, { store });
        expect(dispatch).toHaveBeenCalledWith(setTheme('light'));
    });
});
