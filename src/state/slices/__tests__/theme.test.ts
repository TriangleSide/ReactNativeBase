import { configureStore } from '@reduxjs/toolkit';
import { setTheme, themeReducer, selectTheme, Theme } from '@/state';

describe('theme slice', () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: themeReducer,
            preloadedState: {
                theme: null,
            },
        });
    });

    it('should have initial state', () => {
        expect(store.getState().theme).toBe(null);
    });

    it('should handle setTheme', () => {
        const theme: Theme = 'dark';
        store.dispatch(setTheme(theme));
        expect(store.getState().theme).toBe('dark');
    });

    it('should handle setTheme to light', () => {
        const theme: Theme = 'light';
        store.dispatch(setTheme(theme));
        expect(store.getState().theme).toBe('light');
    });

    it('should select the current theme', () => {
        const theme: Theme = 'dark';
        store.dispatch(setTheme(theme));
        const selectedTheme = selectTheme({ theme: store.getState() });
        expect(selectedTheme).toBe('dark');
    });

    it('should handle setTheme to null', () => {
        store.dispatch(setTheme(null));
        expect(store.getState().theme).toBe(null);
    });

    it('should select null theme if no theme is set', () => {
        const selectedTheme = selectTheme({ theme: store.getState() });
        expect(selectedTheme).toBe(null);
    });
});