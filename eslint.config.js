import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
    globalIgnores(['dist', 'node_modules', 'eslint.config.js']),
    {
        files: ['**/*.{js,jsx}'],
        extends: [
            js.configs.recommended,
            reactPlugin.configs.flat.recommended,
            reactPlugin.configs.flat['jsx-runtime'],
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
            jsxA11y.flatConfigs.recommended,
            importPlugin.flatConfigs.recommended,
        ],
        languageOptions: {
            globals: globals.browser,
            parserOptions: { ecmaFeatures: { jsx: true } },
        },
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
            'quotes': ['error', 'single', { 'avoidEscape': true }],
            'semi': ['error', 'always'],
            'comma-dangle': ['error', 'never'],
            'react/prop-types': 'off',
            'import/extensions': ['error', 'never', {
                'png': 'always',
                'jpg': 'always',
                'jpeg': 'always',
                'gif': 'always',
                'svg': 'always',
                'css': 'always'
            }],
            'import/no-unresolved': 'off'
        }
    }
])
