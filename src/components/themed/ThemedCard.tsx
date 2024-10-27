import React from "react";
import {Card, CardProps} from "react-native-elements";
import {componentColor} from '@/colors';

type Props = CardProps & {
    children?: React.ReactNode;
    testID?: string;
}

export default function ThemedCard(props: Props): React.ReactNode {
    const { containerStyle, testID, ...rest } = props;
    const backgroundColor = componentColor('background');
    return (
        // @ts-ignore
        <Card testID={testID || 'Card'} containerStyle={[{ backgroundColor }, containerStyle]} {...rest}>
            {props.children}
        </Card>
    )
}
