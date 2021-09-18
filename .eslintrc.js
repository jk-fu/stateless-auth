module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    sourceType: "module",
    parser: "babel-eslint",
    allowImportExportEverywhere: false,
    ecmaVersion: 2020,
  },

  rules: {
  },

  overrides: [
    {
      files: ["**.ts"],

      parserOptions: {
        parser: "@typescript-eslint/parser",
      },

      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        // "plugin:@typescript-eslint/recommended",
      ],

      rules: {
        "@typescript-eslint/member-delimiter-style": [
          "error",
          {
            multiline: {
              delimiter: "none",
              requireLast: true,
            },
            singleline: {
              delimiter: "comma",
              requireLast: false,
            },
          },
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
  ],

  globals: {
    JSX: true,
  },
};