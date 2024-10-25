import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, setTheme } from '@/state';

interface Props {
    children?: React.ReactNode;
}

const Themed: React.FC<Props> = ({ children }) => {
    const colorScheme = useColorScheme();
    const systemTheme = colorScheme ?? 'light';
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    useEffect(() => {
        if (theme !== systemTheme) {
            console.debug(`Setting theme to '${systemTheme}'.`);
            dispatch(setTheme(systemTheme));
        }
    }, [theme, systemTheme]);

    if (theme == null) {
        console.debug('Theme is not set.');
        return <></>;
    } else {
        return <>{children}</>;
    }
};

export default Themed;
