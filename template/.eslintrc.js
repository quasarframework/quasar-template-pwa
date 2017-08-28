module.exports = {
  root: true,
  parserOptions: {
    // move `parser` into `parserOptions` for `eslint-plugin-vue` to work
    // see https://github.com/vuejs/eslint-plugin-vue#couple-faq
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    // https://github.com/vuejs/eslint-plugin-vue#bulb-rules
    'plugin:vue/recommended'
  ],
  plugins: [
    'html',
    'import'
  ],
  settings: {
    // `eslint-plugin-html` only lints `.html` files, leaving `.vue` files to `eslint-plugin-vue`
    'html/html-extensions': ['.html'],
    "html/report-bad-indent": "error"
  },
  globals: {
    'cordova': true,
    'DEV': true,
    'PROD': true,
    '__THEME': true
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'one-var': 0,
    'import/first': 0,
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }],

    // uncomment more vue linting rules below besides `vue/recommended`
    // see https://github.com/vuejs/eslint-plugin-vue#bulb-rules

    // 'vue/no-dupe-keys': [2, { groups: ['asyncData, asyncComputed, subscriptions'] }], // `groups` could include options names used by some popular vue plugins
    // 'vue/no-reserved-keys': 2,
    // 'vue/no-shared-component-data': 2,
    // 'vue/no-template-key': 2,
    // 'vue/require-valid-default-prop': 2,
    // 'vue/return-in-computed-property': 2,
    // 'vue/html-end-tags': 0, // keep off to avoid conflicts against `vue/html-self-closing`
    // 'vue/no-async-in-computed-properties': 2,
    // 'vue/no-duplicate-attributes': 2,
    // 'vue/no-side-effects-in-computed-properties': 2,
    // 'vue/order-in-components': 2,
    // 'vue/require-prop-types': 2,
    // 'vue/attribute-hyphenation': [2, 'always'],
    // 'vue/html-quotes': 2,
    // 'vue/html-self-closing': 2,
    // 'vue/max-attributes-per-line': 0, // keep off to avoid conflicts against default formatting rules of `vetur`
    // 'vue/name-property-casing': [2, 'kebab-case'],
    // 'vue/no-multi-spaces': 0, // keep off to avoid a bug in `eslint-plugin-vue@3.12.0`
    // 'vue/v-bind-style': 2,
    // 'vue/v-on-style': 2,

    // add more customized eslint rules here
    // see https://eslint.org/docs/rules/

  }
}
