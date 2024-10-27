import React from 'react';
import ThemedMarkdown from '@/components/themed/ThemedMarkdown';
import { Colors } from '@/colors';
import { setTheme } from "@/state";
import {configureStoreWithTheme, renderWithStoreProvider} from './common';

describe('ThemedMarkdown', () => {
    let store;

    beforeEach(() => {
        store = configureStoreWithTheme();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('applies default body style', () => {
        store.dispatch(setTheme('light'));
        const { getByText } = renderWithStoreProvider(
            <ThemedMarkdown>
                {"This is a sample text for body."}
            </ThemedMarkdown>,
            { store }
        );
        const bodyText = getByText("This is a sample text for body.");
        expect(bodyText.props.style.length).toBe(2);
        expect(bodyText.props.style[1].backgroundColor).toBe(Colors.light.background);
        expect(bodyText.props.style[1].color).toBe(Colors.light.text);
    });

    it('applies heading1 style', () => {
        store.dispatch(setTheme('dark'));
        const { getByText } = renderWithStoreProvider(
            <ThemedMarkdown>
                {"# Heading 1"}
            </ThemedMarkdown>,
            { store }
        );
        const heading1 = getByText("Heading 1");
        expect(heading1.props.style.length).toBe(2);
        expect(heading1.props.style[1].backgroundColor).toBe(Colors.dark.background);
        expect(heading1.props.style[1].color).toBe(Colors.dark.text);
    });

    it('applies code block style', () => {
        store.dispatch(setTheme('dark'));
        const { getByText } = renderWithStoreProvider(
            <ThemedMarkdown>
                {"```\nconst codeBlock = true;\n```"}
            </ThemedMarkdown>,
            { store }
        );
        const codeBlock = getByText("const codeBlock = true;");
        expect(codeBlock.props.style.length).toBe(2);
        expect(codeBlock.props.style[1].backgroundColor).toBe(Colors.dark.background);
        expect(codeBlock.props.style[1].color).toBe(Colors.dark.codeColor);
        expect(codeBlock.props.style[1].padding).toBe(3);
        expect(codeBlock.props.style[1].borderWidth).toBe(1);
        expect(codeBlock.props.style[1].borderRadius).toBe(2);
        expect(codeBlock.props.style[1].fontFamily).toBe('monospace');
    });

    it('applies inline code style', () => {
        store.dispatch(setTheme('dark'));
        const { getByText } = renderWithStoreProvider(
            <ThemedMarkdown>
                {"This is inline code: `const inlineCode = true;`"}
            </ThemedMarkdown>,
            { store }
        );
        const inlineCode = getByText("const inlineCode = true;");
        expect(inlineCode.props.style.length).toBe(2);
        expect(inlineCode.props.style[1].backgroundColor).toBe(Colors.dark.background);
        expect(inlineCode.props.style[1].color).toBe(Colors.dark.codeColor);
        expect(inlineCode.props.style[1].padding).toBe(1);
        expect(inlineCode.props.style[1].paddingLeft).toBe(3);
        expect(inlineCode.props.style[1].paddingRight).toBe(3);
        expect(inlineCode.props.style[1].borderWidth).toBe(1);
        expect(inlineCode.props.style[1].borderRadius).toBe(2);
        expect(inlineCode.props.style[1].fontFamily).toBe('monospace');
    });
});
