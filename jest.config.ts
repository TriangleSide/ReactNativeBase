import type { Config } from 'jest';

const config: Config = {
    displayName: '@rnb',
    preset: 'react-native',
    testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/lib'],
    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!(@react-native|react-native|react-redux)/)',
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
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/index.tsx'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/lib/$1',
    },
    setupFiles: ['<rootDir>/jest.setup.ts']
};

module.exports = config;
