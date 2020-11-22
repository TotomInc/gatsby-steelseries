module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },

  extends: '@totominc/react',

  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    'camelcase': 'off',
    'no-underscore-dangle': 'off',
  },
};
