import eslintParser from '@typescript-eslint/parser'
import eslintPlugin from '@typescript-eslint/eslint-plugin'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
    {
        files: ["**/*.ts", "**/*.tsx"],
        ignores: ["**/*.d.*"],
        plugins: {
            eslintPlugin,
            eslintPluginPrettierRecommended,
        },
        languageOptions: {
            parser: eslintParser
        },
    }
];

