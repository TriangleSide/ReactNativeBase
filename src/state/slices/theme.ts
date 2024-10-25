import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from "reselect";

export type Theme = 'dark' | 'light' | null;

export interface ThemeState {
    theme: Theme;
}

const initialState: ThemeState = {
    theme: null,
};

export const themeSliceName = 'theme';
const slice = createSlice({
    name: themeSliceName,
    initialState: initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>): void => {
            state.theme = action.payload;
        },
    },
});

export const { setTheme } = slice.actions;
export const themeReducer = slice.reducer;

export const selectTheme = createSelector(
    (state: { [themeSliceName]: ThemeState }): ThemeState => state.theme,
    (themeState: ThemeState): Theme => themeState.theme
);
