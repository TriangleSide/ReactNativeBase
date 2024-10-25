import React from "react";
import {componentColor} from '@/colors/componentColor';
import {Input, InputProps} from "react-native-elements";

export default function ThemedInput(props: InputProps): React.ReactNode {
    const { inputStyle, ...rest } = props;
    const color = componentColor('text');
    const borderColor = componentColor('listItemBorder')
    return (
        <Input inputStyle={[{ color, borderColor }, inputStyle]} {...rest} />
    )
}
