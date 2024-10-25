import React from "react";
import {Input, InputProps} from "react-native-elements";
import {componentColor} from '@/colors';

export default function ThemedInput(props: InputProps): React.ReactNode {
    const { inputStyle, ...rest } = props;
    const color = componentColor('text');
    const borderColor = componentColor('listItemBorder')
    return (
        <Input inputStyle={[{ color, borderColor }, inputStyle]} {...rest} />
    )
}
