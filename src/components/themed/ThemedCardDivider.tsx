import React from "react";
import {Card, DividerProps} from "react-native-elements";
import {componentColor} from '@/colors';

const ThemedCardDivider: React.FC = (props: DividerProps) => {
    const { ...rest } = props;
    const color = componentColor('cardDivider');
    return (
        <Card.Divider color={color} width={2} {...rest} />
    );
};

export default ThemedCardDivider;