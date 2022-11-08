module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest": true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  overrides: [
    {
      files: "*.test.js",
      "rules": {
        "no-unused-expressions": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
  },
};
