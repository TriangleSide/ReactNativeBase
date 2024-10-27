import React from "react";
import {Input, InputProps} from "react-native-elements";
import {componentColor} from '@/colors';

type Props = InputProps & {
    testID?: string;
}

export default function ThemedInput(props: Props): React.ReactNode {
    const { inputStyle, testID, ...rest } = props;
    const color = componentColor('text');
    const borderColor = componentColor('listItemBorder')
    return (
        <Input testID={testID || 'Input'} inputStyle={[{ color, borderColor }, inputStyle]} {...rest} />
    )
}
