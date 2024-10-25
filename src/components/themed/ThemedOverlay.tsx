import React from "react";
import {Overlay, OverlayProps} from "react-native-elements";
import {componentColor} from '@/colors';

export default function ThemedOverlay(props: OverlayProps): React.ReactNode {
    const { overlayStyle, ...rest } = props;
    const backgroundColor = componentColor('background');
    return (
        <Overlay overlayStyle={[{ backgroundColor }, overlayStyle]} {...rest} />
    )
}
