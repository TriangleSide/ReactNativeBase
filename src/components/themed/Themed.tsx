import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {ThemeProvider, DarkTheme, DefaultTheme} from "@react-navigation/native";
import { selectTheme, setTheme } from '@/state';

interface Props {
    children?: React.ReactNode;
}

export default function Themed(props: Props): React.ReactNode {
    const colorScheme = useColorScheme();
    const systemTheme = colorScheme ?? 'light';
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    useEffect(() => {
        if (theme !== systemTheme) {
            dispatch(setTheme(systemTheme));
        }
    }, [theme, systemTheme]);

    if (theme == null) {
        return <></>;
    } else {
        return (
            <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
                {props.children}
            </ThemeProvider>
        );
    }
};
