module.exports = {
  rules: {
    'import/no-restricted-imports': [
      'error',
      {
        paths: ['@mui/x-date-pickers/internals/demo']
      }
    ],
    'padded-blocks': 'off'
  }
};
