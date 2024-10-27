import React from 'react';
import { View } from 'react-native';
import { setTheme } from '@/state';
import ThemedListItem from '@/components/themed/ThemedListItem';
import {configureStoreWithTheme, renderWithStoreProvider} from './common';
import { Colors } from '@/colors';

describe('ThemedListItem', () => {
    let store;

    beforeEach(() => {
        store = configureStoreWithTheme();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders with light theme background and border color', async () => {
        store.dispatch(setTheme('light'));
        const { getByTestId } = renderWithStoreProvider(
            <ThemedListItem testID="ThemedListItem" selected={false} />,
            { store }
        );
        const listItemView = await getByTestId('ThemedListItem').findByType(View);
        expect(listItemView.props.style.backgroundColor).toBe(Colors.light.background);
        expect(listItemView.props.style.borderColor).toBe(Colors.light.listItemBorder);
    });

    it('renders with dark theme background and border color', async () => {
        store.dispatch(setTheme('dark'));
        const { getByTestId } = renderWithStoreProvider(
            <ThemedListItem testID="ThemedListItem" selected={false} />,
            { store }
        );
        const listItemView = await getByTestId('ThemedListItem').findByType(View);
        expect(listItemView.props.style.backgroundColor).toBe(Colors.dark.background);
        expect(listItemView.props.style.borderColor).toBe(Colors.dark.listItemBorder);
    });

    it('applies selected color when selected', async () => {
        store.dispatch(setTheme('light'));
        const { getByTestId } = renderWithStoreProvider(
            <ThemedListItem testID="ThemedListItem" selected={true} />,
            { store }
        );
        const listItemView = await getByTestId('ThemedListItem').findByType(View);
        expect(listItemView.props.style.borderColor).toBe(Colors.light.selected);
    });

    it('applies additional styles passed as props', async () => {
        const customStyle = { marginBottom: 20 };
        const { getByTestId } = renderWithStoreProvider(
            <ThemedListItem selected={false} containerStyle={customStyle} />,
            { store }
        );
        const listItemView = await getByTestId('ListItem').findByType(View);
        expect(listItemView.props.style.marginBottom).toBe(customStyle.marginBottom);
    });
});
