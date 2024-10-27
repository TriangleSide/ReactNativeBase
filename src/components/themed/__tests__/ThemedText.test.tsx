import React from 'react';
import ThemedText, { TEXT_TYPES } from '@/components/themed/ThemedText';
import { Colors } from '@/colors';
import {configureStoreWithTheme, renderWithStoreProvider} from './common';
import {setTheme} from "@/state";

describe('ThemedText', () => {
    let store;

    beforeEach(() => {
        store = configureStoreWithTheme();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders with default text style', () => {
        store.dispatch(setTheme('light'));
        const { getByText } = renderWithStoreProvider(<ThemedText type={TEXT_TYPES.DEFAULT}>Default Text</ThemedText>, {store});
        const textComponent = getByText('Default Text');
        expect(textComponent.props.style).toEqual(
            expect.arrayContaining([{ color: Colors.light.text }, { fontSize: 16, lineHeight: 24 }])
        );
    });

    it('renders with title text style', () => {
        store.dispatch(setTheme('light'));
        const { getByText } = renderWithStoreProvider(<ThemedText type={TEXT_TYPES.TITLE}>Title Text</ThemedText>, {store});
        const textComponent = getByText('Title Text');
        expect(textComponent.props.style).toEqual(
            expect.arrayContaining([
                { color: Colors.light.text },
                { fontSize: 32, fontWeight: 'bold', lineHeight: 32, marginBottom: 16 },
            ])
        );
    });

    it('renders with subtitle text style', () => {
        store.dispatch(setTheme('light'));
        const { getByText } = renderWithStoreProvider(<ThemedText type={TEXT_TYPES.SUBTITLE}>Subtitle Text</ThemedText>, {store});
        const textComponent = getByText('Subtitle Text');
        expect(textComponent.props.style).toEqual(
            expect.arrayContaining([
                { color: Colors.light.text },
                { fontSize: 20, fontWeight: 'bold' },
            ])
        );
    });

    it('renders with null text style', () => {
        store.dispatch(setTheme('dark'));
        const { getByText } = renderWithStoreProvider(<ThemedText type={null}>Null Text</ThemedText>, {store});
        const textComponent = getByText('Null Text');
        expect(textComponent.props.style).toEqual(
            expect.arrayContaining([{ color: Colors.dark.text }, {}])
        );
    });

    it('applies custom styles passed as props', () => {
        store.dispatch(setTheme('dark'));
        const customStyle = { marginTop: 10 };
        const { getByText } = renderWithStoreProvider(
            <ThemedText style={customStyle}>Custom Styled Text</ThemedText>,
            {store}
        );
        const textComponent = getByText('Custom Styled Text');
        expect(textComponent.props.style).toEqual(
            expect.arrayContaining([{ color: Colors.dark.text }, { fontSize: 16, lineHeight: 24 }, customStyle])
        );
    });
});
