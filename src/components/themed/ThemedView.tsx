import React from "react";
import {View, type ViewProps} from 'react-native';
import {componentColor} from '@/colors';

type Props = ViewProps & {
    centerHorizontally?: boolean;
    testID?: string;
}

export default function ThemedView(props: Props): React.ReactNode {
    const { style, testID, centerHorizontally, ...rest } = props;
    const backgroundColor = componentColor('background');
    let styleToSet: any;
    if (centerHorizontally) {
        styleToSet = { backgroundColor, maxWidth: 1024, marginLeft: 'auto', marginRight: 'auto', width: "100%" };
    } else {
        styleToSet = { backgroundColor, maxWidth: 1024 };
    }
    return (
        <View testID={testID || 'View'} style={[styleToSet, style]} {...rest} />
    )
}
