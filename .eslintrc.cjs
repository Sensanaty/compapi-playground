/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  settings: {
    "prettier-vue": {
      SFCBlocks: {
        style: false,
      },
    },
  },
  extends: [
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:vue/vue3-recommended",
    "prettier",
    "plugin:prettier-vue/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "prettier-vue/prettier": ["warn", { trailingComma: "all" }],
  },
};
