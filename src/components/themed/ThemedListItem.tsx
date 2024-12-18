import React from "react";
import {ListItemProps, ListItem } from "react-native-elements";
import {componentColor} from '@/colors';

type Props = ListItemProps & {
    selected: boolean;
    testID?: string;
}

export default function ThemedListItem(props: Props): React.ReactNode {
    const { containerStyle, selected, testID, ...rest } = props;
    const backgroundColor = componentColor('background');
    const listItemBorderColor = componentColor('listItemBorder')
    const selectedColor = componentColor('selected')
    let borderColor = listItemBorderColor
    if (selected) {
        borderColor = selectedColor
    }
    return (
        <ListItem testID={testID || 'ListItem'} containerStyle={[
            {
                backgroundColor,
                borderColor,
                borderBottomWidth:7,
                borderTopWidth:7,
                borderLeftWidth:7,
                borderRightWidth:7,
                marginBottom: 15,
            },
            containerStyle]}
            {...rest}
        />
    )
}
