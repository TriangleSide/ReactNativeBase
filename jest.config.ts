import type { Config } from 'jest';

const config: Config = {
    displayName: '@triangleside/reactnativebase',
    preset: 'react-native',
    testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/lib'],
    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!(@react-native|react-native|react-redux|react-native-elements|react-native-size-matters|react-native-ratings|react-native-markdown-display)/)',
    ],
    coveragePathIgnorePatterns: [],
    collectCoverage: true,
    globals: {
        __DEV__: true,
    },
    transform: {
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '\\.[jt]sx?$': 'babel-jest',
    },
    testMatch: [ "**/?(*.)+(spec|test).[jt]s?(x)" ],
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/index.tsx'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    setupFiles: ['<rootDir>/jest.setup.ts']
};

module.exports = config;
