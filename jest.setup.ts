jest.mock(
    './node_modules/react-native/Libraries/LayoutAnimation/LayoutAnimation.js'
);

jest.mock(
    './node_modules/react-native/Libraries/Animated/NativeAnimatedHelper.js'
);

jest.mock('react-native', () => {
    const ReactNative = jest.requireActual('react-native');
    return Object.setPrototypeOf(
        {
            NativeModules: {
                ...ReactNative.NativeModules,
                SettingsManager: {
                    settings: {
                        AppleLocale: 'en_US',
                        AppleLanguages: ['en'],
                    },
                },
                PlatformConstants: {
                    forceTouchAvailable: false,
                },
            },
            useColorScheme: jest.fn(),
        },
        ReactNative
    );
});
