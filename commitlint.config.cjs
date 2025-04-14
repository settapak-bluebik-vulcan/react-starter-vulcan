module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [2, 'never'], // Ensure subject is not empty
    'type-empty': [2, 'never'], // Ensure type is not empty
  }
};
