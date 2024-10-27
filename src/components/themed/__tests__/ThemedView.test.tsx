import React from 'react';
import ThemedView from '@/components/themed/ThemedView';
import { Colors } from '@/colors';
import {configureStoreWithTheme, renderWithStoreProvider} from "./common";

describe('ThemedView', () => {
    let store;

    beforeEach(() => {
        store = configureStoreWithTheme();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders with default background color', () => {
        const { getByTestId } = renderWithStoreProvider(<ThemedView testID="ThemedView" />, {store});
        const viewComponent = getByTestId('ThemedView');
        expect(viewComponent.props.style).toEqual(
            expect.arrayContaining([{ backgroundColor: Colors.light.background, maxWidth: 1024 }])
        );
    });

    it('renders with centered style when center prop is true', () => {
        const { getByTestId } = renderWithStoreProvider(<ThemedView testID="ThemedView" centerHorizontally />, {store});
        const viewComponent = getByTestId('ThemedView');
        expect(viewComponent.props.style).toEqual(
            expect.arrayContaining([
                { backgroundColor: Colors.light.background, maxWidth: 1024, marginLeft: 'auto', marginRight: 'auto', width: '100%' },
            ])
        );
    });

    it('does not include centering styles when center prop is false', () => {
        const { getByTestId } = renderWithStoreProvider(<ThemedView testID="ThemedView" centerHorizontally={false} />, {store});
        const viewComponent = getByTestId('ThemedView');
        expect(viewComponent.props.style).not.toContainEqual(
            { marginLeft: 'auto', marginRight: 'auto', width: '100%' }
        );
    });

    it('applies custom styles passed as props', () => {
        const customStyle = { padding: 20 };
        const { getByTestId } = renderWithStoreProvider(<ThemedView style={customStyle} />, {store});
        const viewComponent = getByTestId('View');
        expect(viewComponent.props.style).toEqual(
            expect.arrayContaining([{ backgroundColor: Colors.light.background, maxWidth: 1024 }, customStyle])
        );
    });
});
