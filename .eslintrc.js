module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "next/core-web-vitals",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  globals: {
    React: true,
  },
  plugins: ["simple-import-sort"],
  settings: {
    jest: {
      version: 29,
    },
  },
  overrides: [
    {
      files: ["**/*.test.*", "**/test-utils/*"],
      extends: ["plugin:jest/recommended", "plugin:testing-library/react"],
      plugins: ["jest", "testing-library"],
      env: {
        "jest/globals": true,
      },
    },
  ],
  rules: {
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Node.js builtins prefixed with `node:`.
          ["^node:"],
          // Packages.
          // React, Jest and Next.js
          ["^react", "jest", "^next[^/-]", "^next/"],
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ["^@?\\w"],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ["^"],
          // Relative imports.
          // Anything that starts with a dot.
          ["^\\."],
          // Side effect imports.
          ["^\\u0000"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
  },
};
