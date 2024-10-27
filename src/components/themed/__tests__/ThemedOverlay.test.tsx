import React from 'react';
import ThemedOverlay from '@/components/themed/ThemedOverlay';
import { Colors } from '@/colors';
import { configureStoreWithTheme, renderWithStoreProvider } from './common';
import { setTheme } from '@/state';
import { View } from 'react-native';

describe('ThemedOverlay', () => {
    let store;

    beforeEach(() => {
        store = configureStoreWithTheme();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders with light theme background color and correct children', () => {
        store.dispatch(setTheme('light'));
        const { getByTestId } = renderWithStoreProvider(
            <ThemedOverlay testID="ThemedOverlay" isVisible={true}>
                <View testID="Child1" />
                <View testID="Child2" />
                <View testID="Child3" />
            </ThemedOverlay>,
            { store }
        );
        const overlay = getByTestId('ThemedOverlay');
        expect(overlay.children.length).toBe(2);
        // The children are: [0 - the backdrop] and [1 - the overlay].
        const overlayView = overlay.children[1].props.children;
        expect(overlayView.props.style.backgroundColor).toBe(Colors.light.background);
        expect(overlayView.props.children.length).toBe(3);
        expect(overlayView.props.children[0].props.testID).toBe('Child1');
        expect(overlayView.props.children[1].props.testID).toBe('Child2');
        expect(overlayView.props.children[2].props.testID).toBe('Child3');
    });

    it('renders with dark theme background color and correct children', () => {
        store.dispatch(setTheme('dark'));
        const { getByTestId } = renderWithStoreProvider(
            <ThemedOverlay testID="ThemedOverlay" isVisible={true}>
                <View testID="Child1" />
                <View testID="Child2" />
            </ThemedOverlay>,
            { store }
        );
        const overlay = getByTestId('ThemedOverlay');
        expect(overlay.children.length).toBe(2);
        // The children are: [0 - the backdrop] and [1 - the overlay].
        const overlayView = overlay.children[1].props.children;
        expect(overlayView.props.style.backgroundColor).toBe(Colors.dark.background);
        expect(overlayView.props.children.length).toBe(2);
        expect(overlayView.props.children[0].props.testID).toBe('Child1');
        expect(overlayView.props.children[1].props.testID).toBe('Child2');
    });

    it('applies overlayStyle passed as props', () => {
        const customStyle = { borderWidth: 2 };
        const { getByTestId } = renderWithStoreProvider(
            <ThemedOverlay overlayStyle={customStyle} isVisible={true}>
                <View />
            </ThemedOverlay>,
            { store }
        );
        const overlay = getByTestId('Overlay');
        expect(overlay.children.length).toBe(2);
        // The children are: [0 - the backdrop] and [1 - the overlay].
        const overlayView = overlay.children[1].props.children;
        expect(overlayView.props.style).toHaveProperty('borderWidth', 2);
    });
});