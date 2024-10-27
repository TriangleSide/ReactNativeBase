import React from 'react';
import { setTheme } from '@/state';
import ThemedCard from '@/components/themed/ThemedCard';
import {configureStoreWithTheme, renderWithStoreProvider} from './common';
import {Colors} from "@/colors";

describe('ThemedCard', () => {
    let store;

    beforeEach(() => {
        store = configureStoreWithTheme();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders with light theme background color', () => {
        store.dispatch(setTheme('light'));
        const { getByTestId } = renderWithStoreProvider(
            <ThemedCard testID={'ThemedCard'}><></></ThemedCard>,
            { store }
        );
        const card = getByTestId('ThemedCard');
        expect(card.props.style.backgroundColor).toBe(Colors.light.background);
    });

    it('renders with dark theme background color', () => {
        store.dispatch(setTheme('dark'));
        const { getByTestId } = renderWithStoreProvider(
            <ThemedCard testID={'ThemedCard'}><></></ThemedCard>,
            { store }
        );
        const card = getByTestId('ThemedCard');
        expect(card.props.style.backgroundColor).toBe(Colors.dark.background);
    });

    it('applies containerStyle passed as props', () => {
        const customStyle = { borderWidth: 2 };
        const { getByTestId } = renderWithStoreProvider(
            <ThemedCard containerStyle={customStyle}><></></ThemedCard>,
            { store }
        );
        const card = getByTestId('Card');
        expect(card.props.style).toHaveProperty('borderWidth', 2);
    });
});