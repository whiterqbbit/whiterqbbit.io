import antfu from '@antfu/eslint-config'

export default antfu(
  {
    rules: {
      'vue/singleline-html-element-content-newline': 'off',
      'vue/max-attributes-per-line': 'off',
      'if-newline': 'off',
      'no-console': 'warn',
      'node/prefer-global/process': 'off',
      'vue/prop-name-casing': 'off',
    },
  },
)
