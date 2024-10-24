import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';

interface YourComponentProps {
    title: string;
}

const YourComponent: React.FC<YourComponentProps> = ({ title }) => {
    const dispatch = useDispatch();

    const handlePress = () => {
        dispatch({ type: 'YOUR_ACTION' });
    };

    return (
        <View>
            <Text>{title}</Text>
            <Button title="Press me" onPress={handlePress} />
        </View>
    );
};

export default YourComponent;
