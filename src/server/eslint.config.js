import js from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { prettier: eslintPluginPrettier },
    languageOptions: { globals: globals.node },
    rules: { 'prettier/prettier': 'warn' },
  },
];
