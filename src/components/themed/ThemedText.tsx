import React from "react";
import { Text, type TextProps, StyleSheet } from 'react-native';
import {componentColor} from '@/colors';

export const TEXT_TYPES = {
    DEFAULT: 'default',
    TITLE: 'title',
    SUBTITLE: 'subtitle',
} as const;

type Props = TextProps & {
    type?: typeof TEXT_TYPES[keyof typeof TEXT_TYPES];
    testID?: string;
};

export default function ThemedText({ type = TEXT_TYPES.DEFAULT, testID, style, ...rest }: Props): React.ReactNode {
    const color = componentColor('text');

    let styleToApply: any = {};
    if (type === TEXT_TYPES.DEFAULT) {
        styleToApply = styles.default;
    } else if (type === TEXT_TYPES.TITLE) {
        styleToApply = styles.title;
    } else if (type === TEXT_TYPES.SUBTITLE) {
        styleToApply = styles.subtitle;
    }

    return (
        <Text
            testID={testID || 'Text'}
            style={[{ color }, styleToApply, style]}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    default: {
        fontSize: 16,
        lineHeight: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 32,
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
