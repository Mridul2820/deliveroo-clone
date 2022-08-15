module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': [
      'error',
      {
        'no-inline-styles': false,
        endOfLine: 'auto',
      },
    ],
    'react-native/no-inline-styles': 0,
  },
};
