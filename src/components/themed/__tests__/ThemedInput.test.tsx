import React from 'react';
import { setTheme } from '@/state';
import ThemedInput from '@/components/themed/ThemedInput';
import {configureStoreWithTheme, renderWithStoreProvider} from './common';
import { Colors } from '@/colors';

describe('ThemedInput', () => {
    let store;

    beforeEach(() => {
        store = configureStoreWithTheme();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders with light theme text and border color', () => {
        store.dispatch(setTheme('light'));
        const { getByTestId } = renderWithStoreProvider(
            <ThemedInput testID="ThemedInput" />,
            { store }
        );
        const input = getByTestId('ThemedInput');
        expect(input.props.style.color).toBe(Colors.light.text);
        expect(input.props.style.borderColor).toBe(Colors.light.listItemBorder);
    });

    it('renders with dark theme text and border color', () => {
        store.dispatch(setTheme('dark'));
        const { getByTestId } = renderWithStoreProvider(
            <ThemedInput testID="ThemedInput" />,
            { store }
        );
        const input = getByTestId('ThemedInput');
        expect(input.props.style.color).toBe(Colors.dark.text);
        expect(input.props.style.borderColor).toBe(Colors.dark.listItemBorder);
    });

    it('applies additional props correctly', () => {
        const placeholder = "Enter text here";
        const { getByTestId } = renderWithStoreProvider(
            <ThemedInput placeholder={placeholder} />,
            { store }
        );
        const input = getByTestId('Input');
        expect(input.props.placeholder).toBe(placeholder);
    });
});