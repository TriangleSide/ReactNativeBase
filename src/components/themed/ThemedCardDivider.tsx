import React from "react";
import {Card, DividerProps} from "react-native-elements";
import {componentColor} from '@/colors';

type Props = DividerProps & {
    testID?: string;
}

export default function ThemedCardDivider(props: Props): React.ReactNode {
    const {testID, ...rest} = props;
    const color = componentColor('cardDivider');
    return (
        <Card.Divider testID={testID || 'Card.Divider'} color={color} width={2} {...rest} />
    );
};
