module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'airbnb',
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
      
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint','jsx-a11y'],
    rules: {
      // React 18 specific rules
      'react/react-in-jsx-scope': 'off', // Not needed in React 18
      'react/function-component-definition': [
        2,
        { namedComponents: 'arrow-function' },
      ],
      'no-await-in-loop': 'error',
      'require-await': 'error',
      'no-unused-vars': 'warn',
      eqeqeq: 'error',
      'react-hooks/rules-of-hooks': 'error',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      'linebreak-style': 0,
      'react/jsx-props-no-spreading': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      'import/prefer-default-export': 'off',
      'import/export': 0,
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react-hooks/exhaustive-deps': 'off',
      'react/require-default-props': 'off',
      'global-require': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      // Add your custom rules here
    },
    settings: {
      react: {
        version: '18.2', // Specify React 18 version
      },
      'import/parsers': {
    '@typescript-eslint/parser': ['.ts', '.tsx'],
  },
  'import/resolver': {
    typescript: {
      alwaysTryTypes: true,
    },
  },
    },
  };