import React from 'react';
import { setTheme } from '@/state';
import {configureStoreWithTheme, renderWithStoreProvider} from './common';
import { Colors } from '@/colors';
import {ThemedCard, ThemedCardDivider} from "@/components";

describe('ThemedCardDivider', () => {
    let store;

    beforeEach(() => {
        store = configureStoreWithTheme();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders with light theme color', () => {
        store.dispatch(setTheme('light'));
        const { getByTestId } = renderWithStoreProvider(<ThemedCard><ThemedCardDivider testID="divider" /></ThemedCard>, { store });
        const divider = getByTestId('divider');
        expect(divider.props.style.borderBottomColor).toBe(Colors.light.cardDivider);
        expect(divider.props.style.borderBottomWidth).toBe(2);
    });

    it('renders with dark theme color', () => {
        store.dispatch(setTheme('dark'));
        const { getByTestId } = renderWithStoreProvider(<ThemedCard><ThemedCardDivider testID="divider" /></ThemedCard>, { store });
        const divider = getByTestId('divider');
        expect(divider.props.style.borderBottomColor).toBe(Colors.dark.cardDivider);
        expect(divider.props.style.borderBottomWidth).toBe(2);
    });

    it('applies additional props correctly', () => {
        const additionalProps = {
            width: 3,
        };
        const { getByTestId } = renderWithStoreProvider(<ThemedCard><ThemedCardDivider {...additionalProps} /></ThemedCard>, { store });
        const divider = getByTestId('Card.Divider');
        expect(divider.props.style.borderBottomWidth).toBe(3);
    });
});