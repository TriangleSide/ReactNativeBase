import React from "react";
import {Overlay, OverlayProps} from "react-native-elements";
import {componentColor} from '@/colors';
import {ThemedView} from "@/components";

type Props = OverlayProps & {
    children?: React.ReactNode;
    testID?: string;
}

export default function ThemedOverlay(props: Props): React.ReactNode {
    const { overlayStyle, testID, children, ...rest } = props;
    const backgroundColor = componentColor('background');
    return (
        <Overlay testID={testID || 'Overlay'} overlayStyle={[{ backgroundColor }, overlayStyle]} {...rest} >
            {children}
        </Overlay>
    )
}
