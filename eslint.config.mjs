import js from '@eslint/js'
import nextVitals from 'eslint-config-next/core-web-vitals'
import prettierConfig from 'eslint-config-prettier/flat'
import prettierPlugin from 'eslint-plugin-prettier'
import globals from 'globals'

export default [
  { ignores: ['node_modules/**', '.next/**', 'out/**', '.playwright-mcp/**'] },
  js.configs.recommended,
  ...nextVitals,
  prettierConfig,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.amd },
    },
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
]
